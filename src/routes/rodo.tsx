import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/clinic/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { copy } from "@/lib/clinic/copy";
import { useCopy } from "@/lib/clinic/store";

export const Route = createFileRoute("/rodo")({
  head: () => ({
    meta: [{ title: copy.pl.meta.rodoTitle }],
  }),
  component: RodoPage,
});

function RodoPage() {
  const t = useCopy();
  return (
    <SiteShell>
      <PageHero eyebrow={t.footer.rodo} title={t.rodo.title} lead={t.rodo.updated} />
      <div className="mx-auto max-w-3xl space-y-5 px-5 py-16 text-muted leading-relaxed sm:px-8">
        {t.rodo.body.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
    </SiteShell>
  );
}
