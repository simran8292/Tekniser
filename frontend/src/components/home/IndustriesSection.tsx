"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function IndustriesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-widest uppercase bg-white">
            <Sparkles className="w-3.5 h-3.5 text-[#009999]" />
            <span>{t("ind-kicker")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002d3b] uppercase tracking-tight">
            {t("ind-title")}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            {t("ind-desc")}
          </p>
        </div>

        {/* Pictorial Dual Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Spotlight 1: Space & Energy */}
          <div className="relative h-72 border border-slate-200 overflow-hidden shadow-sm group">
            <Image
              src="/platform_space.jpg"
              alt="Space Exploration and Earth Observation Impact"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001822]/90 via-[#001822]/40 to-transparent p-6 sm:p-8 flex flex-col justify-end">
              <span className="text-xs font-mono font-bold text-[#00cccc] uppercase tracking-widest">
                {t("ind-spotlight1-kicker")}
              </span>
              <h3 className="text-white font-black text-xl sm:text-2xl uppercase tracking-tight mt-1">
                {t("ind-spotlight1-title")}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-md">
                {t("ind-spotlight1-desc")}
              </p>
            </div>
          </div>

          {/* Spotlight 2: Sustainable Earth & Resources */}
          <div className="relative h-72 border border-slate-200 overflow-hidden shadow-sm group">
            <Image
              src="/sustainable_earth_slide.jpg"
              alt="Sustainable Earth and Natural Resource Transitions"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001822]/90 via-[#001822]/40 to-transparent p-6 sm:p-8 flex flex-col justify-end">
              <span className="text-xs font-mono font-bold text-[#00cccc] uppercase tracking-widest">
                {t("ind-spotlight2-kicker")}
              </span>
              <h3 className="text-white font-black text-xl sm:text-2xl uppercase tracking-tight mt-1">
                {t("ind-spotlight2-title")}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-md">
                {t("ind-spotlight2-desc")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/industries" className="btn-siemens btn-siemens-primary inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-8 py-3.5">
            <span>{t("ind-cta")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
