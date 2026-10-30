# Dr. Manjula Hospital — premium static website (Phase 1)

A modern, editorial-style, mobile-first hospital website prototype for **Dr. Manjula Hospital / Matrika Manjula Nursing Home, Samastipur, Bihar**.

> **IMPORTANT:** Research-based **design preview**, not an approved/live hospital website. The final brand name, clinicians, services, phone, photographs, legal details and hospital hours must be confirmed by the hospital owner. Stock imagery is labelled as illustrative. **Search engine indexing is OFF by default.**

## Tech stack

- **Next.js 16 / App Router**, React 19, TypeScript
- **Tailwind CSS 4** plus custom design system (`src/app/globals.css`)
- Lucide icons
- Static Site Generation (`output: 'export'`) — **no Node server required in production**, no backend or DB
- Firebase Hosting config (`firebase.json`)
- Google-friendly SEO foundation: individual routes, page metadata, canonical URLs, sitemap, robots, Open Graph; optional Hospital JSON-LD after approval
- GitHub Actions build checks (`.github/workflows/ci.yml`)

## Pages

| Route | Content |
| --- | --- |
| `/` | Home / hero, specialties, story, doctors, location |
| `/about/` | Hospital introduction, editorial narrative |
| `/specialities/` | Care categories |
| `/specialities/[slug]/` | Four SEO-focused speciality detail pages, statically generated |
| `/doctors/` | Research-derived provisional doctor directory |
| `/facilities/` | Facility overview **without unverified medical claims** |
| `/gallery/` | Labelled illustrative placeholder imagery |
| `/contact/` | Public directory contact, locality, maps search link; no form |

## Run locally

Requirements: Node.js **20.9+** (Node 22 LTS recommended) and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open **http://localhost:3000**.

```bash
npm run typecheck
npm run lint
npm run build
```

Static output goes to `out/`.

## Deploy to Firebase Hosting

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/) using the hospital's or your Google Cloud account.
2. Install the Firebase CLI (`npm install -g firebase-tools`) and run `firebase login`.
3. Set `NEXT_PUBLIC_SITE_URL=https://YOUR-REAL-DOMAIN` in your build environment or `.env.local`.
4. Keep `NEXT_PUBLIC_SITE_APPROVED=false` until all public claims are owner-approved.
5. Run `npm run build`.
6. Run `firebase deploy --only hosting --project YOUR_FIREBASE_PROJECT_ID`.
7. Under Firebase Hosting → Add custom domain, follow Firebase's exact DNS verification instructions for the real domain.
8. Once the hospital owner approves the content, **replace stock photography, check every doctor and service, configure site URL, then explicitly set `NEXT_PUBLIC_SITE_APPROVED=true`, rebuild and redeploy**. Verify `robots.txt`, sitemap and canonical tags.

> Static Firebase Hosting is intentional for Phase 1. If you later introduce Spring Boot, authentication and appointment slots, they should live behind a separate API and database, not in this static site.

## Project structure

```text
src/
  app/
    about/ doctors/ specialities/[slug]/ facilities/ gallery/ contact/
    layout.tsx page.tsx globals.css robots.ts sitemap.ts
  components/
    header.tsx footer.tsx ui.tsx
  lib/
    site.ts seo.ts
public/
  brand-mark.svg doctor-placeholder.svg
src/app/icon.svg
docs/
  content-approval.md research-knowledge-base.md research-seed.json
firebase.json
.github/workflows/ci.yml
```

## Content and SEO safety

- `src/lib/site.ts` is the **only source of published hospital names, contact details, doctors and specialities**; update after owner approval.
- The current phone number is present in multiple public directories but **not owner-confirmed**.
- Unverified services (emergency/ICU/lab/procedures) are not claimed.
- No appointment forms, patient data or backend exist in Phase 1.
- The main site and detail pages have per-page SEO metadata and semantic headings.
- The `robots.ts` file disallows crawling, and `<meta name="robots">` is `noindex` until approval.
- `NEXT_PUBLIC_SITE_URL` must be set to the actual URL before production. The `example.com` default is an intentional placeholder.
- **All Unsplash URLs are design placeholders**, not imagery of the hospital, its staff, or its services. Replace with licensed, owner-approved photographs before public launch.
- Google Maps link goes to a landmark *search*, **not** a claimed verified hospital pin.
- No fictitious awards, testimonials, facility counts, ratings or success rates have been inserted.

## Next phase

When Phase 1 is approved, consider Java Spring Boot REST APIs, PostgreSQL, role-based access, schedules and appointment booking. Content can later move from `site.ts` to API-driven sources.

## Data provenance

See `docs/research-knowledge-base.md` and `docs/content-approval.md`. Research is sourced from third-party public directories and is not equivalent to hospital confirmation.
