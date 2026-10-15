import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TrackedAmazonLink } from "../../components/tracked-amazon-link";
import { JsonLd, PageShell, styles } from "../../lib/ui";
import { gearMissions, gearSocialImage, getGearMission, siteUrl } from "../../lib/site-content";

type MissionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return gearMissions.map((mission) => ({ slug: mission.slug }));
}

export async function generateMetadata({ params }: MissionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const mission = getGearMission(slug);

  if (!mission) return {};

  const title = `${mission.label} | Flyby Shine`;
  const description = `${mission.problem} Compare Flyby's focused recommendations and verify compatibility before buying.`;

  return {
    title,
    description,
    alternates: { canonical: `/gear/${mission.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/gear/${mission.slug}`,
      images: [gearSocialImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [gearSocialImage.url],
    },
  };
}

export default async function MissionPage({ params }: MissionPageProps) {
  const { slug } = await params;
  const mission = getGearMission(slug);

  if (!mission) notFound();

  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: mission.label,
          description: mission.description,
          url: `${siteUrl}/gear/${mission.slug}`,
          itemListElement: mission.products.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: product.name,
            url: product.href,
          })),
        }}
      />

      <section style={{ ...styles.section, paddingBottom: 42 }}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Flyby buying mission</p>
          <h1 style={styles.h1}>{mission.label}</h1>
          <p style={styles.lead}>{mission.problem}</p>
          <p style={{ ...styles.body, maxWidth: 840 }}>{mission.description}</p>
          <p style={{ ...styles.disclosure, marginTop: 28 }}>
            As an Amazon Associate I earn from qualifying purchases. Every Amazon button on this
            page is a paid link. Prices, availability and product details can change on Amazon.
          </p>
          <div style={styles.ctaRow}>
            <TrackedAmazonLink
              href={mission.href}
              mission={mission.slug}
              item="full-list"
              placement="mission-hero"
              style={styles.secondaryCta}
            >
              View on Amazon
            </TrackedAmazonLink>
            <Link href="/gear" style={styles.textCta}>
              Compare all buying missions
            </Link>
          </div>
          <p style={{ ...styles.footerText, marginTop: 14, color: "#d6cab0" }}>
            Paid link. We may earn a commission from qualifying purchases.
          </p>
        </div>
      </section>

      <section style={{ ...styles.section, paddingTop: 44 }}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Focused recommendations</p>
          <h2 style={styles.h2}>Choose the item that solves the actual problem.</h2>
          <div style={styles.grid2}>
            {mission.products.map((product, index) => (
              <article key={product.asin} style={styles.card}>
                <span style={styles.tag}>
                  {index + 1}. {product.label}
                </span>
                <h2 style={styles.h3}>{product.name}</h2>
                <p style={styles.body}>{product.why}</p>
                <p style={styles.upsell}>
                  <strong>Verify before buying:</strong> {product.check}
                </p>
                <div style={styles.ctaRow}>
                  <TrackedAmazonLink
                    href={product.href}
                    mission={mission.slug}
                    item={product.asin}
                    placement="product-card"
                    style={styles.primaryCta}
                  >
                    View on Amazon
                  </TrackedAmazonLink>
                </div>
                <p style={{ ...styles.footerText, marginTop: 14, color: "#d6cab0" }}>
                  Paid link. We may earn a commission from qualifying purchases.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.narrow}>
          <p style={styles.eyebrow}>Decision check</p>
          <h2 style={styles.h2}>Do not buy around an unknown system.</h2>
          <p style={styles.body}>
            Start with your required outcome, then confirm the dimensions, ratings, duty cycle,
            chemical exposure and connection standards of the equipment you already own. A useful
            product can still be the wrong component for a specific rig or jobsite.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
