"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe, Menu, X, ChevronDown, ShieldCheck } from "lucide-react";
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
    { name: "Home", href: "/" },
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
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Primary TAKNISER Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-44 sm:w-52 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/brand/logo.svg"
                alt="TAKNISER ONE GLOBE - Official Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full german-badge text-[11px] font-semibold tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Hessen Heritage</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
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
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                        isActive || pathname.startsWith("/divisions")
                          ? "text-sky-600 bg-sky-50 border border-sky-100"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Link>

                    {/* Divisions Mega Dropdown */}
                    {isDivisionsOpen && (
                      <div className="absolute top-full left-0 w-80 mt-1 py-2 glass-panel rounded-xl shadow-xl border border-slate-200 divide-y divide-slate-100">
                        <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          7 Core Business Divisions
                        </div>
                        <div className="py-1">
                          {BUSINESS_DIVISIONS.map((div) => (
                            <Link
                              key={div.id}
                              href={`/divisions/${div.slug}`}
                              className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                            >
                              <span className="font-medium">{div.title}</span>
                              <span className="text-xs text-amber-400/80 font-mono">0{div.code}</span>
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
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-sky-600 bg-sky-50 border border-sky-100"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Mobile Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/global-network"
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>190+ Countries</span>
            </Link>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white shadow-lg shadow-sky-600/20 transition-all hover:scale-105"
            >
              Contact Us
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 mt-3 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between px-2 pb-2 border-b border-slate-100">
            <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
              TAKNISER ONE GLOBE
            </div>
            <div className="text-xs text-slate-500">100+ Yrs Heritage</div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                pathname === link.href
                  ? "text-sky-600 bg-sky-50 border border-sky-100"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 text-center text-sm font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-600/30"
            >
              Contact Corporate Platform
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
