"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Rocket,
  Globe,
  Layers,
  Wheat,
  Droplets,
  HeartPulse,
  Bot,
  Zap,
  Trees,
  ArrowLeftRight,
  Building2,
  Briefcase,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Compass,
  Search,
  Lightbulb,
  Users,
  FlaskConical,
  TrendingUp,
  Radio,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const INDUSTRIES_DATA: Record<string, {
  hero: {
    badge: string;
    title1: string;
    title2: string;
    sub: string;
    desc: string;
  };
  portfolio: {
    kicker: string;
    title1: string;
    title2: string;
    desc: string;
    bannerTitle1: string;
    bannerTitle2: string;
    bannerDesc: string;
  };
  frontiers: {
    code: string;
    title: string;
    tagline: string;
    desc: string;
    icon: React.ElementType;
    image: string;
  }[];
  research: {
    kicker: string;
    title1: string;
    title2: string;
    sub: string;
    cardBadge: string;
    cardTitle: string;
    cardDesc: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    callout1: string;
    callout2: string;
  };
  engine: {
    kicker: string;
    title1: string;
    title2: string;
    desc: string;
    learnMore: string;
    stages: {
      code: string;
      stage: string;
      title: string;
      desc: string;
      icon: React.ElementType;
      image: string;
    }[];
  };
  pipeline: {
    kicker: string;
    title1: string;
    title2: string;
    sub: string;
    phaseTag: string;
    steps: { name: string; detail: string }[];
  };
  manifesto: {
    badge: string;
    title1: string;
    title2: string;
    sub1: string;
    sub2: string;
    pillars: string[];
    body1: string;
    bodyHighlight: string;
    body2: string;
    quote: string;
    motto: string;
    cta1: string;
    cta2: string;
  };
}> = {
  de: {
    hero: {
      badge: "T1G AUSWIRKUNGEN",
      title1: "T1G AUSWIRKUNGEN:",
      title2: "12 GLOBALE PIONIEREBENEN",
      sub: "Wo wir die nächsten großen Chancen erwarten",
      desc: "TAKNISER erforscht kontinuierlich zwölf miteinander verbundene Zukunftsbereiche, die das Potenzial haben, Industrien neu zu definieren und transformative globale Wirkungen auf der Erde und darüber hinaus zu entfalten.",
    },
    portfolio: {
      kicker: "EXPLORATIONS-PORTFOLIO",
      title1: "DIE ZWÖLF",
      title2: "STRATEGISCHEN PIONIEREBENEN",
      desc: "Wir arbeiten über ein breites Spektrum an Branchen und Sektoren hinweg und unterstützen Organisationen dabei, neue Chancen zu erschließen, Innovationen voranzutreiben und nachhaltiges Wachstum zu erzielen.",
      bannerTitle1: "Vielfältige Industrien.",
      bannerTitle2: "Ein Ziel.",
      bannerDesc: "TAKNISER vereint Fachwissen, Erkenntnisse und Innovation, um dauerhafte Werte über Branchen und Geografien hinweg zu schaffen.",
    },
    frontiers: [
      {
        code: "01",
        title: "RAUMFAHRT",
        tagline: "Mehr verstehen. Weiter vordringen.",
        desc: "Weltraumtechnologien und Erdbeobachtung schaffen beispiellose Möglichkeiten, unseren Planeten zu verstehen und menschliche Fähigkeiten darüber hinaus zu erweitern.",
        icon: Rocket,
        image: "/platform_space.jpg",
      },
      {
        code: "02",
        title: "KLIMA",
        tagline: "Resilienz aufbauen. Wandel beschleunigen.",
        desc: "Innovationen für eine Welt, die widerstandsfähiger, energieeffizienter und nachhaltiger werden muss.",
        icon: Globe,
        image: "/sustainable_earth_slide.jpg",
      },
      {
        code: "03",
        title: "RESSOURCEN",
        tagline: "Sichern, was die Zukunft erfordert.",
        desc: "Kritische Mineralien, Kreislaufwirtschaft, Recycling, fortschrittliche Förderung und maximale Ressourceneffizienz.",
        icon: Layers,
        image: "/mining_quarry_platform.jpg",
      },
      {
        code: "04",
        title: "ERNÄHRUNG",
        tagline: "Eine wachsende Welt ernähren.",
        desc: "Technologiegestützte, widerstandsfähige und regenerative Ernährungssysteme für die Herausforderungen von morgen.",
        icon: Wheat,
        image: "/platform_agtech.jpg",
      },
      {
        code: "05",
        title: "WASSER",
        tagline: "Die essenziellste Ressource schützen.",
        desc: "Wassersicherheit, Konservierung, Aufbereitung, Wiederverwendung und intelligentes Wassermanagement.",
        icon: Droplets,
        image: "/vision_pillar_2.jpg",
      },
      {
        code: "06",
        title: "GESUNDHEIT",
        tagline: "Menschliches Potenzial erweitern.",
        desc: "Gesundheitswesen, Biotechnologie, Prävention, Diagnostik, Vitalität und Langlebigkeit.",
        icon: HeartPulse,
        image: "/platform_lifecare.jpg",
      },
      {
        code: "07",
        title: "KI & ROBOTIK",
        tagline: "Menschliche Fähigkeiten verstärken.",
        desc: "Intelligente Systeme, autonome Maschinen und Automation für zunehmend komplexe Industrieumgebungen.",
        icon: Bot,
        image: "/clean_robotics.jpg",
      },
      {
        code: "08",
        title: "ENERGIE",
        tagline: "Fortschritt nachhaltig antreiben.",
        desc: "Erforschung von Technologien, die Energie sauberer, zuverlässiger, bezahlbarer und effizienter machen.",
        icon: Zap,
        image: "/hero_industrial_bg.png",
      },
      {
        code: "09",
        title: "NATUR",
        tagline: "Wiederherstellen, was uns erhält.",
        desc: "Biodiversität, Ökosysteme, Wälder, Meere, gesunde Böden und naturpositive Technologien.",
        icon: Trees,
        image: "/about_hesse_heritage.jpg",
      },
      {
        code: "10",
        title: "HANDEL & LIEFERKETTEN",
        tagline: "Globalen Handel intelligenter gestalten.",
        desc: "Aufbau transparenterer, widerstandsfähigerer und intelligenterer Wege für Produkte, Ressourcen und Technologien weltweit.",
        icon: ArrowLeftRight,
        image: "/about_logistics_port.jpg",
      },
      {
        code: "11",
        title: "GESELLSCHAFT",
        tagline: "Ein besseres Morgen gestalten.",
        desc: "Innovationen in Bildung, Konnektivität, Mobilität, Sicherheit, Infrastruktur und Lebensqualität.",
        icon: Building2,
        image: "/about_conglomerate_hq.jpg",
      },
      {
        code: "12",
        title: "LEBENSGRUNDLAGEN",
        tagline: "Chancen im großen Maßstab schaffen.",
        desc: "Neue Geschäftsmodelle, Kompetenzen, Arbeitsplätze, Unternehmertum und integrative wirtschaftliche Chancen.",
        icon: Briefcase,
        image: "/platform_lifestyle.jpg",
      },
    ],
    research: {
      kicker: "INTELLIGENZ & FORSCHUNG",
      title1: "TAKNISER GLOBAL EXPLORER",
      title2: "& FORSCHUNGSTEAM",
      sub: "24×7 INNOVATIONSINTELLIGENZ FÜR EINE SICH WANDELNDE WELT",
      cardBadge: "Globales Forschungskommando",
      cardTitle: "Kontinuierliche planetare Aufklärung",
      cardDesc: "Multidisziplinäre Labornetzwerke und Markttelemetrie scannen weltweite Zukunftsbereiche rund um die Uhr.",
      p1: "Die Zukunft trifft nicht auf einmal ein.",
      p2: "Sie entsteht aus Tausenden von Signalen – einer wissenschaftlichen Veröffentlichung, einem Patent, einem neuartigen Material, einem Start-up, einer Durchbruchtechnologie, einer regulatorischen Änderung oder einem völlig neuen Geschäftsmodell.",
      p3: "Das TAKNISER Global Explorer & Research Team existiert, um diese Signale zu erkennen, bevor sie für den Markt offensichtlich werden.",
      p4: "Unser globaler Innovationsmotor erforscht, untersucht, entdeckt, verbindet, erprobt und skaliert kontinuierlich Chancen über Branchen, Technologien und Kontinente hinweg.",
      callout1: "Wir warten nicht auf die Zukunft.",
      callout2: "Wir suchen aktiv nach ihr.",
    },
    engine: {
      kicker: "STRUKTURIERTE METHODIK",
      title1: "DER SECHSSTUFIGE",
      title2: "EXPLORATIONS-MOTOR",
      desc: "Wie unser Entdeckungsmotor frühe Marktsignale systematisch in skalierbare globale Operationen umwandelt.",
      learnMore: "Mehr erfahren",
      stages: [
        {
          code: "01",
          stage: "ERFORSCHEN",
          title: "Den Horizont scannen.",
          desc: "Wir überwachen kontinuierlich neue Technologien, wissenschaftliche Entdeckungen, Märkte, Ressourcen, Unternehmen, Patente und gesellschaftliche Bedürfnisse.",
          icon: Compass,
          image: "/engine_stage_1_explore.jpg",
        },
        {
          code: "02",
          stage: "RECHERCHIEREN",
          title: "Das Signal verstehen.",
          desc: "Wir untersuchen Technologien, Unternehmen, wissenschaftliche Entwicklungen, Geschäftsmodelle, geistiges Eigentum und weltweite Trends im Detail.",
          icon: Search,
          image: "/platform_lifecare.jpg",
        },
        {
          code: "03",
          stage: "ENTDECKEN",
          title: "Die Chance erkennen.",
          desc: "Wir identifizieren Ideen mit dem Potenzial, TAKNISER-Geschäftsfelder, marktreife Produkte, Partnerschaften oder Investitionen zu werden.",
          icon: Lightbulb,
          image: "/engine_stage_3_discover.jpg",
        },
        {
          code: "04",
          stage: "VERNETZEN",
          title: "Die richtigen Köpfe zusammenbringen.",
          desc: "Wir bauen starke Allianzen mit Wissenschaftlern, Universitäten, Innovatoren, Regierungen, Institutionen und strategischen Partnern auf.",
          icon: Users,
          image: "/engine_stage_4_connect.jpg",
        },
        {
          code: "05",
          stage: "EXPERIMENTIEREN",
          title: "Möglichkeit in Beweise verwandeln.",
          desc: "Vielversprechende Konzepte münden in Prototypen, Pilotprojekte, Machbarkeitsstudien und reale industrielle Tests.",
          icon: FlaskConical,
          image: "/engine_stage_5_experiment.jpg",
        },
        {
          code: "06",
          stage: "SKALIEREN",
          title: "Erfolgreiches in die Welt tragen.",
          desc: "Erfolgreiche Innovationen werden nahtlos an die weltweiten Industriekapazitäten, Plattformen und Lieferketten von TAKNISER angebunden.",
          icon: TrendingUp,
          image: "/about_logistics_port.jpg",
        },
      ],
    },
    pipeline: {
      kicker: "PIPELINE-FRAMEWORK",
      title1: "VOM SIGNAL",
      title2: "ZUR SKALIERUNG",
      sub: "Wie eine Idee zu weltweiter Wirkung wird",
      phaseTag: "UMSETZUNGSPHASE",
      steps: [
        { name: "SIGNAL", detail: "Eine neue Entdeckung, Technologie oder ein entstehender Bedarf." },
        { name: "ERKENNTNIS", detail: "Tiefgehende Forschung offenbart das transformative Potenzial." },
        { name: "CHANCE", detail: "Eine kommerzielle oder gesellschaftliche Anwendung formt sich." },
        { name: "EXPERIMENT", detail: "Die Idee wird unter realen Bedingungen validiert und getestet." },
        { name: "INNOVATION", detail: "Eine marktreife, hochleistungsfähige Lösung entsteht." },
        { name: "SKALIERUNG", detail: "Die Lösung erreicht globale Märkte und Gemeinschaften." },
        { name: "GLOBALE WIRKUNG", detail: "Transformativer, messbarer weltweiter Mehrwert." },
      ],
    },
    manifesto: {
      badge: "MANIFEST DES FORTSCHRITTS",
      title1: "VON DER EXPLORATION",
      title2: "ZUR WIRKUNG",
      sub1: "TAKNISERs Anspruch ist es nicht, die Zukunft vorherzusagen.",
      sub2: "Es ist der Anspruch, sie aktiv mitzugestalten.",
      pillars: [
        "Wir erforschen das Unbekannte.",
        "Wir entdecken das Mögliche.",
        "Wir bauen das Wertvolle.",
        "Wir skalieren das Erfolgreiche.",
        "Und wir regenerieren, was uns erhält.",
      ],
      body1: "Über ",
      bodyHighlight: "Raumfahrt, Ressourcen, Ernährung, Gesundheit, Lifestyle, Robotik und Welthandel",
      body2: " hinweg verbindet unser Ökosystem heutige Fähigkeiten mit morgigen Chancen.",
      quote: "Die Zukunft gehört denen, die bereit sind, sie zu erforschen.",
      motto: "Erforschen. Entdecken. Bauen. Skalieren. Regenerieren.",
      cta1: "Mit Forschungsteam verbinden",
      cta2: "Innovations-Ökosystem ansehen",
    },
  },
  en: {
    hero: {
      badge: "T1G IMPACTS",
      title1: "T1G IMPACTS:",
      title2: "12 GLOBAL FRONTIERS",
      sub: "Where We Believe the Next Great Opportunities Will Emerge",
      desc: "TAKNISER continuously explores twelve interconnected frontiers that have the potential to redefine industries and create transformative global impact on Earth and beyond.",
    },
    portfolio: {
      kicker: "EXPLORATION PORTFOLIO",
      title1: "THE TWELVE",
      title2: "STRATEGIC FRONTIERS",
      desc: "We work across a diverse range of industries and sectors, helping organizations unlock new opportunities, drive innovation, and achieve sustainable growth.",
      bannerTitle1: "Diverse Industries.",
      bannerTitle2: "One Purpose.",
      bannerDesc: "TAKNISER brings together expertise, insights and innovation to create lasting value across industries and geographies.",
    },
    frontiers: [
      {
        code: "01",
        title: "SPACE",
        tagline: "Understand more. Explore further.",
        desc: "Space technologies and Earth observation are creating unprecedented ways to understand our planet and expand human capability beyond it.",
        icon: Rocket,
        image: "/platform_space.jpg",
      },
      {
        code: "02",
        title: "CLIMATE",
        tagline: "Build resilience. Accelerate transition.",
        desc: "Innovating for a world that must become more resilient, efficient and sustainable.",
        icon: Globe,
        image: "/sustainable_earth_slide.jpg",
      },
      {
        code: "03",
        title: "RESOURCES",
        tagline: "Secure what the future requires.",
        desc: "Critical minerals, circularity, recycling, advanced extraction and resource efficiency.",
        icon: Layers,
        image: "/mining_quarry_platform.jpg",
      },
      {
        code: "04",
        title: "FOOD",
        tagline: "Feed a growing world.",
        desc: "Technology-driven, resilient and regenerative food systems designed for tomorrow's challenges.",
        icon: Wheat,
        image: "/platform_agtech.jpg",
      },
      {
        code: "05",
        title: "WATER",
        tagline: "Protect the world's most essential resource.",
        desc: "Water security, conservation, purification, reuse and intelligent water management.",
        icon: Droplets,
        image: "/vision_pillar_2.jpg",
      },
      {
        code: "06",
        title: "HEALTH",
        tagline: "Extend human potential.",
        desc: "Healthcare, biotechnology, prevention, diagnostics, wellness and longevity.",
        icon: HeartPulse,
        image: "/platform_lifecare.jpg",
      },
      {
        code: "07",
        title: "AI & ROBOTICS",
        tagline: "Augment human capability.",
        desc: "Intelligent systems, autonomous machines and automation for increasingly complex environments.",
        icon: Bot,
        image: "/clean_robotics.jpg",
      },
      {
        code: "08",
        title: "ENERGY",
        tagline: "Power progress sustainably.",
        desc: "Exploring technologies that can make energy cleaner, more reliable, accessible and efficient.",
        icon: Zap,
        image: "/hero_industrial_bg.png",
      },
      {
        code: "09",
        title: "NATURE",
        tagline: "Restore what sustains us.",
        desc: "Biodiversity, ecosystems, forests, oceans, soil and nature-positive technologies.",
        icon: Trees,
        image: "/about_hesse_heritage.jpg",
      },
      {
        code: "10",
        title: "TRADE & SUPPLY CHAINS",
        tagline: "Make global commerce smarter.",
        desc: "Building more transparent, resilient and intelligent pathways for products, resources and technologies to move around the world.",
        icon: ArrowLeftRight,
        image: "/about_logistics_port.jpg",
      },
      {
        code: "11",
        title: "SOCIETY",
        tagline: "Design a better tomorrow.",
        desc: "Innovation across education, connectivity, mobility, safety, infrastructure and quality of life.",
        icon: Building2,
        image: "/about_conglomerate_hq.jpg",
      },
      {
        code: "12",
        title: "LIVELIHOODS",
        tagline: "Create opportunity at scale.",
        desc: "New businesses, skills, jobs, entrepreneurship and inclusive economic opportunities for a changing world.",
        icon: Briefcase,
        image: "/platform_lifestyle.jpg",
      },
    ],
    research: {
      kicker: "INTELLIGENCE & RESEARCH",
      title1: "TAKNISER GLOBAL EXPLORER",
      title2: "& RESEARCH TEAM",
      sub: "24×7 INNOVATION INTELLIGENCE FOR A CHANGING WORLD",
      cardBadge: "Global Research Command",
      cardTitle: "Continuous Planetary Intelligence",
      cardDesc: "Multidisciplinary laboratory networks and market telemetry scanning worldwide frontiers.",
      p1: "The future does not arrive all at once.",
      p2: "It emerges through thousands of signals—a scientific paper, a patent, a new material, a startup, a breakthrough technology, a changing regulation, a new resource discovery, a shifting consumer need or an entirely new business model.",
      p3: "The TAKNISER Global Explorer & Research Team exists to identify these signals before they become obvious.",
      p4: "Our global innovation engine continuously explores, researches, discovers, connects, experiments and scales opportunities across industries, technologies and geographies.",
      callout1: "We don't wait for the future.",
      callout2: "We actively search for it.",
    },
    engine: {
      kicker: "STRUCTURED METHODOLOGY",
      title1: "THE SIX-STAGE",
      title2: "EXPLORATION ENGINE",
      desc: "How our discovery engine systematically transforms early market signals into scalable global operations.",
      learnMore: "Learn more",
      stages: [
        {
          code: "01",
          stage: "EXPLORE",
          title: "Scan the horizon.",
          desc: "We continuously monitor emerging technologies, scientific discoveries, markets, resources, companies, patents, regulations and changing societal needs.",
          icon: Compass,
          image: "/engine_stage_1_explore.jpg",
        },
        {
          code: "02",
          stage: "RESEARCH",
          title: "Understand the signal.",
          desc: "We investigate technologies, companies, scientific developments, business models, intellectual property and global trends.",
          icon: Search,
          image: "/platform_lifecare.jpg",
        },
        {
          code: "03",
          stage: "DISCOVER",
          title: "Find the opportunity.",
          desc: "We identify ideas with the potential to become TAKNISER businesses, products, technologies, partnerships or investments.",
          icon: Lightbulb,
          image: "/engine_stage_3_discover.jpg",
        },
        {
          code: "04",
          stage: "CONNECT",
          title: "Bring the right minds together.",
          desc: "We build relationships with scientists, universities, entrepreneurs, innovators, governments, institutions, investors and strategic partners.",
          icon: Users,
          image: "/engine_stage_4_connect.jpg",
        },
        {
          code: "05",
          stage: "EXPERIMENT",
          title: "Turn possibility into evidence.",
          desc: "Promising ideas move into prototypes, pilots, proof-of-concepts, feasibility studies and real-world experiments.",
          icon: FlaskConical,
          image: "/engine_stage_5_experiment.jpg",
        },
        {
          code: "06",
          stage: "SCALE",
          title: "Take what works to the world.",
          desc: "Successful innovations are connected to TAKNISER's global capabilities, business platforms, markets and networks.",
          icon: TrendingUp,
          image: "/about_logistics_port.jpg",
        },
      ],
    },
    pipeline: {
      kicker: "PIPELINE FRAMEWORK",
      title1: "FROM SIGNAL",
      title2: "TO SCALE",
      sub: "How an Idea Becomes Impact",
      phaseTag: "EXECUTION PHASE",
      steps: [
        { name: "SIGNAL", detail: "A new discovery, technology or emerging need." },
        { name: "INSIGHT", detail: "Research reveals its potential." },
        { name: "OPPORTUNITY", detail: "A commercial or societal application emerges." },
        { name: "EXPERIMENT", detail: "The idea is tested in the real world." },
        { name: "INNOVATION", detail: "A viable solution is created." },
        { name: "SCALE", detail: "The solution reaches markets and communities." },
        { name: "GLOBAL IMPACT", detail: "Transformative worldwide value." },
      ],
    },
    manifesto: {
      badge: "MANIFESTO FOR PROGRESS",
      title1: "FROM EXPLORATION",
      title2: "TO IMPACT",
      sub1: "TAKNISER's ambition is not simply to predict the future.",
      sub2: "It is to participate in creating it.",
      pillars: [
        "We explore the unknown.",
        "We discover the possible.",
        "We build the valuable.",
        "We scale the successful.",
        "And we strive to regenerate what sustains us.",
      ],
      body1: "Across ",
      bodyHighlight: "Space, Resources, Food, Health, Lifestyle, Robotics and Global Trade",
      body2: ", our innovation ecosystem is designed to connect today's capabilities with tomorrow's opportunities.",
      quote: "The future belongs to those willing to explore it.",
      motto: "Explore. Discover. Build. Scale. Regenerate.",
      cta1: "Connect with Research Team",
      cta2: "View Innovation Ecosystem",
    },
  },
  ar: {
    hero: {
      badge: "تأثيرات تاكنيسر العالمية",
      title1: "تأثيرات T1G:",
      title2: "12 أفقاً عالمياً",
      sub: "حيث نؤمن بأن أعظم الفرص المستقبلية ستنطلق",
      desc: "تستكشف تاكنيسر باستمرار اثني عشر أفقاً مترابطاً تمتلك القدرة على إعادة تشكيل الصناعات وإحداث تأثير عالمي تحويلي على الأرض وما بعدها.",
    },
    portfolio: {
      kicker: "محفظة الاستكشاف والابتكار",
      title1: "الآفاق الاستراتيجية",
      title2: "الاثنا عشر",
      desc: "نعمل عبر مجموعة متنوعة من القطاعات والصناعات لمساعدة المؤسسات على إطلاق العنان لإمكاناتها وتحقيق نمو مستدام.",
      bannerTitle1: "صناعات متنوعة.",
      bannerTitle2: "هدف واحد.",
      bannerDesc: "تجمع تاكنيسر بين الخبرة والتحليل والابتكار لخلق قيمة مستدامة عبر كافة القطاعات والجغرافيات.",
    },
    frontiers: [
      {
        code: "01",
        title: "الفضاء",
        tagline: "فهم أعمق. استكشاف أبعد.",
        desc: "تخلق تقنيات الفضاء ومراقبة الأرض سبلاً غير مسبوقة لفهم كوكبنا وتوسيع قدرات الإنسان لما وراءه.",
        icon: Rocket,
        image: "/platform_space.jpg",
      },
      {
        code: "02",
        title: "المناخ",
        tagline: "بناء المرونة. تسريع التحول.",
        desc: "الابتكار من أجل عالم أكثر كفاءة واستدامة وقدرة على التكيف مع التغيرات البيئية.",
        icon: Globe,
        image: "/sustainable_earth_slide.jpg",
      },
      {
        code: "03",
        title: "الموارد",
        tagline: "تأمين متطلبات المستقبل.",
        desc: "المعادن الاستراتيجية، والاقتصاد الدائري، وإعادة التدوير، وكفاءة إدارة الموارد الحيوية.",
        icon: Layers,
        image: "/mining_quarry_platform.jpg",
      },
      {
        code: "04",
        title: "الغذاء",
        tagline: "إطعام عالم متنامٍ.",
        desc: "أنظمة غذائية مرنة وتجديدية مدفوعة بالتكنولوجيا لمواجهة تحديات أمن الغذاء العالمية.",
        icon: Wheat,
        image: "/platform_agtech.jpg",
      },
      {
        code: "05",
        title: "المياه",
        tagline: "حماية أثمن موارد الحياة.",
        desc: "أمن المياه، وحفظها، وتنقيتها، وإعادة استخدامها، وأنظمة الإدارة الذكية.",
        icon: Droplets,
        image: "/vision_pillar_2.jpg",
      },
      {
        code: "06",
        title: "الصحة",
        tagline: "توسيع الطاقات البشرية.",
        desc: "الرعاية الصحية، والتكنولوجيا الحيوية، والوقاية، والتشخيص، وتعزيز جودة الحياة.",
        icon: HeartPulse,
        image: "/platform_lifecare.jpg",
      },
      {
        code: "07",
        title: "الذكاء الاصطناعي والروبوتات",
        tagline: "تعزيز القدرات البشرية.",
        desc: "أنظمة ذكية وآلات مؤتمتة متقدمة للعمل في بيئات صناعية بالغة التعقيد والدقة.",
        icon: Bot,
        image: "/clean_robotics.jpg",
      },
      {
        code: "08",
        title: "الطاقة",
        tagline: "دفع عجلة التقدم باستدامة.",
        desc: "استكشاف تقنيات تجعل الطاقة أنظف وأكثر موثوقية وكفاءة وتوافراً للجميع.",
        icon: Zap,
        image: "/hero_industrial_bg.png",
      },
      {
        code: "09",
        title: "الطبيعة",
        tagline: "استعادة ما يحفظ استمراريتنا.",
        desc: "التنوع البيولوجي، والغابات، والمحيطات، والتربة، والحلول الصديقة للبيئة.",
        icon: Trees,
        image: "/about_hesse_heritage.jpg",
      },
      {
        code: "10",
        title: "التجارة وسلاسل الإمداد",
        tagline: "تجارة دولية أكثر ذكاءً.",
        desc: "بناء مسارات شفافة ومرنة ومؤتمتة لتدفق المنتجات والموارد عبر قارات العالم.",
        icon: ArrowLeftRight,
        image: "/about_logistics_port.jpg",
      },
      {
        code: "11",
        title: "المجتمع",
        tagline: "تصميم غد أفضل وأرقى.",
        desc: "الابتكار في التعليم، والاتصالات، والتنقل، والسلامة، وجودة الحياة العامة.",
        icon: Building2,
        image: "/about_conglomerate_hq.jpg",
      },
      {
        code: "12",
        title: "سبل العيش",
        tagline: "خلق فرص اقتصادية واعدة.",
        desc: "أعمال جديدة ومهارات مستقبلية ووظائف مبتكرة لدعم نمو الاقتصاد الإنساني.",
        icon: Briefcase,
        image: "/platform_lifestyle.jpg",
      },
    ],
    research: {
      kicker: "المعلومات والأبحاث المتقدمة",
      title1: "فريق تاكنيسر للاستكشاف",
      title2: "والأبحاث العالمية",
      sub: "معلومات استخبارية ابتكارية على مدار الساعة لعالم سريع التغير",
      cardBadge: "قيادة الأبحاث العالمية",
      cardTitle: "استخبارات كوكبية مستمرة",
      cardDesc: "شبكات مختبرات متعددة التخصصات وبيانات سوقية حية ترصد الآفاق العالمية على مدار الساعة.",
      p1: "المستقبل لا يأتي دفعة واحدة.",
      p2: "إنه يبرز عبر آلاف الإشارات المبكرة—ورقة بحثية، أو براءة اختراع، أو مادة جديدة، أو تقنية خارقة، أو اكتشاف موارد، أو احتياج إنساني متجدد.",
      p3: "فريق تاكنيسر للاستكشاف والأبحاث مكرس لتحديد هذه الإشارات المبكرة قبل أن تصبح واضحة للأسواق.",
      p4: "يعمل محرك الابتكار لدينا على استكشاف وبحث واكتشاف وتجريب وتوسيع الفرص عبر مختلف القطاعات والتخصصات.",
      callout1: "نحن لا ننتظر قدوم المستقبل.",
      callout2: "بل نبحث عنه ونبنيه بنشاط.",
    },
    engine: {
      kicker: "المنهجية الهيكلية",
      title1: "محرك الاستكشاف",
      title2: "المكون من ست مراحل",
      desc: "كيف يحول محرك الاكتشاف لدينا الإشارات المبكرة بانتظام إلى عمليات عالمية قابلة للتوسع.",
      learnMore: "معرفة المزيد",
      stages: [
        {
          code: "01",
          stage: "الاستكشاف",
          title: "مسح الأفق.",
          desc: "نرصد باستمرار التقنيات الناشئة والاكتشافات العلمية والأسواق والموارد والشركات والاحتياجات المجتمعية.",
          icon: Compass,
          image: "/engine_stage_1_explore.jpg",
        },
        {
          code: "02",
          stage: "البحث",
          title: "فهم الإشارة.",
          desc: "نتعمق في دراسة التقنيات ونماذج الأعمال والملكية الفكرية والاتجاهات الدولية.",
          icon: Search,
          image: "/platform_lifecare.jpg",
        },
        {
          code: "03",
          stage: "الاكتشاف",
          title: "اقتناص الفرصة.",
          desc: "نحدد الأفكار القادرة على التحول إلى شركات أو منتجات أو استثمارات استراتيجية ناجحة.",
          icon: Lightbulb,
          image: "/engine_stage_3_discover.jpg",
        },
        {
          code: "04",
          stage: "الترابط",
          title: "جمع العقول المناسبة.",
          desc: "نبني علاقات وثيقة مع العلماء والجامعات والمبتكرين والجهات الحكومية والشركاء الدوليين.",
          icon: Users,
          image: "/engine_stage_4_connect.jpg",
        },
        {
          code: "05",
          stage: "التجريب",
          title: "تحويل الإمكانية إلى دليل ملموس.",
          desc: "تنتقل الأفكار الواعدة إلى نماذج أولية وتجارب تشغيلية ودراسات جدوى ميدانية حقيقية.",
          icon: FlaskConical,
          image: "/engine_stage_5_experiment.jpg",
        },
        {
          code: "06",
          stage: "التوسع",
          title: "نقل النجاح إلى العالم.",
          desc: "يتم ربط الابتكارات الناجحة بقدرات تاكنيسر ومنصاتها التشغيلية وشبكاتها العالمية.",
          icon: TrendingUp,
          image: "/about_logistics_port.jpg",
        },
      ],
    },
    pipeline: {
      kicker: "إطار مسار العمليات",
      title1: "من الإشارة المبكرة",
      title2: "إلى التوسع الشامل",
      sub: "كيف تتحول الفكرة إلى أثر عالمي ملموس",
      phaseTag: "مرحلة التنفيذ",
      steps: [
        { name: "الإشارة المبكرة", detail: "اكتشاف جديد أو تقنية واعدة أو احتياج مستجد." },
        { name: "الرؤية المعمقة", detail: "البحث يكشف عن الإمكانات الكامنة." },
        { name: "الفرصة", detail: "تبلور التطبيق التجاري أو المجتمعي العملي." },
        { name: "التجريب", detail: "اختبار الفكرة في بيئات العالم الواقعي." },
        { name: "الابتكار", detail: "تطوير حل متكامل وقابل للاعتماد." },
        { name: "التوسع", detail: "وصول الحل إلى الأسواق والمجتمعات المستهدفة." },
        { name: "الأثر العالمي", detail: "قيمة تحويلية ملموسة وفوائد مستدامة." },
      ],
    },
    manifesto: {
      badge: "بيان التقدم والريادة",
      title1: "من الاستكشاف العلمي",
      title2: "إلى الأثر العالمي",
      sub1: "طموح تاكنيسر لا يقتصر على مجرد التنبؤ بالمستقبل.",
      sub2: "بل المشاركة الفعالة في بنائه وصناعته.",
      pillars: [
        "نستكشف المجهول.",
        "نكتشف ما هو ممكن.",
        "نبني الحلول القيمة.",
        "نوسع آفاق النجاح.",
        "ونسعى لتجديد كل ما يحفظ استمراريتنا.",
      ],
      body1: "عبر مجالات ",
      bodyHighlight: "الفضاء، والموارد، والغذاء، والصحة، وأسلوب الحياة، والروبوتات، والتجارة الدولية",
      body2: "، صُممت منظومتنا الابتكارية لربط إمكانات اليوم بفرص الغد الواعدة.",
      quote: "المستقبل ملك لأولئك المستعدين لاستكشافه.",
      motto: "استكشاف. اكتشاف. بناء. توسع. تجدد.",
      cta1: "تواصل مع فريق الأبحاث",
      cta2: "شاهد منظومة الابتكار",
    },
  },
};

export default function IndustriesContent() {
  const { currentLanguage } = useLanguage();
  const data = INDUSTRIES_DATA[currentLanguage] || INDUSTRIES_DATA["de"] || INDUSTRIES_DATA["en"];

  return (
    <div className={`pt-24 min-h-screen bg-[#f4f5f6] text-slate-800 font-sans antialiased selection:bg-[#009999] selection:text-white ${currentLanguage === 'ar' ? 'rtl text-right' : 'text-left'}`}>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/platform_space.jpg"
            alt="Space & Global Frontiers"
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

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            {data.hero.title1} <br className="hidden sm:inline" />
            <span className="text-[#009999]">{data.hero.title2}</span>
          </h1>

          <p className="text-sm sm:text-lg text-[#00cccc] font-semibold uppercase tracking-wide">
            {data.hero.sub}
          </p>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {data.hero.desc}
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: 12 FRONTIERS GRID
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Section Header */}
          <div className="border-b border-slate-200 pb-6">
            <div className="max-w-3xl space-y-2">
              <div className={`flex items-center gap-2 ${currentLanguage === 'ar' ? 'justify-end' : ''}`}>
                <span className="w-6 h-[2.5px] bg-[#009999] inline-block rounded-full" />
                <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                  {data.portfolio.kicker}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-[#002d3b] tracking-tight uppercase">
                {data.portfolio.title1} <span className="text-[#009999]">{data.portfolio.title2}</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                {data.portfolio.desc}
              </p>
            </div>
          </div>

          {/* Main Grid: 12 Frontier Cards (Left 9 cols) + Explorer Summit Pillar (Right 3 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">

            {/* 12 Frontier Cards */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                {data.frontiers.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.code}
                      className="group relative min-h-[290px] sm:min-h-[310px] h-full rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-end p-4 sm:p-4.5 border border-slate-200/70 hover:border-[#009999]/60"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#00131d] via-[#00131d]/85 to-[#00131d]/20 opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-[#009999]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 text-teal-300 shrink-0">
                            <IconComp className="w-3.5 h-3.5" />
                          </div>
                          <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-tight leading-tight">
                            {item.title}
                          </h3>
                        </div>

                        <div className="text-[11.5px] font-semibold text-teal-300 leading-snug">
                          {item.tagline}
                        </div>

                        <div className="pt-1.5 border-t border-white/10">
                          <p className="text-[11px] text-slate-200 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Hero Banner */}
            <div className="lg:col-span-3 flex flex-col">
              <div className="h-full bg-gradient-to-b from-[#eaf4f7] via-[#f0f7f9] to-[#00141e] rounded-2xl rounded-tr-[48px] overflow-hidden border border-slate-200/80 shadow-md flex flex-col justify-between">
                <div className="p-6 sm:p-7 space-y-3.5">
                  <div className="w-8 h-1 bg-[#009999] rounded-full" />
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#002d3b] tracking-tight leading-snug">
                    {data.portfolio.bannerTitle1} <br />
                    <span className="text-[#009999]">{data.portfolio.bannerTitle2}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {data.portfolio.bannerDesc}
                  </p>
                </div>

                <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[440px] xl:flex-1 min-h-[300px] overflow-hidden">
                  <Image
                    src="/frontiers_explorer_summit.jpg"
                    alt="Diverse Industries One Purpose Explorer"
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#f0f7f9]/50 pointer-events-none" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: TAKNISER RESEARCH TEAM
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#009999] tracking-widest uppercase">
              <Radio className="w-3.5 h-3.5 text-[#009999]" />
              <span>{data.research.kicker}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002d3b] uppercase tracking-tight">
              {data.research.title1} <br />
              <span className="text-[#009999]">{data.research.title2}</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono font-bold text-slate-600 uppercase tracking-wider">
              {data.research.sub}
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-slate-200">
                <Image
                  src="/sustainable_earth_slide.jpg"
                  alt="Global Explorer & Research Operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001822]/85 via-[#002d3b]/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#00cccc]">
                    {data.research.cardBadge}
                  </div>
                  <div className="text-base font-black uppercase">
                    {data.research.cardTitle}
                  </div>
                  <p className="text-xs text-slate-300">
                    {data.research.cardDesc}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p className={`text-base sm:text-lg font-bold text-[#002d3b] pl-3 ${currentLanguage === 'ar' ? 'border-r-4 pr-3 border-[#009999]' : 'border-l-4 pl-3 border-[#009999]'}`}>
                    {data.research.p1}
                  </p>
                  <p>{data.research.p2}</p>
                  <p>{data.research.p3}</p>
                  <p>{data.research.p4}</p>
                </div>

                <div className={`p-5 bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 ${currentLanguage === 'ar' ? 'border-r-4 border-r-[#009999]' : 'border-l-4 border-l-[#009999]'}`}>
                  <span className="text-sm sm:text-base font-black text-[#002d3b] uppercase tracking-wider">
                    {data.research.callout1}
                  </span>
                  <span className="text-sm sm:text-base font-black text-[#009999] uppercase tracking-wider">
                    {data.research.callout2}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: SIX-STAGE EXPLORATION ENGINE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="space-y-2 border-b border-slate-200 pb-6">
            <div className={`flex items-center gap-2 ${currentLanguage === 'ar' ? 'justify-end' : ''}`}>
              <span className="w-8 h-[2.5px] bg-[#009999] inline-block rounded-full" />
              <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                {data.engine.kicker}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-[#002d3b] tracking-tight uppercase">
              {data.engine.title1} <span className="text-[#009999]">{data.engine.title2}</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed pt-1">
              {data.engine.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
            {data.engine.stages.map((st) => {
              const StageIcon = st.icon;
              return (
                <div
                  key={st.code}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center gap-5 sm:gap-6 group"
                >
                  <div className="flex-1 flex flex-col justify-between h-full space-y-4 w-full">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#009999]/10 text-[#009999] flex items-center justify-center border border-[#009999]/20 shrink-0">
                          <StageIcon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-[#009999] tracking-wider uppercase">
                          {st.stage}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#002d3b] tracking-tight">
                        {st.title}
                      </h3>

                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009999] hover:text-[#007a7a] transition-colors group/link"
                      >
                        <span>{data.engine.learnMore}</span>
                        <ArrowRight className={`w-3.5 h-3.5 transform transition-transform ${currentLanguage === 'ar' ? 'rotate-180 group-hover/link:-translate-x-1' : 'group-hover/link:translate-x-1'}`} />
                      </Link>
                    </div>
                  </div>

                  <div className="relative w-full sm:w-[220px] md:w-[240px] lg:w-[250px] h-[180px] sm:h-[190px] rounded-xl overflow-hidden shrink-0 border border-slate-200/60 shadow-sm">
                    <Image
                      src={st.image}
                      alt={st.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: FROM SIGNAL TO SCALE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#001822] text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-3">
            <div className="text-xs font-mono font-bold text-[#009999] tracking-widest uppercase">
              {data.pipeline.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              {data.pipeline.title1} <span className="text-[#009999]">{data.pipeline.title2}</span>
            </h2>
            <div className="text-base sm:text-lg font-bold text-[#00cccc] uppercase tracking-wide">
              {data.pipeline.sub}
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {data.pipeline.steps.map((step, idx) => (
              <div key={step.name} className="flex flex-col items-center">
                <div className="w-full bg-[#002d3b] border border-slate-700/80 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#009999] transition-all">
                  <div className="flex items-center gap-3.5">
                    <div className="w-2.5 h-2.5 bg-[#009999] shrink-0" />
                    <div>
                      <h4 className="text-base font-black text-white uppercase tracking-tight">
                        {step.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block text-xs font-mono text-[#009999] font-bold uppercase tracking-wider">
                    {data.pipeline.phaseTag}
                  </div>
                </div>

                {idx < data.pipeline.steps.length - 1 && (
                  <div className="my-1 flex flex-col items-center justify-center">
                    <div className="w-0.5 h-3 bg-[#009999]/40" />
                    <ArrowDown className="w-4 h-4 text-[#009999]" />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: MANIFESTO & CTA
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#001822] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,153,153,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10 text-center">

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/60">
              <span>{data.manifesto.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
              {data.manifesto.title1} <span className="text-[#009999]">{data.manifesto.title2}</span>
            </h2>
            <div className="text-base sm:text-xl font-bold text-slate-200">
              {data.manifesto.sub1} <br />
              <span className="text-[#009999]">{data.manifesto.sub2}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 max-w-3xl mx-auto text-xs font-mono font-bold text-slate-300">
            {data.manifesto.pillars.map((pil, idx) => (
              <div key={idx} className={`p-3 bg-[#002d3b] border border-slate-700 ${idx === 4 ? 'text-[#009999]' : ''}`}>
                {pil}
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#002d3b]/60 p-6 border border-slate-700">
            <p>
              {data.manifesto.body1}<span className="text-white font-bold">{data.manifesto.bodyHighlight}</span>{data.manifesto.body2}
            </p>
            <p className="text-base font-bold text-white uppercase tracking-wider">
              {data.manifesto.quote}
            </p>
          </div>

          <div className="space-y-2 pt-4">
            <div className="text-2xl sm:text-3xl font-black uppercase tracking-widest text-[#009999]">
              TAKNISER
            </div>
            <div className="text-xs sm:text-sm font-mono tracking-widest text-slate-400 uppercase">
              {data.manifesto.motto}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <Link
              href="/contact"
              className="btn-siemens btn-siemens-primary flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-sm font-bold tracking-wider uppercase"
            >
              <span>{data.manifesto.cta1}</span>
              <ArrowRight className={`w-4 h-4 ${currentLanguage === 'ar' ? 'rotate-180' : ''}`} />
            </Link>
            <Link
              href="/capabilities"
              className="px-6 py-3.5 border border-slate-600 text-slate-300 hover:text-white hover:border-[#009999] transition-colors text-sm font-bold uppercase tracking-wider text-center w-full sm:w-auto"
            >
              {data.manifesto.cta2}
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
