import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { PageHero } from "@/components/clinic/page-hero";
import { VisitCta } from "@/components/clinic/home-sections";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { copy } from "@/lib/clinic/copy";
import { serviceIds, serviceImages } from "@/lib/clinic/data";
import { useCopy } from "@/lib/clinic/store";

export const Route = createFileRoute("/uslugi")({
  head: () => ({
    meta: [{ title: copy.pl.meta.servicesTitle }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const t = useCopy();
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash]);

  return (
    <SiteShell>
      <PageHero
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        lead={t.services.lead}
        image="/images/room.jpg"
      />
      <div className="mx-auto max-w-6xl space-y-16 px-5 py-16 sm:px-8">
        {serviceIds.map((id, i) => {
          const item = t.services.items[id];
          const reverse = i % 2 === 1;
          return (
            <article
              key={id}
              id={id}
              className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div className={reverse ? "lg:order-2" : undefined}>
                <div className="overflow-hidden rounded-2xl bg-bg-warm p-2">
                  <img
                    src={serviceImages[id]}
                    alt=""
                    className="clinic-photo aspect-room w-full rounded-xl object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-label text-muted">
                  0{i + 1}
                </p>
                <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">
                  {item.name}
                </h2>
                <p className="mt-4 leading-relaxed text-muted">{item.body}</p>
                <Button asChild className="mt-6">
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
