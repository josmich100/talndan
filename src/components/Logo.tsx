import { business } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-3">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-pine to-pine-deep text-sm font-bold tracking-tight text-white">
        T&D
        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 bg-gold" />
      </span>
      <span>
        <span
          className={`block font-serif text-lg leading-none ${light ? "text-white" : "text-navy"}`}
        >
          {business.name}
        </span>
        <span
          className={`mt-1 block text-[11px] font-semibold uppercase tracking-[0.16em] ${light ? "text-white/65" : "text-muted"}`}
        >
          Cleaning Services
        </span>
      </span>
    </a>
  );
}
