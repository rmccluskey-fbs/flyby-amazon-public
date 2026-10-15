import type { Metadata } from "next";
import { CtaRow, HeroImage, JsonLd, PageShell, styles } from "../lib/ui";
import { defaultSocialImage, gumroadUrl, siteUrl, toolkit } from "../lib/site-content";

export const metadata: Metadata = {
  title: "Drone Cleaning Complete Business Toolkit | Flyby Shine",
  description:
    "Startup cost calculators, buy-vs-rent planning, pricing tools, sales scripts, SOP packs, compliance checklists and surface-risk guidance for drone cleaning operators.",
  alternates: { canonical: "/toolkit" },
  openGraph: {
    title: "Drone Cleaning Complete Business Toolkit | Flyby Shine",
    description:
      "Plan startup costs, pricing, sales, SOPs and field risk before buying drone cleaning equipment.",
    url: `${siteUrl}/toolkit`,
    images: [defaultSocialImage],
    type: "website",
  },
};

export default function ToolkitPage() {
  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: toolkit.name,
          description: toolkit.summary,
          brand: { "@type": "Brand", name: "Flyby Shine" },
          category: "Business & Money",
          url: `${siteUrl}/toolkit`,
          offers: {
            "@type": "AggregateOffer",
            url: gumroadUrl,
            priceCurrency: "USD",
            lowPrice: "29.99",
            highPrice: "297.00",
            offerCount: toolkit.tiers.length,
            availability: "https://schema.org/InStock",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "Toolkit", item: `${siteUrl}/toolkit` },
          ],
        }}
      />

      <section style={styles.hero}>
        <HeroImage />
        <div style={styles.heroContent}>
          <p style={styles.eyebrow}>Main paid offer</p>
          <h1 style={styles.h1}>{toolkit.name}</h1>
          <p style={styles.lead}>{toolkit.summary}</p>
          <CtaRow />
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>What it helps decide</p>
          <h2 style={styles.h2}>Use the toolkit before spending serious money on gear.</h2>
          <div style={styles.grid2}>
            {toolkit.decisions.map((item) => (
              <div key={item} style={styles.card}>
                <p style={styles.body}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Choose your level</p>
          <h2 style={styles.h2}>Start small or buy the full operating stack.</h2>
          <div style={styles.tierGrid}>
            {toolkit.tiers.map((tier) => (
              <article
                key={tier.name}
                id={tier.name.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}
                style={tier.featured ? { ...styles.card, ...styles.cardFeatured } : styles.card}
              >
                <span style={styles.tag}>{tier.name}</span>
                <div style={styles.price}>{tier.price}</div>
                <p style={styles.body}>{tier.description}</p>
                <p style={styles.upsell}>{tier.upsell}</p>
                <div style={styles.tierActions}>
                  <a
                    href={gumroadUrl}
                    style={tier.featured ? styles.primaryCta : styles.secondaryCta}
                    aria-label={`${tier.ctaLabel} on Gumroad`}
                  >
                    {tier.ctaLabel}
                  </a>
                  {!tier.featured ? (
                    <a href={gumroadUrl} style={styles.textCta}>
                      Upgrade to complete toolkit
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
          <CtaRow />
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Included tools</p>
          <h2 style={styles.h2}>Built around planning, pricing, sales and field control.</h2>
          <ul style={styles.list}>
            {toolkit.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.narrow}>
          <p style={styles.disclosure}>
            This toolkit does not promise income, easy money or instant customers. It is built to
            help operators evaluate the business, protect margin, talk to real buyers and build
            operating discipline before selling drone-powered exterior cleaning work.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
