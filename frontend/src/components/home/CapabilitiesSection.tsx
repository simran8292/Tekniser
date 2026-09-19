"use client";

import Image from "next/image";
import { CAPABILITIES } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";
import {
  Compass, Factory, Search, ShoppingCart, HardHat, Network,
  Ship, Share2, Cpu, Zap, Landmark, Wrench
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Compass, Factory, Search, ShoppingCart, HardHat, Network,
  Ship, Share2, Cpu, Zap, Landmark, Wrench,
};

const capabilityImages: Record<number, string> = {
  0: "/chain_card_1_engineering.jpg",
  1: "/clean_robotics.jpg",
  2: "/vision_pillar_1.jpg",
  3: "/about_logistics_port.jpg",
  4: "/chain_card_5_epc.jpg",
  5: "/chain_card_6_truck.jpg",
  6: "/platform_trading.jpg",
  7: "/chain_card_7_warehouse.jpg",
  8: "/vision_pillar_3.jpg",
  9: "/engine_stage_3_discover.jpg",
  10: "/vision_pillar_5.jpg",
  11: "/vision_pillar_4.jpg",
};

export default function CapabilitiesSection() {
  const { t } = useLanguage();
  const displayCapabilities = CAPABILITIES;

  return (
    <section className="py-20 lg:py-24 bg-[#f8fafc] border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">

        {/* Section Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2.5px] bg-[#009999] inline-block rounded-full" />
              <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                {t("cap-section-kicker")}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002d3b] tracking-tight">
              {t("cap-section-title1")} <br className="hidden sm:inline" />
              <span className="text-[#009999]">{t("cap-section-title2")}</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1 max-w-2xl">
              {t("cap-section-desc")}
            </p>
          </div>
        </div>

        {/* Main Value Chain Grid: 70% Cards (Left) + 30% Hero Showcase (Right) */}
        <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 items-stretch relative">

          {/* Left: 70% Width - All 12 Split Cards in 2 Columns */}
          <div className="w-full xl:w-[70%] 2xl:w-[70%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
              {displayCapabilities.map((cap, idx) => {
                const IconComponent = iconMap[cap.icon] || Compass;
                const cardImg = capabilityImages[idx] || "/clean_robotics.jpg";
                const localizedTitle = t(`cap-item-${idx}-title`) || cap.title;
                const localizedDesc = t(`cap-item-${idx}-desc`) || cap.description;

                return (
                  <div
                    key={cap.title}
                    className="bg-white rounded-2xl border border-slate-200/80 p-3.5 sm:p-4 shadow-[0_2px_14px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,153,153,0.12)] hover:border-[#009999]/40 transition-all duration-300 flex items-stretch justify-between gap-3 group cursor-pointer"
                  >
                    {/* Left Text Side */}
                    <div className="flex-1 flex flex-col justify-between min-w-0 pr-1">
                      <div className="space-y-1.5">
                        {/* Icon Badge */}
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#e6f7f7] text-[#009999] flex items-center justify-center border border-[#009999]/20 shrink-0 group-hover:bg-[#009999] group-hover:text-white transition-colors duration-300">
                          <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                        </div>

                        {/* Title */}
                        <h3 className="text-[13px] sm:text-[14px] font-bold text-[#002230] leading-snug tracking-tight group-hover:text-[#009999] transition-colors pt-0.5">
                          {localizedTitle}
                        </h3>

                        {/* Description - Full visibility without clipping */}
                        <p className="text-[10.5px] sm:text-[11px] text-slate-500 leading-relaxed">
                          {localizedDesc}
                        </p>
                      </div>
                    </div>

                    {/* Right Image Side */}
                    <div className="relative w-[110px] sm:w-[130px] md:w-[135px] h-full min-h-[95px] rounded-xl overflow-hidden shrink-0 border border-slate-100 shadow-sm self-stretch">
                      <Image
                        src={cardImg}
                        alt={localizedTitle}
                        fill
                        sizes="(max-width: 640px) 120px, 150px"
                        className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Exactly 30% Width - S-Curve Organic Structure Hero Showcase UI */}
          <div className="w-full xl:w-[30%] 2xl:w-[30%] flex flex-col xl:[filter:drop-shadow(-8px_14px_28px_rgba(0,20,30,0.12))]">

            {/* Embedded SVG Definition for Exact S-Curve Shape */}
            <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
              <defs>
                <clipPath id="right-s-curve" clipPathUnits="objectBoundingBox">
                  <path d="M 0.22,0 C 0.10,0.14 0.00,0.28 0.00,0.45 C 0.00,0.65 0.12,0.82 0.24,1 L 0.92,1 Q 1,1 1,0.95 L 1,0.05 Q 1,0 0.92,0 Z" />
                </clipPath>
              </defs>
            </svg>

            <div className="relative w-full h-full bg-[#00141e] flex flex-col justify-between overflow-hidden rounded-[32px] xl:rounded-none xl:[clip-path:url(#right-s-curve)] group transition-all duration-500">

              {/* Top Hero Image with Smooth Zoom Effect */}
              <div className="relative w-full flex-1 min-h-[380px] lg:min-h-[460px] overflow-hidden bg-[#001824]">
                <Image
                  src="/value_chain_hero_new.jpg"
                  alt="Global Logistics, Port Infrastructure and Supply Chain Network"
                  fill
                  sizes="(max-width: 1280px) 100vw, 450px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                {/* Gradient vignette for seamless visual integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00141e] via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Curved Structure UI Content Card - Positioned cleanly below image */}
              <div className="relative p-6 sm:p-7 xl:py-6 xl:pr-5 xl:pl-[24%] bg-[#00141e] text-white shrink-0 border-t border-white/10 shadow-2xl z-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-[2px] bg-[#00cccc] rounded-full inline-block" />
                    <span className="text-[10px] sm:text-[10.5px] font-mono font-bold text-[#00cccc] uppercase tracking-wider">
                      {t("cap-showcase-kicker")}
                    </span>
                  </div>

                  <h3 className="text-[17px] sm:text-[19px] font-serif font-bold text-white tracking-tight leading-snug">
                    {t("cap-showcase-title1")} <br />
                    <span className="text-[#00cccc]">{t("cap-showcase-title2")}</span> <br />
                    {t("cap-showcase-title3")}
                  </h3>

                  <p className="text-[10.5px] sm:text-[11px] text-slate-200 leading-relaxed border-t border-white/10 pt-2.5 mt-2">
                    {t("cap-showcase-desc")}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
