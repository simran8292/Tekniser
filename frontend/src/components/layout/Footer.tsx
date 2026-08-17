import Link from "next/link";
import Image from "next/image";
import { Globe, Shield, Award, MapPin, Mail, Lock } from "lucide-react";
import { BUSINESS_DIVISIONS, CORPORATE_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#002d3b] border-t border-slate-800 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & German Heritage */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-56">
                <Image
                  src="/brand/logo.svg"
                  alt="TAKNISER ONE GLOBE Logo"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              {CORPORATE_INFO.tagline} Established upon German principles of Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst, and Vertrauen since early 20th century Hesse.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1 border border-slate-700 text-slate-300 text-xs font-semibold rounded-none">
                <Shield className="w-3.5 h-3.5 text-[#009999]" />
                <span>Hesse, Germany</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 border border-slate-700 text-slate-300 text-xs font-semibold rounded-none">
                <Globe className="w-3.5 h-3.5 text-[#009999]" />
                <span>190+ Countries</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 border border-slate-700 text-slate-300 text-xs font-semibold rounded-none">
                <Award className="w-3.5 h-3.5 text-[#009999]" />
                <span>Vision 2046</span>
              </div>
            </div>
          </div>

          {/* Column 2: Business Divisions */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Business Divisions
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {BUSINESS_DIVISIONS.map((div) => (
                <li key={div.id}>
                  <Link
                    href={`/divisions/${div.slug}`}
                    className="hover:text-[#009999] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#009999] font-mono text-xs">0{div.code}</span>
                    <span>{div.title.replace("TAKNISER ", "")}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform & Capabilities */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/capabilities" className="hover:text-[#009999] transition-colors">
                  Engineering & Consulting
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-[#009999] transition-colors">
                  Industrial Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-[#009999] transition-colors">
                  Global Strategic Sourcing
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-[#009999] transition-colors">
                  International Procurement
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-[#009999] transition-colors">
                  EPC & Project Supply
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-[#009999] transition-colors">
                  JAFZA Logistics Network
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Global HQ & Corporate Info */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Global Presence
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#009999] mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-white">Global HQ – TAKNISER GmbH</div>
                  <div className="text-xs text-slate-400">Hesse (Hessen), Germany</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-[#009999] mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-white">29 Regional Headquarters</div>
                  <div className="text-xs text-slate-400">6 Continents Worldwide</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#009999] shrink-0" />
                <Link href="/contact" className="hover:text-[#009999] transition-colors text-xs">
                  Corporate Inquiries Portal
                </Link>
              </div>
              <div className="flex items-center gap-2.5 pt-2">
                <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <Link href="/admin/login" className="hover:text-white transition-colors text-xs">
                  Admin Management Area
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} TAKNISER ONE GLOBE (TAKNISER GmbH). All rights reserved. Over 100 Years of German Engineering Excellence.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/global-network" className="hover:text-white transition-colors">
              Global Footprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
