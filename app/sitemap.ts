import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site-content";

const routes = [
  "",
  "/toolkit",
  "/book",
  "/gear",
  "/terms",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-06-04"),
    changeFrequency: route === "" || route === "/toolkit" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/toolkit" ? 0.9 : 0.6,
  }));
}
