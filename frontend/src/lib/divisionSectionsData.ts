export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface CategoryDetail {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  keyFeatures: string[];
  process: ProcessStep[];
  metricBadge: string;
}

export const DIVISION_CATEGORIES_DATA: Record<string, Record<string, CategoryDetail[]>> = {
  en: {
    "space-economy": [
      {
        id: "satellite-components",
        title: "Satellite Components",
        badge: "Orbital Hardware & Structural Systems",
        description: "TAKNISER engineers precision satellite buses, lightweight carbon-composite structural panels, solar array deployment mechanisms, and attitude determination and control systems (ADCS) for commercial, scientific, and governmental orbital missions.",
        image: "/platform_space.jpg",
        keyFeatures: [
          "Ultra-lightweight aerospace grade carbon-composite structures",
          "Space-qualified solar arrays with >30% cell efficiency",
          "Precision reaction wheels and magnetorquer attitude control",
          "AS9100D and ECSS space-standard certified fabrication"
        ],
        process: [
          { step: "01", title: "Mission Spec & Orbital Modeling", desc: "Thermal, structural, and radiation orbit simulation tailored to mission payload requirements." },
          { step: "02", title: "Cleanroom Micro-Machining", desc: "Sub-micron CNC milling and cleanroom assembly under ISO Class 5 contamination control." },
          { step: "03", title: "Thermal-Vacuum (TVAC) Testing", desc: "Stringent vacuum bakeout, cryogenic thermal cycling, and random vibration qualification." },
          { step: "04", title: "Launch Integration & Telemetry Handover", desc: "Payload fairing integration, pre-launch diagnostics, and on-orbit commissioning support." }
        ],
        metricBadge: "AS9100D & ECSS Qualified"
      },
      {
        id: "space-communications",
        title: "Space Communications",
        badge: "Deep-Space & Inter-Satellite Laser Relays",
        description: "High-throughput optical inter-satellite links (OISL), multi-frequency Ku/Ka-band digital transponders, and phased-array ground terminals delivering gigabit-class low-latency orbital communication networks.",
        image: "/vision_pillar_3.jpg",
        keyFeatures: [
          "Coherent optical laser communication terminals (>10 Gbps)",
          "Radiation-tolerant digital channelizers and transponders",
          "Electronically steerable phased-array antenna systems",
          "Real-time orbital routing and encrypted mesh protocols"
        ],
        process: [
          { step: "01", title: "Link Budget & Spectrum Architecture", desc: "Propagation analysis, ITU spectrum filing validation, and constellation routing simulation." },
          { step: "02", title: "RF & Optical Hardware Synthesis", desc: "Direct-conversion RF transceivers and high-precision laser beam steering mirrors." },
          { step: "03", title: "Radiation Hardening & EMI Certification", desc: "Total Ionizing Dose (TID) radiation testing and severe electromagnetic shielding verification." },
          { step: "04", title: "Ground Segment Harmonization", desc: "Direct uplink integration with global earth station gateway networks." }
        ],
        metricBadge: "10+ Gbps Optical Data Links"
      },
      {
        id: "earth-observation",
        title: "Earth Observation",
        badge: "Hyperspectral & Planetary Intelligence",
        description: "Sub-meter resolution multispectral and hyperspectral optical payloads, Synthetic Aperture Radar (SAR) systems, and real-time orbital analytics providing actionable intelligence for climate, agriculture, maritime, and infrastructure monitoring.",
        image: "/vision_globe_opportunity.jpg",
        keyFeatures: [
          "Sub-0.5 meter optical resolution with high signal-to-noise ratio",
          "All-weather, day-and-night Synthetic Aperture Radar (SAR) imaging",
          "On-board edge AI for instant cloud-free image processing",
          "Automated georeferencing and spectral signature calibration"
        ],
        process: [
          { step: "01", title: "Spectral Resolution Design", desc: "Custom optical lens array design and focal plane detector array specification." },
          { step: "02", title: "Optical Alignment & Diamond Turning", desc: "Nanometer-level diamond machining and laser interferometric optical assembly." },
          { step: "03", title: "Spectral & Radiometric Calibration", desc: "Rigorous NIST-traceable blackbody and radiometric chamber calibrations." },
          { step: "04", title: "Downlink & Geospatial Cloud Pipeline", desc: "High-speed encrypted ground ingestion delivering automated analytical GIS layers." }
        ],
        metricBadge: "Sub-0.5m Optical Precision"
      },
      {
        id: "space-electronics",
        title: "Space Electronics",
        badge: "Radiation-Hardened Avionic Computing",
        description: "Radiation-hardened flight computers, high-efficiency gallium nitride (GaN) power distribution units (PDU), and fault-tolerant telemetry architectures built to withstand cosmic rays, solar flares, and extreme orbital thermal cycles.",
        image: "/clean_robotics.jpg",
        keyFeatures: [
          "Single-Event Upset (SEU) immune micro-architectures",
          "GaN-based power electronics with >95% power conversion",
          "SpaceWire and MIL-STD-1553B compliant bus interfaces",
          "Triple-modular redundant (TMR) safety flight computers"
        ],
        process: [
          { step: "01", title: "Silicon Radiation Hardening", desc: "Latch-up immune semiconductor layout and fault-tolerant system architecture." },
          { step: "02", title: "Automated SMT Assembly & Underfill", desc: "High-reliability aerospace soldering, conformal coating, and vacuum de-gassing." },
          { step: "03", title: "Heavy Ion & Proton Beam Trials", desc: "Cyclotron beam testing to guarantee zero catastrophic in-orbit latch-up failures." },
          { step: "04", title: "Bus Integration & Harness Certification", desc: "Complete avionic harness testing and flight computer stress profiling." }
        ],
        metricBadge: "300 krad TID Resilient"
      },
      {
        id: "launch-support-technologies",
        title: "Launch Support Technologies",
        badge: "Ground Support Equipment & Fairing Adapters",
        description: "Turnkey launch ground support equipment (GSE), cryogenic propellant fluid loading manifolds, launch umbilical disconnect systems, and multi-payload dispenser structures for orbital launch vehicles.",
        image: "/frontiers_explorer_summit.jpg",
        keyFeatures: [
          "Cryogenic liquid oxygen (LOX) and methane (LCH4) transfer lines",
          "Zero-force quick-disconnect pneumatic umbilical systems",
          "Composite multi-satellite dispenser rings (ESPA class)",
          "Real-time telemetry and ground blast-attenuation dampers"
        ],
        process: [
          { step: "01", title: "Launch Profile Thermodynamics", desc: "Dynamic structural loading, acoustics, and fluid thermodynamic computational modeling." },
          { step: "02", title: "Heavy Cryogenic Machining", desc: "High-nickel alloy and aerospace titanium fabrication for cryogenic service." },
          { step: "03", title: "Proof Pressure & Pyrotechnic Testing", desc: "Hydrostatic burst verification and high-speed pyrotechnic separation testing." },
          { step: "04", title: "Pad Commissioning & Launch Readiness", desc: "On-site pad installation, wet dress rehearsal verification, and launch-day operations." }
        ],
        metricBadge: "Cryogenic LOX/CH4 Certified"
      }
    ],

    "mining-minerals": [
      {
        id: "copper",
        title: "Copper",
        badge: "Grade-A Electrolytic Cathodes & Rods",
        description: "TAKNISER supplies LME Grade-A 99.9935% electrolytic copper cathodes, continuous cast rods, and copper concentrates critical for international electric grid expansions, renewable energy stations, and EV drivetrains.",
        image: "/platform_mining.jpg",
        keyFeatures: [
          "LME registered Grade-A copper purity (Cu > 99.9935%)",
          "Direct smelter off-take agreements across South America & Africa",
          "Continuous 8mm oxygen-free copper rods for precision wire drawing",
          "Traceable ESG compliance and low-carbon smelting certifications"
        ],
        process: [
          { step: "01", title: "Geochemical Assay & Mine Off-take", desc: "Comprehensive spectrometer assaying and multi-year supply contracts." },
          { step: "02", title: "Smelting & Electro-Refining", desc: "Energy-efficient electro-refining guaranteeing international purity benchmarks." },
          { step: "03", title: "Spectrometric Purity Verification", desc: "ICP-MS trace element screening and ISO 9001 certified batch documentation." },
          { step: "04", title: "Breakbulk Maritime Logistics", desc: "Bonded warehouse staging and multimodal freight to industrial manufacturing plants." }
        ],
        metricBadge: "99.9935% Purity Standard"
      },
      {
        id: "lithium",
        title: "Lithium",
        badge: "Battery-Grade Carbonate & Hydroxide",
        description: "Refined battery-grade lithium carbonate (Li2CO3 ≥ 99.5%) and lithium hydroxide monohydrate (LiOH·H2O ≥ 56.5%) sourced from premier brine basins and hard-rock spodumene refineries worldwide.",
        image: "/mining_quarry_platform.jpg",
        keyFeatures: [
          "Ultra-low magnetic impurity thresholds (<10 ppb)",
          "Battery-grade carbonate for LFP cells and hydroxide for high-nickel NMC",
          "Consistent controlled particle size distribution (D50)",
          "Fully audited closed-loop supply chains meeting EU Battery Passport"
        ],
        process: [
          { step: "01", title: "Brine Extraction & Concentration", desc: "Solar evaporation and direct lithium extraction (DLE) technology deployment." },
          { step: "02", title: "Chemical Conversion & Crystallization", desc: "Precipitation, ion-exchange purification, and vacuum crystallization." },
          { step: "03", title: "Cleanroom Micronization & Assay", desc: "Contamination-free milling, magnetic separation, and lithium content assay." },
          { step: "04", title: "Climate-Controlled Sealed Freight", desc: "Desiccant-sealed nitrogen-purged packaging ensuring zero moisture degradation." }
        ],
        metricBadge: "Battery Grade ≥ 99.5%"
      },
      {
        id: "nickel",
        title: "Nickel",
        badge: "Class 1 High-Purity Cathodes & Briquettes",
        description: "Class 1 refined nickel cathodes (Ni ≥ 99.8%) and premium nickel sulfate hexahydrate crystals powering the next generation of high-nickel EV battery chemistries and aerospace superalloy manufacturing.",
        image: "/about_midcentury_factory.jpg",
        keyFeatures: [
          "Class 1 LME-grade high-purity nickel cathodes (Ni > 99.8%)",
          "Nickel sulfate crystals for precursor cathode active materials (pCAM)",
          "Aerospace-grade vacuum melted pellets for turbine blade alloys",
          "Responsible mining verified under Initiative for Responsible Mining (IRMA)"
        ],
        process: [
          { step: "01", title: "High-Pressure Acid Leach (HPAL)", desc: "Laterite ore processing delivering high-recovery mixed hydroxide precipitate." },
          { step: "02", title: "Solvent Extraction Refining", desc: "Multi-stage chemical separation eliminating cobalt, zinc, and iron impurities." },
          { step: "03", title: "Quality Audit & Grain Analysis", desc: "Microstructural grain examination and chemical glow discharge mass spectrometry." },
          { step: "04", title: "Bulk Containerized Dispatch", desc: "Direct distribution to battery gigafactories and aerospace foundries." }
        ],
        metricBadge: "Ni ≥ 99.8% Purity"
      },
      {
        id: "rare-earth-elements",
        title: "Rare Earth Elements",
        badge: "Critical Magnetic & Optical Oxides",
        description: "Separated high-purity rare earth oxides and metals including Neodymium (Nd), Dysprosium (Dy), Praseodymium (Pr), and Terbium (Tb), essential for wind turbine generators, electric motors, and defense avionics.",
        image: "/chain_card_5_epc.jpg",
        keyFeatures: [
          "High-purity separated oxides (Nd2O3, Dy2O3 ≥ 99.99%)",
          "Didymium (NdPr) metal ingots for sintered NdFeB permanent magnets",
          "Guaranteed non-conflict source tracing and radiation safety compliance",
          "Strategic buffer reserves maintained in bonded European distribution hubs"
        ],
        process: [
          { step: "01", title: "Ionic Clay & Monazite Leaching", desc: "Targeted mineral extraction with closed-loop reagent recycling." },
          { step: "02", title: "Counter-Current Solvent Extraction", desc: "Hundreds of separation stages isolating adjacent lanthanide elements." },
          { step: "03", title: "Molten Salt Electrolysis", desc: "Reduction of purified rare earth oxides into high-density metal ingots." },
          { step: "04", title: "Secure Chain-of-Custody Shipping", desc: "Tamper-evident customs packaging ensuring continuous compliance." }
        ],
        metricBadge: "99.99% Separated Purity"
      },
      {
        id: "aluminum",
        title: "Aluminum",
        badge: "Low-Carbon Primary Ingots & Billets",
        description: "Hydro-powered low-carbon primary aluminum ingots, extrusion billets, and precision rolling slabs engineered for automotive light-weighting, aerospace fuselage structures, and modern architecture.",
        image: "/about_conglomerate_hq.jpg",
        keyFeatures: [
          "Certified low-carbon aluminum (< 4.0 kg CO2 per kg Al)",
          "Standard P1020A primary ingots (Al ≥ 99.70%)",
          "Homogenized extrusion billets in 6000 and 7000 series aerospace alloys",
          "Aluminium Stewardship Initiative (ASI) certified production"
        ],
        process: [
          { step: "01", title: "Bauxite Refining to Alumina", desc: "Bayer process conversion yielding ultra-white calcined alumina." },
          { step: "02", title: "Hydro-Powered Electrolysis", desc: "Hall-Héroult smelting utilizing 100% renewable hydroelectric power." },
          { step: "03", title: "Alloying & Direct-Chill Casting", desc: "In-line degassing, ceramic foam filtration, and continuous billet casting." },
          { step: "04", title: "Just-In-Time Plant Delivery", desc: "Direct rail and vessel distribution to tier-1 stamping and extrusion plants." }
        ],
        metricBadge: "Low-Carbon <4.0kg CO2/kg"
      },
      {
        id: "graphite",
        title: "Graphite",
        badge: "Spherical Anode & Refractory Flake",
        description: "High-crystallinity coated spherical graphite (CSPG) for lithium-ion battery anodes alongside ultra-pure natural flake and synthetic graphite blocks for extreme temperature furnaces and metallurgical casting.",
        image: "/chain_card_7_warehouse.jpg",
        keyFeatures: [
          "Battery-grade coated spherical graphite (Carbon content ≥ 99.95%)",
          "Tap density > 1.0 g/cm³ ensuring superior volumetric battery capacity",
          "Large flake natural graphite (+50 mesh, 95% carbon) for refractories",
          "Uniform carbon pitch coating for reduced initial irreversible capacity loss"
        ],
        process: [
          { step: "01", title: "Flotation & Sizing", desc: "Multi-stage mechanical flotation isolating high-aspect-ratio carbon flakes." },
          { step: "02", title: "Spheroidization Micronization", desc: "Impact milling transforming jagged flakes into uniform spherical granules." },
          { step: "03", title: "Thermal & Chemical Purification", desc: "Ultra-high temperature baking achieving 99.95% carbon purity." },
          { step: "04", title: "Surface Pitch Coating", desc: "CVD carbon coating followed by carbonization for enhanced cycle life." }
        ],
        metricBadge: "C ≥ 99.95% Battery Grade"
      },
      {
        id: "critical-mineral-trading",
        title: "Critical Mineral Trading",
        badge: "Global Risk Management & Multi-Commodity Off-take",
        description: "TAKNISER's trading desk provides physical commodity supply solutions, structured off-take contracts, price risk hedging, and strategic sovereign inventory management across all critical industrial minerals.",
        image: "/platform_trading.jpg",
        keyFeatures: [
          "Direct multi-year off-take agreements with Tier-1 mining operators",
          "LME and CME hedging to eliminate industrial price volatility",
          "Comprehensive marine insurance, demurrage protection, and customs clearance",
          "Strategic stockpile facilities in Rotterdam, Singapore, and Houston"
        ],
        process: [
          { step: "01", title: "Commercial Origination & Off-take", desc: "Structuring transparent financing and long-term mining purchase agreements." },
          { step: "02", title: "Derivatives Hedging & Risk Shield", desc: "Back-to-back hedging locking in stable margins for industrial buyers." },
          { step: "03", title: "Vessel Chartering & Cargo Surveillance", desc: "Independent draft surveys, moisture testing, and bulk maritime logistics." },
          { step: "04", title: "Customs Clearance & Final Handover", desc: "Discharge management and inventory financing at major destination ports." }
        ],
        metricBadge: "Global Multi-Commodity Desk"
      },
      {
        id: "coal",
        title: "Coal",
        badge: "Premium Metallurgical Coking & Low-Ash Thermal",
        description: "High-grade metallurgical hard coking coal (HCC) engineered for primary blast furnace steel manufacturing, complemented by low-ash, high-calorific thermal coal for baseload industrial power facilities.",
        image: "/about_logistics_port.jpg",
        keyFeatures: [
          "Premium low-volatile hard coking coal with CSR > 70",
          "Ultra-low moisture (< 8%) and low sulfur (< 0.6%) specifications",
          "High calorific value thermal coal (GAR 6,000+ kcal/kg)",
          "Capesize and Panamax vessel loading capacity at premier export terminals"
        ],
        process: [
          { step: "01", title: "Core Drill Assay & Seam Selection", desc: "Proximate analysis, washability testing, and petrographic assessment." },
          { step: "02", title: "Heavy Medium Cyclone Beneficiation", desc: "Dense medium separation washing out ash and sulfur impurities." },
          { step: "03", title: "Independent Terminal Inspection", desc: "SGS / Bureau Veritas sampling at port stockpile prior to shiploading." },
          { step: "04", title: "Dedicated Deep-Water Shiploading", desc: "Automated conveyor shiploading with dust suppression and ocean transit." }
        ],
        metricBadge: "High CSR > 70 Met Coal"
      }
    ],

    "agtech": [
      {
        id: "irrigation-systems",
        title: "Irrigation Systems",
        badge: "Smart Precision Water & Micro-Drip Architecture",
        description: "Automated center-pivot irrigators, pressurized sub-surface drip networks, and solar-powered smart telemetry units designed to maximize crop yield while conserving up to 50% water in arid and semi-arid agricultural landscapes.",
        image: "/platform_agtech.jpg",
        keyFeatures: [
          "IoT-enabled soil moisture and microclimate weather stations",
          "Pressure-compensating non-clogging drip emitters for high durability",
          "Solar-hybrid variable frequency pump automation units",
          "Automated cloud-controlled nutrient dosing (fertigation) injectors"
        ],
        process: [
          { step: "01", title: "Topographic & Soil Moisture Profiling", desc: "Satellite and drone topography mapping combined with soil hydraulic conductivity testing." },
          { step: "02", title: "Hydraulic Network Engineering", desc: "Precision CAD pipeline dimensioning, valve zoning, and filtration system modeling." },
          { step: "03", title: "Heavy-Duty Polymer & Metal Fabrication", desc: "UV-stabilized HDPE pipe extrusion and hot-dipped galvanized center-pivot fabrication." },
          { step: "04", title: "Field Telemetry & SCADA Handover", desc: "On-site installation, pressure testing, and wireless mobile dashboard commissioning." }
        ],
        metricBadge: "Up to 50% Water Conservation"
      },
      {
        id: "fertilizers",
        title: "Fertilizers",
        badge: "Controlled-Release & Eco-Nutrition Formulations",
        description: "High-efficiency nitrogen-phosphorus-potassium (NPK) blends, micronutrient chelates, and polymer-coated controlled-release fertilizers formulated to minimize environmental runoff while boosting root uptake.",
        image: "/sustainable_earth_slide.jpg",
        keyFeatures: [
          "Polymer-coated controlled-release fertilizers (60 to 180 day release)",
          "100% water-soluble fertigation grade macro & micronutrients",
          "Bio-stimulant enriched humic and fulvic acid compounds",
          "ISO 17025 accredited laboratory batch quality testing"
        ],
        process: [
          { step: "01", title: "Agronomic Chemistry Formulation", desc: "Crop-specific nutrient balancing based on regional soil deficiency datasets." },
          { step: "02", title: "Fluidized Bed Granulation", desc: "Even particle size synthesis with automated humidity-controlled drying." },
          { step: "03", title: "Polymer Membrane Coating", desc: "Application of biodegradable membrane regulating osmotic nutrient release." },
          { step: "04", title: "Moisture-Barrier Bulk Packaging", desc: "UV-resistant multi-wall valve sacks and 1-ton bulk bags for global export." }
        ],
        metricBadge: "Bio-Nutrient Controlled Release"
      },
      {
        id: "seeds",
        title: "Seeds",
        badge: "Non-GMO Climate-Resilient Hybrid Genetics",
        description: "High-vigor hybrid and certified open-pollinated seed varieties optimized for high yield, drought tolerance, saline soil adaptability, and resistance to aggressive fungal and viral crop pathogens.",
        image: "/mission_smart_factory.jpg",
        keyFeatures: [
          "Germination rate guaranteed above 95% under standard conditions",
          "Advanced polymer seed coating with biological fungicides and micro-nutrients",
          "Bred for thermal stress tolerance and shortened maturation cycles",
          "Strict non-GMO certification and purity exceeding 99.8%"
        ],
        process: [
          { step: "01", title: "Genetic Trait Selection & Crossing", desc: "Decades of selective breeding for hybrid vigor and abiotic stress tolerance." },
          { step: "02", title: "Isolated Foundation Multiplication", desc: "Strictly controlled isolation plots preventing unwanted cross-pollination." },
          { step: "03", title: "Optical Sorting & Polymer Encrusting", desc: "Laser color sorting removing defective seeds followed by protective encrusting." },
          { step: "04", title: "Hermetic Temperature-Controlled Transit", desc: "Vacuum-sealed foil pouches transported under monitored relative humidity." }
        ],
        metricBadge: ">95% Certified Germination"
      },
      {
        id: "agricultural-machinery",
        title: "Agricultural Machinery",
        badge: "Autonomous GPS Tractors & Smart Harvesters",
        description: "High-horsepower tractors, precision seed drills, autonomous robotic weeders, and sensor-guided combine harvesters featuring RTK centimeter-level GPS navigation and automated yield monitoring.",
        image: "/chain_card_6_truck.jpg",
        keyFeatures: [
          "RTK GPS auto-steering with ±2cm pass-to-pass accuracy",
          "Tier 4 Final / Stage V ultra-low emission turbocharged diesel engines",
          "ISOBUS compliant terminal controllers for universal implement matching",
          "Telemetry modem delivering real-time fuel, yield, and diagnostic data"
        ],
        process: [
          { step: "01", title: "Structural Heavy Chassis Engineering", desc: "Finite element analysis (FEA) modeling of welded high-tensile steel frames." },
          { step: "02", title: "Powertrain & Hydraulic Integration", desc: "Heavy-duty hydrostatic transmissions and closed-loop load-sensing hydraulics." },
          { step: "03", title: "Dyno & Field Stress Endurance", desc: "1,000-hour continuous full-load dyno testing and severe field trial validation." },
          { step: "04", title: "Dealer Delivery & Operator Training", desc: "PDI inspection, firmware calibration, and on-farm operator certification." }
        ],
        metricBadge: "±2cm RTK Precision GPS"
      },
      {
        id: "food-processing",
        title: "Food Processing",
        badge: "Turnkey Industrial Processing & Cold-Chain Lines",
        description: "Turnkey automated grain milling complexes, fruit and vegetable optical sorting lines, hygienic stainless steel pasteurization units, and robotic packaging systems meeting strict international food safety standards.",
        image: "/about_logistics_port.jpg",
        keyFeatures: [
          "Food-grade AISI 304/316L stainless steel hygienic construction",
          "High-speed optical and NIR multi-spectral defect sorters",
          "Fully automated CIP (Clean-in-Place) sterilization cycles",
          "Complete compliance with EHEDG, FDA, and HACCP sanitary guidelines"
        ],
        process: [
          { step: "01", title: "Processing Flowsheet Engineering", desc: "Mass balance calculations, thermodynamic sizing, and hygienic factory layout." },
          { step: "02", title: "Precision Sanitary Fabrication", desc: "Orbital TIG welding, mirror polishing (Ra < 0.8 µm), and sterile pump assembly." },
          { step: "03", title: "Dry & Wet Simulation Testing", desc: "Factory Acceptance Testing (FAT) with product surrogates verifying throughput." },
          { step: "04", title: "Turnkey On-Site Line Commissioning", desc: "Electrical installation, SCADA integration, and operator sanitary training." }
        ],
        metricBadge: "HACCP & EHEDG Food Grade"
      }
    ],

    "lifecare": [
      {
        id: "medical-devices",
        title: "Medical Devices",
        badge: "Class IIb & Class III Surgical Instrumentation",
        description: "Precision titanium surgical instruments, laparoscopic vision towers, ultrasonic dissection scalpels, and biocompatible orthopedic implant systems engineered under stringent medical quality management systems.",
        image: "/platform_lifecare.jpg",
        keyFeatures: [
          "Medical grade Grade 5 Ti-6Al-4V titanium and 316LVM stainless steel",
          "Sub-micron CNC Swiss-turning for micro-surgical tips and jaws",
          "Biocompatibility verified under ISO 10993 cytotoxicity standards",
          "CE marked (EU MDR 2017/745) and US FDA 510(k) cleared"
        ],
        process: [
          { step: "01", title: "Clinical Ergonomics & Metallurgy", desc: "Surgeon feedback integration and ultra-fine grain metallurgical selection." },
          { step: "02", title: "Swiss Multi-Axis Micromachining", desc: "Precision electro-discharge machining (EDM) and diamond micro-polishing." },
          { step: "03", title: "Passivation & Cleanroom Packaging", desc: "ASTM A967 nitric acid passivation and ISO Class 7 double-sterile barrier pouching." },
          { step: "04", title: "EO / Gamma Sterilization & Release", desc: "Validated sterilization cycles ensuring Sterility Assurance Level (SAL) 10⁻⁶." }
        ],
        metricBadge: "ISO 13485 & CE MDR Certified"
      },
      {
        id: "hospital-equipment",
        title: "Hospital Equipment",
        badge: "Intensive Care Infrastructure & Operating Suites",
        description: "Intelligent ICU ventilator stations, motorized surgical tables, ceiling-mounted surgical pendants, and centralized medical gas pipeline infrastructure designed for continuous hospital critical-care duty.",
        image: "/clean_corporate_hq.jpg",
        keyFeatures: [
          "Heavy-load electro-hydraulic surgical tables with 450kg weight rating",
          "Modular ICU bed consoles with integrated dialysis & medical gas outlets",
          "Laminar airflow ceiling canopies creating sterile operating fields",
          "Uninterruptible battery backup and medical-grade electrical isolation"
        ],
        process: [
          { step: "01", title: "Clinical Workflow Engineering", desc: "Architectural BIM design ensuring zero interference with surgical workflows." },
          { step: "02", title: "Antibacterial Powder Coating & Fab", desc: "Anti-microbial silver-ion surface coatings and heavy structural steel welding." },
          { step: "03", title: "Electrical Safety & EMI Certification", desc: "IEC 60601-1 third-party electrical safety and patient leakage testing." },
          { step: "04", title: "Hospital Installation & Acceptance", desc: "Turnkey hospital floor mounting, gas pressure certification, and clinical staff training." }
        ],
        metricBadge: "IEC 60601-1 Critical Care Duty"
      },
      {
        id: "pharmaceuticals",
        title: "Pharmaceuticals",
        badge: "EU-GMP Active Ingredients & Sterile Injectables",
        description: "TAKNISER sources and distributes high-purity Active Pharmaceutical Ingredients (APIs), essential generic lyophilized injectables, and oncology formulations produced under stringent EU-GMP and US-FDA standards.",
        image: "/takniser_workstation_desk.jpg",
        keyFeatures: [
          "Full Certificate of Suitability (CEP) and Drug Master File (DMF) availability",
          "Aseptic cleanroom sterile fill-and-finish liquid injectables",
          "Automated cold-chain storage maintaining strictly 2°C to 8°C or -20°C",
          "Serial identification meeting global Track & Trace anti-counterfeiting laws"
        ],
        process: [
          { step: "01", title: "Chemical Synthesis & Crystallization", desc: "Validated multi-step chemical reaction pathways with zero toxic solvent residue." },
          { step: "02", title: "Aseptic Filtration & Lyophilization", desc: "0.22-micron sterile membrane filtration and freeze-drying in sterile isolators." },
          { step: "03", title: "High-Performance HPLC Analysis", desc: "Assay of purity, related substances, and endotoxin levels per Ph. Eur. / USP." },
          { step: "04", title: "Validated Cold-Chain Air Transit", desc: "Active GPS temperature-logged containers for secure international delivery." }
        ],
        metricBadge: "EU-GMP & USP Grade"
      },
      {
        id: "biotechnology",
        title: "Biotechnology",
        badge: "Bioprocess Bioreactors & Molecular Consumables",
        description: "Single-use and stainless steel stirred-tank bioreactor systems, automated tangential flow filtration (TFF) skids, and recombinant culture media consumables supporting vaccine and monoclonal antibody manufacture.",
        image: "/clean_robotics.jpg",
        keyFeatures: [
          "Scalable bioreactor vessels from 5L benchtop to 2,000L production skids",
          "Integrated DO, pH, and biomass optical sensors for real-time control",
          "Gamma-irradiated single-use bags with USP Class VI polymer validation",
          "Automated recipe management compliant with 21 CFR Part 11"
        ],
        process: [
          { step: "01", title: "Cell Culture Hydrodynamics", desc: "Computational fluid dynamics (CFD) modeling of impeller shear stress and oxygen transfer." },
          { step: "02", title: "ASME BPE Sanitary Construction", desc: "Electropolished 316L stainless steel vessels with Ra < 0.4 µm internal finish." },
          { step: "03", title: "SIP / CIP Validation & Pressure Hold", desc: "Helium leak detection and automated steam-in-place sterility validation." },
          { step: "04", title: "Cleanroom Installation & IQ/OQ", desc: "Installation Qualification (IQ) and Operational Qualification (OQ) protocols." }
        ],
        metricBadge: "ASME BPE Bioprocess Certified"
      },
      {
        id: "diagnostics-equipment",
        title: "Diagnostics Equipment",
        badge: "Automated Immunoassay & Molecular Analyzers",
        description: "High-throughput clinical chemistry analyzers, chemiluminescence immunoassay (CLIA) platforms, and real-time RT-PCR diagnostic equipment delivering rapid, lab-standard patient test results.",
        image: "/vision_pillar_4.jpg",
        keyFeatures: [
          "Throughput up to 1,200 photometric and ISE tests per hour",
          "Sub-microliter precision reagent micro-dispensing pipettes",
          "Integrated bi-directional LIS (Laboratory Information System) interfaces",
          "Refrigerated on-board reagent carousel with automated inventory tracking"
        ],
        process: [
          { step: "01", title: "Optical & Microfluidic Architecture", desc: "Precision wavelength spectrophotometry and fluid dynamics engineering." },
          { step: "02", title: "Optoelectronic Sensor Assembly", desc: "High-sensitivity photomultiplier tube integration and noise-isolated electronics." },
          { step: "03", title: "Multi-Analyte Clinical Validation", desc: "Testing with thousands of known clinical sera ensuring CV < 2% precision." },
          { step: "04", title: "Hospital Lab Calibration & Launch", desc: "On-site installation, reference curve calibration, and reagent subscription supply." }
        ],
        metricBadge: "High-Throughput 1,200 T/h"
      }
    ],

    "lifestyle": [
      {
        id: "appliances",
        title: "Household Appliances",
        badge: "German-Engineered Premium Smart Kitchen Suites",
        description: "Energy-efficient induction hobs, multi-zone convection steam ovens, acoustic-dampened dishwashers, and inverter refrigeration systems combining German engineering tolerances with modern architectural elegance.",
        image: "/platform_lifestyle.jpg",
        keyFeatures: [
          "A+++ European Energy Rating with brushless inverter compressor motors",
          "Precision capacitive glass touch interfaces with ambient LED illumination",
          "Whisper-quiet acoustic insulation (< 38 dB operational noise)",
          "10-year engineering durability warranty on core motor components"
        ],
        process: [
          { step: "01", title: "Ergonomic & Thermal CAD Design", desc: "Simulating thermodynamic heat distribution and modern kitchen modular fits." },
          { step: "02", title: "Automated Metal Stamping & Assembly", desc: "Robotic laser welding of stainless steel cavities and powder-coated enclosures." },
          { step: "03", title: "5,000-Cycle Endurance & Acoustic Testing", desc: "Door slam, thermal shock, and semi-anechoic sound chamber evaluations." },
          { step: "04", title: "Direct Distribution & Consumer Warranty", desc: "Secured container dispatch to national retail chains and kitchen studios." }
        ],
        metricBadge: "A+++ Energy Efficiency"
      },
      {
        id: "smart-home",
        title: "Smart Home",
        badge: "Matter & Zigbee Connected Living Systems",
        description: "Unified Matter and Zigbee 3.0 residential gateways, biometric architectural door locks, smart climate thermostatic radiator valves, and integrated energy management sensors.",
        image: "/home_sec22.webp",
        keyFeatures: [
          "Matter-certified interoperability across Apple Home, Google Home, and Alexa",
          "Bank-grade AES-128 / TLS 1.3 encrypted local wireless mesh communication",
          "Biometric 3D facial recognition and semiconductor fingerprint sensors",
          "Automated energy consumption tracking reducing household electricity by up to 25%"
        ],
        process: [
          { step: "01", title: "Mesh Protocol Architecture", desc: "Ultra-low power radio frequency circuit design and security key vault integration." },
          { step: "02", title: "Architectural Hardware Machining", desc: "CNC milled aerospace aluminum lock bezels and toughened glass touch surfaces." },
          { step: "03", title: "Penetration Testing & Radio Certification", desc: "Rigorous cybersecurity audits, CE-RED, and FCC radio compliance." },
          { step: "04", title: "Cloud Ecosystem Provisioning", desc: "Global server deployment for instantaneous push alerts and firmware updates." }
        ],
        metricBadge: "Matter & Zigbee 3.0 Certified"
      },
      {
        id: "personal-care",
        title: "Personal Care",
        badge: "Precision Grooming & Ultrasonic Haircare",
        description: "High-speed brushless digital motor hairdryers, acoustic sonic toothbrushes, and titanium foil electric shavers engineered with micron-level German blade tolerances.",
        image: "/takniser_workstation_branded_v2.jpg",
        keyFeatures: [
          "110,000 RPM high-velocity digital brushless air motors",
          "40,000 vibrations/min acoustic sonic motors with pressure sensors",
          "IPX8 fully submersible waterproof construction",
          "Lithium-ion fast-charging batteries delivering 60+ days standby"
        ],
        process: [
          { step: "01", title: "Fluid Dynamics & Blade Metallurgy", desc: "High-speed air nozzle computational design and stainless steel cryogenic quenching." },
          { step: "02", title: "Precision Micro-Motor Balancing", desc: "Dynamic balancing of high-speed impellers to eliminate hand vibration." },
          { step: "03", title: "Drop & Waterproof Immersion Trials", desc: "Repeated drop-impact tests and continuous underwater electrical operation." },
          { step: "04", title: "Retail Packaging & International Distribution", desc: "Luxury gift-box packaging and global fulfillment to major e-commerce platforms." }
        ],
        metricBadge: "110,000 RPM Digital Motor"
      },
      {
        id: "wellness",
        title: "Wellness",
        badge: "Full-Spectrum Infrared & Circadian Bio-Lighting",
        description: "Full-spectrum infrared recovery saunas, medical-grade HEPA air decontamination towers, acoustic sound frequency loungers, and dynamic circadian lighting systems.",
        image: "/chain_card_1_engineering.jpg",
        keyFeatures: [
          "Near, mid, and far infrared ceramic heating panels with zero EMF radiation",
          "H14 medical grade HEPA filtration capturing 99.995% of airborne particulates",
          "Circadian lighting dynamically shifting color temperature from 2200K to 6500K",
          "FSC-certified Canadian red cedar and eco-friendly structural architecture"
        ],
        process: [
          { step: "01", title: "Photobiological & Acoustic R&D", desc: "Collaborating with physiological researchers on optimal recovery wavelengths." },
          { step: "02", title: "Non-Toxic Structural Cabinetmaking", desc: "Precision tongue-and-groove joinery with zero toxic VOC glues or varnishes." },
          { step: "03", title: "Electromagnetic Field (EMF) Nullification", desc: "Shielded conductive conduits ensuring ultra-low electromagnetic radiation." },
          { step: "04", title: "Commercial Hospitality Commissioning", desc: "Turnkey installation across luxury residences, wellness spas, and athletic clubs." }
        ],
        metricBadge: "Medical Grade H14 & Zero EMF"
      },
      {
        id: "textiles",
        title: "Textiles",
        badge: "Performance Polymers & Technical Smart Fabrics",
        description: "Hydrophobic technical apparel membranes, flame-retardant industrial upholstery textiles, anti-microbial healthcare beddings, and conductive woven sensor fabrics.",
        image: "/chain_card_7_warehouse.jpg",
        keyFeatures: [
          "20,000mm hydrostatic head waterproof rating with 20,000 g/m²/24h breathability",
          "Permanent inherent flame retardancy complying with DIN 4102 B1 standards",
          "Silver-ion antimicrobial yarn preventing 99.9% bacterial colonization",
          "OEKO-TEX Standard 100 Class 1 certified free from harmful substances"
        ],
        process: [
          { step: "01", title: "Polymer Extrusion & Filament Spinning", desc: "Formulating high-tenacity polyester and polyamide synthetic filaments." },
          { step: "02", title: "High-Speed Rapier Loom Weaving", desc: "Multi-axis weaving creating dense, abrasion-resistant textile matrices." },
          { step: "03", title: "Lamination & Hydrophobic Coating", desc: "PTFE / PU membrane bonding and eco-friendly PFC-free water-repellent finishing." },
          { step: "04", title: "Martindale Rub & Flame Chamber Testing", desc: "100,000+ rub cycle testing and vertical flame chamber verification." }
        ],
        metricBadge: "OEKO-TEX & DIN 4102 B1"
      }
    ],

    "robotics": [
      {
        id: "industrial-robots",
        title: "Industrial Robots",
        badge: "6-Axis Articulated Arms & Heavy Manipulators",
        description: "High-precision 6-axis articulated industrial robotic arms, high-speed delta pick-and-place robots, and heavy-payload welding manipulators engineered with German harmonic drive gearing for sub-0.02mm repeatability.",
        image: "/clean_robotics.jpg",
        keyFeatures: [
          "Payload capacities from 3kg lightweight assembly to 800kg foundry duties",
          "Sub-0.02 mm position repeatability at full speed and maximum reach",
          "German zero-backlash harmonic drive and planetary reduction gearboxes",
          "Integrated EtherCAT and Profinet real-time industrial fieldbus interfaces"
        ],
        process: [
          { step: "01", title: "Kinematic Dynamic Simulation", desc: "Multi-body simulation optimizing joint torques, acceleration, and payload envelopes." },
          { step: "02", title: "Aviation-Grade Casting & Machining", desc: "High-strength cast aluminum arm structures machined on 5-axis CNC centers." },
          { step: "03", title: "Laser Tracker Metrology Calibration", desc: "Automated 3D laser interferometer calibration generating unique kinematic offsets." },
          { step: "04", title: "Manufacturing Cell Deployment", desc: "On-site robotic cell installation, tool center point (TCP) teaching, and safety interlocks." }
        ],
        metricBadge: "±0.02mm Repeatability"
      },
      {
        id: "warehouse-automation",
        title: "Warehouse Automation",
        badge: "High-Bay ASRS, Shuttles & Sortation Networks",
        description: "Turnkey Automated Storage and Retrieval Systems (ASRS), 4-directional pallet shuttles, high-speed shoe sorters, and intelligent vertical lift modules (VLM) delivering continuous 24/7 fulfillment throughput.",
        image: "/platform_robotics.jpg",
        keyFeatures: [
          "Vertical storage heights up to 45 meters maximizing cube utilization",
          "Pallet shuttle travel speeds up to 4.0 m/s with 1.5-ton payload capacity",
          "Cross-belt parcel sorters handling over 25,000 items per hour",
          "Direct integration with SAP, Oracle, and proprietary WMS platforms"
        ],
        process: [
          { step: "01", title: "Throughput & Order Profile Modeling", desc: "Simulation of peak hourly picks, pallet turnover, and SKU velocity analysis." },
          { step: "02", title: "Structural Steel Rack & Rail Fabrication", desc: "Automated roll-forming of high-tolerance uprights and guidance tracks." },
          { step: "03", title: "PLC Software Emulation & Dry Run", desc: "Digital twin testing verifying PLC logic prior to on-site physical erection." },
          { step: "04", title: "Full-Scale Live Commissioning", desc: "Phased ramp-up, real-time WMS reconciliation, and 24/7 technical handover." }
        ],
        metricBadge: "25,000+ Items/Hour Sorting"
      },
      {
        id: "ai-robotics",
        title: "AI Robotics",
        badge: "Vision-Guided Cobots & Autonomous Defect AI",
        description: "Collaborative robots (Cobots) equipped with 3D RGB-D vision and deep neural networks for adaptive random bin picking, autonomous weld seam tracking, and sub-millimeter visual surface quality inspection.",
        image: "/mission_smart_factory.jpg",
        keyFeatures: [
          "ISO/TS 15066 safety-rated power and force limiting (PFL) for fenceless collaboration",
          "Structured-light 3D cameras identifying complex shiny or entangled parts",
          "Edge tensor computing processing vision classification in under 15 milliseconds",
          "Intuitive hand-guided lead-through teaching requiring zero complex coding"
        ],
        process: [
          { step: "01", title: "Synthetic AI Dataset Generation", desc: "Photorealistic 3D CAD rendering training deep neural networks across lighting variances." },
          { step: "02", title: "Sensor & End-Effector Integration", desc: "Mounting high-resolution 3D cameras and pneumatic adaptive vacuum grippers." },
          { step: "03", title: "Collaborative Safety Validation", desc: "Biomechanical collision force testing verifying strict operator safety limits." },
          { step: "04", title: "Factory Floor Plug-and-Play", desc: "Station integration into assembly lines with remote cloud monitoring." }
        ],
        metricBadge: "<15ms Edge AI Vision"
      },
      {
        id: "amrs",
        title: "AMRs (Autonomous Mobile Robots)",
        badge: "LiDAR SLAM Industrial Fleet Vehicles",
        description: "Natural feature navigation Autonomous Mobile Robots (AMRs), automated guided forklifts, and robotic tuggers moving heavy pallets and subassemblies through complex factory environments without floor markers.",
        image: "/chain_card_6_truck.jpg",
        keyFeatures: [
          "360° Safety LiDAR and 3D depth cameras providing Category 4 safety zones",
          "Autonomous dynamic path re-planning around unexpected obstacles and personnel",
          "Payload towing capacity up to 3,000 kg and automatic docking top-rollers",
          "Automated opportunity charging delivering continuous 24/7 fleet uptime"
        ],
        process: [
          { step: "01", title: "Facility SLAM Mapping", desc: "Laser scanning facility floors generating millimeter-accurate topological maps." },
          { step: "02", title: "Chassis & Swerve-Drive Machining", desc: "Welding heavy steel chassis and assembling high-torque brushless drive hubs." },
          { step: "03", title: "Fleet Management Software Routing", desc: "Configuring multi-agent traffic controllers preventing bottlenecks at intersections." },
          { step: "04", title: "Production Line Rollout", desc: "Automated ERP mission dispatch and continuous wireless supervisory control." }
        ],
        metricBadge: "Up to 3,000kg Autonomous Payload"
      },
      {
        id: "factory-automation",
        title: "Factory Automation",
        badge: "Industry 4.0 Cyber-Physical Digital Twins",
        description: "End-to-end automated manufacturing lines, high-speed indexers, centralized SCADA control architecture, and real-time edge telemetry transforming conventional plants into agile, lights-out smart factories.",
        image: "/vision_pillar_2.jpg",
        keyFeatures: [
          "Siemens S7-1500 and Beckhoff TwinCAT unified automation control",
          "Comprehensive Digital Twin simulation for predictive cycle time optimization",
          "Edge industrial IoT vibration, temperature, and current predictive maintenance",
          "OPC UA and MQTT industrial communication architecture for ERP connectivity"
        ],
        process: [
          { step: "01", title: "Manufacturing Process Architecture", desc: "Detailed cycle time balancing, station ergonomics, and automated line flow design." },
          { step: "02", title: "Modular Station Construction", desc: "Extruded aluminum framing, pneumatic linear actuators, and servo index tables." },
          { step: "03", title: "SCADA & Safety Loop Testing", desc: "Rigorous emergency stop loop checks and high-volume mock production runs." },
          { step: "04", title: "Full Turnkey Plant Handover", desc: "Live production start, OEE performance certification, and long-term SLA service." }
        ],
        metricBadge: "OPC UA & SCADA Lights-Out"
      }
    ],

    "global-trading": [
      {
        id: "energy",
        title: "Energy",
        badge: "LNG, Refined Fuels & Green Hydrogen Certificates",
        description: "TAKNISER executes large-scale international physical energy commodity trading, chartered LNG carrier shipments, low-sulfur marine gasoil supply, and cross-border renewable green power purchase contracts.",
        image: "/platform_trading.jpg",
        keyFeatures: [
          "Chartered Q-Flex and standard LNG vessel deliveries across Europe & Asia",
          "Low-sulfur marine fuels complying with IMO 2020 environmental standards",
          "Guaranteed renewable Energy Attribute Certificates (EACs / GOs)",
          "Direct refinery off-take and terminal storage tank lease facilities"
        ],
        process: [
          { step: "01", title: "Upstream Energy Allocation", desc: "Negotiating long-term bilateral off-takes with national energy producers." },
          { step: "02", title: "Maritime Vessel Chartering & Vetting", desc: "SIRE vetted double-hull gas carriers and oil tankers securing safe sea transit." },
          { step: "03", title: "Terminal Discharge & Quality Sampling", desc: "Calorific and chemical verification conducted by independent cargo surveyors." },
          { step: "04", title: "Pipeline & Grid Distribution", desc: "Regasification and injection into continental national high-pressure pipeline grids." }
        ],
        metricBadge: "Q-Flex LNG & IMO 2020 Standard"
      },
      {
        id: "electrical-engineering",
        title: "Electrical Engineering",
        badge: "HV Gas-Insulated Switchgear & Power Transformers",
        description: "High-voltage and medium-voltage substation equipment, gas-insulated switchgear (GIS) up to 550 kV, power step-up transformers, and smart grid harmonic filtering banks for utility power stations.",
        image: "/chain_card_1_engineering.jpg",
        keyFeatures: [
          "SF6-free eco-friendly gas-insulated switchgear up to 550 kV",
          "Power transformers up to 1,000 MVA with low no-load loss design",
          "Microprocessor numerical protection relays with IEC 61850 communication",
          "Type-tested at KEMA and CESI international independent high-voltage labs"
        ],
        process: [
          { step: "01", title: "Grid Fault & Dielectric Modeling", desc: "Short-circuit withstand, transient overvoltage, and insulation coordination analysis." },
          { step: "02", title: "Heavy Copper Winding & Core Stacking", desc: "High-permeability grain-oriented silicon steel core stacking under climate control." },
          { step: "03", title: "Full-Voltage Lightning Impulse Testing", desc: "Simulated 1,550 kV lightning impulse and partial discharge measurement." },
          { step: "04", title: "Substation Site Erection & Commissioning", desc: "Specialist heavy-haul delivery, vacuum oil filling, and grid energization." }
        ],
        metricBadge: "550 kV & KEMA Type Tested"
      },
      {
        id: "electronics",
        title: "Electronics",
        badge: "Semiconductors & Industrial Passives",
        description: "Global distribution and strategic procurement of silicon carbide (SiC) and gallium nitride (GaN) power MOSFETs, FPGA processing units, multilayer ceramic capacitors, and automotive-grade microcontrollers.",
        image: "/vision_pillar_3.jpg",
        keyFeatures: [
          "Direct authorized tier-1 semiconductor foundry and factory packaging channels",
          "Automotive grade AEC-Q100 and AEC-Q200 qualified component inventory",
          "Certified anti-counterfeit laboratory inspection (X-ray, decapsulation, XRF)",
          "Buffer warehousing programs mitigating global semiconductor shortage shocks"
        ],
        process: [
          { step: "01", title: "BOM Sourcing & Allocation", desc: "Direct manufacturer allocation leveraging multi-million dollar volume buying power." },
          { step: "02", title: "IDEA-STD-1010 Anti-Counterfeit Lab Testing", desc: "Microscopic lead inspection, acoustic microscopy, and electrical testing." },
          { step: "03", title: "ESD & Moisture Barrier Vacuum Packaging", desc: "Tape-and-reel packaging in ESD-safe cleanrooms per JEDEC J-STD-033." },
          { step: "04", title: "Just-In-Time Factory Delivery", desc: "Direct kanban supply to major electronic manufacturing service (EMS) lines." }
        ],
        metricBadge: "AEC-Q100 & Anti-Counterfeit Certified"
      },
      {
        id: "defense-aerospace",
        title: "Defense & Aerospace",
        badge: "Tactical Communications & Avionics Hardware",
        description: "Ruggedized tactical communications terminals, radar microwave sub-assemblies, unmanned aerial vehicle (UAV) structural composites, and mil-spec electro-optical reconnaissance hardware built under strict export controls.",
        image: "/platform_space.jpg",
        keyFeatures: [
          "Fully compliant with ITAR, BAFA, and international export control regimes",
          "MIL-STD-810H environmental and MIL-STD-461G electromagnetic hardening",
          "Encrypted Software-Defined Radio (SDR) with frequency hopping resilience",
          "Precision carbon-fiber aerodynamic structures for military aerospace platforms"
        ],
        process: [
          { step: "01", title: "Regulatory Export License Approval", desc: "Government verification, end-user certificate (EUC) clearance, and security audit." },
          { step: "02", title: "Mil-Spec Ruggedized Fabrication", desc: "Milled billet aluminum housings with hermetic seals and conductive EMI gaskets." },
          { step: "03", title: "Ballistic, Shock & Thermal Profiling", desc: "Extreme environmental torture testing under simulated military deployment." },
          { step: "04", title: "Secure Escorted Logistics", desc: "Encrypted chain of custody and government-authorized bonded logistics." }
        ],
        metricBadge: "MIL-STD-810H & BAFA Approved"
      },
      {
        id: "agri-commodities",
        title: "Agri-commodities",
        badge: "Ocean Vessel Grain, Oilseed & Sugar Cargoes",
        description: "High-volume international grain trading, chartered bulk carriers of non-GMO soybeans, milling wheat, corn, unrefined raw cane sugar, and vegetable edible oils connecting major agricultural producing continents with global consumption centers.",
        image: "/about_logistics_port.jpg",
        keyFeatures: [
          "Panamax and Supramax vessel deliveries (50,000 to 75,000 MT per cargo)",
          "Strict GAFTA and FOSFA standardized commercial contracts",
          "Independent phytosanitary and non-GMO certification by leading global surveyors",
          "Terminal silo storage and grain elevator networks across major maritime ports"
        ],
        process: [
          { step: "01", title: "Origin Farm & Elevator Sourcing", desc: "Direct procurement from agricultural cooperatives across Americas and Black Sea." },
          { step: "02", title: "Port Terminal Loading & Grain Aeration", desc: "Automated grain inspection, temperature monitoring, and high-speed hold loading." },
          { step: "03", title: "Independent Surveyor Phytosanitary Release", desc: "Sampling moisture, test weight, and protein content verifying contract specs." },
          { step: "04", title: "Deep-Water Port Discharge", desc: "Pneumatic unloader discharge into coastal grain silos or direct rail wagons." }
        ],
        metricBadge: "GAFTA / FOSFA International Standard"
      },
      {
        id: "metal",
        title: "Metal",
        badge: "Structural Steel, Hot-Rolled Coils & Billets",
        description: "Heavy structural steel H-beams, hot-rolled and cold-rolled steel coils, rebar, and stainless steel sheets supplied to mega-infrastructure projects, bridge constructions, and industrial fabrication yards globally.",
        image: "/about_midcentury_factory.jpg",
        keyFeatures: [
          "EN 10025 structural steel grades (S235, S355, S460) with mill test certificates",
          "Hot-dipped galvanized and pre-painted steel coils for industrial roofing and facades",
          "High-tensile deformed rebar (B500B / ASTM A615 Grade 60) for civil engineering",
          "Third-party ultrasonic non-destructive testing (NDT) ensuring internal soundness"
        ],
        process: [
          { step: "01", title: "Melt Shop & Blast Furnace Production", desc: "Converter smelting and continuous slab/billet casting under computerized control." },
          { step: "02", title: "Heavy Section Hot-Rolling", desc: "High-precision multi-stand rolling achieving exact dimensional tolerances." },
          { step: "03", title: "Non-Destructive Testing (NDT) & Charpy Impact", desc: "Sub-zero impact toughness tests and mechanical tensile verification." },
          { step: "04", title: "Breakbulk Maritime Chartering", desc: "Seaworthy bundle packaging and heavy-lift vessel shipping to project quays." }
        ],
        metricBadge: "EN 10025 & ASTM A615 Certified"
      }
    ]
  }
};
