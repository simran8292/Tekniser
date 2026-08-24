import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  Header,
  Footer,
  PageNumber,
} from "docx";
import * as fs from "fs";
import * as path from "path";

// Import data from the project
import {
  CORPORATE_INFO,
  BUSINESS_DIVISIONS,
  CAPABILITIES,
  INDUSTRIES,
  GLOBAL_NETWORK_LOCATIONS,
} from "../src/lib/data";

// Timeline from About page
const TIMELINE = [
  { period: "Early 20th Century", title: "The German Foundation", description: "The TAKNISER story began in Hesse (Hessen), Germany. Engineers built a reputation for uncompromising quality in diesel power generation systems, ensuring uninterrupted power for factories, transport networks, and public infrastructure across Europe." },
  { period: "Mid 20th Century", title: "Industrial Manufacturing Expansion", description: "Following the philosophy of 'Qualität vor Quantität', TAKNISER expanded into broader industrial manufacturing, meticulous craftsmanship, disciplined execution, and precision engineering across multiple sectors." },
  { period: "Late 20th Century", title: "International Sourcing & Procurement", description: "The organization evolved into international sourcing, procurement, supply chain management, technology integration, and global logistics — establishing trading corridors across Europe, Asia, and the Americas." },
  { period: "Early 21st Century", title: "Diversified Global Conglomerate", description: "TAKNISER transformed into a diversified industrial organization, building 29+ Regional Headquarters and operational presence in 190+ countries across 6 continents through strategic partnerships and acquisitions." },
  { period: "Vision 2046", title: "TAKNISER ONE GLOBE", description: "Operating under the banner of TAKNISER ONE GLOBE — one integrated global industrial ecosystem where engineering, manufacturing, sourcing, logistics, technology, and international trade operate seamlessly without geographical boundaries." },
];

// Strategic Pillars from Vision 2046 page
const STRATEGIC_PILLARS = [
  { title: "Innovation", desc: "Continuous investment in advanced technologies, digital capabilities, and next-generation engineering talent." },
  { title: "Sustainability", desc: "Building responsible supply chains, environmentally conscious operations, and long-term ecological commitments." },
  { title: "Global Expansion", desc: "Strengthening our presence across every major international market through strategic RHQ expansion and partnerships." },
  { title: "Technology Leadership", desc: "Investing in Industry 4.0, AI robotics, space economy, digital transformation, and smart infrastructure." },
  { title: "Trusted Partnerships", desc: "Creating long-term value for customers, partners, employees, industries, and society through trusted relationships." },
  { title: "Integrated Network", desc: "One integrated global industrial ecosystem connecting engineering, manufacturing, sourcing, logistics, and trade." },
];

function createSectionHeading(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text: text,
        bold: true,
        size: 32, // 16pt
        color: "002d3b",
      }),
    ],
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 200 },
    keepNext: true,
  });
}

function createSubSectionHeading(text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text: text,
        bold: true,
        size: 24, // 12pt
        color: "009999",
      }),
    ],
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 150 },
    keepNext: true,
  });
}

function createParagraph(text: string, options?: { italic?: boolean; bold?: boolean; color?: string }): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text: text,
        italics: options?.italic,
        bold: options?.bold,
        color: options?.color,
        size: 22, // 11pt
      }),
    ],
    spacing: { after: 150 },
  });
}

function createBulletPoint(boldPrefix: string, text: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text: boldPrefix,
        bold: true,
        size: 22,
      }),
      new TextRun({
        text: text,
        size: 22,
      }),
    ],
    bullet: {
      level: 0,
    },
    spacing: { after: 100 },
  });
}

function createDivider(): Paragraph {
  return new Paragraph({
    border: {
      bottom: {
        style: BorderStyle.SINGLE,
        size: 6,
        color: "009999",
      },
    },
    spacing: { before: 200, after: 200 },
  });
}

// Generate the Document
async function generateDoc() {
  const doc = new Document({
    title: "TAKNISER ONE GLOBE Complete Website Copy",
    description: "Complete verbatim content from all pages of the TAKNISER ONE GLOBE website.",
    sections: [
      {
        properties: {},
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: "TAKNISER ONE GLOBE — Complete Website Content Reference",
                    color: "009999",
                    size: 16,
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "Page ",
                    size: 16,
                  }),
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    size: 16,
                  }),
                  new TextRun({
                    text: " of ",
                    size: 16,
                  }),
                  new TextRun({
                    children: [PageNumber.TOTAL_PAGES],
                    size: 16,
                  }),
                ],
              }),
            ],
          }),
        },
        children: [
          // Title Page / Cover Section
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 1000, after: 200 },
            children: [
              new TextRun({
                text: "TAKNISER ONE GLOBE",
                bold: true,
                size: 52,
                color: "002d3b",
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 },
            children: [
              new TextRun({
                text: "100+ Years of German Engineering Heritage",
                bold: true,
                color: "009999",
                size: 24,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 2500 },
            children: [
              new TextRun({
                text: "Building the Future of Global Industry",
                italics: true,
                size: 22,
              }),
            ],
          }),
          
          createDivider(),

          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 1000, after: 100 },
            children: [
              new TextRun({
                text: "COMPLETE VERBATIM WEBSITE CONTENT DOCUMENT",
                bold: true,
                size: 20,
                color: "002d3b",
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 1000 },
            children: [
              new TextRun({
                text: `Generated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`,
                size: 18,
              }),
            ],
          }),

          new Paragraph({ text: "", pageBreakBefore: true }),

          // ==================== HOME PAGE ====================
          createSectionHeading("I. Homepage (Page: /)"),
          createDivider(),
          
          createSubSectionHeading("Hero Section"),
          createParagraph("Heading: BUILDING THE FUTURE OF GLOBAL INDUSTRY"),
          createParagraph("Subheading: 100+ Years of German Engineering Heritage. Operating in 190+ Countries through 29 Regional Headquarters."),
          
          createSubSectionHeading("Strategic Ambition / Vision 2046 Section"),
          createParagraph("Label: Our Strategic Ambition"),
          createParagraph("Heading: Vision 2046"),
          createParagraph(`Quote: “${CORPORATE_INFO.vision2046}”`, { italic: true }),
          
          createParagraph("Pillars:"),
          createBulletPoint("• Innovation: ", "Future-ready technologies across all sectors"),
          createBulletPoint("• Sustainability: ", "Responsible global supply chains"),
          createBulletPoint("• Global Expansion: ", "190+ countries and growing"),
          createBulletPoint("• Trusted Partnerships: ", "Long-term value creation"),

          new Paragraph({ text: "", pageBreakBefore: true }),

          // ==================== ABOUT PAGE ====================
          createSectionHeading("II. About Us Page (Page: /about)"),
          createDivider(),

          createSubSectionHeading("Page Hero Section"),
          createParagraph("Label: Corporate Heritage"),
          createParagraph("Heading: About TAKNISER"),
          createParagraph("Description: For more than a century, TAKNISER has represented the enduring legacy of German engineering — built upon the timeless principles of Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst, and Vertrauen."),

          createSubSectionHeading("Heritage Statement"),
          createParagraph("Label: Hesse (Hessen), Germany — Early 20th Century"),
          createParagraph("Heading: Where German Engineering Excellence Was Born"),
          createParagraph("Paragraph 1: The TAKNISER story began more than 100 years ago in the historic state of Hesse (Hessen), Germany, where generations of engineers built a reputation for uncompromising quality, technical expertise, and dependable industrial solutions."),
          createParagraph("Paragraph 2: During one of Europe's most significant periods of industrial growth, TAKNISER specialized in the engineering, modernization, maintenance, and technical support of diesel power generation systems — ensuring uninterrupted power for factories, transportation networks, public infrastructure, and essential industries."),
          createParagraph("Paragraph 3: From the very beginning, TAKNISER embraced the German philosophy of “Qualität vor Quantität” — Quality before Quantity. Every engineering solution reflected meticulous craftsmanship, disciplined execution, precision manufacturing, and an unwavering commitment to reliability."),
          createParagraph("Quote Panel: “These values became more than engineering principles — they became the DNA of the TAKNISER brand.”", { italic: true }),

          createSubSectionHeading("Corporate Timeline"),
          createParagraph("Heading: A Century of Industrial Evolution (The TAKNISER corporate journey across more than 100 years)"),
          ...TIMELINE.flatMap((item) => [
            new Paragraph({
              children: [
                new TextRun({
                  text: `• ${item.period}: ${item.title}`,
                  bold: true,
                  color: "002d3b",
                  size: 22,
                }),
              ],
              spacing: { before: 100, after: 50 },
            }),
            createParagraph(item.description),
          ]),

          new Paragraph({ text: "", pageBreakBefore: true }),

          // ==================== CAPABILITIES PAGE ====================
          createSectionHeading("III. Capabilities Page (Page: /capabilities)"),
          createDivider(),

          createSubSectionHeading("Page Hero Section"),
          createParagraph("Label: Industrial Value Chain"),
          createParagraph("Heading: Our Capabilities"),
          createParagraph("Description: From engineering and manufacturing through to international logistics, digital transformation, and lifecycle after-sales services — TAKNISER delivers end-to-end industrial solutions across 12 integrated capability areas."),

          createSubSectionHeading("The 12 Core Capabilities"),
          ...CAPABILITIES.map((cap, idx) => 
            createBulletPoint(`${String(idx + 1).padStart(2, "0")}. ${cap.title}: `, cap.description)
          ),

          createSubSectionHeading("Integrated Value Chain Flow"),
          createParagraph("Value Chain Sequence: Engineering → Manufacturing → Sourcing → Procurement → EPC Supply → Supply Chain → Logistics → Distribution → Technology → Digital → Infrastructure → After-Sales", { bold: true }),

          new Paragraph({ text: "", pageBreakBefore: true }),

          // ==================== INDUSTRIES PAGE ====================
          createSectionHeading("IV. Industries Served Page (Page: /industries)"),
          createDivider(),

          createSubSectionHeading("Page Hero Section"),
          createParagraph("Label: Target Sectors"),
          createParagraph("Heading: Industries We Serve"),
          createParagraph("Description: TAKNISER ONE GLOBE's diversified portfolio serves twelve of the world's most essential industrial sectors — providing products, technologies, sourcing, and integrated supply chain solutions."),

          createSubSectionHeading("The 12 Target Industries"),
          ...INDUSTRIES.map((ind, idx) => 
            createBulletPoint(`${String(idx + 1).padStart(2, "0")}. ${ind.title}: `, ind.description)
          ),

          createSubSectionHeading("Who We Work With"),
          createParagraph("Audience Groups: Global Manufacturers, Governments & Utilities, EPC Contractors, OEMs, Infrastructure Developers, Industrial Enterprises, Distributors, System Integrators, Institutional Buyers, Multinational Corporations.", { italic: true }),

          new Paragraph({ text: "", pageBreakBefore: true }),

          // ==================== BUSINESS DIVISIONS ====================
          createSectionHeading("V. Business Divisions Page (Page: /divisions)"),
          createDivider(),

          createSubSectionHeading("Page Hero Section"),
          createParagraph("Label: TAKNISER Conglomerate Portfolio"),
          createParagraph("Heading: Our Business Divisions"),
          createParagraph("Description: Seven transformative sectors, one integrated global platform. TAKNISER ONE GLOBE connects industrial manufacturing, space economy, strategic minerals, AgTech, LifeCare, intelligent robotics, and international trade."),

          createSubSectionHeading("The 7 Business Divisions"),
          ...BUSINESS_DIVISIONS.flatMap((div) => [
            new Paragraph({
              children: [
                new TextRun({
                  text: `Division 0${div.code}: ${div.title}`,
                  bold: true,
                  color: "002d3b",
                  size: 24,
                }),
              ],
              spacing: { before: 200, after: 50 },
            }),
            createParagraph(`Tagline: ${div.tagline}`, { bold: true }),
            createParagraph(`Description: ${div.description}`),
            createParagraph(`Product & Service Categories: ${div.categories.join(", ")}`),
            createDivider(),
          ]),

          new Paragraph({ text: "", pageBreakBefore: true }),

          // ==================== GLOBAL NETWORK PAGE ====================
          createSectionHeading("VI. Global Network Page (Page: /global-network)"),
          createDivider(),

          createSubSectionHeading("Page Hero Section"),
          createParagraph("Label: Global Operational Presence"),
          createParagraph("Heading: Global Network"),
          createParagraph("Description: One Globe. One Network. One Future. — TAKNISER operates through a strategically positioned global network of 29 Regional Headquarters, logistics hubs, engineering centers, and business offices across 190+ countries."),

          createSubSectionHeading("Regional Headquarters Network"),
          ...GLOBAL_NETWORK_LOCATIONS.map((loc) => 
            createBulletPoint(`• ${loc.title} (${loc.country}, Region: ${loc.region}): `, `${loc.description} [Type: ${loc.type.replace("_", " ")}]`)
          ),

          createSubSectionHeading("Global Footprint Statistics"),
          createBulletPoint("• Global Headquarters: ", "1 (Hesse, Germany)"),
          createBulletPoint("• Regional Headquarters: ", "29"),
          createBulletPoint("• Countries & Territories: ", "190+"),
          createBulletPoint("• Continents Active: ", "6"),
          createBulletPoint("• Integrated Logistics Network: ", "Global"),
          createBulletPoint("• Worldwide Sourcing & Procurement: ", "Active"),
          createBulletPoint("• Manufacturing & OEM Partnerships: ", "Multi-continent"),
          createBulletPoint("• International Distribution: ", "Active"),
          createBulletPoint("• Global Business Partners: ", "Growing"),
          createBulletPoint("• Sustainable Growth Strategy: ", "Vision 2046"),

          new Paragraph({ text: "", pageBreakBefore: true }),

          // ==================== VISION 2046 PAGE ====================
          createSectionHeading("VII. Vision 2046 Roadmap (Page: /vision-2046)"),
          createDivider(),

          createSubSectionHeading("Page Hero Section"),
          createParagraph("Label: Strategic Vision"),
          createParagraph("Heading: Vision 2046"),
          createParagraph("Description: TAKNISER's strategic century vision charts the course from a Hessen engineering heritage to a globally respected industrial, technology and trading conglomerate."),

          createSubSectionHeading("The Official Vision Statement"),
          createParagraph(`“${CORPORATE_INFO.vision2046}”`, { italic: true }),

          createSubSectionHeading("Our Mission Pillars (Seven Pillars)"),
          ...CORPORATE_INFO.missionPillars.map((pillar, idx) => 
            createBulletPoint(`${String(idx + 1).padStart(2, "0")}. `, pillar)
          ),

          createSubSectionHeading("Strategic Pillars"),
          ...STRATEGIC_PILLARS.flatMap((p) => [
            new Paragraph({
              children: [
                new TextRun({
                  text: p.title,
                  bold: true,
                  color: "009999",
                  size: 22,
                }),
              ],
              spacing: { before: 100, after: 50 },
            }),
            createParagraph(p.desc),
          ]),

          new Paragraph({ text: "", pageBreakBefore: true }),

          // ==================== CONTACT PAGE ====================
          createSectionHeading("VIII. Contact Us Page (Page: /contact)"),
          createDivider(),

          createSubSectionHeading("Page Hero Section"),
          createParagraph("Label: Corporate Contact Portal"),
          createParagraph("Heading: Contact TAKNISER"),
          createParagraph("Description: Whether you are a manufacturer, government body, EPC contractor, OEM, or institutional buyer — our global corporate team is ready to respond to your inquiry."),

          createSubSectionHeading("Corporate Contact Information"),
          createBulletPoint("• Global Headquarters: ", "TAKNISER GmbH, Hesse (Hessen), Germany"),
          createBulletPoint("• Global Network: ", "29 Regional Headquarters across 190+ Countries & Territories"),
          createBulletPoint("• Response Commitment: ", "Corporate inquiries are reviewed by our regional specialists within 1–3 business days."),
          
          createSubSectionHeading("Inquiry Areas"),
          createParagraph("Industrial Equipment Sourcing, Global Procurement, EPC Project Supply, Engineering Consulting, Distribution Partnerships, Technology Solutions.", { italic: true }),
          
          createSubSectionHeading("Global Logistics Hub"),
          createParagraph("Our JAFZA Logistics Hub in UAE serves as the primary global distribution & free zone logistics center for Middle East, Africa, and Asia operations."),

          new Paragraph({ text: "", pageBreakBefore: true }),

          // ==================== PRIVACY POLICY PAGE ====================
          createSectionHeading("IX. Privacy Policy Page (Page: /privacy)"),
          createDivider(),

          createSubSectionHeading("1. Data Controller"),
          createParagraph("TAKNISER GmbH, headquartered in Hesse (Hessen), Germany, is the data controller responsible for the personal data collected through this platform."),

          createSubSectionHeading("2. Data We Collect"),
          createParagraph("When you submit a contact inquiry, we collect: full name, company name, business email address, phone number (optional), country, subject, and message content. We also collect your IP address for security and spam prevention purposes."),

          createSubSectionHeading("3. Purpose of Processing"),
          createParagraph("Your data is collected solely for the purpose of responding to your corporate inquiry, communicating relevant TAKNISER products and services, and maintaining our business relationship."),

          createSubSectionHeading("4. Data Retention"),
          createParagraph("Corporate inquiry data is retained for a period necessary to fulfil the inquiry and maintain appropriate business records, in accordance with applicable German and international data protection regulations."),

          createSubSectionHeading("5. Your Rights"),
          createParagraph("Under GDPR and applicable data protection law, you have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, submit a request through our corporate contact portal."),

          createSubSectionHeading("6. Contact"),
          createParagraph("For any data protection enquiries, please contact TAKNISER GmbH through our corporate contact portal at takniser.com/contact."),

          new Paragraph({ text: "", pageBreakBefore: true }),

          // ==================== TERMS OF USE PAGE ====================
          createSectionHeading("X. Terms of Use Page (Page: /terms)"),
          createDivider(),

          createSubSectionHeading("1. Acceptance of Terms"),
          createParagraph("By accessing and using the TAKNISER ONE GLOBE platform, you agree to be bound by these Terms of Use and all applicable laws and regulations governing TAKNISER GmbH, a company incorporated in Germany."),

          createSubSectionHeading("2. Use of Platform"),
          createParagraph("This platform is designed for corporate business inquiries, information dissemination, and engagement with TAKNISER ONE GLOBE's global industrial operations. Unauthorized commercial use, data scraping, or any attempt to compromise platform security is strictly prohibited."),

          createSubSectionHeading("3. Intellectual Property"),
          createParagraph("All content, logos, brand assets, text, and design on this platform are the exclusive intellectual property of TAKNISER GmbH. Unauthorized reproduction, distribution, or modification is prohibited."),

          createSubSectionHeading("4. Limitation of Liability"),
          createParagraph("TAKNISER GmbH provides this platform 'as is' for informational and business enquiry purposes. Information herein does not constitute a legally binding commercial offer unless confirmed by a formal contract executed by authorized TAKNISER representatives."),

          createSubSectionHeading("5. Governing Law"),
          createParagraph("These Terms shall be governed by the laws of the Federal Republic of Germany. Any disputes arising shall be subject to the jurisdiction of the competent courts of Hesse, Germany."),
        ],
      },
    ],
  });

  const publicDir = path.join(__dirname, "..", "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const docPath = path.join(publicDir, "TAKNISER_ONE_GLOBE_Website_Content.docx");
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(docPath, buffer);
  console.log(`Document successfully generated at ${docPath}`);
}

generateDoc().catch((err) => {
  console.error("Error generating document:", err);
  process.exit(1);
});
