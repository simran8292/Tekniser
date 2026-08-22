"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, ShieldCheck, Sparkles, ChevronRight, MapPin } from "lucide-react";

const SLIDES = [
  {
    id: "legacy",
    kicker: "German Engineering Excellence",
    title: "Building the Future of",
    highlight: "Global Industry",
    description: "Operating under the vision of TAKNISER ONE GLOBE, our worldwide conglomerate connects industrial manufacturing, space economy, and international trade across more than 190 countries.",
    primaryCta: { text: "Our History & Heritage", href: "/about" },
    secondaryCta: { text: "Explore Global Network", href: "/global-network" },
    bgImage: "/home page.png",
  },
  {
    id: "responsibility",
    kicker: "Sustainable Earth & Family",
    title: "Committed to Global",
    highlight: "Responsibility",
    description: "Empowering the TAKNISER ONE GLOBE FAMILY and driving sustainable practices to protect our planet for future generations.",
    primaryCta: { text: "Our Responsibility", href: "/responsibility" },
    secondaryCta: { text: "Sustainable Earth", href: "/responsibility/sustainable-earth" },
    bgImage: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: "what-we-do",
    kicker: "7 Core Divisions",
    title: "Pioneering What",
    highlight: "We Do",
    description: "From Space Economy to AgTech and Robotics, our divisions deliver integrated solutions that power the future of global industry and lifestyle.",
    primaryCta: { text: "Explore Divisions", href: "/divisions" },
    secondaryCta: { text: "View Capabilities", href: "/capabilities" },
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((s, index) => (
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
          <div className="lg:col-span-7 space-y-6 text-left" key={slide.id}>
            <div className="text-[10px] font-bold text-[#009999] uppercase tracking-widest animate-fade-in-up">
              {slide.kicker}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] uppercase animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              {slide.title} <br className="hidden sm:inline" />
              <span className="text-[#009999]">{slide.highlight}</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
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
              {SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 transition-all rounded-none ${index === currentSlide ? "w-8 bg-[#009999]" : "w-4 bg-slate-600 hover:bg-slate-500"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase Card (Static branding) */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative bg-[#001822]/90 p-6 sm:p-8 border border-slate-800 space-y-6 rounded-none backdrop-blur-md">
              <div className="relative w-full h-24 sm:h-28 bg-[#001b24] p-4 flex items-center justify-center border border-slate-800 rounded-none">
                <Image src="/brand/logo.svg" alt="TAKNISER ONE GLOBE" width={360} height={120} className="object-contain" />
              </div>
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
                  <span className="flex items-center gap-1.5 text-[#009999]"><ShieldCheck className="w-4 h-4 text-[#009999]" /><span>Hessen Heritage</span></span>
                  <span className="text-[#009999] flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#009999]" /><span>190+ Countries</span></span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Originating in Hesse, Germany over a century ago, TAKNISER has grown from specialized power system engineering into an integrated global industrial conglomerate.
                </p>
              </div>
              <Link href="/vision-2046" className="flex items-center justify-between p-4 bg-[#001b24] border border-slate-800 hover:border-[#009999] transition-all group rounded-none">
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
