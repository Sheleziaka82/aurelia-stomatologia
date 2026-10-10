import type { ReactNode } from "react";
import { Toaster } from "sonner";
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
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "clinic-toast font-sans",
        }}
      />
    </div>
  );
}
