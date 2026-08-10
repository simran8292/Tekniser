"use client";

import { useState } from "react";
import { GLOBAL_NETWORK_LOCATIONS } from "@/lib/data";

const REGION_COLORS: Record<string, string> = {
  Europe: "#0284c7",
  "North America": "#0ea5e9",
  "Latin America": "#10b981",
  Africa: "#d97706",
  "Middle East": "#b45309",
  Asia: "#6d28d9",
  Oceania: "#0891b2",
};

export default function GlobalMapPreview() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; title: string; region: string } | null>(null);

  const regions = [...new Set(GLOBAL_NETWORK_LOCATIONS.map((l) => l.region))];
  const filteredLocations = activeRegion
    ? GLOBAL_NETWORK_LOCATIONS.filter((l) => l.region === activeRegion)
    : GLOBAL_NETWORK_LOCATIONS;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full german-badge text-xs font-bold tracking-wider uppercase">
            <span>Global Operational Presence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            One Globe. <span className="gradient-text-blue">One Network.</span>
          </h2>
          <p className="text-slate-600 text-base">
            TAKNISER ONE GLOBE operates through 29 Regional Headquarters, strategic logistics hubs, and business offices across 190+ countries and 6 continents.
          </p>
        </div>

        {/* Region Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveRegion(null)}
            className={`px-3 py-1.5 text-xs font-bold rounded-full border transition-all ${
              !activeRegion
                ? "bg-sky-600 border-sky-600 text-white shadow-md shadow-sky-600/10"
                : "border-slate-200 text-slate-600 hover:border-slate-400"
            }`}
          >
            All Regions
          </button>
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(activeRegion === region ? null : region)}
              className={`px-3 py-1.5 text-xs font-bold rounded-full border transition-all`}
              style={
                activeRegion === region
                  ? { backgroundColor: REGION_COLORS[region] + "1A", borderColor: REGION_COLORS[region], color: REGION_COLORS[region] }
                  : { borderColor: "#cbd5e1", color: "#64748b" }
              }
            >
              {region}
            </button>
          ))}
        </div>

        {/* SVG World Map */}
        <div className="relative glass-panel rounded-3xl border border-slate-200/80 overflow-hidden p-2 sm:p-4">
          <div className="relative w-full aspect-[2/1]">
            {/* Simple world map outlines as an SVG background */}
            <svg
              viewBox="0 0 1000 500"
              className="absolute inset-0 w-full h-full"
              style={{ background: "transparent" }}
            >
              {/* World map simplified continents */}
              {/* North America */}
              <path d="M 100 80 L 230 70 L 250 120 L 220 160 L 200 200 L 180 240 L 160 260 L 140 250 L 100 210 L 80 180 L 70 140 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
              {/* South America */}
              <path d="M 160 260 L 200 270 L 230 300 L 240 360 L 210 400 L 180 420 L 160 400 L 150 360 L 155 300 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
              {/* Europe */}
              <path d="M 420 60 L 520 55 L 540 80 L 530 120 L 510 130 L 480 125 L 460 110 L 430 100 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
              {/* Africa */}
              <path d="M 440 140 L 530 130 L 560 160 L 565 220 L 550 300 L 510 360 L 470 380 L 440 360 L 420 280 L 410 200 L 420 160 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
              {/* Asia */}
              <path d="M 530 60 L 750 50 L 840 80 L 870 130 L 860 180 L 800 200 L 740 210 L 680 200 L 620 220 L 580 200 L 540 170 L 530 130 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
              {/* Middle East */}
              <path d="M 540 150 L 600 145 L 625 175 L 620 210 L 590 220 L 560 215 L 540 185 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
              {/* Australia */}
              <path d="M 780 290 L 860 280 L 890 320 L 880 370 L 840 390 L 790 380 L 770 340 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />

              {/* Location Markers */}
              {filteredLocations.map((loc, idx) => {
                const cx = (loc.coordinates.x / 100) * 1000;
                const cy = (loc.coordinates.y / 100) * 500;
                const color = REGION_COLORS[loc.region] || "#0284c7";
                const isHQ = loc.type === "HQ";
                const isLogistics = loc.type === "LOGISTICS_HUB";
                return (
                  <g key={idx}>
                    {/* Pulse ring for HQ */}
                    {isHQ && (
                      <>
                        <circle cx={cx} cy={cy} r="14" fill={color + "1A"} stroke={color} strokeWidth="1" opacity="0.6" />
                        <circle cx={cx} cy={cy} r="8" fill={color + "22"} stroke={color} strokeWidth="1.5" opacity="0.8" />
                      </>
                    )}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isHQ ? 5 : isLogistics ? 4 : 3}
                      fill={color}
                      stroke="rgba(15,23,42,0.3)"
                      strokeWidth={isHQ ? 1.5 : 1}
                      className="cursor-pointer"
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.closest("svg")!.getBoundingClientRect();
                        const svgX = (cx / 1000) * rect.width;
                        const svgY = (cy / 500) * rect.height;
                        setTooltip({ x: svgX, y: svgY, title: loc.title, region: loc.region });
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Tooltip */}
            {tooltip && (
              <div
                className="absolute z-20 glass-panel border border-slate-200 rounded-lg px-3 py-2 text-xs shadow-lg pointer-events-none"
                style={{
                  left: `${Math.min(tooltip.x, 70)}%`,
                  top: `${Math.max(tooltip.y - 10, 5)}%`,
                  transform: "translate(-50%, -100%)",
                  whiteSpace: "nowrap",
                }}
              >
                <div className="font-bold text-slate-900 text-xs mb-0.5">{tooltip.title}</div>
                <div className="text-slate-500" style={{ color: REGION_COLORS[tooltip.region] }}>
                  {tooltip.region}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">
          {[
            { label: "Global HQ", value: "1", color: "text-amber-700" },
            { label: "Regional HQs", value: "29", color: "text-sky-700" },
            { label: "Countries & Territories", value: "190+", color: "text-emerald-700" },
            { label: "Continents", value: "6", color: "text-violet-700" },
            { label: "Logistics Hubs", value: "3+", color: "text-cyan-700" },
          ].map((stat) => (
            <div key={stat.label} className="glass-panel rounded-xl p-4 text-center border border-slate-200/80">
              <div className={`text-2xl sm:text-3xl font-extrabold ${stat.color} font-mono`}>
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Location List (fallback / accessibility) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:hidden">
          {filteredLocations.slice(0, 9).map((loc, idx) => (
            <div key={idx} className="glass-panel rounded-xl p-3 border border-slate-200/80">
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: REGION_COLORS[loc.region] || "#0284c7" }}
                />
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">{loc.title}</div>
                  <div className="text-xs text-slate-500">{loc.region} • {loc.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
