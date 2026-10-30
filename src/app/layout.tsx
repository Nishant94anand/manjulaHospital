import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site, siteApproved, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Dr. Manjula Hospital | Healthcare in Samastipur, Bihar", template: "%s | Dr. Manjula Hospital" },
  description: site.description,
  keywords: ["hospital Samastipur", "Dr Manjula Hospital", "women's health Samastipur", "gynaecology Samastipur", "maternity consultation Samastipur"],
  robots: { index: siteApproved, follow: siteApproved },
  openGraph: { type: "website", locale: "en_IN", siteName: site.name, title: site.name, description: site.description },
  twitter: { card: "summary", title: site.name, description: site.description },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0A7776" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>
    <a href="#main-content" className="skip-link">Skip to content</a>
    {!siteApproved && <div className="preview-ribbon">DESIGN PREVIEW · Public listing data and imagery are awaiting owner approval</div>}
    <Header />
    <main id="main-content">{children}</main>
    <Footer />
  </body></html>;
}
