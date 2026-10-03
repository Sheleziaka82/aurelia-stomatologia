import { createFileRoute } from "@tanstack/react-router";
import { BookingForm } from "@/components/clinic/booking-form";
import { PageHero } from "@/components/clinic/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { clinic } from "@/lib/clinic/data";
import { copy } from "@/lib/clinic/copy";
import { useCopy } from "@/lib/clinic/store";

export const Route = createFileRoute("/wizyta")({
  head: () => ({
    meta: [{ title: copy.pl.meta.bookTitle }],
  }),
  component: BookPage,
});

function BookPage() {
  const t = useCopy();
  return (
    <SiteShell>
      <PageHero eyebrow={t.book.eyebrow} title={t.book.title} lead={t.book.lead} />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <BookingForm />
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-xl bg-bg-warm p-6 sm:p-8">
            <p className="font-display text-2xl font-medium">{clinic.fullName}</p>
            <p className="mt-3 text-sm text-muted">
              {clinic.street}
              <br />
              {clinic.postal} {clinic.city}
            </p>
            <p className="mt-6 text-sm">
              <a className="font-medium text-primary hover:underline" href={clinic.phoneHref}>
                {clinic.phone}
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a className="hover:underline" href={`mailto:${clinic.email}`}>
                {clinic.email}
              </a>
            </p>
            <ul className="mt-8 space-y-2 text-sm text-muted">
              {t.contact.hours.map((row) => (
                <li key={row.day} className="flex justify-between gap-4">
                  <span>{row.day}</span>
                  <span className="tabular-nums text-fg">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </SiteShell>
  );
}
