"use client";

import { CORPORATE_INFO } from "@/lib/data";
import { ArrowRight, Globe2, Building2, History } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutSection() {
  const { t, currentLanguage } = useLanguage();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
          
          {/* Left: Visual Representation */}
          <div className="relative">
            <div className="aspect-[1543/1019] relative bg-slate-100 border border-slate-200 p-2 sm:p-2.5 rounded-2xl shadow-sm">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image 
                  src="/officeimage.png" 
                  alt="TAKNISER Global Corporate Headquarters - Dillenburg Campus" 
                  fill 
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            
            {/* Overlay Stat Box */}
            <div className={`absolute -bottom-6 bg-[#001822] p-5 sm:p-6 border border-[#009999] shadow-2xl hidden md:block rounded-xl ${
              currentLanguage === 'ar' ? '-left-4' : '-right-4'
            }`}>
              <div className="text-3xl font-black text-white mb-1">{CORPORATE_INFO.heritageYears}</div>
              <div className="text-[11px] font-bold text-[#009999] uppercase tracking-wider">{t("years-of-excellence")}</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`space-y-8 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#009999]/30 text-[#009999] text-[11px] font-semibold tracking-[0.15em] uppercase bg-slate-50 rounded-full">
                <History className="w-4 h-4" strokeWidth={1.5} />
                <span>{t("about-takniser")}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#002d3b] uppercase tracking-tight leading-tight">
                {t("century-of")} <span className="text-[#009999]">{t("legacy")}</span>
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed tracking-wide">
                {t("footer-corporate-tagline")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className={`flex items-center gap-3 text-[#009999] ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <div className="p-2 bg-slate-50 rounded-lg">
                    <Building2 className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold tracking-wide text-sm text-[#002d3b]">{t("global-hub")}</h3>
                </div>
                <p className={`text-sm text-slate-500 font-light ${currentLanguage === 'ar' ? 'mr-[52px]' : 'ml-[52px]'}`}>{t("footer-hq-location")}</p>
              </div>
              
              <div className="space-y-2">
                <div className={`flex items-center gap-3 text-[#009999] ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <div className="p-2 bg-slate-50 rounded-lg">
                    <Globe2 className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold tracking-wide text-sm text-[#002d3b]">{t("worldwide-reach")}</h3>
                </div>
                <p className={`text-sm text-slate-500 font-light ${currentLanguage === 'ar' ? 'mr-[52px]' : 'ml-[52px]'}`}>{t("operating-in-countries")}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#009999] hover:bg-[#008080] text-white text-xs font-bold uppercase tracking-widest transition-colors rounded-none"
              >
                <span>{t("read-full-story")}</span>
                <ArrowRight className={`w-4 h-4 ${currentLanguage === 'ar' ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
