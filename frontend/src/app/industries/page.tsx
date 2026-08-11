import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Flame, Settings, Cog, Shield, Cpu, Building2, Truck, Wifi, Box, ShoppingBag, Package } from "lucide-react";
import { INDUSTRIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries Served — TAKNISER ONE GLOBE",
  description:
    "TAKNISER serves 12 key global industries including Electrical Infrastructure, Energy, Automation, Industrial Machinery, Electronics, Construction Materials, Smart Technologies, and more.",
};

const iconMap: Record<string, React.ElementType> = {
  Zap, Flame, Settings, Cog, Shield, Cpu,
  Building: Building2,
  Truck, Wifi, Box, ShoppingBag, Package,
};

const colorPalette = [
  "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
  "text-orange-400 bg-orange-500/10 border-orange-500/30",
  "text-sky-400 bg-sky-500/10 border-sky-500/30",
  "text-slate-300 bg-slate-500/10 border-slate-500/30",
  "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  "text-violet-400 bg-violet-500/10 border-violet-500/30",
  "text-amber-400 bg-amber-500/10 border-amber-500/30",
  "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  "text-blue-400 bg-blue-500/10 border-blue-500/30",
  "text-rose-400 bg-rose-500/10 border-rose-500/30",
  "text-teal-400 bg-teal-500/10 border-teal-500/30",
  "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
];

export default function IndustriesPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#070b14] text-slate-100">
      {/* Hero */}
      <section className="relative py-20 bg-grid-pattern overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-600/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-sky-400 text-xs font-bold tracking-wider uppercase mb-6">
            <Cog className="w-3.5 h-3.5" />
            <span>Target Sectors</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Industries <span className="gradient-text-blue">We Serve</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            TAKNISER ONE GLOBE&apos;s diversified portfolio serves twelve of the world&apos;s most essential industrial sectors — providing products, technologies, sourcing, and integrated supply chain solutions.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {INDUSTRIES.map((industry, idx) => {
              const IconComponent = iconMap[industry.icon] || Cog;
              const colorClass = colorPalette[idx % colorPalette.length];
              const [textColor, bgColor, borderColor] = colorClass.split(" ");
              return (
                <div key={industry.title} className="glass-panel-dark glass-panel-dark-hover rounded-2xl p-6 border border-white/10 flex flex-col gap-4">
                  <div className={`p-3 rounded-xl ${bgColor} border ${borderColor} w-fit`}>
                    <IconComponent className={`w-6 h-6 ${textColor}`} />
                  </div>
                  <h2 className="text-base font-bold text-white">{industry.title}</h2>
                  <p className="text-sm text-slate-400 leading-relaxed">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audience Types */}
      <section className="py-16 bg-[#0b1120] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Who We Work With
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Global Manufacturers", "Governments & Utilities", "EPC Contractors", "OEMs",
              "Infrastructure Developers", "Industrial Enterprises", "Distributors",
              "System Integrators", "Institutional Buyers", "Multinational Corporations"
            ].map((audience) => (
              <div key={audience} className="glass-panel-dark rounded-xl px-4 py-2.5 border border-white/10 text-sm font-semibold text-slate-200">
                {audience}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#090d16] border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Your Industry. <span className="gradient-text-blue">Our Expertise.</span>
          </h2>
          <p className="text-slate-400">Contact our sector specialists to discuss your industrial sourcing, procurement, or project supply requirements.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 text-white hover:scale-105 transition-all shadow-xl shadow-sky-600/30 group">
            <span>Contact a Sector Specialist</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
