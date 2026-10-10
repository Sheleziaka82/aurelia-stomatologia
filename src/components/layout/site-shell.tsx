import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { Toaster } from "sonner";
import { clinic } from "@/lib/clinic/data";
import { useCopy } from "@/lib/clinic/store";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  const t = useCopy();
  return (
    <div className="flex min-h-svh flex-col bg-bg text-fg">
      <a
        href="#tresc"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-fg"
      >
        {t.nav.skip}
      </a>
      <SiteHeader />
      <main id="tresc" className="flex-1">
        {children}
      </main>
      <SiteFooter />
      <a
        href={clinic.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 left-5 z-30 inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-fg shadow-[var(--shadow-border-hover)]"
      >
        <MessageCircle className="size-4" />
        {clinic.whatsapp}
      </a>
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "clinic-toast font-sans",
        }}
      />
    </div>
  );
}