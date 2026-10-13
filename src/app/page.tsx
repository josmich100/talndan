import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Quote } from "@/components/Quote";
import { Services } from "@/components/Services";
import { Steps } from "@/components/Steps";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { MotionBoot } from "@/components/motion";
import { jsonLd } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <MotionBoot />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Pricing />
        <About />
        <Steps />
        <Quote />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
