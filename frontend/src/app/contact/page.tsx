import type { Metadata } from "next";
import { Globe, Shield, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — TAKNISER ONE GLOBE Corporate Inquiries",
  description:
    "Submit your industrial, procurement, engineering, or partnership inquiry to TAKNISER ONE GLOBE. Our global corporate team will respond to your inquiry.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#f4f5f6] text-slate-800">
      {/* Hero - Siemens Dark Blue panel */}
      <section className="relative py-20 bg-[#002d3b] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-wider uppercase mb-6 rounded-none bg-transparent">
            <Mail className="w-3.5 h-3.5 text-[#009999]" />
            <span>Corporate Contact Portal</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 uppercase">
            Contact <span className="text-[#009999]">TAKNISER</span>
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you are a manufacturer, government body, EPC contractor, OEM, or institutional buyer — our global corporate team is ready to respond to your inquiry.
          </p>
        </div>
      </section>

      {/* Main Content - Light Gray Panel background */}
      <section className="py-16 bg-[#f4f5f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Sidebar: Quick Info - Flat White Cards */}
            <div className="space-y-6">
              <div className="glass-panel bg-white p-6 border border-slate-200 space-y-5 rounded-none shadow-none">
                <h2 className="text-base font-bold text-[#002d3b]">Corporate Contact Information</h2>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#009999] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#002d3b]">Global Headquarters</div>
                      <div className="text-slate-650">TAKNISER GmbH</div>
                      <div className="text-slate-650">Hesse (Hessen), Germany</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#009999] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#002d3b]">Global Network</div>
                      <div className="text-slate-655">29 Regional Headquarters</div>
                      <div className="text-slate-655">190+ Countries & Territories</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#009999] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#002d3b]">Response Commitment</div>
                      <div className="text-slate-650">Corporate inquiries are reviewed by our regional specialists within 1–3 business days.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel bg-white p-6 border border-slate-200 space-y-3 rounded-none shadow-none">
                <h3 className="text-sm font-bold text-[#009999]">Inquiry Areas</h3>
                <ul className="space-y-2">
                  {[
                    "Industrial Equipment Sourcing", "Global Procurement", "EPC Project Supply",
                    "Engineering Consulting", "Distribution Partnerships", "Technology Solutions",
                  ].map((area) => (
                    <li key={area} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-[#009999] shrink-0 rounded-none" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-panel bg-white p-6 border border-slate-200 space-y-3 rounded-none shadow-none">
                <h3 className="text-sm font-bold text-[#002d3b]">Global Logistics Hub</h3>
                <div className="text-xs text-slate-600 leading-relaxed font-medium">
                  Our JAFZA Logistics Hub in UAE serves as the primary global distribution & free zone logistics center for Middle East, Africa, and Asia operations.
                </div>
              </div>
            </div>

            {/* Main Form - Flat White Panel */}
            <div className="lg:col-span-2">
              <div className="glass-panel bg-white p-7 sm:p-9 border border-slate-200 rounded-none shadow-none text-slate-800">
                <div className="mb-7">
                  <h2 className="text-xl font-bold text-[#002d3b]">Submit Your Corporate Inquiry</h2>
                  <p className="text-sm text-slate-600 mt-1.5">
                    All fields marked with <span className="text-red-500">*</span> are required. Your information is processed in accordance with our Privacy Policy.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
