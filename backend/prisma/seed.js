const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

const BUSINESS_DIVISIONS = [
  { code: "01", slug: "space-economy", title: "TAKNISER Space Economy", tagline: "Driving the future beyond Earth through advanced space technologies and global aerospace partnerships.", description: "Specialized engineering, satellite components, launch support systems, and orbital electronics empowering next-generation space exploration and communication networks.", iconName: "Rocket", categories: ["Satellite Components","Space Communications","Earth Observation","Space Electronics","Launch Support Technologies"] },
  { code: "02", slug: "mining-minerals", title: "TAKNISER Mining & Minerals", tagline: "Supporting the world's industrial growth through responsible mining, processing, sourcing, and global trading of strategic minerals.", description: "Global strategic sourcing and critical mineral supply chains supplying essential metals and rare earth elements.", iconName: "Pickaxe", categories: ["Copper","Lithium","Nickel","Rare Earth Elements","Aluminum","Graphite","Critical Mineral Trading","Coal"] },
  { code: "03", slug: "agtech", title: "TAKNISER AgTech", tagline: "Building sustainable agriculture through modern farming technologies, food processing, and global Agri supply chains.", description: "Advanced precision irrigation, high-yield seeds, eco-friendly fertilizers, and automated food processing equipment ensuring global food security.", iconName: "Sprout", categories: ["Irrigation Systems","Fertilizers","Seeds","Agricultural Machinery","Food Processing"] },
  { code: "04", slug: "lifecare", title: "TAKNISER LifeCare", tagline: "Delivering innovative healthcare technologies that improve lives worldwide.", description: "Precision medical diagnostic systems, hospital infrastructure equipment, biotechnology integration, and high-purity pharmaceutical sourcing.", iconName: "HeartPulse", categories: ["Medical Devices","Hospital Equipment","Pharmaceuticals","Biotechnology","Diagnostics Equipment"] },
  { code: "05", slug: "lifestyle", title: "TAKNISER Lifestyle", tagline: "Enhancing everyday living through quality consumer products and smart lifestyle solutions.", description: "High-grade consumer appliances, smart home automation hubs, wellness technology, and engineered textiles for premium global markets.", iconName: "Home", categories: ["Consumer Appliances","Smart Home","Personal Care","Wellness","Fabric"] },
  { code: "06", slug: "robotics", title: "TAKNISER Robotics", tagline: "Accelerating Industry 4.0 with intelligent automation and AI-driven industrial solutions.", description: "State-of-the-art industrial arm robots, Autonomous Mobile Robots (AMRs), smart warehouse automation, and factory-wide cyber-physical integration.", iconName: "Bot", categories: ["Industrial Robots","Warehouse Automation","AI Robotics","AMRs (Autonomous Mobile Robots)","Factory Automation"] },
  { code: "07", slug: "global-trading", title: "TAKNISER Global Trading", tagline: "Connecting manufacturers, industries, governments, and global markets through an integrated international trading ecosystem.", description: "Cross-border multi-commodity supply chains, energy trading, defence & aerospace procurement, and strategic industrial component distribution.", iconName: "Globe", categories: ["Energy","Electrical","Electronics","Defence & Aerospace","Agri Trade","Metal"] },
];

const LOCATIONS = [
  { region: "Europe", country: "Germany", type: "HQ", title: "Global HQ – TAKNISER GmbH", description: "Global Headquarters & Central Engineering Center (Hesse, Germany)", coordinates: '{"x":50,"y":28}' },
  { region: "Europe", country: "Germany", type: "RHQ", title: "European RHQ Network (10 RHQs)", description: "10 Strategic Regional Headquarters covering Western & Eastern Europe", coordinates: '{"x":48,"y":30}' },
  { region: "North America", country: "United States", type: "RHQ", title: "TAKNISER Sterling Americana LLC", description: "North American Regional HQ & Strategic Procurement Division", coordinates: '{"x":22,"y":32}' },
  { region: "Latin America", country: "Mexico", type: "RHQ", title: "TAKNISER Latin America – Mexico Hub", description: "Manufacturing & North-South Logistics Coordination", coordinates: '{"x":20,"y":48}' },
  { region: "Latin America", country: "Panama", type: "RHQ", title: "TAKNISER Panama Regional Office", description: "Maritime Trade & Canal Logistics Center", coordinates: '{"x":27,"y":55}' },
  { region: "Latin America", country: "Chile", type: "RHQ", title: "TAKNISER Chile Mineral Operations", description: "Mining & Critical Minerals Sourcing Hub", coordinates: '{"x":30,"y":78}' },
  { region: "Latin America", country: "Brazil", type: "RHQ", title: "TAKNISER Brazil Operations", description: "AgTech & Industrial Sourcing Headquarters", coordinates: '{"x":36,"y":68}' },
  { region: "Africa", country: "Ghana", type: "RHQ", title: "TAKNISER West Africa Hub", description: "Infrastructure & Mineral Trade Office", coordinates: '{"x":47,"y":58}' },
  { region: "Africa", country: "Kenya", type: "RHQ", title: "TAKNISER East Africa Hub", description: "Energy & Agricultural Technology Division", coordinates: '{"x":58,"y":60}' },
  { region: "Africa", country: "South Africa", type: "RHQ", title: "TAKNISER Southern Africa RHQ", description: "Industrial Equipment & Mining Supply Hub", coordinates: '{"x":54,"y":79}' },
  { region: "Middle East", country: "UAE", type: "LOGISTICS_HUB", title: "JAFZA Logistics Hub & Middle East RHQ", description: "Primary Global Distribution & Free Zone Logistics Center", coordinates: '{"x":62,"y":44}' },
  { region: "Middle East", country: "Saudi Arabia", type: "RHQ", title: "TAKNISER Saudi Arabia Operations", description: "Infrastructure, EPC & Energy Trade Headquarters", coordinates: '{"x":60,"y":42}' },
  { region: "Asia", country: "India", type: "RHQ", title: "TAKNISER South Asia RHQ", description: "Engineering Center & Industrial Sourcing Office", coordinates: '{"x":72,"y":46}' },
  { region: "Asia", country: "Singapore", type: "RHQ", title: "TAKNISER Southeast Asia RHQ", description: "Financial & International Global Trading Center", coordinates: '{"x":80,"y":59}' },
  { region: "Asia", country: "China", type: "RHQ", title: "TAKNISER Greater China Hub", description: "Manufacturing & Supply Chain Coordination", coordinates: '{"x":82,"y":38}' },
  { region: "Asia", country: "Hong Kong", type: "RHQ", title: "TAKNISER Hong Kong Trading", description: "Trade Finance & Asia Logistics Office", coordinates: '{"x":83,"y":43}' },
  { region: "Asia", country: "Japan", type: "RHQ", title: "TAKNISER Japan Robotics Office", description: "Robotics & High-Tech Components Division", coordinates: '{"x":90,"y":35}' },
  { region: "Asia", country: "Türkiye", type: "RHQ", title: "TAKNISER Eurasia Bridge Hub", description: "Eurasian Cross-Border Trade & Logistics Center", coordinates: '{"x":56,"y":35}' },
  { region: "Oceania", country: "Australia", type: "RHQ", title: "TAKNISER Oceania RHQ", description: "Mining & Heavy Equipment Operations Hub", coordinates: '{"x":88,"y":75}' },
];

async function main() {
  console.log("Seeding TAKNISER database...");

  // Admin User
  const adminEmail = process.env.ADMIN_INITIAL_EMAIL || "admin@takniser.de";
  const adminPassword = process.env.ADMIN_INITIAL_PASSWORD || "TakniserGermanEngineering2046!";
  const hashed = await bcrypt.hash(adminPassword, 10);
  const existing = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!existing) {
    await prisma.user.create({ data: { email: adminEmail, name: "TAKNISER Executive Administrator", password: hashed, role: "ADMIN" } });
    console.log(`Created admin: ${adminEmail}`);
  }

  // Global Locations
  const locCount = await prisma.globalLocation.count();
  if (locCount === 0) {
    for (const loc of LOCATIONS) {
      await prisma.globalLocation.create({ data: loc });
    }
    console.log(`Seeded ${LOCATIONS.length} locations.`);
  }

  // Sample Contact Inquiry
  const inqCount = await prisma.contactInquiry.count();
  if (inqCount === 0) {
    await prisma.contactInquiry.create({
      data: {
        fullName: "Dr. Marcus Weber",
        company: "European Clean Energy & Grid GmbH",
        email: "m.weber@cleangrid-europe.com",
        phone: "+49 69 98765432",
        country: "Germany",
        subject: "Turnkey Electrical Infrastructure Procurement — Vision 2046",
        message: "We are reaching out to discuss high-voltage transformer sourcing and EPC support for our renewable energy distribution expansion across Hesse and Central Europe.",
        status: "PENDING",
      }
    });
    console.log("Created sample inquiry.");
  }

  console.log("Seeding completed!");
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
