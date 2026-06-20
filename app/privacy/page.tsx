export const metadata = {
  title: "Flyby Shine | Privacy",
  description: "Privacy policy for the Flyby Shine revenue resource site.",
};

export default function PrivacyPage() {
  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <p style={styles.kicker}>Flyby Shine</p>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.text}>
          This site shares Flyby Shine digital product, book and affiliate gear resources. It does
          not offer public user accounts or public profile features.
        </p>
        <p style={styles.text}>
          Like most websites, basic hosting logs may be processed by the platform operator
          to keep the site available and secure.
        </p>
        <p style={styles.text}>
          If a Flyby Shine operator connects a TikTok account to the Flyby Shine TikTok Publisher,
          the app may process TikTok OAuth authorization data and TikTok account data allowed by the
          approved scopes. This can include the authorized account identifier, display/profile
          fields, account-level stats, public video list, uploaded video file, caption and resulting
          upload or publish status.
        </p>
        <p style={styles.text}>
          Flyby Shine uses that TikTok data only to confirm the connected account, upload or publish
          approved Flyby Shine videos, verify the result and troubleshoot the publishing workflow.
          The integration is not intended for public users, selling personal data or unrelated
          advertising use.
        </p>
        <p style={styles.text}>
          Operational records are kept only as long as needed for publishing proof, troubleshooting,
          compliance and normal business records. A connected TikTok account can be disconnected by
          revoking the authorization in TikTok or by contacting Flyby Shine to request deletion of
          retained integration records where deletion is legally and operationally available.
        </p>
        <p style={styles.text}>
          If you click a Gumroad, Amazon, Apple Podcasts or other third-party link, that destination
          applies its own privacy practices.
        </p>
        <p style={styles.text}>
          Privacy or deletion requests can be sent to Flyby Shine through the contact options listed
          at flybyshine.com.
        </p>
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    padding: "56px 20px",
    fontFamily:
      '"Source Code Pro", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  } as const,
  container: {
    maxWidth: 760,
    margin: "0 auto",
  } as const,
  kicker: {
    margin: 0,
    color: "#FCB017",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontSize: 12,
    fontWeight: 800,
  } as const,
  title: {
    margin: "12px 0 16px",
    fontSize: 40,
    lineHeight: 1.1,
    fontWeight: 900,
  } as const,
  text: {
    margin: "0 0 16px",
    fontSize: 16,
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.82)",
  } as const,
};
