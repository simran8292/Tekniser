"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Shield, Sparkles, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Corporate Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-amber-500/20 text-amber-700 text-xs font-bold tracking-wide shadow-sm">
              <Shield className="w-4 h-4 text-amber-600" />
              <span>100+ YEARS GERMAN ENGINEERING HERITAGE</span>
              <span className="text-slate-300">•</span>
              <span className="text-sky-700">Hessen, Germany</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Building the Future of <br className="hidden sm:inline" />
              <span className="gradient-text-blue">Global Industry</span>
            </h1>

            {/* Sub-headline & Description */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-light leading-relaxed">
              Operating under the vision of <strong className="text-slate-900 font-semibold">TAKNISER ONE GLOBE</strong>, our worldwide conglomerate connects industrial manufacturing, space economy, strategic mining, AgTech, LifeCare, robotics, and international trade across more than <span className="text-sky-600 font-semibold">190 countries and territories</span>.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/divisions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white shadow-xl shadow-sky-600/10 hover:scale-105 transition-all group"
              >
                <span>Our Business Divisions</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/global-network"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold rounded-xl glass-panel glass-panel-hover text-slate-700 hover:text-slate-900 border border-slate-200"
              >
                <Globe className="w-5 h-5 text-sky-600" />
                <span>Explore Global Network</span>
              </Link>
            </div>

            {/* Key Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">190+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Countries & Territories</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-700 font-mono">29</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Regional HQs</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-700 font-mono">7</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Core Divisions</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">2046</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Vision Milestone</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xl space-y-6">
              
              {/* Official Logo Banner Showcase */}
              <div className="relative w-full h-24 sm:h-28 bg-slate-100 rounded-2xl p-4 flex items-center justify-center border border-slate-200 shadow-inner">
                <Image
                  src="/brand/logo.svg"
                  alt="TAKNISER ONE GLOBE Official Brand"
                  width={360}
                  height={120}
                  className="object-contain"
                />
              </div>

              {/* Conglomerate Vision Brief */}
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-2">
                  <span>German Engineering Heritage</span>
                  <span className="text-amber-700">Qualität vor Quantität</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Originating in Hesse, Germany over a century ago, TAKNISER has grown from specialized power system engineering into an integrated global industrial conglomerate.
                </p>
              </div>

              {/* Values Pills */}
              <div className="grid grid-cols-2 gap-2 text-left text-xs font-medium">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  <span>Präzision (Precision)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-600" />
                  <span>Qualität (Quality)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>Zuverlässigkeit</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-600" />
                  <span>Ingenieurskunst</span>
                </div>
              </div>

              {/* Vision 2046 Banner */}
              <Link
                href="/vision-2046"
                className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-amber-500/5 via-slate-50 to-sky-500/5 border border-slate-200 hover:border-amber-500/20 transition-all group"
              >
                <div className="flex items-center gap-3 text-left">
                  <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">Vision 2046 Roadmap</div>
                    <div className="text-xs text-slate-600">Discover our 100-Year Century Vision</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
