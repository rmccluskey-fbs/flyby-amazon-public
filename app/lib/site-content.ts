export const siteUrl = "https://flyby-books.vercel.app";
export const defaultSocialImage = {
  url: `${siteUrl}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Flyby Shine drone cleaning business resources",
};
export const gearSocialImage = {
  url: `${siteUrl}/gear/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Flyby Shine gear and books for drone cleaning operators",
};

export const gumroadUrl = "https://flybyshine.gumroad.com/l/yuitax";
export const amazonBookUrl = "https://www.amazon.com/dp/B0H148FF27?tag=flybybooks-20";
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
  products: GearProduct[];
};

export type GearProduct = {
  asin: string;
  name: string;
  label: string;
  href: string;
  why: string;
  check: string;
};

export const gearMissions: GearMission[] = [
  {
    slug: "system-readiness",
    label: "System Verification + Jobsite Readiness",
    href: "https://www.amazon.com/shop/fbs2026/list/2SD2JINK8WU21?tag=flybysafety-20",
    trackingId: "flybysafety-20",
    problem: "Measure water quality and pressure, then keep common service consumables ready.",
    description:
      "A focused starting point for checking the water and pressure variables that often explain finish quality or equipment behavior.",
    bestFor: "Operators building a small diagnostic and service-consumables bin.",
    includes: ["Water-quality testing", "Pressure verification", "DI resin and seal consumables"],
    verify: ["Meter calibration", "Pressure and chemical rating", "Exact seal and fitting dimensions"],
    products: [
      {
        asin: "B0CTHWS8GX",
        name: "MEXYBE 4-in-1 TDS, EC and temperature meter",
        label: "Low-cost water checkpoint",
        href: "https://www.amazon.com/dp/B0CTHWS8GX?tag=flybysafety-20",
        why: "Useful for checking incoming or processed water before assuming a rinse problem is chemical or technique related.",
        check: "Calibrate and compare readings against a known reference before relying on it for field decisions.",
      },
      {
        asin: "B08QHT3NRY",
        name: "RIDGE WASHER 6000 PSI pressure gauge with 3/8-inch quick connects",
        label: "Pressure diagnostic",
        href: "https://www.amazon.com/dp/B08QHT3NRY?tag=flybysafety-20",
        why: "Gives a quick reference when diagnosing unexpected pressure loss or validating a setup change.",
        check: "Confirm the working-pressure range, connection direction and chemical compatibility for your system.",
      },
      {
        asin: "B002LOJRHU",
        name: "CR Spotless bulk DI resin refill",
        label: "DI maintenance supply",
        href: "https://www.amazon.com/dp/B002LOJRHU?tag=flybysafety-20",
        why: "A replenishment option for operators already using a compatible deionization vessel.",
        check: "Confirm resin type, vessel capacity and replacement procedure before ordering.",
      },
      {
        asin: "B07QVY3YT2",
        name: "Tatuo pressure-washer O-ring assortment",
        label: "Small failure-point backup",
        href: "https://www.amazon.com/dp/B07QVY3YT2?tag=flybysafety-20",
        why: "Compact seals can prevent a minor quick-connect leak from ending a work block.",
        check: "Match the exact diameter, material and pressure or chemical exposure before installation.",
      },
    ],
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
    products: [
      {
        asin: "B0B2J9W42B",
        name: "TDRSUPER 110V diaphragm water-pressure pump",
        label: "Pump reference",
        href: "https://www.amazon.com/dp/B0B2J9W42B?tag=flybywater-20",
        why: "A compact pump reference for evaluating whether the stated flow and pressure fit a small transfer workflow.",
        check: "Verify voltage, duty cycle, actual flow at pressure, fittings and compatibility with the water being moved.",
      },
      {
        asin: "B0CYVB5HJG",
        name: "Aquaboon three-stage whole-house filtration system",
        label: "Pretreatment reference",
        href: "https://www.amazon.com/dp/B0CYVB5HJG?tag=flybywater-20",
        why: "A filtration reference for operators comparing sediment, carbon and scale-reduction stages ahead of final purification.",
        check: "This is not automatically a spot-free DI system. Confirm media, micron rating, flow loss and the required finishing stage.",
      },
      {
        asin: "B0FG16BB77",
        name: "Three-quarter-inch elbow with quarter-inch push-fit port",
        label: "Connection reference",
        href: "https://www.amazon.com/dp/B0FG16BB77?tag=flybywater-20",
        why: "A compact connection option when a monitored or auxiliary quarter-inch line is part of the design.",
        check: "Confirm thread standard, tube outside diameter, pressure rating and potable or chemical-use requirements.",
      },
      {
        asin: "B0B9GPBZQM",
        name: "One-inch PVC bulkhead fitting kit",
        label: "Tank connection reference",
        href: "https://www.amazon.com/dp/B0B9GPBZQM?tag=flybywater-20",
        why: "A starting point for planning a through-wall tank connection in a low-pressure water system.",
        check: "Confirm wall thickness, hole size, gasket material, orientation and pressure limitations.",
      },
    ],
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
    products: [
      {
        asin: "B076BPX87S",
        name: "MTM Hydro 3/8-inch live swivel",
        label: "Commercial hose handling",
        href: "https://www.amazon.com/dp/B076BPX87S?tag=flybyrepair-20",
        why: "A commercial-grade swivel reference for reducing hose twist at a compatible connection point.",
        check: "Confirm thread direction, pressure, temperature and chemical exposure before installation.",
      },
      {
        asin: "B0C6HLQMPV",
        name: "Raincovo stainless 3/8-inch quick-connect set",
        label: "Connection spares",
        href: "https://www.amazon.com/dp/B0C6HLQMPV?tag=flybyrepair-20",
        why: "A compact set for building labeled spares around a known 3/8-inch connection standard.",
        check: "Do not assume every 3/8-inch fitting matches; verify thread, plug profile, pressure and seal material.",
      },
      {
        asin: "B0DP4LZ293",
        name: "Three-quarter-inch NPT brass street tee",
        label: "Manifold reference",
        href: "https://www.amazon.com/dp/B0DP4LZ293?tag=flybyrepair-20",
        why: "A common geometry to evaluate when a water or utility line needs a compact branch.",
        check: "Verify NPT gender, flow restriction, material compatibility and sealing method.",
      },
      {
        asin: "B0CNR296NB",
        name: "STARWORK 312-piece mechanic tool set",
        label: "Shop-scale tool kit",
        href: "https://www.amazon.com/dp/B0CNR296NB?tag=flybyrepair-20",
        why: "A broad option for a shop or service vehicle that needs more than a compact field pouch.",
        check: "Compare the included sizes with the actual fasteners in your rig before paying for unused coverage.",
      },
    ],
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
    products: [
      {
        asin: "B0H148FF27",
        name: "Mastering Drone-Based Exterior Cleaning",
        label: "Best all-around operator guide",
        href: "https://www.amazon.com/dp/B0H148FF27?tag=flybybooks-20",
        why: "The broadest Flyby guide for validating demand, planning startup costs, pricing work and building an operating system.",
        check: "Use current FAA, OSHA, insurer and manufacturer sources for requirements that can change.",
      },
      {
        asin: "B0H7DMZYXX",
        name: "Soft Wash Chemistry for Drone Cleaners",
        label: "Best chemistry starting point",
        href: "https://www.amazon.com/dp/B0H7DMZYXX?tag=flybybooks-20",
        why: "A focused beginner field guide to dwell time, surface risk, window concerns and chemical mistakes.",
        check: "Always follow the product label, SDS, surface guidance and local handling requirements.",
      },
      {
        asin: "B0GJPKTJYV",
        name: "Cleaner Buildings, Smarter Budgets",
        label: "Best for facility buyers",
        href: "https://www.amazon.com/dp/B0GJPKTJYV?tag=flybybooks-20",
        why: "Frames drone-powered maintenance around facility-care cost structure rather than equipment novelty.",
        check: "Use it as decision support, then validate the economics against the actual building and service scope.",
      },
      {
        asin: "B0GJPHJ3Z4",
        name: "Shine Without Shutdown",
        label: "Best for disruption planning",
        href: "https://www.amazon.com/dp/B0GJPHJ3Z4?tag=flybybooks-20",
        why: "Explains the operational case for cleaning approaches that reduce access disruption around occupied facilities.",
        check: "Confirm that the method, airspace, site controls and surface conditions fit the individual property.",
      },
    ],
  },
  {
    slug: "part-107-study",
    label: "Part 107 Study Resources",
    href: "https://www.amazon.com/shop/fbs2026/list/1JJI9JHRTE56F?tag=flybypart107-20",
    trackingId: "flybypart107-20",
    problem: "Build a current study plan instead of relying on one book or video.",
    description:
      "A focused pair of FAA study resources to use alongside the current ACS, official sample questions and FAA certification steps.",
    bestFor: "New and aspiring commercial drone pilots preparing for the Part 107 knowledge test.",
    includes: ["FAA Remote Pilot Study Guide", "Airman Knowledge Testing Supplement", "A simple study-stack starting point"],
    verify: ["Current FAA ACS", "Current sample questions", "Current certification requirements on FAA.gov"],
    products: [
      {
        asin: "B09LGRQ2G6",
        name: "FAA Remote Pilot Small UAS Study Guide",
        label: "Start with structured reading",
        href: "https://www.amazon.com/dp/B09LGRQ2G6?tag=flybypart107-20",
        why: "Provides a structured reference for the knowledge areas covered in Remote Pilot preparation.",
        check: "Verify the current ACS, certification steps and rule changes directly on FAA.gov.",
      },
      {
        asin: "B09MDRR6R7",
        name: "Airman Knowledge Testing Supplement FAA-CT-8080-2H",
        label: "Use for charts and references",
        href: "https://www.amazon.com/dp/B09MDRR6R7?tag=flybypart107-20",
        why: "Supports practice with the charts, figures and reference material used in aviation knowledge testing.",
        check: "Confirm the current testing supplement and sample questions through official FAA sources.",
      },
    ],
  },
];

export function getGearMission(slug: string) {
  return gearMissions.find((mission) => mission.slug === slug);
}
