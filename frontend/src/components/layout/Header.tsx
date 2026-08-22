"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe, User, Search } from "lucide-react";
import { BUSINESS_DIVISIONS } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#000e1a] border-b border-slate-800/80 shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= DESKTOP LAYOUT (2 DECKS) ================= */}
        <div className="hidden lg:block">
          {/* Top Deck: Brand Logo & Utility Links */}
          <div
            className={`flex items-center justify-between transition-all duration-300 border-b border-slate-800/50 ${
              isScrolled ? "py-1.5" : "py-3"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div
                className={`relative transition-all duration-300 ${
                  isScrolled ? "h-8 w-36" : "h-11 w-48"
                }`}
              >
                <Image
                  src="/brand/logo.svg"
                  alt="TAKNISER ONE GLOBE"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Utility navigation */}
            <div className="flex items-center gap-6 text-[10.5px] font-bold uppercase tracking-wider text-slate-300">
              <button className="flex items-center gap-1.5 hover:text-[#36b39c] transition-colors focus:outline-none">
                <Globe className="w-3.5 h-3.5 text-[#36b39c]" />
                <span>Global | EN</span>
              </button>

              {/* Support & Community Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-[#36b39c] transition-colors focus:outline-none">
                  <span>Support & Community</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-full right-0 w-48 pt-2 hidden group-hover:block z-50">
                  <div className="bg-[#001822] border border-slate-800 py-1.5 text-slate-300 text-xs shadow-xl">
                    <Link
                      href="/contact"
                      className="block px-4 py-2 hover:bg-[#002d3b] hover:text-[#36b39c] transition-colors"
                    >
                      Contact HQ
                    </Link>
                    <Link
                      href="/global-network"
                      className="block px-4 py-2 hover:bg-[#002d3b] hover:text-[#36b39c] transition-colors"
                    >
                      Global Offices
                    </Link>
                    <Link
                      href="/about"
                      className="block px-4 py-2 hover:bg-[#002d3b] hover:text-[#36b39c] transition-colors"
                    >
                      Heritage & About
                    </Link>
                  </div>
                </div>
              </div>

              <div className="h-3.5 w-px bg-slate-800" />

              {/* Admin login */}
              <Link
                href="/admin/login"
                className="flex items-center gap-1.5 hover:text-[#36b39c] transition-colors"
              >
                <User className="w-3.5 h-3.5" />
                <span>Log in</span>
              </Link>
            </div>
          </div>

          {/* Bottom Deck: Primary Navigation Links & Search */}
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "py-1.5" : "py-2.5"
            }`}
          >
            {/* Primary Nav links */}
            <nav className="flex items-center space-x-7">
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
                        className={`relative py-2 text-[11px] font-bold uppercase tracking-widest transition-all flex items-center gap-1 border-b-2 ${
                          isActive || pathname.startsWith("/divisions")
                            ? "border-[#36b39c] text-[#36b39c]"
                            : "border-transparent text-white hover:text-[#36b39c]"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isDivisionsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      {/* Business Divisions Dropdown */}
                      {isDivisionsOpen && (
                        <div className="absolute top-full left-0 w-80 mt-0 py-2 bg-[#001822] shadow-2xl border border-slate-800 divide-y divide-slate-800/60 rounded-none z-50">
                          <div className="px-4 py-2 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                            7 Core Business Divisions
                          </div>
                          <div className="py-1">
                            {BUSINESS_DIVISIONS.map((div) => (
                              <Link
                                key={div.id}
                                href={`/divisions/${div.slug}`}
                                className="flex items-center justify-between px-4 py-2.5 text-xs text-slate-300 hover:text-[#36b39c] hover:bg-[#002d3b] transition-colors"
                              >
                                <span className="font-semibold">{div.title}</span>
                                <span className="text-[9px] text-[#36b39c] font-mono font-bold bg-[#00111a] px-2 py-0.5 border border-slate-800">
                                  0{div.code}
                                </span>
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
                    className={`relative py-2 text-[11px] font-bold uppercase tracking-widest transition-all border-b-2 ${
                      isActive
                        ? "border-[#36b39c] text-[#36b39c]"
                        : "border-transparent text-white hover:text-[#36b39c]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Search Input Bar */}
            <div className="relative max-w-xs">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-44 xl:w-52 bg-[#001822] text-xs text-white placeholder-slate-500 px-3 py-1.5 pl-8 border border-slate-800 focus:outline-none focus:border-[#36b39c] transition-all rounded-none font-medium"
              />
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
            </div>
          </div>
        </div>

        {/* ================= MOBILE LAYOUT (SINGLE DECK) ================= */}
        <div className="lg:hidden flex items-center justify-between py-3.5">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-36">
              <Image
                src="/brand/logo.svg"
                alt="TAKNISER ONE GLOBE"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Action & Toggle Controls */}
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none border border-slate-800 rounded-none bg-[#001822]"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu - Premium Dark Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#000e1a] border-t border-slate-800/80 px-4 pt-3 pb-8 space-y-4 shadow-2xl">
          {/* Mobile Search */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search platform..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#001822] text-xs text-white placeholder-slate-500 px-3 py-2.5 pl-9 border border-slate-800 focus:outline-none focus:border-[#36b39c] rounded-none font-medium"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          </div>

          <div className="flex items-center justify-between px-2 pb-2 border-b border-slate-800/80">
            <div className="text-[10px] font-bold text-[#36b39c] uppercase tracking-wider">
              TAKNISER ONE GLOBE
            </div>
            <div className="text-[10px] text-slate-400 font-mono">Vision 2046</div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-3 text-sm font-semibold transition-colors rounded-none ${
                    isActive
                      ? "text-[#36b39c] bg-[#001822] border-l-4 border-[#36b39c]"
                      : "text-slate-300 hover:text-[#36b39c]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="h-px bg-slate-800/80 my-2" />

          {/* Mobile Utilities */}
          <div className="grid grid-cols-2 gap-2 pt-1.5 text-xs text-slate-300 font-semibold uppercase tracking-wider">
            <button className="flex items-center justify-center gap-1.5 py-3 border border-slate-800 bg-[#001822] hover:text-[#36b39c] transition-colors rounded-none">
              <Globe className="w-4 h-4 text-[#36b39c]" />
              <span>EN | Global</span>
            </button>
            <Link
              href="/admin/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 py-3 border border-slate-800 bg-[#001822] hover:text-[#36b39c] transition-colors rounded-none text-center"
            >
              <User className="w-4 h-4" />
              <span>Admin Log in</span>
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#36b39c] hover:bg-[#2d9683] transition-colors rounded-none"
            >
              Contact Corporate Platform
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
