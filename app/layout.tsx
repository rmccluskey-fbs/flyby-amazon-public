import type { Metadata } from "next";
import { siteUrl } from "./lib/site-content";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Flyby Shine Revenue Hub",
    template: "%s",
  },
  description:
    "Flyby Shine resources for drone cleaning startup planning, pricing, field operations, books and affiliate gear lists.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
