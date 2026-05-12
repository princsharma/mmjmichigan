# Michigan MMJ Card — medicalmarijuanascardmichigan.com

Production-ready Next.js 16 landing site for Michigan medical marihuana card
evaluations. Sibling of `medicalmarijuanascardillinois.com` — same brand
system, deliberately distinct layout.

## Tech

- **Next.js 16** (App Router, Turbopack), **TypeScript** strict
- **CSS Modules** only (no Tailwind, no styled-components)
- **next/font/google** for self-hosted Outfit + Playfair Display
- **React Hook Form + Zod** for the lead form
- Path alias `@/*` → `./src/*`
- Static export of `/`, `/_not-found`, `/robots.txt`, `/sitemap.xml`,
  `/manifest.webmanifest`

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

No environment variables are required by default.

## Project layout

```
src/
├─ app/                # routes, metadata, sitemap, robots, manifest
├─ components/<Name>/  # co-located Component.tsx + Component.module.css
├─ forms/LeadForm/     # client-component lead form
├─ schemas/            # zod schemas
├─ data/               # typed content arrays (FAQ, conditions, pricing, …)
├─ constants/site.ts   # SITE name, url, contact, nav
└─ lib/schema.ts       # JSON-LD builders
```

Every section that loops content (FAQ, conditions, benefits, pricing, steps,
testimonials, stats, why-us) reads from a typed array in `src/data/*.ts`.
JSON-LD is generated from the same arrays — never duplicate strings.

## What differs from the Illinois sibling

| Section | Illinois | Michigan |
| --- | --- | --- |
| **Hero** | Form-in-hero (right column) | Split-image: headline + CTA left, SVG doctor/leaf illustration right. **No form in hero.** |
| **Get Started** | (no dedicated section) | New full-width section directly below hero with form + benefits teaser |
| **Stats bar** | Dark band immediately below hero | Floating tiles on cream between Why-Us and How-It-Works |
| **How It Works** | Horizontal 4-column row | **Vertical timeline** with alternating left/right cards |
| **Doctors** | Side-by-side text + dashboard | **Full-width banner** with 4-avatar row + centered quote |
| **Conditions** | Flat 4-column pill grid | **Tabbed interface** grouped by category (Mental Health, Chronic Pain, Neurological, Other) |
| **Pricing** | Two-card side-by-side | **3-tier**: New / Renewal / Caregiver |
| **Testimonials** | 3-card grid | **Carousel** with arrows + dots |
| **FAQ** | One stacked accordion | **2-column** with sticky side jump-nav by topic |

Brand-family elements that are preserved: alternating cream/white/dark
section bands, green eyebrow → display H2 → muted description rhythm, pill
CTAs with green-glow shadows, hover-lift cards, pulse-dot live indicator,
shimmer top-bar on the form card, floating accent badges using the `bob`
keyframe.

## Michigan facts referenced in copy

These are the Michigan-specific facts the AI used while writing the copy.
**Please fact-check before launch** — Michigan's CRA fees and qualifying
conditions list can change.

- **State agency:** Cannabis Regulatory Agency (CRA).
- **Program:** Michigan Medical Marihuana Program (MMMP), administered by
  the CRA under the Michigan Medical Marihuana Act (MMMA) of 2008.
- **Legal spelling:** "marihuana" is the Michigan statutory spelling and is
  used in formal/legal references. "Marijuana" is used in user-facing
  marketing copy where it reads more naturally.
- **Card validity:** Cards are typically valid for **2 years**.
- **State registration fee:** Stated only as "paid separately to the CRA"
  with a note to verify on Michigan.gov. **No specific dollar amount is
  hard-coded** — the prompt said not to invent state fees.
- **Home cultivation:** Up to **12 marihuana plants** in an enclosed, locked
  facility for a registered qualifying patient under the MMMA.
- **Qualifying conditions referenced** (grouped under tabs):
  - *Mental Health*: PTSD, Autism Spectrum Disorder, OCD.
  - *Chronic Pain*: severe and chronic pain, severe and persistent muscle
    spasms, severe nausea, cachexia/wasting syndrome.
  - *Neurological*: ALS, Alzheimer's, cerebral palsy, multiple sclerosis,
    Parkinson's, seizures/epilepsy, Tourette's.
  - *Other*: cancer, glaucoma, HIV/AIDS, hepatitis C, Crohn's, IBD,
    ulcerative colitis, rheumatoid arthritis, spinal cord injury,
    nail-patella syndrome, chronic liver disease, arthritis.
- **Reciprocity:** Mentioned as "Michigan allows visiting qualifying
  patients with a valid out-of-state registry ID to purchase from licensed
  Michigan provisioning centers." Reciprocity rules can change — verify
  current CRA guidance before publishing.
- **Geography in testimonials:** Detroit, Grand Rapids, Lansing, Ann Arbor.
- **Pricing (set by us, not the state):** $149 new / $129 renewal / $49
  caregiver add-on. Adjust these in `src/data/pricing.ts`.
- **Stats placeholders** (`5,000+ patients`, `98%`, `4.9/5`, `24hrs`) are
  brand-level claims used on the Illinois sibling and reused here. The
  writer should confirm we can substantiate them for Michigan or replace
  them with verifiable numbers in `src/data/stats.ts`.

## TODOs for the content writer

- **Fact-check the conditions list** against the current Cannabis
  Regulatory Agency page. Edit `src/data/conditions.ts`.
- **Confirm the current Michigan state registration fee** and add it to the
  FAQ + pricing-note + steps copy where it currently says "paid separately
  to the CRA / verify on Michigan.gov". Update `src/data/faq.ts`,
  `src/components/Pricing/Pricing.tsx`, and `src/data/steps.ts`.
- **Confirm reciprocity wording** in `src/data/faq.ts` (last entry under
  Legal & Use) reflects current CRA guidance.
- **Confirm card validity (2 years)** is still accurate.
- **Confirm caregiver eligibility rules** (the plan exists but the writer
  should validate features in `src/data/pricing.ts`).
- **Replace stat placeholders** in `src/data/stats.ts` if the Michigan
  business hasn't independently earned them.
- **Add real `og:image` and `twitter:image`** at
  `public/opengraph-image.png` and `public/twitter-image.png` (1200×630).
- **Wire footer links** to real Terms / Privacy / HIPAA pages in
  `src/components/Footer/Footer.tsx`.
- **Update `SITE.phone` and `SITE.email`** in `src/constants/site.ts`.

## SEO

- `metadataBase` set to the canonical Michigan domain.
- Single `<h1>` (hero), `<h2>` per section, `<h3>` per card.
- Every `<section>` carries `aria-labelledby`.
- `viewport` exports `themeColor`, `width`, `initialScale`.
- `data-scroll-behavior="smooth"` on `<html>` (Next 16 requirement).
- JSON-LD: `MedicalBusiness`, `LocalBusiness`, `WebSite`, `BreadcrumbList`,
  `MedicalProcedure` (offers from pricing), `FAQPage` (from FAQ data).
