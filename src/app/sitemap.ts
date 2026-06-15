import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;

  const routes = [
    "",
    "/about",
    "/method",
    "/the-path",
    "/what-you-get",
    "/why-sinnyr",
    "/apply",
    "/faq",
    "/legal/privacy",
    "/legal/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/apply" ? 0.9 : 0.8,
  }));
}
