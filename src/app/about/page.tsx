import Link from "next/link";
import { ArrowUpRight, Compass, HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { ContactBanner, Eyebrow, PageHero, FeatureValue } from "@/components/ui";
import { metadataFor } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = metadataFor("About Us", "Learn about the proposed vision, approach and location of Dr. Manjula Hospital in Samastipur, Bihar.", "/about");

export default function AboutPage() {
  return <>
    <PageHero eyebrow="WHO WE ARE" title="A familiar place. A more" highlight="thoughtful experience." description="A hospital's presence is more than its building. It's the clarity people find, the conversations they have, and the care they seek. Our new digital home begins with that belief."/>
    <section className="section"><div className="container split-section">
      <div className="editorial-image"><img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=85" width="900" height="1060" alt="Illustrative modern hospital interior; not a photograph of Dr. Manjula Hospital" loading="lazy"/><span className="photo-label">Illustrative photography</span></div>
      <div className="editorial-copy"><Eyebrow>OUR STORY · IN PROGRESS</Eyebrow><h2>Rooted in Samastipur. <em>Focused on people.</em></h2><p>Dr. Manjula Hospital is a healthcare name found in public listings for the B.R.B. College area of Samastipur. This preview brings together an initial picture of its areas of care while the hospital team reviews its official history, identity and credentials.</p><p>Our goal for this new website is simple: a calm, welcoming place where people can find accurate information before they visit.</p><div className="notice-box"><Sparkles size={20}/><span><strong>Awaiting hospital confirmation.</strong> The founding story, milestones, team and official positioning will be updated from hospital-approved records.</span></div><Link href="/contact" className="button button-outline">Contact the hospital <ArrowUpRight size={17}/></Link></div>
    </div></section>
    <section className="section why-section"><div className="container"><div className="section-heading"><div className="section-heading-content"><Eyebrow>WHAT GUIDES THIS WEBSITE</Eyebrow><h2>A little more ease. A lot more clarity.</h2><p>What we want every visitor to feel as they explore the website.</p></div></div><div className="value-grid"><FeatureValue icon="heart" title="Care with dignity" text="Helpful information expressed with warmth, respect and consideration."/><FeatureValue icon="star" title="Trust through transparency" text="Only verified credentials, working hours and hospital facilities will be published at launch."/><FeatureValue icon="arrow" title="Connected to community" text="A simple digital destination for patients and families across Samastipur."/></div></div></section>
    <section className="section subtle-section"><div className="container about-location"><span className="large-line-icon"><MapPin size={34}/></span><div><Eyebrow>OUR LOCATION</Eyebrow><h2>Part of the Samastipur community.</h2><p>{site.address}</p></div><a className="button button-primary" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">View area on Maps <ArrowUpRight size={18}/></a></div></section>
    <ContactBanner/>
  </>;
}
