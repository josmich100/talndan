import Image from "next/image";
import { RevealGroup } from "@/components/motion";
import { steps } from "@/lib/site";

const marks = ["📝", "🤝", "✨"];

export function Steps() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <Image
        src="/images/interior.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.18]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/88 to-foam" />
      <div className="pattern-soft pointer-events-none absolute inset-0 opacity-80" aria-hidden />
      <div className="relative mx-auto w-full max-w-[1120px] px-5 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine">How it works</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-navy sm:text-5xl">Three simple steps</h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            No complicated booking process. Tell us about your space and we will take it from there.
          </p>
        </div>
        <RevealGroup className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.number} data-reveal className="bg-white/90 p-6 ring-1 ring-navy/10 backdrop-blur-sm">
              <div className="flex items-end justify-between">
                <span className="gradient-text font-serif text-5xl leading-none">{step.number}</span>
                <span className="text-2xl" aria-hidden>
                  {marks[index]}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-2xl text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
