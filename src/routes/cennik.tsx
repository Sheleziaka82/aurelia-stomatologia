import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/clinic/page-hero";
import { VisitCta } from "@/components/clinic/home-sections";
import { SiteShell } from "@/components/layout/site-shell";
import { copy } from "@/lib/clinic/copy";
import { useCopy } from "@/lib/clinic/store";

export const Route = createFileRoute("/cennik")({
  head: () => ({
    meta: [{ title: copy.pl.meta.pricesTitle }],
  }),
  component: PricesPage,
});

function PricesPage() {
  const t = useCopy();
  return (
    <SiteShell>
      <PageHero
        eyebrow={t.prices.eyebrow}
        title={t.prices.title}
        lead={t.prices.lead}
        image="/images/smile.jpg"
      />
      <div className="mx-auto max-w-6xl space-y-8 px-5 py-16 sm:px-8">
        {t.prices.groups.map((group) => (
          <section
            key={group.name}
            className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]"
          >
            <h2 className="flex items-center gap-3 border-b border-border px-6 py-5 font-display text-2xl font-medium">
              <span className="h-6 w-1 rounded-full bg-leaf" aria-hidden />
              {group.name}
            </h2>
            <table className="w-full text-sm">
              <tbody>
                {group.rows.map((row) => (
                  <tr key={row.item} className="border-b border-border last:border-0 hover:bg-bg">
                    <td className="px-6 py-3.5 text-fg">{row.item}</td>
                    <td className="px-6 py-3.5 text-right font-medium tabular-nums text-primary">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
        <p className="max-w-3xl text-sm leading-relaxed text-muted">{t.prices.note}</p>
      </div>
      <VisitCta />
    </SiteShell>
  );
}
