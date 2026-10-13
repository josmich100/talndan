import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Pwa } from "@/components/Pwa";
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

export const viewport: Viewport = {
  themeColor: "#142b3b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Tal n’ Dan Cleaning Services | A Cleaner Space, A Better Day",
  description:
    "Tal n’ Dan Cleaning Services provides reliable home and business cleaning in Keroka and Kisii, Kenya. Request a free quote today.",
  applicationName: "Tal n’ Dan",
  appleWebApp: {
    capable: true,
    title: "Tal n’ Dan",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Tal n’ Dan Cleaning Services",
    description:
      "Reliable home and business cleaning in Keroka and Kisii, Kenya. Request a free quote today.",
    locale: "en_KE",
    type: "website",
    images: [{ url: "/brand/og.png", width: 1893, height: 800, alt: "Tal n’ Dan Cleaning Services" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="min-h-full">
        {children}
        <Pwa />
      </body>
    </html>
  );
}
