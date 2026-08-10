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
  { title: "Innovation", desc: "Continuous investment in advanced technologies, digital capabilities, and next-generation engineering talent.", icon: Cpu, color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/30" },
  { title: "Sustainability", desc: "Building responsible supply chains, environmentally conscious operations, and long-term ecological commitments.", icon: Leaf, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  { title: "Global Expansion", desc: "Strengthening our presence across every major international market through strategic RHQ expansion and partnerships.", icon: Globe, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  { title: "Technology Leadership", desc: "Investing in Industry 4.0, AI robotics, space economy, digital transformation, and smart infrastructure.", icon: Zap, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" },
  { title: "Trusted Partnerships", desc: "Creating long-term value for customers, partners, employees, industries, and society through trusted relationships.", icon: Handshake, color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/30" },
  { title: "Integrated Network", desc: "One integrated global industrial ecosystem connecting engineering, manufacturing, sourcing, logistics, and trade.", icon: Sparkles, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
];

export default function Vision2046Page() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-grid-pattern overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-600/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full german-badge text-xs font-bold tracking-wider uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Strategic Vision</span>
          </div>
          <h1 className="text-4xl sm:text-7xl font-extrabold text-white tracking-tight mb-6">
            Vision <span className="gradient-text-gold">2046</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            TAKNISER&apos;s strategic century vision charts the course from a Hessen engineering heritage to a globally respected industrial, technology and trading conglomerate.
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-[#090d16]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-amber-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />
            <div className="relative z-10 text-center space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">The Official Vision Statement</div>
              <blockquote className="text-xl sm:text-2xl font-semibold text-white italic leading-relaxed">
                &ldquo;{CORPORATE_INFO.vision2046}&rdquo;
              </blockquote>
              <div className="flex justify-center gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-amber-400 font-mono">2046</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Vision Target</div>
                </div>
                <div className="w-px bg-white/10 h-16 self-center" />
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-sky-400 font-mono">190+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Countries</div>
                </div>
                <div className="w-px bg-white/10 h-16 self-center" />
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-emerald-400 font-mono">6</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Continents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#0b1120] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Our <span className="gradient-text-blue">Mission</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Seven mission pillars guide every business decision and operational strategy across TAKNISER ONE GLOBE.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {CORPORATE_INFO.missionPillars.map((pillar, idx) => (
              <div key={idx} className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono text-sm font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <p className="text-sm text-slate-200 leading-relaxed font-medium">{pillar}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-20 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Strategic <span className="gradient-text-gold">Pillars</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Six transformative pillars driving TAKNISER toward Vision 2046 across global continents and industrial sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRATEGIC_PILLARS.map((pillar) => (
              <div key={pillar.title} className={`glass-panel glass-panel-hover rounded-2xl p-6 border ${pillar.border} flex flex-col gap-4`}>
                <div className={`p-3 rounded-xl ${pillar.bg} border ${pillar.border} w-fit`}>
                  <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0b1120] border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Be Part of the Vision
          </h2>
          <p className="text-slate-400">
            Whether you are a manufacturer, government body, EPC contractor, OEM, or institutional buyer — TAKNISER ONE GLOBE is your integrated industrial partner for the next century.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-bold rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 text-white hover:scale-105 transition-all group shadow-lg shadow-sky-600/30">
              <span>Contact TAKNISER</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/divisions" className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl glass-panel glass-panel-hover text-slate-200 border border-white/10">
              Explore Divisions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
