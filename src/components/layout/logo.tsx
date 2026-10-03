import { Link } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic/data";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("text-primary", className)} aria-hidden>
      <path
        fill="currentColor"
        d="M16 3.5 5.8 28h4.3l2.1-5.6h7.6L22 28h4.2L16 3.5Zm-2.3 15.2L16 11.2l2.3 7.5h-4.6Z"
      />
      <path
        d="M10.6 21.4c1.9 1.6 8.9 1.6 10.8 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn("flex items-center gap-2.5 text-fg no-underline", className)}
    >
      <LogoMark className="size-8" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg tracking-tight">{clinic.name}</span>
        <span className="text-xs font-medium uppercase tracking-widest text-muted">
          Stomatologia
        </span>
      </span>
    </Link>
  );
}
