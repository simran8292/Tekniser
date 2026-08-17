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
    <div className="pt-24 min-h-screen bg-[#f4f5f6] text-slate-800">
      {/* Hero - Siemens Dark Blue panel */}
      <section className="relative py-20 overflow-hidden bg-[#002d3b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-wider uppercase mb-6 rounded-none bg-transparent">
            <span>Industrial Value Chain</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 uppercase">
            Our <span className="text-[#009999]">Capabilities</span>
          </h1>
          <p className="text-slate-200 text-lg max-w-3xl mx-auto leading-relaxed">
            From engineering and manufacturing through to international logistics, digital transformation, and lifecycle after-sales services — TAKNISER delivers end-to-end industrial solutions across 12 integrated capability areas.
          </p>
        </div>
      </section>

      {/* Capabilities Grid - Flat White Cards on Gray Background */}
      <section className="py-20 bg-[#f4f5f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {CAPABILITIES.map((cap, idx) => {
              const IconComponent = iconMap[cap.icon] || Compass;
              return (
                <div key={cap.title} className="glass-panel glass-panel-hover bg-white p-6 border border-slate-200 flex flex-col gap-4 rounded-none shadow-none text-slate-800">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-none">
                      <IconComponent className="w-6 h-6 text-[#009999]" />
                    </div>
                    <span className="font-mono text-xl font-bold text-slate-400">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="text-base font-bold text-[#002d3b] leading-tight">{cap.title}</h2>
                  <p className="text-sm text-slate-650 leading-relaxed flex-1">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Chain Visual - Solid White Panel */}
      <section className="py-16 bg-white relative overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[#002d3b] uppercase">
              Integrated <span className="text-[#009999]">Value Chain Flow</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {["Engineering", "Manufacturing", "Sourcing", "Procurement", "EPC Supply", "Supply Chain", "Logistics", "Distribution", "Technology", "Digital", "Infrastructure", "After-Sales"].map((step, idx, arr) => (
              <div key={step} className="flex items-center gap-2">
                <div className="bg-slate-50 border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 whitespace-nowrap rounded-none">
                  {step}
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-[#009999] shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Siemens Dark Blue Banner */}
      <section className="py-16 bg-[#002d3b] border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
            Need a Specific Industrial Capability?
          </h2>
          <p className="text-slate-200">
            Our engineering and sourcing experts are available globally to scope custom solutions for your project requirements.
          </p>
          <Link
            href="/contact"
            className="btn-siemens btn-siemens-primary flex items-center justify-center gap-2 max-w-fit mx-auto"
          >
            <span>Request Capability Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
