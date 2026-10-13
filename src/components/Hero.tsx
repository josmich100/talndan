"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { business } from "@/lib/site";

gsap.registerPlugin(useGSAP);

const checks = [
  "Thoughtful attention to detail",
  "Cleaning for your needs",
  "A simple booking process",
];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const motion = gsap.matchMedia();
      motion.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        timeline
          .from("[data-hero='kicker']", { y: 18, opacity: 0, duration: 0.45 })
          .from("[data-hero='title']", { y: 56, opacity: 0, duration: 0.9 }, "-=0.15")
          .from("[data-hero='copy']", { y: 24, opacity: 0, duration: 0.65 }, "-=0.55")
          .from("[data-hero='actions'] > *", { y: 16, opacity: 0, duration: 0.45, stagger: 0.08 }, "-=0.4")
          .from("[data-hero='photo']", { scale: 1.14, duration: 1.35, ease: "power2.out" }, 0.1)
          .from("[data-hero='panel']", { y: 28, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.7");

      });
    },
    { scope: root },
  );

  return (
    <section id="home" ref={root} className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 12% 20%, rgba(242,181,68,0.45), transparent 28%), radial-gradient(circle at 80% 0%, rgba(27,122,101,0.28), transparent 32%), linear-gradient(160deg, #f4efe4 0%, #e7f4ee 48%, #f7f3ea 100%)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-[1120px] items-center gap-10 px-5 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:pb-24 lg:pt-14">
        <div>
          <p
            data-hero="kicker"
            className="inline-flex items-center gap-2 rounded-lg bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-pine-deep shadow-[inset_0_0_0_1px_rgba(27,122,101,0.18)]"
          >
            <span className="text-base leading-none" aria-hidden>
              🌿
            </span>
            A fresh start begins here
          </p>
          <h1
            data-hero="title"
            className="mt-5 font-serif text-[clamp(2.8rem,6.2vw,5.2rem)] leading-[0.94] tracking-[-0.045em] text-navy"
          >
            A cleaner space.
            <span className="mt-1 block italic text-pine">A better day.</span>
          </h1>
          <p data-hero="copy" className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Make more room for what matters. {business.fullName} helps homes and workplaces feel
            fresher with cleaning tailored to your space, schedule and needs.
          </p>
          <div data-hero="actions" className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="btn-pine inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold">
              Request a Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-navy shadow-[inset_0_0_0_1px_rgba(20,43,59,0.14)] transition hover:bg-mint"
            >
              Explore Services
            </a>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-muted">
            {["Clear quotes", "Flexible scheduling", "Home & business"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden>✅</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative h-[360px] overflow-hidden rounded-xl bg-navy shadow-[0_18px_40px_rgba(20,43,59,0.16)] sm:h-[440px] lg:h-[520px]">
            <Image
              data-hero="photo"
              src="/images/living.jpg"
              alt="Sunlit living room with a sofa, chairs, and plants"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-[center_42%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              <p className="rounded-lg bg-gold px-3 py-2 text-sm font-extrabold text-navy">Fresh feels good.</p>
              <p className="rounded-lg bg-navy/80 px-3 py-2 text-sm font-semibold text-white">{business.areaShort}</p>
            </div>
          </div>
          <div className="relative z-10 mt-3 grid grid-cols-[0.86fr_1.14fr] gap-3 lg:absolute lg:bottom-4 lg:left-4 lg:right-4 lg:mt-0">
            <div data-hero="panel" className="relative h-28 overflow-hidden rounded-xl ring-4 ring-white sm:h-32">
              <Image
                src="/images/kitchen.jpg"
                alt="Bright kitchen with white cabinets and a clean counter"
                fill
                sizes="240px"
                className="object-cover object-[center_22%]"
              />
            </div>
            <div data-hero="panel" className="rounded-xl bg-white/95 p-3 shadow-[0_16px_40px_rgba(20,43,59,0.16)] ring-1 ring-white backdrop-blur-sm">
              <p className="font-serif text-lg leading-none text-navy">Your space, refreshed.</p>
              <ul className="mt-2 space-y-1.5">
                {checks.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-muted sm:text-sm">
                    <span aria-hidden>✨</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
