"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe, Search, User } from "lucide-react";
import { BUSINESS_DIVISIONS } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const [isResponsibilityOpen, setIsResponsibilityOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isGlobeOpen, setIsGlobeOpen] = useState(false);
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
    { name: "WHAT WE DO", href: "/divisions", hasDropdown: true, dropdownType: "divisions" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "Industries", href: "/industries" },
    { name: "RESPONSIBILITY", href: "/responsibility", hasDropdown: true, dropdownType: "responsibility" },
    { name: "Global Network", href: "/global-network" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white border-b border-slate-200 shadow-sm">
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-slate-900 text-white py-1.5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
          
          {/* Left: Globe Selector */}
          <div className="relative" onMouseEnter={() => setIsGlobeOpen(true)} onMouseLeave={() => setIsGlobeOpen(false)}>
            <button className="flex items-center gap-1.5 hover:text-[#009999] transition-colors py-1">
              <Globe className="w-3.5 h-3.5" />
              <span>YOU ARE IN TAKNISER 1</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {isGlobeOpen && (
              <div className="absolute top-full left-0 w-48 mt-0 py-2 bg-white text-slate-800 shadow-xl border border-slate-200 z-50">
                <Link href="#" className="block px-4 py-2 hover:text-[#009999] hover:bg-slate-50">TAKNISER Global</Link>
                <Link href="#" className="block px-4 py-2 hover:text-[#009999] hover:bg-slate-50">TAKNISER Europe</Link>
                <Link href="#" className="block px-4 py-2 hover:text-[#009999] hover:bg-slate-50">TAKNISER Middle East</Link>
                <Link href="#" className="block px-4 py-2 hover:text-[#009999] hover:bg-slate-50">TAKNISER Asia</Link>
              </div>
            )}
          </div>

          {/* Right: Search, Global Network, Login */}
          <div className="flex items-center gap-6">
            <Link href="/global-network" className="hover:text-[#009999] transition-colors">Global Network</Link>
            <button className="hover:text-[#009999] transition-colors">
              <Search className="w-3.5 h-3.5" />
            </button>
            
            <div className="relative" onMouseEnter={() => setIsLoginOpen(true)} onMouseLeave={() => setIsLoginOpen(false)}>
              <button className="flex items-center gap-1.5 hover:text-[#009999] transition-colors py-1">
                <User className="w-3.5 h-3.5" />
                <span>TAKNISER 1 GLOBE LOGIN</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {isLoginOpen && (
                <div className="absolute top-full right-0 w-48 mt-0 py-2 bg-white text-slate-800 shadow-xl border border-slate-200 z-50">
                  <Link href="#" className="block px-4 py-2 hover:text-[#009999] hover:bg-slate-50">Employee Login</Link>
                  <Link href="#" className="block px-4 py-2 hover:text-[#009999] hover:bg-slate-50">Partner Portal</Link>
                  <Link href="#" className="block px-4 py-2 hover:text-[#009999] hover:bg-slate-50">Vendor Access</Link>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo Section - Enlarged */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-52 sm:w-64">
              <Image
                src="/brand/logo.svg"
                alt="TAKNISER ONE GLOBE - Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown && link.dropdownType === "divisions") {
                return (
                  <div key={link.name} className="relative" onMouseEnter={() => setIsDivisionsOpen(true)} onMouseLeave={() => setIsDivisionsOpen(false)}>
                    <Link href={link.href} className={`relative py-2 text-[11px] font-bold uppercase tracking-wider transition-all flex items-center gap-1 border-b-2 ${isActive || pathname.startsWith("/divisions") ? "border-[#009999] text-[#009999]" : "border-transparent text-slate-800 hover:text-[#009999]"}`}>
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDivisionsOpen ? "rotate-180" : ""}`} />
                    </Link>

                    {isDivisionsOpen && (
                      <div className="absolute top-full left-0 w-64 mt-0 py-2 bg-white shadow-xl border border-slate-200 rounded-none z-50">
                        {BUSINESS_DIVISIONS.map((div) => (
                          <Link key={div.id} href={`/divisions/${div.slug}`} className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#009999] hover:bg-slate-50 transition-colors font-semibold">
                            {div.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.hasDropdown && link.dropdownType === "responsibility") {
                return (
                  <div key={link.name} className="relative" onMouseEnter={() => setIsResponsibilityOpen(true)} onMouseLeave={() => setIsResponsibilityOpen(false)}>
                    <Link href={link.href} className={`relative py-2 text-[11px] font-bold uppercase tracking-wider transition-all flex items-center gap-1 border-b-2 ${isActive || pathname.startsWith("/responsibility") ? "border-[#009999] text-[#009999]" : "border-transparent text-slate-800 hover:text-[#009999]"}`}>
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isResponsibilityOpen ? "rotate-180" : ""}`} />
                    </Link>

                    {isResponsibilityOpen && (
                      <div className="absolute top-full left-0 w-64 mt-0 py-2 bg-white shadow-xl border border-slate-200 rounded-none z-50">
                        <Link href="/responsibility/family" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#009999] hover:bg-slate-50 transition-colors font-semibold">TAKNISER ONE GLOBE FAMILY</Link>
                        <Link href="/responsibility/sustainable-earth" className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#009999] hover:bg-slate-50 transition-colors font-semibold">SUSTAINABLE EARTH</Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link key={link.name} href={link.href} className={`relative py-2 text-[11px] font-bold uppercase tracking-wider transition-all border-b-2 ${isActive ? "border-[#009999] text-[#009999]" : "border-transparent text-slate-800 hover:text-[#009999]"}`}>
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Button */}
          <div className="flex items-center lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-700 hover:text-slate-900 border border-slate-200 focus:outline-none">
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 mt-0 shadow-xl overflow-y-auto max-h-[80vh]">
          {/* Mobile Top Bar Options */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <Globe className="w-4 h-4 text-[#009999]" />
              <span>TAKNISER 1</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <User className="w-4 h-4 text-[#009999]" />
              <span>LOGIN</span>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`block px-3 py-2.5 text-sm font-semibold transition-colors ${pathname === link.href ? "text-[#009999] bg-slate-50 border-l-4 border-[#009999]" : "text-slate-700 hover:text-[#009999]"}`}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
