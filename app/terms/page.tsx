export const metadata = {
  title: "Flyby Shine | Terms",
  description: "Terms of use for the Flyby Shine Amazon Associates site.",
};

export default function TermsPage() {
  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <p style={styles.kicker}>Flyby Shine</p>
        <h1 style={styles.title}>Terms of Use</h1>
        <p style={styles.text}>
          This website shares Amazon Associates links and curated gear lists for Flyby Shine.
          By using the site, you agree to use the content for lawful business and research purposes only.
        </p>
        <p style={styles.text}>
          Product availability, pricing and Amazon list contents can change without notice.
          External links open Amazon or related services in a new tab.
        </p>
        <p style={styles.text}>
          For questions about this site, visit the Flyby Shine homepage:
          {" "}
          <a href="/" style={styles.link}>flyby-amazon-public-xc7v.vercel.app</a>
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
  link: {
    color: "#FCB017",
    textDecoration: "none",
    fontWeight: 800,
  } as const,
};
