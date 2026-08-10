export interface BusinessDivisionData {
  id: string;
  code: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  categories: string[];
  heroImage?: string;
}

export interface CapabilityData {
  title: string;
  description: string;
  icon: string;
}

export interface IndustryData {
  title: string;
  description: string;
  icon: string;
}

export interface GlobalLocationData {
  region: string;
  country: string;
  type: string;
  title: string;
  coordinates: { x: number; y: number }; // Percentage relative coordinates for responsive SVG map
  description: string;
}

export const CORPORATE_INFO = {
  name: "TAKNISER ONE GLOBE",
  legalName: "TAKNISER GmbH",
  tagline: "100+ Years of German Engineering Heritage. Building the Future of Global Industry.",
  foundingState: "Hesse (Hessen), Germany",
  heritageYears: "100+",
  visionTargetYear: "2046",
  countriesServed: "190+",
  regionalHqs: "29",
  globalHq: "TAKNISER GmbH (Germany)",
  values: [
    { german: "Präzision", english: "Precision", desc: "Meticulous accuracy and disciplined engineering across all operational processes." },
    { german: "Qualität", english: "Quality", desc: "Adherence to 'Qualität vor Quantität' (Quality before Quantity) in every solution." },
    { german: "Zuverlässigkeit", english: "Reliability", desc: "Uninterrupted performance for mission-critical industrial infrastructure worldwide." },
    { german: "Ingenieurskunst", english: "Engineering Excellence", desc: "Deep technical expertise cultivated through a century of German industrial heritage." },
    { german: "Handwerkskunst", english: "Craftsmanship", desc: "Master-level execution and uncompromising standards in manufacturing and design." },
    { german: "Discipline", english: "Discipline", desc: "Rigorous execution standards across global operations and strategic supply chains." },
    { german: "Innovation", english: "Innovation", desc: "Future-ready technologies powering Industry 4.0, space economy, and smart systems." },
    { german: "Vertrauen", english: "Trust", desc: "Long-term transparent partnerships built over decades of reliable service." },
  ],
  vision2046: "To build TAKNISER into one of the world's most respected industrial, technology, manufacturing, sourcing, distribution, and global trading conglomerates by delivering innovative, sustainable, and reliable solutions across every major continent while connecting businesses, industries, and communities through one integrated global network.",
  missionPillars: [
    "Deliver world-class products and technologies.",
    "Build sustainable global supply chains.",
    "Create long-term value for customers and partners.",
    "Promote innovation across every business division.",
    "Support governments and industries through reliable infrastructure solutions.",
    "Develop future-ready technologies for the next generation.",
    "Expand TAKNISER's presence across every major international market.",
  ]
};

export const BUSINESS_DIVISIONS: BusinessDivisionData[] = [
  {
    id: "div-01",
    code: "01",
    slug: "space-economy",
    title: "TAKNISER Space Economy",
    tagline: "Driving the future beyond Earth through advanced space technologies and global aerospace partnerships.",
    description: "Specialized engineering, satellite components, launch support systems, and orbital electronics empowering next-generation space exploration and communication networks.",
    icon: "Rocket",
    categories: [
      "Satellite Components",
      "Space Communications",
      "Earth Observation",
      "Space Electronics",
      "Launch Support Technologies"
    ]
  },
  {
    id: "div-02",
    code: "02",
    slug: "mining-minerals",
    title: "TAKNISER Mining & Minerals",
    tagline: "Supporting the world's industrial growth through responsible mining, processing, sourcing, and global trading of strategic minerals.",
    description: "Global strategic sourcing and critical mineral supply chains supplying essential metals and rare earth elements for green transition, electronics, and global heavy industry.",
    icon: "Pickaxe",
    categories: [
      "Copper",
      "Lithium",
      "Nickel",
      "Rare Earth Elements",
      "Aluminum",
      "Graphite",
      "Critical Mineral Trading",
      "Coal"
    ]
  },
  {
    id: "div-03",
    code: "03",
    slug: "agtech",
    title: "TAKNISER AgTech",
    tagline: "Building sustainable agriculture through modern farming technologies, food processing, and global Agri supply chains.",
    description: "Advanced precision irrigation, high-yield seeds, eco-friendly fertilizers, and automated food processing equipment ensuring global food security.",
    icon: "Sprout",
    categories: [
      "Irrigation Systems",
      "Fertilizers",
      "Seeds",
      "Agricultural Machinery",
      "Food Processing"
    ]
  },
  {
    id: "div-04",
    code: "04",
    slug: "lifecare",
    title: "TAKNISER LifeCare",
    tagline: "Delivering innovative healthcare technologies that improve lives worldwide.",
    description: "Precision medical diagnostic systems, hospital infrastructure equipment, biotechnology integration, and high-purity pharmaceutical sourcing.",
    icon: "HeartPulse",
    categories: [
      "Medical Devices",
      "Hospital Equipment",
      "Pharmaceuticals",
      "Biotechnology",
      "Diagnostics Equipment"
    ]
  },
  {
    id: "div-05",
    code: "05",
    slug: "lifestyle",
    title: "TAKNISER Lifestyle",
    tagline: "Enhancing everyday living through quality consumer products and smart lifestyle solutions.",
    description: "High-grade consumer appliances, smart home automation hubs, wellness technology, and engineered textiles for premium global markets.",
    icon: "Home",
    categories: [
      "Consumer Appliances",
      "Smart Home",
      "Personal Care",
      "Wellness",
      "Fabric"
    ]
  },
  {
    id: "div-06",
    code: "06",
    slug: "robotics",
    title: "TAKNISER Robotics",
    tagline: "Accelerating Industry 4.0 with intelligent automation and AI-driven industrial solutions.",
    description: "State-of-the-art industrial arm robots, Autonomous Mobile Robots (AMRs), smart warehouse automation, and factory-wide cyber-physical integration.",
    icon: "Bot",
    categories: [
      "Industrial Robots",
      "Warehouse Automation",
      "AI Robotics",
      "AMRs (Autonomous Mobile Robots)",
      "Factory Automation"
    ]
  },
  {
    id: "div-07",
    code: "07",
    slug: "global-trading",
    title: "TAKNISER Global Trading",
    tagline: "Connecting manufacturers, industries, governments, and global markets through an integrated international trading ecosystem.",
    description: "Cross-border multi-commodity supply chains, energy trading, defence & aerospace procurement, and strategic industrial component distribution.",
    icon: "Globe",
    categories: [
      "Energy",
      "Electrical",
      "Electronics",
      "Defence & Aerospace",
      "Agri Trade",
      "Metal"
    ]
  }
];

export const CAPABILITIES: CapabilityData[] = [
  { title: "Engineering & Technical Consulting", description: "Centennial German engineering expertise providing feasibility, system architecture, and optimization.", icon: "Compass" },
  { title: "Industrial Manufacturing", description: "Precision OEM manufacturing adhering to stringent European quality and tolerance metrics.", icon: "Factory" },
  { title: "Global Strategic Sourcing", description: "Direct access to strategic raw materials, critical minerals, and specialized industrial components.", icon: "Search" },
  { title: "International Procurement", description: "End-to-end multi-currency procurement for institutional, utility, and government contracts.", icon: "ShoppingCart" },
  { title: "EPC Support & Project Supply", description: "Turnkey equipment supply and engineering support for mega Engineering, Procurement & Construction projects.", icon: "HardHat" },
  { title: "Global Supply Chain Management", description: "Resilient supply chain mapping, risk mitigation, and real-time inventory tracking.", icon: "Network" },
  { title: "International Logistics", description: "Multi-modal sea, air, and overland freight powered by global strategic hubs including JAFZA.", icon: "Ship" },
  { title: "Distribution & Channel Development", description: "Global partner onboarding and international distribution network expansion.", icon: "Share2" },
  { title: "Industrial Technology Solutions", description: "Custom Industry 4.0 integration, sensor networks, and SCADA infrastructure.", icon: "Cpu" },
  { title: "Digital Transformation", description: "Cloud integration, digital twin modeling, and enterprise industrial IoT software.", icon: "Zap" },
  { title: "Infrastructure Development", description: "Power generation, smart grid, power distribution, and transport infrastructure projects.", icon: "Landmark" },
  { title: "Lifecycle Technical & After-Sales Services", description: "Long-term maintenance, spare part management, retrofitting, and technical overhaul.", icon: "Wrench" }
];

export const INDUSTRIES: IndustryData[] = [
  { title: "Electrical Infrastructure", description: "Substations, high-voltage transformers, grid distribution, and power quality.", icon: "Zap" },
  { title: "Energy", description: "Conventional power systems, renewable integration, hydrogen, and storage.", icon: "Flame" },
  { title: "Automation", description: "Programmable logic controllers, industrial sensors, and SCADA systems.", icon: "Settings" },
  { title: "Industrial Machinery", description: "Heavy tooling, CNC systems, hydraulic power units, and diesel generators.", icon: "Cog" },
  { title: "Engineered Products", description: "Precision valves, custom metallurgy, high-pressure fittings, and bearings.", icon: "Shield" },
  { title: "Electronics", description: "Semiconductors, printed circuit board assemblies, and microelectronics.", icon: "Cpu" },
  { title: "Construction Materials", description: "Structural steel, specialized glass, coating solutions, and composite materials.", icon: "Building" },
  { title: "Transportation", description: "Rail transport components, marine diesel systems, and aerospace assemblies.", icon: "Truck" },
  { title: "Smart Technologies", description: "IoT gateways, smart meters, predictive maintenance sensors, and cloud hubs.", icon: "Wifi" },
  { title: "Industrial Components", description: "Fasteners, seals, specialized motors, drives, and power transmission.", icon: "Box" },
  { title: "Consumer Products", description: "Smart home appliances, wellness hardware, and high-spec consumer goods.", icon: "ShoppingBag" },
  { title: "Integrated Supply Chain Solutions", description: "Cross-docking, warehousing automation, and global trade compliance.", icon: "Package" }
];

export const GLOBAL_NETWORK_LOCATIONS: GlobalLocationData[] = [
  { region: "Europe", country: "Germany", type: "HQ", title: "Global HQ – TAKNISER GmbH", coordinates: { x: 50, y: 28 }, description: "Global Headquarters & Central Engineering Center (Hesse, Germany)" },
  { region: "Europe", country: "Germany", type: "RHQ", title: "European RHQ Network (10 RHQs)", coordinates: { x: 48, y: 30 }, description: "10 Strategic Regional Headquarters covering Western & Eastern Europe" },
  { region: "North America", country: "United States", type: "RHQ", title: "TAKNISER Sterling Americana LLC", coordinates: { x: 22, y: 32 }, description: "North American Regional HQ & Strategic Procurement Division" },
  { region: "Latin America", country: "Mexico", type: "RHQ", title: "TAKNISER Latin America – Mexico Hub", coordinates: { x: 20, y: 48 }, description: "Manufacturing & North-South Logistics Coordination" },
  { region: "Latin America", country: "Panama", type: "RHQ", title: "TAKNISER Panama Regional Office", coordinates: { x: 27, y: 55 }, description: "Maritime Trade & Canal Logistics Center" },
  { region: "Latin America", country: "Chile", type: "RHQ", title: "TAKNISER Chile Mineral Operations", coordinates: { x: 30, y: 78 }, description: "Mining & Critical Minerals Sourcing Hub" },
  { region: "Latin America", country: "Brazil", type: "RHQ", title: "TAKNISER Brazil Operations", coordinates: { x: 36, y: 68 }, description: "AgTech & Industrial Sourcing Headquarters" },
  { region: "Africa", country: "Ghana", type: "RHQ", title: "TAKNISER West Africa Hub", coordinates: { x: 47, y: 58 }, description: "Infrastructure & Mineral Trade Office" },
  { region: "Africa", country: "Kenya", type: "RHQ", title: "TAKNISER East Africa Hub", coordinates: { x: 58, y: 60 }, description: "Energy & Agricultural Technology Division" },
  { region: "Africa", country: "South Africa", type: "RHQ", title: "TAKNISER Southern Africa RHQ", coordinates: { x: 54, y: 79 }, description: "Industrial Equipment & Mining Supply Hub" },
  { region: "Middle East", country: "UAE", type: "LOGISTICS_HUB", title: "JAFZA Logistics Hub & Middle East RHQ", coordinates: { x: 62, y: 44 }, description: "Primary Global Distribution & Free Zone Logistics Center" },
  { region: "Middle East", country: "Saudi Arabia", type: "RHQ", title: "TAKNISER Saudi Arabia Operations", coordinates: { x: 60, y: 42 }, description: "Infrastructure, EPC & Energy Trade Headquarters" },
  { region: "Asia", country: "India", type: "RHQ", title: "TAKNISER South Asia RHQ", coordinates: { x: 72, y: 46 }, description: "Engineering Center & Industrial Sourcing Office" },
  { region: "Asia", country: "Singapore", type: "RHQ", title: "TAKNISER Southeast Asia RHQ", coordinates: { x: 80, y: 59 }, description: "Financial & International Global Trading Center" },
  { region: "Asia", country: "China", type: "RHQ", title: "TAKNISER Greater China Hub", coordinates: { x: 82, y: 38 }, description: "Manufacturing & Supply Chain Coordination" },
  { region: "Asia", country: "Hong Kong", type: "RHQ", title: "TAKNISER Hong Kong Trading", coordinates: { x: 83, y: 43 }, description: "Trade Finance & Asia Logistics Office" },
  { region: "Asia", country: "Japan", type: "RHQ", title: "TAKNISER Japan Robotics Office", coordinates: { x: 90, y: 35 }, description: "Robotics & High-Tech Components Division" },
  { region: "Asia", country: "Türkiye", type: "RHQ", title: "TAKNISER Eurasia Bridge Hub", coordinates: { x: 56, y: 35 }, description: "Eurasian Cross-Border Trade & Logistics Center" },
  { region: "Oceania", country: "Australia", type: "RHQ", title: "TAKNISER Oceania RHQ", coordinates: { x: 88, y: 75 }, description: "Mining & Heavy Equipment Operations Hub" },
];
