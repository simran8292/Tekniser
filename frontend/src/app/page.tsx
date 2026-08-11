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

      {/* Vision 2046 CTA Section */}
      <section className="py-24 bg-[#090d16] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-600/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full german-badge text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Our Strategic Ambition</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Vision <span className="gradient-text-gold">2046</span>
          </h2>

          <blockquote className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto font-light border-l-4 border-amber-400 pl-6 text-left italic">
            &ldquo;{CORPORATE_INFO.vision2046}&rdquo;
          </blockquote>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {[
              { label: "Innovation", desc: "Future-ready technologies across all sectors" },
              { label: "Sustainability", desc: "Responsible global supply chains" },
              { label: "Global Expansion", desc: "190+ countries and growing" },
              { label: "Trusted Partnerships", desc: "Long-term value creation" },
            ].map((pillar) => (
              <div key={pillar.label} className="glass-panel-dark rounded-xl p-4 border border-white/10 text-center">
                <div className="text-sm font-bold text-amber-400 mb-1">{pillar.label}</div>
                <div className="text-xs text-slate-400 leading-snug">{pillar.desc}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/vision-2046"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-bold rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-900 shadow-xl shadow-amber-500/30 hover:scale-105 transition-all group"
            >
              <span>Discover Vision 2046</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl glass-panel-dark glass-panel-dark-hover text-slate-200 hover:text-white border border-white/10"
            >
              Our History & Heritage
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-900/40 via-slate-900 to-slate-900 border-y border-sky-900/40 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-96 h-full bg-sky-600/5 blur-[80px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left space-y-3">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Ready to work with <span className="gradient-text-blue">TAKNISER?</span>
              </h2>
              <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
                Our global team of industrial specialists, engineers, and procurement experts are ready to deliver integrated solutions for your business needs.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-blue-500 text-white shadow-xl shadow-sky-600/30 hover:scale-105 transition-all group whitespace-nowrap"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
