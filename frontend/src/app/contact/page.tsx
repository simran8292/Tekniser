import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Mail,
  MapPin,
  Clock,
  Ship,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import CareerForm from "@/components/forms/CareerForm";

export const metadata: Metadata = {
  title: "Contact TAKNISER — Corporate Contact Portal",
  description:
    "Whether you are a manufacturer, government body, EPC contractor, OEM, or institutional buyer — our global corporate team is ready to respond to your inquiry.",
};

const INQUIRY_AREAS = [
  "Industrial Equipment Sourcing",
  "Global Procurement",
  "EPC Project Supply",
  "Engineering Consulting",
  "Distribution Partnerships",
  "Technology Solutions",
];

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#009999] selection:text-white">

      {/* ─────────────────────────────────────────────────────────────
          PAGE HERO SECTION (Siemens Executive Dark with Themed Faded Background)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        {/* Clear Background Imagery with Legibility Fade */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/clean_corporate_hq_branded.jpg"
            alt="TAKNISER Corporate Operations"
            fill
            priority
            className="object-cover opacity-55 filter contrast-110 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/80 via-[#001822]/60 to-[#001822]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,24,34,0.7)_90%)] pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">

          {/* Label from verbatim document */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/70 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#009999]" />
            <span>Corporate Contact Portal</span>
          </div>

          {/* Heading from verbatim document */}
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Contact <span className="text-[#009999]">TAKNISER</span>
          </h1>

          {/* Description from verbatim document */}
          <p className="text-slate-200 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you are a manufacturer, government body, EPC contractor, OEM, or institutional buyer — our global corporate team is ready to respond to your inquiry.
          </p>

          {/* Quick Credential Highlights */}
          <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              Global HQ: Hesse, Germany
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              30+ Regional Headquarters
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              Global Careers &amp; HR Liaison
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              1–3 Days Response Commitment
            </span>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MAIN CONTENT SECTION (Clean White & Light Slate Canvas)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* ─────────────────────────────────────────────────────────
                LEFT COLUMN: Corporate Contact Information & Details (5 cols)
            ───────────────────────────────────────────────────────── */}
            <div className="lg:col-span-5 space-y-6">

              {/* Card 1: Corporate Contact Information */}
              <div className="bg-white p-7 sm:p-8 border border-slate-200 space-y-6 shadow-sm">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                    OFFICIAL DIRECTORY
                  </span>
                  <h2 className="text-xl font-black text-[#002d3b] uppercase tracking-tight mt-1">
                    Corporate Contact Information
                  </h2>
                </div>

                <div className="space-y-5 text-sm">
                  {/* Global Headquarters */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#002d3b] text-[#009999] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        Global Headquarters
                      </div>
                      <div className="font-bold text-[#002d3b] text-base">
                        TAKNISER GmbH
                      </div>
                      <div className="text-slate-600 font-medium text-xs sm:text-sm">
                        Hesse (Hessen), Germany
                      </div>
                    </div>
                  </div>

                  {/* Global Network */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#002d3b] text-[#009999] shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        Global Network
                      </div>
                      <div className="font-bold text-[#002d3b] text-base">
                        30+ Regional Headquarters
                      </div>
                      <div className="text-slate-600 font-medium text-xs sm:text-sm">
                        across 190+ Countries &amp; Territories
                      </div>
                    </div>
                  </div>

                  {/* Response Commitment */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#002d3b] text-[#009999] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        Response Commitment
                      </div>
                      <div className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                        Corporate inquiries are reviewed by our regional specialists within <span className="font-bold text-[#002d3b]">1–3 business days</span>.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Inquiry Areas */}
              <div className="bg-white p-7 sm:p-8 border border-slate-200 space-y-4 shadow-sm">
                <div className="border-b border-slate-200 pb-3">
                  <h3 className="text-sm font-mono font-bold text-[#009999] uppercase tracking-widest">
                    Inquiry Areas
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {INQUIRY_AREAS.map((area) => (
                    <span
                      key={area}
                      className="text-xs font-medium px-3 py-1.5 bg-[#f8fafc] border border-slate-200 text-slate-700 hover:border-[#009999] hover:text-[#002d3b] hover:bg-white transition-all rounded-none"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 3: Global Logistics Hub */}
              <div className="bg-white p-7 sm:p-8 border border-slate-200 space-y-3 shadow-sm border-l-4 border-l-[#009999]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                  <Ship className="w-4 h-4 text-[#009999]" />
                  <span>Global Logistics Hub</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-medium">
                  Our <span className="font-bold text-[#002d3b]">Global Logistics Hub in UAE</span> serves as the primary global distribution &amp; free zone logistics center for Middle East, Africa, and Asia operations.
                </p>
                <div className="pt-2">
                  <Link
                    href="/global-network"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009999] hover:text-[#002d3b] transition-colors uppercase tracking-wider"
                  >
                    <span>View Logistics Hub in Global Network</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

            {/* ─────────────────────────────────────────────────────────
                RIGHT COLUMN: Interactive Contact Form (7 cols)
            ───────────────────────────────────────────────────────── */}
            <div className="lg:col-span-7">
              <div className="bg-white p-7 sm:p-10 border border-slate-200 shadow-sm space-y-6">

                <div className="border-b border-slate-200 pb-5">
                  <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                    DIRECT INQUIRY CHANNEL
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#002d3b] uppercase tracking-tight mt-1">
                    Submit Your Corporate Inquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
                    All fields marked with <span className="text-red-500 font-bold">*</span> are required. Your information is processed in accordance with our Privacy Policy.
                  </p>
                </div>

                {/* Form Component */}
                <ContactForm />

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          OPPORTUNITIES & CAREER SECTION (Connect to HR & Upload Resume)
      ───────────────────────────────────────────────────────────── */}
      <section id="careers" className="py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/5">
              <Sparkles className="w-3.5 h-3.5 text-[#009999]" />
              <span>GLOBAL TALENT NETWORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#002d3b] uppercase tracking-tight">
              Opportunities &amp; <span className="text-[#009999]">Careers</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Join an international industrial, technology, and trading conglomerate spanning 190+ countries. Connect directly with our Human Resources leadership and submit your resume for global engineering, operational, and commercial positions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: HR Culture & Open Paths */}
            <div className="lg:col-span-5 space-y-6">

              <div className="bg-[#f8fafc] p-7 sm:p-8 border border-slate-200 space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                    WORKING AT TAKNISER
                  </span>
                  <h3 className="text-xl font-bold text-[#002d3b] uppercase tracking-tight mt-1">
                    Precision, Innovation &amp; Global Impact
                  </h3>
                </div>
                <p className="text-sm text-slate-650 leading-relaxed">
                  We empower engineers, technologists, international supply specialists, and strategic operators to tackle complex industrial challenges across 7 core divisions.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    { title: "German Engineering Heritage", desc: "Disciplined execution and highest quality benchmarks rooted in Hesse." },
                    { title: "Multinational Mobility", desc: "Opportunities spanning 30+ Regional Headquarters across 6 continents." },
                    { title: "Cutting-Edge Disciplines", desc: "AI Robotics, Space Technologies, Critical Resources, AgTech & Clean Energy." },
                    { title: "Lifelong Development", desc: "Continuous professional advancement within high-performance teams." },
                  ].map((benefit) => (
                    <div key={benefit.title} className="p-3.5 bg-white border border-slate-200">
                      <div className="text-xs font-bold text-[#002d3b] uppercase">{benefit.title}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{benefit.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct HR Liaison Note */}
              <div className="p-6 bg-[#001822] text-white border-l-4 border-[#009999] space-y-2">
                <div className="text-xs font-mono font-bold text-[#00cccc] uppercase tracking-widest">
                  HR TALENT DESK
                </div>
                <div className="text-sm font-bold text-white">
                  Direct Human Resources Portal
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  All uploaded resumes are ingested directly into our global candidate pool and reviewed by regional HR partners based on matching project and divisional openings.
                </p>
              </div>

            </div>

            {/* Right: Career & Resume Upload Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#f8fafc] p-7 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                    CANDIDATE SUBMISSION
                  </span>
                  <h3 className="text-2xl font-black text-[#002d3b] uppercase tracking-tight mt-1">
                    Connect with HR &amp; Submit Resume
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Fill out the candidate profile below and attach your CV or resume in PDF or Word format.
                  </p>
                </div>

                <CareerForm />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          GLOBAL NETWORK LINK BANNER (Siemens Dark Petrol)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#001822] text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Connect Directly with a <span className="text-[#009999]">Regional Headquarters</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Need regional logistics, local supply contracts, or country-specific representation? Our 30+ Regional Headquarters are stationed across Europe, the Americas, Africa, Middle East, Asia, and Oceania.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/global-network"
              className="btn-siemens btn-siemens-primary inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3"
            >
              <span>Explore 30+ Regional Hubs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="text-center text-xs text-slate-500 font-mono pt-6">
            TAKNISER ONE GLOBE — Complete Website Content Reference
          </div>
        </div>
      </section>

    </div>
  );
}
