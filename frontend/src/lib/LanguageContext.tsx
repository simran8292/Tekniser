"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type LanguageCode = "de" | "en" | "ar" | "zh" | "pl" | "ja" | "ko";

export type RegionId = string;

export interface LanguageOption {
  code: LanguageCode;
  name: string;
}

export interface RegionOption {
  id: RegionId;
  name: string;
  country: string;
  city?: string;
  entityName: string;
  continent: "Europe" | "Middle East" | "Africa" | "North America" | "Latin America" | "Asia" | "Oceania" | "Global";
  flag: string;
  coverage?: string;
  type: "HQ" | "RHQ" | "LOGISTICS HUB" | "GLOBAL";
  languages: LanguageOption[];
}

export const REGIONS: RegionOption[] = [
  // ─── GLOBAL ───
  {
    id: "global",
    name: "TAKNISER 1Globe",
    country: "Worldwide Network",
    city: "Global Portal",
    entityName: "TAKNISER ONE GLOBE",
    continent: "Global",
    flag: "🌐",
    coverage: "190+ Countries",
    type: "GLOBAL",
    languages: [
      { code: "de", name: "Deutsch" },
      { code: "en", name: "English" },
      { code: "ar", name: "العربية" },
    ],
  },

  // ─── EUROPE (10 RHQs + GHQ) ───
  {
    id: "germany-ghq",
    name: "TAKNISER Group HQ",
    country: "Germany",
    city: "Dillenburg",
    entityName: "TAKNISER GmbH",
    continent: "Europe",
    flag: "🌐",
    coverage: "Global Group HQ",
    type: "HQ",
    languages: [
      { code: "de", name: "Deutsch" },
      { code: "en", name: "English" },
    ],
  },
  {
    id: "germany",
    name: "TAKNISER Central Europe",
    country: "Germany",
    city: "Dillenburg",
    entityName: "TAKNISER GmbH",
    continent: "Europe",
    flag: "🇩🇪",
    coverage: "Central Europe",
    type: "RHQ",
    languages: [
      { code: "de", name: "Deutsch" },
      { code: "en", name: "English" },
    ],
  },
  {
    id: "france",
    name: "TAKNISER France",
    country: "France",
    city: "Paris",
    entityName: "TAKNISER BERNARD LAURENT SARL",
    continent: "Europe",
    flag: "🇫🇷",
    coverage: "Francophone Europe",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
      { code: "de", name: "Français" },
    ],
  },
  {
    id: "uk",
    name: "TAKNISER United Kingdom",
    country: "UK",
    city: "London",
    entityName: "TAKNISER ROTHS UK LIMITED",
    continent: "Europe",
    flag: "🇬🇧",
    coverage: "UK & Ireland",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
    ],
  },
  {
    id: "netherlands",
    name: "TAKNISER Benelux",
    country: "Netherlands",
    city: "Rotterdam",
    entityName: "TAKNISER VRIES BENELUX B.V.",
    continent: "Europe",
    flag: "🇳🇱",
    coverage: "Benelux & Logistics",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
      { code: "de", name: "Nederlands" },
    ],
  },
  {
    id: "italy",
    name: "TAKNISER Italy",
    country: "Italy",
    city: "Milan",
    entityName: "TAKNISER VENETO INDUSTRIALE S.R.L.",
    continent: "Europe",
    flag: "🇮🇹",
    coverage: "Southern Europe",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
      { code: "de", name: "Italiano" },
    ],
  },
  {
    id: "spain",
    name: "TAKNISER Iberia",
    country: "Spain",
    city: "Madrid",
    entityName: "TAKNISER VELASCO IBERIA S.L.",
    continent: "Europe",
    flag: "🇪🇸",
    coverage: "Iberian Peninsula",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
      { code: "de", name: "Español" },
    ],
  },
  {
    id: "sweden",
    name: "TAKNISER Scandinavia",
    country: "Sweden",
    city: "Stockholm",
    entityName: "TAKNISER AB",
    continent: "Europe",
    flag: "🇸🇪",
    coverage: "Nordics & Scandinavia",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
      { code: "de", name: "Svenska" },
    ],
  },
  {
    id: "finland",
    name: "TAKNISER Finland",
    country: "Finland",
    city: "Helsinki",
    entityName: "TAKNISER ANTTONEN OY",
    continent: "Europe",
    flag: "🇫🇮",
    coverage: "Finland & Central Asia",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
      { code: "de", name: "Suomi" },
    ],
  },
  {
    id: "greece",
    name: "TAKNISER Balkans",
    country: "Greece",
    city: "Athens",
    entityName: "TAKNISER FREDRIKSON HELLAS I.K.E.",
    continent: "Europe",
    flag: "🇬🇷",
    coverage: "Balkans & E. Med",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
      { code: "de", name: "Ελληνικά" },
    ],
  },
  {
    id: "estonia",
    name: "TAKNISER Baltic States",
    country: "Estonia",
    city: "Tallinn",
    entityName: "TAKNISER MEYER BALTIQUE OÜ",
    continent: "Europe",
    flag: "🇪🇪",
    coverage: "Baltic Region",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
      { code: "de", name: "Eesti" },
    ],
  },

  // ─── MIDDLE EAST (3 Regional Hubs) ───
  {
    id: "uae",
    name: "TAKNISER UAE (Commercial)",
    country: "UAE",
    city: "Dubai (Business Bay)",
    entityName: "TAKNISER GMBH TRD L.L.C.",
    continent: "Middle East",
    flag: "🇦🇪",
    coverage: "Gulf & Middle East",
    type: "RHQ",
    languages: [
      { code: "ar", name: "العربية" },
      { code: "en", name: "English" },
    ],
  },
  {
    id: "uae-jafza",
    name: "TAKNISER Global Logistics Hub",
    country: "UAE",
    city: "Dubai (JAFZA)",
    entityName: "TAKNISER SARL E&ET FZCO",
    continent: "Middle East",
    flag: "🇦🇪",
    coverage: "Global Free Zone Logistics",
    type: "LOGISTICS HUB",
    languages: [
      { code: "ar", name: "العربية" },
      { code: "en", name: "English" },
    ],
  },
  {
    id: "saudi",
    name: "TAKNISER Saudi Arabia",
    country: "Saudi Arabia",
    city: "Dammam",
    entityName: "TAKNISER HOFFMANN ARABIA LLC.",
    continent: "Middle East",
    flag: "🇸🇦",
    coverage: "Saudi Arabia & Levant",
    type: "RHQ",
    languages: [
      { code: "ar", name: "العربية" },
      { code: "en", name: "English" },
    ],
  },

  // ─── AFRICA (3 RHQs) ───
  {
    id: "south-africa",
    name: "TAKNISER Southern Africa",
    country: "South Africa",
    city: "Johannesburg",
    entityName: "TAKNISER RATCLIFF SAVANNA (PTY) LIMITED",
    continent: "Africa",
    flag: "🇿🇦",
    coverage: "Southern Africa",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
    ],
  },
  {
    id: "kenya",
    name: "TAKNISER East Africa",
    country: "Kenya",
    city: "Nairobi",
    entityName: "TAKNISER MENARD KENYA LIMITED",
    continent: "Africa",
    flag: "🇰🇪",
    coverage: "East & Central Africa",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
    ],
  },
  {
    id: "ghana",
    name: "TAKNISER West Africa",
    country: "Ghana",
    city: "Accra",
    entityName: "TAKNISER PINAULT AOF LIMITED",
    continent: "Africa",
    flag: "🇬🇭",
    coverage: "West Africa",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
    ],
  },

  // ─── NORTH AMERICA (2 RHQs) ───
  {
    id: "usa",
    name: "TAKNISER United States",
    country: "USA",
    city: "Texas",
    entityName: "TAKNISER STERLING AMERICANA LLC",
    continent: "North America",
    flag: "🇺🇸",
    coverage: "USA & Global Sourcing",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
    ],
  },
  {
    id: "canada",
    name: "TAKNISER Canada",
    country: "Canada",
    city: "Toronto",
    entityName: "TAKNISER STERLING CANADA CORP.",
    continent: "North America",
    flag: "🇨🇦",
    coverage: "Canada & Arctic Supply",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
    ],
  },

  // ─── LATIN AMERICA (4 RHQs) ───
  {
    id: "mexico",
    name: "TAKNISER Mexico",
    country: "Mexico",
    city: "Mexico City",
    entityName: "TAKNISER LEMANN MEXICANA S. DE R.L. DE C.V.",
    continent: "Latin America",
    flag: "🇲🇽",
    coverage: "Mexico & Manufacturing",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
      { code: "de", name: "Español" },
    ],
  },
  {
    id: "panama",
    name: "TAKNISER Panama",
    country: "Panama",
    city: "Panama City",
    entityName: "TAKNISER ORTEGA PANAMÁ S.A.",
    continent: "Latin America",
    flag: "🇵🇦",
    coverage: "Central America & Canal Trade",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
      { code: "de", name: "Español" },
    ],
  },
  {
    id: "chile",
    name: "TAKNISER Chile",
    country: "Chile",
    city: "Santiago",
    entityName: "TAKNISER PINO ANDINA SpA",
    continent: "Latin America",
    flag: "🇨🇱",
    coverage: "Andean Region & Mining",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
      { code: "de", name: "Español" },
    ],
  },
  {
    id: "brazil",
    name: "TAKNISER Brazil",
    country: "Brazil",
    city: "São Paulo",
    entityName: "TAKNISER SANTOS AMAZONIA LTDA.",
    continent: "Latin America",
    flag: "🇧🇷",
    coverage: "South America & AgTech",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
      { code: "de", name: "Português" },
    ],
  },

  // ─── ASIA (7 RHQs) ───
  {
    id: "india",
    name: "TAKNISER India",
    country: "India",
    city: "Ahmedabad",
    entityName: "TAKNISER AB INDIA PRIVATE LIMITED",
    continent: "Asia",
    flag: "🇮🇳",
    coverage: "South Asia & Engineering",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
    ],
  },
  {
    id: "china",
    name: "TAKNISER China",
    country: "China",
    city: "Guangzhou",
    entityName: "TAKNISER SHULIANG CHINA CO., LTD.",
    continent: "Asia",
    flag: "🇨🇳",
    coverage: "Greater China Manufacturing",
    type: "RHQ",
    languages: [
      { code: "zh", name: "中文" },
      { code: "en", name: "English" },
    ],
  },
  {
    id: "hong-kong",
    name: "TAKNISER Hong Kong",
    country: "Hong Kong",
    city: "Hong Kong SAR",
    entityName: "TAKNISER SHĀNSHĀN HK LIMITED",
    continent: "Asia",
    flag: "🇭🇰",
    coverage: "North Asia Trade Finance",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
      { code: "zh", name: "繁體中文" },
    ],
  },
  {
    id: "japan",
    name: "TAKNISER Japan",
    country: "Japan",
    city: "Tokyo",
    entityName: "TAKNISER TAKEMITSU JAPAN K.K.",
    continent: "Asia",
    flag: "🇯🇵",
    coverage: "Japan Robotics & Tech",
    type: "RHQ",
    languages: [
      { code: "ja", name: "日本語" },
      { code: "en", name: "English" },
    ],
  },
  {
    id: "korea",
    name: "TAKNISER South Korea",
    country: "South Korea",
    city: "Seoul",
    entityName: "TAKNISER KOREA LTD.",
    continent: "Asia",
    flag: "🇰🇷",
    coverage: "East Asia Advanced Tech",
    type: "RHQ",
    languages: [
      { code: "ko", name: "한국어" },
      { code: "en", name: "English" },
    ],
  },
  {
    id: "singapore",
    name: "TAKNISER Singapore",
    country: "Singapore",
    city: "Singapore",
    entityName: "TAKNISER MERLION SINGAPORE PTE. LTD.",
    continent: "Asia",
    flag: "🇸🇬",
    coverage: "ASEAN Financial & Trade Hub",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
      { code: "zh", name: "华语" },
    ],
  },
  {
    id: "turkiye",
    name: "TAKNISER Türkiye",
    country: "Türkiye",
    city: "Istanbul",
    entityName: "TAKNISER SAHENK TURK A.Ş.",
    continent: "Asia",
    flag: "🇹🇷",
    coverage: "Eurasian Cross-Border Trade",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
      { code: "de", name: "Türkçe" },
    ],
  },

  // ─── OCEANIA (1 RHQ) ───
  {
    id: "australia",
    name: "TAKNISER Australia",
    country: "Australia",
    city: "Melbourne",
    entityName: "TAKNISER PALLMER PACIFIC PTY LTD",
    continent: "Oceania",
    flag: "🇦🇺",
    coverage: "Oceania Heavy Equipment",
    type: "RHQ",
    languages: [
      { code: "en", name: "English" },
    ],
  },
];

// Context Definition
interface LanguageContextType {
  currentLanguage: LanguageCode;
  currentRegion: RegionId;
  changeLanguageAndRegion: (lang: LanguageCode, region: RegionId) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation Dictionary
const DICTIONARY: Record<LanguageCode, Record<string, string>> = {
  de: {
    // Utilities & Top bar
    "worldwide-network": "Weltweites Netzwerk",
    "you-are-in": "Sie befinden sich in",
    "global-offices": "Weltweite Niederlassungen",
    "heritage-about": "Tradition & Über uns",
    "contact-hq": "Hauptsitz kontaktieren",
    "log-in": "Anmelden",
    "support-community": "Hilfe & Kundendienst",
    "search-placeholder": "Suchen...",
    "search-platform": "Plattform durchsuchen...",
    "contact-corporate": "Unternehmensplattform kontaktieren",
    "admin-login": "Admin-Anmeldung",
    "close": "Schließen",
    "go-to-slide": "Zu Folie wechseln",

    // Nav Links
    "about-us": "Über Uns",
    "vision-2046": "Vision 2046",
    "what-we-do": "WAS WIR TUN",
    "capabilities": "INNOVATION",
    "industries": "T1G AUSWIRKUNGEN",
    "responsibility": "VERANTWORTUNG",

    // About Section
    "about-takniser": "Über TAKNISER",
    "century-of": "Ein Jahrhundert der",
    "legacy": "Tradition",
    "years-of-excellence": "Jahre Exzellenz",
    "global-hub": "Globaler Hub",
    "worldwide-reach": "Weltweite Reichweite",
    "operating-in-countries": "Aktiv in über 190 Ländern",
    "read-full-story": "Ganze Geschichte lesen",

    // Slide 1
    "s1-kicker": "Über 100 Jahre deutsche Ingenieurstradition",
    "s1-title": "DIE ZUKUNFT DER GLOBALEN INDUSTRIE GESTALTEN",
    "s1-highlight": "Eine Welt. Ein Ökosystem. Eine Zukunft.",
    "s1-desc": "Über 100 Jahre deutsche Ingenieurstradition. Aktiv in über 190 Ländern über 30 regionale Hauptsitze weltweit.",
    "s1-primary": "Geschichte & Tradition",
    "s1-secondary": "Globales Netzwerk erkunden",

    // Slide 2
    "s2-kicker": "Nachhaltige Erde & Zukunft",
    "s2-title": "Globale Verantwortung",
    "s2-highlight": "Vorleben",
    "s2-desc": "Förderung umweltbewusster Innovationen und Stärkung von Gemeinschaften, um ein nachhaltiges Erbe für zukünftige Generationen zu sichern.",
    "s2-primary": "Unsere Verantwortung",
    "s2-secondary": "Nachhaltige Erde",

    // Slide 3
    "s3-kicker": "7 Kernbereiche",
    "s3-title": "Industriestandards",
    "s3-highlight": "Neu Definieren",
    "s3-desc": "Integrierte Lösungen von Agrartechnologie und Robotik bis zur Weltraumwirtschaft für einen zukunftsfähigen globalen Lebensstil.",
    "s3-primary": "Bereiche erkunden",
    "s3-secondary": "Innovationen ansehen",

    // Right Showcase Card
    "showcase-heritage": "Tradition aus Hessen",
    "showcase-countries": "190+ Länder",
    "showcase-desc": "Vor über einem Jahrhundert in Hessen gegründet, hat sich TAKNISER von spezialisierter Energiesystemtechnik zu einem integrierten globalen Industriekonzern entwickelt.",
    "showcase-roadmap": "Vision 2046 Roadmap",
    "showcase-vision-desc": "Entdecken Sie unsere 100-Jahre-Vision",

    // Footer Contact CTA
    "footer-ready": "Bereit für die Zusammenarbeit mit TAKNISER?",
    "footer-team-desc": "Unser weltweites Team aus Industriespezialisten, Ingenieuren und Beschaffungsexperten steht bereit, integrierte Lösungen für Ihre Anforderungen zu liefern.",
    "footer-contact-team": "Unser Team kontaktieren",
    "footer-corporate-tagline": "Über 100 Jahre deutsche Ingenieurstradition. Die Zukunft der globalen Industrie gestalten.",
    "footer-german-desc": "Gegründet auf den deutschen Grundsätzen Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst und Vertrauen seit dem frühen 20. Jahrhundert in Hessen.",
    "footer-global-presence": "Globale Präsenz",
    "footer-regional-hq": "30 Regionale Hauptsitze",
    "footer-global-hq": "Globaler Hauptsitz – TAKNISER GmbH",
    "footer-hq-location": "Hessen, Deutschland",
    "footer-inquiries": "Portal für Unternehmensanfragen",
    "footer-admin-area": "Admin-Bereich",
    "footer-copyright": "© 2026 TAKNISER ONE GLOBE (TAKNISER GmbH). Alle Rechte vorbehalten. Über 100 Jahre deutsche Ingenieurstradition.",
    "footer-privacy": "Datenschutz",
    "footer-terms": "Nutzungsbedingungen",
    "footer-global-footprint": "Globaler Fußabdruck",
    "cap-eng": "Ingenieurwesen & Beratung",
    "cap-mfg": "Industrielle Fertigung",
    "cap-source": "Globale strategische Beschaffung",
    "cap-procure": "Internationale Beschaffung",
    "cap-epc": "EPC & Projektversorgung",
    "cap-logistics": "Globales Logistiknetzwerk",

    // Navigation Dropdowns
    "nav-divisions-dropdown": "Kern-Geschäftsbereiche",
    "nav-responsibility-dropdown": "Unternehmensverantwortung",
    "nav-family": "TAKNISER ONE GLOBE FAMILIE",
    "nav-earth": "NACHHALTIGE ERDE",
    "header-vision-tag": "Vision 2046",

    // Industries Section
    "ind-kicker": "GLOBALE AUSWIRKUNGEN",
    "ind-title": "T1G Globale Auswirkungen",
    "ind-desc": "Bereitstellung spezialisierter, hochleistungsfähiger Lösungen und transformativer Wirkung über diverse globale Zukunftsbereiche auf der Erde und darüber hinaus.",
    "ind-spotlight1-kicker": "Zukunftserkundung",
    "ind-spotlight1-title": "Raumfahrt & Planetare Systeme",
    "ind-spotlight1-desc": "Einsatz fortschrittlicher Orbital-Hardware, Erdbeobachtungssatelliten und planetarer Ressourcen-Intelligenz.",
    "ind-spotlight2-kicker": "Nachhaltige Zukunft",
    "ind-spotlight2-title": "Saubere Transformation & Naturpositiv",
    "ind-spotlight2-desc": "Investitionen in widerstandsfähige Ernährungssysteme, saubere Wasserinfrastruktur, zirkuläre Rohstoffwirtschaft und erneuerbare Energiewende.",
    "ind-cta": "Alle 12 T1G Impacts erkunden",

    // Divisions Grid
    "div-kicker": "Integriertes Unternehmenskonglomerat",
    "div-title-prefix": "Sieben",
    "div-title-highlight": "Kernbereiche",
    "div-subtitle": "Von Raumfahrttechnologie bis zu nachhaltiger Landwirtschaft agiert TAKNISER ONE GLOBE in sieben transformativen Industriesektoren – alle vernetzt über eine integrierte globale Plattform.",
    "div-card-explore": "Bereich erkunden",
    "div-cta-title": "Alle Geschäftsbereiche ansehen",
    "div-cta-desc": "Das gesamte TAKNISER-Portfolio erkunden",
    "div-cta-btn": "One Globe Plattform",

    // 7 Divisions
    "div-space-economy-title": "Raumfahrtwirtschaft",
    "div-space-economy-tagline": "Die Zukunft über die Erde hinaus gestalten durch fortschrittliche Raumfahrttechnologien und globale Raumfahrt-Partnerschaften.",
    "div-mining-minerals-title": "Bergbau & Rohstoffe",
    "div-mining-minerals-tagline": "Förderung des weltweiten Industriewachstums durch verantwortungsvollen Bergbau, Veredelung und Handel strategischer Rohstoffe.",
    "div-agtech-title": "Agrartechnologie",
    "div-agtech-tagline": "Transformation globaler Ernährungssysteme durch Präzisionslandwirtschaft, intelligente Bewässerung und nachhaltige Agrarlösungen.",
    "div-lifecare-title": "Lifecare & Gesundheit",
    "div-lifecare-tagline": "Förderung des menschlichen Wohlbefindens durch Medizintechnik, pharmazeutische Versorgung und globale Gesundheitsinfrastruktur.",
    "div-lifestyle-title": "Lifestyle & Wohnen",
    "div-lifestyle-tagline": "Verbesserung des täglichen Lebens durch hochwertige Konsumgüter und intelligente Lifestyle-Lösungen.",
    "div-robotics-title": "Robotik & KI",
    "div-robotics-tagline": "Beschleunigung von Industrie 4.0 mit intelligenter Automatisierung und KI-gestützten Industrielösungen.",
    "div-global-trading-title": "Globaler Handel & Logistik",
    "div-global-trading-tagline": "Verbindung von Herstellern, Industrien, Regierungen und weltweiten Märkten durch ein integriertes internationales Handelsökosystem.",

    // Division Categories
    "cat-satellite-components": "Satellitenkomponenten",
    "cat-space-communications": "Raumfahrtkommunikation",
    "cat-earth-observation": "Erdbeobachtung",
    "cat-space-electronics": "Raumfahrtelektronik",
    "cat-launch-support-technologies": "Startunterstützung",
    "cat-copper": "Kupfer",
    "cat-lithium": "Lithium",
    "cat-nickel": "Nickel",
    "cat-rare-earth-elements": "Seltene Erden",
    "cat-aluminum": "Aluminium",
    "cat-graphite": "Graphit",
    "cat-critical-mineral-trading": "Kritischer Mineralienhandel",
    "cat-coal": "Kohle",
    "cat-irrigation-systems": "Bewässerungssysteme",
    "cat-fertilizers": "Düngemittel",
    "cat-seeds": "Saatgut",
    "cat-agricultural-machinery": "Landmaschinen",
    "cat-food-processing": "Lebensmittelverarbeitung",
    "cat-medical-devices": "Medizinprodukte",
    "cat-hospital-equipment": "Krankenhausausstattung",
    "cat-pharmaceuticals": "Pharmazeutika",
    "cat-biotechnology": "Biotechnologie",
    "cat-diagnostics-equipment": "Diagnostikgeräte",
    "cat-consumer-appliances": "Haushaltsgeräte",
    "cat-smart-living": "Intelligentes Wohnen",
    "cat-personal-care": "Körperpflege",
    "cat-lifestyle-products": "Lifestyle-Produkte",
    "cat-home-technologies": "Haustechnologien",
    "cat-industrial-robots": "Industrieroboter",
    "cat-automation-systems": "Automatisierungssysteme",
    "cat-ai-robotics": "KI-Robotik",
    "cat-warehouse-automation": "Lagerautomatisierung",
    "cat-collaborative-robots": "Kollaborative Roboter",
    "cat-energy": "Energie",
    "cat-electrical": "Elektrotechnik",
    "cat-electronics": "Elektronik",
    "cat-metals": "Metalle",
    "cat-machinery": "Maschinenbau",
    "cat-chemicals": "Chemikalien",
    "cat-construction-materials": "Baustoffe",
    "cat-commodities": "Rohstoffe",

    // Capabilities Section
    "cap-section-kicker": "DURCHGEHENDE INDUSTRIELLE WERTSCHÖPFUNGSKETTE",
    "cap-section-title1": "Ganzheitliche Innovation &",
    "cap-section-title2": "Wertschöpfungskette",
    "cap-section-desc": "Von bahnbrechender Innovation, Ingenieurwesen und Fertigung bis hin zu Logistik und digitaler Transformation – TAKNISER liefert entlang der gesamten industriellen Wertschöpfungskette.",

    "cap-item-0-title": "Ingenieurwesen & Beratung",
    "cap-item-0-desc": "Jahrhundertelange deutsche Ingenieurserfahrung für Machbarkeit, Systemarchitektur und Optimierung.",
    "cap-item-1-title": "Industrielle Fertigung",
    "cap-item-1-desc": "Präzisions-OEM-Fertigung nach strengsten europäischen Qualitäts- und Toleranzmaßstäben.",
    "cap-item-2-title": "Globale strategische Beschaffung",
    "cap-item-2-desc": "Direkter Zugang zu strategischen Rohstoffen, kritischen Mineralien und spezialisierten Industriekomponenten.",
    "cap-item-3-title": "Internationale Beschaffung",
    "cap-item-3-desc": "Durchgängige Multiwährungs-Beschaffung für institutionelle Großprojekte, Versorger und Regierungsverträge.",
    "cap-item-4-title": "EPC & Projektversorgung",
    "cap-item-4-desc": "Schlüsselfertige Ausrüstungslieferung und technische Unterstützung für internationale Großprojekte.",
    "cap-item-5-title": "Globales Logistiknetzwerk",
    "cap-item-5-desc": "Multimodale See-, Luft- und Landfracht, angetrieben durch strategische globale Drehkreuze.",
    "cap-item-6-title": "Internationaler Handel & Vertrieb",
    "cap-item-6-desc": "Grenzüberschreitende Vertriebspartnerschaften und weltweiter Ausbau solider Absatznetzwerke.",
    "cap-item-7-title": "Lagerhaltung & Kühlkette",
    "cap-item-7-desc": "Strategisch positionierte Zolllager und automatisierte Distributionszentren weltweit.",
    "cap-item-8-title": "Deep-Tech & Automatisierung",
    "cap-item-8-desc": "Industrie 4.0-Integration, Sensornetzwerke und cyber-physische Fertigungssysteme.",
    "cap-item-9-title": "Erneuerbare Energielösungen",
    "cap-item-9-desc": "Solar-, Wind- und Wasserstoff-Großanlagen für nachhaltige industrielle Energieautarkie.",
    "cap-item-10-title": "Unternehmensführung & Compliance",
    "cap-item-10-desc": "Strikte Einhaltung internationaler Handelsgesetze, ESG-Richtlinien und Qualitätsstandards.",
    "cap-item-11-title": "Wartung & After-Sales-Support",
    "cap-item-11-desc": "Langfristige Wartungsverträge, Ersatzteilmanagement, Retrofitting und 24/7-Support.",

    "cap-showcase-kicker": "VON INNOVATION ZU WIRKUNG",
    "cap-showcase-title1": "Eine intelligentere,",
    "cap-showcase-title2": "stärker vernetzte",
    "cap-showcase-title3": "industrielle Zukunft bauen.",
    "cap-showcase-desc": "Durch die Integration von Technologie, Fachwissen und weltweiten Partnerschaften schafft TAKNISER ganzheitliche Lösungen, die Industrien voranbringen – verantwortungsvoll und zukunftssicher.",

    // Global Map Section
    "map-kicker": "Weltweite operative Präsenz",
    "map-title1": "Eine Welt.",
    "map-title2": "Ein globales Netzwerk.",
    "map-desc": "TAKNISER ONE GLOBE agiert über 30 regionale Hauptsitze, strategische Logistikhubs und Geschäftsstellen in über 190 Ländern auf 6 Kontinenten.",
    "map-all-regions": "Alle Regionen",
    "map-view-interactive": "Interaktive Weltkarte ansehen",
    "stat-ghq": "Globaler Hauptsitz",
    "stat-rhq": "Regionale Hauptsitze",
    "stat-countries": "Länder & Gebiete",
    "stat-continents": "Kontinente",
    "stat-logistics": "Logistikhubs",

    // Home - Vision 2046
    "home-vision-kicker": "Unsere strategische Ambition",
    "home-vision-title": "Vision 2046",
    "home-vision-quote": "„Ein global vernetztes TAKNISER-Ökosystem zu schaffen, das industrielle Innovation, nachhaltiges Wachstum und verlässliche Lösungen in allen Märkten und Gemeinschaften vorantreibt.“",
    "pillar-1-title": "Innovation",
    "pillar-1-desc": "Zukunftsfähige Technologien in allen Schlüsselindustrien",
    "pillar-2-title": "Nachhaltigkeit",
    "pillar-2-desc": "Verantwortungsvolle und kreislauforientierte Lieferketten",
    "pillar-3-title": "Globale Expansion",
    "pillar-3-desc": "In über 190 Ländern aktiv und kontinuierlich wachsend",
    "pillar-4-title": "Verlässliche Partnerschaften",
    "pillar-4-desc": "Langfristige Wertschöpfung mit Industrie und Staaten",
    "home-vision-cta": "Vision 2046 entdecken",
    "home-heritage-cta": "Tradition & Geschichte",

    // Footer
    "footer-careers": "Karriere & Chancen",
  },
  en: {
    // Utilities & Top bar
    "worldwide-network": "Worldwide Network",
    "you-are-in": "You are in",
    "global-offices": "Global Offices",
    "heritage-about": "Heritage & About",
    "contact-hq": "Contact HQ",
    "log-in": "Log in",
    "support-community": "Support & Community",
    "search-placeholder": "Search...",
    "search-platform": "Search platform...",
    "contact-corporate": "Contact Corporate Platform",
    "admin-login": "Admin Log in",
    "close": "Close",
    "go-to-slide": "Go to slide",

    // Nav Links
    "about-us": "About Us",
    "vision-2046": "Vision 2046",
    "what-we-do": "WHAT WE DO",
    "capabilities": "INNOVATION",
    "industries": "T1G IMPACTS",
    "responsibility": "RESPONSIBILITY",

    // About Section
    "about-takniser": "About TAKNISER",
    "century-of": "A Century of",
    "legacy": "Legacy",
    "years-of-excellence": "Years of Excellence",
    "global-hub": "Global Hub",
    "worldwide-reach": "Worldwide Reach",
    "operating-in-countries": "Operating in 190+ Countries",
    "read-full-story": "Read Full Story",

    // Slide 1
    "s1-kicker": "100+ Years of German Engineering Heritage",
    "s1-title": "BUILDING THE FUTURE OF GLOBAL INDUSTRY",
    "s1-highlight": "One Globe. One Ecosystem. One Future.",
    "s1-desc": "100+ Years of German Engineering Heritage. Operating in 190+ Countries through 30+ COMPANIES GLOBALY Regional Headquarters.",
    "s1-primary": "Our History & Heritage",
    "s1-secondary": "Explore Global Network",

    // Slide 2
    "s2-kicker": "Sustainable Earth & Family",
    "s2-title": "Championing Global",
    "s2-highlight": "Responsibility",
    "s2-desc": "Fostering eco-conscious innovations and empowering communities to forge a sustainable legacy for future generations.",
    "s2-primary": "Our Responsibility",
    "s2-secondary": "Sustainable Earth",

    // Slide 3
    "s3-kicker": "7 Core Divisions",
    "s3-title": "Redefining Industry",
    "s3-highlight": "Standards",
    "s3-desc": "Delivering integrated solutions from AgTech and Robotics to Space Economy, powering a resilient and advanced global lifestyle.",
    "s3-primary": "Explore Divisions",
    "s3-secondary": "View Innovation",

    // Right Showcase Card
    "showcase-heritage": "Hessen Heritage",
    "showcase-countries": "190+ Countries",
    "showcase-desc": "Originating in Hesse, Germany over a century ago, TAKNISER has grown from specialized power system engineering into an integrated global industrial conglomerate.",
    "showcase-roadmap": "Vision 2046 Roadmap",
    "showcase-vision-desc": "Discover our 100-Year Century Vision",

    // Footer Contact CTA
    "footer-ready": "Ready to work with TAKNISER?",
    "footer-team-desc": "Our global team of industrial specialists, engineers, and procurement experts are ready to deliver integrated solutions for your business needs.",
    "footer-contact-team": "Contact Our Team",
    "footer-corporate-tagline": "100+ Years of German Engineering Heritage. Building the Future of Global Industry.",
    "footer-german-desc": "Established upon German principles of Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst, and Vertrauen since early 20th century Hesse.",
    "footer-global-presence": "Global Presence",
    "footer-regional-hq": "30 Regional Headquarters",
    "footer-global-hq": "Global HQ – TAKNISER GmbH",
    "footer-hq-location": "Hesse (Hessen), Germany",
    "footer-inquiries": "Corporate Inquiries Portal",
    "footer-admin-area": "Admin Management Area",
    "footer-copyright": "© 2026 TAKNISER ONE GLOBE (TAKNISER GmbH). All rights reserved. Over 100 Years of German Engineering Excellence.",
    "footer-privacy": "Privacy Policy",
    "footer-terms": "Terms of Use",
    "footer-global-footprint": "Global Footprint",
    "cap-eng": "Engineering & Consulting",
    "cap-mfg": "Industrial Manufacturing",
    "cap-source": "Global Strategic Sourcing",
    "cap-procure": "International Procurement",
    "cap-epc": "EPC & Project Supply",
    "cap-logistics": "Global Logistics Network",

    // Navigation Dropdowns
    "nav-divisions-dropdown": "Core Business Divisions",
    "nav-responsibility-dropdown": "Corporate Responsibility",
    "nav-family": "TAKNISER ONE GLOBE FAMILY",
    "nav-earth": "SUSTAINABLE EARTH",
    "header-vision-tag": "Vision 2046",

    // Industries Section
    "ind-kicker": "GLOBAL IMPACTS",
    "ind-title": "T1G Impacts",
    "ind-desc": "Providing specialized, high-performance solutions and transformative impact across diverse global frontiers on Earth and beyond.",
    "ind-spotlight1-kicker": "Frontier Exploration",
    "ind-spotlight1-title": "Space & Planetary Systems",
    "ind-spotlight1-desc": "Deploying advanced orbital hardware, Earth observation satellites, and planetary resource intelligence.",
    "ind-spotlight2-kicker": "Sustainable Tomorrow",
    "ind-spotlight2-title": "Clean Transition & Nature Positive",
    "ind-spotlight2-desc": "Investing into resilient food systems, clean water infrastructure, circular mineral economies, and renewable transitions.",
    "ind-cta": "Explore All 12 T1G Impacts",

    // Divisions Grid
    "div-kicker": "Integrated Business Conglomerate",
    "div-title-prefix": "Seven",
    "div-title-highlight": "Core Divisions",
    "div-subtitle": "From deep-space technology to sustainable agriculture, TAKNISER ONE GLOBE operates across seven transformative industrial sectors — all connected through one integrated global platform.",
    "div-card-explore": "Explore Division",
    "div-cta-title": "View All Divisions",
    "div-cta-desc": "Explore the Complete TAKNISER Portfolio",
    "div-cta-btn": "One Globe Platform",

    // 7 Divisions Titles & Taglines
    "div-space-economy-title": "Space Economy",
    "div-space-economy-tagline": "Driving the future beyond Earth through advanced space technologies and global aerospace partnerships.",
    "div-mining-minerals-title": "Mining & Minerals",
    "div-mining-minerals-tagline": "Supporting the world's industrial growth through responsible mining, processing, sourcing, and global trading of strategic minerals.",
    "div-agtech-title": "AgTech",
    "div-agtech-tagline": "Transforming global food systems through precision agriculture, smart irrigation, and sustainable farm solutions.",
    "div-lifecare-title": "Lifecare",
    "div-lifecare-tagline": "Advancing human health through healthcare manufacturing, medical technology, and pharmaceutical supply chains.",
    "div-lifestyle-title": "Lifestyle",
    "div-lifestyle-tagline": "Enhancing everyday living through quality consumer products and smart lifestyle solutions.",
    "div-robotics-title": "Robotics",
    "div-robotics-tagline": "Accelerating Industry 4.0 with intelligent automation and AI-driven industrial solutions.",
    "div-global-trading-title": "Global Trading",
    "div-global-trading-tagline": "Connecting manufacturers, industries, governments, and global markets through an integrated international trading ecosystem.",

    // Division Categories
    "cat-satellite-components": "Satellite Components",
    "cat-space-communications": "Space Communications",
    "cat-earth-observation": "Earth Observation",
    "cat-space-electronics": "Space Electronics",
    "cat-launch-support-technologies": "Launch Support Technologies",
    "cat-copper": "Copper",
    "cat-lithium": "Lithium",
    "cat-nickel": "Nickel",
    "cat-rare-earth-elements": "Rare Earth Elements",
    "cat-aluminum": "Aluminum",
    "cat-graphite": "Graphite",
    "cat-critical-mineral-trading": "Critical Mineral Trading",
    "cat-coal": "Coal",
    "cat-irrigation-systems": "Irrigation Systems",
    "cat-fertilizers": "Fertilizers",
    "cat-seeds": "Seeds",
    "cat-agricultural-machinery": "Agricultural Machinery",
    "cat-food-processing": "Food Processing",
    "cat-medical-devices": "Medical Devices",
    "cat-hospital-equipment": "Hospital Equipment",
    "cat-pharmaceuticals": "Pharmaceuticals",
    "cat-biotechnology": "Biotechnology",
    "cat-diagnostics-equipment": "Diagnostics Equipment",
    "cat-consumer-appliances": "Consumer Appliances",
    "cat-smart-living": "Smart Living",
    "cat-personal-care": "Personal Care",
    "cat-lifestyle-products": "Lifestyle Products",
    "cat-home-technologies": "Home Technologies",
    "cat-industrial-robots": "Industrial Robots",
    "cat-automation-systems": "Automation Systems",
    "cat-ai-robotics": "AI Robotics",
    "cat-warehouse-automation": "Warehouse Automation",
    "cat-collaborative-robots": "Collaborative Robots",
    "cat-energy": "Energy",
    "cat-electrical": "Electrical",
    "cat-electronics": "Electronics",
    "cat-metals": "Metals",
    "cat-machinery": "Machinery",
    "cat-chemicals": "Chemicals",
    "cat-construction-materials": "Construction Materials",
    "cat-commodities": "Commodities",

    // Capabilities Section
    "cap-section-kicker": "END-TO-END INDUSTRIAL VALUE CHAIN",
    "cap-section-title1": "Complete Innovation &",
    "cap-section-title2": "Value Chain",
    "cap-section-desc": "From breakthrough innovation, engineering and manufacturing through to logistics and digital transformation — TAKNISER delivers across the full industrial value chain.",

    "cap-item-0-title": "Engineering & Technical Consulting",
    "cap-item-0-desc": "Centennial German engineering expertise providing feasibility, system architecture, and optimization.",
    "cap-item-1-title": "Industrial Manufacturing",
    "cap-item-1-desc": "Precision OEM manufacturing adhering to stringent European quality and tolerance metrics.",
    "cap-item-2-title": "Global Strategic Sourcing",
    "cap-item-2-desc": "Direct access to strategic raw materials, critical minerals, and specialized industrial components.",
    "cap-item-3-title": "International Procurement",
    "cap-item-3-desc": "End-to-end multi-currency procurement for institutional, utility, and government contracts.",
    "cap-item-4-title": "EPC Support & Project Supply",
    "cap-item-4-desc": "Turnkey equipment supply and engineering support for mega Engineering, Procurement & Construction projects.",
    "cap-item-5-title": "Global Logistics Network",
    "cap-item-5-desc": "Multi-modal sea, air, and overland freight powered by global strategic hubs.",
    "cap-item-6-title": "International Trade & Distribution",
    "cap-item-6-desc": "Global partner onboarding and international distribution network expansion.",
    "cap-item-7-title": "Warehousing & Cold Chain",
    "cap-item-7-desc": "Strategically positioned bonded warehouses and temperature-controlled logistics hubs worldwide.",
    "cap-item-8-title": "Deep-Tech & Automation",
    "cap-item-8-desc": "Custom Industry 4.0 integration, sensor networks, and SCADA infrastructure.",
    "cap-item-9-title": "Renewable Energy Solutions",
    "cap-item-9-desc": "Utility-scale solar, wind, and hydrogen systems for industrial energy self-sufficiency.",
    "cap-item-10-title": "Corporate Governance & Compliance",
    "cap-item-10-desc": "Rigorous adherence to international trade laws, ESG frameworks, and quality norms.",
    "cap-item-11-title": "Lifecycle Technical & After-Sales Services",
    "cap-item-11-desc": "Long-term maintenance, spare part management, retrofitting, and technical overhaul.",

    "cap-showcase-kicker": "FROM INNOVATION TO IMPACT",
    "cap-showcase-title1": "Building a Smarter,",
    "cap-showcase-title2": "More Connected",
    "cap-showcase-title3": "Industrial Future.",
    "cap-showcase-desc": "By integrating technology, expertise and global partnerships, TAKNISER creates end-to-end solutions that move industries forward — responsibly and sustainably.",

    // Global Map Section
    "map-kicker": "Global Operational Presence",
    "map-title1": "One Globe.",
    "map-title2": "One Network.",
    "map-desc": "TAKNISER ONE GLOBE operates through 30 Regional Headquarters, strategic logistics hubs, and business offices across 190+ countries and 6 continents.",
    "map-all-regions": "All Regions",
    "map-view-interactive": "View Interactive World Map",
    "stat-ghq": "Global HQ",
    "stat-rhq": "Regional HQs",
    "stat-countries": "Countries & Territories",
    "stat-continents": "Continents",
    "stat-logistics": "Logistics Hubs",

    // Home - Vision 2046
    "home-vision-kicker": "Our Strategic Ambition",
    "home-vision-title": "Vision 2046",
    "home-vision-quote": "“To create a globally connected TAKNISER ecosystem that drives industrial innovation, sustainable growth, and reliable solutions across markets and communities.”",
    "pillar-1-title": "Innovation",
    "pillar-1-desc": "Future-ready technologies across all sectors",
    "pillar-2-title": "Sustainability",
    "pillar-2-desc": "Responsible global supply chains",
    "pillar-3-title": "Global Expansion",
    "pillar-3-desc": "190+ countries and growing",
    "pillar-4-title": "Trusted Partnerships",
    "pillar-4-desc": "Long-term value creation",
    "home-vision-cta": "Discover Vision 2046",
    "home-heritage-cta": "Our History & Heritage",

    // Footer
    "footer-careers": "Opportunities & Careers",
  },
  ar: {
    // Utilities & Top bar
    "worldwide-network": "شبكة عالمية",
    "you-are-in": "أنت في",
    "global-offices": "المكاتب العالمية",
    "heritage-about": "التراث ونبذة عنا",
    "contact-hq": "الاتصال بالمقر الرئيسي",
    "log-in": "تسجيل الدخول",
    "support-community": "الدعم والمجتمع",
    "search-placeholder": "بحث...",
    "search-platform": "البحث في المنصة...",
    "contact-corporate": "الاتصال بالمنصة المشتركة",
    "admin-login": "دخول المشرف",
    "close": "إغلاق",
    "go-to-slide": "الانتقال إلى الشريحة",

    // Nav Links
    "about-us": "من نحن",
    "vision-2046": "رؤية 2046",
    "what-we-do": "ماذا نعمل",
    "capabilities": "القدرات",
    "industries": "الصناعات",
    "responsibility": "المسؤولية",

    // About Section
    "about-takniser": "حول تاكنيسر",
    "century-of": "قرن من",
    "legacy": "الإرث العريق",
    "years-of-excellence": "عاماً من التميز",
    "global-hub": "المركز العالمي",
    "worldwide-reach": "الانتشار العالمي",
    "operating-in-countries": "نعمل في أكثر من 190 دولة",
    "read-full-story": "اقرأ القصة الكاملة",

    // Slide 1
    "s1-kicker": "تميز الهندسة الألمانية",
    "s1-title": "هندسة مستقبل",
    "s1-highlight": "المؤسسات العالمية",
    "s1-desc": "ريادة الابتكار في التصنيع الصناعي، واقتصاد الفضاء، والتجارة الدولية في أكثر من 190 دولة حول العالم.",
    "s1-primary": "تاريخنا وتراثنا",
    "s1-secondary": "استكشف الشبكة العالمية",

    // Slide 2
    "s2-kicker": "الأرض المستدامة والعائلة",
    "s2-title": "رعاية المسؤولية",
    "s2-highlight": "العالمية",
    "s2-desc": "تعزيز الابتكارات الصديقة للبيئة وتمكين المجتمعات لبناء إرث مستدام للأجيال القادمة.",
    "s2-primary": "مسؤوليتنا",
    "s2-secondary": "الأرض المستدامة",

    // Slide 3
    "s3-kicker": "7 قطاعات أساسية",
    "s3-title": "إعادة تعريف معايير",
    "s3-highlight": "الصناعة",
    "s3-desc": "تقديم حلول متكاملة من التكنولوجيا الزراعية والروبوتات إلى اقتصاد الفضاء، لتمكين أسلوب حياة عالمي مرن ومتقدم.",
    "s3-primary": "استكشف القطاعات",
    "s3-secondary": "عرض القدرات",

    // Right Showcase Card
    "showcase-heritage": "تراث هسن",
    "showcase-countries": "190+ دولة",
    "showcase-desc": "نشأت شركة TAKNISER في ولاية هسن بألمانيا منذ أكثر من قرن من الزمان، ونمت من هندسة أنظمة الطاقة المتخصصة إلى تكتل صناعي عالمي متكامل.",
    "showcase-roadmap": "خريطة طريق رؤية 2046",
    "showcase-vision-desc": "اكتشف رؤيتنا المئوية الممتدة لمئة عام",

    // Footer Contact CTA
    "footer-ready": "مستعد للعمل مع تاكنيسر؟",
    "footer-team-desc": "فريقنا العالمي من المتخصصين الصناعيين والمهندسين وخبراء المشتريات على أهبة الاستعداد لتقديم حلول متكاملة لمتطلبات عملك.",
    "footer-contact-team": "اتصل بفريقنا",
    "footer-corporate-tagline": "أكثر من 100 عام من التميز الهندسي الألماني. بناء مستقبل الصناعة العالمية.",
    "footer-german-desc": "تأسست وفقاً للمبادئ الألمانية المتمثلة في الدقة، والجودة، والموثوقية، والبراعة الهندسية، والثقة منذ أوائل القرن العشرين في ولاية هسن.",
    "footer-global-presence": "الانتشار العالمي",
    "footer-regional-hq": "30 مقراً إقليمياً",
    "footer-global-hq": "المقر الرئيسي العالمي – تاكنيسر ذ.م.م",
    "footer-hq-location": "هسن، ألمانيا",
    "footer-inquiries": "بوابة الاستفسارات المشتركة",
    "footer-admin-area": "منطقة إدارة النظام",
    "footer-copyright": "© 2026 تاكنيسر ون غلوب (تاكنيسر ذ.م.م). جميع الحقوق محفوظة. أكثر من 100 عام من التميز الهندسي الألماني.",
    "footer-download-doc": "تحميل مستند الموقع DOC",
    "footer-privacy": "سياسة الخصوصية",
    "footer-terms": "شروط الاستخدام",
    "footer-global-footprint": "البصمة العالمية",
    "cap-eng": "الهندسة والاستشارات",
    "cap-mfg": "التصنيع الصناعي",
    "cap-source": "التوريد الاستراتيجي العالمي",
    "cap-procure": "المشتريات الدولية",
    "cap-epc": "الهندسة والمشتريات والبناء وتوريد المشاريع",
    "cap-logistics": "الشبكة اللوجستية العالمية",

    // Navigation Dropdowns
    "nav-divisions-dropdown": "قطاعات الأعمال الأساسية",
    "nav-responsibility-dropdown": "المسؤولية المؤسسية",
    "nav-family": "عائلة تاكنيسر ون غلوب",
    "nav-earth": "الأرض المستدامة",
    "header-vision-tag": "رؤية 2046",

    // Industries Section
    "ind-kicker": "التأثيرات العالمية",
    "ind-title": "تأثيرات T1G",
    "ind-desc": "تقديم حلول متخصصة وعالية الأداء وتأثير تحويلي عبر مختلف الآفاق العالمية على الأرض وخارجها.",
    "ind-spotlight1-kicker": "استكشاف الآفاق",
    "ind-spotlight1-title": "الفضاء والأنظمة الكوكبية",
    "ind-spotlight1-desc": "نشر أحدث الأجهزة المدارية، وأقمار رصد الأرض، واستخبارات الموارد الكوكبية.",
    "ind-spotlight2-kicker": "غد مستدام",
    "ind-spotlight2-title": "التحول النظيف وإيجابية الطبيعة",
    "ind-spotlight2-desc": "الاستثمار في أنظمة غذائية مرنة، وبنية تحتية للمياه النظيفة، واقتصادات دائرية للمعادن، والتحول للطاقة المتجددة.",
    "ind-cta": "استكشف جميع تأثيرات T1G الـ 12",

    // Divisions Grid
    "div-kicker": "تكتل أعمال متكامل",
    "div-title-prefix": "سبعة",
    "div-title-highlight": "قطاعات أساسية",
    "div-subtitle": "من تكنولوجيا الفضاء السحيق إلى الزراعة المستدامة، تعمل تاكنيسر ون غلوب عبر سبعة قطاعات صناعية تحويلية متصلة بمنصة عالمية موحدة.",
    "div-card-explore": "استكشف القطاع",
    "div-cta-title": "عرض جميع القطاعات",
    "div-cta-desc": "استكشف محفظة تاكنيسر الكاملة",
    "div-cta-btn": "منصة ون غلوب",

    // 7 Divisions
    "div-space-economy-title": "اقتصاد الفضاء",
    "div-space-economy-tagline": "قيادة المستقبل إلى ما وراء الأرض عبر تقنيات الفضاء المتقدمة وشراكات الطيران العالمية.",
    "div-mining-minerals-title": "التعدين والمعادن",
    "div-mining-minerals-tagline": "دعم النمو الصناعي العالمي بالتعدين المسؤول والتجارة الدولية للمعادن الاستراتيجية.",
    "div-agtech-title": "التكنولوجيا الزراعية",
    "div-agtech-tagline": "تطوير أنظمة الغذاء العالمية بالزراعة الدقيقة والري الذكي والحلول الزراعية المستدامة.",
    "div-lifecare-title": "الرعاية الصحية والحياة",
    "div-lifecare-tagline": "الارتقاء بصحة الإنسان عبر الأجهزة الطبية والتكنولوجيا وسلاسل التوريد الدوائية.",
    "div-lifestyle-title": "أسلوب الحياة والعيش",
    "div-lifestyle-tagline": "تحسين المعيشة اليومية بمنتجات استهلاكية راقية وحلول أسلوب الحياة الذكية.",
    "div-robotics-title": "الروبوتات والذكاء الاصطناعي",
    "div-robotics-tagline": "تسريع الثورة الصناعية الرابعة بالأتمتة الذكية والحلول المدعومة بالذكاء الاصطناعي.",
    "div-global-trading-title": "التجارة العالمية واللوجستيات",
    "div-global-trading-tagline": "ربط المصنعين والقطاعات والحكومات بالأسواق الدولية عبر منظومة تجارة متكاملة.",

    // Division Categories
    "cat-satellite-components": "مكونات الأقمار الصناعية",
    "cat-space-communications": "اتصالات الفضاء",
    "cat-earth-observation": "رصد الأرض",
    "cat-space-electronics": "إلكترونيات الفضاء",
    "cat-launch-support-technologies": "تقنيات دعم الإطلاق",
    "cat-copper": "النحاس",
    "cat-lithium": "الليثيوم",
    "cat-nickel": "النيكل",
    "cat-rare-earth-elements": "العناصر الأرضية النادرة",
    "cat-aluminum": "الألمنيوم",
    "cat-graphite": "الجرافيت",
    "cat-critical-mineral-trading": "تجارة المعادن الحرجة",
    "cat-coal": "الفحم",
    "cat-irrigation-systems": "أنظمة الري",
    "cat-fertilizers": "الأسمدة",
    "cat-seeds": "البذور",
    "cat-agricultural-machinery": "الآلات الزراعية",
    "cat-food-processing": "تصنيع الأغذية",
    "cat-medical-devices": "الأجهزة الطبية",
    "cat-hospital-equipment": "معدات المستشفيات",
    "cat-pharmaceuticals": "الأدوية",
    "cat-biotechnology": "التكنولوجيا الحيوية",
    "cat-diagnostics-equipment": "أجهزة التشخيص",
    "cat-consumer-appliances": "الأجهزة المنزلية",
    "cat-smart-living": "المعيشة الذكية",
    "cat-personal-care": "العناية الشخصية",
    "cat-lifestyle-products": "منتجات أسلوب الحياة",
    "cat-home-technologies": "تقنيات المنزل",
    "cat-industrial-robots": "الروبوتات الصناعية",
    "cat-automation-systems": "أنظمة الأتمتة",
    "cat-ai-robotics": "روبوتات الذكاء الاصطناعي",
    "cat-warehouse-automation": "أتمتة المستودعات",
    "cat-collaborative-robots": "الروبوتات التعاونية",
    "cat-energy": "الطاقة",
    "cat-electrical": "الكهرباء",
    "cat-electronics": "الإلكترونيات",
    "cat-metals": "المعادن",
    "cat-machinery": "الآلات",
    "cat-chemicals": "المواد الكيميائية",
    "cat-construction-materials": "مواد البناء",
    "cat-commodities": "السلع الأساسية",

    // Capabilities Section
    "cap-section-kicker": "سلسلة القيمة الصناعية المتكاملة",
    "cap-section-title1": "الابتكار المتكامل و",
    "cap-section-title2": "سلسلة القيمة",
    "cap-section-desc": "من الابتكار الرائد والهندسة والتصنيع إلى الخدمات اللوجستية والتحول الرقمي – تقدم تاكنيسر عبر كامل سلسلة القيمة الصناعية.",

    "cap-item-0-title": "الهندسة والاستشارات التقنية",
    "cap-item-0-desc": "خبرة هندسية ألمانية عريقة لدراسات الجدوى وهندسة النظم والتحسين التقني.",
    "cap-item-1-title": "التصنيع الصناعي",
    "cap-item-1-desc": "تصنيع دقيق بمعايير الجودة والتسامح الأوروبية الصارمة.",
    "cap-item-2-title": "التوريد الاستراتيجي العالمي",
    "cap-item-2-desc": "وصول مباشر للمواد الخام الاستراتيجية والمعادن الحرجة ومكونات الصناعة المتخصصة.",
    "cap-item-3-title": "المشتريات الدولية",
    "cap-item-3-desc": "مشتريات متعددة العملات للعقود الحكومية والمؤسسية ومشاريع المرافق العامة.",
    "cap-item-4-title": "دعم EPC وتوريد المشاريع",
    "cap-item-4-desc": "توريد معدات متكامل ودعم هندسي للمشاريع الكبرى للهندسة والمشتريات والبناء.",
    "cap-item-5-title": "الشبكة اللوجستية العالمية",
    "cap-item-5-desc": "شحن متعدد الوسائط بحراً وجواً وبراً مدعوماً بمراكز استراتيجية دولية.",
    "cap-item-6-title": "التجارة والتوزيع الدولي",
    "cap-item-6-desc": "بناء شراكات توزيع وتوسيع شبكات التوريد الموثوقة عالمياً.",
    "cap-item-7-title": "التخزين وسلسلة التبريد",
    "cap-item-7-desc": "مستودعات جمركية ومراكز لوجستية مبرمجة ومضبوطة الحرارة حول العالم.",
    "cap-item-8-title": "التكنولوجيا العميقة والأتمتة",
    "cap-item-8-desc": "دمج تقنيات الصناعة 4.0، وشبكات الاستشعار، وأنظمة سكادا الصناعية.",
    "cap-item-9-title": "حلول الطاقة المتجددة",
    "cap-item-9-desc": "أنظمة طاقة شمسية ورياح وهيدروجين للاكتفاء الذاتي الصناعي المستدام.",
    "cap-item-10-title": "الحوكمة المؤسسية والامتثال",
    "cap-item-10-desc": "التزام صارم بقوانين التجارة الدولية وأطر الاستدامة البيئية والاجتماعية والحوكمة.",
    "cap-item-11-title": "خدمات ما بعد البيع والدعم الفني",
    "cap-item-11-desc": "صيانة طويلة الأمد وإدارة قطع الغيار والتحديث والدعم الفني المستمر.",

    "cap-showcase-kicker": "من الابتكار إلى التأثير",
    "cap-showcase-title1": "بناء مستقبل صناعي",
    "cap-showcase-title2": "أكثر ذكاءً",
    "cap-showcase-title3": "وترابطاً.",
    "cap-showcase-desc": "من خلال دمج التكنولوجيا والخبرة والشراكات العالمية، تخلق تاكنيسر حلولاً متكاملة تدفع الصناعات إلى الأمام بمسؤولية واستدامة.",

    // Global Map Section
    "map-kicker": "الانتشار العملياتي العالمي",
    "map-title1": "ون غلوب.",
    "map-title2": "شبكة موحدة.",
    "map-desc": "تعمل تاكنيسر ون غلوب من خلال 30 مقراً إقليمياً ومراكز لوجستية ومكاتب تجارية في أكثر من 190 دولة عبر 6 قارات.",
    "map-all-regions": "جميع المناطق",
    "map-view-interactive": "عرض الخريطة التفاعلية",
    "stat-ghq": "المقر الرئيسي العالمي",
    "stat-rhq": "المقرات الإقليمية",
    "stat-countries": "الدول والأقاليم",
    "stat-continents": "القارات",
    "stat-logistics": "المراكز اللوجستية",

    // Home - Vision 2046
    "home-vision-kicker": "طموحنا الاستراتيجي",
    "home-vision-title": "رؤية 2046",
    "home-vision-quote": "«بناء منظومة تاكنيسر المترابطة عالمياً لدفع الابتكار الصناعي، والنمو المستدام، وتقديم حلول موثوقة عبر الأسواق والمجتمعات.»",
    "pillar-1-title": "الابتكار",
    "pillar-1-desc": "تقنيات جاهزة للمستقبل عبر مختلف القطاعات الصناعية",
    "pillar-2-title": "الاستدامة",
    "pillar-2-desc": "سلاسل توريد عالمية مسؤولة ومستدامة بيئياً",
    "pillar-3-title": "التوسع العالمي",
    "pillar-3-desc": "أكثر من 190 دولة وتوسع مستمر",
    "pillar-4-title": "شراكات موثوقة",
    "pillar-4-desc": "خلق قيمة طويلة الأجل مع الشركاء والحكومات",
    "home-vision-cta": "اكتشف رؤية 2046",
    "home-heritage-cta": "تاريخنا وإرثنا العريق",

    // Footer
    "footer-careers": "الفرص والوظائف",
  },
  zh: {
    // Utilities & Top bar
    "you-are-in": "您当前处于",
    "global-offices": "全球办事处",
    "heritage-about": "历史与关于我们",
    "contact-hq": "联系总部",
    "log-in": "登录",
    "support-community": "支持与社区",
    "search-placeholder": "搜索...",
    "search-platform": "搜索平台...",
    "contact-corporate": "联系企业平台",
    "admin-login": "管理员登录",
    "close": "关闭",

    // Nav Links
    "about-us": "关于我们",
    "vision-2046": "愿景 2046",
    "what-we-do": "业务范围",
    "capabilities": "集团能力",
    "industries": "服务行业",
    "responsibility": "企业责任",

    // About Section
    "about-takniser": "关于 TAKNISER",
    "century-of": "一个世纪的",
    "legacy": "光辉传承",
    "years-of-excellence": "载卓越历程",
    "global-hub": "全球枢纽",
    "worldwide-reach": "全球布局",
    "operating-in-countries": "在 190 多个国家运营",
    "read-full-story": "阅读完整故事",

    // Slide 1
    "s1-kicker": "德国工程卓越",
    "s1-title": "工程化未来",
    "s1-highlight": "全球企业",
    "s1-desc": "在全球 190 多个国家开拓工业制造、太空经济和国际贸易的创新。",
    "s1-primary": "我们的历史与传承",
    "s1-secondary": "探索全球网络",

    // Slide 2
    "s2-kicker": "可持续地球与家族",
    "s2-title": "倡导全球",
    "s2-highlight": "社会责任",
    "s2-desc": "培养环保创新，赋能社区，为子孙后代打造可持续的遗产。",
    "s2-primary": "我们的责任",
    "s2-secondary": "可持续地球",

    // Slide 3
    "s3-kicker": "7 大核心部门",
    "s3-title": "重新定义行业",
    "s3-highlight": "新标准",
    "s3-desc": "提供从农业科技和机器人到太空经济的集成解决方案，助力弹性和先进的全球生活方式。",
    "s3-primary": "探索业务部门",
    "s3-secondary": "查看技术能力",

    // Right Showcase Card
    "showcase-heritage": "黑森州工程传承",
    "showcase-countries": "190+ 覆盖国家",
    "showcase-desc": "TAKNISER 起源于一个多世纪前的德国黑森州，已从专门的电力系统工程发展成为一家综合性全球工业集团。",
    "showcase-roadmap": "愿景 2046 路线图",
    "showcase-vision-desc": "了解我们的百年世纪愿景",

    // Footer Contact CTA
    "footer-ready": "准备好与 TAKNISER 合作了吗？",
    "footer-team-desc": "我们的全球工业专家、工程师和采购专家团队随时准备为您的业务需求提供集成解决方案。",
    "footer-contact-team": "联系我们的团队",
    "footer-corporate-tagline": "百年德国工程底蕴。塑造全球工业未来。",
    "footer-german-desc": "自20世纪初在黑森州成立以来，始终坚守德国精密、品质、可靠、工程造诣与信任的基石。",
    "footer-global-presence": "全球业务分布",
    "footer-regional-hq": "30 个区域总部",
    "footer-global-hq": "全球总部 – TAKNISER GmbH",
    "footer-hq-location": "德国黑森州",
    "footer-inquiries": "企业咨询门户",
    "footer-admin-area": "后台管理区域",
    "footer-copyright": "© 2026 TAKNISER ONE GLOBE (TAKNISER GmbH). 保留所有权利。百年德国卓越工程。",
    "footer-download-doc": "下载网站文档 DOC",
    "footer-privacy": "隐私政策",
    "footer-terms": "使用条款",
    "footer-global-footprint": "全球足迹",
    "cap-eng": "工程与咨询",
    "cap-mfg": "工业制造",
    "cap-source": "全球战略采购",
    "cap-procure": "国际采购",
    "cap-epc": "EPC项目供货",
    "cap-logistics": "全球物流网络",
  },
  pl: {
    // Utilities & Top bar
    "you-are-in": "Jesteś w",
    "global-offices": "Biura Globalne",
    "heritage-about": "Dziedzictwo i O nas",
    "contact-hq": "Kontakt z Centralą",
    "log-in": "Zaloguj się",
    "support-community": "Wsparcie i Społeczność",
    "search-placeholder": "Szukaj...",
    "search-platform": "Szukaj na platformie...",
    "contact-corporate": "Skontaktuj się z Platformą",
    "admin-login": "Logowanie Admina",
    "close": "Zamknij",

    // Nav Links
    "about-us": "O nas",
    "vision-2046": "Wizja 2046",
    "what-we-do": "CO ROBIMY",
    "capabilities": "Możliwości",
    "industries": "Branże",
    "responsibility": "ODPOWIEDZIALNOŚĆ",

    // About Section
    "about-takniser": "O TAKNISER",
    "century-of": "Wiek",
    "legacy": "Dziedzictwa",
    "years-of-excellence": "Lat Doskonałości",
    "global-hub": "Globalny Węzeł",
    "worldwide-reach": "Zasięg Globalny",
    "operating-in-countries": "Działalność w ponad 190 krajach",
    "read-full-story": "Przeczytaj Pełną Historię",

    // Slide 1
    "s1-kicker": "Niemiecka doskonałość inżynieryjna",
    "s1-title": "Kształtowanie przyszłości",
    "s1-highlight": "Globalnego Przedsiębiorstwa",
    "s1-desc": "Pionierskie innowacje w produkcji przemysłowej, gospodarce kosmicznej i handlu międzynarodowym w ponad 190 krajach na całym świecie.",
    "s1-primary": "Nasza Historia i Dziedzictwo",
    "s1-secondary": "Eksploruj Globalną Sieć",

    // Slide 2
    "s2-kicker": "Zrównoważona Ziemia i Rodzina",
    "s2-title": "Wspieranie Globalnej",
    "s2-highlight": "Odpowiedzialności",
    "s2-desc": "Wspieranie ekologicznych innowacji i wzmacnianie społeczności w celu budowania zrównoważonego dziedzictwa dla przyszłych pokoleń.",
    "s2-primary": "Nasza Odpowiedzialność",
    "s2-secondary": "Zrównoważona Ziemia",

    // Slide 3
    "s3-kicker": "7 Głównych Dywizji",
    "s3-title": "Definiowanie na nowo",
    "s3-highlight": "Standardów Branżowych",
    "s3-desc": "Dostarczanie zintegrowanych rozwiązań od AgTech i robotyki po gospodarkę kosmiczną, napędzających elastyczny i nowoczesny globalny styl życia.",
    "s3-primary": "Eksploruj Dywizje",
    "s3-secondary": "Pokaż Możliwości",

    // Right Showcase Card
    "showcase-heritage": "Dziedzictwo Hesji",
    "showcase-countries": "Ponad 190 Krajów",
    "showcase-desc": "Wywodząc się z Hesji w Niemczech ponad sto lat temu, TAKNISER przekształcił się ze specjalistycznej inżynierii systemów zasilania w zintegrowany, globalny konglomerat przemysłowy.",
    "showcase-roadmap": "Wizja 2046 Roadmap",
    "showcase-vision-desc": "Odkryj naszą 100-letnią wizję stulecia",

    // Footer Contact CTA
    "footer-ready": "Gotowy na współpracę z TAKNISER?",
    "footer-team-desc": "Nasz globalny zespół specjalistów przemysłowych, inżynierów i ekspertów ds. zakupów jest gotowy dostarczyć zintegrowane rozwiązania dla Twoich potrzeb biznesowych.",
    "footer-contact-team": "Skontaktuj się z naszym zespołem",
    "footer-corporate-tagline": "Ponad 100 lat niemieckiego dziedzictwa inżynieryjnego. Budowanie przyszłości globalnego przemysłu.",
    "footer-german-desc": "Założona w oparciu o niemieckie zasady Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst i Vertrauen od początku XX wieku w Hesji.",
    "footer-global-presence": "Globalna Obecność",
    "footer-regional-hq": "30 Regionalnych Siedzib",
    "footer-global-hq": "Centrala Globalna – TAKNISER GmbH",
    "footer-hq-location": "Hesja (Hessen), Niemcy",
    "footer-inquiries": "Portal Zapytań Korporacyjnych",
    "footer-admin-area": "Obszar Zarządzania Administratorem",
    "footer-copyright": "© 2026 TAKNISER ONE GLOBE (TAKNISER GmbH). Wszelkie prawa zastrzeżone. Ponad 100 lat niemieckiej doskonałości inżynieryjnej.",
    "footer-download-doc": "Pobierz Dokument Strony DOC",
    "footer-privacy": "Polityka Prywatności",
    "footer-terms": "Warunki Korzystania",
    "footer-global-footprint": "Globalny Ślad",
    "cap-eng": "Inżynieria i Konsulting",
    "cap-mfg": "Produkcja Przemysłowa",
    "cap-source": "Globalne Pozyskiwanie Strategiczne",
    "cap-procure": "Zamówienia Międzynarodowe",
    "cap-epc": "Dostawy Projektowe EPC",
    "cap-logistics": "Globalna Sieć Logistyczna",
  },
  ja: {
    // Utilities & Top bar
    "you-are-in": "現在の地域:",
    "global-offices": "グローバルオフィス",
    "heritage-about": "沿革と会社概要",
    "contact-hq": "本社に問い合わせる",
    "log-in": "ログイン",
    "support-community": "サポートとコミュニティ",
    "search-placeholder": "検索...",
    "search-platform": "プラットフォームを検索...",
    "contact-corporate": "企業窓口にお問い合わせ",
    "admin-login": "管理者ログイン",
    "close": "閉じる",

    // Nav Links
    "about-us": "会社概要",
    "vision-2046": "ビジョン 2046",
    "what-we-do": "事業案内",
    "capabilities": "事業機能",
    "industries": "サービス産業",
    "responsibility": "社会的責任",

    // About Section
    "about-takniser": "TAKNISERについて",
    "century-of": "一世紀にわたる",
    "legacy": "伝統と継承",
    "years-of-excellence": "年の卓越した歩み",
    "global-hub": "グローバルハブ",
    "worldwide-reach": "世界的なネットワーク",
    "operating-in-countries": "190カ国以上で事業を展開",
    "read-full-story": "ストーリーを読む",

    // Slide 1
    "s1-kicker": "ドイツの卓越したエンジニアリング",
    "s1-title": "未来をエンジニアリングする",
    "s1-highlight": "グローバル企業",
    "s1-desc": "世界190カ国以上で、産業製造、宇宙経済、国際貿易のイノベーションを先導。",
    "s1-primary": "当社の歴史と遺産",
    "s1-secondary": "グローバルネットワークを探索",

    // Slide 2
    "s2-kicker": "持続可能な地球と家族",
    "s2-title": "グローバルな責任を",
    "s2-highlight": "推進する",
    "s2-desc": "環境に配慮したイノベーションを育成し、コミュニティに力を与え、次世代への持続可能な遺産を築く。",
    "s2-primary": "当社の責任",
    "s2-secondary": "持続可能な地球",

    // Slide 3
    "s3-kicker": "7つの主要部門",
    "s3-title": "業界基準を",
    "s3-highlight": "再定義する",
    "s3-desc": "アグリテックやロボティクスから宇宙経済に至るまで、統合されたソリューションを提供し、強靭で先進的なグローバルライフスタイルを支える。",
    "s3-primary": "事業部門を探索",
    "s3-secondary": "機能を表示",

    // Right Showcase Card
    "showcase-heritage": "ヘッセンの遺産",
    "showcase-countries": "190カ国以上",
    "showcase-desc": "1世紀以上前にドイツのヘッセン州で誕生したTAKNISERは、専門的な電力システムエンジニアリングから、統合されたグローバル産業コングロマリットへと成長しました。",
    "showcase-roadmap": "Vision 2046 ロードマップ",
    "showcase-vision-desc": "当社の100年ビジョンを発見",

    // Footer Contact CTA
    "footer-ready": "TAKNISERと協業する準備はできていますか？",
    "footer-team-desc": "当社の産業スペシャリスト、エンジニア、調達専門家のグローバルチームが、お客様のビジネスニーズに合わせた統合ソリューションを提供する準備を整えています。",
    "footer-contact-team": "チームにお問い合わせ",
    "footer-corporate-tagline": "100年以上のドイツエンジニアリングの伝統。グローバル産業の未来を築く。",
    "footer-german-desc": "20世紀初頭のヘッセンにおけるドイツの精密、品質、信頼性、エンジニアリングの粋、そして信頼の原則に基づいて設立されました。",
    "footer-global-presence": "グローバル展開",
    "footer-regional-hq": "30の地域本部",
    "footer-global-hq": "グローバル本社 – TAKNISER GmbH",
    "footer-hq-location": "ドイツ ヘッセン州",
    "footer-inquiries": "企業お問い合わせポータル",
    "footer-admin-area": "管理者管理エリア",
    "footer-copyright": "© 2026 TAKNISER ONE GLOBE (TAKNISER GmbH). All rights reserved. 100年以上のドイツの卓越したエンジニアリング。",
    "footer-download-doc": "ウェブサイトドキュメントをダウンロード",
    "footer-privacy": "プライバシーポリシー",
    "footer-terms": "利用規約",
    "footer-global-footprint": "グローバル展開",
    "cap-eng": "エンジニアリング＆コンサルティング",
    "cap-mfg": "産業用製造",
    "cap-source": "グローバル戦略的調達",
    "cap-procure": "国際調達",
    "cap-epc": "EPC＆プロジェクトサプライ",
    "cap-logistics": "グローバル物流ネットワーク",
  },
  ko: {
    // Utilities & Top bar
    "you-are-in": "현재 위치:",
    "global-offices": "글로벌 사무소",
    "heritage-about": "회사 소개 및 연혁",
    "contact-hq": "본사 문의",
    "log-in": "로그인",
    "support-community": "지원 및 커뮤니티",
    "search-placeholder": "검색...",
    "search-platform": "플랫폼 검색...",
    "contact-corporate": "기업 문의 포털",
    "admin-login": "관리자 로그인",
    "close": "닫기",

    // Nav Links
    "about-us": "회사 소개",
    "vision-2046": "비전 2046",
    "what-we-do": "주요 사업",
    "capabilities": "핵심 역량",
    "industries": "서비스 산업",
    "responsibility": "사회적 책임",

    // About Section
    "about-takniser": "TAKNISER 소개",
    "century-of": "한 세기의",
    "legacy": "전통과 유산",
    "years-of-excellence": "년의卓越한 행보",
    "global-hub": "글로벌 허브",
    "worldwide-reach": "전 세계적 영향력",
    "operating-in-countries": "190개국 이상에서 운영 중",
    "read-full-story": "전체 스토리 보기",

    // Slide 1
    "s1-kicker": "독일 엔지니어링의 우수성",
    "s1-title": "미래를 설계하는",
    "s1-highlight": "글로벌 기업",
    "s1-desc": "전 세계 190여 개국에서 산업 제조, 우주 경제 및 국제 무역 혁신을 선도합니다.",
    "s1-primary": "우리의 역사와 유산",
    "s1-secondary": "글로벌 네트워크 탐색",

    // Slide 2
    "s2-kicker": "지속 가능한 지구와 가족",
    "s2-title": "글로벌 책임을",
    "s2-highlight": "선도하는",
    "s2-desc": "친환경 혁신을 육성하고 지역 사회에 힘을 실어 미래 세대를 위한 지속 가능한 유산을 구축합니다.",
    "s2-primary": "우리의 책임",
    "s2-secondary": "지속 가능한 지구",

    // Slide 3
    "s3-kicker": "7대 핵심 사업부",
    "s3-title": "산업 표준을",
    "s3-highlight": "재정의하는",
    "s3-desc": "애그테크와 로봇공학에서 우주 경제에 이르기까지 통합 솔루션을 제공하여 탄력적이고 진보된 글로벌 라이프스타일을 지원합니다.",
    "s3-primary": "사업부 탐색",
    "s3-secondary": "역량 보기",

    // Right Showcase Card
    "showcase-heritage": "헤센 엔지니어링 유산",
    "showcase-countries": "190개국 이상",
    "showcase-desc": "1세기 전 독일 헤센에서 시작된 TAKNISER는 전문 전력 시스템 엔지니어링에서 통합 글로벌 산업 대기업으로 성장했습니다.",
    "showcase-roadmap": "비전 2046 로드맵",
    "showcase-vision-desc": "우리의 100년 비전을 발견하세요",

    // Footer Contact CTA
    "footer-ready": "TAKNISER와 함께 일할 준비가 되셨습니까?",
    "footer-team-desc": "당사의 글로벌 산업 전문가, 엔지니어 및 조달 전문가 팀은 귀사의 비즈니스 요구에 부합하는 통합 솔루션을 제공할 준비가 되어 있습니다.",
    "footer-contact-team": "우리 팀에 문의하기",
    "footer-corporate-tagline": "100년 이상의 독일 엔지니어링 우수성. 글로벌 산업의 미래를 건설하다.",
    "footer-german-desc": "20세기 초 헤센에서 독일의 정밀성, 품질, 신뢰성, 엔지니어링 우수성 및 신뢰의 원칙을 바탕으로 설립되었습니다.",
    "footer-global-presence": "글로벌 입지",
    "footer-regional-hq": "30개 지역 본부",
    "footer-global-hq": "글로벌 본사 – TAKNISER GmbH",
    "footer-hq-location": "독일 헤센",
    "footer-inquiries": "기업 문의 포털",
    "footer-admin-area": "관리자 관리 페이지",
    "footer-copyright": "© 2026 TAKNISER ONE GLOBE (TAKNISER GmbH). All rights reserved. 100년 이상의 독일 엔지니어링의 우수성.",
    "footer-download-doc": "웹사이트 문서 다운로드 DOC",
    "footer-privacy": "개인정보 처리방침",
    "footer-terms": "이용 약관",
    "footer-global-footprint": "글로벌 발자취",
    "cap-eng": "엔지니어링 및 컨설팅",
    "cap-mfg": "산업 제조업",
    "cap-source": "글로벌 전략적 소싱",
    "cap-procure": "국제 조달",
    "cap-epc": "EPC 및 프로젝트 공급",
    "cap-logistics": "글로벌 물류 네트워크",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>("de");
  const [currentRegion, setCurrentRegion] = useState<RegionId>("global");

  // Load language settings on mount
  useEffect(() => {
    const userSelected = localStorage.getItem("takniser_user_selected_lang");
    const savedLang = localStorage.getItem("takniser_lang") as LanguageCode;
    const savedRegion = localStorage.getItem("takniser_region") as RegionId;

    if (userSelected === "true" && savedLang && DICTIONARY[savedLang]) {
      setCurrentLanguage(savedLang);
    } else {
      // Default to German when website opens
      setCurrentLanguage("de");
      localStorage.setItem("takniser_lang", "de");
    }
    if (savedRegion) {
      setCurrentRegion(savedRegion);
    }
  }, []);

  // Update DOM when language changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = currentLanguage;
      if (currentLanguage === "ar") {
        document.documentElement.dir = "rtl";
        document.documentElement.classList.add("rtl");
      } else {
        document.documentElement.dir = "ltr";
        document.documentElement.classList.remove("rtl");
      }
    }
  }, [currentLanguage]);

  const changeLanguageAndRegion = (lang: LanguageCode, region: RegionId) => {
    setCurrentLanguage(lang);
    setCurrentRegion(region);
    localStorage.setItem("takniser_lang", lang);
    localStorage.setItem("takniser_region", region);
    localStorage.setItem("takniser_user_selected_lang", "true");
  };

  const t = (key: string): string => {
    const translation = DICTIONARY[currentLanguage]?.[key] || DICTIONARY["de"]?.[key] || DICTIONARY["en"]?.[key] || key;
    return translation;
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        currentRegion,
        changeLanguageAndRegion,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
