import { createFileRoute } from "@tanstack/react-router";
import {
  HomeAbout,
  HomeFaq,
  HomeHero,
  HomeReviews,
  HomeServices,
  HomeStats,
  HomeTeam,
  VisitCta,
} from "@/components/clinic/home-sections";
import { SiteShell } from "@/components/layout/site-shell";
import { clinic } from "@/lib/clinic/data";
import { copy } from "@/lib/clinic/copy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: copy.pl.meta.homeTitle },
      { name: "description", content: copy.pl.meta.homeDesc },
    ],
  }),
  component: Home,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinic.fullName,
  image: "/images/hero.jpg",
  telephone: clinic.phone,
  email: clinic.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mokotowska 48",
    addressLocality: "Warszawa",
    postalCode: clinic.postal,
    addressCountry: "PL",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
};

function Home() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHero />
      <HomeStats />
      <HomeAbout />
      <HomeServices />
      <HomeTeam />
      <HomeReviews />
      <HomeFaq />
      <VisitCta />
    </SiteShell>
  );
}
