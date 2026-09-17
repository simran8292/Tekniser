import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";
import fs from "fs";
import path from "path";

try {
  const brainDir = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\580ed72c-eea2-4d60-a445-854ff94bea2d";
  const pubDir = path.join(process.cwd(), "public");
  const hq = path.join(brainDir, "corporate_global_hq_1789627716297.jpg");
  const bot = path.join(brainDir, "advanced_clean_robotics_1789628848467.jpg");
  if (fs.existsSync(hq)) {
    fs.copyFileSync(hq, path.join(pubDir, "clean_corporate_hq.jpg"));
    fs.copyFileSync(hq, path.join(pubDir, "about_conglomerate_hq.jpg"));
  }
  if (fs.existsSync(bot)) {
    fs.copyFileSync(bot, path.join(pubDir, "clean_robotics.jpg"));
    fs.copyFileSync(bot, path.join(pubDir, "platform_robotics.jpg"));
  }
} catch (e) {
  // ignore
}

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
      "100+ Years of German Engineering Heritage. Building the Future of Global Industry. Operating in 190+ countries through 30 Regional Headquarters across 6 continents.",
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
    <html lang="de" className={`${montserrat.variable} ${cormorant.variable}`}>
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
