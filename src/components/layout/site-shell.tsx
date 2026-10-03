import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { useCopy } from "@/lib/clinic/store";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  const t = useCopy();
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-fg"
      >
        {t.nav.skip}
      </a>
      <SiteHeader />
      <main id="content">{children}</main>
      <SiteFooter />
      <Toaster
        position="top-center"
        toastOptions={{
          className: "aurelia-toast font-sans",
        }}
      />
    </div>
  );
}
