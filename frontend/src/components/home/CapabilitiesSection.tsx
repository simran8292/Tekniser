import { CAPABILITIES } from "@/lib/data";
import {
  Compass, Factory, Search, ShoppingCart, HardHat, Network,
  Ship, Share2, Cpu, Zap, Landmark, Wrench
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Compass, Factory, Search, ShoppingCart, HardHat, Network,
  Ship, Share2, Cpu, Zap, Landmark, Wrench,
};

export default function CapabilitiesSection() {
  return (
    <section className="py-24 bg-[#f4f5f6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-wider uppercase rounded-none bg-transparent">
            <span>End-to-End Industrial Value Chain</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-[#002d3b] tracking-wide leading-tight">
            Complete <span className="font-bold text-[#009999]">Capabilities</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From engineering and manufacturing through to logistics, digital transformation, and after-sales services — TAKNISER delivers across the full industrial value chain.
          </p>
        </div>

        {/* Value Chain Visual - Flat White Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CAPABILITIES.map((cap, idx) => {
            const IconComponent = iconMap[cap.icon] || Compass;
            return (
              <div
                key={cap.title}
                className="bg-white p-6 border border-slate-200 flex flex-col gap-4 rounded-2xl shadow-sm hover:shadow-lg hover:border-[#009999]/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center group-hover:bg-[#009999]/5 transition-colors">
                    <IconComponent className="w-5 h-5 text-[#009999]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-slate-400 tracking-widest">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-sm font-semibold tracking-wide text-[#002d3b] leading-tight">{cap.title}</h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
