import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-16 sm:px-8 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-label text-leaf">{children}</p>
  );
}

export function PhotoFrame({
  src,
  alt = "",
  className,
  imgClassName,
}: {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-2xl bg-bg-warm p-2", className)}>
      <img
        src={src}
        alt={alt}
        className={cn("clinic-photo w-full rounded-xl object-cover", imgClassName)}
      />
    </div>
  );
}