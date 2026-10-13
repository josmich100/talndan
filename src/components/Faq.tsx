"use client";

import { useState } from "react";
import Image from "next/image";
import { faqs } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pattern-soft pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-[1120px] gap-8 px-5 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="relative min-h-72 overflow-hidden rounded-xl bg-navy lg:sticky lg:top-32">
          <Image
            src="/images/kitchen.jpg"
            alt="Clean white kitchen ready for the day"
            fill
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
          <div className="absolute bottom-0 p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Questions</p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight">Good to know</h2>
          </div>
        </div>
        <div className="rounded-xl bg-white/80 p-2 ring-1 ring-navy/10 backdrop-blur-sm sm:p-4">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.question} className="border-b border-line px-2 py-5 last:border-b-0">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-navy"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  {item.question}
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-mint to-gold/40 text-lg leading-none text-pine transition ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                {isOpen ? <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{item.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
