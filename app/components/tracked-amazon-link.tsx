"use client";

import type { CSSProperties, ReactNode } from "react";
import { track } from "@vercel/analytics";

type TrackedAmazonLinkProps = {
  children: ReactNode;
  href: string;
  mission: string;
  style?: CSSProperties;
};

export function TrackedAmazonLink({
  children,
  href,
  mission,
  style,
}: TrackedAmazonLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      style={style}
      onClick={() =>
        track("amazon_outbound_click", {
          mission,
          destination: "amazon",
        })
      }
    >
      {children}
    </a>
  );
}
