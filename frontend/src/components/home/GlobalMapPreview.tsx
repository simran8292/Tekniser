"use client";

import { useState } from "react";
import Image from "next/image";
import { GLOBAL_NETWORK_LOCATIONS } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

const REGION_COLORS: Record<string, string> = {
  Europe: "#009999",
  "North America": "#00cccc",
  "Latin America": "#10b981",
  Africa: "#d97706",
  "Middle East": "#009999",
  Asia: "#8b5cf6",
  Oceania: "#06b6d4",
};

const REGION_TRANSLATIONS: Record<string, Record<string, string>> = {
  de: {
    "Europe": "Europa",
    "North America": "Nordamerika",
    "Latin America": "Lateinamerika",
    "Africa": "Afrika",
    "Middle East": "Mittlerer Osten",
    "Asia": "Asien",
    "Oceania": "Ozeanien",
  },
  ar: {
    "Europe": "أوروبا",
    "North America": "أمريكا الشمالية",
    "Latin America": "أمريكا اللاتينية",
    "Africa": "أفريقيا",
    "Middle East": "الشرق الأوسط",
    "Asia": "آسيا",
    "Oceania": "أوقيانوسيا",
  },
};

// Convert a flag emoji (e.g. "🇩🇪") to an ISO code ("de") so a real flag image can be shown.
// Emoji flags don't render on Windows, so we use flag images instead. HQ ("🌐") falls back to Germany.
function flagCode(flag?: string): string {
  const chars = [...(flag || "")];
  if (chars.length === 2 && chars.every((c) => { const p = c.codePointAt(0) ?? 0; return p >= 0x1f1e6 && p <= 0x1f1ff; })) {
    return chars.map((c) => String.fromCharCode((c.codePointAt(0) ?? 0) - 0x1f1e6 + 97)).join("");
  }
  return "de";
}

const flagUrl = (flag?: string) => `https://flagcdn.com/w40/${flagCode(flag)}.png`;

export default function GlobalMapPreview() {
  const { t, currentLanguage } = useLanguage();
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    title: string;
    region: string;
    type?: string;
    desc?: string;
    city?: string;
    country?: string;
    coverage?: string;
    flag?: string;
  } | null>(null);

  const regions = [...new Set(GLOBAL_NETWORK_LOCATIONS.map((l) => l.region))];
  const filteredLocations = activeRegion
    ? GLOBAL_NETWORK_LOCATIONS.filter((l) => l.region === activeRegion)
    : GLOBAL_NETWORK_LOCATIONS;

  return (
    <section className="py-24 bg-[#002d3b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-wider uppercase rounded-none bg-transparent">
            <span>{t("map-kicker")}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-wide uppercase">
            {t("map-title1")} <span className="font-bold text-[#009999]">{t("map-title2")}</span>
          </h2>
          <p className="text-slate-200 text-base">
            {t("map-desc")}
          </p>
        </div>

        {/* Region Filter Tabs - Siemens Square Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveRegion(null)}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-none border ${!activeRegion
              ? "bg-[#009999] border-[#009999] text-white"
              : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white bg-transparent"
              }`}
          >
            {t("map-all-regions")}
          </button>
          {regions.map((region) => {
            const localizedRegionName = REGION_TRANSLATIONS[currentLanguage]?.[region] || region;
            return (
              <button
                key={region}
                onClick={() => setActiveRegion(activeRegion === region ? null : region)}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-none border"
                style={
                  activeRegion === region
                    ? { backgroundColor: "#009999", borderColor: "#009999", color: "#ffffff" }
                    : { borderColor: "rgba(255,255,255,0.15)", color: "#cbd5e1", backgroundColor: "transparent" }
                }
              >
                {localizedRegionName}
              </button>
            );
          })}
        </div>

        {/* SVG World Map Wrapper - Flat Rectangular */}
        <div className="relative bg-[#001822] border border-slate-800 overflow-hidden p-2 sm:p-4 rounded-none shadow-none">
          <div className="relative w-full aspect-[2/1] bg-[#001b24] rounded-none overflow-hidden">
            {/* Real world map background image */}
            <Image
              src="/world_map_dark.png"
              alt="TAKNISER Global Operational Map"
              fill
              className="object-cover opacity-80"
              priority
            />
            {/* Interactive SVG overlay */}
            <svg
              viewBox="0 0 1000 500"
              className="absolute inset-0 w-full h-full z-10"
              style={{ background: "transparent" }}
            >

              {/* Location Markers */}
              {filteredLocations.map((loc, idx) => {
                const cx = (loc.coordinates.x / 100) * 1000;
                const cy = (loc.coordinates.y / 100) * 500;
                const color = REGION_COLORS[loc.region] || "#009999";
                const isHQ = loc.type === "HQ";
                const isLogistics = loc.type === "LOGISTICS_HUB";

                return (
                  <g
                    key={`${loc.title}-${loc.country}-${idx}`}
                    className="cursor-pointer group"
                    onMouseEnter={() => {
                      setTooltip({
                        x: loc.coordinates.x,
                        y: loc.coordinates.y,
                        title: loc.title,
                        region: loc.region,
                        type: loc.type,
                        desc: loc.description,
                        city: loc.city,
                        country: loc.country,
                        coverage: loc.coverage,
                        flag: loc.flag,
                      });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  >
                    {/* Pulse ring for HQ */}
                    {isHQ && (
                      <>
                        <circle cx={cx} cy={cy} r="18" fill={color + "1A"} stroke={color} strokeWidth="1" opacity="0.6" />
                        <circle cx={cx} cy={cy} r="10" fill={color + "22"} stroke={color} strokeWidth="1.5" opacity="0.8" />
                      </>
                    )}

                    {/* Vector Office Building Pin Graphic for Points */}
                    {isHQ ? (
                      <g transform={`translate(${cx - 20}, ${cy - 34})`}>
                        {/* Global HQ Prominent Vector Building */}
                        <image
                          href="/office_vector_transparent.png"
                          width="40"
                          height="34"
                          className="invert brightness-150"
                        />
                      </g>
                    ) : (
                      <g transform={`translate(${cx - 13}, ${cy - 22})`}>
                        {/* Regional Office Enhanced Vector Building */}
                        <image
                          href="/office_vector_transparent.png"
                          width="26"
                          height="22"
                          className="invert brightness-125 opacity-90 group-hover:opacity-100 group-hover:scale-125 transition-transform"
                        />
                      </g>
                    )}

                    {/* Country flag on a pole above the building roof */}
                    {(() => {
                      const poleX = isHQ ? cx + 12 : cx + 8;
                      const roofY = isHQ ? cy - 30 : cy - 19;
                      const poleH = isHQ ? 14 : 10;
                      const fw = isHQ ? 16 : 12;
                      const fh = isHQ ? 11 : 8;
                      return (
                        <g className="pointer-events-none">
                          <line x1={poleX} y1={roofY} x2={poleX} y2={roofY - poleH} stroke="#e2e8f0" strokeWidth={0.8} />
                          <rect x={poleX} y={roofY - poleH} width={fw} height={fh} fill="#001822" stroke="#e2e8f0" strokeWidth={0.4} />
                          <image href={flagUrl(loc.flag)} x={poleX} y={roofY - poleH} width={fw} height={fh} preserveAspectRatio="none" />
                        </g>
                      );
                    })()}

                    {/* TAKNISER brand label under the pin */}
                    <text
                      x={cx}
                      y={cy + (isHQ ? 13 : 10)}
                      textAnchor="middle"
                      fontSize={isHQ ? 8 : 6}
                      fontWeight={800}
                      letterSpacing="0.06em"
                      fill={isHQ ? "#36b39c" : "#ffffff"}
                      stroke="#001822"
                      strokeWidth={2}
                      paintOrder="stroke"
                      className="pointer-events-none select-none"
                      style={{ fontFamily: "inherit" }}
                    >
                      TAKNISER
                    </text>

                    {/* Base Pin Indicator Dot */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isHQ ? 4 : 3}
                      fill={color}
                      stroke="#001822"
                      strokeWidth={1}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Rich Hover Tooltip with Office Vector */}
            {tooltip && (
              <div
                className="absolute z-20 bg-[#001822]/95 backdrop-blur-md border border-[#009999] rounded-none p-3 text-xs shadow-2xl pointer-events-none flex items-center gap-3 transition-opacity duration-150"
                style={{
                  left: `${Math.min(Math.max(tooltip.x, 15), 85)}%`,
                  top: `${Math.max(tooltip.y - 6, 8)}%`,
                  transform: "translate(-50%, -100%)",
                  whiteSpace: "nowrap",
                }}
              >
                {/* Office Vector Thumbnail inside Tooltip */}
                <div className="w-12 h-12 relative shrink-0 bg-[#002d3b] border border-slate-700 p-1 flex items-center justify-center">
                  <Image
                    src="/office_vector_transparent.png"
                    alt="Office Vector"
                    fill
                    className="object-contain filter invert brightness-125 p-0.5"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-white text-xs mb-0.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={flagUrl(tooltip.flag)} alt={tooltip.country || ""} className="w-5 h-3.5 object-cover border border-slate-600" />
                    <span>{tooltip.title}</span>
                  </div>
                  <div className="text-[11px] font-mono" style={{ color: REGION_COLORS[tooltip.region] || "#00cccc" }}>
                    {tooltip.city ? `${tooltip.city}, ` : ""}{tooltip.country} {tooltip.coverage ? `• ${currentLanguage === 'de' ? 'Abdeckung' : currentLanguage === 'ar' ? 'التغطية' : 'Coverage'}: ${tooltip.coverage}` : ""} • {tooltip.type}
                  </div>
                  {tooltip.desc && (
                    <div className="text-[10px] text-slate-300 font-normal max-w-xs truncate mt-0.5">
                      {tooltip.desc}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Row - Flat rectangular containers */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
          {[
            { label: t("stat-ghq"), value: "1", color: "text-white" },
            { label: t("stat-rhq"), value: "30", color: "text-[#009999]" },
            { label: t("stat-countries"), value: "190+", color: "text-[#009999]" },
            { label: t("stat-continents"), value: "6", color: "text-white" },
            { label: t("stat-logistics"), value: "3+", color: "text-[#009999]" },
            { label: t("stat-lives"), value: "30.2M+", color: "text-white" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#001822] border border-slate-800 rounded-none p-4 text-center shadow-none">
              <div className={`text-2xl sm:text-3xl font-bold ${stat.color} font-mono`}>
                {stat.value}
              </div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Location List */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:hidden">
          {filteredLocations.slice(0, 9).map((loc, idx) => (
            <div key={idx} className="bg-[#001822] border border-slate-800 rounded-none p-3 shadow-none">
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 shrink-0"
                  style={{ backgroundColor: REGION_COLORS[loc.region] || "#009999" }}
                />
                <div>
                  <div className="text-xs font-bold text-white leading-tight">{loc.title}</div>
                  <div className="text-[11px] text-slate-400">{loc.region} • {loc.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
