# hr-portfolio — Product truth

> Inferred from the code (no user interview). This repository has no row in the portfolio card claims review
> (`portfolio-site-web/docs/audits/CARD-CLAIMS-REVIEW-2026-10.md`), checked 2026-10-23.

## What it is

A single static Next.js 15 page: a professional profile for one named third party (hero with photo, contact
details, work experience, education, skills and a contact call to action). All copy is hard-coded in
`src/app/page.tsx`.

## Who it is for

Visitors who want that person's professional background and contact details.

## What works today

1. One prerendered page (`/`) built from shadcn/ui primitives (Avatar, Badge, Button, Card, Separator).
2. Contact buttons open `mailto:`, `tel:` and external profile links. There is no form and no backend.
3. Front-end and server errors go to Sentry (errors only, request data, user, breadcrumbs, extra context and stack
   frame variables stripped) when `NEXT_PUBLIC_SENTRY_DSN` is set.

## What does not work (and must not be claimed)

- No CMS, admin, contact form, analytics or API. Nothing is stored.
- No measured SEO or performance work beyond the page metadata in `src/app/layout.tsx`.

## Personal data (open P0 owner item)

The page, `README.md`, `public/profile.webp` and the excerpt at the end of this file hold a third party's personal
data. Whether it stays published is the owner's decision. Until then the code changes in this repository leave that
data exactly as it was, and the tests use only their own fixtures (they assert page structure, never its content).

## Live URL and deploy state

- Vercel project `benz-portfolio` (domain https://benz-portfolio.bookchaowalit.com, HTTP 200 on 2026-10-23).
- Last production deployment: 2025-08-30, source `import`, commit e3c9c8b. Its Git link names the old repository
  `bookchaowalit/hr-portfolio`, so a push to `main` does not deploy. The live site still runs that 2025 build (older
  Next.js, no Sentry). It was deliberately not patch-deployed, because a deploy re-publishes the personal data:
  deploying or reconnecting Vercel Git is an owner decision (D9 + P0).
- `NEXT_PUBLIC_SENTRY_DSN` is set on the Vercel project (Sentry project `portfolio-hr-web`, org `personal-yu0`).

## Boundaries

- Static, browser-only page. No server routes.
- Next.js stays on the patched 15.5.28 line (no major jump); `postcss` is overridden to ^8.5.31 because Next 15.5.28
  pins a vulnerable 8.4.31.

## Checks

`npm run lint && npm run typecheck && npm test && npm run build`. Tests: `tests/utils.test.ts` (class merging),
`tests/ui.test.tsx` (UI primitives with fixtures), `tests/home.test.tsx` (page structure smoke),
`tests/sentry.test.ts` (Sentry scrubbing).

## Earlier brief (kept unchanged pending the P0 decision)

## Source README excerpt

```
# Nattayaporn Morprakop - Professional Portfolio

A modern, responsive portfolio website for Nattayaporn Morprakop, IT Recruitment Consultant at GetLinks.

## Features

- ✨ Modern design with shadcn/ui components
- 📱 Fully responsive design
- 🎨 Professional color scheme with gradients
- 🔍 SEO optimized with proper metadata
- ⚡ Built with Next.js 15 and TypeScript
- 🎯 Tailwind CSS for styling
- 📧 Contact information prominently displayed
- 💼 Complete professional experience showcase
- 🎓 Education and skills sections
- 📱 Recent professional activity highlights

## Tech Stack

- **Framework:** Ne
```
