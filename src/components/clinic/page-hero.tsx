export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-border bg-bg-warm">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-label text-muted">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
          {title}
        </h1>
        {lead ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lead}</p> : null}
      </div>
    </section>
  );
}
