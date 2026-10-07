import { Metadata } from "next";
import GlobalEmailDirectory from "@/components/directory/GlobalEmailDirectory";
import Link from "next/link";
import { ArrowLeft, Sparkles, Shield, Building2, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Global Email Directory | Enterprise Matrix Organization | TAKNISER",
  description:
    "Official Corporate Email Directory of TAKNISER GmbH. Direct contact channels for Corporate Functional HQ, 23 Global Industry Divisions, and 25 Regional Headquarters worldwide.",
  alternates: {
    canonical: "https://takniser.com/directory",
  },
};

export default function DirectoryPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#f8fafc] text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="hover:text-[#009999] transition-colors flex items-center gap-1"
            >
              <span>TAKNISER</span>
            </Link>
            <span>/</span>
            <Link
              href="/contact"
              className="hover:text-[#009999] transition-colors"
            >
              Contact
            </Link>
            <span>/</span>
            <span className="text-[#002d3b] font-bold">Global Email Directory</span>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-xs text-[#009999] hover:text-[#002d3b] transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Contact Portal</span>
          </Link>
        </div>

        {/* Global Email Directory Main Component */}
        <GlobalEmailDirectory />
      </div>
    </div>
  );
}
