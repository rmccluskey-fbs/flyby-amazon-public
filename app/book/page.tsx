import type { Metadata } from "next";
import { TrackedAmazonLink } from "../components/tracked-amazon-link";
import { CtaRow, HeroImage, JsonLd, PageShell, styles } from "../lib/ui";
import { amazonBookUrl, book, defaultSocialImage, siteUrl } from "../lib/site-content";

export const metadata: Metadata = {
  title: "Mastering Drone-Based Exterior Cleaning | Flyby Shine Book",
  description:
    "A practical Flyby Shine business guide for validating, launching, pricing and operating a drone-powered exterior cleaning service.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Mastering Drone-Based Exterior Cleaning | Flyby Shine Book",
    description:
      "Start with the book, then use the toolkit when you need calculators, templates and operating tools.",
    url: `${siteUrl}/book`,
    images: [defaultSocialImage],
    type: "book",
  },
};

export default function BookPage() {
  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Book",
          name: book.title,
          description: book.summary,
          author: {
            "@type": "Person",
            name: "Ric McCluskey",
          },
          publisher: {
            "@type": "Organization",
            name: "Flyby Shine",
          },
          url: `${siteUrl}/book`,
          offers: {
            "@type": "Offer",
            url: amazonBookUrl,
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
            { "@type": "ListItem", position: 2, name: "Book", item: `${siteUrl}/book` },
          ],
        }}
      />

      <section style={styles.hero}>
        <HeroImage />
        <div style={styles.heroContent}>
          <p style={styles.eyebrow}>Book and authority path</p>
          <h1 style={styles.h1}>{book.title}</h1>
          <p style={styles.lead}>{book.subtitle}</p>
          <p style={{ ...styles.disclosure, marginTop: 28 }}>
            As an Amazon Associate I earn from qualifying purchases.
          </p>
          <div style={styles.ctaRow}>
            <TrackedAmazonLink
              href={amazonBookUrl}
              mission="books-training"
              item="B0H148FF27"
              placement="book-hero"
              style={styles.primaryCta}
            >
              View on Amazon
            </TrackedAmazonLink>
            <a href="/toolkit" style={styles.secondaryCta}>
              Compare toolkit
            </a>
          </div>
          <p style={{ ...styles.footerText, marginTop: 14, color: "#d6cab0" }}>
            Paid link. We may earn a commission from qualifying purchases.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.grid2}>
            <div style={styles.card}>
              <span style={styles.tag}>What it is</span>
              <p style={styles.body}>{book.summary}</p>
            </div>
            <div style={styles.card}>
              <span style={styles.tag}>Best next step</span>
              <p style={styles.body}>
                The book is the lower-friction starting point. The Gumroad toolkit is the next step
                when the reader needs calculators, worksheets, sales tools and SOP packs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Inside the guide</p>
          <h2 style={styles.h2}>Practical business decisions before field execution.</h2>
          <ul style={styles.list}>
            {book.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <CtaRow />
        </div>
      </section>
    </PageShell>
  );
}
