import Image from "next/image";
import { RevealGroup } from "@/components/motion";
import { benefits } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pattern-soft pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-[1120px] items-stretch gap-6 px-5 sm:px-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative flex min-h-[480px] flex-col justify-end overflow-hidden bg-navy text-white">
          <Image
            src="/images/cleaning.jpg"
            alt="Cleaner wiping a window with a yellow cloth"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/25" />
          <div className="relative z-10 p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The Tal n’ Dan approach</p>
            <h2 className="mt-4 max-w-md font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              We take the work off your hands.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
              Our aim is to make arranging a clean straightforward: understand what you need, agree
              on the scope, confirm the price and schedule the service.
            </p>
            <a href="#contact" className="btn-gold mt-8 inline-flex w-fit rounded-lg px-5 py-3 text-sm font-semibold">
              Tell us what you need
            </a>
          </div>
        </div>
        <RevealGroup className="grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <article key={benefit.title} data-reveal className="bg-white p-5 ring-1 ring-navy/10">
              <span className="grid h-12 w-12 place-items-center bg-gradient-to-br from-mint via-white to-gold/40 text-2xl ring-1 ring-pine/15">
                <span aria-hidden>{benefit.emoji}</span>
              </span>
              <h3 className="mt-4 font-serif text-2xl text-navy">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.text}</p>
            </article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
