import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Rocket, Pickaxe, Sprout, HeartPulse, Home, Bot } from "lucide-react";
import { BUSINESS_DIVISIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Business Divisions — TAKNISER ONE GLOBE",
  description:
    "Explore TAKNISER ONE GLOBE's 7 core business divisions: Space Economy, Mining & Minerals, AgTech, LifeCare, Lifestyle, Robotics, and Global Trading.",
};

const iconMap: Record<string, React.ElementType> = {
  Rocket, Pickaxe, Sprout, HeartPulse, Home, Bot, Globe,
};

const colorMap = [
  { bg: "bg-sky-500/10", border: "border-sky-500/30", icon: "text-sky-400", accent: "from-sky-500/20 to-transparent" },
  { bg: "bg-amber-500/10", border: "border-amber-500/30", icon: "text-amber-400", accent: "from-amber-500/20 to-transparent" },
  { bg: "bg-emerald-500/10", border: "border-emerald-500/30", icon: "text-emerald-400", accent: "from-emerald-500/20 to-transparent" },
  { bg: "bg-rose-500/10", border: "border-rose-500/30", icon: "text-rose-400", accent: "from-rose-500/20 to-transparent" },
  { bg: "bg-violet-500/10", border: "border-violet-500/30", icon: "text-violet-400", accent: "from-violet-500/20 to-transparent" },
  { bg: "bg-cyan-500/10", border: "border-cyan-500/30", icon: "text-cyan-400", accent: "from-cyan-500/20 to-transparent" },
  { bg: "bg-blue-500/10", border: "border-blue-500/30", icon: "text-blue-400", accent: "from-blue-500/20 to-transparent" },
];

export default function DivisionsPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#070b14] text-slate-100">
      {/* Hero */}
      <section className="relative py-20 bg-grid-pattern overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-600/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-sky-400 text-xs font-bold tracking-wider uppercase mb-6">
            <Globe className="w-3.5 h-3.5" />
            <span>TAKNISER Conglomerate Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Our <span className="gradient-text-blue">Business Divisions</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Seven transformative sectors, one integrated global platform. TAKNISER ONE GLOBE connects industrial manufacturing, space economy, strategic minerals, AgTech, LifeCare, intelligent robotics, and international trade.
          </p>
        </div>
      </section>

      {/* Division Cards */}
      <section className="py-16 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {BUSINESS_DIVISIONS.map((division, idx) => {
              const colors = colorMap[idx % colorMap.length];
              const IconComponent = iconMap[division.icon] || Globe;
              return (
                <div
                  key={division.id}
                  className={`glass-panel-dark rounded-3xl border ${colors.border} overflow-hidden`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* Left: Division Identity */}
                    <div className={`lg:col-span-2 p-8 bg-gradient-to-br ${colors.accent} border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col gap-5`}>
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-2xl ${colors.bg} border ${colors.border}`}>
                          <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                        </div>
                        <span className={`font-mono font-bold text-2xl ${colors.icon}`}>
                          Division {division.code}
                        </span>
                      </div>
                      <h2 className="text-2xl font-extrabold text-white leading-tight">{division.title}</h2>
                      <p className="text-sm text-slate-300 leading-relaxed">{division.tagline}</p>
                      <div className="mt-auto">
                        <Link
                          href={`/divisions/${division.slug}`}
                          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ${colors.bg} border ${colors.border} ${colors.icon} text-sm font-bold hover:opacity-80 transition-opacity group`}
                        >
                          <span>Explore Division</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* Right: Details */}
                    <div className="lg:col-span-3 p-8 space-y-6">
                      <p className="text-slate-300 text-sm leading-relaxed">{division.description}</p>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Products & Services</div>
                        <div className="flex flex-wrap gap-2">
                          {division.categories.map((cat) => (
                            <span
                              key={cat}
                              className={`text-xs font-semibold px-3 py-1.5 rounded-full ${colors.bg} border ${colors.border} ${colors.icon}`}
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Trading CTA */}
      <section className="py-16 bg-[#0b1120] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            One Platform. Seven Sectors. <span className="gradient-text-blue">190+ Markets.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            TAKNISER ONE GLOBE seamlessly connects buyers, sellers, manufacturers, governments, and logistics partners across all seven divisions through one integrated global ecosystem.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 text-white hover:scale-105 transition-all shadow-xl shadow-sky-600/30 group"
          >
            <span>Initiate a Corporate Inquiry</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
