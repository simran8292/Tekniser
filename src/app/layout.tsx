import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://takniser.com"),
  title: {
    default: "TAKNISER ONE GLOBE — Global Industrial, Technology & Trading Conglomerate",
    template: "%s | TAKNISER ONE GLOBE",
  },
  description:
    "TAKNISER ONE GLOBE is a global industrial, technology, manufacturing, sourcing, logistics and international trading conglomerate with 100+ years of German engineering heritage, operating in 190+ countries across 6 continents.",
  keywords: [
    "TAKNISER", "ONE GLOBE", "industrial conglomerate", "German engineering",
    "global trading", "industrial manufacturing", "sourcing", "logistics",
    "Vision 2046", "Hesse Germany", "EPC", "global supply chain",
  ],
  authors: [{ name: "TAKNISER GmbH" }],
  creator: "TAKNISER GmbH",
  publisher: "TAKNISER ONE GLOBE",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://takniser.com",
    siteName: "TAKNISER ONE GLOBE",
    title: "TAKNISER ONE GLOBE — Global Industrial, Technology & Trading Conglomerate",
    description:
      "100+ Years of German Engineering Heritage. Building the Future of Global Industry. Operating in 190+ countries through 29 Regional Headquarters across 6 continents.",
    images: [{ url: "/brand/logo.png", width: 479, height: 163, alt: "TAKNISER ONE GLOBE Official Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TAKNISER ONE GLOBE",
    description: "Global Industrial, Technology & Trading Conglomerate — 100+ Years German Engineering Heritage",
    images: ["/brand/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/brand/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "TAKNISER ONE GLOBE",
  legalName: "TAKNISER GmbH",
  url: "https://takniser.com",
  logo: "https://takniser.com/brand/logo.svg",
  description:
    "Global Industrial, Technology & Trading Conglomerate with 100+ years of German engineering heritage.",
  foundingLocation: { "@type": "Place", name: "Hesse (Hessen), Germany" },
  areaServed: "Worldwide",
  numberOfEmployees: { "@type": "QuantitativeValue", description: "Global Operations" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
