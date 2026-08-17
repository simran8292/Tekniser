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
          <h2 className="text-3xl sm:text-5xl font-black text-[#002d3b] tracking-tight uppercase">
            Complete <span className="text-[#009999]">Capabilities</span>
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
                className="glass-panel glass-panel-hover bg-white p-5 border border-slate-200 flex flex-col gap-3 rounded-none shadow-none"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-none">
                    <IconComponent className="w-5 h-5 text-[#009999]" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#002d3b] leading-tight">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
