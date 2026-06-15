import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { INSIGHTS } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;

  const coreRoutes = [
    "",
    "/about",
    "/method",
    "/the-path",
    "/what-you-get",
    "/why-sinnyr",
    "/apply",
    "/insights",
    "/faq",
    "/legal/privacy",
    "/legal/terms",
  ];

  const insightRoutes = INSIGHTS.map((article) => `/insights/${article.slug}`);

  const allRoutes = [...coreRoutes, ...insightRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1.0
        : route === "/apply"
          ? 0.9
          : route === "/insights" || route.startsWith("/insights/")
            ? 0.8
            : 0.8,
  }));
}
