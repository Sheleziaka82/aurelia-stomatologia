import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/clinic/page-hero";
import { VisitCta } from "@/components/clinic/home-sections";
import { SiteShell } from "@/components/layout/site-shell";
import { clinic } from "@/lib/clinic/data";
import { copy } from "@/lib/clinic/copy";
import { useCopy } from "@/lib/clinic/store";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [{ title: copy.pl.meta.contactTitle }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const t = useCopy();
  return (
    <SiteShell>
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} lead={t.contact.lead} />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl font-medium">{t.contact.address}</h2>
            <p className="mt-3 text-muted">
              {clinic.street}
              <br />
              {clinic.postal} {clinic.city}
            </p>
            <p className="mt-4">
              <a className="font-medium text-primary hover:underline" href={clinic.phoneHref}>
                {clinic.phone}
              </a>
            </p>
            <p className="mt-1">
              <a className="hover:underline" href={`mailto:${clinic.email}`}>
                {clinic.email}
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium">{t.contact.hoursTitle}</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {t.contact.hours.map((row) => (
                <li key={row.day} className="flex max-w-sm justify-between gap-4">
                  <span className="text-muted">{row.day}</span>
                  <span className="tabular-nums">{row.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">{t.contact.parking}</p>
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded-2xl bg-bg-warm p-2">
            <iframe
              title={t.contact.map}
              src={clinic.mapEmbed}
              className="aspect-room h-full min-h-72 w-full rounded-xl border-0 bg-surface"
              loading="lazy"
            />
          </div>
          <p className="mt-3">
            <a
              href={clinic.mapLink}
              className="text-sm font-medium text-primary hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.openMap}
            </a>
          </p>
        </div>
      </div>
      <VisitCta />
    </SiteShell>
  );
}
