import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use — TAKNISER ONE GLOBE" };

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#f4f5f6] text-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-4xl font-black text-[#002d3b] uppercase">Terms of Use</h1>
        <p className="text-slate-500 text-sm font-semibold">Effective Date: {new Date().getFullYear()}</p>
        <div className="space-y-6 text-slate-650 text-sm leading-relaxed font-medium">
          <section>
            <h2 className="text-lg font-bold text-[#002d3b] mb-2">1. Acceptance of Terms</h2>
            <p>By accessing and using the TAKNISER ONE GLOBE platform, you agree to be bound by these Terms of Use and all applicable laws and regulations governing TAKNISER GmbH, a company incorporated in Germany.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#002d3b] mb-2">2. Use of Platform</h2>
            <p>This platform is designed for corporate business inquiries, information dissemination, and engagement with TAKNISER ONE GLOBE&apos;s global industrial operations. Unauthorized commercial use, data scraping, or any attempt to compromise platform security is strictly prohibited.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#002d3b] mb-2">3. Intellectual Property</h2>
            <p>All content, logos, brand assets, text, and design on this platform are the exclusive intellectual property of TAKNISER GmbH. Unauthorized reproduction, distribution, or modification is prohibited.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#002d3b] mb-2">4. Limitation of Liability</h2>
            <p>TAKNISER GmbH provides this platform &quot;as is&quot; for informational and business enquiry purposes. Information herein does not constitute a legally binding commercial offer unless confirmed by a formal contract executed by authorized TAKNISER representatives.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-[#002d3b] mb-2">5. Governing Law</h2>
            <p>These Terms shall be governed by the laws of the Federal Republic of Germany. Any disputes arising shall be subject to the jurisdiction of the competent courts of Hesse, Germany.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
