"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { BUSINESS_DIVISIONS } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About TAKNISER", href: "/about" },
    { name: "Vision 2046", href: "/vision-2046" },
    { name: "Business Divisions", href: "/divisions", hasDropdown: true },
    { name: "Capabilities", href: "/capabilities" },
    { name: "Industries", href: "/industries" },
    { name: "Global Network", href: "/global-network" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-md"
          : "bg-gradient-to-b from-white/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Primary TAKNISER Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-44 sm:w-52 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/brand/logo.svg"
                alt="TAKNISER ONE GLOBE - Official Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-50/80 p-1.5 rounded-full border border-slate-200/70 shadow-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsDivisionsOpen(true)}
                    onMouseLeave={() => setIsDivisionsOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1 ${
                        isActive || pathname.startsWith("/divisions")
                          ? "text-sky-700 bg-white shadow-sm border border-sky-200"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDivisionsOpen ? "rotate-180" : ""}`} />
                    </Link>

                    {/* Divisions Dropdown */}
                    {isDivisionsOpen && (
                      <div className="absolute top-full left-0 w-80 mt-2 py-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200 divide-y divide-slate-100 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          7 Core Business Divisions
                        </div>
                        <div className="py-1">
                          {BUSINESS_DIVISIONS.map((div) => (
                            <Link
                              key={div.id}
                              href={`/divisions/${div.slug}`}
                              className="flex items-center justify-between px-4 py-2.5 text-xs text-slate-700 hover:text-sky-600 hover:bg-sky-50/80 transition-colors"
                            >
                              <span className="font-semibold">{div.title}</span>
                              <span className="text-[10px] text-amber-500 font-mono font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">0{div.code}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? "text-sky-700 bg-white shadow-sm border border-sky-200"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white shadow-md shadow-sky-600/20 transition-all hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-4 pb-6 space-y-2 mt-3 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="flex items-center justify-between px-2 pb-2 border-b border-slate-100">
            <div className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              TAKNISER ONE GLOBE
            </div>
            <div className="text-xs text-slate-500 font-mono">Vision 2046</div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                pathname === link.href
                  ? "text-sky-600 bg-sky-50 border border-sky-100"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 text-center text-xs font-bold uppercase tracking-wider rounded-xl bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-600/30"
            >
              Contact Corporate Platform
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
