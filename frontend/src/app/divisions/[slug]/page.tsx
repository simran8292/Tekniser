import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Globe, Rocket, Pickaxe, Sprout, HeartPulse, Home, Bot, CheckCircle2 } from "lucide-react";
import { BUSINESS_DIVISIONS } from "@/lib/data";

const divisionImages: Record<string, string> = {
  "space-economy": "/platform_space.jpg",
  "mining-minerals": "/platform_mining.jpg",
  "agtech": "/platform_agtech.jpg",
  "lifecare": "/platform_lifecare.jpg",
  "lifestyle": "/platform_lifestyle.jpg",
  "robotics": "/platform_robotics.jpg",
  "global-trading": "/platform_trading.jpg",
};

const iconMap: Record<string, React.ElementType> = {
  Rocket, Pickaxe, Sprout, HeartPulse, Home, Bot, Globe,
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

  const IconComponent = iconMap[division.icon] || Globe;

  const divIdx = BUSINESS_DIVISIONS.findIndex((d) => d.slug === slug);
  const prevDiv = divIdx > 0 ? BUSINESS_DIVISIONS[divIdx - 1] : null;
  const nextDiv = divIdx < BUSINESS_DIVISIONS.length - 1 ? BUSINESS_DIVISIONS[divIdx + 1] : null;

  return (
    <div className="pt-24 min-h-screen bg-[#f4f5f6] text-slate-800">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 bg-[#f4f5f6]">
        <Link
          href="/divisions"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#009999] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Business Divisions</span>
        </Link>
      </div>

      {/* Division Hero - Siemens Executive Dark with Themed Faded Background */}
      <section className="relative py-24 lg:py-28 bg-[#001822] text-white overflow-hidden mt-4 border-y border-slate-800">
        {/* Thematic Clear Background Image with Legibility Fade */}
        <div className="absolute inset-0 z-0">
          <Image
            src={divisionImages[division.slug] || "/hero_industrial_bg.png"}
            alt={division.title}
            fill
            priority
            className="object-cover opacity-55 filter contrast-110 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/80 via-[#001822]/60 to-[#001822]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,24,34,0.7)_90%)] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#002d3b] border border-slate-700 rounded-none text-[#009999]">
                  <IconComponent className="w-8 h-8 text-[#009999]" />
                </div>
                <span className="font-mono font-bold text-sm uppercase tracking-widest text-[#009999]">
                  Strategic Sector
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight uppercase">
                {division.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">{division.tagline}</p>
              <Link
                href="/contact"
                className="btn-siemens btn-siemens-primary flex items-center justify-center gap-2 max-w-fit rounded-none font-bold text-sm uppercase tracking-wider"
              >
                <span>Request Division Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Division Info Card & Visual Representation */}
            <div className="bg-slate-50 border border-slate-200 rounded-none overflow-hidden space-y-0 text-slate-800 shadow-none">
              {/* Pictorial Header */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden border-b border-slate-200">
                <Image
                  src={divisionImages[division.slug] || "/hero_industrial_bg.png"}
                  alt={division.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002d3b]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 text-white">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00cccc]">
                    Sector Facility & Operations
                  </div>
                  <div className="text-lg font-black uppercase">
                    {division.title} Platform
                  </div>
                </div>
              </div>

              <div className="p-7 space-y-5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-3">
                  Division Overview
                </div>
                <p className="text-slate-650 text-sm leading-relaxed">{division.description}</p>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">Products & Services</div>
                  <ul className="space-y-2">
                    {division.categories.map((cat) => (
                      <li key={cat} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#009999] shrink-0" />
                        <span>{cat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Relevance - Flat Gray Background */}
      <section className="py-16 bg-[#f4f5f6] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-none p-6 text-center shadow-none text-slate-800">
              <Globe className="w-8 h-8 text-[#009999] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[#002d3b] font-mono">190+</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mt-1">Countries Served</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-none p-6 text-center shadow-none text-slate-800">
              <div className="mx-auto mb-3 p-2 bg-slate-50 border border-slate-200 rounded-none w-fit">
                <IconComponent className="w-6 h-6 text-[#009999]" />
              </div>
              <div className="text-2xl font-bold text-[#002d3b] font-mono">{division.categories.length}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mt-1">Product Categories</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-none p-6 text-center shadow-none text-slate-800">
              <CheckCircle2 className="w-8 h-8 text-[#009999] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[#002d3b] font-mono">100+</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold mt-1">Years Heritage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation between Divisions - White Background panel */}
      <section className="py-8 bg-white border-t border-slate-200 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevDiv ? (
              <Link
                href={`/divisions/${prevDiv.slug}`}
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#009999] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{prevDiv.title}</span>
              </Link>
            ) : <div />}
            <Link
              href="/divisions"
              className="text-[10px] font-bold text-slate-400 hover:text-[#009999] transition-colors uppercase tracking-wider"
            >
              All Divisions
            </Link>
            {nextDiv ? (
              <Link
                href={`/divisions/${nextDiv.slug}`}
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#009999] transition-colors"
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
