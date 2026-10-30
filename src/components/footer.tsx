import Link from "next/link";
import { ArrowUpRight, Heart, MapPin, Phone } from "lucide-react";
import { navigation, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand-col">
          <Link href="/" className="brand footer-brand" aria-label="Dr. Manjula Hospital, homepage">
            <span className="brand-mark" aria-hidden="true"><span className="brand-plus">+</span></span>
            <span className="brand-copy"><strong>Dr. Manjula</strong><small>HOSPITAL <i>·</i> SAMASTIPUR</small></span>
          </Link>
          <p>Thoughtful healthcare information for women and families in Samastipur. We believe clarity is an important part of every care journey.</p>
          <span className="footer-small-pill"><Heart size={14} /> Built with care for our community</span>
        </div>
        <div className="footer-links-col">
          <h3>Explore</h3>
          <div className="footer-link-grid">
            {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div className="footer-contact-col">
          <h3>Get in touch</h3>
          <p><MapPin size={17}/><span>{site.address}</span></p>
          <p><Phone size={17}/><a href={site.phoneHref}>{site.phoneLabel}</a></p>
          <a className="footer-map-link" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">View area on Google Maps <ArrowUpRight size={16}/></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span className="draft-disclaimer">Website preview · Directory-derived details and stock images pending hospital approval</span>
      </div>
    </footer>
  );
}
