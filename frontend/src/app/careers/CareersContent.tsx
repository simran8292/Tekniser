"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Globe,
  Award,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Compass,
  Cpu,
  Ship,
  GraduationCap,
  Building2,
  MapPin,
  Clock,
  Layers,
  FileCheck,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import CareerForm from "@/components/forms/CareerForm";
import { BUSINESS_DIVISIONS } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  region: string;
  type: "Full-Time" | "Rotational" | "Dual Study / Graduate";
  experience: string;
  description: string;
  requirements: string[];
}

const JOB_OPENINGS_DATA: JobOpening[] = [
  {
    id: "job-1",
    title: "Senior Industrial Systems & Automation Architect",
    department: "Engineering & Robotics",
    location: "Dillenburg / Frankfurt, Germany",
    region: "Europe",
    type: "Full-Time",
    experience: "5+ Years",
    description: "Lead the architectural design and deployment of Industry 4.0 automation systems, cyber-physical manufacturing units, and telemetry networks across European plants.",
    requirements: ["Degree in Mechatronics, Robotics, or Electrical Engineering", "Proven experience with Siemens PLC, SCADA, and industrial IoT", "Fluency in German & English"],
  },
  {
    id: "job-2",
    title: "Global Supply Chain & Maritime Procurement Director",
    department: "Supply Chain & Logistics",
    location: "Rotterdam, Netherlands / Dubai, UAE",
    region: "Global / Middle East",
    type: "Full-Time",
    experience: "7+ Years",
    description: "Oversee multimodal maritime corridors, bonded free-zone hub logistics in JAFZA, and strategic procurement contracts across 190+ country trading lanes.",
    requirements: ["Extensive background in international maritime logistics & EPC supply", "Knowledge of Incoterms, customs clearance, and port infrastructure", "Strong cross-border vendor negotiation record"],
  },
  {
    id: "job-3",
    title: "Orbital Electronics & Satellite Payload Engineer",
    department: "Space Economy",
    location: "Hesse, Germany / Toulouse, France",
    region: "Europe",
    type: "Full-Time",
    experience: "4+ Years",
    description: "Design radiation-hardened satellite avionics, ground station telemetry interfaces, and advanced composite enclosures for commercial space missions.",
    requirements: ["M.Sc. in Aerospace Engineering, Electronics, or Applied Physics", "Experience in high-reliability PCB design & thermal vacuum validation", "Cleanroom and aerospace standards compliance"],
  },
  {
    id: "job-4",
    title: "International EPC Project & Commodity Trading Manager",
    department: "International Trading",
    location: "Dubai, UAE / Singapore",
    region: "Middle East / Asia",
    type: "Full-Time",
    experience: "5+ Years",
    description: "Manage large-scale turnkey industrial equipment packages, trade finance instruments (L/C, Bank Guarantees), and institutional buyer partnerships.",
    requirements: ["Experience in heavy machinery, mining, or energy procurement", "Familiarity with MENA & Asia Pacific industrial trade regulations", "Fluency in English (Arabic or Mandarin a plus)"],
  },
  {
    id: "job-5",
    title: "Precision AgTech & Autonomous Systems Specialist",
    department: "AgTech & Advanced Systems",
    location: "São Paulo, Brazil / Nairobi, Kenya",
    region: "Americas / Africa",
    type: "Full-Time",
    experience: "3+ Years",
    description: "Deploy autonomous farm machinery telemetry, AI-driven soil sensing platforms, and climate-resilient irrigation technologies across regional agricultural corridors.",
    requirements: ["Background in Agricultural Engineering, Embedded IoT, or Robotics", "Field testing experience with precision telemetry hardware", "Willingness to travel across regional operational hubs"],
  },
  {
    id: "job-6",
    title: "Global Graduate Rotational Program (Engineering & Commerce)",
    department: "Graduate & Young Professionals",
    location: "Frankfurt (DE) → Dubai (UAE) → Singapore (SG)",
    region: "Rotational (Global)",
    type: "Dual Study / Graduate",
    experience: "0-2 Years / Recent Graduate",
    description: "An intensive 18-month cross-continent rotational trajectory across engineering design, global supply chain management, and international trade operations.",
    requirements: ["Top-tier Bachelor's or Master's degree in STEM or Business", "Demonstrated leadership potential and multilingual capability", "High intercultural agility and global mindset"],
  },
  {
    id: "job-7",
    title: "Dual Study Student — Mechatronics & Software (B.Eng.)",
    department: "Graduate & Young Professionals",
    location: "Dillenburg, Germany",
    region: "Europe",
    type: "Dual Study / Graduate",
    experience: "Entry Level / High School Diploma (Abitur)",
    description: "Combine university studies with practical German engineering apprenticeships across precision robotics, CAD simulation, and prototype manufacturing.",
    requirements: ["German Abitur or equivalent qualification with strong mathematics/physics marks", "Enthusiasm for German engineering excellence", "German language proficiency (C1/C2)"],
  },
  {
    id: "job-8",
    title: "Corporate ESG & Clean Energy Infrastructure Lead",
    department: "Sustainability & ESG",
    location: "Frankfurt, Germany / Milan, Italy",
    region: "Europe",
    type: "Full-Time",
    experience: "5+ Years",
    description: "Drive conglomerate-wide carbon neutrality roadmaps for Vision 2046, renewable microgrid deployments, and ISO 14001 compliance across global operations.",
    requirements: ["Expertise in corporate sustainability reporting (CSRD, GHG Protocol)", "Technical background in renewable power systems or energy management", "Strong stakeholder presentation skills"],
  },
];

export default function CareersContent() {
  const { currentLanguage, t } = useLanguage();
  const isDe = currentLanguage === "de";
  const isAr = currentLanguage === "ar";

  const [selectedDeptFilter, setSelectedDeptFilter] = useState<string>("All");
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applyingJob, setApplyingJob] = useState<JobOpening | null>(null);

  const departments = [
    "All",
    "Engineering & Robotics",
    "Supply Chain & Logistics",
    "Space Economy",
    "International Trading",
    "AgTech & Advanced Systems",
    "Graduate & Young Professionals",
    "Sustainability & ESG",
  ];

  const filteredJobs = JOB_OPENINGS_DATA.filter((job) => {
    if (selectedDeptFilter === "All") return true;
    return job.department === selectedDeptFilter;
  });

  return (
    <div className="bg-[#f8fafc] text-slate-900 pt-28">
      {/* ─────────────────────────────────────────────────────────────
          HERO BANNER (COMPACT)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[360px] lg:min-h-[420px] bg-[#001822] text-white flex items-center overflow-hidden">
        {/* Background Image with High-End Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/takniser_careers_hero.jpg"
            alt="Careers at TAKNISER — Collaborative Engineering Campus"
            fill
            sizes="100vw"
            className="object-cover object-[center_35%] filter contrast-[1.05] brightness-[0.82]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000e1a] via-[#001822]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000e1a] via-transparent to-[#000e1a]/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 relative z-10 w-full">
          <div className="max-w-3xl space-y-4 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#00cccc] text-[11px] font-mono font-bold tracking-widest uppercase bg-[#002d3b]/80 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-[#00cccc]" />
              <span>{isDe ? "KARRIERE BEI TAKNISER" : isAr ? "الوظائف في تاكنيسر" : "CAREERS AT TAKNISER"}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {isDe ? (
                <>Gestalten Sie Ihre Zukunft über <span className="text-[#00cccc]">Industrien & Märkte</span></>
              ) : isAr ? (
                <>ابنِ مسيرتك المهنية عبر <span className="text-[#00cccc]">الصناعات والتكنولوجيا</span></>
              ) : (
                <>Build Your Career Across <span className="text-[#00cccc]">Industries & Markets</span></>
              )}
            </h1>

            <p className="text-slate-200 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl font-normal">
              {isDe
                ? "Werden Sie Teil eines globalen Technologie-, Industrie- und Handelskonglomerats mit über 100 Jahren deutscher Ingenieurstradition. Entdecken Sie weltweite Perspektiven in 190+ Ländern."
                : isAr
                ? "انضم إلى تكتل صناعي وتكنولوجي وتجاري عالمي يستند إلى أكثر من 100 عام من التميز الهندسي الألماني. اكتشف فرصاً مهنية واعدة في أكثر من 190 دولة."
                : "Join a global technology, manufacturing, and trading conglomerate with over 100 years of German engineering heritage. Discover world-class career pathways across 190+ countries and 30 Regional Headquarters."}
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#openings"
                className="btn-siemens btn-siemens-primary inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider"
              >
                <span>{isDe ? "Offene Stellen ansehen" : isAr ? "استعراض الوظائف الشاغرة" : "Explore Open Positions"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#submit-cv"
                className="btn-siemens btn-siemens-secondary inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider"
              >
                <span>{isDe ? "Initiativbewerbung / CV" : isAr ? "تقديم السيرة الذاتية" : "Submit Your CV"}</span>
              </a>
            </div>

            {/* Metric Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 pt-4 mt-2 border-t border-slate-700/60">
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono">190+</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-300 uppercase mt-0.5">{isDe ? "Länder & Märkte" : "Countries & Markets"}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#00cccc] font-mono">30</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-300 uppercase mt-0.5">{isDe ? "Regionale HQs" : "Regional Hubs"}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono">7</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-300 uppercase mt-0.5">{isDe ? "Geschäftsbereiche" : "Core Divisions"}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#00cccc] font-mono">100+</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-300 uppercase mt-0.5">{isDe ? "Jahre Tradition" : "Years Heritage"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          1. WHY TAKNISER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/5">
              <Shield className="w-3.5 h-3.5 text-[#009999]" />
              <span>{isDe ? "WARUM TAKNISER" : isAr ? "لماذا تاكنيسر" : "WHY TAKNISER"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#002d3b] uppercase tracking-tight">
              {isDe ? (
                <>Das Fundament für Ihre <span className="text-[#009999]">globale Karriere</span></>
              ) : (
                <>The Foundation for Your <span className="text-[#009999]">Global Career</span></>
              )}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isDe
                ? "Wir vereinen die Verlässlichkeit und Präzision traditioneller deutscher Ingenieurskunst mit der Dynamik globaler Zukunftsmärkte."
                : "We unite the reliability, precision, and trust of German engineering with the agility and scale of 190+ international markets."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-[#f8fafc] border border-slate-200 hover:border-[#009999] hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-[#002d3b] text-[#00cccc] flex items-center justify-center mb-6 group-hover:bg-[#009999] group-hover:text-white transition-colors">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#002d3b] uppercase tracking-tight mb-2">
                {isDe ? "Deutsche Ingenieurstradition" : "German Engineering Heritage"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                {isDe
                  ? "Arbeiten Sie nach den bewährten Prinzipien von Präzision, Qualität, Zuverlässigkeit und Vertrauen, die seit über 100 Jahren in Hessen verankert sind."
                  : "Work upon century-tested principles of Präzision, Qualität, Zuverlässigkeit, and Vertrauen originating from our historic Hesse headquarters."}
              </p>
            </div>

            <div className="p-8 bg-[#f8fafc] border border-slate-200 hover:border-[#009999] hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-[#002d3b] text-[#00cccc] flex items-center justify-center mb-6 group-hover:bg-[#009999] group-hover:text-white transition-colors">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#002d3b] uppercase tracking-tight mb-2">
                {isDe ? "Globale Mobilität in 190+ Ländern" : "Global Mobility in 190+ Countries"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                {isDe
                  ? "Verbinden Sie Standorte auf allen 6 Kontinenten. Nutzen Sie internationale Entsendungen und standortübergreifende Projekte in 30 Regional-HQs."
                  : "Collaborate across 6 continents. Take advantage of international project assignments, cross-regional rotations, and 30 regional hubs."}
              </p>
            </div>

            <div className="p-8 bg-[#f8fafc] border border-slate-200 hover:border-[#009999] hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-[#002d3b] text-[#00cccc] flex items-center justify-center mb-6 group-hover:bg-[#009999] group-hover:text-white transition-colors">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#002d3b] uppercase tracking-tight mb-2">
                {isDe ? "Multidisziplinäres Ökosystem" : "Multidisciplinary Scale"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                {isDe
                  ? "Von Robotik und Weltraumwirtschaft bis hin zu AgTech und internationalem Warenhandel — entfalten Sie Ihr Potenzial über vielfältige Domänen."
                  : "From robotics and orbital space systems to AgTech and maritime trade — deploy your talents across diverse high-impact disciplines."}
              </p>
            </div>

            <div className="p-8 bg-[#f8fafc] border border-slate-200 hover:border-[#009999] hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-[#002d3b] text-[#00cccc] flex items-center justify-center mb-6 group-hover:bg-[#009999] group-hover:text-white transition-colors">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#002d3b] uppercase tracking-tight mb-2">
                {isDe ? "Lebenslange Entwicklung & Mentoring" : "Lifelong Mastery & Growth"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                {isDe
                  ? "Strukturierte Führungsprogramme, technische Meisterklassen und akademische Kooperationen für kontinuierlichen beruflichen Aufstieg."
                  : "Structured executive mentorship, dual educational tracks, and technical masterclasses empowering continuous career progression."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. OUR GLOBAL OPPORTUNITIES (CAREER TRACKS)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#001822] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#00cccc] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]">
              <Briefcase className="w-3.5 h-3.5 text-[#00cccc]" />
              <span>{isDe ? "GLOBALE BERUFSFELDER" : "OUR GLOBAL OPPORTUNITIES"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {isDe ? (
                <>Bereiche für Ihre <span className="text-[#00cccc]">Expertise</span></>
              ) : (
                <>Disciplines of <span className="text-[#00cccc]">High Impact</span></>
              )}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {isDe
                ? "Entdecken Sie maßgeschneiderte Karrierewege in den Schlüsselbranchen der globalen Industrie."
                : "Explore purpose-driven career streams powering Industry 4.0, international commerce, and technological frontiers."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: isDe ? "Ingenieurwesen & Automatisierung" : "Engineering & Advanced Automation",
                desc: isDe ? "Industrielle Mechatronik, Robotersteuerungen, CAD-Simulationen und sensorintegrierte Fabriksysteme." : "Industrial mechatronics, robotic control algorithms, CAD modeling, and cyber-physical production lines.",
                tag: "R&D / Systems",
                icon: Cpu,
              },
              {
                title: isDe ? "Lieferkette & Globale Beschaffung" : "Supply Chain, Logistics & Maritime",
                desc: isDe ? "Multimodale Transportkorridore, Zolllager, Freizonenhubs und strategische Rohstoffbeschaffung." : "Multimodal maritime routes, bonded logistics centers, JAFZA hub operations, and strategic sourcing.",
                tag: "Logistics",
                icon: Ship,
              },
              {
                title: isDe ? "Raumfahrtwirtschaft & Elektronik" : "Space Economy & Orbital Systems",
                desc: isDe ? "Strahlungsfeste Avionik, Satellitennutzlasten, Bodenstations-Infrastruktur und Weltraumrobotik." : "Radiation-hardened electronics, satellite subsystems, ground network telemetry, and orbital payload modules.",
                tag: "Aerospace",
                icon: Compass,
              },
              {
                title: isDe ? "Internationaler Handel & EPC-Projekte" : "International Trading & EPC Delivery",
                desc: isDe ? "Großvolumige Projektversorgung, schlüsselfertige Anlagen, Handelsfinanzierung und Allianzen." : "Turnkey industrial packages, structured trade finance (L/Cs, guarantees), and government project supply.",
                tag: "Commercial",
                icon: TrendingUp,
              },
              {
                title: isDe ? "AgTech & Nachhaltige Agrarsysteme" : "AgTech & Smart Farm Telemetry",
                desc: isDe ? "Autonome Landmaschinen, KI-Bodenanalysen, Präzisionsbewässerung und resiliente Versorgung." : "Autonomous agricultural machinery, precision crop telemetry, smart irrigation, and resilient food supply.",
                tag: "AgTech",
                icon: Layers,
              },
              {
                title: isDe ? "ESG, Nachhaltigkeit & Erneuerbare Energien" : "ESG, Clean Power & Sustainable Earth",
                desc: isDe ? "Dekarbonisierungs-Roadmaps (Vision 2046), industrielle Microgrids und Umweltmanagement." : "Conglomerate decarbonization strategies, industrial microgrid integration, and circular lifecycle engineering.",
                tag: "ESG / Vision 2046",
                icon: Award,
              },
            ].map((track) => {
              const IconComp = track.icon;
              return (
                <div
                  key={track.title}
                  className="p-7 bg-[#002433] border border-slate-800 hover:border-[#009999] hover:shadow-2xl transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-[#001822] text-[#00cccc] border border-slate-700">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#009999]/20 text-[#00cccc] border border-[#009999]/40 uppercase">
                        {track.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white uppercase tracking-tight">
                      {track.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {track.desc}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs font-mono text-[#00cccc]">
                    <span>{isDe ? "Offene Profile verfügbar" : "Active Career Pathways"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. LIFE AT TAKNISER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/5">
                <Users className="w-3.5 h-3.5 text-[#009999]" />
                <span>{isDe ? "UNSERE UNTERNEHMENSKULTUR" : "LIFE AT TAKNISER"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight">
                {isDe ? (
                  <>Verlässlichkeit, Exzellenz & <span className="text-[#009999]">Gemeinsamer Erfolg</span></>
                ) : (
                  <>A Culture of Precision, Trust & <span className="text-[#009999]">Global Community</span></>
                )}
              </h2>
              <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
                {isDe
                  ? "Bei TAKNISER arbeiten Sie in modernen Campus-Umgebungen und hochmodernen Studios. Wir schätzen flache Hierarchien, offene Kommunikation und die Verbindung erfahrener Ingenieursdisziplin mit frischen Ideen."
                  : "At TAKNISER, our workstations and campus studios reflect state-of-the-art European design. We foster an environment of intellectual curiosity, rigorous German engineering standards, and international collaboration across diverse backgrounds."}
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: isDe ? "State-of-the-Art Arbeitsplätze & Labore" : "State-of-the-Art Workstations & Labs",
                    desc: isDe ? "Moderne Büros, CAD-Arbeitsplätze und fortschrittliche Testlabore mit neuester Hard- und Software." : "Ergonomic oak-and-steel workstations, modern engineering labs, and high-performance CAD infrastructure.",
                  },
                  {
                    title: isDe ? "Work-Life-Balance & Hybride Flexibilität" : "Balanced Agility & Hybrid Flexibility",
                    desc: isDe ? "Flexible Arbeitszeitmodelle, hybrides Arbeiten und kontinuierliche Gesundheits- und Fitnessangebote." : "Hybrid working models, wellness frameworks, and comprehensive family support initiatives.",
                  },
                  {
                    title: isDe ? "Internationales, inklusives Arbeitsumfeld" : "Inclusive & Multilingual Global Teams",
                    desc: isDe ? "Mitarbeiter aus über 50 Nationen, die täglich über Grenzen hinweg zusammenarbeiten." : "Colleagues representing 50+ nationalities collaborating smoothly across time zones and trading hubs.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5 p-4 bg-[#f8fafc] border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#009999] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#002d3b] uppercase">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full border-4 border-white shadow-2xl overflow-hidden bg-[#001822]">
                <Image
                  src="/takniser_workstation_branded_v2.jpg"
                  alt="TAKNISER Modern Engineering Workstation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover filter contrast-[1.02] brightness-[0.98]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#002d3b] text-white p-6 border-l-4 border-[#009999] shadow-xl max-w-xs hidden sm:block">
                <div className="text-[11px] font-mono font-bold text-[#00cccc] uppercase tracking-wider">
                  {isDe ? "HESSEN • DEUTSCHLAND" : "HESSE • GERMANY"}
                </div>
                <div className="text-xs font-medium text-slate-200 mt-1">
                  {isDe ? "Globaler Hauptsitz & Entwicklungszentrum" : "Global HQ & Advanced Engineering Hub"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. OUR 7 BUSINESS PLATFORMS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#f1f5f9] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/5">
              <Layers className="w-3.5 h-3.5 text-[#009999]" />
              <span>{isDe ? "7 KERNBEREICHE" : "OUR 7 BUSINESS PLATFORMS"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#002d3b] uppercase tracking-tight">
              {isDe ? (
                <>Wählen Sie Ihren <span className="text-[#009999]">Schwerpunkt</span></>
              ) : (
                <>Select Your <span className="text-[#009999]">Divisional Sphere</span></>
              )}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isDe
                ? "Jeder unserer 7 Geschäftsbereiche bietet spezialisierte Entwicklungs- und Karrierepfade."
                : "Each of our 7 integrated conglomerate platforms offers specialized engineering, operational, and commercial career paths."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {BUSINESS_DIVISIONS.map((div) => (
              <Link
                key={div.id}
                href={`/divisions/${div.slug}`}
                className="bg-white p-6 border border-slate-200 hover:border-[#009999] hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <h3 className="text-base font-black text-[#002d3b] uppercase tracking-tight group-hover:text-[#009999] transition-colors">
                    {t(`div-${div.slug}-title`) || div.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {t(`div-${div.slug}-tagline`) || div.tagline}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#009999]">
                  <span>{isDe ? "Bereich ansehen" : "Explore Division"}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. GLOBAL LOCATIONS (30 REGIONAL HUBS)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#001822] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#00cccc] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]">
              <MapPin className="w-3.5 h-3.5 text-[#00cccc]" />
              <span>{isDe ? "STANDORTE WELTWEIT" : "GLOBAL LOCATIONS"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {isDe ? (
                <>30 Regionale Hauptsitze & <span className="text-[#00cccc]">Globaler Hub</span></>
              ) : (
                <>30 Regional Hubs & <span className="text-[#00cccc]">Global Headquarters</span></>
              )}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {isDe
                ? "Karrierechancen in den wichtigsten Finanz-, Industrie- und Logistikzentren der Welt."
                : "Career destinations located in the world's most vital industrial, financial, and logistical epicenters."}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { city: "Dillenburg / Frankfurt", country: "Germany", role: "Global Group HQ" },
              { city: "Rotterdam", country: "Netherlands", role: "Maritime Logistics Hub" },
              { city: "Dubai", country: "UAE", role: "MEA Operations & JAFZA" },
              { city: "Singapore", country: "Singapore", role: "Asia Pacific Trade Hub" },
              { city: "São Paulo", country: "Brazil", role: "Latin America AgTech" },
              { city: "Melbourne", country: "Australia", role: "Oceania Heavy Equipment" },
            ].map((loc) => (
              <div key={loc.city} className="p-5 bg-[#002433] border border-slate-800 hover:border-[#009999] transition-all">
                <div className="text-sm font-bold text-white uppercase">{loc.city}</div>
                <div className="text-xs text-[#00cccc] font-mono mt-0.5">{loc.country}</div>
                <div className="text-[10px] text-slate-400 mt-2 border-t border-slate-800 pt-2">{loc.role}</div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/global-network"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00cccc] hover:underline"
            >
              <span>{isDe ? "Alle 30 regionalen Niederlassungen auf der Karte ansehen" : "View All 30 Regional Operating Entities on Interactive Map"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CURRENT JOB OPENINGS (INTERACTIVE FILTERABLE BOARD)
      ───────────────────────────────────────────────────────────── */}
      <section id="openings" className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/5">
              <FileCheck className="w-3.5 h-3.5 text-[#009999]" />
              <span>{isDe ? "AKTUELLE STELLENANGEBOTE" : "CURRENT JOB OPENINGS"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#002d3b] uppercase tracking-tight">
              {isDe ? (
                <>Finden Sie Ihre <span className="text-[#009999]">Position</span></>
              ) : (
                <>Find Your Next <span className="text-[#009999]">Role</span></>
              )}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isDe
                ? "Filtern Sie nach Fachbereich und bewerben Sie sich direkt online bei unserem Talent-Team."
                : "Browse active requisitions across our regional operating entities and apply directly to our recruitment directors."}
            </p>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {departments.map((dept) => {
              const isActive = selectedDeptFilter === dept;
              return (
                <button
                  key={dept}
                  onClick={() => setSelectedDeptFilter(dept)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-none border ${
                    isActive
                      ? "bg-[#002d3b] text-white border-[#002d3b] shadow-md"
                      : "bg-[#f8fafc] text-slate-700 border-slate-200 hover:border-[#009999] hover:text-[#002d3b]"
                  }`}
                >
                  {dept}
                </button>
              );
            })}
          </div>

          {/* Job Listings Grid */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 sm:p-7 bg-[#f8fafc] border border-slate-200 hover:border-[#009999] hover:shadow-lg transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-2.5 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-0.5 bg-[#002d3b] text-[#00cccc] font-bold">
                      {job.department}
                    </span>
                    <span className="px-2.5 py-0.5 bg-slate-200 text-slate-700 font-semibold">
                      {job.type}
                    </span>
                    <span className="text-slate-500 font-medium">
                      Exp: {job.experience}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#002d3b] uppercase tracking-tight">
                    {job.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-normal">
                    {job.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#009999]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 justify-center">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="btn-siemens btn-siemens-secondary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-center"
                  >
                    {isDe ? "Details anzeigen" : "View Requirements"}
                  </button>
                  <button
                    onClick={() => setApplyingJob(job)}
                    className="btn-siemens btn-siemens-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5"
                  >
                    <span>{isDe ? "Jetzt bewerben" : "Apply Now"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Job Requirements if clicked */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="bg-white max-w-2xl w-full p-8 border-2 border-[#009999] shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#009999] uppercase">{selectedJob.department}</span>
                <h3 className="text-xl font-bold text-[#002d3b] uppercase mt-1">{selectedJob.title}</h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mt-1">
                  <span>{selectedJob.location}</span>
                  <span>•</span>
                  <span>{selectedJob.type}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-slate-400 hover:text-slate-800 text-lg font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-[#002d3b] uppercase mb-1">{isDe ? "Rollenübersicht" : "Role Overview"}</h4>
                <p className="leading-relaxed">{selectedJob.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#002d3b] uppercase mb-2">{isDe ? "Qualifikationen & Anforderungen" : "Key Qualifications"}</h4>
                <ul className="space-y-1.5">
                  {selectedJob.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#009999] shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedJob(null)}
                className="px-5 py-2.5 border border-slate-300 text-xs font-bold uppercase tracking-wider hover:bg-slate-100"
              >
                {isDe ? "Schließen" : "Close"}
              </button>
              <button
                onClick={() => {
                  const job = selectedJob;
                  setSelectedJob(null);
                  setApplyingJob(job);
                }}
                className="btn-siemens btn-siemens-primary px-6 py-2.5 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
              >
                <span>{isDe ? "Jetzt bewerben" : "Apply Now"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Direct "Apply Now" with full 10-field CareerForm */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-white max-w-3xl w-full p-6 sm:p-8 border-2 border-[#009999] shadow-2xl relative space-y-6 max-h-[92vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 border border-[#009999] text-[#009999] text-[11px] font-mono font-bold tracking-widest uppercase bg-[#002d3b]/5 mb-1">
                  <span>{applyingJob.department}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#002d3b] uppercase tracking-tight">
                  {applyingJob.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#009999]" />
                  <span>{applyingJob.location}</span>
                  <span>•</span>
                  <span>{applyingJob.type}</span>
                </div>
              </div>
              <button
                onClick={() => setApplyingJob(null)}
                className="text-slate-400 hover:text-slate-800 text-xl font-bold p-1 leading-none"
              >
                ✕
              </button>
            </div>

            <CareerForm
              initialPosition={`${applyingJob.title} (${applyingJob.location})`}
              isModal={true}
              onSuccess={() => {}}
            />
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          7. GRADUATE & YOUNG PROFESSIONAL OPPORTUNITIES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/5">
              <GraduationCap className="w-3.5 h-3.5 text-[#009999]" />
              <span>{isDe ? "NACHWUCHS & ABSOLVENTEN" : "GRADUATE & YOUNG PROFESSIONALS"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#002d3b] uppercase tracking-tight">
              {isDe ? (
                <>Der Einstieg für die <span className="text-[#009999]">nächste Generation</span></>
              ) : (
                <>Empowering the <span className="text-[#009999]">Next Generation</span></>
              )}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isDe
                ? "Gezielte Ausbildungsprogramme, Duales Studium nach deutschem Standard und internationale Traineepfade."
                : "Structured educational programs combining academic theory with real-world German engineering practice."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-slate-200 hover:border-[#009999] hover:shadow-xl transition-all space-y-4">
              <div className="w-12 h-12 bg-[#002d3b] text-[#00cccc] flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#002d3b] uppercase tracking-tight">
                {isDe ? "Duales Studium (B.Eng. / B.Sc.)" : "Dual Study Programs (Germany)"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                {isDe
                  ? "Verbinden Sie ein universitäres Bachelorstudium mit bezahlter Praxiserfahrung an unserem hessischen Hauptsitz."
                  : "Combine full university tuition sponsorship with hands-on practical engineering apprenticeships at our German headquarters."}
              </p>
              <div className="pt-2 text-xs font-mono text-[#009999] font-bold">
                {isDe ? "Dauer: 3–3,5 Jahre • Voll vergütet" : "Duration: 3–3.5 Years • Fully Funded"}
              </div>
            </div>

            <div className="bg-white p-8 border border-slate-200 hover:border-[#009999] hover:shadow-xl transition-all space-y-4">
              <div className="w-12 h-12 bg-[#002d3b] text-[#00cccc] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#002d3b] uppercase tracking-tight">
                {isDe ? "Global Rotational Program (18 Monate)" : "Global Rotational Program (18 Mo.)"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                {isDe
                  ? "Drei 6-monatige Stationen in Deutschland, den VAE und Singapur für herausragende Masterabsolventen."
                  : "Three 6-month international rotations spanning Germany, Dubai, and Singapore for top-tier master graduates."}
              </p>
              <div className="pt-2 text-xs font-mono text-[#009999] font-bold">
                {isDe ? "Rotierend über 3 Kontinente" : "3 Continents • Fast-Track Leadership"}
              </div>
            </div>

            <div className="bg-white p-8 border border-slate-200 hover:border-[#009999] hover:shadow-xl transition-all space-y-4">
              <div className="w-12 h-12 bg-[#002d3b] text-[#00cccc] flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#002d3b] uppercase tracking-tight">
                {isDe ? "Ingenieur-Praktika & Abschlussarbeiten" : "Engineering Internships & Theses"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                {isDe
                  ? "Schreiben Sie Ihre Bachelor- oder Masterarbeit in direkter Kooperation mit unseren F&E-Laboren."
                  : "Conduct research and write your thesis directly embedded within our industrial robotics, energy, or satellite labs."}
              </p>
              <div className="pt-2 text-xs font-mono text-[#009999] font-bold">
                {isDe ? "Laufend verfügbar in F&E" : "Ongoing Availability in R&D Labs"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. SUBMIT YOUR CV (INTEGRATED CAREER FORM)
      ───────────────────────────────────────────────────────────── */}
      <section id="submit-cv" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/5">
              <FileCheck className="w-3.5 h-3.5 text-[#009999]" />
              <span>{isDe ? "BEWERBERPORTAL & CV-UPLOAD" : "CANDIDATE SUBMISSION"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#002d3b] uppercase tracking-tight">
              {isDe ? (
                <>Lebenslauf einreichen & <span className="text-[#009999]">Karriere starten</span></>
              ) : (
                <>Submit Your Resume &amp; <span className="text-[#009999]">Join Our Network</span></>
              )}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isDe
                ? "Senden Sie uns Ihr Profil und Ihren Lebenslauf. Unser globales Talent-Team prüft Ihre Unterlagen für passende Vakanzen weltweit."
                : "Submit your candidate profile and upload your CV/Resume. Our regional recruitment partners will review your qualifications for matching opportunities."}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#f8fafc] p-8 sm:p-12 border border-slate-200 shadow-xl">
            <div className="border-b border-slate-200 pb-5 mb-8">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                <Briefcase className="w-4 h-4" />
                <span>{isDe ? "KANDIDATENPROFIL ERSTELLEN" : "CREATE CANDIDATE PROFILE"}</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">
                {isDe
                  ? "Zulässige Formate: PDF, DOC, DOCX (max. 10 MB). Ihre Daten werden gemäß DSGVO streng vertraulich behandelt."
                  : "Accepted file formats: PDF, DOC, DOCX (max 10MB). Data is processed with strict European GDPR confidentiality."}
              </div>
            </div>

            <CareerForm />
          </div>
        </div>
      </section>
    </div>
  );
}
