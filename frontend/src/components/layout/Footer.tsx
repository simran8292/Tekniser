import Link from "next/link";
import Image from "next/image";
import { Globe, Shield, Award, MapPin, Mail, Lock } from "lucide-react";
import { BUSINESS_DIVISIONS, CORPORATE_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 pt-16 pb-12 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Column 1: Brand & German Heritage */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-56">
                <Image
                  src="/brand/logo.svg"
                  alt="TAKNISER ONE GLOBE Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-700 leading-relaxed pr-4">
              {CORPORATE_INFO.tagline} Established upon German principles of Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst, and Vertrauen since early 20th century Hesse.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full german-badge text-xs font-semibold">
                <Shield className="w-3.5 h-3.5" />
                <span>Hesse, Germany</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sky-700 text-xs font-semibold">
                <Globe className="w-3.5 h-3.5" />
                <span>190+ Countries</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-amber-700 text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>Vision 2046</span>
              </div>
            </div>
          </div>

          {/* Column 2: Business Divisions */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
              <span>Business Divisions</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              {BUSINESS_DIVISIONS.map((div) => (
                <li key={div.id}>
                  <Link
                    href={`/divisions/${div.slug}`}
                    className="hover:text-sky-600 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-amber-600 font-mono text-xs">0{div.code}</span>
                    <span>{div.title.replace("TAKNISER ", "")}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform & Capabilities */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/capabilities" className="hover:text-sky-600 transition-colors">
                  Engineering & Consulting
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-sky-600 transition-colors">
                  Industrial Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-sky-600 transition-colors">
                  Global Strategic Sourcing
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-sky-600 transition-colors">
                  International Procurement
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-sky-600 transition-colors">
                  EPC & Project Supply
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-sky-600 transition-colors">
                  JAFZA Logistics Network
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Global HQ & Corporate Info */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Global Presence
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-600 mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Global HQ – TAKNISER GmbH</div>
                  <div className="text-xs text-slate-500">Hesse (Hessen), Germany</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-amber-600 mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">29 Regional Headquarters</div>
                  <div className="text-xs text-slate-500">6 Continents Worldwide</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                <Link href="/contact" className="hover:text-sky-600 transition-colors text-xs">
                  Corporate Inquiries Portal
                </Link>
              </div>
              <div className="flex items-center gap-2.5 pt-2">
                <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <Link href="/admin/login" className="hover:text-slate-900 transition-colors text-xs text-slate-550">
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
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">
              Terms of Use
            </Link>
            <Link href="/global-network" className="hover:text-slate-900 transition-colors">
              Global Footprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
