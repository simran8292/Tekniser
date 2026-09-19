import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Rocket, Pickaxe, Sprout, HeartPulse, Home, Bot, Globe } from "lucide-react";
import { BUSINESS_DIVISIONS } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Rocket, Pickaxe, Sprout, HeartPulse, Home, Bot, Globe,
};

const divisionImageMap: Record<string, string> = {
  "space-economy": "/platform_space.jpg",
  "mining-minerals": "/mining_quarry_platform.jpg",
  "agtech": "/platform_agtech.jpg",
  "lifecare": "/platform_lifecare.jpg",
  "lifestyle": "/platform_lifestyle.jpg",
  "robotics": "/clean_robotics.jpg",
  "global-trading": "/about_logistics_port.jpg",
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
          <h2 className="text-3xl sm:text-5xl font-serif text-[#002d3b] tracking-tight leading-tight">
            Seven <span className="font-bold text-[#009999]">Core Divisions</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From deep-space technology to sustainable agriculture, TAKNISER ONE GLOBE operates across seven transformative industrial sectors — all connected through one integrated global platform.
          </p>
        </div>

        {/* 7 Division Cards + 1 CTA Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {BUSINESS_DIVISIONS.map((division) => {
            const IconComponent = iconMap[division.icon] || Globe;
            const bgImage = divisionImageMap[division.slug] || "/platform_space.jpg";
            return (
              <Link
                key={division.id}
                href={`/divisions/${division.slug}`}
                className="group relative min-h-[360px] sm:min-h-[380px] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-6 border border-slate-200/70 hover:border-[#009999]/60 cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={bgImage}
                  alt={division.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Multi-layered Dark Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00131d] via-[#00131d]/80 to-[#00131d]/25 opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-[#009999]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top: Icon Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-11 h-11 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-teal-300 group-hover:text-white group-hover:bg-[#009999] transition-all duration-300 shadow-sm">
                    <IconComponent className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 space-y-3 pt-6">
                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold tracking-tight text-white leading-tight group-hover:text-teal-300 transition-colors">
                      {division.title}
                    </h3>
                    <p className="text-xs text-slate-200/90 leading-relaxed line-clamp-3">
                      {division.tagline}
                    </p>
                  </div>

                  {/* Category Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {division.categories.slice(0, 3).map((cat) => (
                      <span
                        key={cat}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md border border-white/15 text-slate-200"
                      >
                        {cat}
                      </span>
                    ))}
                    {division.categories.length > 3 && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md border border-white/15 text-teal-300 font-mono">
                        +{division.categories.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2 border-t border-white/10 flex items-center gap-1.5 text-xs font-bold text-teal-400 group-hover:text-teal-300 transition-colors">
                    <span>Explore Division</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}

          {/* 8th Card: All Divisions CTA */}
          <Link
            href="/divisions"
            className="group relative min-h-[360px] sm:min-h-[380px] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-center p-6 border border-slate-200/70 hover:border-[#009999]/60 cursor-pointer text-center"
          >
            {/* Background Image */}
            <Image
              src="/vision_global_network.jpg"
              alt="View All Divisions"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00131d] via-[#00131d]/85 to-[#00131d]/40 opacity-95 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-[#009999]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 space-y-4 flex flex-col items-center">
              <div className="w-14 h-14 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl flex items-center justify-center text-teal-300 group-hover:bg-[#009999] group-hover:text-white transition-all duration-300 shadow-md">
                <Globe className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <div className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                  View All Divisions
                </div>
                <div className="text-xs text-slate-300">
                  Explore the Complete TAKNISER Portfolio
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-teal-300 group-hover:bg-[#009999] group-hover:text-white group-hover:border-[#009999] transition-all">
                <span>One Globe Platform</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
