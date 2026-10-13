import { CopyrightYear } from "@/components/CopyrightYear";
import { Logo } from "@/components/Logo";
import { business, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-[#123f3a] text-white/75">
      <div className="pattern-soft pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto w-full max-w-[1120px] px-5 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Cleaning support for homes and workplaces in {business.areaShort}. {business.tagline}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Explore</h2>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Footer">
              {nav.map((item) => (
                <a key={item.href} href={item.href} className="text-sm hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Contact</h2>
            <p className="mt-4 text-sm">
              Phone / WhatsApp
              <a href={`tel:${business.phoneTel}`} className="mt-1 block font-semibold text-white">
                {business.phoneDisplay}
              </a>
            </p>
            <p className="mt-4 text-sm">
              Service area
              <span className="mt-1 block font-semibold text-white">{business.area}</span>
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> {business.fullName}
          </p>
          <p>A booking is confirmed only after we reply with your quote.</p>
        </div>
      </div>
    </footer>
  );
}
