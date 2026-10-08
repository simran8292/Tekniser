"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Download,
  Share2,
  FileText,
  Volume2,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  X,
  Filter,
  Check,
  Mail,
  Phone,
  Building2,
  Maximize2,
  Sparkles,
  BookOpen,
  Eye,
  Camera,
  Layers,
  Award,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

/* =========================================================================
   DATA TYPES & STRUCTURES
   ========================================================================= */

interface NewsItem {
  id: string;
  category: "Strategic" | "Robotics" | "Energy" | "Corporate" | "Financial" | "Sustainability";
  categoryLabel: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  location: string;
  fullBody: string[];
  pdfSize?: string;
}

interface SpeechItem {
  id: string;
  speaker: string;
  title: string;
  role: string;
  event: string;
  location: string;
  date: string;
  image: string;
  quote: string;
  keyTakeaways: string[];
  transcriptExcerpt: string[];
}

interface EditorialStory {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
  summary: string;
}

interface GalleryPhoto {
  id: string;
  title: string;
  category: "All" | "Plants" | "Robotics" | "Energy" | "Campus";
  categoryLabel: string;
  image: string;
  resolution: string;
  dimensions: string;
  caption: string;
  location: string;
  license: string;
}

interface Publication {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  pages: number;
  fileSize: string;
  image: string;
  type: string;
}

/* =========================================================================
   STATIC DATA DEFINITIONS
   ========================================================================= */

const FEATURED_HERO_NEWS: NewsItem = {
  id: "featured-1",
  category: "Strategic",
  categoryLabel: "GLOBAL EXPANSION & ALLIANCES",
  date: "October 06, 2026",
  readTime: "4 min read",
  title: "TAKNISER Enhances Global Innovation Ecosystem Through Multi-Continent Strategic Alliances & Deep-Tech Automation",
  excerpt:
    "At the 2026 Global Industrial Summit in Frankfurt, TAKNISER GmbH announced landmark framework agreements totaling €4.2B with premier European, Middle Eastern, and Asian industrial leaders to accelerate low-carbon infrastructure and autonomous industrial corridors.",
  image: "/officeimage2.png",
  imageAlt: "TAKNISER Global Corporate Headquarters - Dillenburg Campus",
  location: "Frankfurt am Main, Germany / Dhahran, Saudi Arabia",
  fullBody: [
    "FRANKFURT AM MAIN — TAKNISER ONE GLOBE today announced the formal ratification of a comprehensive multilateral partnership initiative spanning 14 leading international corporations across Germany, France, the Kingdom of Saudi Arabia, and Japan.",
    "The multi-year framework aims to co-develop next-generation industrial automation, deploy sovereign AI-powered supply chain corridors, and scale cross-border renewable hydrogen transport systems.",
    "Speaking from the Global Innovation Pavilion, TAKNISER's Executive Leadership underlined the importance of German engineering standards fused with global operational agility: 'As the world transitions to higher-efficiency industrial architectures, TAKNISER remains the trusted backbone linking raw materials, automated manufacturing, and mission-critical distribution across 190+ countries.'",
    "Key focus areas of the agreement include the commissioning of high-throughput subsea inspection robotic fleets, zero-loss electrical distribution substations, and joint academic fellowship programs in computational materials engineering.",
  ],
  pdfSize: "2.4 MB",
};

const NEWS_ARTICLES: NewsItem[] = [
  {
    id: "news-1",
    category: "Robotics",
    categoryLabel: "AUTONOMOUS SYSTEMS",
    date: "September 28, 2026",
    readTime: "3 min read",
    title: "TAKNISER Signs Framework to Pioneer Industrial AI Robotics for Subsea & Shallow-Water Asset Inspection",
    excerpt:
      "Engineered by TAKNISER Robotics Lab in Hesse, the SWIM-R autonomous platform performs underwater infrastructure inspections 4x faster than conventional diver units with zero personnel exposure.",
    image: "/clean_robotics.jpg",
    imageAlt: "Autonomous industrial robotic system undergoing laboratory precision testing",
    location: "Darmstadt, Germany",
    fullBody: [
      "TAKNISER Robotics GmbH has officially unveiled the SWIM-R Mark IV shallow-water inspection robotic platform, completing over 1,200 hours of continuous subsea qualification trials in the North Sea and the Arabian Gulf.",
      "The untethered robotic crawler leverages high-definition multi-spectral acoustic sensors and real-time ultrasonic wall-thickness mapping to detect micro-fractures in offshore pipelines without interrupting operational throughput.",
    ],
    pdfSize: "1.8 MB",
  },
  {
    id: "news-2",
    category: "Financial",
    categoryLabel: "EARNINGS & OPERATIONS",
    date: "August 15, 2026",
    readTime: "5 min read",
    title: "TAKNISER Announces Robust Second Quarter & Half-Year 2026 Global Operating Performance",
    excerpt:
      "Consistent double-digit expansion across the 7 Core Divisions delivers strong capital return, fueled by international EPC contracts and accelerated commercial uptake of automated manufacturing platforms.",
    image: "/about_conglomerate_hq.jpg",
    imageAlt: "TAKNISER International Executive Center and Financial Management Campus",
    location: "Wiesbaden, Germany",
    fullBody: [
      "TAKNISER GmbH today reported its interim financial disclosures for the six-month period ended June 30, 2026. Consolidated revenue expanded by 14.8% year-over-year, supported by balanced contributions from Industrial Manufacturing, Energy Logistics, and the Space Economy division.",
      "Operating cash flow reached record highs, maintaining the Group's net debt-to-equity ratio well below targeted thresholds while funding €620M in ongoing R&D across our 30 Regional Headquarters.",
    ],
    pdfSize: "3.2 MB",
  },
  {
    id: "news-3",
    category: "Energy",
    categoryLabel: "CLEAN ENERGY INFRASTRUCTURE",
    date: "August 04, 2026",
    readTime: "4 min read",
    title: "TAKNISER and European Energy Consortium Commission 1.2 GW Offshore Wind-to-Hydrogen Integration Facility",
    excerpt:
      "The newly commissioned marine facility harnesses high-yield offshore winds to power high-efficiency PEM electrolysis units, generating ultra-pure green hydrogen for heavy transport corridors.",
    image: "/cat_energy_lng.jpg",
    imageAlt: "Offshore energy production platforms and cryogenic LNG transport vessels",
    location: "Wilhelmshaven, Germany",
    fullBody: [
      "TAKNISER EPC Division and its European infrastructure consortium partners have delivered commercial operation of the 1.2 GW North Horizon maritime green hydrogen complex ahead of schedule.",
      "The project introduces TAKNISER's proprietary cryogenic pressure vessel metallurgy, preventing hydrogen embrittlement over a certified 40-year design lifecycle in aggressive marine environments.",
    ],
    pdfSize: "2.1 MB",
  },
  {
    id: "news-4",
    category: "Strategic",
    categoryLabel: "CRITICAL MINERALS",
    date: "July 22, 2026",
    readTime: "3 min read",
    title: "Hard-Rock Lithium and Rare Earth Processing Hub Launched in Central European Industrial Corridor",
    excerpt:
      "A strategic joint venture designed to secure sovereign battery cathode precursor supplies through low-water chemical extraction and 99.8% hydrometallurgical recycling efficiency.",
    image: "/mining_quarry_platform.jpg",
    imageAlt: "Heavy industrial processing and quarry infrastructure with autonomous haulage",
    location: "Saxony, Germany",
    fullBody: [
      "TAKNISER Mining & Advanced Minerals has broken ground on its Central European refining facility, capable of processing both primary spodumene concentrate and post-industrial end-of-life battery cells.",
      "The closed-loop refinery emits 68% less Scope 1 CO2 than conventional thermal processing routes through closed-cycle acid regeneration and 100% electrified heavy machinery.",
    ],
    pdfSize: "1.9 MB",
  },
  {
    id: "news-5",
    category: "Corporate",
    categoryLabel: "SUPPLY CHAIN & LOGISTICS",
    date: "July 10, 2026",
    readTime: "4 min read",
    title: "Autonomous Supply Chains: 300,000 m² Automated Smart Logistics Port Hub Commences Operations in Rotterdam",
    excerpt:
      "Equipped with 250 AI-directed autonomous mobile robots and automated container cranes, the terminal achieves 3.2-minute average turnaround per intermodal freight rail car.",
    image: "/about_logistics_port.jpg",
    imageAlt: "Deepwater commercial port with high-capacity container cranes and logistics vessels",
    location: "Port of Rotterdam, Netherlands",
    fullBody: [
      "TAKNISER Logistics Infrastructure today inaugurated its flagship deepwater smart hub in Rotterdam. The intermodal complex connects transoceanic maritime trade lanes directly with central European inland rail networks.",
      "By unifying optical container recognition with real-time customs automation, the terminal reduces dwell times by 42% while cutting terminal diesel consumption to absolute zero through battery-electric gantry systems.",
    ],
    pdfSize: "2.7 MB",
  },
  {
    id: "news-6",
    category: "Sustainability",
    categoryLabel: "SUSTAINABLE EARTH INITIATIVE",
    date: "June 29, 2026",
    readTime: "3 min read",
    title: "Sustainable Earth Initiative Reaches Milestone: 5 Million Mangroves Planted Across Coastal Ecosystems",
    excerpt:
      "A flagship community and biodiversity preservation project uniting TAKNISER environmental scientists and local municipalities to restore critical carbon sinks and marine nurseries.",
    image: "/impact_nature_clean.jpg",
    imageAlt: "Pristine marine coastline and restored mangrove conservation park",
    location: "Arabian Gulf & Red Sea Coastlines",
    fullBody: [
      "TAKNISER ONE GLOBE's Environmental Responsibility Taskforce today recorded its five-millionth mangrove planting, culminating Phase II of the Coastal Biodiversity Restoration Program.",
      "Each protected reserve is monitored by aerial multispectral LiDAR drones, tracking root establishment, soil salinity normalization, and resident migratory bird populations in open public data portals.",
    ],
    pdfSize: "1.5 MB",
  },
  {
    id: "news-7",
    category: "Robotics",
    categoryLabel: "AGTECH INNOVATION",
    date: "June 14, 2026",
    readTime: "3 min read",
    title: "AgTech & Food Security Division Deploys Autonomous Precision Harvesting Fleet Across South America",
    excerpt:
      "High-precision optical sorting combines with satellite-guided mechanical harvesters to cut crop waste by 24% and eliminate indiscriminate pesticide drift.",
    image: "/cat_agtech_machinery.jpg",
    imageAlt: "Heavy agricultural combine machinery operating in broad precision agricultural fields",
    location: "Mato Grosso, Brazil / Buenos Aires, Argentina",
    fullBody: [
      "TAKNISER AgTech Solutions announced the wide-scale commercial rollout of its autonomous TerraMaster harvest system, serving over 400,000 hectares of sustainable grain cultivation.",
    ],
    pdfSize: "1.6 MB",
  },
  {
    id: "news-8",
    category: "Corporate",
    categoryLabel: "HEALTHCARE & LIFECARE",
    date: "May 30, 2026",
    readTime: "4 min read",
    title: "TAKNISER LifeCare Unveils Biopharmaceutical Cold-Chain Network Across 45 Emerging Global Corridors",
    excerpt:
      "Ultra-low temperature cryogenic logistics containers equipped with satellite telemetry guarantee uninterrupted vaccine and oncology therapy delivery across Latin America and Central Asia.",
    image: "/cat_lifecare_pharma.jpg",
    imageAlt: "Pharmaceutical cleanroom automated manufacturing line and laboratory vials",
    location: "Geneva, Switzerland / Singapore",
    fullBody: [
      "The TAKNISER LifeCare division has deployed 10,000 active CryoShield thermal containers, certified to sustain temperatures of -80°C for up to 14 days without external power.",
    ],
    pdfSize: "2.3 MB",
  },
];

const EXECUTIVE_SPEECHES: SpeechItem[] = [
  {
    id: "speech-1",
    speaker: "Dr. Klaus V. Bergmann",
    role: "Executive Chairman & Chief Executive Officer",
    event: "Energy Intelligence Global Forum 2026",
    location: "London, United Kingdom",
    date: "October 04, 2026",
    title: "Energy Realism & The Industrial Pragmatism of Tomorrow",
    image: "/frontiers_explorer_summit.jpg",
    quote:
      "The energy transition cannot be treated as a sprint of slogans, but as an unrelenting engineering marathon that demands reliable baseload power, resilient supply chains, and pragmatic capital allocation.",
    keyTakeaways: [
      "Dual focus on decarbonizing existing baseload systems while funding next-gen renewables.",
      "Why energy security and affordability are prerequisites for global social stability.",
      "The role of German precision engineering in reducing system losses across intercontinental grids.",
    ],
    transcriptExcerpt: [
      "Distinguished delegates, colleagues, and friends:",
      "It is an honor to address the Energy Intelligence Forum at a moment in history that calls for unyielding clarity and intellectual honesty.",
      "For over a century, TAKNISER has built the valves, turbines, pipelines, and power corridors that heat homes, propel vessels, and power factories across 190 countries.",
      "Today, our collective duty is not to retreat from industrial reality, but to elevate it. We must build bridges of engineering excellence between today's baseload imperatives and tomorrow's low-carbon horizon.",
    ],
  },
  {
    id: "speech-2",
    speaker: "Sophia Al-Mansoor",
    role: "Chief Technology & Innovation Officer",
    event: "LEAP International Deep-Tech Summit 2026",
    location: "Riyadh, Saudi Arabia",
    date: "August 31, 2026",
    title: "Autonomous Intelligence at Industrial Scale: The Leap into Industry 5.0",
    image: "/takniser_workstation_desk.jpg",
    quote:
      "When AI moves from digital software screens to physical multi-ton machinery, the tolerance for error is zero. This is where classical German engineering discipline gives artificial intelligence its highest purpose.",
    keyTakeaways: [
      "Industrial AI models trained on physics-based finite element analysis rather than heuristic guesses.",
      "Deployment of 15,000 connected autonomous mobile robots across TAKNISER logistics hubs.",
      "Fostering regional STEM talent across the Middle East and Central Europe.",
    ],
    transcriptExcerpt: [
      "Good morning, innovators and visionaries:",
      "We often hear that software is eating the world. But software cannot pour steel, inspect deep subsea pipelines, or harvest wheat in arid soils.",
      "The true technological frontier of this decade is cyber-physical synergy: embedding autonomous intelligence directly into durable, heavy-duty industrial machinery.",
    ],
  },
  {
    id: "speech-3",
    speaker: "Henrik Lindqvist",
    role: "Head of Global Trade, Logistics & Value Chains",
    event: "World Economic Forum Industrial Roundtable",
    location: "Davos, Switzerland",
    date: "January 22, 2026",
    title: "Global Value Chains in an Era of Multipolar Industrial Growth",
    image: "/about_industrial_heritage.jpg",
    quote:
      "Supply chain resilience is not achieved through isolation, but through redundant, trusted corridors built on shared standards, verifiable ESG metrics, and transparent trade architecture.",
    keyTakeaways: [
      "Diversifying strategic raw material origins across South America, Australia, and Africa.",
      "Standardizing digital bills of lading across 30 regional corporate headquarters.",
      "Long-term infrastructure commitments versus short-term market volatility.",
    ],
    transcriptExcerpt: [
      "Ladies and gentlemen:",
      "The modern industrial world depends on hundreds of thousands of unseen linkages. From a specialized copper cathode in Chile to a micro-bearing machined in Hesse, every component matters.",
    ],
  },
  {
    id: "speech-4",
    speaker: "Dr. Markus Weidmann",
    role: "VP of Materials Science & Metallurgy",
    event: "Middle East Materials & Corrosion Congress",
    location: "Manama, Bahrain",
    date: "November 18, 2025",
    title: "Corrosion Prevention & Advanced Metallurgy for Carbon-Neutral Infrastructure",
    image: "/about_workshop_craft.jpg",
    quote:
      "Every year, unmitigated material corrosion consumes nearly 3% of global GDP. Developing nano-structured ceramic alloys is our frontline defense against premature industrial asset failure.",
    keyTakeaways: [
      "New ceramic-metallic coatings engineered for extreme hydrogen and supercritical CO2 service.",
      "Extending offshore wind turbine sub-structure operational lifespans from 25 to 50 years.",
      "Field validation across high-salinity coastal environments.",
    ],
    transcriptExcerpt: [
      "Esteemed colleagues and materials engineers:",
      "Materials science is the foundational substrate of all human progress. Without reliable alloys capable of withstanding extreme pressures and corrosive chemicals, no energy transition can succeed.",
    ],
  },
];

const EDITORIAL_STORIES: EditorialStory[] = [
  {
    id: "story-1",
    tag: "DEEP-TECH ROBOTICS",
    title: "Deepwater & Shallow-Water Autonomous Inspection: How SWIM-R Robotics Cut Diver Hazards by 80%",
    subtitle: "Inside TAKNISER's marine robotics center where engineers build robots capable of surviving high-pressure depths.",
    author: "Elena Vance, Senior Technology Editor",
    date: "September 2026",
    readTime: "7 min read",
    image: "/mission_smart_factory.jpg",
    summary:
      "Subsea inspection has historically been among the most dangerous occupations in industrial engineering. Discover how TAKNISER's autonomous amphibious crawlers navigate hazardous currents, detect sub-millimeter pipeline fissures, and transmit real-time telemetry back to shore stations.",
  },
  {
    id: "story-2",
    tag: "ENERGY HORIZONS",
    title: "Safaniyah to North Sea: Modernizing Offshore Energy Infrastructure with Hybrid Power Systems",
    subtitle: "A comprehensive look at how giant offshore installations are cutting their operational footprint.",
    author: "Tariq Al-Ghamdi, Energy Infrastructure Lead",
    date: "August 2026",
    readTime: "6 min read",
    image: "/value_chain_hero_port.jpg",
    summary:
      "By installing high-efficiency gas-capture microturbines and floating solar arrays directly on offshore platforms, TAKNISER EPC engineers have reduced flaring by 94% across joint venture marine assets in the Arabian Gulf and North Sea.",
  },
  {
    id: "story-3",
    tag: "BIODIVERSITY & ESG",
    title: "Industrial Sanctuaries: Creating Living Spaces Where Nature Thrives Beside High-Tech Campuses",
    subtitle: "TAKNISER's biodiversity protection zones prove heavy industry and thriving ecosystems can co-exist.",
    author: "Dr. Clara Schilling, Head of Environmental Stewardship",
    date: "July 2026",
    readTime: "5 min read",
    image: "/sustainable_earth_slide.jpg",
    summary:
      "Spanning over 120 square kilometers surrounding our manufacturing plants in Germany and Saudi Arabia, designated biodiversity sanctuaries protect native flora, migratory water birds, and endangered pollinators with strict zero-discharge policies.",
  },
  {
    id: "story-4",
    tag: "SPACE ECONOMY",
    title: "The Orbit Supply Line: Space-Grade Alloys and High-Vacuum Ceramics Made in Hesse",
    subtitle: "How century-old metallurgy precision is powering next-generation commercial satellite constellations.",
    author: "Maximilian Roth, Aerospace Materials Specialist",
    date: "June 2026",
    readTime: "8 min read",
    image: "/platform_space.jpg",
    summary:
      "Space exploration requires materials capable of withstanding 500-degree thermal swings in microgravity. Explore how TAKNISER Hesse Metallurgy Labs engineer beryllium-free titanium aluminides that now orbit the Earth aboard telecommunications arrays.",
  },
];

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "TAKNISER Global Corporate Headquarters Campus",
    category: "Campus",
    categoryLabel: "Campuses & HQ",
    image: "/clean_corporate_hq.jpg",
    resolution: "4K UHD",
    dimensions: "3840 × 2160",
    caption:
      "The architectural headquarters of TAKNISER GmbH in Hessen, Germany, housing central executive operations, strategy war-rooms, and the Global Innovation Council.",
    location: "Frankfurt am Main / Hesse, Germany",
    license: "Editorial Press Rights • Free for Accredited Media",
  },
  {
    id: "gal-2",
    title: "Autonomous Inspection Robotics Laboratory",
    category: "Robotics",
    categoryLabel: "Robotics & AI",
    image: "/clean_robotics.jpg",
    resolution: "High-Res Raw",
    dimensions: "4000 × 2667",
    caption:
      "Precision calibration of an autonomous crawler unit designed for hazardous chemical vessel inspection and ultrasonic non-destructive testing.",
    location: "Darmstadt Robotics Campus, Germany",
    license: "Editorial Press Rights • Free for Accredited Media",
  },
  {
    id: "gal-3",
    title: "Cryogenic Q-Flex Clean LNG Carrier at Sea",
    category: "Energy",
    categoryLabel: "Energy & Marine",
    image: "/cat_energy_qflex_lng.jpg",
    resolution: "4K UHD",
    dimensions: "3840 × 2160",
    caption:
      "A state-of-the-art LNG carrier equipped with low-boil-off insulation systems operating along key international energy corridors.",
    location: "Transoceanic Trade Corridors",
    license: "Editorial Press Rights • Free for Accredited Media",
  },
  {
    id: "gal-4",
    title: "Centennial German Engineering Archive & Craftsmanship",
    category: "Campus",
    categoryLabel: "Heritage & Craft",
    image: "/about_hesse_heritage.jpg",
    resolution: "Archival HD",
    dimensions: "3600 × 2400",
    caption:
      "Historic workshop records and precision measurement instruments tracing TAKNISER's foundation in early 20th-century German industrial manufacturing.",
    location: "Corporate Archives, Hesse, Germany",
    license: "Historical Press Archive • TAKNISER GmbH",
  },
  {
    id: "gal-5",
    title: "Smart Intermodal Port Terminal & Deepwater Quay",
    category: "Plants",
    categoryLabel: "Industrial Plants",
    image: "/about_logistics_port.jpg",
    resolution: "4K UHD",
    dimensions: "3840 × 2160",
    caption:
      "Overhead view of container handling cranes and automated straddle carriers coordinating maritime freight shipments.",
    location: "Rotterdam Global Logistics Hub",
    license: "Editorial Press Rights • Free for Accredited Media",
  },
  {
    id: "gal-6",
    title: "Advanced Copper Cathode Smelting & Refining Hall",
    category: "Plants",
    categoryLabel: "Industrial Plants",
    image: "/cat_minerals_copper.jpg",
    resolution: "4K UHD",
    dimensions: "3840 × 2160",
    caption:
      "Electrolytic refining cells generating 99.99% high-purity electrical copper required for high-voltage renewable transmission grids.",
    location: "Critical Minerals Processing Hub, Central Europe",
    license: "Editorial Press Rights • Free for Accredited Media",
  },
  {
    id: "gal-7",
    title: "High-Efficiency Autonomous Agricultural Equipment",
    category: "Robotics",
    categoryLabel: "Robotics & AI",
    image: "/cat_agtech_food.jpg",
    resolution: "High-Res Raw",
    dimensions: "3840 × 2400",
    caption:
      "GPS-guided automated combines harvesting high-yield drought-tolerant grains under TAKNISER AgTech's Food Security Initiative.",
    location: "Continental Farmland Corridor",
    license: "Editorial Press Rights • Free for Accredited Media",
  },
  {
    id: "gal-8",
    title: "Automated High-Bay Storage & Retrieval (ASRS) Hub",
    category: "Plants",
    categoryLabel: "Industrial Plants",
    image: "/cat_robotics_warehouse_asrs.jpg",
    resolution: "4K UHD",
    dimensions: "3840 × 2160",
    caption:
      "Fully dark-warehouse ASRS system operating 24/7 with laser-guided cranes managing over 80,000 pallet positions.",
    location: "Logistics Fulfillment Center, Germany",
    license: "Editorial Press Rights • Free for Accredited Media",
  },
  {
    id: "gal-9",
    title: "Global Operations & Real-Time Logistics Control Center",
    category: "Campus",
    categoryLabel: "Campuses & HQ",
    image: "/vision_global_network.jpg",
    resolution: "4K UHD",
    dimensions: "3840 × 2160",
    caption:
      "24/7 mission control monitors global maritime routes, pipeline flow rates, and factory automation across 190+ countries in real time.",
    location: "Frankfurt Global Operations Command",
    license: "Editorial Press Rights • Free for Accredited Media",
  },
  {
    id: "gal-10",
    title: "Battery-Grade Lithium Chemical Processing Works",
    category: "Plants",
    categoryLabel: "Industrial Plants",
    image: "/cat_minerals_lithium.jpg",
    resolution: "4K UHD",
    dimensions: "3840 × 2160",
    caption:
      "Crystallization and chemical filtration units producing ultra-pure lithium hydroxide monohydrate for electric vehicle batteries.",
    location: "Chemical Metallurgy Plant, Germany",
    license: "Editorial Press Rights • Free for Accredited Media",
  },
  {
    id: "gal-11",
    title: "TAKNISER International Executive Leadership Team",
    category: "Campus",
    categoryLabel: "Campuses & HQ",
    image: "/takniser_global_team.jpg",
    resolution: "Executive Portrait",
    dimensions: "3840 × 2560",
    caption:
      "Global division heads and regional managing directors assembled for the annual TAKNISER One Globe Strategic Council.",
    location: "Wiesbaden Executive Pavilion",
    license: "Editorial Press Rights • Free for Accredited Media",
  },
  {
    id: "gal-12",
    title: "Green Hydrogen Terminal & Cryogenic Bunkering Facility",
    category: "Energy",
    categoryLabel: "Energy & Marine",
    image: "/green_trade_port.jpg",
    resolution: "4K UHD",
    dimensions: "3840 × 2160",
    caption:
      "Specialized quayside bunkering arm transferring zero-carbon ammonia and liquefied synthetic methane to transatlantic cargo ships.",
    location: "North Sea Green Port Corridor",
    license: "Editorial Press Rights • Free for Accredited Media",
  },
  {
    id: "gal-13",
    title: "Integrated Industrial Value Chain Manufacturing Floor",
    category: "Plants",
    categoryLabel: "Industrial Plants",
    image: "/hero_value_chain.jpg",
    resolution: "4K UHD",
    dimensions: "3840 × 2160",
    caption:
      "Precision heavy-machinery assembly line in Hessen combining heavy robotic weld cells with German master craftsmanship inspection.",
    location: "Industrial Manufacturing Plant, Hesse",
    license: "Editorial Press Rights • Free for Accredited Media",
  },
  {
    id: "gal-14",
    title: "Precision Agronomy & Smart Irrigation Testing Field",
    category: "Plants",
    categoryLabel: "Industrial Plants",
    image: "/platform_agtech.jpg",
    resolution: "High-Res",
    dimensions: "3840 × 2400",
    caption:
      "Subsurface micro-drip irrigation test site utilizing solar-powered moisture sensors and closed-loop algorithmic nutrient dosing.",
    location: "AgTech Experimental Farm, Southern Europe",
    license: "Editorial Press Rights • Free for Accredited Media",
  },
  {
    id: "gal-15",
    title: "Autonomous Mobile Robot (AMR) Fleet in Distribution Hub",
    category: "Robotics",
    categoryLabel: "Robotics & AI",
    image: "/cat_robotics_amr.jpg",
    resolution: "4K UHD",
    dimensions: "3840 × 2160",
    caption:
      "Coordinated swarm of autonomous pallet movers navigating dynamically around workers in a high-density international sorting center.",
    location: "Automated Logistics Hub, Benelux",
    license: "Editorial Press Rights • Free for Accredited Media",
  },
  {
    id: "gal-16",
    title: "Mid-Century Heavy Precision Engineering Heritage",
    category: "Campus",
    categoryLabel: "Heritage & Craft",
    image: "/about_midcentury_factory.jpg",
    resolution: "Archival HD",
    dimensions: "3600 × 2400",
    caption:
      "Historic mid-twentieth century manufacturing floor where TAKNISER's founding heavy gearboxes and high-pressure steam valves were cast and milled.",
    location: "Historical Archive, Germany",
    license: "Historical Press Archive • TAKNISER GmbH",
  },
];

const PUBLICATIONS: Publication[] = [
  {
    id: "pub-1",
    title: "TAKNISER Integrated Annual Report 2025/2026",
    subtitle: "Financial transparency, ESG metrics, operational milestones, and strategic roadmap across 190+ countries.",
    date: "August 2026",
    pages: 184,
    fileSize: "14.8 MB PDF",
    image: "/vision_globe_opportunity.jpg",
    type: "ANNUAL REPORT",
  },
  {
    id: "pub-2",
    title: "Vision 2046: Centennial Strategic Blueprint",
    subtitle: "A 20-year roadmap detailing capital deployment across Deep-Tech, Space Economy, and Global Industrial Value Chains.",
    date: "January 2026",
    pages: 112,
    fileSize: "9.4 MB PDF",
    image: "/vision_pillar_1.jpg",
    type: "STRATEGIC ROADMAP",
  },
  {
    id: "pub-3",
    title: "Sustainability & Net-Zero Transition Report 2026",
    subtitle: "Audited Scope 1, 2, and 3 emissions progress, biodiversity protection areas, and circular materials milestones.",
    date: "July 2026",
    pages: 96,
    fileSize: "7.9 MB PDF",
    image: "/impact_nature_clean.jpg",
    type: "ESG REPORT",
  },
  {
    id: "pub-4",
    title: "Industrial Robotics & Autonomous AI Whitepaper",
    subtitle: "Technical specifications, safety certifications, and performance data on the SWIM-R subsea and AMR platform series.",
    date: "September 2026",
    pages: 64,
    fileSize: "6.2 MB PDF",
    image: "/chain_card_1_engineering.jpg",
    type: "TECHNICAL WHITEPAPER",
  },
];

/* =========================================================================
   MAIN COMPONENT
   ========================================================================= */

export default function NewsMediaContent() {
  const { currentLanguage, t } = useLanguage();
  const isDe = currentLanguage === "de";
  const isAr = currentLanguage === "ar";

  // News Filtering & Search State
  const [newsFilter, setNewsFilter] = useState<string>("All");
  const [newsSearch, setNewsSearch] = useState<string>("");

  // Gallery Tab & Lightbox State
  const [galleryFilter, setGalleryFilter] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Modal States
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedSpeech, setSelectedSpeech] = useState<SpeechItem | null>(null);

  // Filtered News
  const filteredNews = useMemo(() => {
    return NEWS_ARTICLES.filter((item) => {
      const matchesCategory = newsFilter === "All" || item.category === newsFilter;
      const matchesSearch =
        newsSearch.trim() === "" ||
        item.title.toLowerCase().includes(newsSearch.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(newsSearch.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(newsSearch.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [newsFilter, newsSearch]);

  // Filtered Gallery
  const filteredGallery = useMemo(() => {
    if (galleryFilter === "All") return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((photo) => photo.category === galleryFilter);
  }, [galleryFilter]);

  // Handle Keyboard for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredGallery.length : null
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredGallery.length) % filteredGallery.length : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredGallery.length]);

  return (
    <div className={`min-h-screen bg-[#f4f5f6] text-[#002d3b] pt-24 lg:pt-28 ${isAr ? "rtl" : "ltr"}`}>
      {/* =========================================================================
          SECTION 1: HERO HEADER (Modeled after other pages' hero layout)
          ========================================================================= */}
      <section className="relative py-20 lg:py-24 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        {/* Crisp Media Center Background Image — Exactly like other pages */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/news_hero_clean_bg.jpg"
            alt="TAKNISER Media Center & Press Briefing Stage"
            fill
            priority
            quality={95}
            className="object-cover object-center opacity-85 filter contrast-105 brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/75 via-[#001822]/50 to-[#001822]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-5">
            {/* Breadcrumb / Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#00cccc] text-[11px] font-mono font-bold tracking-widest uppercase bg-[#001822]/85 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 bg-[#00cccc] inline-block" />
              <span>{isDe ? "PRESSE- UND MEDIENZENTRUM" : isAr ? "مركز الأخبار والإعلام الرسمي" : "MEDIA & COMMUNICATIONS HUB"}</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">TAKNISER ONE GLOBE</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.08] drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              {isDe ? "Presse & Medien" : isAr ? "الأخبار والإعلام" : "News & Media"}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-100 font-normal leading-relaxed max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {isDe
                ? "Entdecken Sie unsere neuesten Unternehmensmeldungen, Pressemitteilungen, Executive-Reden, hochauflösende Medien- und Bildergalerien sowie strategische Publikationen aus über 190 Ländern."
                : isAr
                ? "اكتشف أحدث أخبارنا، وبياناتنا الصحفية الرسمية، وكلمات القيادة التنفيذية، ومعرض الصور عالي الدقة، وإصداراتنا الاستراتيجية عبر أكثر من 190 دولة."
                : "Discover our latest stories, explore official press releases, executive keynotes, high-resolution multimedia photo archives, and corporate publications shaping global industry across 190+ countries."}
            </p>

            {/* Quick Links / Pill Navigation */}
            <div className="pt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider">
              <a
                href="#featured"
                className="px-3.5 py-1.5 bg-[#001822] hover:bg-[#36b39c] hover:text-white border border-slate-700/80 text-slate-300 transition-colors"
              >
                {isDe ? "Top-Meldung" : isAr ? "الخبر البارز" : "Top Story"}
              </a>
              <a
                href="#news-releases"
                className="px-3.5 py-1.5 bg-[#001822] hover:bg-[#36b39c] hover:text-white border border-slate-700/80 text-slate-300 transition-colors"
              >
                {isDe ? "Pressemitteilungen" : isAr ? "البيانات الصحفية" : "Press Releases"}
              </a>
              <a
                href="#speeches"
                className="px-3.5 py-1.5 bg-[#001822] hover:bg-[#36b39c] hover:text-white border border-slate-700/80 text-slate-300 transition-colors"
              >
                {isDe ? "Executive-Reden" : isAr ? "الكلمات والخطب" : "Executive Speeches"}
              </a>
              <a
                href="#editorial"
                className="px-3.5 py-1.5 bg-[#001822] hover:bg-[#36b39c] hover:text-white border border-slate-700/80 text-slate-300 transition-colors"
              >
                {isDe ? "HORIZONS Magazin" : isAr ? "مجلة الآفاق" : "Editorial Stories"}
              </a>
              <a
                href="#gallery"
                className="px-3.5 py-1.5 bg-[#36b39c] text-white font-bold hover:bg-[#2d9683] transition-colors flex items-center gap-1.5"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>{isDe ? "Bildergalerie (16+ Fotos)" : isAr ? "معرض الصور (16+ صورة)" : "Media Gallery (16+ Photos)"}</span>
              </a>
              <a
                href="#publications"
                className="px-3.5 py-1.5 bg-[#001822] hover:bg-[#36b39c] hover:text-white border border-slate-700/80 text-slate-300 transition-colors"
              >
                {isDe ? "Publikationen" : isAr ? "التقارير والإصدارات" : "Publications"}
              </a>
              <a
                href="#media-contacts"
                className="px-3.5 py-1.5 bg-[#001822] hover:bg-[#36b39c] hover:text-white border border-slate-700/80 text-slate-300 transition-colors"
              >
                {isDe ? "Pressekontakt" : isAr ? "التواصل الصحفي" : "Media Contacts"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FEATURED HERO CENTERPIECE (Massive Editorial Banner)
          ========================================================================= */}
      <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all hover:border-[#36b39c]/60">
          {/* Hero Image with high impact */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[380px] overflow-hidden group">
            <Image
              src={FEATURED_HERO_NEWS.image}
              alt={FEATURED_HERO_NEWS.imageAlt}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
            <div className="absolute top-4 left-4 bg-[#001822]/90 backdrop-blur-sm text-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider border-l-2 border-[#36b39c]">
              {isDe ? "Top-Meldung" : isAr ? "الخبر البارز" : "BREAKING STORY"}
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs lg:hidden">
              <span className="font-semibold text-[#36b39c]">{FEATURED_HERO_NEWS.categoryLabel}</span>
              <span className="mx-2">•</span>
              <span>{FEATURED_HERO_NEWS.date}</span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <span className="text-[#009999] font-bold">{FEATURED_HERO_NEWS.categoryLabel}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {FEATURED_HERO_NEWS.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {FEATURED_HERO_NEWS.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#002d3b] leading-tight hover:text-[#009999] transition-colors">
                <button
                  type="button"
                  onClick={() => setSelectedNews(FEATURED_HERO_NEWS)}
                  className="text-left cursor-pointer hover:underline"
                >
                  {FEATURED_HERO_NEWS.title}
                </button>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {FEATURED_HERO_NEWS.excerpt}
              </p>

              <div className="text-xs text-slate-500 pt-1">
                <span className="font-semibold text-slate-700">{isDe ? "Standort:" : isAr ? "الموقع:" : "Dateline:"} </span>
                {FEATURED_HERO_NEWS.location}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedNews(FEATURED_HERO_NEWS)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#002d3b] hover:bg-[#009999] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>{isDe ? "Vollständigen Bericht lesen" : isAr ? "قراءة البيان الكامل" : "Read Full Release"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <FileText className="w-4 h-4 text-[#009999]" />
                <span>PDF ({FEATURED_HERO_NEWS.pdfSize})</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: LATEST NEWS & PRESS RELEASES (Filterable Grid with rich imagery)
          ========================================================================= */}
      <section id="news-releases" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold text-[#009999] uppercase tracking-widest mb-1">
              {isDe ? "AKTUELLE ANKÜNDIGUNGEN" : isAr ? "أحدث البيانات الصحفية" : "OFFICIAL RELEASES"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002d3b]">
              {isDe ? "Neueste Pressemitteilungen & Meldungen" : isAr ? "أحدث الأخبار والبيانات الصحفية" : "Latest Press Releases & News"}
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              {isDe
                ? "Erhalten Sie Einblick in strategische Joint Ventures, technologische Durchbrüche und Quartalsergebnisse unserer weltweiten Divisionen."
                : isAr
                ? "استكشف الشراكات الاستراتيجية والابتكارات التكنولوجية والنتائج المالية عبر مختلف قطاعات تاكنيسر حول العالم."
                : "Explore our announcements spanning strategic joint ventures, technological breakthroughs, EPC contracts, and financial earnings."}
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder={isDe ? "Presse durchsuchen..." : isAr ? "البحث في الأخبار..." : "Search news releases..."}
              value={newsSearch}
              onChange={(e) => setNewsSearch(e.target.value)}
              className="w-full bg-white border border-slate-300 text-xs px-3 py-2.5 pl-9 text-slate-800 focus:outline-none focus:border-[#009999] font-medium"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            {newsSearch && (
              <button
                type="button"
                onClick={() => setNewsSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pt-6 pb-8">
          {[
            { id: "All", label: isDe ? "Alle Nachrichten" : isAr ? "جميع الأخبار" : "All News" },
            { id: "Strategic", label: isDe ? "Strategische Allianzen" : isAr ? "شراكات استراتيجية" : "Strategic Alliances" },
            { id: "Robotics", label: isDe ? "Robotik & KI" : isAr ? "الروبوتات والذكاء الاصطناعي" : "Robotics & AI" },
            { id: "Energy", label: isDe ? "Energie & Infrastruktur" : isAr ? "الطاقة والبنية التحتية" : "Energy & Infrastructure" },
            { id: "Corporate", label: isDe ? "Konzern & Logistik" : isAr ? "اللوجستيات والشركات" : "Corporate & Logistics" },
            { id: "Financial", label: isDe ? "Finanzergebnisse" : isAr ? "النتائج المالية" : "Financial Results" },
            { id: "Sustainability", label: isDe ? "Nachhaltigkeit & Erde" : isAr ? "الاستدامة والبيئة" : "Sustainability & ESG" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setNewsFilter(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                newsFilter === cat.id
                  ? "bg-[#002d3b] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#009999] hover:text-[#009999]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* News Grid (with rich photography on every card) */}
        {filteredNews.length === 0 ? (
          <div className="bg-white border border-slate-200 p-12 text-center text-slate-500">
            <Search className="w-8 h-8 text-slate-300 mx-auto mb-3" />
            <p className="font-semibold text-sm">No press releases found matching your search.</p>
            <button
              type="button"
              onClick={() => {
                setNewsFilter("All");
                setNewsSearch("");
              }}
              className="mt-3 text-xs text-[#009999] font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredNews.map((news) => (
              <article
                key={news.id}
                className="bg-white border border-slate-200 flex flex-col justify-between group hover:border-[#009999] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Image Thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={news.image}
                      alt={news.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#001822]/85 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider backdrop-blur-xs">
                      {news.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400">
                      <Calendar className="w-3 h-3 text-[#009999]" />
                      <span>{news.date}</span>
                      <span>•</span>
                      <span>{news.readTime}</span>
                    </div>

                    <h3 className="text-base font-serif font-bold text-[#002d3b] leading-snug group-hover:text-[#009999] transition-colors line-clamp-3">
                      <button
                        type="button"
                        onClick={() => setSelectedNews(news)}
                        className="text-left cursor-pointer hover:underline"
                      >
                        {news.title}
                      </button>
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {news.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-3 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedNews(news)}
                    className="text-[#009999] font-bold inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                  >
                    <span>{isDe ? "Details" : isAr ? "التفاصيل" : "Read Story"}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10.5px] text-slate-400">PDF ({news.pdfSize})</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* =========================================================================
          SECTION 4: EXECUTIVE SPEECHES & KEYNOTES (Modeled after Aramco Speeches)
          ========================================================================= */}
      <section id="speeches" className="bg-[#001822] text-white py-16 lg:py-24 border-y border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800">
            <div>
              <div className="text-xs font-bold text-[#36b39c] uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <Volume2 className="w-4 h-4" />
                <span>{isDe ? "FÜHRUNG & PERSPEKTIVEN" : isAr ? "كلمات الإدارة التنفيذية" : "EXECUTIVE LEADERSHIP & SPEECHES"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                {isDe ? "Reden & Leitbeiträge der Konzernführung" : isAr ? "كلمات ومحاضرات القيادة التنفيذية" : "Speeches & Executive Keynotes"}
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl">
                {isDe
                  ? "Wichtige Reden, Grundsatzvorträge und Branchenbeiträge unserer Vorstandsmitglieder auf führenden internationalen Wirtschaftsforen."
                  : isAr
                  ? "مجموعة من الكلمات والخطب الرئيسية التي ألقاها كبار مسؤولي تاكنيسر في كبرى المؤتمرات الاقتصادية والصناعية العالمية."
                  : "Catch up on key speeches, international summit addresses, and policy perspectives delivered by TAKNISER executive leadership."}
              </p>
            </div>
            <div className="text-xs text-slate-400">
              <span className="font-semibold text-white">4 Published Transcripts</span> • Updated Q3 2026
            </div>
          </div>

          {/* Speeches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {EXECUTIVE_SPEECHES.map((speech) => (
              <div
                key={speech.id}
                className="bg-[#000e1a] border border-slate-800 hover:border-[#36b39c] transition-all flex flex-col justify-between group p-5 shadow-lg"
              >
                <div className="space-y-4">
                  {/* Speaker photo / conference context */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900 border border-slate-800">
                    <Image
                      src={speech.image}
                      alt={speech.speaker}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 bg-black/80 text-[#36b39c] text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                      SPEECH
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-black via-black/80 to-transparent p-2">
                      <div className="text-xs font-bold text-white truncate">{speech.speaker}</div>
                      <div className="text-[10px] text-slate-300 truncate">{speech.role}</div>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center justify-between">
                    <span className="text-[#36b39c] font-semibold">{speech.date}</span>
                    <span>{speech.location}</span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-white group-hover:text-[#36b39c] transition-colors leading-snug line-clamp-2">
                    {speech.title}
                  </h3>

                  <div className="p-3 bg-[#001822] border-l-2 border-[#36b39c] text-xs text-slate-300 italic line-clamp-3">
                    &ldquo;{speech.quote}&rdquo;
                  </div>

                  <div className="text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-300">Venue: </span>
                    {speech.event}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => setSelectedSpeech(speech)}
                    className="w-full flex items-center justify-center gap-2 py-2 text-xs font-bold uppercase tracking-wider text-[#36b39c] bg-[#001822] hover:bg-[#36b39c] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{isDe ? "Vollständige Rede lesen" : isAr ? "قراءة نص الكلمة" : "Read Transcript"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: EDITORIAL STORIES & HORIZONS MAGAZINE (Modeled after Aramco Elements)
          ========================================================================= */}
      <section id="editorial" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold text-[#009999] uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>{isDe ? "MAGAZIN & TIEFENRECHERCHEN" : isAr ? "مجلة الآفاق والقصص التحريرية" : "EDITORIAL FEATURES & INSIGHTS"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002d3b]">
              {isDe ? "HORIZONS Magazin: Geschichten der Innovation" : isAr ? "مجلة هورايزونز: قصص الابتكار والاستدامة" : "HORIZONS: Stories of Innovation"}
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              {isDe
                ? "Detaillierte Fachbeiträge über industrielle Robotik, die Raumfahrtwirtschaft, marine Dekarbonisierung und Biodiversitätsreservate."
                : isAr
                ? "مقالات تحريرية موسعة تستكشف أحدث التقنيات في مجال الروبوتات البحرية واقتصاد الفضاء والمحميات البيئية الصناعية."
                : "Deep dives into subsea robotics, the space economy, offshore decarbonization, and industrial biodiversity sanctuaries."}
            </p>
          </div>
          <div className="text-xs text-[#009999] font-bold uppercase tracking-wider flex items-center gap-1">
            <span>Issue 24 • Autumn 2026</span>
          </div>
        </div>

        {/* Editorial Stories Grid (Rich wide photography) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          {EDITORIAL_STORIES.map((story) => (
            <article
              key={story.id}
              className="bg-white border border-slate-200 overflow-hidden group hover:border-[#009999] transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#001822]/90 text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider border-l-2 border-[#009999]">
                    {story.tag}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span>{story.date}</span>
                    <span>•</span>
                    <span>{story.readTime}</span>
                    <span>•</span>
                    <span className="text-[#009999] font-semibold">{story.author}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#002d3b] group-hover:text-[#009999] transition-colors leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {story.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-[#009999] uppercase tracking-wider group-hover:underline">
                  {isDe ? "Ganzen Artikel lesen" : isAr ? "قراءة المقال كاملاً" : "Read In-Depth Feature"} →
                </span>
                <span className="text-xs text-slate-400">TAKNISER HORIZONS Magazine</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: MASSIVE INTERACTIVE HIGH-RES MEDIA GALLERY (16+ Images!)
          User explicitly requested: "images jyada se jyada add karna"
          ========================================================================= */}
      <section id="gallery" className="bg-[#000e1a] text-white py-16 lg:py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="text-xs font-bold text-[#36b39c] uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <Camera className="w-4 h-4" />
                <span>{isDe ? "OFFIZIELLE BILDER- UND MEDIENGALERIE" : isAr ? "معرض الصور والوسائط الرسمي" : "OFFICIAL MEDIA & IMAGE ARCHIVE"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                {isDe ? "Interaktive Mediengalerie" : isAr ? "معرض الوسائط التفاعلي" : "Interactive Media Gallery"}
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl">
                {isDe
                  ? "Offizielle hochauflösende Pressefotografien für akkreditierte Journalisten und Medien. Klicken Sie auf ein beliebiges Bild, um es in voller 4K-Auflösung zu betrachten und herunterzuladen."
                  : isAr
                  ? "أرشيف الصور الرسمي عالي الدقة المتاح للإعلام والصحفيين. انقر على أي صورة لمعاينتها بدقة 4K وتنزيل الأصول الرقمية."
                  : "High-resolution press photography available for editorial publication. Click any photo to inspect in full 4K UHD lightbox and download high-resolution assets."}
              </p>
            </div>

            {/* Gallery Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "All", label: isDe ? "Alle Fotos (16)" : isAr ? "جميع الصور (16)" : "All Photos (16)" },
                { id: "Plants", label: isDe ? "Industrieanlagen" : isAr ? "المصانع والموانئ" : "Plants & Infrastructure" },
                { id: "Robotics", label: isDe ? "Robotik & KI" : isAr ? "الروبوتات" : "Robotics & AI" },
                { id: "Energy", label: isDe ? "Energie & Marine" : isAr ? "الطاقة والملاحة" : "Energy & Marine" },
                { id: "Campus", label: isDe ? "Campusse & HQ" : isAr ? "المقرات والقيادة" : "Campuses & Leaders" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setGalleryFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    galleryFilter === tab.id
                      ? "bg-[#36b39c] text-white"
                      : "bg-[#001822] text-slate-400 border border-slate-700 hover:text-white hover:border-slate-500"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid (Rich 16 images) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {filteredGallery.map((photo, idx) => (
              <div
                key={photo.id}
                className="bg-[#001822] border border-slate-800 hover:border-[#36b39c] transition-all duration-300 group overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container with overlay */}
                  <div
                    className="relative h-56 w-full overflow-hidden bg-slate-900 cursor-pointer"
                    onClick={() => setLightboxIndex(idx)}
                  >
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-black/80 text-[#36b39c] text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                      {photo.categoryLabel}
                    </div>
                  </div>

                  {/* Caption & Metadata */}
                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-bold text-white group-hover:text-[#36b39c] transition-colors leading-snug line-clamp-1">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {photo.caption}
                    </p>
                    <div className="text-[10.5px] text-slate-500 pt-1">
                      <span>{photo.location}</span>
                    </div>
                  </div>
                </div>

                {/* Download Action Row */}
                <div className="p-4 pt-0 border-t border-slate-800/80 flex items-center justify-end text-xs mt-2">
                  <a
                    href={photo.image}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-[#36b39c] text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-[#36b39c]" />
                    <span>{isDe ? "Bild herunterladen" : isAr ? "تنزيل الصورة" : "Download image"}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: PUBLICATIONS & REPORTS ARCHIVE (Modeled after Aramco Publications)
          ========================================================================= */}
      <section id="publications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold text-[#009999] uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <span>{isDe ? "UNTERNEHMENSBERICHTE & ARCHIV" : isAr ? "التقارير والإصدارات الرسمية" : "CORPORATE PUBLICATIONS & ARCHIVE"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#002d3b]">
              {isDe ? "Offizielle Publikationen & Finanzberichte" : isAr ? "التقارير السنوية والبيانات المالية" : "Official Publications & Reports"}
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              {isDe
                ? "Laden Sie unsere geprüften Geschäftsberichte, die Vision 2046 Roadmap und Technologie-Whitepapers herunter."
                : isAr
                ? "قم بتنزيل التقارير المالية المتكاملة، ومخطط رؤية 2046، والأوراق البيضاء التكنولوجية الصادرة عن مجموعة تاكنيسر."
                : "Download official audited integrated annual reports, the Vision 2046 Centennial Blueprint, and technology whitepapers."}
            </p>
          </div>
          <div className="text-xs text-slate-500">
            {isDe ? "Alle Dateien im barrierefreien PDF-Format" : isAr ? "جميع الملفات بتنسيق PDF عالي الجودة" : "High-Resolution Verified PDF Formats"}
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.id}
              className="bg-white border border-slate-200 hover:border-[#009999] transition-all duration-300 p-5 flex flex-col justify-between group shadow-sm"
            >
              <div className="space-y-4">
                {/* Book Cover Mockup */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100 shadow-inner border border-slate-200">
                  <Image
                    src={pub.image}
                    alt={pub.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-2 left-2 bg-[#001822] text-[#36b39c] text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider">
                    {pub.type}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[10px] text-[#36b39c] font-semibold uppercase">{pub.date}</div>
                    <div className="text-xs font-bold leading-tight line-clamp-2">{pub.title}</div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-[#002d3b] group-hover:text-[#009999] transition-colors leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {pub.subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <span>{pub.pages} {isDe ? "Seiten" : isAr ? "صفحة" : "Pages"}</span>
                  <span className="font-semibold text-slate-700">{pub.fileSize}</span>
                </div>
              </div>

              <div className="pt-4 mt-4">
                <a
                  href={pub.image}
                  download
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-[#002d3b] hover:bg-[#009999] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isDe ? "PDF Herunterladen" : isAr ? "تنزيل التقرير" : "Download PDF"}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: MEDIA CONTACTS, RSS FEEDS & BRAND ASSET KIT
          (Modeled after Aramco Media Contact Information & RSS Feed)
          ========================================================================= */}
      <section id="media-contacts" className="bg-[#001822] text-white py-16 lg:py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Press Office Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#36b39c] uppercase tracking-widest">
                  {isDe ? "JOURNALISTEN & MEDIENANFRAGEN" : isAr ? "استفسارات الصحافة والإعلام" : "PRESS OFFICE & INQUIRIES"}
                </div>
                <h2 className="text-3xl font-serif font-bold text-white">
                  {isDe ? "Medienkontakt & Akkreditierung" : isAr ? "معلومات التواصل الإعلامي" : "Media Contact Information"}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {isDe
                    ? "Alle Presse- und Medienanfragen werden von unserer zentralen Medienabteilung in Frankfurt am Main koordiniert. Akkreditierte Journalisten erhalten zeitnahe Rückmeldung."
                    : isAr
                    ? "تتولى إدارة الاتصال المؤسسي والتنسيق الإعلامي في تاكنيسر التعامل مع جميع استفسارات الصحفيين ووسائل الإعلام العالمية."
                    : "All media and journalist inquiries are handled directly by the TAKNISER Global Corporate Communications & Media Relations Department."}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-4 bg-[#000e1a] border border-slate-800">
                  <Mail className="w-5 h-5 text-[#36b39c] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {isDe ? "Pressekontakt E-Mail" : isAr ? "البريد الإلكتروني للصحافة" : "Press Inquiries"}
                    </div>
                    <a
                      href="mailto:press@takniser.com"
                      className="text-sm font-semibold text-white hover:text-[#36b39c] transition-colors"
                    >
                      press@takniser.com
                    </a>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Response window: within 2 hours for accredited newsrooms.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#000e1a] border border-slate-800">
                  <Phone className="w-5 h-5 text-[#36b39c] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {isDe ? "Presse-Hotline" : isAr ? "هاتف المركز الصحفي" : "Global Press Hotline"}
                    </div>
                    <a
                      href="tel:+496998765430"
                      className="text-sm font-semibold text-white hover:text-[#36b39c] transition-colors"
                    >
                      +49 (0) 69 9876 5430
                    </a>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Monday – Friday, 07:00 – 19:00 CET
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#000e1a] border border-slate-800">
                  <Building2 className="w-5 h-5 text-[#36b39c] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {isDe ? "Globales Pressebüro" : isAr ? "المكتب الصحفي الرئيسي" : "Central Media Bureau"}
                    </div>
                    <div className="text-sm text-slate-200">
                      TAKNISER GmbH Media Center, Frankfurt am Main, Germany
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Download Kit & Assets */}
            <div className="lg:col-span-7">
              {/* Brand Assets / Media Kit */}
              <div className="p-6 sm:p-8 bg-[#000e1a] border border-slate-800 space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#36b39c] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>{isDe ? "PRESSEPAKET & MARKENRESSOURCEN" : isAr ? "حزمة الأصول وهوية العلامة" : "PRESS KIT & BRAND ASSETS"}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {isDe ? "Offizielles Marken- & Pressepaket herunterladen" : isAr ? "تنزيل المواد الصحفية وشعار الشركة" : "Download Official Media Kit & Assets"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {isDe
                    ? "Vektorgrafiken des TAKNISER-Logos in hoher Auflösung, Fotos der Geschäftsführung, B-Roll-Videomaterial und das Corporate Factsheet 2026."
                    : isAr
                    ? "قم بتنزيل شعارات تاكنيسر عالية الدقة (SVG / PNG)، وصور القيادة التنفيذية، ولقطات B-Roll للأفلام الوثائقية والتقارير التلفزيونية."
                    : "Access official vector logos (SVG/PNG), high-resolution executive portrait packs, verified company factsheets, and broadcast-ready B-Roll video reels."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <a
                    href="/LOGO.png"
                    download
                    className="p-3.5 bg-[#001822] border border-slate-700/80 hover:border-[#36b39c] transition-colors flex items-center justify-between text-xs group"
                  >
                    <div>
                      <div className="font-bold text-white group-hover:text-[#36b39c] transition-colors">Brand Logo Package</div>
                      <div className="text-[10.5px] text-slate-400">SVG, EPS & PNG High-Res</div>
                    </div>
                    <Download className="w-4 h-4 text-[#36b39c]" />
                  </a>

                  <a
                    href="/takniser_careers_hero.jpg"
                    download
                    className="p-3.5 bg-[#001822] border border-slate-700/80 hover:border-[#36b39c] transition-colors flex items-center justify-between text-xs group"
                  >
                    <div>
                      <div className="font-bold text-white group-hover:text-[#36b39c] transition-colors">Corporate Factsheet 2026</div>
                      <div className="text-[10.5px] text-slate-400">PDF • 16 Pages (3.4 MB)</div>
                    </div>
                    <Download className="w-4 h-4 text-[#36b39c]" />
                  </a>

                  <a
                    href="/takniser_global_team.jpg"
                    download
                    className="p-3.5 bg-[#001822] border border-slate-700/80 hover:border-[#36b39c] transition-colors flex items-center justify-between text-xs group"
                  >
                    <div>
                      <div className="font-bold text-white group-hover:text-[#36b39c] transition-colors">Executive Photo Pack</div>
                      <div className="text-[10.5px] text-slate-400">Leadership High-Res (5.8 MB)</div>
                    </div>
                    <Download className="w-4 h-4 text-[#36b39c]" />
                  </a>

                  <a
                    href="/officeimage2.png"
                    download
                    className="p-3.5 bg-[#001822] border border-slate-700/80 hover:border-[#36b39c] transition-colors flex items-center justify-between text-xs group"
                  >
                    <div>
                      <div className="font-bold text-white group-hover:text-[#36b39c] transition-colors">HQ Campus Press Assets</div>
                      <div className="text-[10.5px] text-slate-400">4K UHD Photography (7.2 MB)</div>
                    </div>
                    <Download className="w-4 h-4 text-[#36b39c]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CROSS-NAV BANNER (To Careers & Global Presence)
          ========================================================================= */}
      <section className="bg-white border-t border-slate-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#002d3b] text-white p-8 sm:p-12 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-bold text-[#00cccc] uppercase tracking-widest">
                {isDe ? "WERDEN SIE TEIL UNSERES TEAMS" : isAr ? "انضم إلى فريق العمل العالمي" : "BUILD YOUR CAREER WITH US"}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {isDe
                  ? "Gestalten Sie mit uns die Zukunft der weltweiten Industrie"
                  : isAr
                  ? "ابنِ مسيرتك المهنية عبر قطاعات الصناعة والتكنولوجيا العالمية"
                  : "Join German Engineering Excellence Worldwide"}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {isDe
                  ? "Entdecken Sie Karrieremöglichkeiten in den Bereichen Robotik, Deep-Tech, globale Lieferketten und Raumfahrtökonomie."
                  : isAr
                  ? "استكشف الفرص الوظيفية المتاحة في مختلف التخصصات الهندسية والإدارية والتقنية وقدم سيرتك الذاتية."
                  : "Explore open opportunities in advanced manufacturing, subsea robotics, global supply chain management, and sustainable energy."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-4 shrink-0">
              <Link
                href="/careers"
                className="px-7 py-3.5 bg-[#00cccc] hover:bg-[#009999] text-[#001822] font-bold text-xs uppercase tracking-wider text-center transition-colors shadow-lg"
              >
                {isDe ? "Zu den Karrierechancen" : isAr ? "استكشف بوابة التوظيف" : "Explore Careers Portal"} →
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-[#001822] hover:bg-[#000e1a] text-white border border-slate-700 font-bold text-xs uppercase tracking-wider text-center transition-colors"
              >
                {isDe ? "Kontakt aufnehmen" : isAr ? "تواصل معنا" : "Contact Corporate"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LIGHTBOX MODAL FOR HIGH-RES IMAGES
          ========================================================================= */}
      {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between backdrop-blur-md animate-fade-in p-4 sm:p-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#36b39c]">
                {lightboxIndex + 1} / {filteredGallery.length}
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                {filteredGallery[lightboxIndex].categoryLabel}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={filteredGallery[lightboxIndex].image}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-300 hover:text-white flex items-center gap-1 font-semibold"
              >
                <Download className="w-4 h-4 text-[#36b39c]" />
                <span className="hidden sm:inline">Download Asset</span>
              </a>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Central Image & Navigation */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <button
              type="button"
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length
                )
              }
              className="absolute left-2 sm:left-4 z-10 p-3 bg-black/60 hover:bg-[#36b39c] text-white transition-colors cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full max-w-6xl max-h-[75vh]">
              <Image
                src={filteredGallery[lightboxIndex].image}
                alt={filteredGallery[lightboxIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={() =>
                setLightboxIndex((lightboxIndex + 1) % filteredGallery.length)
              }
              className="absolute right-2 sm:right-4 z-10 p-3 bg-black/60 hover:bg-[#36b39c] text-white transition-colors cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption & Meta */}
          <div className="max-w-4xl mx-auto w-full text-white border-t border-slate-800 pt-3 space-y-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h4 className="text-base font-bold text-white">
                {filteredGallery[lightboxIndex].title}
              </h4>
              <div className="text-xs font-mono text-[#36b39c]">
                {filteredGallery[lightboxIndex].dimensions} • {filteredGallery[lightboxIndex].resolution}
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {filteredGallery[lightboxIndex].caption}
            </p>
            <div className="text-[11px] text-slate-500 flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1">
              <span>Location: {filteredGallery[lightboxIndex].location}</span>
              <span>•</span>
              <span>{filteredGallery[lightboxIndex].license}</span>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PRESS RELEASE READER MODAL
          ========================================================================= */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6 backdrop-blur-xs">
          <div className="bg-white text-[#002d3b] max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-300 shadow-2xl relative p-6 sm:p-10 space-y-6">
            <button
              type="button"
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 p-2 text-slate-500 hover:text-black cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 border-b border-slate-200 pb-4">
              <div className="text-xs font-bold text-[#009999] uppercase tracking-wider">
                {selectedNews.categoryLabel}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#002d3b] leading-tight">
                {selectedNews.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
                <span>{selectedNews.date}</span>
                <span>•</span>
                <span>{selectedNews.location}</span>
                <span>•</span>
                <span>{selectedNews.readTime}</span>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
              <Image
                src={selectedNews.image}
                alt={selectedNews.imageAlt}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p className="font-semibold text-slate-900 text-base">
                {selectedNews.excerpt}
              </p>
              {selectedNews.fullBody.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="font-bold text-slate-900 uppercase">Media Relations Inquiries</div>
              <div>Direct: +49 (0) 69 9876 5430 | press@takniser.com</div>
              <div>Frankfurt am Main, Germany</div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setSelectedNews(null)}
                className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold uppercase cursor-pointer"
              >
                Close
              </button>

              <a
                href={selectedNews.image}
                download
                className="px-5 py-2 bg-[#002d3b] hover:bg-[#009999] text-white text-xs font-bold uppercase inline-flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Statement (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SPEECH TRANSCRIPT READER MODAL
          ========================================================================= */}
      {selectedSpeech && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6 backdrop-blur-xs">
          <div className="bg-[#001822] text-white max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl relative p-6 sm:p-10 space-y-6">
            <button
              type="button"
              onClick={() => setSelectedSpeech(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 border-b border-slate-800 pb-4">
              <div className="text-xs font-bold text-[#36b39c] uppercase tracking-wider">
                EXECUTIVE KEYNOTE TRANSCRIPT
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                {selectedSpeech.title}
              </h3>
              <div className="text-sm font-semibold text-[#36b39c]">
                {selectedSpeech.speaker} — {selectedSpeech.role}
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
                <span>{selectedSpeech.event}</span>
                <span>•</span>
                <span>{selectedSpeech.location}</span>
                <span>•</span>
                <span>{selectedSpeech.date}</span>
              </div>
            </div>

            <div className="p-4 bg-[#000e1a] border-l-4 border-[#36b39c] text-sm text-slate-200 italic">
              &ldquo;{selectedSpeech.quote}&rdquo;
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Strategic Takeaways
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                {selectedSpeech.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx}>{takeaway}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Official Excerpts
              </div>
              {selectedSpeech.transcriptExcerpt.map((par, pIdx) => (
                <p key={pIdx}>{par}</p>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setSelectedSpeech(null)}
                className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase cursor-pointer"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => alert("Speech audio/transcript download initiated.")}
                className="px-5 py-2 bg-[#36b39c] hover:bg-[#2d9683] text-white text-xs font-bold uppercase inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Transcript (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
