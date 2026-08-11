import { ShieldCheck, Award, CheckCircle2, Cpu, Wrench, Sparkles, HeartHandshake, Layers } from "lucide-react";
import { CORPORATE_INFO } from "@/lib/data";

export default function ValuesSection() {
  const iconsMap: Record<string, React.ReactNode> = {
    Präzision: <Cpu className="w-6 h-6 text-sky-400" />,
    Qualität: <Award className="w-6 h-6 text-amber-400" />,
    Zuverlässigkeit: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    Ingenieurskunst: <Wrench className="w-6 h-6 text-indigo-400" />,
    Handwerkskunst: <Layers className="w-6 h-6 text-purple-400" />,
    Discipline: <CheckCircle2 className="w-6 h-6 text-blue-400" />,
    Innovation: <Sparkles className="w-6 h-6 text-cyan-400" />,
    Vertrauen: <HeartHandshake className="w-6 h-6 text-rose-400" />,
  };

  return (
    <section className="py-24 bg-[#0a101f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase">
            <span>Engineering DNA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            German Engineering <span className="gradient-text-gold">Core Principles</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            For over a century, TAKNISER has been guided by timeless values born in Hesse, Germany. We adhere firmly to <strong className="text-white font-semibold">&quot;Qualität vor Quantität&quot;</strong> — Quality before Quantity.
          </p>
        </div>

        {/* 8 Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORPORATE_INFO.values.map((val) => (
            <div
              key={val.german}
              className="glass-panel-dark glass-panel-dark-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10 shadow-sm">
                  {iconsMap[val.german]}
                </div>
                <span className="text-xs font-mono font-bold text-amber-400 tracking-wider">
                  DE {val.german.toUpperCase()}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white mb-1">{val.german}</h3>
                <div className="text-xs font-semibold text-sky-400 mb-2 uppercase tracking-wide">
                  {val.english}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
