import type { Metadata } from "next";
import { JsonLd, PageShell, styles } from "../lib/ui";
import { siteUrl } from "../lib/site-content";

const pageUrl = `${siteUrl}/tiktok-publisher`;

export const metadata: Metadata = {
  title: "Flyby Shine TikTok Publisher",
  description:
    "Reviewer-facing overview of Flyby Shine's TikTok Content Posting API integration, publishing flow, privacy policy and terms of use.",
  alternates: { canonical: "/tiktok-publisher" },
  openGraph: {
    title: "Flyby Shine TikTok Publisher",
    description:
      "How Flyby Shine uploads approved commercial cleaning videos to TikTok through the Content Posting API.",
    url: pageUrl,
    siteName: "Flyby Shine Revenue Hub",
    type: "website",
  },
};

const scopes = [
  {
    name: "video.upload",
    use: "Uploads a completed MP4 from our workflow into the connected TikTok account as a draft or posting candidate.",
  },
  {
    name: "video.publish",
    use: "Publishes an approved video with its prepared caption when the account and app permissions allow direct posting.",
  },
  {
    name: "video.list",
    use: "Reads the connected account's public video list so our workflow can confirm upload and publish outcomes.",
  },
  {
    name: "user.info.basic",
    use: "Reads the account identifier and display basics required to bind the authorized TikTok account to the publishing workflow.",
  },
  {
    name: "user.info.profile",
    use: "Reads profile fields needed to confirm which TikTok profile is connected during setup and troubleshooting.",
  },
  {
    name: "user.info.stats",
    use: "Reads account-level stats used for operational visibility after authorization.",
  },
];

const steps = [
  "A Flyby operator creates a vertical MP4 for commercial cleaning education inside our local content workflow.",
  "The exact platform copy is staged and reviewed before any publishing action is attempted.",
  "A connected TikTok account authorizes the app through TikTok's Login Kit and Content Posting API scopes.",
  "Our workflow sends the approved MP4 and caption to TikTok through the Content Posting API.",
  "The workflow records the resulting upload or publish status for operator review and troubleshooting.",
];

export default function TikTokPublisherPage() {
  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${pageUrl}#webpage`,
              url: pageUrl,
              name: "Flyby Shine TikTok Publisher",
              description:
                "Reviewer-facing overview of Flyby Shine's TikTok Content Posting API integration and approval flow.",
            },
          ],
        }}
      />

      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>TikTok integration overview</p>
          <h1 style={styles.h2}>Flyby Shine TikTok Publisher</h1>
          <p style={styles.lead}>
            This page explains the Flyby Shine TikTok integration used to upload approved
            commercial cleaning videos through TikTok&apos;s Content Posting API.
          </p>
          <div style={{ ...styles.card, marginTop: 28 }}>
            <p style={styles.body}>
              Flyby Shine creates educational short-form videos about commercial exterior cleaning,
              operator decisions, jobsite lessons, safety and startup planning. When a video is
              approved for TikTok, our workflow sends the final MP4 and prepared caption to the
              authorized TikTok account through TikTok&apos;s official API path.
            </p>
            <p style={styles.body}>
              This website exists for app review, policy access and product context. Terms of Use
              and Privacy Policy are available in the site header and footer, and directly at{" "}
              <a href={`${siteUrl}/terms`} style={styles.textCta}>
                /terms
              </a>{" "}
              and{" "}
              <a href={`${siteUrl}/privacy`} style={styles.textCta}>
                /privacy
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Workflow</p>
          <h2 style={styles.h2}>How the integration works</h2>
          <div style={styles.grid2}>
            {steps.map((step, index) => (
              <div key={step} style={styles.card}>
                <span style={styles.tag}>Step {index + 1}</span>
                <p style={styles.body}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Scopes</p>
          <h2 style={styles.h2}>Requested TikTok permissions</h2>
          <div style={styles.grid2}>
            {scopes.map((scope) => (
              <div key={scope.name} style={styles.card}>
                <h3 style={styles.h3}>{scope.name}</h3>
                <p style={styles.body}>{scope.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.eyebrow}>Review support</p>
          <h2 style={styles.h2}>Policy and contact links</h2>
          <div style={styles.grid3}>
            <a href={siteUrl} style={{ ...styles.card, color: "inherit", textDecoration: "none" }}>
              <h3 style={styles.h3}>Homepage</h3>
              <p style={styles.body}>General Flyby Shine resource hub and app context.</p>
            </a>
            <a
              href={`${siteUrl}/terms`}
              style={{ ...styles.card, color: "inherit", textDecoration: "none" }}
            >
              <h3 style={styles.h3}>Terms of Use</h3>
              <p style={styles.body}>Direct policy page for the Flyby Shine website and app context.</p>
            </a>
            <a
              href={`${siteUrl}/privacy`}
              style={{ ...styles.card, color: "inherit", textDecoration: "none" }}
            >
              <h3 style={styles.h3}>Privacy Policy</h3>
              <p style={styles.body}>Direct privacy page covering this reviewer-facing site.</p>
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
