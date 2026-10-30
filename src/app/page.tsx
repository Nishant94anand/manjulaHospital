import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Heart, MapPin, MoveUpRight, Phone, Quote, ShieldCheck, Sparkles } from "lucide-react";
import { ContactBanner, DoctorCard, Eyebrow, FeatureValue, SectionHeading, SpecialtyCard } from "@/components/ui";
import { doctors, site, siteApproved, siteUrl, specialities } from "@/lib/site";

export default function Home() {
  const schema = { "@context": "https://schema.org", "@type": "Hospital", name: site.name, url: siteUrl, telephone: site.phoneLabel, address: { "@type": "PostalAddress", streetAddress: "Near B.R.B. College, Azad Nagar / Mohanpur Road", addressLocality: "Samastipur", addressRegion: "Bihar", postalCode: "848101", addressCountry: "IN" } };
  return <>
    {siteApproved && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}/>} 
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <Eyebrow>WELCOME TO DR. MANJULA HOSPITAL</Eyebrow>
          <h1>Care that feels <em>personal.</em><br/>A place to feel <span className="highlight-word">heard.</span></h1>
          <p className="hero-lead">Thoughtful healthcare information for women and families in Samastipur. Discover our areas of care, explore doctor profiles, and find the guidance you need to take your next step.</p>
          <div className="hero-actions"><Link href="/specialities" className="button button-primary">Explore specialities <ArrowUpRight size={18}/></Link><Link href="/about" className="button button-ghost">Our story <ArrowRight size={18}/></Link></div>
          <div className="hero-trust"><span className="trust-icon"><Heart size={20} fill="currentColor"/></span><span>Rooted in Samastipur <span className="trust-sep">·</span> Built around care</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo"><img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85" alt="Illustrative stock photograph of a healthcare professional; not hospital staff" width="790" height="950" fetchPriority="high"/><span className="photo-label">Illustrative photography</span></div>
          <div className="hero-floating-card floating-top"><span className="floating-icon"><Heart size={22}/></span><span><strong>People first.</strong><small>Care with empathy.</small></span></div>
          <div className="hero-floating-card floating-bottom"><span className="floating-mini-icon"><MapPin size={18}/></span><span><strong>Here in Samastipur</strong><small>Close to our community</small></span></div>
          <div className="hero-circle" aria-hidden="true"/>
        </div>
      </div>
    </section>

    <section className="benefits-bar"><div className="container benefits-inner">
      <div><ShieldCheck size={22}/><span>Clear healthcare information</span></div>
      <div><Heart size={22}/><span>A people-first perspective</span></div>
      <div><Sparkles size={22}/><span>Thoughtfully designed experience</span></div>
    </div></section>

    <section className="section specialities-section" id="specialities"><div className="container">
      <SectionHeading eyebrow="OUR AREAS OF CARE" title="Care for every important chapter." description="Explore the consultation areas appearing in public hospital listings. Specific services will be confirmed with the hospital before launch." action={{ label: "View all specialities", href: "/specialities" }}/>
      <div className="specialty-grid">{specialities.map((item, i) => <SpecialtyCard key={item.slug} item={item} index={i}/>)}</div>
    </div></section>

    <section className="about-feature section"><div className="container about-feature-grid">
      <div className="about-image"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85" width="880" height="970" alt="Illustrative photograph of clinical staff, not actual hospital employees" loading="lazy"/><div className="about-visual-caption">Illustrative photograph</div><div className="image-accent"/></div>
      <div className="about-feature-content"><Eyebrow>A PLACE FOR CARE AND CONNECTION</Eyebrow><h2>Healthcare should feel <em>human.</em></h2><p>In a moment that matters, clarity and compassion make a difference. This website is being created to help patients and families in Samastipur learn about the hospital and find their way to the right people.</p><div className="about-checks"><span><Check size={16}/> Information that is easy to find</span><span><Check size={16}/> A welcoming, accessible experience</span><span><Check size={16}/> Thoughtful guidance for families</span></div><Link href="/about" className="button button-outline">Get to know us <ArrowUpRight size={18}/></Link></div>
    </div></section>

    <section className="section why-section"><div className="container"><SectionHeading eyebrow="OUR APPROACH" title="Good care starts with understanding." description="Three principles guiding the experience we are designing for patients and their families."/>
      <div className="value-grid"><FeatureValue icon="heart" title="Compassion in every interaction" text="Healthcare communication should be respectful, considerate and easy to understand."/><FeatureValue icon="star" title="Clarity over complexity" text="From departments to directions, the information you need should be simple to navigate."/><FeatureValue icon="arrow" title="Designed for real life" text="Useful information that works beautifully on your phone, wherever you are."/></div>
    </div></section>

    <section className="section doctors-preview"><div className="container">
      <SectionHeading eyebrow="MEET THE CLINICIANS" title="The people behind the care." description="Doctor names below are based on public directory listings. The hospital will review and approve all biographies, photos and current affiliations before launch." action={{ label: "See doctor profiles", href: "/doctors" }}/>
      <div className="doctor-grid">{doctors.map((doctor) => <DoctorCard key={doctor.name} item={doctor}/>)}</div>
    </div></section>

    <section className="location-feature section"><div className="container location-grid"><div><Eyebrow>FIND US</Eyebrow><h2>Care, close to <em>home.</em></h2><p>Located near B.R.B. College in Samastipur. For exact directions and consultation availability, please contact reception before visiting.</p><div className="address-line"><MapPin size={21}/><span>{site.address}</span></div><div className="location-actions"><a className="button button-primary" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">View area map <MoveUpRight size={17}/></a><Link href="/contact" className="text-link">Contact information <ArrowRight size={16}/></Link></div></div><div className="location-art"><div className="map-grid" aria-hidden="true"/><div className="map-pin"><MapPin size={32} fill="currentColor"/></div><div className="map-label"><span>Samastipur</span><strong>Bihar, India</strong></div><span className="map-helper">Illustrative map graphic · Not a precise location pin</span></div></div></section>

    <ContactBanner dark/>
  </>;
}
