"use client";

import type { CSSProperties, ReactNode } from "react";
import { track } from "@vercel/analytics";

type TrackedAmazonLinkProps = {
  children: ReactNode;
  href: string;
  mission: string;
  item?: string;
  placement?: string;
  style?: CSSProperties;
};

export function TrackedAmazonLink({
  children,
  href,
  mission,
  item = "list",
  placement = "mission-card",
  style,
}: TrackedAmazonLinkProps) {
  function trackOutboundClick() {
    const params = new URLSearchParams(window.location.search);
    const referrer = document.referrer ? new URL(document.referrer) : null;

    const campaignValue = (key: string, fallback: string) =>
      params.get(key) ?? referrer?.searchParams.get(key) ?? fallback;

    track("amazon_outbound_click", {
      mission,
      item,
      placement,
      landing_path: window.location.pathname,
      source: campaignValue("utm_source", "direct"),
      medium: campaignValue("utm_medium", "none"),
      campaign: campaignValue("utm_campaign", "none"),
    });
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      style={style}
      onClick={trackOutboundClick}
    >
      {children}
    </a>
  );
}
