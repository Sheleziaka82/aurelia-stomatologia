import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { langs, type Lang } from "@/lib/clinic/data";
import { setLang, useCopy, useLang } from "@/lib/clinic/store";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

const nav = [
  { to: "/", key: "home" as const },
  { to: "/uslugi", key: "services" as const },
  { to: "/zespol", key: "team" as const },
  { to: "/cennik", key: "prices" as const },
  { to: "/kontakt", key: "contact" as const },
];

export function SiteHeader() {
  const t = useCopy();
  const lang = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150",
                  active ? "text-primary" : "text-muted hover:text-fg",
                )}
              >
                {t.nav[item.key]}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch lang={lang} label={t.nav.lang} />
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/wizyta">{t.nav.book}</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-border bg-bg lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex min-h-11 items-center rounded-md px-3 text-base font-medium text-fg"
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <Link to="/wizyta">{t.nav.book}</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function LangSwitch({ lang, label }: { lang: Lang; label: string }) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex rounded-md bg-bg-warm p-0.5"
    >
      {langs.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={cn(
            "min-h-8 min-w-8 rounded-sm px-2 text-xs font-semibold uppercase tracking-wide transition-colors duration-150",
            lang === code ? "bg-surface text-fg shadow-[var(--shadow-border)]" : "text-muted",
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
