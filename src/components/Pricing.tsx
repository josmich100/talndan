import { RevealGroup } from "@/components/motion";
import { packages } from "@/lib/site";

const marks = ["🧼", "✨", "🏢"];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, #e7f6ef 0%, #f7f3ea 55%, #fff 100%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1120px] px-5 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine">Simple packages</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-navy sm:text-5xl">Choose your clean</h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Starting prices in Kenyan shillings for Keroka and Kisii. We confirm the exact quote
            for your space before any work begins.
          </p>
        </div>
        <RevealGroup className="grid items-stretch gap-4 lg:grid-cols-3" stagger={0.12}>
          {packages.map((item, index) => (
            <article
              key={item.title}
              data-reveal
              className={`flex h-full flex-col overflow-hidden rounded-xl p-px ${
                item.featured
                  ? "bg-gradient-to-br from-gold via-pine to-navy shadow-[0_18px_40px_rgba(27,122,101,0.16)]"
                  : "bg-navy/10"
              }`}
            >
              <div className="flex h-full flex-col bg-white p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-pine">{item.tag}</p>
                  <span className="text-2xl" aria-hidden>
                    {marks[index]}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-2xl text-navy">{item.title}</h3>
                <p className={`mt-4 font-serif text-4xl tracking-tight ${item.featured ? "gradient-text" : "text-navy"}`}>
                  {item.price}
                </p>
                <p className="text-sm text-muted">{item.priceNote}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-ink/85">
                      <span aria-hidden>✅</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold ${
                    item.featured
                      ? "btn-pine"
                      : "bg-white text-navy shadow-[inset_0_0_0_1px_rgba(20,43,59,0.14)] hover:bg-foam"
                  }`}
                >
                  {item.cta}
                </a>
              </div>
            </article>
          ))}
        </RevealGroup>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted">
          Final prices depend on bedrooms or floor area, property condition, requested tasks,
          supplies, travel and how often you book. Nothing is confirmed until Tal n’ Dan sends
          your quotation.
        </p>
      </div>
    </section>
  );
}
