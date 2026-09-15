"use client";

import { INDUSTRIES } from "@/lib/data";
import { Zap, Flame, Settings, Cog, Shield, Cpu, Building, Truck, Wifi, Box, ShoppingBag, Package, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const iconMap: Record<string, any> = {
  Zap, Flame, Settings, Cog, Shield, Cpu, Building, Truck, Wifi, Box, ShoppingBag, Package
};

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-widest uppercase bg-white">
            <Sparkles className="w-3.5 h-3.5 text-[#009999]" />
            <span>GLOBAL IMPACTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002d3b] uppercase tracking-tight">
            T1G Impacts
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Providing specialized, high-performance solutions and transformative impact across diverse global frontiers on Earth and beyond.
          </p>
        </div>

        {/* Pictorial Dual Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Spotlight 1: Space & Energy */}
          <div className="relative h-72 border border-slate-200 overflow-hidden shadow-sm group">
            <Image
              src="/platform_space.jpg"
              alt="Space Exploration and Earth Observation Impact"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001822]/90 via-[#001822]/40 to-transparent p-6 sm:p-8 flex flex-col justify-end">
              <span className="text-xs font-mono font-bold text-[#00cccc] uppercase tracking-widest">
                Frontier Exploration
              </span>
              <h3 className="text-white font-black text-xl sm:text-2xl uppercase tracking-tight mt-1">
                Space &amp; Planetary Systems
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-md">
                Deploying advanced orbital hardware, Earth observation satellites, and planetary resource intelligence.
              </p>
            </div>
          </div>

          {/* Spotlight 2: Sustainable Earth & Resources */}
          <div className="relative h-72 border border-slate-200 overflow-hidden shadow-sm group">
            <Image
              src="/sustainable_earth_slide.jpg"
              alt="Sustainable Earth and Natural Resource Transitions"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001822]/90 via-[#001822]/40 to-transparent p-6 sm:p-8 flex flex-col justify-end">
              <span className="text-xs font-mono font-bold text-[#00cccc] uppercase tracking-widest">
                Sustainable Tomorrow
              </span>
              <h3 className="text-white font-black text-xl sm:text-2xl uppercase tracking-tight mt-1">
                Clean Transition &amp; Nature Positive
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-md">
                Investing into resilient food systems, clean water infrastructure, circular mineral economies, and renewable transitions.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((industry) => {
            const IconComponent = iconMap[industry.icon] || Settings;
            return (
              <div key={industry.title} className="bg-white p-7 border border-slate-200 hover:border-[#009999]/50 hover:shadow-lg transition-all duration-300 group rounded-none text-left flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:border-[#009999]/30 group-hover:bg-[#009999]/5 transition-colors">
                    <IconComponent className="w-6 h-6 text-[#009999]" strokeWidth={1.25} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">{industry.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{industry.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="uppercase">Frontier</span>
                  <span className="text-[#009999]">→</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/industries" className="btn-siemens btn-siemens-primary inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-8 py-3.5">
            <span>Explore All 12 T1G Impacts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
