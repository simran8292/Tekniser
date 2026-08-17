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

export default function DivisionsPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#f4f5f6] text-slate-800">
      {/* Hero - Siemens Dark Blue panel */}
      <section className="relative py-20 overflow-hidden bg-[#002d3b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-wider uppercase mb-6 rounded-none bg-transparent">
            <Globe className="w-3.5 h-3.5 text-[#009999]" />
            <span>TAKNISER Conglomerate Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 uppercase">
            Our <span className="text-[#009999]">Business Divisions</span>
          </h1>
          <p className="text-slate-200 text-lg max-w-3xl mx-auto leading-relaxed">
            Seven transformative sectors, one integrated global platform. TAKNISER ONE GLOBE connects industrial manufacturing, space economy, strategic minerals, AgTech, LifeCare, intelligent robotics, and international trade.
          </p>
        </div>
      </section>

      {/* Division Cards - Flat White Panels on Light Gray Background */}
      <section className="py-16 bg-[#f4f5f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {BUSINESS_DIVISIONS.map((division, idx) => {
              const IconComponent = iconMap[division.icon] || Globe;
              return (
                <div
                  key={division.id}
                  className="bg-white border border-slate-200 overflow-hidden rounded-none shadow-none text-slate-800"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    
                    {/* Left: Division Identity */}
                    <div className="lg:col-span-2 p-8 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col gap-5 rounded-none">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white border border-slate-200 rounded-none">
                          <IconComponent className="w-8 h-8 text-[#009999]" />
                        </div>
                        <span className="font-mono font-bold text-2xl text-[#009999]">
                          Division 0{division.code}
                        </span>
                      </div>
                      <h2 className="text-2xl font-extrabold text-[#002d3b] leading-tight">{division.title}</h2>
                      <p className="text-sm text-slate-600 leading-relaxed">{division.tagline}</p>
                      <div className="mt-auto">
                        <Link
                          href={`/divisions/${division.slug}`}
                          className="btn-siemens btn-siemens-primary flex items-center justify-center gap-2 max-w-fit"
                        >
                          <span>Explore Division</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Right: Details */}
                    <div className="lg:col-span-3 p-8 space-y-6">
                      <p className="text-slate-650 text-sm leading-relaxed">{division.description}</p>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">Products & Services</div>
                        <div className="flex flex-wrap gap-2">
                          {division.categories.map((cat) => (
                            <span
                              key={cat}
                              className="text-xs font-semibold px-3 py-1.5 rounded-none bg-slate-50 border border-slate-200 text-slate-700"
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

      {/* Global Trading CTA - Flat Siemens Petrol Background Banner */}
      <section className="py-16 bg-[#009999] border-y border-[#008080]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
            One Platform. Seven Sectors. 190+ Markets.
          </h2>
          <p className="text-white max-w-2xl mx-auto opacity-95">
            TAKNISER ONE GLOBE seamlessly connects buyers, sellers, manufacturers, governments, and logistics partners across all seven divisions through one integrated global ecosystem.
          </p>
          <Link
            href="/contact"
            className="w-full sm:w-auto btn-siemens bg-white text-[#002d3b] hover:bg-slate-100 transition-colors rounded-none flex items-center justify-center gap-2 max-w-fit mx-auto font-bold uppercase tracking-wider"
          >
            <span>Initiate a Corporate Inquiry</span>
            <ArrowRight className="w-4 h-4 text-[#002d3b]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
