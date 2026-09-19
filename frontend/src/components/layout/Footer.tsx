"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Shield,
  Award,
  MapPin,
  Mail,
  Lock,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { BUSINESS_DIVISIONS } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t, currentLanguage } = useLanguage();

  return (
    <footer className="bg-[#002d3b] border-t border-slate-800 text-slate-300 relative overflow-hidden">

      {/* ─────────────────────────────────────────────────────────────
          FULL-WIDTH CONTACT CTA BANNER (Exact #009999 Background)
      ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden bg-[#009999] min-h-[320px] lg:min-h-[360px] flex items-center">
        
        {/* Background Image on Right Side */}
        <div className="absolute inset-0 lg:left-[36%] lg:inset-y-0 z-0">
          <Image
            src="/cta_engineers_port.jpg"
            alt="TAKNISER Global Industrial Operations"
            fill
            sizes="(max-width: 1024px) 100vw, 64vw"
            className="object-cover object-[52%_center] lg:object-[46%_22%] filter contrast-[1.04] brightness-[0.98]"
            priority
          />
          {/* Gradient on mobile/tablet so text is 100% readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#009999] via-[#009999]/95 to-[#009999]/50 lg:hidden" />
        </div>

        {/* Organic Curved Wave Divider with Glowing Edge (Desktop Only) */}
        <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
          <svg
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="ctaTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#009999" />
                <stop offset="100%" stopColor="#008c8c" />
              </linearGradient>
            </defs>
            {/* Filled Teal Wave Shape covering left side */}
            <path
              d="M 0,0 L 530,0 C 565,85 550,185 508,265 C 472,335 448,415 455,500 L 0,500 Z"
              fill="url(#ctaTealGrad)"
            />
            {/* Subtle Edge Line on the Wave */}
            <path
              d="M 530,0 C 565,85 550,185 508,265 C 472,335 448,415 455,500"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeOpacity="0.35"
            />
          </svg>
        </div>

        {/* Left Content Block inside standard container */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-8 lg:py-10">
          <div className={`w-full lg:w-[50%] flex flex-col justify-center space-y-4 ${currentLanguage === 'ar' ? 'text-right' : 'text-left'}`}>
            
            {/* Main Headline */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] leading-[1.14] text-white tracking-tight">
                <span className="font-serif font-bold text-white">Ready to Work with </span>
                <br className="hidden sm:inline" />
                <span className="font-sans font-black text-white tracking-tight uppercase">
                  TAKNISER?
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-white/95 text-xs sm:text-sm lg:text-[14px] leading-relaxed max-w-lg font-normal">
              {t("footer-team-desc")}
            </p>

            {/* Action Button */}
            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3 bg-white hover:bg-[#002d3b] text-[#009999] hover:text-white transition-all duration-300 font-bold uppercase tracking-wider text-xs sm:text-[13px] rounded-none shadow-lg group"
              >
                <span>{t("footer-contact-team")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
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
              <span className="font-sans font-black tracking-[0.04em] text-white text-3xl uppercase select-none">
                TAKNISER
              </span>
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
              <Link
                href="/vision-2046"
                className="flex items-center gap-1.5 px-3 py-1 border border-slate-700 text-slate-300 hover:text-[#00cccc] hover:border-[#009999] transition-all text-xs font-semibold rounded-none"
              >
                <Award className="w-3.5 h-3.5 text-[#009999]" />
                <span>{t("vision-2046")}</span>
              </Link>
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
              <div className={`flex items-center gap-2.5 ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Briefcase className="w-4 h-4 text-[#009999] shrink-0" />
                <Link href="/contact#careers" className="hover:text-[#009999] transition-colors text-xs">
                  Opportunities &amp; Careers
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
            <Link href="/privacy" className="hover:text-white transition-colors">{t("footer-privacy")}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{t("footer-terms")}</Link>
            <Link href="/global-network" className="hover:text-white transition-colors">{t("footer-global-footprint")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
