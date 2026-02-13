# Y Opener Homepage

## Project Overview
Marketing homepage for Y Opener — an AI-focused venture studio. Built with Vite + React + TypeScript. No backend.

## Tech Stack
- **Framework:** React 19 + TypeScript
- **Build:** Vite 6
- **Styling:** Tailwind CSS (utility classes, no CSS modules)
- **Icons:** lucide-react
- **3D:** Three.js / OGL (background effects)
- **Hosting:** Vercel (auto-deploys from `main`)
- **Domain:** yopener.com (DNS on Namecheap)
- **Contact form:** FormSubmit (no backend needed)

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build

## Project Structure
```
App.tsx              — Root component, assembles all sections
components/
  Navbar.tsx         — Top navigation bar (primary nav)
  Hero.tsx           — Landing hero section
  About.tsx          — About section
  Services.tsx       — Service cards (ventures, accelerator, consulting)
  Work.tsx           — Detailed project showcases
  Team.tsx           — Team members
  Footer.tsx         — Footer with contact link
  ContactModal.tsx   — Modal form (triggered via CustomEvent 'open-contact-modal')
  ThreeBackground.tsx — 3D animated background
  FaultyTerminal.tsx — Terminal-style text effect
  GlowingText.tsx    — Text glow effect
  Logo.tsx           — SVG logo component
```

## Patterns & Conventions
- **Color palette:** Dark background (#0B0F0E), accent green (#7CFF98)
- **Glass panels:** Use `glass-panel` utility class for frosted-glass cards
- **Contact modal:** Opened via `window.dispatchEvent(new CustomEvent('open-contact-modal', { detail: { type } }))` where type is `'cohort'` | `'consultation'` | `'general'`
- **Navigation:** Single top navbar only (sidebar was removed — keep it that way)
- **Sections use** `px-6 sm:px-12 py-24` padding pattern with `max-w-[1400px] mx-auto` container

## Deployment
- Push to `main` → Vercel auto-deploys (~30s)
- See `DEPLOYMENT.md` for full DNS and infrastructure details

## Decisions
- Removed floating sidebar nav — navbar is sufficient, sidebar was overlapping content
- Contact form uses FormSubmit service (no API keys, no backend)
