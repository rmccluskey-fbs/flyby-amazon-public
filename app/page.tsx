import type { Metadata } from "next";
import Link from "next/link";
import { CtaRow, HeroImage, JsonLd, PageShell, styles } from "./lib/ui";
import { book, defaultSocialImage, gumroadUrl, podcastUrl, siteUrl, toolkit } from "./lib/site-content";

export const metadata: Metadata = {
  title: "Drone Cleaning Business Toolkit | Flyby Shine",
  description:
    "Flyby Shine's drone cleaning business toolkit helps operators plan startup costs, buy-vs-rent decisions, pricing, sales, SOPs and field risk before buying equipment.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Drone Cleaning Business Toolkit | Flyby Shine",
    description:
      "Plan the drone cleaning business before buying the drone. Startup costs, pricing, sales, SOPs and field risk tools from Flyby Shine.",
    url: siteUrl,
    siteName: "Flyby Shine Revenue Hub",
    images: [defaultSocialImage],
    type: "website",
  },
};

export default function HomePage() {
  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${siteUrl}/#organization`,
              name: "Flyby Shine",
              url: "https://www.flybyshine.com",
              sameAs: [
                "https://www.facebook.com/flybyshine/",
                "https://www.instagram.com/flyby_shine/",
              ],
            },
            {
              "@type": "WebSite",
              "@id": `${siteUrl}/#website`,
              url: siteUrl,
              name: "Flyby Shine Revenue Hub",
              publisher: { "@id": `${siteUrl}/#organization` },
            },
          ],
        }}
      />

      <section style={styles.hero}>
        <HeroImage />
        <div style={styles.heroContent}>
          <p style={styles.eyebrow}>Service adventure brand with a tech edge</p>
          <h1 style={styles.h1}>Build the business before buying the drone.</h1>
          <p style={styles.lead}>
            Flyby Shine&apos;s main revenue path is the Drone Cleaning Complete Business Toolkit:
            calculators, templates, SOP packs, sales tools and risk guidance for operators who
            need a real plan before equipment, pricing and field work.
          </p>
          <CtaRow />
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.grid3}>
            <div style={styles.card}>
              <span style={styles.tag}>Primary offer</span>
              <h2 style={styles.h3}>{toolkit.name}</h2>
              <p style={styles.body}>{toolkit.summary}</p>
              <a href={gumroadUrl} style={styles.primaryCta}>
                Open Gumroad
              </a>
            </div>
            <div style={styles.card}>
              <span style={styles.tag}>First step</span>
              <h2 style={styles.h3}>{book.title}</h2>
              <p style={styles.body}>{book.summary}</p>
              <Link href="/book" style={styles.secondaryCta}>
                View book page
              </Link>
            </div>
            <div style={styles.card}>
              <span style={styles.tag}>After validation</span>
              <h2 style={styles.h3}>Affiliate gear lists</h2>
              <p style={styles.body}>
                Gear comes after market, margin and job-fit validation. The gear hub keeps Amazon
                lists available without making equipment the main promise.
              </p>
              <Link href="/gear" style={styles.secondaryCta}>
                Review gear
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Who this helps</p>
          <h2 style={styles.h2}>Operators trying to avoid expensive startup mistakes.</h2>
          <div style={styles.grid3}>
            {toolkit.audience.map((item) => (
              <div key={item} style={styles.cardMuted}>
                <p style={styles.body}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Next step</p>
          <h2 style={styles.h2}>Pick the resource that matches where you are.</h2>
          <div style={styles.grid2}>
            <div style={styles.card}>
              <h3 style={styles.h3}>Still researching?</h3>
              <p style={styles.body}>
                Start with the book if you need the full business model, startup costs,
                equipment-path thinking and launch sequence before buying tools.
              </p>
              <Link href="/book" style={styles.secondaryCta}>
                Start with the book
              </Link>
            </div>
            <div style={styles.card}>
              <h3 style={styles.h3}>Ready to plan?</h3>
              <p style={styles.body}>
                Use the toolkit when you need calculators, templates, pricing tools, sales scripts
                and field operating resources in one place.
              </p>
              <Link href="/toolkit" style={styles.primaryCta}>
                Compare toolkit tiers
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>More Flyby resources</p>
          <div style={styles.grid3}>
            <a href={podcastUrl} style={{ ...styles.card, color: "inherit", textDecoration: "none" }}>
              <h3 style={styles.h3}>Podcast</h3>
              <p style={styles.body}>Operator conversations and practical Flyby Shine field perspective.</p>
            </a>
            <Link href="/toolkit" style={{ ...styles.card, color: "inherit", textDecoration: "none" }}>
              <h3 style={styles.h3}>Toolkit</h3>
              <p style={styles.body}>Calculators, templates and operating tools for planning the business.</p>
            </Link>
            <Link href="/gear" style={{ ...styles.card, color: "inherit", textDecoration: "none" }}>
              <h3 style={styles.h3}>Gear hub</h3>
              <p style={styles.body}>Amazon gear lists to review after the business case is clear.</p>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
