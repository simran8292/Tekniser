import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Globe, Rocket, Pickaxe, Sprout, HeartPulse, Home, Bot, CheckCircle2 } from "lucide-react";
import { BUSINESS_DIVISIONS } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Rocket, Pickaxe, Sprout, HeartPulse, Home, Bot, Globe,
};

const colorMap: Record<string, { bg: string; border: string; icon: string }> = {
  "space-economy": { bg: "bg-sky-500/10", border: "border-sky-500/30", icon: "text-sky-400" },
  "mining-minerals": { bg: "bg-amber-500/10", border: "border-amber-500/30", icon: "text-amber-400" },
  agtech: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", icon: "text-emerald-400" },
  lifecare: { bg: "bg-rose-500/10", border: "border-rose-500/30", icon: "text-rose-400" },
  lifestyle: { bg: "bg-violet-500/10", border: "border-violet-500/30", icon: "text-violet-400" },
  robotics: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", icon: "text-cyan-400" },
  "global-trading": { bg: "bg-blue-500/10", border: "border-blue-500/30", icon: "text-blue-400" },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BUSINESS_DIVISIONS.map((div) => ({ slug: div.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const division = BUSINESS_DIVISIONS.find((d) => d.slug === slug);
  if (!division) return { title: "Division Not Found" };
  return {
    title: `${division.title} — TAKNISER ONE GLOBE`,
    description: division.description,
  };
}

export default async function DivisionDetailPage({ params }: Props) {
  const { slug } = await params;
  const division = BUSINESS_DIVISIONS.find((d) => d.slug === slug);
  if (!division) notFound();

  const colors = colorMap[slug] || colorMap["global-trading"];
  const IconComponent = iconMap[division.icon] || Globe;

  const divIdx = BUSINESS_DIVISIONS.findIndex((d) => d.slug === slug);
  const prevDiv = divIdx > 0 ? BUSINESS_DIVISIONS[divIdx - 1] : null;
  const nextDiv = divIdx < BUSINESS_DIVISIONS.length - 1 ? BUSINESS_DIVISIONS[divIdx + 1] : null;

  return (
    <div className="pt-24 min-h-screen">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/divisions"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Business Divisions</span>
        </Link>
      </div>

      {/* Division Hero */}
      <section className={`relative py-20 bg-grid-pattern overflow-hidden`}>
        <div className={`absolute top-1/3 left-1/4 w-[500px] h-[300px] ${colors.bg} rounded-full blur-[150px] pointer-events-none opacity-30`} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className={`p-4 rounded-2xl ${colors.bg} border ${colors.border}`}>
                  <IconComponent className={`w-10 h-10 ${colors.icon}`} />
                </div>
                <span className={`font-mono font-bold text-lg ${colors.icon}`}>Division {division.code}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                {division.title}
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">{division.tagline}</p>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl ${colors.bg} border ${colors.border} ${colors.icon} font-bold text-sm hover:opacity-80 transition-opacity group`}
              >
                <span>Request Division Inquiry</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Division Info Card */}
            <div className={`glass-panel rounded-3xl p-7 border ${colors.border} space-y-5`}>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-white/10 pb-3">
                Division Overview
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{division.description}</p>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Products & Services</div>
                <ul className="space-y-2">
                  {division.categories.map((cat) => (
                    <li key={cat} className="flex items-center gap-2.5 text-sm text-slate-200">
                      <CheckCircle2 className={`w-4 h-4 ${colors.icon} shrink-0`} />
                      <span>{cat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Relevance */}
      <section className="py-16 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-panel rounded-2xl p-6 border border-white/10 text-center">
              <Globe className="w-8 h-8 text-sky-400 mx-auto mb-3" />
              <div className="text-2xl font-extrabold text-white font-mono">190+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Countries Served</div>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-white/10 text-center">
              <div className={`mx-auto mb-3 p-2 rounded-xl ${colors.bg} border ${colors.border} w-fit`}>
                <IconComponent className={`w-6 h-6 ${colors.icon}`} />
              </div>
              <div className="text-2xl font-extrabold text-white font-mono">{division.categories.length}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Product Categories</div>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-white/10 text-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-2xl font-extrabold text-white font-mono">100+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Years of Engineering Heritage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation between Divisions */}
      <section className="py-8 bg-[#0b1120] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevDiv ? (
              <Link
                href={`/divisions/${prevDiv.slug}`}
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{prevDiv.title}</span>
              </Link>
            ) : <div />}
            <Link
              href="/divisions"
              className="text-xs font-bold text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-wider"
            >
              All Divisions
            </Link>
            {nextDiv ? (
              <Link
                href={`/divisions/${nextDiv.slug}`}
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors"
              >
                <span>{nextDiv.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </div>
  );
}
