"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, ShieldCheck, Sparkles, ChevronRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background Video with Neutral Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>
        {/* Left-to-right neutral gradient cover to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-1" />
        {/* Mobile bottom-up dark gradient cover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-1 lg:hidden" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Heading & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Kicker */}
            <div className="text-[10px] font-bold text-[#009999] uppercase tracking-widest">
              German Engineering Excellence
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] uppercase">
              Building the Future of <br className="hidden sm:inline" />
              <span className="text-[#009999]">Global Industry</span>
            </h1>

            {/* Sub-headline & Description */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed">
              Operating under the vision of <strong className="text-white font-semibold">TAKNISER ONE GLOBE</strong>, our worldwide conglomerate connects industrial manufacturing, space economy, strategic mining, AgTech, LifeCare, robotics, and international trade across more than <span className="text-[#009999] font-semibold">190 countries and territories</span>.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4">
              <Link
                href="/divisions"
                className="w-full sm:w-auto btn-siemens btn-siemens-primary flex items-center justify-center gap-2"
              >
                <span>Our Business Divisions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/global-network"
                className="w-full sm:w-auto btn-siemens btn-siemens-outline-white flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4 text-[#009999]" />
                <span>Explore Global Network</span>
              </Link>
            </div>

            {/* Key Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-700/60">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#009999] font-mono">190+</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Countries</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#009999] font-mono">100+</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Years Heritage</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#009999] font-mono">7</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Core Divisions</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono">2046</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Vision Milestone</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#001822]/90 p-6 sm:p-8 border border-slate-800 space-y-6 rounded-none backdrop-blur-md">

              {/* Official Logo Banner Showcase */}
              <div className="relative w-full h-24 sm:h-28 bg-[#001b24] p-4 flex items-center justify-center border border-slate-800 rounded-none">
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
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
                  <span className="flex items-center gap-1.5 text-[#009999]">
                    <ShieldCheck className="w-4 h-4 text-[#009999]" />
                    <span>Hessen Heritage</span>
                  </span>
                  <span className="text-[#009999] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#009999]" />
                    <span>190+ Countries</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Originating in Hesse, Germany over a century ago, TAKNISER has grown from specialized power system engineering into an integrated global industrial conglomerate operating across more than 190 countries and territories.
                </p>
              </div>

              {/* Values Pills */}
              <div className="grid grid-cols-2 gap-2 text-left text-xs font-semibold">
                <div className="p-2.5 bg-[#001b24] border border-slate-800 text-slate-300 flex items-center gap-2 rounded-none">
                  <span className="w-1.5 h-1.5 bg-[#009999]" />
                  <span>Präzision (Precision)</span>
                </div>
                <div className="p-2.5 bg-[#001b24] border border-slate-800 text-slate-300 flex items-center gap-2 rounded-none">
                  <span className="w-1.5 h-1.5 bg-[#009999]" />
                  <span>Qualität (Quality)</span>
                </div>
                <div className="p-2.5 bg-[#001b24] border border-slate-800 text-slate-300 flex items-center gap-2 rounded-none">
                  <span className="w-1.5 h-1.5 bg-[#009999]" />
                  <span>Zuverlässigkeit</span>
                </div>
                <div className="p-2.5 bg-[#001b24] border border-slate-800 text-slate-300 flex items-center gap-2 rounded-none">
                  <span className="w-1.5 h-1.5 bg-[#009999]" />
                  <span>Ingenieurskunst</span>
                </div>
              </div>

              {/* Vision 2046 Banner */}
              <Link
                href="/vision-2046"
                className="flex items-center justify-between p-4 bg-[#001b24] border border-slate-800 hover:border-[#009999] transition-all group rounded-none"
              >
                <div className="flex items-center gap-3 text-left">
                  <Sparkles className="w-5 h-5 text-[#009999] shrink-0" />
                  <div>
                    <div className="text-[10px] font-bold text-[#009999] uppercase tracking-wider">Vision 2046 Roadmap</div>
                    <div className="text-xs text-slate-400">Discover our 100-Year Century Vision</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#009999] group-hover:translate-x-1 transition-transform" />
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
