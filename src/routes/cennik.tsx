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
      <PageHero eyebrow={t.prices.eyebrow} title={t.prices.title} lead={t.prices.lead} />
      <div className="mx-auto max-w-6xl space-y-10 px-5 py-16 sm:px-8">
        {t.prices.groups.map((group) => (
          <section
            key={group.name}
            className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]"
          >
            <h2 className="border-b border-border px-6 py-4 font-display text-2xl font-medium">
              {group.name}
            </h2>
            <table className="w-full text-sm">
              <tbody>
                {group.rows.map((row) => (
                  <tr key={row.item} className="border-b border-border last:border-0">
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
