import type { MetadataRoute } from "next";
import { siteApproved, siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: siteApproved ? [{ userAgent: "*", allow: "/" }] : [{ userAgent: "*", disallow: "/" }],
    sitemap: siteUrl + "/sitemap.xml",
  };
}
