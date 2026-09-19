import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import DivisionsGrid from "@/components/home/DivisionsGrid";
import GlobalMapPreview from "@/components/home/GlobalMapPreview";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import HomeVisionSection from "@/components/home/HomeVisionSection";

export const metadata: Metadata = {
  title: "TAKNISER ONE GLOBE — Global Industrial, Technology & Trading Conglomerate",
  description:
    "100+ Years of German Engineering Heritage. Building the Future of Global Industry. TAKNISER ONE GLOBE operates in 190+ countries through 30 Regional Headquarters.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IndustriesSection />
      <AboutSection />
      <DivisionsGrid />
      <CapabilitiesSection />
      <GlobalMapPreview />
      <HomeVisionSection />
    </>
  );
}
