import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ValuesSection from "@/components/home/ValuesSection";
import DivisionsGrid from "@/components/home/DivisionsGrid";
import GlobalMapPreview from "@/components/home/GlobalMapPreview";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { CORPORATE_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "TAKNISER ONE GLOBE — Global Industrial, Technology & Trading Conglomerate",
  description:
    "100+ Years of German Engineering Heritage. Building the Future of Global Industry. TAKNISER ONE GLOBE operates in 190+ countries through 29 Regional Headquarters.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuesSection />
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

          <blockquote className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-4xl mx-auto font-normal border-l-4 border-[#009999] pl-6 text-left italic">
            &ldquo;{CORPORATE_INFO.vision2046}&rdquo;
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

      {/* Contact CTA Section - Flat Siemens Petrol Background */}
      <section className="py-20 bg-[#009999] border-y border-[#008080] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left space-y-3">
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Ready to work with TAKNISER?
              </h2>
              <p className="text-white max-w-2xl text-base sm:text-lg opacity-90">
                Our global team of industrial specialists, engineers, and procurement experts are ready to deliver integrated solutions for your business needs.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="w-full sm:w-auto btn-siemens bg-white text-[#002d3b] hover:bg-slate-100 transition-colors rounded-none flex items-center justify-center gap-2"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4 text-[#002d3b]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
