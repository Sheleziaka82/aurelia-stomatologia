import { Link } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic/data";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string; invert?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("flex items-center text-fg no-underline", className)}
      aria-label={clinic.fullName}
    >
      <img
        src="/images/logo.png"
        alt=""
        className="h-7 w-auto max-w-[150px] object-contain object-left sm:h-10 sm:max-w-[210px]"
      />
    </Link>
  );
}
