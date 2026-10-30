import type { MetadataRoute } from "next";

// Required for static exports in Next.js 16.
export const dynamic = "force-static";
import { siteApproved, siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: siteApproved ? [{ userAgent: "*", allow: "/" }] : [{ userAgent: "*", disallow: "/" }],
    sitemap: siteUrl + "/sitemap.xml",
  };
}
