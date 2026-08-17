import { ShieldCheck, Award, CheckCircle2, Cpu, Wrench, Sparkles, HeartHandshake, Layers } from "lucide-react";
import { CORPORATE_INFO } from "@/lib/data";

export default function ValuesSection() {
  const iconsMap: Record<string, React.ReactNode> = {
    Präzision: <Cpu className="w-6 h-6 text-[#009999]" />,
    Qualität: <Award className="w-6 h-6 text-[#009999]" />,
    Zuverlässigkeit: <ShieldCheck className="w-6 h-6 text-[#009999]" />,
    Ingenieurskunst: <Wrench className="w-6 h-6 text-[#009999]" />,
    Handwerkskunst: <Layers className="w-6 h-6 text-[#009999]" />,
    Discipline: <CheckCircle2 className="w-6 h-6 text-[#009999]" />,
    Innovation: <Sparkles className="w-6 h-6 text-[#009999]" />,
    Vertrauen: <HeartHandshake className="w-6 h-6 text-[#009999]" />,
  };

  return (
    <section className="py-24 bg-[#f4f5f6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-wider uppercase rounded-none">
            <span>Engineering DNA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#002d3b] tracking-tight uppercase">
            German Engineering <span className="text-[#009999]">Core Principles</span>
          </h2>
          <p className="text-slate-655 text-base sm:text-lg">
            For over a century, TAKNISER has been guided by timeless values born in Hesse, Germany. We adhere firmly to <strong className="text-[#002d3b] font-bold">&quot;Qualität vor Quantität&quot;</strong> — Quality before Quantity.
          </p>
        </div>

        {/* 8 Values Grid - Flat White Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORPORATE_INFO.values.map((val) => (
            <div
              key={val.german}
              className="glass-panel glass-panel-hover p-6 border border-slate-200 flex flex-col justify-between space-y-4 bg-white rounded-none shadow-none"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-none">
                  {iconsMap[val.german]}
                </div>
                <span className="text-xs font-mono font-bold text-[#009999] tracking-wider">
                  DE {val.german.toUpperCase()}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#002d3b] mb-1">{val.german}</h3>
                <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">
                  {val.english}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
