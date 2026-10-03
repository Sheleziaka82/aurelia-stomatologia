import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { clinic, doctors, serviceIds } from "@/lib/clinic/data";
import { useCopy } from "@/lib/clinic/store";
import { Eyebrow, Section } from "./section";

export function HomeHero() {
  const t = useCopy();
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:py-16">
        <div className="stagger-in lg:col-span-6">
          <p className="text-xs font-semibold uppercase tracking-label text-muted">
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
          <p className="mt-5 text-sm text-subtle">{t.hero.hours}</p>
        </div>
        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-2xl bg-bg-warm p-2">
            <img
              src="/images/hero.jpg"
              alt=""
              className="clinic-photo aspect-photo h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeStats() {
  const t = useCopy();
  return (
    <Section className="border-y border-border bg-surface py-10 sm:py-12">
      <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {t.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="font-display text-3xl font-medium tracking-tight text-primary sm:text-4xl">
              {stat.value}
            </dt>
            <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function HomeAbout() {
  const t = useCopy();
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-bg-warm p-2">
          <img
            src="/images/room.jpg"
            alt=""
            className="clinic-photo aspect-room w-full rounded-xl object-cover"
          />
        </div>
        <div>
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-5 leading-relaxed text-muted">{t.about.body}</p>
          <ul className="mt-8 space-y-5">
            {t.about.points.map((point) => (
              <li key={point.title} className="border-l-2 border-primary pl-4">
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

export function HomeServices() {
  const t = useCopy();
  const featured = serviceIds.filter((id) => id !== "consult");
  return (
    <Section className="bg-surface">
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
        {featured.map((id) => {
          const item = t.services.items[id];
          return (
            <Link
              key={id}
              to="/uslugi"
              hash={id}
              className="group rounded-xl bg-bg p-5 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 hover:shadow-[var(--shadow-border-hover)]"
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
  return (
    <Section>
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <Eyebrow>{t.team.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {t.team.title}
          </h2>
          <p className="mt-4 text-muted">{t.team.lead}</p>
        </div>
        <Button asChild variant="outline">
          <Link to="/zespol">
            {t.team.all}
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.map((doc) => {
          const person = t.team.people[doc.id];
          return (
            <article key={doc.id} className="group">
              <div className="overflow-hidden rounded-xl bg-bg-warm p-1.5">
                <img
                  src={doc.image}
                  alt={person.name}
                  className="clinic-photo aspect-portrait w-full rounded-lg object-cover object-top grayscale transition-[filter] duration-300 group-hover:grayscale-0"
                />
              </div>
              <h3 className="mt-4 font-display text-lg font-medium">{person.name}</h3>
              <p className="mt-1 text-sm text-muted">{person.role}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

export function HomeReviews() {
  const t = useCopy();
  return (
    <Section className="bg-primary text-primary-fg">
      <Eyebrow>
        <span className="text-primary-fg/70">{t.reviews.eyebrow}</span>
      </Eyebrow>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
        {t.reviews.title}
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {t.reviews.items.map((review) => (
          <blockquote
            key={review.name}
            className="rounded-xl bg-primary-hover p-6 text-primary-fg"
          >
            <p className="text-sm leading-relaxed text-primary-fg/90">“{review.text}”</p>
            <footer className="mt-5 text-sm font-medium">
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
    <Section className="bg-bg-warm">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {t.cta.title}
          </h2>
          <p className="mt-4 max-w-md text-muted">{t.cta.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/wizyta">{t.cta.book}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={clinic.phoneHref}>
                <Phone />
                {clinic.phone}
              </a>
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl bg-surface p-2">
          <img
            src="/images/lounge.jpg"
            alt=""
            className="clinic-photo aspect-room w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
