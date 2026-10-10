export function PageHero({
  eyebrow,
  title,
  lead,
  image,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: string;
}) {
  return (
    <section className="overflow-hidden border-b border-border bg-surface">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-12">
        <div className="px-5 py-14 sm:px-8 sm:py-16 lg:col-span-7 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-label text-leaf">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{lead}</p>
          ) : null}
        </div>
        {image ? (
          <div className="relative hidden min-h-72 lg:col-span-5 lg:block">
            <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        ) : null}
      </div>
    </section>
  );
}