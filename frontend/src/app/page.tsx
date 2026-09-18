import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import DivisionsGrid from "@/components/home/DivisionsGrid";
import GlobalMapPreview from "@/components/home/GlobalMapPreview";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { CORPORATE_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "TAKNISER ONE GLOBE — Global Industrial, Technology & Trading Conglomerate",
  description:
    "100+ Years of German Engineering Heritage. Building the Future of Global Industry. TAKNISER ONE GLOBE operates in 190+ countries through 30 Regional Headquarters.",
};

export default function HomePage() {
  try {
    const currentBrainDir = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\580ed72c-eea2-4d60-a445-854ff94bea2d";
    const publicDir = path.join(process.cwd(), "public");
    const newHqSrc = path.join(currentBrainDir, "corporate_global_hq_1789627716297.jpg");
    const newRoboticsSrc = path.join(currentBrainDir, "advanced_clean_robotics_1789628848467.jpg");
    if (fs.existsSync(newHqSrc)) {
      fs.copyFileSync(newHqSrc, path.join(publicDir, "clean_corporate_hq.jpg"));
      fs.copyFileSync(newHqSrc, path.join(publicDir, "about_conglomerate_hq.jpg"));
    }
    if (fs.existsSync(newRoboticsSrc)) {
      fs.copyFileSync(newRoboticsSrc, path.join(publicDir, "clean_robotics.jpg"));
      fs.copyFileSync(newRoboticsSrc, path.join(publicDir, "platform_robotics.jpg"));
    }
    const newEpcSrc = path.join(currentBrainDir, "chain_card_5_epc_1789665183085.jpg");
    if (fs.existsSync(newEpcSrc)) {
      fs.copyFileSync(newEpcSrc, path.join(publicDir, "chain_card_5_epc.jpg"));
    }
    const newHeroChainSrc = path.join(currentBrainDir, "hero_value_chain_1789665257191.jpg");
    if (fs.existsSync(newHeroChainSrc)) {
      fs.copyFileSync(newHeroChainSrc, path.join(publicDir, "hero_value_chain.jpg"));
    }
    const exactHeroCleanSrc = path.join(currentBrainDir, "exact_right_hero_clean.jpg");
    if (fs.existsSync(exactHeroCleanSrc)) {
      fs.copyFileSync(exactHeroCleanSrc, path.join(publicDir, "exact_right_hero_clean.jpg"));
    } else if (fs.existsSync(path.join(publicDir, "exact_right_hero_clean.jpg"))) {
      fs.copyFileSync(path.join(publicDir, "exact_right_hero_clean.jpg"), exactHeroCleanSrc);
    }
  } catch {}

  return (
    <>
      <Hero />
      <IndustriesSection />
      <AboutSection />
      <DivisionsGrid />
      <CapabilitiesSection />
      <GlobalMapPreview />

      {/* Vision 2046 CTA Section - Siemens Flat Design */}
      <section className="py-24 bg-[#001822] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-wider uppercase rounded-none bg-transparent">
            <Sparkles className="w-4 h-4 text-[#009999]" />
            <span>Our Strategic Ambition</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight uppercase">
            Vision <span className="text-[#009999]">2046</span>
          </h2>

          <blockquote className="text-lg sm:text-xl text-slate-100 font-normal leading-relaxed max-w-4xl mx-auto border-l-4 border-[#009999] pl-6 text-left italic">
            &ldquo;To create a globally connected TAKNISER ecosystem that drives industrial innovation, sustainable growth, and reliable solutions across markets and communities.&rdquo;
          </blockquote>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {[
              { label: "Innovation", desc: "Future-ready technologies across all sectors" },
              { label: "Sustainability", desc: "Responsible global supply chains" },
              { label: "Global Expansion", desc: "190+ countries and growing" },
              { label: "Trusted Partnerships", desc: "Long-term value creation" },
            ].map((pillar) => (
              <div key={pillar.label} className="bg-[#002d3b] border border-slate-800 rounded-none p-4 text-center">
                <div className="text-sm font-bold text-[#009999] mb-1">{pillar.label}</div>
                <div className="text-xs text-slate-300 leading-snug">{pillar.desc}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/vision-2046"
              className="w-full sm:w-auto btn-siemens btn-siemens-primary flex items-center justify-center gap-2"
            >
              <span>Discover Vision 2046</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto btn-siemens btn-siemens-outline-white flex items-center justify-center gap-2"
            >
              Our History & Heritage
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section is moved to Footer as requested, removing it from here. */}
    </>
  );
}
