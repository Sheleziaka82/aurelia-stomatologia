import { Link } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic/data";
import { useCopy } from "@/lib/clinic/store";
import { Logo } from "./logo";

export function SiteFooter() {
  const t = useCopy();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-leaf bg-primary text-primary-fg">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div className="space-y-4">
          <div className="inline-flex rounded-lg bg-surface px-3 py-2">
            <Logo />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-primary-fg/75">{t.footer.blurb}</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-medium">{clinic.street}</p>
          <p className="text-primary-fg/75">
            {clinic.postal} {clinic.city}
          </p>
          <p>
            <a className="hover:underline" href={clinic.phoneHref}>
              {clinic.phone}
            </a>
          </p>
          <p>
            <a className="hover:underline" href={`mailto:${clinic.email}`}>
              {clinic.email}
            </a>
          </p>
          <p>
            <a
              className="hover:underline"
              href={clinic.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              {clinic.whatsapp}
            </a>
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <Link to="/uslugi" className="block hover:underline">
            {t.nav.services}
          </Link>
          <Link to="/zespol" className="block hover:underline">
            {t.nav.team}
          </Link>
          <Link to="/cennik" className="block hover:underline">
            {t.nav.prices}
          </Link>
          <Link to="/wizyta" className="block hover:underline">
            {t.nav.book}
          </Link>
          <Link to="/rodo" className="block text-primary-fg/75 hover:underline">
            {t.footer.rodo}
          </Link>
        </div>
      </div>
      <div className="border-t border-primary-fg/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-primary-fg/60 sm:flex-row sm:justify-between sm:px-8">
          <p>
            © {year} {t.footer.legal}
          </p>
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
