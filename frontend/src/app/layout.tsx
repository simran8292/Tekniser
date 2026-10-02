import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://takniser.com"),
  title: {
    default: "TAKNISER ONE GLOBE — Global Industrial, Technology & Trading Conglomerate",
    template: "%s | TAKNISER ONE GLOBE",
  },
  description:
    "TAKNISER ONE GLOBE is a global industrial, technology, manufacturing, sourcing, logistics and international trading conglomerate with 100+ years of German engineering heritage, operating in 190+ countries across 6 continents through 30 Regional Headquarters.",
  keywords: [
    "TAKNISER",
    "TAKNISER ONE GLOBE",
    "TAKNISER GmbH",
    "takniser.com",
    "industrial conglomerate",
    "German engineering",
    "global trading",
    "industrial manufacturing",
    "sourcing",
    "logistics",
    "Vision 2046",
    "Hesse Germany",
    "EPC",
    "global supply chain",
    "Space Economy",
    "AgTech",
    "Robotics AI",
  ],
  authors: [{ name: "TAKNISER GmbH", url: "https://takniser.com" }],
  creator: "TAKNISER GmbH",
  publisher: "TAKNISER ONE GLOBE",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://takniser.com",
    languages: {
      "en-US": "https://takniser.com",
      "de-DE": "https://takniser.com",
      "ar-AE": "https://takniser.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://takniser.com",
    siteName: "TAKNISER ONE GLOBE",
    title: "TAKNISER ONE GLOBE — Global Industrial, Technology & Trading Conglomerate",
    description:
      "100+ Years of German Engineering Heritage. Building the Future of Global Industry. Operating in 190+ countries through 30 Regional Headquarters across 6 continents.",
    images: [{ url: "/LOGO.png", width: 800, height: 400, alt: "TAKNISER ONE GLOBE Official Identity" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TAKNISER ONE GLOBE",
    description: "Global Industrial, Technology & Trading Conglomerate — 100+ Years German Engineering Heritage",
    images: ["/LOGO.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/LOGO.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Corporation",
      "@id": "https://takniser.com/#organization",
      name: "TAKNISER ONE GLOBE",
      legalName: "TAKNISER GmbH",
      alternateName: ["TAKNISER", "TAKNISER 1Globe", "TAKNISER Group"],
      url: "https://takniser.com",
      logo: "https://takniser.com/LOGO.png",
      image: "https://takniser.com/LOGO.png",
      description:
        "Global Industrial, Technology, Manufacturing, Sourcing, Logistics & Trading Conglomerate with 100+ years of German engineering heritage, operating across 190+ countries and 30 Regional Headquarters.",
      foundingLocation: {
        "@type": "Place",
        name: "Hesse (Hessen), Germany",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dillenburg",
        addressRegion: "Hesse",
        addressCountry: "Germany",
      },
      areaServed: "Worldwide",
      knowsAbout: [
        "Industrial Manufacturing",
        "Space Economy",
        "Mining & Critical Minerals",
        "AgTech & Precision Farming",
        "Lifecare & Health Systems",
        "Lifestyle & Home Technologies",
        "Industrial Robotics & AI Automation",
        "Global Commodity Trading & Multimodal Logistics",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "corporate inquiries",
          url: "https://takniser.com/contact",
          availableLanguage: ["English", "German", "Arabic"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://takniser.com/#website",
      url: "https://takniser.com",
      name: "TAKNISER ONE GLOBE",
      publisher: {
        "@id": "https://takniser.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://takniser.com/divisions?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
