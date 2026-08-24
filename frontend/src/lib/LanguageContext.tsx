"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type LanguageCode = "en" | "ar" | "zh" | "pl" | "ja" | "ko";

export type RegionId =
  | "global"
  | "americas"
  | "china"
  | "europe"
  | "poland"
  | "india"
  | "japan"
  | "korea"
  | "malaysia"
  | "singapore";

export interface LanguageOption {
  code: LanguageCode;
  name: string;
}

export interface RegionOption {
  id: RegionId;
  name: string;
  languages: LanguageOption[];
}

export const REGIONS: RegionOption[] = [
  {
    id: "global",
    name: "TAKNISER Global",
    languages: [
      { code: "en", name: "English" },
      { code: "ar", name: "العربية" },
    ],
  },
  {
    id: "americas",
    name: "TAKNISER Americas",
    languages: [{ code: "en", name: "English" }],
  },
  {
    id: "china",
    name: "TAKNISER China",
    languages: [
      { code: "en", name: "English" },
      { code: "zh", name: "中文(中国)" },
    ],
  },
  {
    id: "europe",
    name: "TAKNISER Europe",
    languages: [{ code: "en", name: "English" }],
  },
  {
    id: "poland",
    name: "TAKNISER Poland",
    languages: [
      { code: "en", name: "English" },
      { code: "pl", name: "polski" },
    ],
  },
  {
    id: "india",
    name: "TAKNISER India",
    languages: [{ code: "en", name: "English" }],
  },
  {
    id: "japan",
    name: "TAKNISER Japan",
    languages: [
      { code: "en", name: "English" },
      { code: "ja", name: "日本語" },
    ],
  },
  {
    id: "korea",
    name: "TAKNISER Korea",
    languages: [
      { code: "en", name: "English" },
      { code: "ko", name: "한국어" },
    ],
  },
  {
    id: "malaysia",
    name: "TAKNISER Malaysia",
    languages: [{ code: "en", name: "English" }],
  },
  {
    id: "singapore",
    name: "TAKNISER Singapore",
    languages: [{ code: "en", name: "English" }],
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
  en: {
    // Utilities & Top bar
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

    // Nav Links
    "about-us": "About Us",
    "vision-2046": "Vision 2046",
    "what-we-do": "WHAT WE DO",
    "capabilities": "Capabilities",
    "industries": "Industries",
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
    "s1-kicker": "German Engineering Excellence",
    "s1-title": "Engineering the Future of",
    "s1-highlight": "Global Enterprise",
    "s1-desc": "Pioneering innovation across industrial manufacturing, space economy, and international trade in over 190 countries worldwide.",
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
    "s3-secondary": "View Capabilities",

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
    "footer-regional-hq": "29 Regional Headquarters",
    "footer-global-hq": "Global HQ – TAKNISER GmbH",
    "footer-hq-location": "Hesse (Hessen), Germany",
    "footer-inquiries": "Corporate Inquiries Portal",
    "footer-admin-area": "Admin Management Area",
    "footer-copyright": "© 2026 TAKNISER ONE GLOBE (TAKNISER GmbH). All rights reserved. Over 100 Years of German Engineering Excellence.",
    "footer-download-doc": "Download Website DOC",
    "footer-privacy": "Privacy Policy",
    "footer-terms": "Terms of Use",
    "footer-global-footprint": "Global Footprint",
    "cap-eng": "Engineering & Consulting",
    "cap-mfg": "Industrial Manufacturing",
    "cap-source": "Global Strategic Sourcing",
    "cap-procure": "International Procurement",
    "cap-epc": "EPC & Project Supply",
    "cap-logistics": "JAFZA Logistics Network",
  },
  ar: {
    // Utilities & Top bar
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
    "footer-regional-hq": "29 مقراً إقليمياً",
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
    "cap-logistics": "شبكة جافزا اللوجستية",
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
    "footer-regional-hq": "29 个区域总部",
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
    "cap-logistics": "JAFZA物流网络",
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
    "footer-regional-hq": "29 Regionalnych Siedzib",
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
    "cap-logistics": "Sieć Logistyczna JAFZA",
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
    "footer-regional-hq": "29の地域本部",
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
    "cap-logistics": "JAFZA物流ネットワーク",
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
    "footer-regional-hq": "29개 지역 본부",
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
    "cap-logistics": "JAFZA 물류 네트워크",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>("en");
  const [currentRegion, setCurrentRegion] = useState<RegionId>("global");

  // Load language settings on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("takniser_lang") as LanguageCode;
    const savedRegion = localStorage.getItem("takniser_region") as RegionId;

    if (savedLang) {
      setCurrentLanguage(savedLang);
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
  };

  const t = (key: string): string => {
    const translation = DICTIONARY[currentLanguage]?.[key] || DICTIONARY["en"]?.[key] || key;
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
