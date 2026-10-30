import { ArrowUpRight, CheckCircle2, HeartPulse, SearchCheck } from "lucide-react";
import Link from "next/link";
import { ContactBanner, Eyebrow, PageHero, SpecialtyCard } from "@/components/ui";
import { metadataFor } from "@/lib/seo";
import { specialities } from "@/lib/site";

export const metadata = metadataFor("Specialities & Care", "Explore women's health, pregnancy, antenatal and fertility consultation topics associated with Dr. Manjula Hospital in Samastipur.", "/specialities");

export default function SpecialitiesPage() {
  return <>
    <PageHero eyebrow="AREAS OF CARE" title="Your health deserves" highlight="thoughtful attention." description="Explore care topics relevant to women and families. Our team will confirm which specific consultations and services are currently available before the website is launched."/>
    <section className="section"><div className="container"><div className="info-intro"><div><Eyebrow>EXPLORE SPECIALITIES</Eyebrow><h2>Finding your way to care.</h2></div><p>Browse these draft speciality areas and discover the kind of questions you may want to discuss during a consultation.</p></div><div className="specialty-grid">{specialities.map((item, i) => <SpecialtyCard key={item.slug} item={item} index={i}/>)}</div></div></section>
    <section className="section subtle-section"><div className="container care-guide"><div className="care-guide-icon"><HeartPulse size={38}/></div><div><Eyebrow>AN IMPORTANT NOTE</Eyebrow><h2>Consultations are personal.</h2><p>Information on this site is for orientation only, not a diagnosis or substitute for professional medical advice. Availability of specific services and procedures must be checked with the hospital directly.</p></div><Link href="/contact" className="text-link">Contact reception <ArrowUpRight size={18}/></Link></div></section>
    <ContactBanner/>
  </>;
}
