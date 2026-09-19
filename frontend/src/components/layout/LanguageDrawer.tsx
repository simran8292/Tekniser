"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { X, Globe, Search, Building2, MapPin, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage, REGIONS, RegionId, LanguageCode } from "@/lib/LanguageContext";

interface LanguageDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CONTINENTS = [
  "All",
  "Europe",
  "Middle East",
  "Africa",
  "North America",
  "Latin America",
  "Asia",
  "Oceania",
] as const;

export default function LanguageDrawer({ isOpen, onClose }: LanguageDrawerProps) {
  const { currentLanguage, currentRegion, changeLanguageAndRegion, t } = useLanguage();
  const [selectedContinent, setSelectedContinent] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const currentRegionObj = REGIONS.find((r) => r.id === currentRegion) || REGIONS[0];

  const handleSelectLanguage = (code: LanguageCode, id: RegionId) => {
    changeLanguageAndRegion(code, id);
    onClose();
  };

  const filteredRegions = useMemo(() => {
    return REGIONS.filter((region) => {
      // Exclude global from continent tabs if a specific continent is selected
      if (selectedContinent !== "All") {
        if (region.continent !== selectedContinent) return false;
      }

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        region.name.toLowerCase().includes(q) ||
        region.country.toLowerCase().includes(q) ||
        (region.city && region.city.toLowerCase().includes(q)) ||
        region.entityName.toLowerCase().includes(q) ||
        (region.coverage && region.coverage.toLowerCase().includes(q)) ||
        region.continent.toLowerCase().includes(q)
      );
    });
  }, [selectedContinent, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-start">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
      />

      {/* Sliding Drawer Content */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ type: "spring", damping: 26, stiffness: 200 }}
        className="relative w-full bg-[#000e1a] border-b border-[#36b39c]/30 text-white shadow-2xl z-10 overflow-y-auto max-h-[90vh] flex flex-col"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#000e1a]/95 backdrop-blur-md border-b border-slate-800 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              {/* Brand Title & Active Location */}
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-[#001822] border border-[#36b39c]/40 text-[#36b39c] shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                      Global Network &amp; Language Selector
                    </h2>
                    <span className="hidden sm:inline-block px-2 py-0.5 bg-[#36b39c]/20 border border-[#36b39c]/40 text-[#36b39c] text-[10px] font-mono font-bold uppercase">
                      30 RHQs Mentioned
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-1.5">
                    <span>{t("you-are-in")}:</span>
                    <span className="font-bold text-white flex items-center gap-1">
                      <span>{currentRegionObj.flag}</span>
                      <span>{currentRegionObj.name}</span>
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-[#36b39c] font-mono font-bold uppercase">
                      [{currentLanguage.toUpperCase()}]
                    </span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <div className="flex items-center gap-3 self-end md:self-auto">
                <Link
                  href="/global-network"
                  onClick={onClose}
                  className="hidden lg:inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#36b39c] hover:underline px-3 py-1.5 bg-[#001822] border border-slate-800 hover:border-[#36b39c]"
                >
                  <span>View Interactive World Map</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={onClose}
                  className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors bg-[#001822] hover:bg-slate-800 border border-slate-700 focus:outline-none"
                  aria-label="Close language selector"
                >
                  <span>{t("close")}</span>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Filter Bar: Continents & Search Input */}
            <div className="pt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              
              {/* Continent Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                {CONTINENTS.map((continent) => {
                  const isSelected = selectedContinent === continent;
                  const count =
                    continent === "All"
                      ? REGIONS.length
                      : REGIONS.filter((r) => r.continent === continent).length;

                  return (
                    <button
                      key={continent}
                      onClick={() => setSelectedContinent(continent)}
                      className={`px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider shrink-0 transition-all border ${
                        isSelected
                          ? "bg-[#36b39c] border-[#36b39c] text-[#000e1a]"
                          : "bg-[#001822] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                      }`}
                    >
                      {continent}
                      <span className="ml-1 opacity-75">({count})</span>
                    </button>
                  );
                })}
              </div>

              {/* Fast Search Input */}
              <div className="relative min-w-[240px] md:w-72 shrink-0">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 30 RHQs or language..."
                  className="w-full bg-[#001822] text-xs text-white placeholder-slate-500 pl-8 pr-3 py-1.5 border border-slate-800 focus:outline-none focus:border-[#36b39c] font-medium"
                />
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
              </div>

            </div>
          </div>
        </div>

        {/* Scrollable Regional Headquarters Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80 text-xs font-mono text-slate-400">
            <div>
              Displaying <span className="font-bold text-white">{filteredRegions.length}</span> Official Regional Headquarters &amp; Hubs
            </div>
            <div className="hidden sm:block text-[11px] text-slate-500">
              Click any language button to switch locale &amp; regional view
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredRegions.map((region) => {
              const isCurrentRegion = region.id === currentRegion;
              const isHQ = region.type === "HQ";
              const isLogistics = region.type === "LOGISTICS HUB";

              return (
                <div
                  key={region.id}
                  className={`p-4 border transition-all duration-200 flex flex-col justify-between group ${
                    isCurrentRegion
                      ? "bg-[#001c2b] border-[#36b39c] shadow-lg shadow-[#36b39c]/5 ring-1 ring-[#36b39c]/40"
                      : "bg-[#001422] border-slate-800/90 hover:border-slate-700 hover:bg-[#001828]"
                  }`}
                >
                  <div className="space-y-2.5">
                    {/* Top Row: Country, Flag & Type Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-lg leading-none shrink-0">{region.flag}</span>
                        <span className="text-xs font-mono font-bold uppercase text-white truncate">
                          {region.country}
                        </span>
                      </div>
                      <span
                        className={`text-[9px] font-mono font-bold px-1.5 py-0.5 tracking-wider uppercase shrink-0 border ${
                          isHQ
                            ? "bg-[#002d3b] text-[#36b39c] border-[#36b39c]"
                            : isLogistics
                            ? "bg-[#002d3b] text-[#00cccc] border-cyan-700"
                            : "bg-slate-900/60 text-slate-400 border-slate-800"
                        }`}
                      >
                        {region.type || "RHQ"}
                      </span>
                    </div>

                    {/* Official Entity Name */}
                    <div>
                      <h3 className="text-xs font-bold text-slate-200 uppercase tracking-tight group-hover:text-white transition-colors leading-snug line-clamp-2">
                        {region.entityName}
                      </h3>
                      {region.city && (
                        <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-1 font-mono">
                          <MapPin className="w-3 h-3 text-[#36b39c] shrink-0" />
                          <span className="truncate">{region.city}</span>
                          {region.coverage && (
                            <span className="text-slate-500">• {region.coverage}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Languages Selector Row */}
                  <div className="pt-3 mt-3 border-t border-slate-800/60">
                    <div className="text-[10px] font-mono text-slate-500 mb-1.5 uppercase tracking-wider">
                      Available Languages:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {region.languages.map((lang) => {
                        const isSelected = isCurrentRegion && lang.code === currentLanguage;

                        return (
                          <button
                            key={lang.code}
                            onClick={() => handleSelectLanguage(lang.code, region.id)}
                            className={`px-2.5 py-1 text-xs font-mono font-bold transition-all border ${
                              isSelected
                                ? "bg-[#36b39c] border-[#36b39c] text-[#000e1a] shadow-sm flex items-center gap-1"
                                : "bg-[#001822] border-slate-700/80 text-slate-300 hover:border-[#36b39c] hover:text-white"
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                            <span>{lang.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredRegions.length === 0 && (
            <div className="text-center py-16 bg-[#001422] border border-slate-800 space-y-3">
              <Globe className="w-8 h-8 text-slate-600 mx-auto" />
              <div className="text-sm font-bold text-white">No Regional Headquarters match your filter</div>
              <p className="text-xs text-slate-400">Try clearing the search query or selecting "All".</p>
              <button
                onClick={() => {
                  setSelectedContinent("All");
                  setSearchQuery("");
                }}
                className="mt-2 px-4 py-1.5 bg-[#36b39c] text-[#000e1a] text-xs font-mono font-bold uppercase"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Drawer Bottom Bar */}
        <div className="bg-[#000810] border-t border-slate-800 py-3.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                TAKNISER ONE GLOBE &bull; 30 Regional Headquarters &bull; 1 Global Engineering HQ &bull; Active in 190+ Countries
              </span>
            </div>
            <Link
              href="/global-network"
              onClick={onClose}
              className="text-[#36b39c] hover:underline font-bold flex items-center gap-1"
            >
              <span>Explore Complete 30 RHQ Network Directory</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
