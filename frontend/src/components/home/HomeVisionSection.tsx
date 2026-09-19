"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function HomeVisionSection() {
  const { t, currentLanguage } = useLanguage();

  const pillars = [
    { label: t("pillar-1-title"), desc: t("pillar-1-desc") },
    { label: t("pillar-2-title"), desc: t("pillar-2-desc") },
    { label: t("pillar-3-title"), desc: t("pillar-3-desc") },
    { label: t("pillar-4-title"), desc: t("pillar-4-desc") },
  ];

  return (
    <section className="py-24 bg-[#001822] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">

        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-wider uppercase rounded-none bg-transparent">
          <Sparkles className="w-4 h-4 text-[#009999]" />
          <span>{t("home-vision-kicker")}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight uppercase">
          {t("home-vision-title").split(" ")[0]} <span className="text-[#009999]">{t("home-vision-title").split(" ")[1] || "2046"}</span>
        </h2>

        <blockquote className={`text-lg sm:text-xl text-slate-100 font-normal leading-relaxed max-w-4xl mx-auto pl-6 italic ${
          currentLanguage === 'ar' ? 'border-r-4 border-[#009999] pr-6 text-right' : 'border-l-4 border-[#009999] text-left'
        }`}>
          {t("home-vision-quote")}
        </blockquote>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          {pillars.map((pillar) => (
            <div key={pillar.label} className="bg-[#002d3b] border border-slate-800 rounded-none p-4 text-center">
              <div className="text-sm font-bold text-[#009999] mb-1">{pillar.label}</div>
              <div className="text-xs text-slate-300 leading-snug">{pillar.desc}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/vision-2046"
            className="w-full sm:w-auto btn-siemens btn-siemens-primary flex items-center justify-center gap-2"
          >
            <span>{t("home-vision-cta")}</span>
            <ArrowRight className={`w-4 h-4 ${currentLanguage === 'ar' ? 'rotate-180' : ''}`} />
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto btn-siemens btn-siemens-outline-white flex items-center justify-center gap-2"
          >
            <span>{t("home-heritage-cta")}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
