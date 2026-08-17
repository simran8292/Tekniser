import Link from "next/link";
import { ArrowRight, Rocket, Pickaxe, Sprout, HeartPulse, Home, Bot, Globe } from "lucide-react";
import { BUSINESS_DIVISIONS } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Rocket, Pickaxe, Sprout, HeartPulse, Home, Bot, Globe,
};

export default function DivisionsGrid() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-wider uppercase rounded-none bg-transparent">
            <Globe className="w-3.5 h-3.5 text-[#009999]" />
            <span>Integrated Business Conglomerate</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#002d3b] tracking-tight uppercase">
            Seven <span className="text-[#009999]">Core Divisions</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From deep-space technology to sustainable agriculture, TAKNISER ONE GLOBE operates across seven transformative industrial sectors — all connected through one integrated global platform.
          </p>
        </div>

        {/* 7 Division Cards Grid - Siemens Flat Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {BUSINESS_DIVISIONS.map((division) => {
            const IconComponent = iconMap[division.icon] || Globe;
            return (
              <Link
                key={division.id}
                href={`/divisions/${division.slug}`}
                className="glass-panel glass-panel-hover bg-[#f4f5f6] p-6 border border-slate-200 group flex flex-col justify-between space-y-5 cursor-pointer rounded-none shadow-none"
              >
                {/* Top: Icon + Code */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white border border-slate-200 rounded-none">
                    <IconComponent className="w-6 h-6 text-[#009999]" />
                  </div>
                  <span className="font-mono text-sm font-bold text-[#009999]">
                    Division {division.code}
                  </span>
                </div>

                {/* Middle: Title + Tagline */}
                <div className="flex-grow space-y-2">
                  <h3 className="text-base font-bold text-[#002d3b] leading-tight group-hover:text-[#009999] transition-colors">
                    {division.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {division.tagline}
                  </p>
                </div>

                {/* Bottom: Category tags */}
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {division.categories.slice(0, 3).map((cat) => (
                      <span
                        key={cat}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-none bg-white border border-slate-200 text-slate-600"
                      >
                        {cat}
                      </span>
                    ))}
                    {division.categories.length > 3 && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-none bg-white border border-slate-200 text-slate-500">
                        +{division.categories.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-[#009999] group-hover:gap-2 transition-all">
                    <span>Explore Division</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#009999]" />
                  </div>
                </div>
              </Link>
            );
          })}

          {/* 8th Card: All Divisions CTA */}
          <Link
            href="/divisions"
            className="glass-panel bg-[#f4f5f6] p-6 border border-slate-200 border-dashed group flex flex-col items-center justify-center space-y-4 hover:border-[#009999] hover:bg-white transition-all cursor-pointer text-center rounded-none shadow-none"
          >
            <div className="p-4 bg-white border border-slate-200 group-hover:border-[#009999]/40 transition-colors rounded-none">
              <Globe className="w-8 h-8 text-[#009999]" />
            </div>
            <div>
              <div className="text-base font-bold text-[#002d3b] group-hover:text-[#009999] transition-colors">View All Divisions</div>
              <div className="text-xs text-slate-500 mt-1">Explore the Complete TAKNISER Portfolio</div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#009999]">
              <span>One Globe Platform</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
