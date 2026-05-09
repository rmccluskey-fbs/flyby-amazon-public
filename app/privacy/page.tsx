export const metadata = {
  title: "Flyby Shine | Privacy",
  description: "Privacy policy for the Flyby Shine Amazon Associates site.",
};

export default function PrivacyPage() {
  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <p style={styles.kicker}>Flyby Shine</p>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.text}>
          This site is a simple Amazon Associates landing page. It does not intentionally collect
          personal information through forms or user accounts.
        </p>
        <p style={styles.text}>
          Like most websites, basic hosting logs may be processed by the platform operator
          to keep the site available and secure.
        </p>
        <p style={styles.text}>
          If you click an Amazon or third-party link, that destination applies its own privacy practices.
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
