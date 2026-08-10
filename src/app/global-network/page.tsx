import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Globe } from "lucide-react";
import { GLOBAL_NETWORK_LOCATIONS } from "@/lib/data";
import GlobalMapPreview from "@/components/home/GlobalMapPreview";

export const metadata: Metadata = {
  title: "Global Network & Footprint — TAKNISER ONE GLOBE",
  description:
    "Explore TAKNISER ONE GLOBE's worldwide network: 1 Global HQ in Germany, 29 Regional Headquarters across 6 continents, JAFZA logistics hub, and operations in 190+ countries.",
};

const REGIONS = ["Europe", "North America", "Latin America", "Africa", "Middle East", "Asia", "Oceania"];

const REGION_SUMMARY: Record<string, { count: number; highlight: string }> = {
  Europe: { count: 10, highlight: "10 Regional HQs including Global HQ in Hesse, Germany" },
  "North America": { count: 1, highlight: "TAKNISER Sterling Americana LLC — North America" },
  "Latin America": { count: 4, highlight: "Mexico, Panama, Chile, Brazil" },
  Africa: { count: 3, highlight: "Ghana (West), Kenya (East), South Africa (South)" },
  "Middle East": { count: 2, highlight: "UAE (JAFZA Logistics Hub), Saudi Arabia" },
  Asia: { count: 6, highlight: "India, Singapore, China, Hong Kong, Japan, Türkiye" },
  Oceania: { count: 1, highlight: "Australia — Mining & Heavy Equipment Hub" },
};

export default function GlobalNetworkPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-grid-pattern overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-600/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-sky-400 text-xs font-bold tracking-wider uppercase mb-6">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Operational Presence</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Global <span className="gradient-text-blue">Network</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            One Globe. One Network. One Future. — TAKNISER operates through a strategically positioned global network of 29 Regional Headquarters, logistics hubs, engineering centers, and business offices across 190+ countries.
          </p>
        </div>
      </section>

      {/* Interactive World Map */}
      <GlobalMapPreview />

      {/* Region-by-Region Breakdown */}
      <section className="py-20 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Regional <span className="gradient-text-gold">Headquarters Network</span>
            </h2>
            <p className="text-slate-400 mt-3">
              Click any location below to learn more about our regional operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {REGIONS.map((region) => {
              const locations = GLOBAL_NETWORK_LOCATIONS.filter((l) => l.region === region);
              const summary = REGION_SUMMARY[region];
              return (
                <div key={region} className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white">{region}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{summary?.highlight}</p>
                    </div>
                    <div className="text-2xl font-extrabold text-sky-400 font-mono">{summary?.count}</div>
                  </div>
                  <div className="divide-y divide-white/5">
                    {locations.map((loc) => (
                      <div key={loc.title} className="px-6 py-3.5 flex items-start gap-3 hover:bg-white/3 transition-colors">
                        <div className="mt-0.5">
                          <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-slate-200 truncate">{loc.title}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{loc.description}</div>
                        </div>
                        <div className="shrink-0">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            loc.type === "HQ" ? "text-amber-400 border-amber-500/40 bg-amber-500/10" :
                            loc.type === "LOGISTICS_HUB" ? "text-cyan-400 border-cyan-500/40 bg-cyan-500/10" :
                            "text-sky-400 border-sky-500/40 bg-sky-500/10"
                          }`}>
                            {loc.type.replace("_", " ")}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Footprint Stats */}
      <section className="py-16 bg-[#0b1120] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-10">
            Global <span className="gradient-text-blue">Footprint</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { emoji: "🌍", label: "Global Headquarters", value: "1" },
              { emoji: "🏢", label: "Regional Headquarters", value: "29" },
              { emoji: "🌐", label: "Countries & Territories", value: "190+" },
              { emoji: "🌎", label: "Continents", value: "6" },
              { emoji: "🚢", label: "Integrated Logistics Network", value: "Global" },
              { emoji: "📦", label: "Worldwide Sourcing & Procurement", value: "Active" },
              { emoji: "🏭", label: "Manufacturing & OEM Partnerships", value: "Multi-continent" },
              { emoji: "🚚", label: "International Distribution", value: "Active" },
              { emoji: "🤝", label: "Global Business Partners", value: "Growing" },
              { emoji: "🌱", label: "Sustainable Growth Strategy", value: "Vision 2046" },
            ].map((item) => (
              <div key={item.label} className="glass-panel rounded-xl p-4 border border-white/10 text-center space-y-1">
                <div className="text-2xl">{item.emoji}</div>
                <div className="text-lg font-extrabold text-sky-400 font-mono">{item.value}</div>
                <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider leading-tight">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#090d16] border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Connect with Your <span className="gradient-text-blue">Nearest TAKNISER Hub</span>
          </h2>
          <p className="text-slate-400">Our regional offices are ready to support you with engineering, sourcing, logistics, and trade solutions tailored to your market.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 text-white hover:scale-105 transition-all shadow-xl shadow-sky-600/30 group">
            <span>Contact a Regional Office</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
