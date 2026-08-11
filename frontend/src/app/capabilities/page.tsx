import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Factory, Search, ShoppingCart, HardHat, Network, Ship, Share2, Cpu, Zap, Landmark, Wrench } from "lucide-react";
import { CAPABILITIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Capabilities — End-to-End Industrial Value Chain | TAKNISER ONE GLOBE",
  description:
    "TAKNISER delivers across the complete industrial value chain: Engineering & Technical Consulting, Industrial Manufacturing, Global Strategic Sourcing, EPC Support, Logistics, Digital Transformation, and more.",
};

const iconMap: Record<string, React.ElementType> = {
  Compass, Factory, Search, ShoppingCart, HardHat, Network, Ship, Share2, Cpu, Zap, Landmark, Wrench,
};

export default function CapabilitiesPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#070b14] text-slate-100">
      {/* Hero */}
      <section className="relative py-20 bg-grid-pattern overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-600/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full german-badge text-xs font-bold tracking-wider uppercase mb-6">
            <span>Industrial Value Chain</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Our <span className="gradient-text-gold">Capabilities</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            From engineering and manufacturing through to international logistics, digital transformation, and lifecycle after-sales services — TAKNISER delivers end-to-end industrial solutions across 12 integrated capability areas.
          </p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {CAPABILITIES.map((cap, idx) => {
              const IconComponent = iconMap[cap.icon] || Compass;
              return (
                <div key={cap.title} className="glass-panel-dark glass-panel-dark-hover rounded-2xl p-6 border border-white/10 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <IconComponent className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="font-mono text-xl font-bold text-slate-700">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="text-base font-bold text-white leading-tight">{cap.title}</h2>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Chain Visual */}
      <section className="py-16 bg-[#0b1120] relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Integrated <span className="gradient-text-blue">Value Chain Flow</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {["Engineering", "Manufacturing", "Sourcing", "Procurement", "EPC Supply", "Supply Chain", "Logistics", "Distribution", "Technology", "Digital", "Infrastructure", "After-Sales"].map((step, idx, arr) => (
              <div key={step} className="flex items-center gap-2">
                <div className="glass-panel-dark rounded-xl px-3 py-2 border border-white/10 text-xs font-bold text-slate-200 whitespace-nowrap">
                  {step}
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#090d16] border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need a Specific Industrial Capability?
          </h2>
          <p className="text-slate-400">
            Our engineering and sourcing experts are available globally to scope custom solutions for your project requirements.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 hover:scale-105 transition-all shadow-xl shadow-amber-500/30 group">
            <span>Request Capability Assessment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
