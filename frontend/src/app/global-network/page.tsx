import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import GlobalMapPreview from "@/components/home/GlobalMapPreview";
import RegionalHeadquartersList from "@/components/network/RegionalHeadquartersList";

export const metadata: Metadata = {
  title: "Global Network — TAKNISER ONE GLOBE",
  description:
    "One Globe. One Network. One Future. Explore TAKNISER's strategically positioned global network of 29 Regional Headquarters, logistics hubs, engineering centers, and business offices across 190+ countries.",
};

const GLOBAL_STATS = [
  {
    label: "Global Headquarters",
    value: "1 (Hesse, Germany)",
    desc: "Central Engineering Center & Group HQ",
  },
  {
    label: "Regional Headquarters",
    value: "29",
    desc: "Operational across global hubs",
  },
  {
    label: "Countries & Territories",
    value: "190+",
    desc: "Worldwide commercial reach",
  },
  {
    label: "Continents Active",
    value: "6",
    desc: "Cross-continental industrial operations",
  },
  {
    label: "Integrated Logistics Network",
    value: "Global",
    desc: "Multi-modal air, sea & land corridors",
  },
  {
    label: "Worldwide Sourcing & Procurement",
    value: "Active",
    desc: "Direct access to strategic materials",
  },
  {
    label: "Manufacturing & OEM Partnerships",
    value: "Multi-continent",
    desc: "Certified European & global production",
  },
  {
    label: "International Distribution",
    value: "Active",
    desc: "Reliable cross-border trade pipelines",
  },
  {
    label: "Global Business Partners",
    value: "Growing",
    desc: "Governments, EPCs, and conglomerates",
  },
  {
    label: "Sustainable Growth Strategy",
    value: "Vision 2046",
    desc: "Centennial industrial roadmap",
  },
];

export default function GlobalNetworkPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#009999] selection:text-white">
      
      {/* ─────────────────────────────────────────────────────────────
          PAGE HERO SECTION (Siemens Modern Executive Dark)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(0,153,153,0.15),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#002d3b12_1px,transparent_1px),linear-gradient(to_bottom,#002d3b12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          
          {/* Label from verbatim document */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/70 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#009999]" />
            <span>Global Operational Presence</span>
          </div>

          {/* Heading from verbatim document */}
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            Global <span className="text-[#009999]">Network</span>
          </h1>

          {/* Description from verbatim document */}
          <p className="text-slate-200 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            One Globe. One Network. One Future. — TAKNISER operates through a strategically positioned global network of 29 Regional Headquarters, logistics hubs, engineering centers, and business offices across 190+ countries.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              1 Global HQ (Germany)
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              29 Regional Headquarters
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              190+ Countries Served
            </span>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          INTERACTIVE WORLD MAP
      ───────────────────────────────────────────────────────────── */}
      <GlobalMapPreview />

      {/* ─────────────────────────────────────────────────────────────
          REGIONAL HEADQUARTERS NETWORK (Clean White / Light Gray UI)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="border-b border-slate-300 pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                STRATEGIC INFRASTRUCTURE
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight mt-1">
                Regional Headquarters Network
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md text-left sm:text-right">
              Explore our operating regional headquarters, maritime logistics centers, and engineering hubs across every major continent.
            </p>
          </div>

          {/* Interactive Regional Headquarters List with Search & Filtering */}
          <RegionalHeadquartersList />

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          GLOBAL FOOTPRINT STATISTICS (Clean White Grid)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#009999] tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#009999]" />
              <span>MEASURABLE INTERNATIONAL REACH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight">
              Global Footprint Statistics
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
              Verifiable scale and strategic operational footprint anchoring our industrial supply chains and cross-border trade.
            </p>
          </div>

          {/* The 10 Verbatim Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {GLOBAL_STATS.map((item, idx) => (
              <div
                key={item.label}
                className="bg-[#f8fafc] border border-slate-200 p-5 flex flex-col justify-between hover:border-[#009999] hover:bg-white transition-all rounded-none"
              >
                <div className="space-y-2">
                  <div className="text-[10px] font-mono font-bold text-[#009999] uppercase tracking-wider">
                    METRIC 0{idx + 1}
                  </div>
                  <div className="text-lg sm:text-xl font-black text-[#002d3b] tracking-tight leading-tight">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200 text-[11px] text-slate-500 font-sans">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CALL TO ACTION (Siemens Dark Petrol Banner)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#001822] text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Connect with Your <span className="text-[#009999]">Nearest TAKNISER Hub</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Our regional offices and engineering centers are ready to support your organization with advanced manufacturing, strategic mineral procurement, AgTech solutions, and international logistics.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="btn-siemens btn-siemens-primary flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-sm font-bold tracking-wider uppercase"
            >
              <span>Contact a Regional Office</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/divisions"
              className="px-6 py-3.5 border border-slate-600 text-slate-300 hover:text-white hover:border-[#009999] transition-colors text-sm font-bold uppercase tracking-wider text-center w-full sm:w-auto"
            >
              Explore Business Divisions
            </Link>
          </div>

          <div className="text-center text-xs text-slate-500 font-mono pt-8">
            TAKNISER ONE GLOBE — Complete Website Content Reference
          </div>
        </div>
      </section>

    </div>
  );
}
