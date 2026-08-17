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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white border-b border-slate-200 py-3 shadow-none`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section styled cleanly like Siemens */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-44 sm:w-52">
              <Image
                src="/brand/logo.svg"
                alt="TAKNISER ONE GLOBE - Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links - Siemens Flat Design */}
          <nav className="hidden lg:flex items-center space-x-6">
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
                      className={`relative py-3 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1 border-b-2 ${
                        isActive || pathname.startsWith("/divisions")
                          ? "border-[#009999] text-[#009999]"
                          : "border-transparent text-slate-800 hover:text-[#009999]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDivisionsOpen ? "rotate-180" : ""}`} />
                    </Link>

                    {/* Divisions Dropdown - Flat Rectangular */}
                    {isDivisionsOpen && (
                      <div className="absolute top-full left-0 w-80 mt-0 py-2 bg-white shadow-xl border border-slate-200 divide-y divide-slate-100 rounded-none z-50">
                        <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          7 Core Business Divisions
                        </div>
                        <div className="py-1">
                          {BUSINESS_DIVISIONS.map((div) => (
                            <Link
                              key={div.id}
                              href={`/divisions/${div.slug}`}
                              className="flex items-center justify-between px-4 py-2.5 text-xs text-slate-700 hover:text-[#009999] hover:bg-slate-50 transition-colors"
                            >
                              <span className="font-semibold">{div.title}</span>
                              <span className="text-[9px] text-[#009999] font-mono font-bold bg-slate-100 px-2 py-0.5 rounded-none border border-slate-200">0{div.code}</span>
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
                  className={`relative py-3 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                    isActive
                      ? "border-[#009999] text-[#009999]"
                      : "border-transparent text-slate-800 hover:text-[#009999]"
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
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#009999] hover:bg-[#008080] transition-colors rounded-none"
            >
              Contact Us
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none border border-slate-200 rounded-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu - Flat Style */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 mt-3 shadow-xl">
          <div className="flex items-center justify-between px-2 pb-2 border-b border-slate-100">
            <div className="text-[10px] font-bold text-[#009999] uppercase tracking-wider">
              TAKNISER ONE GLOBE
            </div>
            <div className="text-[10px] text-slate-500 font-mono">Vision 2046</div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2.5 text-sm font-semibold transition-colors rounded-none ${
                pathname === link.href
                  ? "text-[#009999] bg-slate-50 border-l-4 border-[#009999]"
                  : "text-slate-700 hover:text-[#009999]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#009999] hover:bg-[#008080] transition-colors rounded-none"
            >
              Contact Corporate Platform
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
