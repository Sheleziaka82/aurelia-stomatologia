import { useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  APPOINTMENTS_KEY,
  doctorIds,
  isSlotTaken,
  serviceIds,
  slotsForDate,
  type Appointment,
  type DoctorId,
  type Lang,
  type ServiceId,
} from "@/lib/clinic/data";
import { useCopy, useLang } from "@/lib/clinic/store";
import { cn } from "@/lib/utils";

function upcomingDays(count = 10): string[] {
  const out: string[] = [];
  const d = new Date();
  d.setHours(12, 0, 0, 0);
  for (let i = 0; i < 21 && out.length < count; i++) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() === 0) continue;
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    out.push(`${y}-${m}-${day}`);
  }
  return out;
}

function formatDay(iso: string, lang: Lang) {
  const locale = lang === "pl" ? "pl-PL" : lang === "ru" ? "ru-RU" : "en-GB";
  return new Date(`${iso}T12:00:00`).toLocaleDateString(locale, {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-danger">{message}</p>;
}

export function BookingForm() {
  const t = useCopy();
  const lang = useLang();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState<ServiceId | "">("");
  const [doctor, setDoctor] = useState<DoctorId | "any">("any");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState<Appointment | null>(null);
  const [busy, setBusy] = useState(false);

  const days = useMemo(() => upcomingDays(), []);
  const slots = useMemo(() => slotsForDate(date), [date]);

  function validate() {
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = t.book.errors.name;
    if (phone.trim().length < 7) next.phone = t.book.errors.phone;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = t.book.errors.email;
    if (!service) next.service = t.book.errors.service;
    if (!date) next.date = t.book.errors.date;
    if (!time) next.time = t.book.errors.time;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate() || !service) return;
    setBusy(true);
    const appointment: Appointment = {
      id: crypto.randomUUID(),
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      service,
      doctor,
      date,
      time,
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };
    const existing: Appointment[] = JSON.parse(
      window.localStorage.getItem(APPOINTMENTS_KEY) ?? "[]",
    );
    window.localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify([appointment, ...existing]));
    setDone(appointment);
    setBusy(false);
    toast.success(t.toast.booked);
  }

  if (done) {
    const serviceName = t.services.items[done.service].name;
    const doctorName =
      done.doctor === "any" ? t.book.doctorAny : t.team.people[done.doctor].name;
    return (
      <div className="rounded-xl bg-surface p-8 shadow-[var(--shadow-border)]">
        <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-fg">
          <Check className="size-5" />
        </div>
        <h2 className="mt-5 font-display text-3xl font-medium">{t.book.successTitle}</h2>
        <p className="mt-3 text-muted">{t.book.successBody}</p>
        <dl className="mt-8 space-y-3 text-sm">
          <div className="flex justify-between gap-4 border-b border-border py-2">
            <dt className="text-muted">{t.book.name}</dt>
            <dd className="font-medium">{done.name}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-border py-2">
            <dt className="text-muted">{t.book.service}</dt>
            <dd className="font-medium">{serviceName}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-border py-2">
            <dt className="text-muted">{t.book.doctor}</dt>
            <dd className="font-medium">{doctorName}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-border py-2">
            <dt className="text-muted">{t.book.date}</dt>
            <dd className="font-medium tabular-nums">
              {done.date} · {done.time}
            </dd>
          </div>
        </dl>
        <Button
          className="mt-8"
          variant="outline"
          onClick={() => {
            setDone(null);
            setName("");
            setPhone("");
            setEmail("");
            setService("");
            setDoctor("any");
            setDate("");
            setTime("");
            setMessage("");
          }}
        >
          {t.book.another}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="name">{t.book.name}</Label>
          <Input
            id="name"
            className="mt-1.5"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FieldError message={errors.name} />
        </div>
        <div>
          <Label htmlFor="phone">{t.book.phone}</Label>
          <Input
            id="phone"
            className="mt-1.5"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <FieldError message={errors.phone} />
        </div>
        <div>
          <Label htmlFor="email">{t.book.email}</Label>
          <Input
            id="email"
            className="mt-1.5"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FieldError message={errors.email} />
        </div>
        <div>
          <Label htmlFor="service">{t.book.service}</Label>
          <select
            id="service"
            className="mt-1.5 flex h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
            value={service}
            onChange={(e) => setService(e.target.value as ServiceId | "")}
          >
            <option value="" />
            {serviceIds.map((id) => (
              <option key={id} value={id}>
                {t.services.items[id].name}
              </option>
            ))}
          </select>
          <FieldError message={errors.service} />
        </div>
        <div>
          <Label htmlFor="doctor">{t.book.doctor}</Label>
          <select
            id="doctor"
            className="mt-1.5 flex h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value as DoctorId | "any")}
          >
            <option value="any">{t.book.doctorAny}</option>
            {doctorIds.map((id) => (
              <option key={id} value={id}>
                {t.team.people[id].name}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <p className="text-sm font-medium text-fg" id="date-label">
            {t.book.date}
          </p>
          <div className="mt-2 flex flex-wrap gap-2" role="listbox" aria-labelledby="date-label">
            {days.map((iso) => (
              <button
                key={iso}
                type="button"
                role="option"
                aria-selected={date === iso}
                className={cn(
                  "min-h-11 rounded-md px-3 text-sm capitalize transition-colors duration-150",
                  date === iso
                    ? "bg-primary text-primary-fg"
                    : "bg-bg-warm text-fg hover:bg-border",
                )}
                onClick={() => {
                  setDate(iso);
                  setTime("");
                }}
              >
                {formatDay(iso, lang)}
              </button>
            ))}
          </div>
          <FieldError message={errors.date} />
        </div>
        <div className="sm:col-span-2">
          <p className="text-sm font-medium text-fg" id="time-label">
            {t.book.time}
          </p>
          {date ? (
            <div className="mt-2 flex flex-wrap gap-2" role="listbox" aria-labelledby="time-label">
              {slots.map((slot) => {
                const taken = isSlotTaken(date, slot);
                return (
                  <button
                    key={slot}
                    type="button"
                    role="option"
                    disabled={taken}
                    aria-selected={time === slot}
                    className={cn(
                      "min-h-11 min-w-16 rounded-md px-3 text-sm tabular-nums transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-40",
                      time === slot
                        ? "bg-primary text-primary-fg"
                        : "bg-bg-warm text-fg hover:bg-border",
                    )}
                    onClick={() => setTime(slot)}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="mt-2 text-sm text-subtle">{t.book.pickDate}</p>
          )}
          <FieldError message={errors.time} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">{t.book.message}</Label>
          <Textarea
            id="message"
            className="mt-1.5"
            value={message}
            placeholder={t.book.messagePh}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <Button type="submit" className="mt-6 w-full sm:w-auto" disabled={busy}>
        {busy ? t.book.submitting : t.book.submit}
      </Button>
    </form>
  );
}
