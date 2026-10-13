"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { business, nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const ratios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let next = "";
        let best = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > best) {
            best = ratio;
            next = `#${id}`;
          }
        }
        if (best > 0) setActive(next);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.2, 0.45, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-0 z-40 bg-white">
      <header className="border-b border-line/80 bg-white shadow-[0_8px_24px_rgba(20,43,59,0.06)]">
        <div className="bg-gradient-to-r from-navy-deep via-navy to-[#163e36] text-[11px] text-white/75 sm:text-xs">
        <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-3 px-5 py-2 sm:px-6">
          <p className="truncate tracking-[0.04em]">Home · Office · Move-in / Move-out</p>
          <a
            href={`https://wa.me/${business.whatsapp}`}
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="grid h-5 w-5 place-items-center rounded-md bg-[#25D366] text-white">
              <WhatsAppMark className="h-3.5 w-3.5" />
            </span>
            <span className="hidden min-[380px]:inline">{business.phoneDisplay}</span>
          </a>
        </div>
        </div>
        <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-3 px-5 py-2.5 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((item) => {
              const current = active === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  onClick={() => setActive(item.href)}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    current ? "bg-mint text-pine" : "text-navy/80 hover:bg-foam hover:text-pine"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <a
            href="#contact"
            className="btn-pine hidden rounded-lg px-4 py-2.5 text-sm font-semibold shadow-[0_8px_18px_rgba(27,122,101,0.22)] md:inline-flex"
          >
            Get a Free Quote
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-white text-navy md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
        {open ? (
          <div id="mobile-menu" className="border-t border-line/80 bg-paper/70 px-3 py-3 md:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {nav.map((item) => {
                const current = active === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    onClick={() => {
                      setActive(item.href);
                      setOpen(false);
                    }}
                    className={`rounded-lg px-3 py-3 text-base font-semibold ${
                      current ? "bg-mint text-pine" : "text-navy hover:bg-white"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-pine mt-3 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold"
            >
              Get a Free Quote
            </a>
          </div>
        ) : null}
      </header>
    </div>
  );
}

function WhatsAppMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className ?? ""}`} aria-hidden>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.44zM12.07 21.3h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.38a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.89-9.89 9.89zm5.42-7.4c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34z" />
    </svg>
  );
}
