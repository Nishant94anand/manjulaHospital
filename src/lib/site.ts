export const site = {
  name: "Dr. Manjula Hospital",
  descriptor: "Samastipur, Bihar",
  tagline: "Care that feels personal.",
  description:
    "Discover information about women's health, maternity consultations, doctor profiles and hospital services at Dr. Manjula Hospital in Samastipur, Bihar.",
  phoneLabel: "+91 99347 43577",
  phoneHref: "tel:+919934743577",
  address: "Near B.R.B. College, Azad Nagar / Mohanpur Road, Samastipur, Bihar 848101",
  city: "Samastipur",
  state: "Bihar",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=BRB+College+Samastipur+Bihar",
} as const;

/** Actual owner sign-off required before allowing search-engine indexing. */
export const siteApproved = process.env.NEXT_PUBLIC_SITE_APPROVED === "true";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, "");

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Specialities", href: "/specialities" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export type Specialty = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  icon: "heart" | "baby" | "activity" | "flower";
  topics: string[];
};

export const specialities: Specialty[] = [
  {
    slug: "gynaecology",
    name: "Gynaecology & Women's Health",
    short: "A thoughtful space for women's health conversations and clinical guidance.",
    intro:
      "Women's health needs evolve with time. Explore the questions to discuss with your clinician, from routine consultations to concerns that deserve individual attention.",
    icon: "heart",
    topics: ["Routine gynaecology consultations", "Menstrual and reproductive health discussions", "Individualised follow-up planning"],
  },
  {
    slug: "pregnancy-care",
    name: "Pregnancy & Maternity Care",
    short: "Information and consultations for an important chapter in family life.",
    intro:
      "Pregnancy care involves many questions and decisions. Learn what to expect from pregnancy consultations and which questions may be useful to ask your treating doctor.",
    icon: "baby",
    topics: ["Pregnancy-related consultations", "Care planning conversations", "Guidance for expectant families"],
  },
  {
    slug: "antenatal-consultations",
    name: "Antenatal Consultations",
    short: "A place to discuss prenatal health, questions and next steps.",
    intro:
      "Antenatal visits are opportunities to review progress and plan the next stage of care with a qualified clinician. Specific tests and services require hospital confirmation.",
    icon: "activity",
    topics: ["Prenatal check-up discussions", "Questions about pregnancy progress", "Planning follow-up visits"],
  },
  {
    slug: "fertility-consultations",
    name: "Fertility Consultations",
    short: "Sensitive, considered conversations around reproductive health.",
    intro:
      "Fertility concerns can be deeply personal. This section introduces consultation topics only; no IVF, IUI or procedural facility is claimed in this preview.",
    icon: "flower",
    topics: ["Initial fertility-related consultations", "Understanding individual concerns", "Discussing appropriate next steps"],
  },
];

export type Doctor = { name: string; specialty: string; note: string; portrait: string };

const previewAssetPrefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** PUBLIC DIRECTORY LEADS ONLY — affiliations/qualifications are not owner verified. */
export const doctors: Doctor[] = [
  {
    name: "Dr. Manjula",
    specialty: "Obstetrics & Gynaecology · Directory-listed",
    note: "Professional details and current consultation hours pending verification.",
    portrait: `${previewAssetPrefix}/doctor-placeholder.svg`,
  },
  {
    name: "Dr. Minal",
    specialty: "Obstetrics & Gynaecology · Directory-listed",
    note: "Current affiliation and published credentials pending confirmation.",
    portrait: `${previewAssetPrefix}/doctor-placeholder.svg`,
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=85",
    alt: "Illustrative photograph of a modern clinical care setting, not Dr. Manjula Hospital",
    label: "Care environment",
  },
  {
    src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=85",
    alt: "Illustrative photograph of a hospital interior, not Dr. Manjula Hospital",
    label: "Hospital spaces",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    alt: "Illustrative photograph of medical professionals, not Dr. Manjula Hospital",
    label: "Care professionals",
  },
];
