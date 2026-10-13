import Image from "next/image";
import { business } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  if (light) {
    return (
      <a href="#home" className="flex items-center gap-3">
        <Image
          src="/brand/logo-mark.png"
          alt=""
          width={342}
          height={335}
          className="h-12 w-12"
        />
        <span>
          <span className="block font-serif text-lg leading-none text-white">{business.name}</span>
          <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65">
            Cleaning Services
          </span>
        </span>
      </a>
    );
  }

  return (
    <a href="#home" className="flex items-center">
      <Image
        src="/brand/logo-lockup.png"
        alt={`${business.fullName}`}
        width={520}
        height={192}
        priority
        className="h-11 w-auto sm:h-12"
        style={{ width: "auto" }}
      />
    </a>
  );
}
