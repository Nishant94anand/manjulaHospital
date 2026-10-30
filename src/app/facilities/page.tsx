import Link from "next/link";
import { ArrowUpRight, Camera, ClipboardCheck, MapPin, Sparkles } from "lucide-react";
import { ContactBanner, Eyebrow, PageHero } from "@/components/ui";
import { metadataFor } from "@/lib/seo";

export const metadata = metadataFor("Our Facilities", "Explore the facilities section of the Dr. Manjula Hospital website preview. Verified details will be added after approval.", "/facilities");

const items = [
  { label: "Reception & patient assistance", detail: "Hospital photographs and practical access information to be added after verification.", icon: MapPin },
  { label: "Consultation spaces", detail: "Actual departments, consultation rooms and operating hours are being documented.", icon: ClipboardCheck },
  { label: "Hospital environment", detail: "A clearer look at the on-site experience, using approved photographs and facility information.", icon: Camera },
];

export default function FacilitiesPage() {
  return <>
    <PageHero eyebrow="YOUR VISIT, MADE EASIER" title="A closer look at our" highlight="spaces." description="Knowing what to expect helps make any visit easier. This page will become a visual guide to the hospital's actual facilities once the team approves the photographs and information."/>
    <section className="section"><div className="container split-section"><div className="editorial-image"><img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=85" width="900" height="1060" alt="Illustrative photograph of a hospital hallway, not Dr. Manjula Hospital" loading="lazy"/><span className="photo-label">Illustrative photography</span></div><div className="editorial-copy"><Eyebrow>FACILITIES · CONTENT IN PROGRESS</Eyebrow><h2>Spaces that support <em>your visit.</em></h2><p>Our goal is to show real, current images of the hospital and provide practical information that can help patients and families prepare for a visit.</p><div className="facility-list">{items.map(({label,detail,icon:Icon}) => <div key={label}><span><Icon size={22}/></span><div><h3>{label}</h3><p>{detail}</p></div></div>)}</div><div className="notice-box"><Sparkles size={19}/><span>Clinical facilities such as ICU, imaging, emergency, laboratories and procedural services will only be listed when independently approved by the hospital.</span></div><Link href="/gallery" className="button button-outline">Explore gallery <ArrowUpRight size={17}/></Link></div></div></section>
    <ContactBanner/>
  </>;
}
