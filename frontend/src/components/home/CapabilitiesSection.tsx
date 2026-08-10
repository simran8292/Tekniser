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
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-amber-750 text-xs font-bold tracking-wider uppercase">
            <span>End-to-End Industrial Value Chain</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Complete <span className="gradient-text-gold">Capabilities</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From engineering and manufacturing through to logistics, digital transformation, and after-sales services — TAKNISER delivers across the full industrial value chain.
          </p>
        </div>

        {/* Value Chain Visual */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CAPABILITIES.map((cap, idx) => {
            const IconComponent = iconMap[cap.icon] || Compass;
            return (
              <div
                key={cap.title}
                className="glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-200/80 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-100">
                    <IconComponent className="w-5 h-5 text-amber-700" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-tight">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
