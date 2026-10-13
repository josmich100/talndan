import Image from "next/image";
import { RevealGroup } from "@/components/motion";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="pattern-soft pointer-events-none absolute inset-0 opacity-80" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 bg-gradient-to-br from-gold/40 to-transparent blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-[1120px] px-5 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine">What we do</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-navy sm:text-5xl">
            Cleaning made simple
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            From routine upkeep to a detailed refresh, choose the service that suits your space.
            Final scope and price are confirmed before work begins.
          </p>
        </div>
        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              data-reveal
              className="group flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-navy/10"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-gold/20" />
                <span className="absolute left-3 top-3 grid h-11 w-11 place-items-center bg-white/92 text-2xl shadow-sm">
                  <span aria-hidden>{service.emoji}</span>
                </span>
                <span className="absolute bottom-3 right-3 font-serif text-sm text-white/85">0{index + 1}</span>
              </div>
              <div className="flex flex-1 flex-col bg-gradient-to-b from-white to-foam p-5">
                <h3 className="font-serif text-2xl text-navy">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-pine">
                  {service.cta}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
