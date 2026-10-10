import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { clinic, doctors, serviceIds, serviceImages } from "@/lib/clinic/data";
import { useCopy } from "@/lib/clinic/store";
import { Eyebrow, PhotoFrame, Section } from "./section";

export function HomeHero() {
  const t = useCopy();
  return (
    <section className="px-5 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="stagger-in">
          <p className="text-xs font-semibold uppercase tracking-label text-leaf">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {t.hero.lead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link to="/wizyta">
                {t.hero.cta}
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={clinic.phoneHref}>
                <Phone />
                {t.hero.call}
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-subtle">{t.hero.hours}</p>
        </div>
        <PhotoFrame
          src="/images/hero.jpg"
          alt="MiDental Stomatologia, Tukanów 12"
          imgClassName="aspect-photo min-h-72"
        />
      </div>
    </section>
  );
}

export function HomeStats() {
  const t = useCopy();
  return (
    <section className="bg-primary text-primary-fg">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {t.stats.map((stat) => (
          <div key={stat.label} className="border-primary-fg/10 px-5 py-8 sm:px-8 sm:py-10 not-last:border-b md:border-b-0 md:not-last:border-r">
            <dt className="font-display text-3xl font-medium tracking-tight text-leaf sm:text-4xl">
              {stat.value}
            </dt>
            <dd className="mt-2 text-sm text-primary-fg/75">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function HomeAbout() {
  const t = useCopy();
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="grid gap-3">
          <PhotoFrame src="/images/room.jpg" imgClassName="aspect-room" />
          <div className="grid grid-cols-2 gap-3">
            <PhotoFrame src="/images/smile.jpg" imgClassName="aspect-room object-top" />
            <PhotoFrame src="/images/lounge.jpg" imgClassName="aspect-room" />
          </div>
        </div>
        <div>
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-5 leading-relaxed text-muted">{t.about.body}</p>
          <ul className="mt-8 space-y-5">
            {t.about.points.map((point) => (
              <li key={point.title} className="border-l-2 border-leaf pl-4">
                <p className="font-medium">{point.title}</p>
                <p className="mt-1 text-sm text-muted">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function HomePrevent() {
  const t = useCopy();
  const point = t.about.points[0];
  return (
    <section className="px-5 pb-4 sm:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-primary text-primary-fg lg:grid-cols-2">
        <img
          src="/images/prevent.jpg"
          alt=""
          className="aspect-square w-full object-cover lg:aspect-auto lg:h-full"
        />
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-label text-leaf">{t.about.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {point.title}
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-primary-fg/80">{point.text}</p>
        </div>
      </div>
    </section>
  );
}

export function HomeServices() {
  const t = useCopy();
  const featured = serviceIds.filter((id) => id !== "consult");
  const pictured = ["hygiene", "conservative", "aesthetic", "pediatric"] as const;
  const rest = featured.filter((id) => !pictured.includes(id as (typeof pictured)[number]));
  return (
    <Section>
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <Eyebrow>{t.services.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-muted">{t.services.lead}</p>
        </div>
        <Button asChild variant="outline">
          <Link to="/uslugi">
            {t.services.all}
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pictured.map((id) => {
          const item = t.services.items[id];
          return (
            <Link
              key={id}
              to="/uslugi"
              hash={id}
              className="group overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-border-hover)]"
            >
              <img
                src={serviceImages[id]}
                alt=""
                className="clinic-photo aspect-room w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-xl font-medium">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((id) => {
          const item = t.services.items[id];
          return (
            <Link
              key={id}
              to="/uslugi"
              hash={id}
              className="group rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-border-hover)]"
            >
              <h3 className="font-display text-xl font-medium">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

export function HomeTeam() {
  const t = useCopy();
  const doc = doctors[0];
  const person = t.team.people[doc.id];
  return (
    <Section className="bg-surface">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <PhotoFrame
            src={doc.image}
            alt={person.name}
            imgClassName="aspect-portrait object-[50%_18%]"
          />
        </div>
        <div className="lg:col-span-7">
          <Eyebrow>{t.team.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {t.team.title}
          </h2>
          <p className="mt-4 max-w-xl text-muted">{t.team.lead}</p>
          <h3 className="mt-8 font-display text-2xl font-medium">{person.name}</h3>
          <p className="mt-1 text-primary">{person.role}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">{person.bio}</p>
          <Button asChild className="mt-8">
            <Link to="/zespol">
              {t.team.all}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function HomeReviews() {
  const t = useCopy();
  return (
    <Section className="bg-primary text-primary-fg">
      <Eyebrow>
        <span className="text-leaf">{t.reviews.eyebrow}</span>
      </Eyebrow>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
        {t.reviews.title}
      </h2>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {t.reviews.items.map((review) => (
          <blockquote
            key={review.name}
            className="rounded-xl bg-primary-hover p-6 text-primary-fg"
          >
            <p className="font-display text-5xl leading-none text-leaf" aria-hidden>
              “
            </p>
            <p className="mt-3 text-sm leading-relaxed text-primary-fg/90">{review.text}</p>
            <footer className="mt-6 text-sm font-medium">
              {review.name}
              <span className="ml-2 font-normal text-primary-fg/60">{review.place}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}

export function HomeFaq() {
  const t = useCopy();
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow>{t.faq.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {t.faq.title}
          </h2>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible>
            {t.faq.items.map((item, i) => (
              <AccordionItem key={item.q} value={`q-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
}

export function VisitCta() {
  const t = useCopy();
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center overflow-hidden rounded-2xl bg-bg-warm lg:grid-cols-2">
        <div className="p-8 sm:p-12">
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {t.cta.title}
          </h2>
          <p className="mt-4 max-w-md text-muted">{t.cta.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/wizyta">{t.cta.book}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={clinic.whatsappHref} target="_blank" rel="noreferrer">
                {clinic.whatsapp}
              </a>
            </Button>
          </div>
        </div>
        <img src="/images/lounge.jpg" alt="" className="aspect-room h-full w-full object-cover" />
      </div>
    </section>
  );
}
