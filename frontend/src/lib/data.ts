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
  city?: string;
  coverage?: string;
  flag?: string;
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
  regionalHqs: "30",
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
    title: "Space Economy",
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
    title: "Mining & Minerals",
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
    title: "AgTech",
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
    title: "LifeCare",
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
    title: "Lifestyle",
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
    title: "Robotics",
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
    title: "Global Trading",
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
  { title: "International Logistics", description: "Multi-modal sea, air, and overland freight powered by global strategic hubs.", icon: "Ship" },
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
  // ─── GLOBAL HEADQUARTERS ───
  {
    region: "Europe",
    country: "Germany",
    city: "Dillenburg",
    coverage: "Global Headquarters",
    flag: "🌐",
    type: "HQ",
    title: "TAKNISER GmbH (GHQ)",
    coordinates: { x: 49.5, y: 26.5 },
    description: "Global Headquarters & Central Engineering Center (Dillenburg, Germany)"
  },

  // ─── EUROPE (10 RHQs) ───
  {
    region: "Europe",
    country: "Sweden",
    city: "Stockholm",
    coverage: "Scandinavia",
    flag: "🇸🇪",
    type: "RHQ",
    title: "TAKNISER AB",
    coordinates: { x: 52.8, y: 19.5 },
    description: "Scandinavia Regional Headquarters (Stockholm, Sweden)"
  },
  {
    region: "Europe",
    country: "Estonia",
    city: "Tallinn",
    coverage: "Baltic States",
    flag: "🇪🇪",
    type: "RHQ",
    title: "TAKNISER MEYER BALTIQUE OÜ",
    coordinates: { x: 55.5, y: 20.8 },
    description: "Baltic States Regional Headquarters (Tallinn, Estonia)"
  },
  {
    region: "Europe",
    country: "Germany",
    city: "Dillenburg",
    coverage: "Central Europe",
    flag: "🇩🇪",
    type: "RHQ",
    title: "TAKNISER GmbH",
    coordinates: { x: 50.5, y: 27.8 },
    description: "Central Europe Regional Headquarters (Dillenburg, Germany)"
  },
  {
    region: "Europe",
    country: "France",
    city: "Paris",
    coverage: "Francophone Europe",
    flag: "🇫🇷",
    type: "RHQ",
    title: "TAKNISER BERNARD LAURENT SARL",
    coordinates: { x: 47.5, y: 28.5 },
    description: "Francophone Europe Regional Headquarters (Paris, France)"
  },
  {
    region: "Europe",
    country: "Netherlands",
    city: "Rotterdam",
    coverage: "Benelux & European Logistics",
    flag: "🇳🇱",
    type: "RHQ",
    title: "TAKNISER VRIES BENELUX B.V.",
    coordinates: { x: 48.6, y: 25.5 },
    description: "Benelux & European Logistics Center (Rotterdam, Netherlands)"
  },
  {
    region: "Europe",
    country: "Italy",
    city: "Milan",
    coverage: "Southern Europe",
    flag: "🇮🇹",
    type: "RHQ",
    title: "TAKNISER VENETO INDUSTRIALE S.R.L.",
    coordinates: { x: 50.0, y: 31.8 },
    description: "Southern Europe Regional Headquarters (Milan, Italy)"
  },
  {
    region: "Europe",
    country: "Spain",
    city: "Madrid",
    coverage: "Iberia",
    flag: "🇪🇸",
    type: "RHQ",
    title: "TAKNISER VELASCO IBERIA S.L.",
    coordinates: { x: 45.2, y: 33.5 },
    description: "Iberia Regional Headquarters (Madrid, Spain)"
  },
  {
    region: "Europe",
    country: "Greece",
    city: "Athens",
    coverage: "Balkans",
    flag: "🇬🇷",
    type: "RHQ",
    title: "TAKNISER FREDRIKSON HELLAS I.K.E.",
    coordinates: { x: 54.8, y: 35.8 },
    description: "Balkans Regional Headquarters (Athens, Greece)"
  },
  {
    region: "Europe",
    country: "Finland",
    city: "Helsinki",
    coverage: "Finland & Central Asia",
    flag: "🇫🇮",
    type: "RHQ",
    title: "TAKNISER ANTTONEN OY",
    coordinates: { x: 56.5, y: 17.5 },
    description: "Finland & Central Asia Regional Headquarters (Helsinki, Finland)"
  },
  {
    region: "Europe",
    country: "UK",
    city: "London",
    coverage: "UK & Ireland",
    flag: "🇬🇧",
    type: "RHQ",
    title: "TAKNISER ROTHS UK LIMITED",
    coordinates: { x: 46.2, y: 25.0 },
    description: "UK & Ireland Regional Headquarters (London, UK)"
  },

  // ─── NORTH AMERICA ───
  {
    region: "North America",
    country: "United States",
    city: "Texas",
    coverage: "USA & Canada",
    flag: "🇺🇸",
    type: "RHQ",
    title: "TAKNISER STERLING AMERICANA LLC",
    coordinates: { x: 21.5, y: 36.5 },
    description: "North American Regional HQ & Strategic Procurement Division (Texas, USA)"
  },

  // ─── LATIN AMERICA ───
  {
    region: "Latin America",
    country: "Mexico",
    city: "Mexico City",
    coverage: "Mexico",
    flag: "🇲🇽",
    type: "RHQ",
    title: "TAKNISER LEMANN MEXICANA S. DE R.L. DE C.V.",
    coordinates: { x: 20.0, y: 48.0 },
    description: "Manufacturing & North-South Logistics Coordination (Mexico City, Mexico)"
  },
  {
    region: "Latin America",
    country: "Panama",
    city: "Panama City",
    coverage: "Central America & Caribbean",
    flag: "🇵🇦",
    type: "RHQ",
    title: "TAKNISER ORTEGA PANAMÁ S.A.",
    coordinates: { x: 26.8, y: 55.0 },
    description: "Maritime Trade & Canal Logistics Center (Panama City, Panama)"
  },
  {
    region: "Latin America",
    country: "Chile",
    city: "Santiago",
    coverage: "Andean Region",
    flag: "🇨🇱",
    type: "RHQ",
    title: "TAKNISER PINO ANDINA SpA",
    coordinates: { x: 29.5, y: 78.0 },
    description: "Mining & Critical Minerals Sourcing Hub (Santiago, Chile)"
  },
  {
    region: "Latin America",
    country: "Brazil",
    city: "São Paulo",
    coverage: "South America",
    flag: "🇧🇷",
    type: "RHQ",
    title: "TAKNISER SANTOS AMAZONIA LTDA.",
    coordinates: { x: 35.5, y: 71.0 },
    description: "AgTech & Industrial Sourcing Headquarters (São Paulo, Brazil)"
  },

  // ─── AFRICA ───
  {
    region: "Africa",
    country: "Ghana",
    city: "Accra",
    coverage: "West Africa",
    flag: "🇬🇭",
    type: "RHQ",
    title: "TAKNISER PINAULT AOF LIMITED",
    coordinates: { x: 47.0, y: 56.5 },
    description: "Infrastructure & Mineral Trade Office (Accra, Ghana)"
  },
  {
    region: "Africa",
    country: "Kenya",
    city: "Nairobi",
    coverage: "East & Central Africa",
    flag: "🇰🇪",
    type: "RHQ",
    title: "TAKNISER MENARD KENYA LIMITED",
    coordinates: { x: 58.5, y: 60.0 },
    description: "Energy & Agricultural Technology Division (Nairobi, Kenya)"
  },
  {
    region: "Africa",
    country: "South Africa",
    city: "Johannesburg",
    coverage: "Southern Africa",
    flag: "🇿🇦",
    type: "RHQ",
    title: "TAKNISER RATCLIFF SAVANNA (PTY) LTD",
    coordinates: { x: 54.5, y: 79.0 },
    description: "Industrial Equipment & Mining Supply Hub (Johannesburg, South Africa)"
  },

  // ─── MIDDLE EAST ───
  {
    region: "Middle East",
    country: "UAE",
    city: "Dubai",
    coverage: "Gulf & Middle East",
    flag: "🇦🇪",
    type: "RHQ",
    title: "TAKNISER GmbH TRADING LLC",
    coordinates: { x: 63.0, y: 42.5 },
    description: "Gulf & Middle East Regional Headquarters (Dubai, UAE)"
  },
  {
    region: "Middle East",
    country: "Saudi Arabia",
    city: "Dammam",
    coverage: "Saudi Arabia & Levant",
    flag: "🇸🇦",
    type: "RHQ",
    title: "TAKNISER HOFFMANN ARABIA LLC",
    coordinates: { x: 60.5, y: 41.5 },
    description: "Infrastructure, EPC & Energy Trade Headquarters (Dammam, Saudi Arabia)"
  },
  {
    region: "Middle East",
    country: "UAE",
    city: "JAFZA, Dubai",
    coverage: "Global Distribution & Logistics",
    flag: "🇦🇪",
    type: "LOGISTICS_HUB",
    title: "TAKNISER SARL FZCO",
    coordinates: { x: 64.0, y: 44.5 },
    description: "Primary Global Distribution & Free Zone Logistics Center (JAFZA, Dubai, UAE)"
  },

  // ─── ASIA ───
  {
    region: "Asia",
    country: "India",
    city: "Ahmedabad",
    coverage: "South Asia",
    flag: "🇮🇳",
    type: "RHQ",
    title: "TAKNISER AB INDIA PRIVATE LIMITED",
    coordinates: { x: 71.5, y: 46.0 },
    description: "Engineering Center & Industrial Sourcing Office (Ahmedabad, India)"
  },
  {
    region: "Asia",
    country: "Singapore",
    city: "Singapore",
    coverage: "ASEAN",
    flag: "🇸🇬",
    type: "RHQ",
    title: "TAKNISER MERLION SINGAPORE PTE. LTD.",
    coordinates: { x: 80.0, y: 59.0 },
    description: "Financial & International Global Trading Center (Singapore)"
  },
  {
    region: "Asia",
    country: "China",
    city: "Guangzhou",
    coverage: "China",
    flag: "🇨🇳",
    type: "RHQ",
    title: "TAKNISER SHULIANG CHINA CO., LTD.",
    coordinates: { x: 82.0, y: 41.5 },
    description: "Manufacturing & Supply Chain Coordination (Guangzhou, China)"
  },
  {
    region: "Asia",
    country: "Hong Kong",
    city: "Hong Kong SAR",
    coverage: "North Asia & Global Sourcing",
    flag: "🇭🇰",
    type: "RHQ",
    title: "TAKNISER SHĀNSHĀN HK LIMITED",
    coordinates: { x: 83.5, y: 43.5 },
    description: "Trade Finance & Asia Logistics Office (Hong Kong SAR)"
  },
  {
    region: "Asia",
    country: "Japan",
    city: "Tokyo",
    coverage: "Japan",
    flag: "🇯🇵",
    type: "RHQ",
    title: "TAKNISER TAKEMITSU JAPAN K.K.",
    coordinates: { x: 90.0, y: 35.0 },
    description: "Robotics & High-Tech Components Division (Tokyo, Japan)"
  },
  {
    region: "Asia",
    country: "Türkiye",
    city: "Istanbul",
    coverage: "Türkiye & Caucasus",
    flag: "🇹🇷",
    type: "RHQ",
    title: "TAKNISER SAHENK TURK A.Ş.",
    coordinates: { x: 56.5, y: 34.0 },
    description: "Eurasian Cross-Border Trade & Logistics Center (Istanbul, Türkiye)"
  },

  // ─── OCEANIA ───
  {
    region: "Oceania",
    country: "Australia",
    city: "Melbourne",
    coverage: "Oceania",
    flag: "🇦🇺",
    type: "RHQ",
    title: "TAKNISER PALLMER PACIFIC PTY LTD",
    coordinates: { x: 88.5, y: 80.0 },
    description: "Mining & Heavy Equipment Operations Hub (Melbourne, Australia)"
  }
];
