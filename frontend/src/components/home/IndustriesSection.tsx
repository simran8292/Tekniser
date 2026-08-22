"use client";

import { INDUSTRIES } from "@/lib/data";
import { Zap, Flame, Settings, Cog, Shield, Cpu, Building, Truck, Wifi, Box, ShoppingBag, Package, ChevronRight } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, any> = {
  Zap, Flame, Settings, Cog, Shield, Cpu, Building, Truck, Wifi, Box, ShoppingBag, Package
};

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-5xl font-light text-[#002d3b] tracking-wide">
            Industries <span className="font-bold text-[#009999]">We Serve</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Providing specialized, high-performance solutions across diverse industrial sectors worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((industry) => {
            const IconComponent = iconMap[industry.icon] || Settings;
            return (
              <div key={industry.title} className="bg-white p-8 border border-slate-200 hover:border-[#009999]/50 hover:shadow-xl transition-all duration-300 group rounded-2xl text-left">
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 rounded-xl group-hover:border-[#009999]/30 group-hover:bg-[#009999]/5 transition-colors">
                  <IconComponent className="w-7 h-7 text-[#009999]" strokeWidth={1.25} />
                </div>
                <h3 className="text-sm font-semibold text-slate-800 tracking-wide mb-3">{industry.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{industry.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/industries" className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-[#009999] hover:text-[#008080] transition-colors border-b-2 border-[#009999] pb-1">
            <span>Explore All Industries</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
