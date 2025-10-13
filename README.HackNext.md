# HackNext

HackNext is a modern, responsive hackathon website built with Next.js and Tailwind CSS. The site showcases event details (date, schedule, prizes, sponsors, registration), a hero section with animated typing and a countdown timer, and decorative particle backgrounds.

This repository is configured for local development and optimized for responsiveness. Recent responsive improvements include preventing horizontal overflow, making countdown tiles wrap on small screens, and hiding oversized decorative elements on very small viewports.

## Features

- Hero section with animated typing and a live countdown timer.
- Responsive grid-based sections: About, Schedule, Prizes, Sponsors, Registration, FAQ, Contact.
- Particles background implemented on a canvas (optimized for devicePixelRatio and sized via CSS to avoid layout overflow).
- Accessible components and responsive utilities using Tailwind CSS.

## Getting started

Requirements:
- Node.js (recommended: 18+)
- npm (or yarn)

Install dependencies:

```powershell
npm install
```

Run the development server:

```powershell
npm run dev
```

Open http://localhost:3000 in your browser.

## Notes on responsiveness fixes applied

I made the following changes to improve layout on small screens:

- Added `overflow-x-hidden` to the root `body` (in `src/app/layout.tsx`) to prevent horizontal scroll and clipped boxes.
- Updated `src/components/CountdownTimer.tsx` to use `flex-wrap` and responsive font sizes so countdown boxes stack/resize on narrow screens.
- Modified `src/components/ParticlesBackground.tsx` so the canvas uses CSS `width`/`height` (and devicePixelRatio) rather than changing layout dimensions directly.
- Hid large decorative background blobs on very small viewports in `src/app/page.tsx` to prevent them from overflowing the viewport.
- Added a small responsive helper set in `src/app/globals.css` for tighter container padding and smaller headings at very small widths.

If you still see clipped content in specific places, please open devtools, simulate the device size and tell me which section is affected; I can apply more targeted breakpoints.

## Linting and checks

The project includes ESLint and TypeScript. Run lint:

```powershell
npm run lint
```

Run a production build:

```powershell
npm run build
npm run start
```

## Where to look

- `src/app/page.tsx` — main page layout and sections
- `src/app/layout.tsx` — root layout (global classes, navbar/footer)
- `src/app/globals.css` — global and small responsive helpers
- `src/components` — UI components (Navbar, Footer, CountdownTimer, ParticlesBackground, TypingAnimation, etc.)

## Next improvements (suggested)

- Tighten mobile typography and spacing in the hero to reduce vertical overflow.
- Add explicit responsive grid utilities for cards (e.g., force 1 column on <640px).
- Add screenshots and a style guide for consistent spacing.
- Add tests for components (Jest/React Testing Library) if desired.

If you want, I can continue and apply more mobile-first tweaks automatically — tell me which sections still look off on your device and I'll iterate further.
