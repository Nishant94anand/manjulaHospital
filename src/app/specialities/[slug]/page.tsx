import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumbs, ContactBanner, Eyebrow, PageHero } from "@/components/ui";
import { metadataFor } from "@/lib/seo";
import { specialities } from "@/lib/site";

export function generateStaticParams() { return specialities.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const speciality = specialities.find((item) => item.slug === slug);
  return speciality ? metadataFor(speciality.name, speciality.short + " Learn about consultation topics in Samastipur, Bihar.", "/specialities/" + speciality.slug) : metadataFor("Speciality not found", "Information about hospital specialities.", "/specialities");
}

export default async function SpecialityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = specialities.find((speciality) => speciality.slug === slug);
  if (!item) notFound();
  return <>
    <PageHero eyebrow="OUR AREAS OF CARE" title={item.name} description={item.short}/>
    <section className="section"><div className="container specialty-detail-grid"><div className="specialty-detail-main"><Breadcrumbs current={item.name} parent={{ label: "Specialities", href: "/specialities" }}/><Eyebrow>UNDERSTANDING YOUR CARE OPTIONS</Eyebrow><h2>A little clarity goes a long way.</h2><p className="large-paragraph">{item.intro}</p><h3>Topics that may come up during a consultation</h3><ul className="topic-list">{item.topics.map((topic) => <li key={topic}><CheckCircle2 size={19}/>{topic}</li>)}</ul><p className="fine-print">The topics above are general information, not a confirmed list of diagnostic or treatment services. Please check with the hospital before visiting.</p><Link className="text-link" href="/specialities"><ArrowLeft size={18}/> All specialities</Link></div><aside className="detail-aside"><div className="aside-symbol" aria-hidden="true">+</div><Eyebrow>HERE TO HELP</Eyebrow><h3>Not sure where to start?</h3><p>The reception team can help you learn about consultation availability and the right next step.</p><Link href="/contact" className="button button-primary">Contact information <ArrowUpRight size={17}/></Link></aside></div></section>
    <ContactBanner/>
  </>;
}
