import Image from "next/image";
import { QuoteForm } from "@/components/QuoteForm";
import { business } from "@/lib/site";

export function Quote() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 text-white sm:py-24">
      <Image
        src="/images/interior.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-[#12343a]/90 to-[#1b4a4d]/82" />
      <div className="relative mx-auto grid w-full max-w-[1120px] items-start gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Let’s get started</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Request your cleaning quote.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            Complete the details and send your request directly to WhatsApp. The team can then
            confirm availability and pricing.
          </p>
          <a href={`tel:${business.phoneTel}`} className="mt-8 inline-block font-serif text-3xl tracking-tight text-white">
            {business.phoneDisplay}
          </a>
          <p className="mt-1 text-sm text-white/70">Phone and WhatsApp</p>
          <p className="mt-5 text-sm text-white/80">
            Service area
            <span className="mt-1 block text-base font-semibold text-white">{business.area}</span>
          </p>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
