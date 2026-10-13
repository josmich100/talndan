export const business = {
  name: "Tal n’ Dan",
  fullName: "Tal n’ Dan Cleaning Services",
  tagline: "A cleaner space, a better day.",
  phoneDisplay: "+254 719 512 609",
  phoneTel: "+254719512609",
  whatsapp: "254719512609",
  area: "Keroka and Kisii, Kenya",
  areaShort: "Keroka and Kisii",
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Packages" },
  { href: "#about", label: "Why choose us" },
  { href: "#contact", label: "Contact" },
] as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const whatsappHello =
  "Hello Tal n’ Dan Cleaning Services, I would like a cleaning quote.";

export const services = [
  {
    title: "Home Cleaning",
    description:
      "Routine cleaning for apartments and houses, including dusting, floors, kitchen surfaces, bathrooms and general tidying.",
    cta: "Request home cleaning",
    emoji: "🏠",
    image: "/images/living.jpg",
    alt: "Sunlit living room with a sofa, chairs, and plants",
  },
  {
    title: "Deep Cleaning",
    description:
      "A more detailed clean for built-up dirt and areas that need extra attention. Scope depends on property condition.",
    cta: "Request deep cleaning",
    emoji: "✨",
    image: "/images/kitchen.jpg",
    alt: "Bright white kitchen with a marble island",
  },
  {
    title: "Move-in / Move-out",
    description:
      "Prepare a property for new occupants or handover with a detailed clean of agreed rooms and surfaces.",
    cta: "Plan a move clean",
    emoji: "📦",
    image: "/images/move.jpg",
    alt: "Modern house exterior in warm daylight",
  },
  {
    title: "Office Cleaning",
    description:
      "Cleaning schedules for offices, shops and other workplaces, with one-off or recurring service options.",
    cta: "Request an office quote",
    emoji: "🏢",
    image: "/images/office.jpg",
    alt: "Bright open office with desks and large windows",
  },
  {
    title: "Sofa & Carpet Cleaning",
    description:
      "Cleaning for sofas, carpets and other agreed soft furnishings, with pricing based on item size, material and condition.",
    cta: "Ask about upholstery",
    emoji: "🛋️",
    image: "/images/sofa.jpg",
    alt: "Green velvet sofa in a styled living room",
  },
  {
    title: "Post-renovation Cleaning",
    description:
      "Clean-up after repairs or renovations, quoted according to dust levels, debris, access and site size.",
    cta: "Arrange a site assessment",
    emoji: "🧹",
    image: "/images/renovation.jpg",
    alt: "Freshly finished room ready for a post-renovation clean",
  },
] as const;

export const packages = [
  {
    tag: "Routine refresh",
    title: "Standard Home Clean",
    price: "KSh 2,500",
    priceNote: "Starting from",
    description: "For regular upkeep of a small home or apartment.",
    points: [
      "Dusting and surface wipe-down",
      "Sweeping and mopping",
      "Kitchen and bathroom surfaces",
      "Waste collection in agreed rooms",
    ],
    cta: "Get exact price",
    featured: false,
  },
  {
    tag: "Extra attention",
    title: "Deep Clean",
    price: "KSh 5,000",
    priceNote: "Starting from",
    description: "For a more thorough one-off clean.",
    points: [
      "Standard clean tasks",
      "Detailed kitchen and bathroom work",
      "Doors, skirting and reachable detail areas",
      "Scope agreed before booking",
    ],
    cta: "Get exact price",
    featured: true,
  },
  {
    tag: "Business care",
    title: "Office / Contract",
    price: "Custom",
    priceNote: "Quoted to your site",
    description: "Flexible cleaning based on site and frequency.",
    points: [
      "One-off or recurring visits",
      "Workplace-specific checklist",
      "Frequency options",
      "Written scope and quotation",
    ],
    cta: "Request a site quote",
    featured: false,
  },
] as const;

export const benefits = [
  {
    emoji: "📝",
    title: "Clear scope",
    text: "Agree on rooms, tasks and special requests before the visit.",
  },
  {
    emoji: "🗓️",
    title: "Flexible scheduling",
    text: "Request a convenient day and time; booking is confirmed by the team.",
  },
  {
    emoji: "💬",
    title: "Easy enquiries",
    text: "Share your requirements through the quote form or WhatsApp.",
  },
  {
    emoji: "🏡",
    title: "For different spaces",
    text: "Home, office and turnover cleaning options in one place.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    text: "Choose a service and share the property size, location and preferred date.",
  },
  {
    number: "02",
    title: "Confirm your quote",
    text: "We clarify the scope and confirm the price and availability before booking.",
  },
  {
    number: "03",
    title: "Get your space refreshed",
    text: "Prepare access and any special instructions for the agreed service.",
  },
] as const;

export const faqs = [
  {
    question: "How do I get an accurate price?",
    answer:
      "Share the property size, location, condition, requested tasks and preferred date. Tal n’ Dan confirms the final written quote before work starts.",
  },
  {
    question: "Do you offer recurring cleaning?",
    answer:
      "Use the enquiry form to ask about weekly, fortnightly or monthly visits. Availability and contract rates are confirmed by the team.",
  },
  {
    question: "Do you bring cleaning supplies and equipment?",
    answer:
      "Ask what supplies and equipment are included when you request a quote, so the visit matches your home or workplace.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "Tal n’ Dan serves Keroka and Kisii. Confirm availability for your specific estate and requested date when enquiring.",
  },
] as const;

export const serviceOptions = [
  "Standard home cleaning",
  "Deep cleaning",
  "Move-in / move-out cleaning",
  "Office cleaning",
  "Sofa / carpet cleaning enquiry",
  "Post-renovation cleaning",
  "Other",
] as const;

export const sizeOptions = [
  "Not sure",
  "Bedsitter / studio",
  "1 bedroom",
  "2 bedrooms",
  "3 bedrooms",
  "4+ bedrooms",
  "Office / commercial",
] as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  name: business.fullName,
  description:
    "Home and business cleaning in Keroka and Kisii, Kenya, including routine, deep, move, office, upholstery and post-renovation cleans.",
  telephone: business.phoneTel,
  areaServed: ["Keroka", "Kisii"],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Kisii",
    addressCountry: "KE",
  },
  priceRange: "KES 2500+",
};
