import type { Metadata } from "next";
import Link from "next/link";
import { TrackedAmazonLink } from "../components/tracked-amazon-link";
import { JsonLd, PageShell, styles } from "../lib/ui";
import { gearMissions, gearSocialImage, siteUrl } from "../lib/site-content";

export const metadata: Metadata = {
  title: "Drone Cleaning Gear and Books | Flyby Shine",
  description:
    "Focused recommendations for system checks, pure water work, field repairs, drone-cleaning books and Part 107 study resources.",
  alternates: { canonical: "/gear" },
  openGraph: {
    title: "Drone Cleaning Gear and Books | Flyby Shine",
    description:
      "Problem-led recommendations for system checks, pure water work, field repairs, drone-cleaning books and Part 107 study resources.",
    url: `${siteUrl}/gear`,
    images: [gearSocialImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drone Cleaning Gear and Books | Flyby Shine",
    description:
      "Problem-led recommendations for system checks, pure water work, field repairs, drone-cleaning books and Part 107 study resources.",
    images: [gearSocialImage.url],
  },
};

export default function GearPage() {
  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "Gear", item: `${siteUrl}/gear` },
          ],
        }}
      />

      <section style={{ ...styles.section, paddingBottom: 36 }}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Affiliate gear hub</p>
          <h1 style={styles.h1}>Start with the job problem.</h1>
          <p style={styles.lead}>
            Pick the one list that matches the work in front of you. Each list is intentionally
            narrow so you can compare fewer items, check compatibility and avoid buying a pile of
            disconnected gear.
          </p>
          <p style={{ ...styles.disclosure, marginTop: 28 }}>
            As an Amazon Associate I earn from qualifying purchases. Every Amazon button below is
            a paid link. Product availability, pricing and list contents can change on Amazon.
          </p>
          <div style={styles.ctaRow} aria-label="Choose a buying mission">
            {gearMissions.map((mission) => (
              <Link
                key={mission.slug}
                href={`/gear/${mission.slug}`}
                style={styles.secondaryCta}
              >
                {mission.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, paddingTop: 44 }}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Five buying missions</p>
          <h2 style={styles.h2}>Choose by outcome, not category.</h2>
          <div
            style={{
              ...styles.grid2,
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
            }}
          >
            {gearMissions.map((mission) => (
              <article key={mission.slug} style={styles.card}>
                <span style={styles.tag}>Operator-curated Amazon list</span>
                <h2 style={styles.h3}>{mission.label}</h2>
                <p style={{ ...styles.body, color: "#f4ead0", fontWeight: 750 }}>
                  {mission.problem}
                </p>
                <p style={styles.body}>{mission.description}</p>
                <p style={styles.upsell}>
                  <strong>Best for:</strong> {mission.bestFor}
                </p>

                <div style={{ ...styles.grid2, marginTop: 20 }}>
                  <div>
                    <p style={styles.tag}>What to expect</p>
                    <ul style={styles.list}>
                      {mission.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={styles.tag}>Verify before buying</p>
                    <ul style={styles.list}>
                      {mission.verify.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={styles.ctaRow}>
                  <Link href={`/gear/${mission.slug}`} style={styles.primaryCta}>
                    Compare {mission.products.length} focused options
                  </Link>
                  <TrackedAmazonLink
                    href={mission.href}
                    mission={mission.slug}
                    item="full-list"
                    placement="gear-hub-card"
                    style={styles.secondaryCta}
                  >
                    View on Amazon
                  </TrackedAmazonLink>
                </div>
                <p style={{ ...styles.footerText, marginTop: 14, color: "#d6cab0" }}>
                  Paid link. We may earn a commission from qualifying purchases.
                </p>
                <p style={{ ...styles.footerText, marginTop: 16 }}>
                  List reviewed October 14, 2026. Amazon tracking: {mission.trackingId}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.narrow}>
          <p style={styles.eyebrow}>Before you order</p>
          <h2 style={styles.h2}>A list is a shortlist, not a system design.</h2>
          <p style={styles.body}>
            Confirm dimensions, pressure and chemical ratings, electrical requirements, current
            FAA guidance and manufacturer instructions for your exact setup. Amazon reviews and
            related-item suggestions are not substitutes for those checks.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
