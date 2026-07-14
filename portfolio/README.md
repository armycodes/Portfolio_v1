# Siri Mahalaxmi Vemula — Personal Portfolio

An editorial-style personal portfolio: React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite`, no separate config file needed — tokens live in `src/index.css`)
- Framer Motion for scroll reveals and page transitions
- React Router for the project case-study pages and 404

## Run it locally

**Requirements:** Node.js 20+ and npm.

```bash
# 1. Unzip / clone the project, then move into it
cd siri-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

Other scripts:

```bash
npm run build     # type-check + production build into dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── components/
│   ├── layout/        Navigation, Footer
│   ├── ui/             Button, Card, Tag, Badge, Quote, SectionTitle, SectionContainer, icons
│   ├── hero/            Hero section
│   ├── about/           About section
│   ├── experience/      Experience + Timeline
│   ├── projects/        Projects grid, ProjectCard, ProjectCaseStudy
│   ├── engineering/      Engineering Mindset section + WorkflowDiagram (signature element)
│   ├── writing/          Writing section
│   ├── techstack/        Tech Stack section
│   ├── resume/           Resume section
│   └── contact/          Contact section
├── pages/               Home, ProjectDetail, NotFound
├── hooks/                useScrollSpy, useLockBodyScroll
├── data/                 experience.ts, projects.ts, techstack.ts, writing.ts, engineering.ts
├── constants/            nav.ts (nav items + social links)
├── types/                shared TypeScript interfaces
└── index.css             design tokens (color, type, layout) + global styles
```

## Content you'll want to personalize

- `src/data/experience.ts` — Pipebit and VGE experience details
- `src/data/projects.ts` — Echoa, DataPulse, Justice Genie, Writer Workspace case studies
- `src/data/writing.ts` — article placeholders (titles/excerpts, no blog backend)
- `src/constants/nav.ts` — GitHub/LinkedIn/email/Instagram links (currently placeholders)
- `public/resume.pdf` — add your actual resume PDF here; the Hero and Resume section both link to `/resume.pdf`
- Hero portrait — the brief calls for an editorial black-and-white portrait; no photo was provided, so the hero is currently typography-only. Drop an image into `public/` and reference it in `src/components/hero/Hero.tsx` if you'd like to add one.

## Notes

- No backend yet by design — the Contact form is a client-side stub (`src/components/contact/Contact.tsx`) that shows a success state on submit. Wire it to an email service (e.g. Formspree, Resend) or a future API when ready.
- Architecture leaves room for the planned Spring Boot + PostgreSQL backend mentioned in the brief — nothing here assumes a backend exists.
- Respects `prefers-reduced-motion`, uses semantic HTML, and keeps visible focus states throughout.
