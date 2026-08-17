import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe, Zap, Leaf, Handshake, Cpu } from "lucide-react";
import { CORPORATE_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Vision 2046 & Mission — TAKNISER ONE GLOBE",
  description:
    "Discover TAKNISER's strategic Vision 2046 — to become one of the world's most respected industrial, technology, manufacturing, sourcing, distribution, and global trading conglomerates.",
};

const STRATEGIC_PILLARS = [
  { title: "Innovation", desc: "Continuous investment in advanced technologies, digital capabilities, and next-generation engineering talent.", icon: Cpu },
  { title: "Sustainability", desc: "Building responsible supply chains, environmentally conscious operations, and long-term ecological commitments.", icon: Leaf },
  { title: "Global Expansion", desc: "Strengthening our presence across every major international market through strategic RHQ expansion and partnerships.", icon: Globe },
  { title: "Technology Leadership", desc: "Investing in Industry 4.0, AI robotics, space economy, digital transformation, and smart infrastructure.", icon: Zap },
  { title: "Trusted Partnerships", desc: "Creating long-term value for customers, partners, employees, industries, and society through trusted relationships.", icon: Handshake },
  { title: "Integrated Network", desc: "One integrated global industrial ecosystem connecting engineering, manufacturing, sourcing, logistics, and trade.", icon: Sparkles },
];

export default function Vision2046Page() {
  return (
    <div className="pt-24 min-h-screen bg-[#f4f5f6] text-slate-800">
      {/* Hero - Siemens Dark Blue panel */}
      <section className="relative py-20 overflow-hidden bg-[#002d3b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-wider uppercase mb-6 rounded-none bg-transparent">
            <Sparkles className="w-3.5 h-3.5 text-[#009999]" />
            <span>Strategic Vision</span>
          </div>
          <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tight mb-6 uppercase">
            Vision <span className="text-[#009999]">2046</span>
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            TAKNISER&apos;s strategic century vision charts the course from a Hessen engineering heritage to a globally respected industrial, technology and trading conglomerate.
          </p>
        </div>
      </section>

      {/* Vision Statement - Flat Box on Light Gray Background */}
      <section className="py-20 bg-[#f4f5f6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 border border-slate-200 rounded-none shadow-none text-slate-800">
            <div className="relative z-10 text-center space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#009999] mb-4">The Official Vision Statement</div>
              <blockquote className="text-xl sm:text-2xl font-semibold text-[#002d3b] italic leading-relaxed">
                &ldquo;{CORPORATE_INFO.vision2046}&rdquo;
              </blockquote>
              <div className="flex justify-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#009999] font-mono">2046</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Vision Target</div>
                </div>
                <div className="w-px bg-slate-200 h-16 self-center" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#009999] font-mono">190+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Countries</div>
                </div>
                <div className="w-px bg-slate-200 h-16 self-center" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#009999] font-mono">6</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Continents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission - Solid White Background */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] mb-4 uppercase">
              Our <span className="text-[#009999]">Mission</span>
            </h2>
            <p className="text-slate-655 max-w-2xl mx-auto">
              Seven mission pillars guide every business decision and operational strategy across TAKNISER ONE GLOBE.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {CORPORATE_INFO.missionPillars.map((pillar, idx) => (
              <div key={idx} className="bg-[#f4f5f6] border border-slate-200 p-5 flex gap-4 rounded-none shadow-none text-slate-800">
                <div className="shrink-0 w-8 h-8 bg-white border border-slate-200 flex items-center justify-center text-[#009999] font-mono text-sm font-bold rounded-none">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-semibold">{pillar}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Pillars - Light Gray background */}
      <section className="py-20 bg-[#f4f5f6] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] mb-4 uppercase">
              Strategic <span className="text-[#009999]">Pillars</span>
            </h2>
            <p className="text-slate-650 max-w-2xl mx-auto">
              Six transformative pillars driving TAKNISER toward Vision 2046 across global continents and industrial sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRATEGIC_PILLARS.map((pillar) => (
              <div key={pillar.title} className="glass-panel glass-panel-hover bg-white p-6 border border-slate-200 flex flex-col gap-4 rounded-none shadow-none text-slate-800">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-none w-fit">
                  <pillar.icon className="w-6 h-6 text-[#009999]" />
                </div>
                <h3 className="text-lg font-bold text-[#002d3b]">{pillar.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Siemens Dark Blue panel */}
      <section className="py-16 bg-[#002d3b] border-t border-slate-850">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
            Be Part of the Vision
          </h2>
          <p className="text-slate-200">
            Whether you are a manufacturer, government body, EPC contractor, OEM, or institutional buyer — TAKNISER ONE GLOBE is your integrated industrial partner for the next century.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto btn-siemens btn-siemens-primary flex items-center justify-center gap-2"
            >
              <span>Contact TAKNISER</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/divisions"
              className="w-full sm:w-auto btn-siemens btn-siemens-outline-white flex items-center justify-center gap-2"
            >
              Explore Divisions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
