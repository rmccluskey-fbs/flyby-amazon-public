import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd, PageShell, styles } from "../lib/ui";
import { gearLists, siteUrl } from "../lib/site-content";

export const metadata: Metadata = {
  title: "Drone Cleaning Gear Lists | Flyby Shine",
  description:
    "Flyby Shine Amazon affiliate gear lists for drone cleaning, pure water systems, safety, Part 107 training, hoses, pressure washing and field support.",
  alternates: { canonical: "/gear" },
  openGraph: {
    title: "Drone Cleaning Gear Lists | Flyby Shine",
    description:
      "Affiliate gear lists for operators who have already validated the business case, pricing and field plan.",
    url: `${siteUrl}/gear`,
    type: "website",
  },
};

export default function GearPage() {
  const featured = gearLists.filter((item) => item.featured);
  const rest = gearLists.filter((item) => !item.featured);

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
          <h1 style={styles.h1}>Gear comes after validation.</h1>
          <p style={styles.lead}>
            These Amazon lists support drone cleaning and exterior cleaning operations. Use them
            after the market, margin, job fit, training and safety path are clear.
          </p>
          <p style={{ ...styles.disclosure, marginTop: 28 }}>
            As an Amazon Associate I earn from qualifying purchases. Product availability, pricing
            and list contents can change on Amazon.
          </p>
        </div>
      </section>

      <section style={{ ...styles.section, paddingTop: 44 }}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Start here</p>
          <h2 style={styles.h2}>Most referenced lists.</h2>
          <div style={styles.grid3}>
            {featured.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer sponsored"
                style={{ ...styles.card, color: "inherit", textDecoration: "none" }}
              >
                {item.image ? (
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={720}
                    height={450}
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "16 / 10",
                      objectFit: "cover",
                      border: "1px solid #242424",
                      marginBottom: 18,
                    }}
                  />
                ) : null}
                <span style={styles.tag}>Amazon list</span>
                <h2 style={styles.h3}>{item.label}</h2>
                <p style={styles.body}>{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>All categories</p>
          <h2 style={styles.h2}>Open the category that matches the work.</h2>
          <div style={styles.grid3}>
            {rest.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer sponsored"
                style={{ ...styles.cardMuted, color: "inherit", textDecoration: "none" }}
              >
                <span style={styles.tag}>Affiliate list</span>
                <h3 style={styles.h3}>{item.label}</h3>
                <p style={styles.body}>{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
