"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, ShieldCheck, Sparkles, ChevronRight, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t, currentLanguage } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideData = [
    {
      id: "legacy",
      kicker: t("s1-kicker"),
      title: t("s1-title"),
      highlight: t("s1-highlight"),
      description: t("s1-desc"),
      primaryCta: { text: t("s1-primary"), href: "/about" },
      secondaryCta: { text: t("s1-secondary"), href: "/global-network" },
      bgImage: "/home_sec22.webp",
    },
    {
      id: "responsibility",
      kicker: t("s2-kicker"),
      title: t("s2-title"),
      highlight: t("s2-highlight"),
      description: t("s2-desc"),
      primaryCta: { text: t("s2-primary"), href: "/responsibility" },
      secondaryCta: { text: t("s2-secondary"), href: "/responsibility/sustainable-earth" },
      bgImage: "/sustainable_earth_slide.jpg",
    },
    {
      id: "what-we-do",
      kicker: t("s3-kicker"),
      title: t("s3-title"),
      highlight: t("s3-highlight"),
      description: t("s3-desc"),
      primaryCta: { text: t("s3-primary"), href: "/divisions" },
      secondaryCta: { text: t("s3-secondary"), href: "/capabilities" },
      bgImage: "/7core.webp",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slideData.length]);

  const slide = slideData[currentSlide];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 z-0">
        {slideData.map((s, index) => (
          <Image
            key={s.id}
            src={s.bgImage}
            alt={s.title}
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
              }`}
            style={{ transitionProperty: "opacity, transform" }}
          />
        ))}
        {/* Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001822]/95 via-[#001822]/60 to-transparent z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001822]/90 via-[#001822]/40 to-transparent z-1 lg:hidden" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center lg:text-left transition-opacity duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Dynamic Content */}
          <div className="lg:col-span-7 space-y-5 text-left" key={slide.id}>
            <div className="text-xs sm:text-sm font-normal text-[#009999] uppercase tracking-[0.18em] animate-fade-in-up">
              {slide.kicker}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-normal leading-[1.15] uppercase animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              {slide.title} <br className="hidden sm:inline" />
              <span className="text-[#009999]">{slide.highlight}</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200 max-w-2xl font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {slide.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Link href={slide.primaryCta.href} className="w-full sm:w-auto btn-siemens btn-siemens-primary flex items-center justify-center gap-2">
                <span>{slide.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={slide.secondaryCta.href} className="w-full sm:w-auto btn-siemens btn-siemens-outline-white flex items-center justify-center gap-2">
                <Globe className="w-4 h-4 text-[#009999]" />
                <span>{slide.secondaryCta.text}</span>
              </Link>
            </div>

            {/* Slider Dots */}
            <div className="flex gap-2 pt-8">
              {slideData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 transition-all rounded-none ${index === currentSlide ? "w-8 bg-[#009999]" : "w-4 bg-slate-600 hover:bg-slate-500"}`}
                  aria-label={`${t("go-to-slide")} ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase Card (Static branding) */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative bg-[#001822]/90 p-6 sm:p-8 border border-slate-800 space-y-6 rounded-none backdrop-blur-md">
              <div className="relative w-full h-20 bg-[#001b24] px-6 py-3 flex items-center justify-center border border-slate-800 rounded-none">
                <span className="font-sans font-black tracking-[0.04em] text-[#36b39c] text-2xl uppercase select-none">
                  TAKNISER
                </span>
              </div>
              <div className="space-y-4 text-left">
                <div className={`flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2 ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <span className="flex items-center gap-1.5 text-[#009999]"><ShieldCheck className="w-4 h-4 text-[#009999] -mt-0.5" /><span className="leading-none pt-0.5">{t("showcase-heritage")}</span></span>
                  <span className="text-[#009999] flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#009999] -mt-0.5" /><span className="leading-none pt-0.5">{t("showcase-countries")}</span></span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t("showcase-desc")}
                </p>
              </div>
              <Link href="/vision-2046" className={`flex items-center justify-between p-4 bg-[#001b24] border border-slate-800 hover:border-[#009999] transition-all group rounded-none ${currentLanguage === 'ar' ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center gap-3 text-left ${currentLanguage === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                  <Sparkles className="w-5 h-5 text-[#009999] shrink-0" />
                  <div>
                    <div className="text-[10px] font-bold text-[#009999] uppercase tracking-wider">{t("showcase-roadmap")}</div>
                    <div className="text-xs text-slate-400">{t("showcase-vision-desc")}</div>
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 text-[#009999] group-hover:translate-x-1 transition-transform -mt-0.5 ${currentLanguage === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
