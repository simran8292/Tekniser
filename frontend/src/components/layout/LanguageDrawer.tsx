"use client";

import React from "react";
import { X, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage, REGIONS, RegionId, LanguageCode } from "@/lib/LanguageContext";

interface LanguageDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LanguageDrawer({ isOpen, onClose }: LanguageDrawerProps) {
  const { currentLanguage, currentRegion, changeLanguageAndRegion, t } = useLanguage();

  if (!isOpen) return null;

  const currentRegionName = REGIONS.find((r) => r.id === currentRegion)?.name || "TAKNISER Global";

  const handleSelectLanguage = (code: LanguageCode, id: RegionId) => {
    changeLanguageAndRegion(code, id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-start">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Sliding Drawer Content */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 180 }}
        className="relative w-full bg-[#001220] border-b border-slate-800 text-white shadow-2xl z-10 overflow-y-auto max-h-[85vh]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Header Row */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-[#36b39c]" />
              <div className="text-sm font-semibold tracking-wider text-slate-300">
                <span className="text-slate-500 font-medium">{t("you-are-in")} </span>
                <span className="text-white font-bold">{currentRegionName}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors bg-slate-900/60 border border-slate-800 focus:outline-none"
            >
              <span>{t("close")}</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Regional Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 pt-10">
            {REGIONS.map((region) => {
              const isCurrentRegion = region.id === currentRegion;

              return (
                <div key={region.id} className="space-y-3">
                  <h3
                    className={`text-xs font-black uppercase tracking-widest ${
                      isCurrentRegion ? "text-[#36b39c]" : "text-slate-400"
                    }`}
                  >
                    {region.name}
                  </h3>

                  <div className="flex items-center gap-2.5 text-sm font-medium">
                    {region.languages.map((lang, index) => {
                      const isSelected = isCurrentRegion && lang.code === currentLanguage;

                      return (
                        <React.Fragment key={lang.code}>
                          {index > 0 && <span className="text-slate-700">|</span>}
                          {isSelected ? (
                            <span className="text-[#36b39c] font-black cursor-default border-b-2 border-[#36b39c] pb-0.5">
                              {lang.name}
                            </span>
                          ) : (
                            <button
                              onClick={() => handleSelectLanguage(lang.code, region.id)}
                              className="text-slate-400 hover:text-white transition-colors font-medium hover:underline focus:outline-none"
                            >
                              {lang.name}
                            </button>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
