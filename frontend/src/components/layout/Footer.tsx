"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Shield, Award, MapPin, Mail, Lock, ArrowRight } from "lucide-react";
import { BUSINESS_DIVISIONS } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t, currentLanguage } = useLanguage();

  return (
    <footer className="bg-[#002d3b] border-t border-slate-800 text-slate-300 relative overflow-hidden">
      
      {/* Prominent Contact CTA Section */}
      <div className="bg-[#009999] py-16 border-y border-[#008080]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 ${currentLanguage === 'ar' ? 'lg:flex-row-reverse text-right' : 'text-left'}`}>
            <div className="text-center lg:text-left space-y-3">
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                {t("footer-ready")}
              </h2>
              <p className="text-white max-w-2xl text-base sm:text-lg opacity-90">
                {t("footer-team-desc")}
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#002d3b] hover:bg-slate-100 transition-colors font-bold uppercase tracking-wider text-sm rounded-none flex items-center justify-center gap-2 shadow-lg"
              >
                <span>{t("footer-contact-team")}</span>
                <ArrowRight className={`w-4 h-4 text-[#002d3b] ${currentLanguage === 'ar' ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & German Heritage */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-56">
                <Image
                  src="/brand/logo.svg"
                  alt="TAKNISER ONE GLOBE Logo"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              {t("footer-german-desc")}
            </p>
            <div className={`flex flex-wrap items-center gap-3 pt-2 ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
              <div className="flex items-center gap-1.5 px-3 py-1 border border-slate-700 text-slate-300 text-xs font-semibold rounded-none">
                <Shield className="w-3.5 h-3.5 text-[#009999]" />
                <span>{t("footer-hq-location")}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 border border-slate-700 text-slate-300 text-xs font-semibold rounded-none">
                <Globe className="w-3.5 h-3.5 text-[#009999]" />
                <span>{t("showcase-countries")}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 border border-slate-700 text-slate-300 text-xs font-semibold rounded-none">
                <Award className="w-3.5 h-3.5 text-[#009999]" />
                <span>{t("vision-2046")}</span>
              </div>
            </div>
          </div>

          {/* Column 2: What We Do */}
          <div className={currentLanguage === 'ar' ? 'text-right' : 'text-left'}>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {t("what-we-do")}
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {BUSINESS_DIVISIONS.map((div) => (
                <li key={div.id}>
                  <Link
                    href={`/divisions/${div.slug}`}
                    className="hover:text-[#009999] transition-colors flex items-center gap-1.5"
                  >
                    <span>{div.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform & Capabilities */}
          <div className={currentLanguage === 'ar' ? 'text-right' : 'text-left'}>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {t("capabilities")}
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/capabilities" className="hover:text-[#009999] transition-colors">{t("cap-eng")}</Link></li>
              <li><Link href="/capabilities" className="hover:text-[#009999] transition-colors">{t("cap-mfg")}</Link></li>
              <li><Link href="/capabilities" className="hover:text-[#009999] transition-colors">{t("cap-source")}</Link></li>
              <li><Link href="/capabilities" className="hover:text-[#009999] transition-colors">{t("cap-procure")}</Link></li>
              <li><Link href="/capabilities" className="hover:text-[#009999] transition-colors">{t("cap-epc")}</Link></li>
              <li><Link href="/capabilities" className="hover:text-[#009999] transition-colors">{t("cap-logistics")}</Link></li>
            </ul>
          </div>

          {/* Column 4: Global HQ & Corporate Info */}
          <div className={currentLanguage === 'ar' ? 'text-right font-medium' : 'text-left font-normal'}>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {t("footer-global-presence")}
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className={`flex items-start gap-2.5 ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
                <MapPin className="w-4 h-4 text-[#009999] mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-white">{t("footer-global-hq")}</div>
                  <div className="text-xs text-slate-400">{t("footer-hq-location")}</div>
                </div>
              </div>
              <div className={`flex items-start gap-2.5 ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Globe className="w-4 h-4 text-[#009999] mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-white">{t("footer-regional-hq")}</div>
                  <div className="text-xs text-slate-400">{t("worldwide-reach")}</div>
                </div>
              </div>
              <div className={`flex items-center gap-2.5 ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Mail className="w-4 h-4 text-[#009999] shrink-0" />
                <Link href="/contact" className="hover:text-[#009999] transition-colors text-xs">
                  {t("footer-inquiries")}
                </Link>
              </div>
              <div className={`flex items-center gap-2.5 pt-2 ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <Link href="/admin/login" className="hover:text-white transition-colors text-xs">
                  {t("footer-admin-area")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className={`pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 ${currentLanguage === 'ar' ? 'md:flex-row-reverse' : ''}`}>
          <div>
            {t("footer-copyright")}
          </div>
          <div className={`flex items-center space-x-6 ${currentLanguage === 'ar' ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <a
              href="/TAKNISER_ONE_GLOBE_Website_Content.docx"
              download
              className="text-[#009999] hover:text-white hover:underline transition-colors font-semibold flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              <span>{t("footer-download-doc")}</span>
            </a>
            <Link href="/privacy" className="hover:text-white transition-colors">{t("footer-privacy")}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{t("footer-terms")}</Link>
            <Link href="/global-network" className="hover:text-white transition-colors">{t("footer-global-footprint")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
