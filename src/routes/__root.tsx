import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { hydrateLang, useLang } from "@/lib/clinic/store";
import appCss from "../styles.css?url";

const APP_NAME = "MiDental";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "theme-color", content: "#016B3A" },
      {
        name: "description",
        content:
          "Prywatny gabinet stomatologiczny MiDental w Starej Iwicznej. Tukanów 12. Pierwszy przegląd w roku bezpłatny.",
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;1,400&family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
});

function DocumentLang() {
  const lang = useLang();
  useEffect(() => {
    hydrateLang();
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}

function RootDocument() {
  return (
    <html lang="pl" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <DocumentLang />
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
