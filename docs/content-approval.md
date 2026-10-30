# Pre-launch content & SEO approval checklist

**This repository is a first-draft demonstration, not a live medical website.** Its location/phone and doctors are based on public directory research, and the name may have multiple variations.

## Must receive owner sign-off

- [ ] Official hospital display name, full postal address, map pin and approved contact numbers
- [ ] Authorized logo, color palette, photography/usage rights and brand assets
- [ ] Hospital story, founder, establishment date and leadership copy
- [ ] Current doctor roster, full professional names, credentials, registrations, specialties, photographs, OPD hours and consent to publish
- [ ] Clinically accurate list of services (especially pregnancy/delivery, fertility, diagnostics, ICU, emergency)
- [ ] Actual facility photographs, captions and available equipment
- [ ] Opening/consultation hours, weekend/holiday availability and emergency contacts if applicable
- [ ] Privacy policy and any legally required public disclosures (review with hospital's legal advisor)
- [ ] Official domain and DNS, canonical site URL, public contact email and social profiles
- [ ] Final copy review with hospital owner + medical professional
- [ ] Replace all illustrative photography and the placeholder doctor portraits
- [ ] Remove the preview ribbon and disclaimers only after verification (see `src/app/layout.tsx` and content components)

## SEO go-live steps

- [ ] Set `NEXT_PUBLIC_SITE_URL=https://FINAL-DOMAIN`
- [ ] Confirm the hospital identity matches Google Business Profile / real-world signage
- [ ] Set `NEXT_PUBLIC_SITE_APPROVED=true` **only after all claims are signed off**
- [ ] Run `npm run build`, inspect `out/robots.txt`, `out/sitemap.xml` and per-page HTML titles
- [ ] Check each canonical URL resolves at the final domain
- [ ] Check semantic headings, internal links, images, accessible navigation and page speed
- [ ] Submit sitemap through Google Search Console

## Research caution

Other listings share the name “Dr. Manjula Hospital”, including an unrelated institution in **Hanamkonda, Telangana**. Do not import any Telangana photos, biographies or services.

Public research can be read in `research-knowledge-base.md`. It is **not** an official source of medical claims.
