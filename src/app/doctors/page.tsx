import { BadgeCheck, ClipboardCheck } from "lucide-react";
import { ContactBanner, DoctorCard, Eyebrow, PageHero } from "@/components/ui";
import { metadataFor } from "@/lib/seo";
import { doctors } from "@/lib/site";

export const metadata = metadataFor("Our Doctors", "Explore preliminary doctor listings associated with Dr. Manjula Hospital, Samastipur. All details await confirmation.", "/doctors");

export default function DoctorsPage() {
  return <>
    <PageHero eyebrow="THE PEOPLE BEHIND THE CARE" title="Get to know our" highlight="doctors." description="Finding the right clinician begins with understanding their role. We are building a clear, verified directory of medical professionals and their consultation information."/>
    <section className="section"><div className="container"><div className="info-intro"><div><Eyebrow>CLINICIAN DIRECTORY</Eyebrow><h2>Names found in public listings</h2></div><p>This is an early design draft. Affiliation, qualifications, schedule and portraits must be confirmed directly by the hospital before the directory is publicly indexed.</p></div><div className="doctor-grid">{doctors.map((doctor) => <DoctorCard item={doctor} key={doctor.name}/>)}</div></div></section>
    <section className="section subtle-section"><div className="container"><div className="section-heading"><div className="section-heading-content"><Eyebrow>COMING WITH VERIFIED DETAILS</Eyebrow><h2>Helpful profiles, not just names.</h2></div></div><div className="two-column-values"><div><ClipboardCheck size={28}/><h3>Credentials & special interests</h3><p>Approved qualifications, areas of practice and registration details.</p></div><div><BadgeCheck size={28}/><h3>Consultation information</h3><p>Doctor availability and accurate OPD timings once confirmed.</p></div></div></div></section>
    <ContactBanner title="Have a question about a doctor?" text="For up-to-date doctor availability and consultation details, contact the hospital reception directly."/>
  </>;
}
