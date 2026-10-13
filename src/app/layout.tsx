import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tal n’ Dan Cleaning Services | A Cleaner Space, A Better Day",
  description:
    "Tal n’ Dan Cleaning Services provides reliable home and business cleaning in Keroka and Kisii, Kenya. Request a free quote today.",
  openGraph: {
    title: "Tal n’ Dan Cleaning Services",
    description:
      "Reliable home and business cleaning in Keroka and Kisii, Kenya. Request a free quote today.",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
