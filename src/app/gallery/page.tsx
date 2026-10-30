import { Camera, Images } from "lucide-react";
import { ContactBanner, Eyebrow, PageHero } from "@/components/ui";
import { metadataFor } from "@/lib/seo";
import { galleryImages } from "@/lib/site";

export const metadata = metadataFor("Gallery", "A visual preview of the future Dr. Manjula Hospital gallery. Current photographs are illustrative and not hospital-owned.", "/gallery");

export default function GalleryPage() {
  return <>
    <PageHero eyebrow="OUR GALLERY" title="A glimpse into the" highlight="care environment." description="A visual starting point for our new website. These photographs are temporary illustrative stock images and will be replaced with approved images of the actual hospital."/>
    <section className="section"><div className="container"><div className="gallery-note"><Camera size={20}/><span>Design preview only — none of the photographs below depict Dr. Manjula Hospital or its staff.</span></div><div className="gallery-grid">{galleryImages.map((item, i) => <figure className={i === 0 ? "gallery-item gallery-featured" : "gallery-item"} key={item.src}><img src={item.src} alt={item.alt} loading="lazy"/><figcaption><span>{item.label}</span><small>Illustrative photo</small></figcaption></figure>)}</div><div className="gallery-coming"><Images size={27}/><h3>Real hospital photography is coming.</h3><p>We will use the hospital's own approved photographs for its building, care areas and team before any public launch.</p></div></div></section>
    <ContactBanner/>
  </>;
}
