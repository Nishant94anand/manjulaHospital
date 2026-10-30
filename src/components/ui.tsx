import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Baby, HeartPulse, HeartHandshake, Leaf, MoveUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { type Doctor, type Specialty, site } from "@/lib/site";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow"><span className="eyebrow-dot"/>{children}</span>;
}

export function SectionHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description?: string; action?: { label: string; href: string } }) {
  return (
    <div className="section-heading">
      <div className="section-heading-content"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{description && <p>{description}</p>}</div>
      {action && <Link href={action.href} className="text-link">{action.label} <ArrowUpRight size={18}/></Link>}
    </div>
  );
}

export function PageHero({ eyebrow, title, highlight, description }: { eyebrow: string; title: string; highlight?: string; description: string }) {
  return (
    <section className="interior-hero"><div className="container interior-grid">
      <div><Eyebrow>{eyebrow}</Eyebrow><h1>{title} {highlight && <em>{highlight}</em>}</h1></div>
      <p>{description}</p>
    </div><div className="interior-decoration" aria-hidden="true"/></section>
  );
}

const specialtyIconMap = { heart: HeartPulse, baby: Baby, activity: ShieldCheck, flower: Leaf };

export function SpecialtyCard({ item, index }: { item: Specialty; index: number }) {
  const Icon = specialtyIconMap[item.icon];
  return <Link href={"/specialities/" + item.slug} className="specialty-card">
    <div className="specialty-card-top"><span className="service-icon"><Icon size={29} strokeWidth={1.5}/></span><span className="service-number">0{index + 1}</span></div>
    <h3>{item.name}</h3><p>{item.short}</p>
    <span className="card-arrow" aria-hidden="true"><ArrowUpRight size={20}/></span>
  </Link>;
}

export function DoctorCard({ item }: { item: Doctor }) {
  return <article className="doctor-card">
    <div className="doctor-image-wrap"><img src={item.portrait} width="500" height="580" alt={"Placeholder illustration for " + item.name + "; verified photograph pending"} loading="lazy"/></div>
    <div className="doctor-info"><span className="mini-label">PROFILE PENDING VERIFICATION</span><h3>{item.name}</h3><p className="doctor-speciality">{item.specialty}</p><p className="doctor-note">{item.note}</p></div>
  </article>;
}

export function ContactBanner({ title = "Every care journey begins with a conversation.", text = "Looking for information about a department or doctor? Reach out to the hospital team using the publicly listed contact number.", dark = false }: { title?: string; text?: string; dark?: boolean }) {
  return <section className={dark ? "contact-banner contact-banner-dark" : "contact-banner"}>
    <div className="container contact-banner-content"><div><Eyebrow>HERE WHEN YOU NEED INFORMATION</Eyebrow><h2>{title}</h2><p>{text}</p></div>
      <a className="button button-light" href={site.phoneHref}><HeartHandshake size={18}/> Call reception <ArrowUpRight size={18}/></a>
    </div><div className="banner-orbit" aria-hidden="true"/>
  </section>;
}

export function FeatureValue({ icon, title, text }: { icon: "heart" | "star" | "arrow"; title: string; text: string }) {
  const Icon = icon === "heart" ? HeartHandshake : icon === "star" ? Sparkles : MoveUpRight;
  return <div className="value-card"><span className="value-icon"><Icon size={24} strokeWidth={1.7}/></span><h3>{title}</h3><p>{text}</p></div>;
}

export function Breadcrumbs({ current, parent }: { current: string; parent?: { label: string; href: string } }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><ArrowRight size={12}/>{parent && <><Link href={parent.href}>{parent.label}</Link><ArrowRight size={12}/></>}<span aria-current="page">{current}</span></nav>;
}
