import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./site-content";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main style={styles.page}>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export function Header() {
  return (
    <header style={styles.header}>
      <Link href="/" style={styles.brand} aria-label="Flyby Shine home">
        <Image
          src="/flyby-logo-official-yellow.png"
          alt="Flyby Shine Commercial Aesthetics"
          width={3295}
          height={536}
          priority
          style={styles.brandLogo}
        />
      </Link>
      <nav style={styles.nav} aria-label="Primary navigation">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} style={styles.navLink}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer style={styles.footer}>
      <div>
        <Image
          src="/flyby-logo-official-yellow.png"
          alt="Flyby Shine Commercial Aesthetics"
          width={3295}
          height={536}
          style={styles.footerLogo}
        />
        <p style={styles.footerText}>
          Service-disabled veteran-owned exterior cleaning systems, field training and operator resources.
        </p>
      </div>
      <div style={styles.footerLinks}>
        <Link href="/toolkit" style={styles.footerLink}>
          Toolkit
        </Link>
        <Link href="/gear" style={styles.footerLink}>
          Gear
        </Link>
        <Link href="/tiktok-publisher" style={styles.footerLink}>
          TikTok App
        </Link>
        <Link href="/terms" style={styles.footerLink}>
          Terms
        </Link>
        <Link href="/privacy" style={styles.footerLink}>
          Privacy
        </Link>
        <a href="https://www.flybyshine.com" style={styles.footerLink}>
          FlybyShine.com
        </a>
      </div>
    </footer>
  );
}

export function CtaRow() {
  return (
    <div style={styles.ctaRow}>
      <a href="https://flybyshine.gumroad.com/l/yuitax" style={styles.primaryCta}>
        Get the toolkit
      </a>
      <Link href="/book" style={styles.secondaryCta}>
        Start with the book
      </Link>
      <Link href="/gear" style={styles.secondaryCta}>
        Review gear lists
      </Link>
    </div>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const colors = {
  black: "#000000",
  offBlack: "#050505",
  panel: "#10100e",
  panelAlt: "#161510",
  border: "#2d2a21",
  text: "#ffffff",
  cream: "#f4ead0",
  muted: "#d6cab0",
  dim: "#8c8578",
  yellow: "#FCB017",
  clay: "#b86f38",
  sky: "#78a8d6",
};

export const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: colors.black,
    color: colors.text,
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    padding: "16px clamp(18px, 5vw, 64px)",
    background: "rgba(0,0,0,0.94)",
    borderBottom: `1px solid ${colors.border}`,
  },
  brand: {
    textDecoration: "none",
    display: "block",
    lineHeight: 0,
  },
  brandLogo: {
    width: "clamp(180px, 26vw, 300px)",
    height: "auto",
    display: "block",
  },
  nav: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 14,
    flexWrap: "wrap",
  },
  navLink: {
    color: colors.muted,
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: "0.08em",
  },
  section: {
    padding: "72px clamp(18px, 5vw, 64px)",
    borderBottom: `1px solid ${colors.border}`,
  },
  hero: {
    minHeight: "calc(100vh - 68px)",
    display: "grid",
    alignItems: "end",
    position: "relative",
    overflow: "hidden",
    padding: "clamp(72px, 12vw, 132px) clamp(18px, 5vw, 64px) 72px",
    borderBottom: `1px solid ${colors.border}`,
    background: colors.black,
  },
  heroImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "52% 36%",
    opacity: 0.72,
    filter: "saturate(1.05) contrast(1.08)",
  },
  heroScrim: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.72) 42%, rgba(0,0,0,0.18) 100%)",
  },
  heroBand: {
    position: "absolute",
    left: "-5vw",
    right: "-5vw",
    bottom: "-12%",
    height: "22%",
    background: "rgba(0,0,0,0.72)",
    transform: "skewY(-5deg)",
    borderTop: `4px solid ${colors.yellow}`,
    borderBottom: `1px solid ${colors.border}`,
  },
  heroContent: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1100,
  },
  container: {
    maxWidth: 1180,
    margin: "0 auto",
  },
  narrow: {
    maxWidth: 860,
    margin: "0 auto",
  },
  eyebrow: {
    margin: "0 0 16px",
    color: colors.yellow,
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
  },
  h1: {
    margin: 0,
    maxWidth: 980,
    fontSize: "clamp(44px, 8vw, 92px)",
    lineHeight: 0.95,
    letterSpacing: 0,
    textTransform: "uppercase",
    fontWeight: 950,
  },
  h2: {
    margin: "0 0 18px",
    fontSize: "clamp(30px, 5vw, 52px)",
    lineHeight: 1,
    letterSpacing: 0,
    textTransform: "uppercase",
    fontWeight: 950,
  },
  h3: {
    margin: "0 0 10px",
    fontSize: 22,
    lineHeight: 1.15,
    fontWeight: 900,
  },
  lead: {
    margin: "24px 0 0",
    maxWidth: 820,
    color: colors.cream,
    fontSize: 20,
    lineHeight: 1.65,
  },
  body: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 1.75,
  },
  ctaRow: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    marginTop: 34,
  },
  primaryCta: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48,
    padding: "14px 22px",
    background: colors.yellow,
    color: colors.black,
    textDecoration: "none",
    textTransform: "uppercase",
    fontWeight: 950,
    letterSpacing: "0.08em",
    fontSize: 13,
    border: `1px solid ${colors.yellow}`,
    boxShadow: "10px 10px 0 rgba(244,234,208,0.12)",
  },
  secondaryCta: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48,
    padding: "14px 22px",
    color: colors.text,
    textDecoration: "none",
    textTransform: "uppercase",
    fontWeight: 900,
    letterSpacing: "0.08em",
    fontSize: 13,
    border: `1px solid ${colors.border}`,
    background: colors.panel,
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 18,
  },
  tierGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 18,
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 18,
  },
  card: {
    border: `1px solid ${colors.border}`,
    background:
      "linear-gradient(145deg, rgba(22,21,16,0.96), rgba(8,8,8,0.96))",
    padding: 24,
    boxShadow: "0 18px 50px rgba(0,0,0,0.28)",
  },
  cardFeatured: {
    border: `1px solid ${colors.yellow}`,
    background:
      "linear-gradient(145deg, rgba(37,29,8,0.98), rgba(8,8,8,0.96))",
    boxShadow: "0 20px 58px rgba(252,176,23,0.16)",
  },
  cardMuted: {
    border: `1px solid ${colors.border}`,
    background: "rgba(22,21,16,0.76)",
    padding: 24,
  },
  tag: {
    display: "inline-flex",
    marginBottom: 14,
    color: colors.yellow,
    fontSize: 11,
    fontWeight: 900,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },
  price: {
    color: colors.text,
    fontSize: 28,
    fontWeight: 950,
    margin: "6px 0 12px",
  },
  upsell: {
    color: colors.cream,
    fontSize: 14,
    lineHeight: 1.55,
    margin: "14px 0 0",
  },
  tierActions: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    flexWrap: "wrap",
    marginTop: 22,
  },
  textCta: {
    color: colors.yellow,
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: 11,
    fontWeight: 900,
    letterSpacing: "0.08em",
  },
  list: {
    margin: 0,
    paddingLeft: 20,
    color: colors.muted,
    lineHeight: 1.8,
  },
  disclosure: {
    border: `1px solid ${colors.yellow}`,
    background: "rgba(252,176,23,0.08)",
    color: colors.text,
    padding: 18,
    fontSize: 14,
    lineHeight: 1.6,
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    gap: 24,
    flexWrap: "wrap",
    padding: "34px clamp(18px, 5vw, 64px)",
    borderTop: `1px solid ${colors.border}`,
    background: colors.black,
  },
  footerBrand: {
    margin: "0 0 8px",
    color: colors.yellow,
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  footerLogo: {
    width: "min(230px, 70vw)",
    height: "auto",
    display: "block",
    marginBottom: 12,
  },
  footerText: {
    margin: 0,
    maxWidth: 560,
    color: colors.dim,
    lineHeight: 1.6,
  },
  footerLinks: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
    alignItems: "center",
  },
  footerLink: {
    color: colors.muted,
    textDecoration: "none",
    fontWeight: 800,
    textTransform: "uppercase",
    fontSize: 12,
    letterSpacing: "0.08em",
  },
};

export function HeroImage() {
  return (
    <>
      <Image
        src="/hero-drone-roof-cleaning.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        style={styles.heroImage}
      />
      <div style={styles.heroScrim} />
      <div style={styles.heroBand} />
    </>
  );
}
