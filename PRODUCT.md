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
2. Contact buttons open the LinkedIn profile. No phone number or email address is published. There is no form and
   no backend.
3. Front-end and server errors go to Sentry (errors only, request data, user, breadcrumbs, extra context and stack
   frame variables stripped) when `NEXT_PUBLIC_SENTRY_DSN` is set.

## What does not work (and must not be claimed)

- No CMS, admin, contact form, analytics or API. Nothing is stored.
- No measured SEO or performance work beyond the page metadata in `src/app/layout.tsx`.

## Personal data (owner decision 2026-10-23: strip, then deploy)

The page still names one third party and shows their photo, work history, education and LinkedIn profile. Their
phone number and email addresses were removed from the page and `README.md` on 2026-10-23 (contact now goes through
LinkedIn); `tests/no-contact-details.test.ts` fails if a phone number or email address comes back in any shipped
file. Older git commits still contain them: history was not rewritten (owner decision). A messaging-app handle is
still shown on the page; it is neither a phone number nor an email and was outside this change.

## Live URL and deploy state

- Vercel project `benz-portfolio` (domain https://benz-portfolio.bookchaowalit.com, HTTP 200 on 2026-10-23).
- Last production deployment: 2025-08-30, source `import`, commit e3c9c8b. Its Git link names the old repository
  `bookchaowalit/hr-portfolio`, so a push to `main` does not deploy. The live site still runs that 2025 build (older
  Next.js, no Sentry, and still showing the phone number and email addresses). The owner decided to strip the contact
  details and then deploy; the coordinator deploys the green `main` under D9a when the Vercel deployment quota resets.
- `NEXT_PUBLIC_SENTRY_DSN` is set on the Vercel project (Sentry project `portfolio-hr-web`, org `personal-yu0`).

## Boundaries

- Static, browser-only page. No server routes.
- Next.js stays on the patched 15.5.28 line (no major jump); `postcss` is overridden to ^8.5.31 because Next 15.5.28
  pins a vulnerable 8.4.31.

## Checks

`npm run lint && npm run typecheck && npm test && npm run build`. Tests: `tests/utils.test.ts` (class merging),
`tests/ui.test.tsx` (UI primitives with fixtures), `tests/home.test.tsx` (page structure smoke), `tests/no-contact-details.test.ts` (no phone or email in shipped files),
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
