import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Flame, Settings, Cog, Shield, Cpu, Building2, Truck, Wifi, Box, ShoppingBag, Package } from "lucide-react";
import { INDUSTRIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries Served — TAKNISER ONE GLOBE",
  description:
    "TAKNISER serves 12 key global industries including Electrical Infrastructure, Energy, Automation, Industrial Machinery, Electronics, Construction Materials, Smart Technologies, and more.",
};

const iconMap: Record<string, React.ElementType> = {
  Zap, Flame, Settings, Cog, Shield, Cpu,
  Building: Building2,
  Truck, Wifi, Box, ShoppingBag, Package,
};

export default function IndustriesPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#f4f5f6] text-slate-800">
      {/* Hero - Siemens Dark Blue panel */}
      <section className="relative py-20 overflow-hidden bg-[#002d3b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-wider uppercase mb-6 rounded-none bg-transparent">
            <Cog className="w-3.5 h-3.5 text-[#009999]" />
            <span>Target Sectors</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 uppercase">
            Industries <span className="text-[#009999]">We Serve</span>
          </h1>
          <p className="text-slate-200 text-lg max-w-3xl mx-auto leading-relaxed">
            TAKNISER ONE GLOBE&apos;s diversified portfolio serves twelve of the world&apos;s most essential industrial sectors — providing products, technologies, sourcing, and integrated supply chain solutions.
          </p>
        </div>
      </section>

      {/* Industries Grid - Flat White Cards on Gray Background */}
      <section className="py-20 bg-[#f4f5f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {INDUSTRIES.map((industry) => {
              const IconComponent = iconMap[industry.icon] || Cog;
              return (
                <div key={industry.title} className="glass-panel glass-panel-hover bg-white p-6 border border-slate-200 flex flex-col gap-4 rounded-none shadow-none text-slate-800">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-none w-fit">
                    <IconComponent className="w-6 h-6 text-[#009999]" />
                  </div>
                  <h2 className="text-base font-bold text-[#002d3b] leading-tight">{industry.title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audience Types - Solid White */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#002d3b] uppercase">
              Who We Work With
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Global Manufacturers", "Governments & Utilities", "EPC Contractors", "OEMs",
              "Infrastructure Developers", "Industrial Enterprises", "Distributors",
              "System Integrators", "Institutional Buyers", "Multinational Corporations"
            ].map((audience) => (
              <div key={audience} className="bg-[#f4f5f6] border border-slate-200 rounded-none px-4 py-2.5 text-sm font-bold text-[#002d3b]">
                {audience}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Siemens Dark Blue panel */}
      <section className="py-16 bg-[#002d3b] border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
            Your Industry. <span className="text-[#009999]">Our Expertise.</span>
          </h2>
          <p className="text-slate-200">Contact our sector specialists to discuss your industrial sourcing, procurement, or project supply requirements.</p>
          <Link
            href="/contact"
            className="btn-siemens btn-siemens-primary flex items-center justify-center gap-2 max-w-fit mx-auto"
          >
            <span>Contact a Sector Specialist</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
