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
    <div className="pt-24 min-h-screen bg-[#f4f5f6] text-slate-800 font-sans">
      {/* Hero - Siemens Dark Blue panel */}
      <section className="relative py-20 overflow-hidden bg-[#002d3b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-wider uppercase mb-6 rounded-none bg-transparent">
            <Globe className="w-3.5 h-3.5 text-[#009999]" />
            <span>Global Operational Presence</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 uppercase">
            Global <span className="text-[#009999]">Network</span>
          </h1>
          <p className="text-slate-200 text-lg max-w-3xl mx-auto leading-relaxed">
            One Globe. One Network. One Future. — TAKNISER operates through a strategically positioned global network of 29 Regional Headquarters, logistics hubs, engineering centers, and business offices across 190+ countries.
          </p>
        </div>
      </section>

      {/* Interactive World Map (contains its own Dark Blue background) */}
      <GlobalMapPreview />

      {/* Region-by-Region Breakdown - Flat White Cards on Gray Background */}
      <section className="py-20 bg-[#f4f5f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-4xl font-black text-[#002d3b] uppercase">
              Regional <span className="text-[#009999]">Headquarters Network</span>
            </h2>
            <p className="text-slate-600 mt-3 font-medium">
              Click any location below to learn more about our regional operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {REGIONS.map((region) => {
              const locations = GLOBAL_NETWORK_LOCATIONS.filter((l) => l.region === region);
              const summary = REGION_SUMMARY[region];
              return (
                <div key={region} className="glass-panel bg-white border border-slate-200 overflow-hidden rounded-none shadow-none text-slate-800">
                  <div className="px-6 py-4 border-b border-slate-250 flex items-center justify-between bg-slate-50">
                    <div>
                      <h3 className="text-base font-bold text-[#002d3b]">{region}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{summary?.highlight}</p>
                    </div>
                    <div className="text-2xl font-bold text-[#009999] font-mono">{summary?.count}</div>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {locations.map((loc) => (
                      <div key={loc.title} className="px-6 py-3.5 flex items-start gap-3 hover:bg-slate-50 transition-colors">
                        <div className="mt-0.5">
                          <MapPin className="w-4 h-4 text-[#009999] shrink-0" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-[#002d3b] truncate">{loc.title}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{loc.description}</div>
                        </div>
                        <div className="shrink-0">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-none border border-[#009999] text-[#009999] bg-transparent">
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

      {/* Global Footprint Stats - Solid White */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#002d3b] text-center mb-10 uppercase">
            Global <span className="text-[#009999]">Footprint</span>
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
              <div key={item.label} className="bg-[#f4f5f6] border border-slate-200 rounded-none p-4 text-center space-y-1 shadow-none text-slate-800">
                <div className="text-2xl">{item.emoji}</div>
                <div className="text-lg font-bold text-[#009999] font-mono">{item.value}</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-tight">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Siemens Dark Blue panel */}
      <section className="py-16 bg-[#002d3b] border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
            Connect with Your <span className="text-[#009999]">Nearest TAKNISER Hub</span>
          </h2>
          <p className="text-slate-200">Our regional offices are ready to support you with engineering, sourcing, logistics, and trade solutions tailored to your market.</p>
          <Link
            href="/contact"
            className="btn-siemens btn-siemens-primary flex items-center justify-center gap-2 max-w-fit mx-auto"
          >
            <span>Contact a Regional Office</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
