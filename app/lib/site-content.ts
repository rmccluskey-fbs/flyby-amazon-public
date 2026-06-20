export const siteUrl = "https://flyby-amazon-public-xc7v.vercel.app";

export const gumroadUrl = "https://flybyshine.gumroad.com/l/yuitax";
export const amazonBookUrl = "https://www.amazon.com/dp/B0H148FF27";
export const amazonStorefrontUrl = "https://www.amazon.com/shop/fbs2026?tag=fbs2026-20";
export const podcastUrl =
  "https://podcasts.apple.com/us/podcast/flyby-shine-presents-a-drone-cleaning-show/id1865198039";

export const navLinks = [
  { label: "Toolkit", href: "/toolkit" },
  { label: "Book", href: "/book" },
  { label: "Gear", href: "/gear" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

export const toolkit = {
  name: "Drone Cleaning Complete Business Toolkit",
  title: "Drone Cleaning Business Toolkit: Startup Costs, Buy vs Rent, Pricing and SOPs",
  summary:
    "A practical planning toolkit for new and aspiring drone cleaning operators who need startup cost calculators, buy-vs-rent planning, first-90-days demand validation, pricing tools, sales scripts, SOPs, compliance checklists and risk guidance before buying equipment.",
  audience: [
    "Pressure washers, soft washers and window cleaners evaluating drone access",
    "Part 107 pilots considering exterior cleaning as a service business",
    "Operators trying to price jobs, plan cash needs and validate demand before buying gear",
  ],
  decisions: [
    "Whether the opportunity fits your market, budget and risk tolerance",
    "What startup costs sit beyond the aircraft itself",
    "Whether buying, renting, financing, partnering or subcontracting makes sense",
    "How support, downtime and first-90-days demand change the equipment decision",
    "How to talk to commercial buyers without selling the drone as a gimmick",
    "Which jobs fit drone cleaning and which should be handled another way",
  ],
  included: [
    "Business diagnostic and reality check workbook",
    "Startup cost calculator",
    "Buy vs rent calculator",
    "Drone exterior cleaning business plan template",
    "Pricing and quote builder",
    "Sales script pack",
    "Field operations SOP pack",
    "Compliance checklist",
    "Surface risk field guide",
    "Mastering Drone-Based Exterior Cleaning guide",
  ],
  tiers: [
    {
      name: "Reality Check Bundle",
      price: "$29.99",
      description:
        "For beginners asking whether drone cleaning is worth pursuing before bigger spending.",
      ctaLabel: "Choose Reality Check",
      upsell:
        "If this confirms the opportunity, the Complete Toolkit adds the calculators, pricing tools, SOPs and risk guides.",
    },
    {
      name: "Planning & Numbers Pack",
      price: "$59.99",
      description:
        "For operators who need startup cost clarity, buy-vs-rent logic and a real launch plan.",
      ctaLabel: "Choose Planning Pack",
      upsell:
        "The Complete Toolkit adds pricing, sales, field procedures, compliance planning and the master guide.",
    },
    {
      name: "Pricing & Sales Pack",
      price: "$59.99",
      description:
        "For operators who need help pricing jobs, building quotes and handling buyer objections.",
      ctaLabel: "Choose Pricing Pack",
      upsell:
        "The Complete Toolkit adds planning calculators, operating SOPs, compliance tools and the master guide.",
    },
    {
      name: "Operations & Risk Pack",
      price: "$69.99",
      description:
        "For operators who need field procedures, compliance planning and surface-risk awareness.",
      ctaLabel: "Choose Ops Pack",
      upsell:
        "The Complete Toolkit adds validation, launch math, pricing, sales tools and the master guide.",
    },
    {
      name: "Master Guide Only",
      price: "$97.00",
      description:
        "The flagship guide for understanding the full drone exterior cleaning business model.",
      ctaLabel: "Choose Master Guide",
      upsell:
        "The Complete Toolkit includes the guide plus every workbook, calculator, template and field tool.",
    },
    {
      name: "Complete Business Toolkit",
      price: "$297.00",
      description:
        "Every diagnostic, workbook, calculator, template, sales tool, operations guide, checklist and master guide.",
      ctaLabel: "Get Complete Toolkit",
      featured: true,
      upsell:
        "Best fit if you want the whole planning, sales and field operating system in one purchase.",
    },
  ],
};

export const book = {
  title: "Mastering Drone-Based Exterior Cleaning",
  subtitle:
    "A Practical Business Guide for Validating, Launching, Selling, Operating and Scaling a Drone-Powered Exterior Cleaning Service",
  summary:
    "A practical business guide for new and aspiring drone cleaning operators who want to validate demand, choose an equipment path, plan startup costs, evaluate window-cleaning fit, price jobs and build a repeatable commercial exterior cleaning operation.",
  bullets: [
    "Market validation before more money is spent",
    "Startup cost planning and equipment path decisions",
    "First-90-days demand and minimum-profitable-ticket pressure testing",
    "Compliance, insurance, sales, pricing and field execution guidance",
    "A realistic 90-day launch roadmap",
  ],
};

export type GearItem = {
  label: string;
  href: string;
  description: string;
  featured?: boolean;
  image?: { src: string; alt: string };
};

export const gearLists: GearItem[] = [
  {
    label: "Pure Water System",
    href: "https://www.amazon.com/hz/wishlist/ls/1H4JTXO0Y7F8S?leftNavSection=Reorder&source=leftnav&linkCode=ll2&tag=fbs2026-20&linkId=b0183681b581cb2a81f9ec3d074fd637&language=en_US&ref_=as_li_ss_tl",
    description:
      "Water-fed and DI gear to review after the job type and recurring account model make sense.",
    featured: true,
    image: { src: "/di.png", alt: "Pure water system gear" },
  },
  {
    label: "FAA 107 License Training",
    href: "https://www.amazon.com/hz/wishlist/ls/2GU017CJAKIKT?leftNavSection=Reorder&source=leftnav&linkCode=ll2&tag=fbs2026-20&linkId=be5c757b9c5e4d79e7dd848e2b370d39&language=en_US&ref_=as_li_ss_tl",
    description:
      "Training resources for operators who need to handle the aviation side properly.",
    featured: true,
    image: { src: "/107training.png", alt: "FAA Part 107 training resources" },
  },
  {
    label: "Tools",
    href: "https://www.amazon.com/hz/wishlist/ls/1ZKWXQ14PE50U?&linkCode=ll2&tag=fbs2026-20&linkId=c20be901eba415689a55983fc4cd43e1&language=en_US&ref_=as_li_ss_tl",
    description:
      "General field tools that support setup, maintenance and jobsite problem solving.",
    featured: true,
    image: { src: "/cordlessscrewdriver.png", alt: "Field tools" },
  },
  {
    label: "Content Creation",
    href: "https://www.amazon.com/hz/wishlist/ls/1I0Y6OXI7ZQLZ?leftNavSection=Reorder&source=leftnav&linkCode=ll2&tag=fbs2026-20&linkId=3a2f2a07b452b6d9395e9836c18b3c29&language=en_US&ref_=as_li_ss_tl",
    description:
      "Media gear for documenting proof, building authority and supporting marketing.",
  },
  {
    label: "Safety",
    href: "https://www.amazon.com/hz/wishlist/ls/16K9807ZS33HH?leftNavSection=Reorder&source=leftnav&linkCode=ll2&tag=fbs2026-20&linkId=39a7d69d22234700e3472bea80556ee4&language=en_US&ref_=as_li_ss_tl",
    description:
      "Safety equipment to review before field work, chemical handling or site exposure.",
  },
  {
    label: "Proportioner",
    href: "https://www.amazon.com/hz/wishlist/ls/26EBKYHMPXTHW?leftNavSection=Reorder&source=leftnav&linkCode=ll2&tag=fbs2026-20&linkId=6efe0f5cb63f2efda8737aa2949be018&language=en_US&ref_=as_li_ss_tl",
    description:
      "Soft-wash proportioning items for operators already clear on surface, mix and rinse requirements.",
  },
  {
    label: "Drone Accessories and Must-Haves",
    href: "https://www.amazon.com/hz/wishlist/ls/3TPDRI91FKG0Q?leftNavSection=Reorder&source=leftnav&linkCode=ll2&tag=fbs2026-20&linkId=d59e9ebee89ff026dbc219028560f956&language=en_US&ref_=as_li_ss_tl",
    description:
      "Accessories to review after the business case and equipment path are validated.",
  },
  {
    label: "Chemicals",
    href: "https://www.amazon.com/hz/wishlist/ls/3MS2QVUB896E6?leftNavSection=Reorder&source=leftnav&linkCode=ll2&tag=fbs2026-20&linkId=700ba00d81ba66fbdc5731380d80c4fe&language=en_US&ref_=as_li_ss_tl",
    description:
      "Chemical-related items. Always confirm label, SDS and surface compatibility before use.",
  },
  {
    label: "Pressure Wash",
    href: "https://www.amazon.com/hz/wishlist/ls/20T5HHTUCN2MN?leftNavSection=Reorder&source=leftnav&linkCode=ll2&tag=fbs2026-20&linkId=66c5f2c242dd3de77c71ce4f83905928&language=en_US&ref_=as_li_ss_tl",
    description:
      "Pressure washing support gear for operators who also handle ground-based exterior cleaning.",
  },
  {
    label: "Tanks",
    href: "https://www.amazon.com/hz/wishlist/ls/3UZKE4CWQJMZU?leftNavSection=Reorder&source=leftnav&linkCode=ll2&tag=fbs2026-20&linkId=37326092c52935a1dcd47d4bc05797db&language=en_US&ref_=as_li_ss_tl",
    description:
      "Tank and storage references for planning rigs, water, mix handling and field logistics.",
  },
  {
    label: "Clothing/Gear",
    href: "https://www.amazon.com/hz/wishlist/ls/1UU3QA6EZOBXQ?leftNavSection=Reorder&source=leftnav&linkCode=ll2&tag=fbs2026-20&linkId=072a97139b2e0c6b307446c4ec94dea4&language=en_US&ref_=as_li_ss_tl",
    description:
      "Workwear and support gear for field comfort, appearance and basic protection.",
  },
  {
    label: "Hoses",
    href: "https://www.amazon.com/hz/wishlist/ls/WBWEZNF36JWC?leftNavSection=Reorder&source=leftnav&linkCode=ll2&tag=fbs2026-20&linkId=73e7c267c8456b808f313e8b3699edb5&language=en_US&ref_=as_li_ss_tl",
    description:
      "Hose options for drone and non-drone work where setup time and handling affect margin.",
  },
  {
    label: "Window Cleaning",
    href: "https://www.amazon.com/hz/wishlist/ls/ZY1SYKSU3BMY?leftNavSection=Reorder&source=leftnav&linkCode=ll2&tag=fbs2026-20&linkId=149f9c739f1bb12bbdbeaea365854b6c&language=en_US&ref_=as_li_ss_tl",
    description:
      "Window cleaning gear for operators comparing drone access with recurring maintenance accounts.",
  },
  {
    label: "Electrical",
    href: amazonStorefrontUrl,
    description:
      "Storefront fallback for electrical support items. Confirm fit and ratings before purchase.",
  },
  {
    label: "Misc",
    href: amazonStorefrontUrl,
    description:
      "Storefront fallback for field support items that do not fit a primary category.",
  },
];
