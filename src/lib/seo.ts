import type { Metadata } from "next";
import { site, siteApproved, siteUrl } from "@/lib/site";

export function metadataFor(title: string, description: string, path = ""): Metadata {
  const url = siteUrl + path + (path && !path.endsWith("/") ? "/" : "");
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: title + " | " + site.name,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: { card: "summary", title: title + " | " + site.name, description },
    robots: { index: siteApproved, follow: siteApproved },
  };
}
