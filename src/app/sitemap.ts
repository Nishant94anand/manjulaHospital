import type { MetadataRoute } from "next";

// Required for static exports in Next.js 16.
export const dynamic = "force-static";
import { siteUrl, specialities } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/doctors", "/specialities", "/facilities", "/gallery", "/contact"];
  return [...pages, ...specialities.map((item) => "/specialities/" + item.slug)].map((path) => ({
    url: siteUrl + path + (path ? "/" : "/"),
    changeFrequency: "monthly" as const,
    priority: !path ? 1 : path.startsWith("/specialities/") ? 0.6 : 0.8,
  }));
}
