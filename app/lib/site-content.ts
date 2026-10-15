export const siteUrl = "https://flyby-books.vercel.app";

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

export type GearMission = {
  slug: string;
  label: string;
  href: string;
  trackingId: string;
  problem: string;
  description: string;
  bestFor: string;
  includes: string[];
  verify: string[];
};

export const gearMissions: GearMission[] = [
  {
    slug: "safety-proof",
    label: "Operator Safety + Jobsite Proof Kit",
    href: "https://www.amazon.com/shop/fbs2026/list/2SD2JINK8WU21?tag=flybysafety-20",
    trackingId: "flybysafety-20",
    problem: "Protect the crew and document what happened before, during and after the job.",
    description:
      "A focused starting point for basic site protection, operator visibility and photo or video proof.",
    bestFor: "Operators building a repeatable preflight, jobsite and closeout routine.",
    includes: ["Basic PPE and visibility", "Jobsite documentation support", "Compact field essentials"],
    verify: ["Your written safety plan", "Chemical label and SDS requirements", "Site-specific PPE rules"],
  },
  {
    slug: "pure-water",
    label: "Pure Water Starter Kit",
    href: "https://www.amazon.com/shop/fbs2026/list/WBJUOB3K69WU?tag=flybywater-20",
    trackingId: "flybywater-20",
    problem: "Reduce spotting and rework when the job calls for purified-water finishing.",
    description:
      "Core water-system references for evaluating a small pure-water workflow before building a larger rig.",
    bestFor: "Window and exterior-cleaning operators testing recurring maintenance work.",
    includes: ["Water movement and filtration references", "Connections and supporting hardware", "Starter-scale system components"],
    verify: ["Feed-water quality and pressure", "Required flow rate", "Thread, hose and fitting compatibility"],
  },
  {
    slug: "field-repair",
    label: "Field Repair + Hose Essentials",
    href: "https://www.amazon.com/shop/fbs2026/list/15T8PGWOOLRP7?tag=flybyrepair-20",
    trackingId: "flybyrepair-20",
    problem: "Avoid losing a workday to a small failed fitting, loose connection or damaged hose.",
    description:
      "A compact repair-and-connection list for the ordinary failure points that can stop a field setup.",
    bestFor: "Operators assembling a labeled field repair bin for service calls.",
    includes: ["Common hand-tool references", "Hose and connection support", "Small-job hardware"],
    verify: ["Pressure and chemical rating", "Exact thread and fitting size", "Compatibility with your installed system"],
  },
  {
    slug: "books-training",
    label: "Flyby Drone Cleaning Books",
    href: "https://www.amazon.com/shop/fbs2026/list/264SUQAODE21X?tag=flybybooks-20",
    trackingId: "flybybooks-20",
    problem: "Learn the business fundamentals before spending heavily on equipment.",
    description:
      "Flyby-authored guides for operators and facility teams evaluating drone cleaning, commercial maintenance, budgets and soft-wash decisions.",
    bestFor: "New operators who need a lower-cost learning path before an equipment decision.",
    includes: ["Drone-cleaning business guidance", "Facility-buyer decision support", "Soft-wash chemistry fundamentals"],
    verify: ["Format and edition", "Fit for your role and experience", "Current rules and manufacturer guidance"],
  },
  {
    slug: "part-107-study",
    label: "Part 107 Study Resources",
    href: "https://www.amazon.com/shop/fbs2026/list/1JJI9JHRTE56F?tag=flybybooks-20",
    trackingId: "flybybooks-20",
    problem: "Build a current study plan instead of relying on one book or video.",
    description:
      "A focused pair of FAA study resources to use alongside the current ACS, official sample questions and FAA certification steps.",
    bestFor: "New and aspiring commercial drone pilots preparing for the Part 107 knowledge test.",
    includes: ["FAA Remote Pilot Study Guide", "Airman Knowledge Testing Supplement", "A simple study-stack starting point"],
    verify: ["Current FAA ACS", "Current sample questions", "Current certification requirements on FAA.gov"],
  },
];
