import Link from "next/link";
import { ArrowRight, Rocket, Pickaxe, Sprout, HeartPulse, Home, Bot, Globe } from "lucide-react";
import { BUSINESS_DIVISIONS } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Rocket, Pickaxe, Sprout, HeartPulse, Home, Bot, Globe,
};

const colorMap = [
  { bg: "bg-sky-500/10", border: "border-sky-500/20", icon: "text-sky-400", badge: "text-sky-400" },
  { bg: "bg-amber-500/10", border: "border-amber-500/20", icon: "text-amber-400", badge: "text-amber-400" },
  { bg: "bg-emerald-500/10", border: "border-emerald-500/20", icon: "text-emerald-400", badge: "text-emerald-400" },
  { bg: "bg-rose-500/10", border: "border-rose-500/20", icon: "text-rose-400", badge: "text-rose-400" },
  { bg: "bg-violet-500/10", border: "border-violet-500/20", icon: "text-violet-400", badge: "text-violet-400" },
  { bg: "bg-cyan-500/10", border: "border-cyan-500/20", icon: "text-cyan-400", badge: "text-cyan-400" },
  { bg: "bg-blue-500/10", border: "border-blue-500/20", icon: "text-blue-400", badge: "text-blue-400" },
];

export default function DivisionsGrid() {
  return (
    <section className="py-24 bg-[#070b14] relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-sky-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-sky-400 text-xs font-bold tracking-wider uppercase">
            <Globe className="w-3.5 h-3.5" />
            <span>Integrated Business Conglomerate</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Seven <span className="gradient-text-blue">Core Divisions</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From deep-space technology to sustainable agriculture, TAKNISER ONE GLOBE operates across seven transformative industrial sectors — all connected through one integrated global platform.
          </p>
        </div>

        {/* 7 Division Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {BUSINESS_DIVISIONS.map((division, idx) => {
            const colors = colorMap[idx % colorMap.length];
            const IconComponent = iconMap[division.icon] || Globe;
            return (
              <Link
                key={division.id}
                href={`/divisions/${division.slug}`}
                className="glass-panel-dark glass-panel-dark-hover rounded-2xl p-6 border border-white/10 group flex flex-col justify-between space-y-5 cursor-pointer"
              >
                {/* Top: Icon + Code */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl ${colors.bg} border ${colors.border}`}>
                    <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <span className={`font-mono text-sm font-bold ${colors.badge}`}>
                    Division {division.code}
                  </span>
                </div>

                {/* Middle: Title + Tagline */}
                <div className="flex-grow space-y-2">
                  <h3 className="text-base font-bold text-white leading-tight group-hover:text-sky-400 transition-colors">
                    {division.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {division.tagline}
                  </p>
                </div>

                {/* Bottom: Category tags */}
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {division.categories.slice(0, 3).map((cat) => (
                      <span
                        key={cat}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-900/60 border border-white/5 text-slate-300"
                      >
                        {cat}
                      </span>
                    ))}
                    {division.categories.length > 3 && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-900/60 border border-white/5 text-slate-400">
                        +{division.categories.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-semibold ${colors.badge} group-hover:gap-2 transition-all`}>
                    <span>Explore Division</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}

          {/* 8th Card: All Divisions CTA */}
          <Link
            href="/divisions"
            className="glass-panel-dark rounded-2xl p-6 border border-slate-800 border-dashed group flex flex-col items-center justify-center space-y-4 hover:border-sky-500/60 hover:bg-sky-500/5 transition-all cursor-pointer text-center"
          >
            <div className="p-4 rounded-full bg-slate-900/60 border border-white/10 group-hover:border-sky-500/40 transition-colors">
              <Globe className="w-8 h-8 text-sky-400" />
            </div>
            <div>
              <div className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">View All Divisions</div>
              <div className="text-xs text-slate-400 mt-1">Explore the Complete TAKNISER Portfolio</div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400">
              <span>One Globe Platform</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
