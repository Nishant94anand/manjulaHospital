# Preview deployment — Phase 1

This repository is a **design prototype**. Hospital names, doctor affiliations, phone number, images and facilities are not owner-approved. The current build must **remain unindexed** and must not be used as the hospital's production website.

## Local development (recommended first)

Requires Node.js 22 LTS and npm.

```powershell
git clone https://github.com/Nishant94anand/manjulaHospital.git
cd manjulaHospital
npm install
npm run dev
```

Open http://localhost:3000. Changes appear automatically during development.

To test the actual *static production export* locally:

```powershell
npm run build
npx serve out
```

Use the URL printed by `serve`. Site's `next.config.ts` has `output: "export"`, so no production Node.js runtime is required for Phase 1.

## Free public review: GitHub Pages

GitHub Pages supports a free project preview for public repos. This is for a **non-transactional, educational/design preview only**, not hosting the hospital's actual business site. GitHub Pages has restrictions on business hosting.

1. Open [Repository Settings → Pages](https://github.com/Nishant94anand/manjulaHospital/settings/pages).
2. Under **Build and deployment**, set **Source: GitHub Actions**.
3. Go to [Actions → Publish static preview (GitHub Pages)](https://github.com/Nishant94anand/manjulaHospital/actions/workflows/deploy-preview.yml).
4. Select **Run workflow**, branch `main`, then **Run workflow**.
5. After a successful deployment, GitHub Pages will list the **actual live preview URL** in Settings → Pages; the expected URL shape is `https://nishant94anand.github.io/manjulaHospital/`.
6. To update the demo, push your code, then manually rerun that deployment workflow.

The dedicated workflow uses `NEXT_PUBLIC_BASE_PATH=/manjulaHospital` so assets and internal links work under the repository path. It forces `NEXT_PUBLIC_SITE_APPROVED=false` for preview builds, leaving the provisional data visibly marked and search indexing off.

**Do not enter patient information** or use GitHub Pages to run appointment, payment or medical-record features. Site is publicly accessible to anyone with its URL.

## Free static hosting suitable for a future hospital site

[Firebase Hosting](https://firebase.google.com/docs/hosting) on the **Spark (no-cost) plan** supports a static website without a paid hosting subscription while usage remains within its free limits. Firebase hosting is distinct from Firebase App Hosting (which is geared toward server-rendered web apps).

The repo already has a `firebase.json` with `public: "out"`:

```powershell
npm install -g firebase-tools
firebase login
# Create a Firebase project in the console, then:
npm run build
firebase deploy --only hosting --project YOUR_PROJECT_ID
```

Set `NEXT_PUBLIC_SITE_URL` to the final Firebase/own domain during production build. Keep `NEXT_PUBLIC_SITE_APPROVED=false` until hospital-provided content and imagery are validated.

Alternatively, [Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/) can build directly from GitHub. Select the Next.js **Static HTML Export** preset, build command `npm run build`, output directory `out`. It supplies a `*.pages.dev` URL and deploy previews.

## Owner approval before real launch

Read [content-approval.md](content-approval.md) before enabling indexing. Confirm legal name, doctor credentials, phone, service claims, operating hours, original photographs, and final domain. Switch from demo URLs to the production domain and verify all metadata, sitemap and robots directives before launch.
