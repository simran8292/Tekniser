"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Rocket,
  Pickaxe,
  Sprout,
  HeartPulse,
  Home,
  Bot,
  Sparkles,
  ShieldCheck,
  Layers,
  Cpu,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const ECOSYSTEM_DATA: Record<string, {
  platforms: {
    title: string;
    desc: string;
    icon: React.ElementType;
    color: string;
    href: string;
  }[];
  hero: {
    badge: string;
    title1: string;
    titleHighlight: string;
    desc: string;
  };
  interconnected: {
    kicker: string;
    title: string;
    titleHighlight: string;
    sub: string;
    desc: string;
    calloutKicker: string;
    calloutText: string;
    calloutBtn: string;
    bannerTitle1: string;
    bannerTitle2: string;
    bannerDesc: string;
  };
  divisionsHeader: {
    kicker: string;
    title: string;
    desc: string;
  };
  cardLabels: {
    strategicPlatform: string;
    explore: string;
    inquiry: string;
    mandate: string;
    overview: string;
    capabilities: string;
    categories: string;
  };
  divisions: {
    id: string;
    slug: string;
    title: string;
    tagline: string;
    lead: string;
    description1: string;
    description2: string;
    footer: string;
    icon: React.ElementType;
    image: string;
    categories: string[];
  }[];
  valueChain: {
    kicker: string;
    title: string;
    desc: string;
    stat1: string;
    stat2: string;
    stat3: string;
    stat4: string;
  };
  cta: {
    title1: string;
    titleHighlight: string;
    desc: string;
    btn1: string;
    btn2: string;
  };
}> = {
  de: {
    hero: {
      badge: "TAKNISER KONGLOMERAT-PORTFOLIO",
      title1: "Unsere",
      titleHighlight: "Geschäftsbereiche",
      desc: "Sieben transformative Sektoren, eine integrierte globale Plattform. TAKNISER ONE GLOBE verbindet industrielle Fertigung, Raumfahrtwirtschaft, strategische Mineralien, AgTech, LifeCare, intelligente Robotik und weltweiten Handel.",
    },
    interconnected: {
      kicker: "Vernetzte Vision",
      title: "DAS TAKNISER",
      titleHighlight: "INNOVATIONS-ÖKOSYSTEM",
      sub: "SIEBEN PLATTFORMEN. EINE VERNETZTE VISION.",
      desc: "Die größten Chancen der Welt existieren nicht isoliert. TAKNISER vereint sieben miteinander verbundene Geschäftsplattformen zu einem leistungsstarken Ökosystem für Innovation, Technologie und nachhaltiges Wachstum.",
      calloutKicker: "Gemeinsam treiben diese Plattformen",
      calloutText: "eine intelligentere, gesündere und nachhaltigere Zukunft voran.",
      calloutBtn: "Mehr erfahren",
      bannerTitle1: "Vielfältige Industrien.",
      bannerTitle2: "Ein Ökosystem.",
      bannerDesc: "Durch die Verknüpfung von Innovation, Fachwissen und weltweiten Partnerschaften schafft TAKNISER Lösungen, die den Fortschritt über Branchen und Generationen hinweg vorantreiben.",
    },
    platforms: [
      {
        title: "Raumfahrtintelligenz",
        desc: "Weltraumintelligenz kann die Landwirtschaft transformieren und Erntegesundheit, Bodenqualität und Landnutzung präzise überwachen.",
        icon: Rocket,
        color: "bg-[#009999]",
        href: "#space-economy",
      },
      {
        title: "Kritische Mineralien",
        desc: "Kritische Mineralien ermöglichen die Technologien von morgen und treiben saubere Energie, Elektrofahrzeuge und moderne Fertigung voran.",
        icon: Layers,
        color: "bg-[#1e40af]",
        href: "#mining-minerals",
      },
      {
        title: "KI & Robotik",
        desc: "KI beschleunigt wissenschaftliche Entdeckungen, optimiert Abläufe und schafft intelligentere, sicherere Industriezweige.",
        icon: Bot,
        color: "bg-[#6366f1]",
        href: "#robotics",
      },
      {
        title: "Biowissenschaften",
        desc: "Biowissenschaften erweitern das menschliche Potenzial und verbessern Gesundheit, Vitalität und Lebensqualität nachhaltig.",
        icon: HeartPulse,
        color: "bg-[#0f766e]",
        href: "#lifecare",
      },
      {
        title: "Globaler Handel",
        desc: "Globaler Handel bringt bahnbrechende Lösungen von einem Markt in die ganze Welt und schafft gemeinsamen Wohlstand.",
        icon: Globe,
        color: "bg-[#0284c7]",
        href: "#global-trading",
      },
      {
        title: "Technologie & Innovation",
        desc: "Technologie und Innovation vernetzen Menschen, Systeme und Ideen – für eine resilientere und intelligentere Zukunft.",
        icon: Cpu,
        color: "bg-[#7c3aed]",
        href: "#robotics",
      },
      {
        title: "Nachhaltigkeit",
        desc: "Nachhaltigkeit sichert den Fortschritt von heute, ohne das Morgen zu gefährden, im Einklang mit einem gesunden Planeten.",
        icon: Sprout,
        color: "bg-[#059669]",
        href: "#agtech",
      },
    ],
    divisionsHeader: {
      kicker: "KONGLOMERAT-ARCHITEKTUR • STRATEGISCHE ÖKOSYSTEME",
      title: "Die Geschäftsbereiche & Plattformen",
      desc: "Integrierte operative Einheiten, die spezialisierte Fähigkeiten, strategische Ökosysteme und weltweite industrielle Lieferketten bereitstellen.",
    },
    cardLabels: {
      strategicPlatform: "Strategische Plattform",
      explore: "Erkunden",
      inquiry: "Bereichsanfrage",
      mandate: "Strategischer Plattformauftrag",
      overview: "Ökosystem-Überblick",
      capabilities: "Operative Fähigkeiten",
      categories: "Produkt- & Dienstleistungskategorien",
    },
    divisions: [
      {
        id: "space-economy",
        slug: "space-economy",
        title: "Raumfahrtwirtschaft",
        tagline: "Die Zukunft über die Grenzen der Erde hinaus vorantreiben durch fortschrittliche Raumfahrttechnologien.",
        lead: "Wir blicken über die Erde hinaus, um die Welt unter uns zu verstehen, zu verbinden und zu stärken.",
        description1: "Satellitenintelligenz, Raumfahrttechnologien, Erdbeobachtung, Konnektivität und weltraumgestützte Anwendungen eröffnen neue Wege, unseren Planeten zu verstehen und neue Potenziale zu erschließen.",
        description2: "Spezialisierte Ingenieurskunst, Satellitenkomponenten, Startunterstützungssysteme und Orbitalelektronik für zukunftsweisende Raumfahrt- und Kommunikationsnetzwerke.",
        footer: "Von der Erdbeobachtung bis zur nächsten Grenze weltraumgestützter Industrien.",
        icon: Rocket,
        image: "/platform_space.jpg",
        categories: [
          "Satellitenkomponenten",
          "Weltraumkommunikation",
          "Erdbeobachtung",
          "Weltraumelektronik",
          "Startunterstützungstechnologien",
        ],
      },
      {
        id: "mining-minerals",
        slug: "mining-minerals",
        title: "Bergbau & Rohstoffe",
        tagline: "Das industrielle Wachstum der Welt durch verantwortungsvolle Rohstoffgewinnung und globalen Handel sichern.",
        lead: "Die transformativen Technologien von morgen erfordern die Ressourcen von heute.",
        description1: "TAKNISER erforscht kritische Mineralien, fortschrittliche Förderverfahren, Veredelung, Recycling, Ressourceneffizienz und zirkuläre Kreisläufe für widerstandsfähige Lieferketten.",
        description2: "Globale strategische Beschaffung und Versorgungsketten für lebenswichtige Metalle und Seltene Erden für grüne Technologien, Elektronik und Schwerindustrie.",
        footer: "Ressourcen in verantwortungsvolle Wege für den Fortschritt verwandeln.",
        icon: Pickaxe,
        image: "/platform_mining.jpg",
        categories: [
          "Kupfer",
          "Lithium",
          "Nickel",
          "Seltene Erden",
          "Aluminium",
          "Graphit",
          "Handel mit kritischen Mineralien",
          "Kohle",
        ],
      },
      {
        id: "agtech",
        slug: "agtech",
        title: "AgTech",
        tagline: "Nachhaltige Landwirtschaft durch moderne Anbautechnologien und globale Agrarlieferketten aufbauen.",
        lead: "Ernährungssicherheit ist eine der prägendsten Herausforderungen der Menschheit.",
        description1: "Wir erforschen Präzisionslandwirtschaft, intelligente Bewässerung, regenerative Landwirtschaft, kontrollierte Umgebungen und datengesteuerte Nahrungsmittelsysteme.",
        description2: "Fortschrittliche Bewässerungssysteme, ertragreiche Saatgüter, umweltfreundliche Düngemittel und automatisierte Lebensmittelverarbeitungsanlagen.",
        footer: "Mehr anbauen. Weniger verschwenden. Mehr regenerieren.",
        icon: Sprout,
        image: "/platform_agtech.jpg",
        categories: [
          "Bewässerungssysteme",
          "Düngemittel",
          "Saatgut",
          "Landwirtschaftliche Maschinen",
          "Lebensmittelverarbeitung",
        ],
      },
      {
        id: "lifecare",
        slug: "lifecare",
        title: "LifeCare",
        tagline: "Innovative Gesundheitstechnologien liefern, die das menschliche Leben weltweit verbessern.",
        lead: "Die Zukunft des Gesundheitswesens bewegt sich von der Behandlung hin zu Prävention, Personalisierung und Langlebigkeit.",
        description1: "TAKNISER erforscht Medizintechnologien, Biotechnologie, Diagnostik, präventive Lösungen und Biowissenschaften zur Steigerung der menschlichen Lebensqualität.",
        description2: "Präzisionsdiagnostik, Krankenhausinfrastruktur, biotechnologische Integration und Beschaffung hochreiner Pharmazeutika.",
        footer: "Technologie mit einem einzigen Zweck: ein besseres Leben.",
        icon: HeartPulse,
        image: "/platform_lifecare.jpg",
        categories: [
          "Medizinprodukte",
          "Krankenhausausstattung",
          "Pharmazeutika",
          "Biotechnologie",
          "Diagnostikgeräte",
        ],
      },
      {
        id: "lifestyle",
        slug: "lifestyle",
        title: "Lifestyle",
        tagline: "Den Alltag durch hochwertige Konsumgüter und intelligente Lifestyle-Lösungen bereichern.",
        lead: "Innovation sollte letztendlich die Art und Weise verbessern, wie Menschen leben.",
        description1: "Wir erforschen nachhaltige Produkte, intelligente Umgebungen, verantwortungsvollen Konsum und Technologien, die das tägliche Leben vernetzter und komfortabler gestalten.",
        description2: "Hochwertige Haushaltsgeräte, Smart-Home-Automatisierung, Wellness-Technologie und technische Textilien für globale Märkte.",
        footer: "Bessere Produkte. Bessere Erfahrungen. Besseres Leben.",
        icon: Home,
        image: "/platform_lifestyle.jpg",
        categories: [
          "Haushaltsgeräte",
          "Smart Home",
          "Körperpflege",
          "Wellness",
          "Textilien",
        ],
      },
      {
        id: "robotics",
        slug: "robotics",
        title: "Robotik",
        tagline: "Industrie 4.0 mit intelligenter Automatisierung und KI-gestützten Industrielösungen beschleunigen.",
        lead: "Die nächste industrielle Revolution wird menschliche Fähigkeiten nicht ersetzen – sie wird sie vervielfachen.",
        description1: "TAKNISER entwickelt intelligente Maschinen, Industrieautomation, Robotik und KI-Systeme für komplexe, repetitive oder gefährliche Aufgabenbereiche.",
        description2: "Modernste Industrieroboterarme, Autonome Mobile Roboter (AMR), intelligente Lagerhausautomatisierung und fabrikmusterübergreifende cyber-physische Integration.",
        footer: "Maschinen, die erweitern, was die Menschheit erreichen kann.",
        icon: Bot,
        image: "/clean_robotics.jpg",
        categories: [
          "Industrieroboter",
          "Lagerautomation",
          "KI-Robotik",
          "AMRs (Autonome Mobile Roboter)",
          "Fabrikautomation",
        ],
      },
      {
        id: "global-trading",
        slug: "global-trading",
        title: "Globaler Handel",
        tagline: "Hersteller, Industrien, Regierungen und Märkte über ein integriertes internationales Handelsnetzwerk verbinden.",
        lead: "Große Innovationen haben wenig Wirkung, wenn sie die Welt nicht erreichen können.",
        description1: "Die Handelsplattform von TAKNISER verbindet Hersteller, Ressourcen, Märkte und Kunden über Grenzen hinweg – und schafft Wege von der Entdeckung zur Bereitstellung.",
        description2: "Grenzüberschreitende Rohstofflieferketten, Energiehandel, Beschaffung für Verteidigung und Luft- und Raumfahrt sowie weltweite Komponentenverteilung.",
        footer: "Ideen, Produkte und Möglichkeiten mit den Märkten verbinden, die sie benötigen.",
        icon: Globe,
        image: "/platform_trading.jpg",
        categories: [
          "Energie",
          "Elektrotechnik",
          "Elektronik",
          "Verteidigung & Raumfahrt",
          "Agrarhandel",
          "Metall",
        ],
      },
    ],
    valueChain: {
      kicker: "INTEGRIERTE WERTSCHÖPFUNGSKETTE",
      title: "Ein vernetztes Industrie-Ökosystem",
      desc: "Durch die Vereinigung von Raumfahrtinfrastruktur, strategischer Rohstoffbeschaffung, Agrartechnologie, Biowissenschaften, Konsumgütern, intelligenter Robotik und weltweitem Handel bietet TAKNISER umfassende, sektorübergreifende Industrielösungen in über 190 Ländern.",
      stat1: "Kernsektoren",
      stat2: "Belieferte Länder",
      stat3: "Operative Einheiten",
      stat4: "Jahre Tradition",
    },
    cta: {
      title1: "Partner unserer",
      titleHighlight: "Geschäftsbereiche werden",
      desc: "Kontaktieren Sie unsere Bereichsleitung, um Joint Ventures, industrielle Lieferverträge, grenzüberschreitende Beschaffung und strategische Partnerschaften zu besprechen.",
      btn1: "Geschäftsbereiche kontaktieren",
      btn2: "Globales Netzwerk erkunden",
    },
  },
  en: {
    hero: {
      badge: "TAKNISER CONGLOMERATE PORTFOLIO",
      title1: "Our",
      titleHighlight: "Business Divisions",
      desc: "Seven transformative sectors, one integrated global platform. TAKNISER ONE GLOBE connects industrial manufacturing, space economy, strategic minerals, AgTech, LifeCare, intelligent robotics, and international trade.",
    },
    interconnected: {
      kicker: "Interconnected Vision",
      title: "THE TAKNISER",
      titleHighlight: "INNOVATION ECOSYSTEM",
      sub: "SEVEN PLATFORMS. ONE CONNECTED VISION.",
      desc: "The world's greatest opportunities do not exist in isolation. TAKNISER brings together seven interconnected business platforms, creating a powerful ecosystem of innovation, technology and sustainable growth.",
      calloutKicker: "Together, These Platforms",
      calloutText: "Power a Smarter, Healthier, More Sustainable Future.",
      calloutBtn: "Learn More",
      bannerTitle1: "Multiple Industries.",
      bannerTitle2: "One Ecosystem.",
      bannerDesc: "By connecting innovation, expertise and global partnerships, TAKNISER creates solutions that drive progress across industries and generations.",
    },
    platforms: [
      {
        title: "Space Intelligence",
        desc: "Space intelligence can transform agriculture, helping to monitor crop health, soil quality and land use.",
        icon: Rocket,
        color: "bg-[#009999]",
        href: "#space-economy",
      },
      {
        title: "Critical Minerals",
        desc: "Critical minerals enable the technologies of tomorrow, powering clean energy, EVs and advanced manufacturing.",
        icon: Layers,
        color: "bg-[#1e40af]",
        href: "#mining-minerals",
      },
      {
        title: "AI & Robotics",
        desc: "AI can accelerate scientific discovery, optimize operations and create smarter, safer industries.",
        icon: Bot,
        color: "bg-[#6366f1]",
        href: "#robotics",
      },
      {
        title: "Life Sciences",
        desc: "Life sciences can extend human potential, improving health, longevity and quality of life.",
        icon: HeartPulse,
        color: "bg-[#0f766e]",
        href: "#lifecare",
      },
      {
        title: "Global Trade",
        desc: "Global trade can take breakthrough solutions from one market to the world, creating shared prosperity.",
        icon: Globe,
        color: "bg-[#0284c7]",
        href: "#global-trading",
      },
      {
        title: "Technology & Innovation",
        desc: "Technology and innovation connect people, systems and ideas—building a smarter, more resilient future.",
        icon: Cpu,
        color: "bg-[#7c3aed]",
        href: "#robotics",
      },
      {
        title: "Sustainability",
        desc: "Sustainability ensures progress today without compromising tomorrow, balancing growth with a healthier planet.",
        icon: Sprout,
        color: "bg-[#059669]",
        href: "#agtech",
      },
    ],
    divisionsHeader: {
      kicker: "CONGLOMERATE ARCHITECTURE • STRATEGIC ECOSYSTEMS",
      title: "The Business Divisions & Platforms",
      desc: "Integrated operational entities delivering specialized capabilities, strategic ecosystems, and worldwide industrial supply chains.",
    },
    cardLabels: {
      strategicPlatform: "Strategic Platform",
      explore: "Explore",
      inquiry: "Division Inquiry",
      mandate: "Platform Strategic Mandate",
      overview: "Ecosystem Overview",
      capabilities: "Operational Capabilities",
      categories: "Product & Service Categories",
    },
    divisions: [
      {
        id: "space-economy",
        slug: "space-economy",
        title: "Space Economy",
        tagline: "Driving the future beyond Earth through advanced space technologies and aerospace partnerships.",
        lead: "We look beyond Earth to understand, connect and enable the world beneath us.",
        description1: "Satellite intelligence, space technologies, Earth observation, connectivity and emerging space applications unlock new ways to understand our planet and manage resources.",
        description2: "Specialized engineering, satellite components, launch support systems, and orbital electronics empowering next-generation space exploration.",
        footer: "From Earth observation to the next frontier of space-enabled industries.",
        icon: Rocket,
        image: "/platform_space.jpg",
        categories: [
          "Satellite Components",
          "Space Communications",
          "Earth Observation",
          "Space Electronics",
          "Launch Support Technologies",
        ],
      },
      {
        id: "mining-minerals",
        slug: "mining-minerals",
        title: "Mining & Minerals",
        tagline: "Supporting industrial growth through responsible mining, processing, and global mineral trading.",
        lead: "The technologies transforming tomorrow require the resources of today.",
        description1: "TAKNISER explores critical minerals, advanced extraction, processing, recycling, and circular models to build resilient global supply chains.",
        description2: "Global strategic sourcing and critical mineral supply chains supplying essential metals and rare earth elements for green transition and industry.",
        footer: "Turning resources into responsible pathways for progress.",
        icon: Pickaxe,
        image: "/platform_mining.jpg",
        categories: [
          "Copper",
          "Lithium",
          "Nickel",
          "Rare Earth Elements",
          "Aluminum",
          "Graphite",
          "Critical Mineral Trading",
          "Coal",
        ],
      },
      {
        id: "agtech",
        slug: "agtech",
        title: "AgTech",
        tagline: "Building sustainable agriculture through modern farming technologies and global Agri supply chains.",
        lead: "Food security is one of humanity's defining challenges.",
        description1: "We explore precision agriculture, smart irrigation, regenerative farming, controlled environments, and next-generation food systems.",
        description2: "Advanced precision irrigation, high-yield seeds, eco-friendly fertilizers, and automated food processing equipment.",
        footer: "Growing more. Wasting less. Restoring more.",
        icon: Sprout,
        image: "/platform_agtech.jpg",
        categories: [
          "Irrigation Systems",
          "Fertilizers",
          "Seeds",
          "Agricultural Machinery",
          "Food Processing",
        ],
      },
      {
        id: "lifecare",
        slug: "lifecare",
        title: "LifeCare",
        tagline: "Delivering innovative healthcare technologies that improve lives worldwide.",
        lead: "The future of healthcare is moving from treatment toward prevention, personalization and longevity.",
        description1: "TAKNISER explores healthcare technologies, biotechnology, wellness, diagnostics, and emerging life-science opportunities.",
        description2: "Precision medical diagnostic systems, hospital infrastructure equipment, biotechnology integration, and pharmaceutical sourcing.",
        footer: "Technology with one purpose: a better life.",
        icon: HeartPulse,
        image: "/platform_lifecare.jpg",
        categories: [
          "Medical Devices",
          "Hospital Equipment",
          "Pharmaceuticals",
          "Biotechnology",
          "Diagnostics Equipment",
        ],
      },
      {
        id: "lifestyle",
        slug: "lifestyle",
        title: "Lifestyle",
        tagline: "Enhancing everyday living through quality consumer products and smart lifestyle solutions.",
        lead: "Innovation should ultimately improve how people live.",
        description1: "We explore sustainable products, intelligent environments, responsible consumption, and technologies that make everyday life more connected.",
        description2: "High-grade consumer appliances, smart home automation hubs, wellness technology, and engineered textiles.",
        footer: "Better products. Better experiences. Better living.",
        icon: Home,
        image: "/platform_lifestyle.jpg",
        categories: [
          "Consumer Appliances",
          "Smart Home",
          "Personal Care",
          "Wellness",
          "Fabric",
        ],
      },
      {
        id: "robotics",
        slug: "robotics",
        title: "Robotics",
        tagline: "Accelerating Industry 4.0 with intelligent automation and AI-driven industrial solutions.",
        lead: "The next industrial revolution will not simply replace human capability — it will amplify it.",
        description1: "TAKNISER explores intelligent machines, industrial automation, robotics, and AI-enabled systems designed for complex tasks.",
        description2: "State-of-the-art industrial arm robots, Autonomous Mobile Robots (AMRs), smart warehouse automation, and factory-wide integration.",
        footer: "Machines that extend what humanity can achieve.",
        icon: Bot,
        image: "/clean_robotics.jpg",
        categories: [
          "Industrial Robots",
          "Warehouse Automation",
          "AI Robotics",
          "AMRs (Autonomous Mobile Robots)",
          "Factory Automation",
        ],
      },
      {
        id: "global-trading",
        slug: "global-trading",
        title: "Global Trading",
        tagline: "Connecting manufacturers, industries, governments, and global markets through international trade.",
        lead: "Great innovation has little impact if it cannot reach the world.",
        description1: "TAKNISER's global trading platform connects manufacturers, technologies, resources, and markets across borders.",
        description2: "Cross-border multi-commodity supply chains, energy trading, defence & aerospace procurement, and industrial component distribution.",
        footer: "Connecting ideas, products and possibilities with the markets that need them.",
        icon: Globe,
        image: "/platform_trading.jpg",
        categories: [
          "Energy",
          "Electrical",
          "Electronics",
          "Defence & Aerospace",
          "Agri Trade",
          "Metal",
        ],
      },
    ],
    valueChain: {
      kicker: "INTEGRATED VALUE CHAIN",
      title: "One Connected Industrial Ecosystem",
      desc: "By unifying space infrastructure, strategic mineral sourcing, agricultural technology, life sciences, consumer lifestyle, intelligent robotics, and global trade, TAKNISER provides comprehensive, cross-sector industrial solutions across 190+ countries.",
      stat1: "Core Sectors",
      stat2: "Countries Served",
      stat3: "Operating Entities",
      stat4: "Years Heritage",
    },
    cta: {
      title1: "Partner with Our",
      titleHighlight: "Business Divisions",
      desc: "Connect with our division leadership to explore joint ventures, industrial supply agreements, cross-border procurement, and strategic partnerships.",
      btn1: "Contact Business Divisions",
      btn2: "Explore Global Network",
    },
  },
  ar: {
    hero: {
      badge: "محفظة مجموعة تاكنيسر",
      title1: "قطاعاتنا",
      titleHighlight: "التجارية والصناعية",
      desc: "سبعة قطاعات تحويلية، منصة عالمية واحدة متكاملة. تجمع تاكنيسر ون جلوب بين التصنيع الصناعي، واقتصاد الفضاء، والمعادن الاستراتيجية، والتكنولوجيا الزراعية، والرعاية الصحية، والروبوتات الذكية، والتجارة الدولية.",
    },
    interconnected: {
      kicker: "رؤية مترابطة",
      title: "منظومة تاكنيسر",
      titleHighlight: "للابتكار الشامل",
      sub: "سبع منصات. رؤية متكاملة واحدة.",
      desc: "أعظم الفرص العالمية لا توجد بمعزل عن غيرها. تجمع تاكنيسر سبع منصات أعمال مترابطة لبناء منظومة متطورة للابتكار والتكنولوجيا والنمو المستدام.",
      calloutKicker: "معاً تدفع هذه المنصات",
      calloutText: "نحو مستقبل أكثر ذكاءً وصحة واستدامة.",
      calloutBtn: "معرفة المزيد",
      bannerTitle1: "صناعات متعددة.",
      bannerTitle2: "منظومة واحدة.",
      bannerDesc: "من خلال ربط الابتكار والخبرة والشراكات الدولية، تقدم تاكنيسر حلولاً تدفع عجلة التقدم عبر مختلف القطاعات والأجيال.",
    },
    platforms: [
      {
        title: "استخبارات الفضاء",
        desc: "تُحدث تكنولوجيا الفضاء ثورة في مراقبة المحاصيل وصحة التربة وإدارة الموارد الطبيعية بدقة غير مسبوقة.",
        icon: Rocket,
        color: "bg-[#009999]",
        href: "#space-economy",
      },
      {
        title: "المعادن الاستراتيجية",
        desc: "المعادن الحيوية تقود تقنيات الغد وتوفر الطاقة النظيفة وتصنيع السيارات الكهربائية المتطورة.",
        icon: Layers,
        color: "bg-[#1e40af]",
        href: "#mining-minerals",
      },
      {
        title: "الذكاء الاصطناعي والروبوتات",
        desc: "يسرع الذكاء الاصطناعي الاكتشافات العلمية ويحسن العمليات التشغيلية لبيئات صناعية أكثر أماناً وذكاءً.",
        icon: Bot,
        color: "bg-[#6366f1]",
        href: "#robotics",
      },
      {
        title: "علوم الحياة",
        desc: "تعمل علوم الحياة على تحسين الصحة وجودة الحياة وإطالة العمر الافتراضي للإنسان.",
        icon: HeartPulse,
        color: "bg-[#0f766e]",
        href: "#lifecare",
      },
      {
        title: "التجارة العالمية",
        desc: "تنقل التجارة العالمية الحلول الرائدة من سوق محلي إلى العالم بأسره لتحقيق الازدهار المشترك.",
        icon: Globe,
        color: "bg-[#0284c7]",
        href: "#global-trading",
      },
      {
        title: "التكنولوجيا والابتكار",
        desc: "تربط التكنولوجيا المتقدمة بين الأفراد والأنظمة لإنشاء مستقبل صناعي قوي ومستدام.",
        icon: Cpu,
        color: "bg-[#7c3aed]",
        href: "#robotics",
      },
      {
        title: "الاستدامة",
        desc: "تضمن الاستدامة استمرارية التقدم اليوم دون المساس باحتياجات الغد لمجتمع وبيئة أفضل.",
        icon: Sprout,
        color: "bg-[#059669]",
        href: "#agtech",
      },
    ],
    divisionsHeader: {
      kicker: "الهيكلية المؤسسية • المنظومات الاستراتيجية",
      title: "القطاعات والمنصات التشغيلية",
      desc: "كيانات تشغيلية متكاملة تقدم قدرات متخصصة وسلاسل توريد صناعية وتجارية موثوقة حول العالم.",
    },
    cardLabels: {
      strategicPlatform: "منصة استراتيجية",
      explore: "استكشاف",
      inquiry: "استفسار عن القطاع",
      mandate: "المهمة الاستراتيجية للمنصة",
      overview: "نظرة عامة على المنظومة",
      capabilities: "القدرات التشغيلية",
      categories: "فئات المنتجات والخدمات",
    },
    divisions: [
      {
        id: "space-economy",
        slug: "space-economy",
        title: "اقتصاد الفضاء",
        tagline: "قيادة المستقبل لما وراء كوكب الأرض عبر تقنيات فضائية متقدمة وشراكات طيران عالمية.",
        lead: "نتطلع إلى ما وراء الأرض لنفهم العالم من حولنا ونمكنه من التطور والازدهار.",
        description1: "تفتح استخبارات الأقمار الصناعية ومراقبة الأرض وتطبيقات الفضاء آفاقاً غير مسبوقة لإدارة الموارد وتطوير البنية التحتية.",
        description2: "هندسة تصنيع متخصصة، ومكونات الأقمار الصناعية، وأنظمة دعم الإطلاق، وإلكترونيات المدارات الفضائية.",
        footer: "من مراقبة الأرض إلى آفاق الصناعات المعتمدة على الفضاء.",
        icon: Rocket,
        image: "/platform_space.jpg",
        categories: [
          "مكونات الأقمار الصناعية",
          "اتصالات الفضاء",
          "مراقبة الأرض",
          "إلكترونيات الفضاء",
          "تقنيات دعم الإطلاق",
        ],
      },
      {
        id: "mining-minerals",
        slug: "mining-minerals",
        title: "التعدين والمعادن",
        tagline: "دعم النمو الصناعي العالمي عبر التعدين المسؤول والمعالجة وتجارة المعادن الاستراتيجية.",
        lead: "التقنيات التي تغير معالم الغد تتطلب تأمين موارد اليوم الحيوية.",
        description1: "تستكشف تاكنيسر المعادن الاستراتيجية وطرق الاستخراج المتقدمة وإعادة التدوير والنماذج الدائرية لبناء سلاسل إمداد مرنة.",
        description2: "سلاسل إمداد وتوريد دولية للمعادن الأساسية والعناصر الأرضية النادرة للصناعات الثقيلة والتحول الأخضر.",
        footer: "تحويل الموارد الطبيعية إلى مسارات مسؤولة للتقدم والازدهار.",
        icon: Pickaxe,
        image: "/platform_mining.jpg",
        categories: [
          "النحاس",
          "الليثيوم",
          "النيكل",
          "العناصر الأرضية النادرة",
          "الألومنيوم",
          "الجرافيت",
          "تجارة المعادن الحيوية",
          "الفحم",
        ],
      },
      {
        id: "agtech",
        slug: "agtech",
        title: "التكنولوجيا الزراعية",
        tagline: "بناء زراعة مستدامة من خلال تقنيات الزراعة الحديثة وتصنيع الأغذية وسلاسل التوريد العالمية.",
        lead: "يعد الأمن الغذائي أحد أهم التحديات التي تواجه البشرية اليوم.",
        description1: "نستكشف الزراعة الدقيقة والري الذكي والزراعة التجديدية والبيئات المغلقة والأنظمة الغذائية المتطورة.",
        description2: "أنظمة ري متقدمة، وبذور عالية الإنتاجية، وأسمدة صديقة للبيئة، ومعدات معالجة الأغذية المؤتمتة.",
        footer: "زراعة أكثر. هدر أقل. تجدد دائم.",
        icon: Sprout,
        image: "/platform_agtech.jpg",
        categories: [
          "أنظمة الري الحديثة",
          "الأسمدة الزراعية",
          "البذور المحسنة",
          "الآلات الزراعية",
          "معالجة الأغذية",
        ],
      },
      {
        id: "lifecare",
        slug: "lifecare",
        title: "الرعاية الصحية",
        tagline: "تقديم تقنيات رعاية صحية مبتكرة تعزز وتحسن حياة المجتمعات حول العالم.",
        lead: "ينتقل مستقبل الرعاية الصحية من مجرد العلاج إلى الوقاية والتخصيص وجودة الحياة المستدامة.",
        description1: "تستكشف تاكنيسر التقنيات الطبية والتكنولوجيا الحيوية والتشخيص والحلول الوقائية لتعزيز جودة الحياة.",
        description2: "أنظمة تشخيص طبي دقيقة، ومعدات المستشفيات الحديثة، والحلول الحيوية، وتوريد الأدوية والمستحضرات المعتمدة.",
        footer: "تكنولوجيا مكرسة لهدف نبيل واحد: حياة أفضل للإنسان.",
        icon: HeartPulse,
        image: "/platform_lifecare.jpg",
        categories: [
          "الأجهزة الطبية",
          "معدات المستشفيات",
          "المستحضرات الدوائية",
          "التكنولوجيا الحيوية",
          "أجهزة التشخيص الدقيقة",
        ],
      },
      {
        id: "lifestyle",
        slug: "lifestyle",
        title: "أسلوب الحياة",
        tagline: "الارتقاء بالحياة اليومية من خلال منتجات استهلاكية راقية وحلول الحياة الذكية.",
        lead: "يجب أن يؤدي الابتكار في النهاية إلى تحسين سبل معيشة الناس وراحتهم.",
        description1: "نستكشف المنتجات المستدامة والبيئات الذكية والاستهلاك المسؤول والتقنيات التي تجعل الحياة اليومية أكثر كفاءة.",
        description2: "أجهزة استهلاكية عالية الجودة، وأنظمة المنازل الذكية، وتقنيات العافية، والمنسوجات الهندسية المتقدمة.",
        footer: "منتجات أفضل. تجارب أرقى. حياة أسعد.",
        icon: Home,
        image: "/platform_lifestyle.jpg",
        categories: [
          "الأجهزة المنزلية",
          "المنازل الذكية",
          "العناية الشخصية",
          "العافية والراحة",
          "المنسوجات والأقمشة",
        ],
      },
      {
        id: "robotics",
        slug: "robotics",
        title: "الروبوتات والأتمتة",
        tagline: "تسريع الثورة الصناعية الرابعة من خلال الأتمتة الذكية والحلول الصناعية المعتمدة على الذكاء الاصطناعي.",
        lead: "الثورة الصناعية القادمة لن تحل محل القدرات البشرية، بل ستضاعف قوتها وإمكانياتها.",
        description1: "تطور تاكنيسر الآلات الذكية والأتمتة الصناعية والروبوتات والأنظمة المؤتمتة للمهام المعقدة أو الخطرة.",
        description2: "أذرع روبوتية صناعية متطورة، وروبوتات متنقلة ذاتية القيادة (AMR)، وأتمتة المستودعات والمصانع الذكية.",
        footer: "آلات توسع آفاق ما يمكن للبشرية تحقيقه.",
        icon: Bot,
        image: "/clean_robotics.jpg",
        categories: [
          "الروبوتات الصناعية",
          "أتمتة المستودعات",
          "روبوتات الذكاء الاصطناعي",
          "الروبوتات المتنقلة المستقلة",
          "أتمتة المصانع الشاملة",
        ],
      },
      {
        id: "global-trading",
        slug: "global-trading",
        title: "التجارة الدولية",
        tagline: "ربط المصنعين والصناعات والحكومات والأسواق الدولية عبر منظومة تجارية عالمية متكاملة.",
        lead: "الابتكار العظيم لا يحقق أثره الحقيقي إلا إذا وصل إلى العالم أجمع.",
        description1: "تربط منصة التجارة الدولية لتاكنيسر المصنعين والموارد والتقنيات والأسواق لتمكين تدفق الابتكارات عبر القارات.",
        description2: "سلاسل إمداد متعددة السلع، وتجارة الطاقة، ومشتريات الدفاع والفضاء، وتوزيع المكونات الصناعية الاستراتيجية.",
        footer: "ربط الأفكار والمنتجات والإمكانيات بالأسواق التي تحتاجها.",
        icon: Globe,
        image: "/platform_trading.jpg",
        categories: [
          "قطاع الطاقة",
          "الأنظمة الكهربائية",
          "الإلكترونيات المتقدمة",
          "الدفاع وصناعات الفضاء",
          "التجارة الزراعية",
          "المعادن الصناعية",
        ],
      },
    ],
    valueChain: {
      kicker: "سلسلة القيمة المتكاملة",
      title: "منظومة صناعية عالمية متصلة",
      desc: "من خلال توحيد البنية التحتية للفضاء، ومصادر المعادن الاستراتيجية، والتكنولوجيا الزراعية، والعلوم الطبية، والأجهزة الاستهلاكية، والروبوتات، والتجارة العالمية، تقدم تاكنيسر حلولاً صناعية متكاملة في أكثر من 190 دولة.",
      stat1: "قطاعات رئيسية",
      stat2: "دولة حول العالم",
      stat3: "كياناً تشغيلياً",
      stat4: "عاماً من التراث",
    },
    cta: {
      title1: "كن شريكاً مع",
      titleHighlight: "قطاعاتنا الصناعية",
      desc: "تواصل مع قيادة قطاعاتنا لاستكشاف المشاريع المشتركة، وعقود التوريد الصناعي، والمشتريات الدولية، والشراكات الاستراتيجية.",
      btn1: "تواصل مع القطاعات الصناعية",
      btn2: "استكشف الشبكة الدولية",
    },
  },
};

export default function DivisionsContent() {
  const { currentLanguage } = useLanguage();
  const data = ECOSYSTEM_DATA[currentLanguage] || ECOSYSTEM_DATA["de"] || ECOSYSTEM_DATA["en"];

  return (
    <div className={`pt-24 min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#009999] selection:text-white ${currentLanguage === 'ar' ? 'rtl text-right' : 'text-left'}`}>

      {/* ─────────────────────────────────────────────────────────────
          PAGE HERO SECTION (Siemens Executive Dark with Themed Faded Background)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_industrial_bg.png"
            alt="TAKNISER Core Divisions Platform"
            fill
            priority
            className="object-cover opacity-55 filter contrast-110 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/80 via-[#001822]/60 to-[#001822]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,24,34,0.7)_90%)] pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/70 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#009999]" />
            <span>{data.hero.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            {data.hero.title1} <span className="text-[#009999]">{data.hero.titleHighlight}</span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            {data.hero.desc}
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-2 max-w-4xl mx-auto">
            {data.divisions.map((div) => (
              <a
                key={div.id}
                href={`#${div.id}`}
                className="px-3.5 py-1.5 text-xs font-semibold bg-[#002d3b]/80 border border-slate-700 text-slate-300 hover:text-white hover:border-[#009999] transition-all rounded-none"
              >
                {div.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          THE TAKNISER INNOVATION ECOSYSTEM - SEVEN PLATFORMS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

            {/* Column 1 (Header, 7 Cards Grid, Bottom Callout) */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6">
              <div className={`flex items-center gap-2 text-xs font-bold text-[#009999] tracking-widest uppercase ${currentLanguage === 'ar' ? 'justify-end' : ''}`}>
                <span className="w-6 h-0.5 bg-[#009999]" />
                <span>{data.interconnected.kicker}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#002d3b] uppercase tracking-tight leading-tight">
                {data.interconnected.title}{" "}
                <span className="text-[#009999]">
                  {data.interconnected.titleHighlight}
                </span>
              </h2>

              <div className="space-y-2.5">
                <p className="text-xs sm:text-sm font-extrabold text-[#002d3b] uppercase tracking-wider">
                  {data.interconnected.sub}
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl">
                  {data.interconnected.desc}
                </p>
              </div>

              {/* 7 Cards Grid (2 columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {data.platforms.map((card, idx) => {
                  const IconComp = card.icon;
                  return (
                    <a
                      key={idx}
                      href={card.href}
                      className="bg-white border border-slate-200/90 p-3.5 sm:p-4 rounded-xl flex flex-col justify-between hover:border-[#009999] hover:shadow-md transition-all group"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-8 h-8 rounded-lg ${card.color} text-white flex items-center justify-center shrink-0 shadow-sm`}
                          >
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span className="text-xs sm:text-[0.825rem] font-bold text-[#002d3b] group-hover:text-[#009999] transition-colors">
                            {card.title}
                          </span>
                        </div>
                        <span className={`text-slate-400 group-hover:text-[#009999] transition-all text-sm ${currentLanguage === 'ar' ? 'group-hover:-translate-x-0.5 rotate-180' : 'group-hover:translate-x-0.5'}`}>
                          &rarr;
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mt-2.5">
                        {card.desc}
                      </p>
                    </a>
                  );
                })}
              </div>

              {/* Bottom Callout Banner */}
              <div className="bg-[#f0fdfa] border border-[#ccfbf1] p-3.5 sm:p-4 rounded-xl flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#99f6e4] text-[#009999] flex items-center justify-center shrink-0 shadow-sm text-lg font-bold">
                    &infin;
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#009999] uppercase tracking-wider block">
                      {data.interconnected.calloutKicker}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#002d3b]">
                      {data.interconnected.calloutText}
                    </p>
                  </div>
                </div>
                <a
                  href="#divisions"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-[#99f6e4] text-xs font-bold text-[#009999] hover:bg-[#009999] hover:text-white transition-all rounded-lg shrink-0 shadow-sm"
                >
                  <span>{data.interconnected.calloutBtn}</span>
                  <span className={currentLanguage === 'ar' ? 'rotate-180' : ''}>&rarr;</span>
                </a>
              </div>
            </div>

            {/* Column 2 (Artwork + Crisp Banner) */}
            <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center lg:items-end">
              <div className="w-full max-w-[620px] space-y-4">
                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group bg-slate-50">
                  <Image
                    src="/innovation_ecosystem_artwork.jpg"
                    alt="The TAKNISER Innovation Ecosystem - Interconnected Platforms"
                    width={1058}
                    height={1076}
                    priority
                    className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>

                <div className="bg-[#002230] text-white p-5 sm:p-6 lg:p-7 rounded-2xl border border-slate-800 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-8">
                    <div className="sm:w-5/12 border-b sm:border-b-0 sm:border-r border-slate-700/80 pb-3 sm:pb-0 sm:pr-6">
                      <span className="w-7 h-1 bg-[#009999] block mb-2.5" />
                      <h4 className="text-base sm:text-lg lg:text-xl font-serif font-bold text-white tracking-tight leading-snug">
                        {data.interconnected.bannerTitle1}
                        <br />
                        {data.interconnected.bannerTitle2}
                      </h4>
                    </div>
                    <div className="sm:w-7/12">
                      <p className="text-xs sm:text-[0.825rem] text-slate-300 leading-relaxed font-normal">
                        {data.interconnected.bannerDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          UNIFIED BUSINESS DIVISIONS & PLATFORMS SECTION
      ───────────────────────────────────────────────────────────── */}
      <section id="divisions" className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Section Header */}
          <div className="border-b border-slate-300 pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                {data.divisionsHeader.kicker}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight mt-1">
                {data.divisionsHeader.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              {data.divisionsHeader.desc}
            </p>
          </div>

          {/* Unified Cards Stack */}
          <div className="space-y-12">
            {data.divisions.map((division) => {
              const IconComponent = division.icon;

              return (
                <div
                  key={division.id}
                  id={division.id}
                  className="bg-white border border-slate-200 hover:border-[#009999] hover:shadow-xl transition-all duration-300 rounded-none overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

                    {/* Left Column: Visual Representation & Brand Identity */}
                    <div className="lg:col-span-5 p-7 sm:p-9 bg-slate-50/90 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="relative w-full h-52 overflow-hidden border border-slate-200 bg-slate-900 group">
                          <Image
                            src={division.image}
                            alt={division.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#002d3b]/85 via-[#002d3b]/20 to-transparent pointer-events-none" />
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="p-2 bg-[#002d3b] text-[#009999] border border-slate-700">
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white drop-shadow-sm">
                                {data.cardLabels.strategicPlatform}
                              </span>
                            </div>
                            <span className="px-2.5 py-1 bg-[#002d3b]/90 border border-slate-700 text-[10px] font-bold text-[#00cccc] uppercase tracking-wider">
                              {division.tagline.slice(0, 30)}...
                            </span>
                          </div>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-black text-[#002d3b] uppercase tracking-tight">
                          {division.title}
                        </h3>

                        <p className="text-sm font-semibold text-[#009999] leading-snug">
                          {division.tagline}
                        </p>
                      </div>

                      {/* Action Links */}
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Link
                          href={`/divisions/${division.slug}`}
                          className="btn-siemens btn-siemens-primary inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5"
                        >
                          <span>{data.cardLabels.explore} {division.title}</span>
                          <ArrowRight className={`w-3.5 h-3.5 ${currentLanguage === 'ar' ? 'rotate-180' : ''}`} />
                        </Link>
                        <Link
                          href="/contact"
                          className="px-4 py-2 border border-slate-300 text-slate-700 hover:border-[#009999] hover:text-[#002d3b] text-xs font-bold uppercase tracking-wider transition-colors"
                        >
                          {data.cardLabels.inquiry}
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Strategic Narrative, Scope & Product Categories */}
                    <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between space-y-6 bg-white">

                      <div className="space-y-5">
                        <div className="p-4 bg-[#f8fafc] border-l-4 border-[#009999] space-y-1.5">
                          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#009999]">
                            {data.cardLabels.mandate}
                          </div>
                          <p className="text-sm sm:text-base font-bold text-[#002d3b] leading-relaxed">
                            {division.lead}
                          </p>
                        </div>

                        <div className="space-y-1.5">
                          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                            {data.cardLabels.overview}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {division.description1}
                          </p>
                        </div>

                        <div className="space-y-1.5">
                          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                            {data.cardLabels.capabilities}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                            {division.description2}
                          </p>
                        </div>
                      </div>

                      {/* Product Categories Segment */}
                      <div className="pt-4 border-t border-slate-100 space-y-4">
                        <div className="space-y-2">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#002d3b]">
                            {data.cardLabels.categories}
                          </div>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {division.categories.map((cat) => (
                              <span
                                key={cat}
                                className="text-xs font-medium px-2.5 py-1 bg-[#f8fafc] border border-slate-200 text-slate-700 hover:border-[#009999] hover:text-[#002d3b] hover:bg-white transition-all rounded-none"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2 border-t border-dashed border-slate-200 flex items-center gap-2 text-xs font-bold text-[#009999]">
                          <span className="w-2 h-2 bg-[#009999] rounded-full inline-block shrink-0" />
                          <span>{division.footer}</span>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          GLOBAL INTEGRATION STATEMENT
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#009999] tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4 text-[#009999]" />
            <span>{data.valueChain.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight">
            {data.valueChain.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {data.valueChain.desc}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-3xl mx-auto text-left">
            <div className="p-4 bg-[#f8fafc] border border-slate-200 text-center">
              <div className="text-2xl font-black text-[#002d3b]">7</div>
              <div className="text-xs text-slate-500 uppercase font-mono mt-1">{data.valueChain.stat1}</div>
            </div>
            <div className="p-4 bg-[#f8fafc] border border-slate-200 text-center">
              <div className="text-2xl font-black text-[#002d3b]">190+</div>
              <div className="text-xs text-slate-500 uppercase font-mono mt-1">{data.valueChain.stat2}</div>
            </div>
            <div className="p-4 bg-[#f8fafc] border border-slate-200 text-center">
              <div className="text-2xl font-black text-[#002d3b]">30+</div>
              <div className="text-xs text-slate-500 uppercase font-mono mt-1">{data.valueChain.stat3}</div>
            </div>
            <div className="p-4 bg-[#f8fafc] border border-slate-200 text-center">
              <div className="text-2xl font-black text-[#002d3b]">100+</div>
              <div className="text-xs text-slate-500 uppercase font-mono mt-1">{data.valueChain.stat4}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CALL TO ACTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#001822] text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            {data.cta.title1} <span className="text-[#009999]">{data.cta.titleHighlight}</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {data.cta.desc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="btn-siemens btn-siemens-primary flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-sm font-bold tracking-wider uppercase"
            >
              <span>{data.cta.btn1}</span>
              <ArrowRight className={`w-4 h-4 ${currentLanguage === 'ar' ? 'rotate-180' : ''}`} />
            </Link>
            <Link
              href="/global-network"
              className="px-6 py-3.5 border border-slate-600 text-slate-300 hover:text-white hover:border-[#009999] transition-colors text-sm font-bold uppercase tracking-wider text-center w-full sm:w-auto"
            >
              {data.cta.btn2}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
