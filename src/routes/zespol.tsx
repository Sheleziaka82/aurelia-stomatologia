import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/clinic/page-hero";
import { VisitCta } from "@/components/clinic/home-sections";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { copy } from "@/lib/clinic/copy";
import { doctors } from "@/lib/clinic/data";
import { useCopy } from "@/lib/clinic/store";

export const Route = createFileRoute("/zespol")({
  head: () => ({
    meta: [{ title: copy.pl.meta.teamTitle }],
  }),
  component: TeamPage,
});

function TeamPage() {
  const t = useCopy();
  return (
    <SiteShell>
      <PageHero eyebrow={t.team.eyebrow} title={t.team.title} lead={t.team.lead} />
      <div className="mx-auto max-w-6xl space-y-20 px-5 py-16 sm:px-8">
        {doctors.map((doc, i) => {
          const person = t.team.people[doc.id];
          const reverse = i % 2 === 1;
          return (
            <article
              key={doc.id}
              className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
            >
              <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
                <div className="overflow-hidden rounded-2xl bg-bg-warm p-2">
                  <img
                    src={doc.image}
                    alt={person.name}
                    className="clinic-photo aspect-portrait w-full rounded-xl object-cover object-top"
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <h2 className="font-display text-3xl font-medium tracking-tight">
                  {person.name}
                </h2>
                <p className="mt-2 text-primary">{person.role}</p>
                <p className="mt-5 max-w-xl leading-relaxed text-muted">{person.bio}</p>
                <dl className="mt-8 flex flex-wrap gap-8 text-sm">
                  <div>
                    <dt className="text-subtle">{t.team.years}</dt>
                    <dd className="mt-1 font-medium tabular-nums">{doc.years}</dd>
                  </div>
                  <div>
                    <dt className="text-subtle">{t.team.speaks}</dt>
                    <dd className="mt-1 font-medium">{doc.langs.join(" · ")}</dd>
                  </div>
                </dl>
                <Button asChild className="mt-8">
                  <Link to="/wizyta">{t.nav.book}</Link>
                </Button>
              </div>
            </article>
          );
        })}
      </div>
      <VisitCta />
    </SiteShell>
  );
}
