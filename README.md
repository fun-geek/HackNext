# HackNext — Official Hackathon Website

HackNext is a modern, responsive, and accessible hackathon landing site built with Next.js and Tailwind CSS. It showcases event information, schedule, prizes, sponsors, registration, and more — with interactive UI elements and small animations to make the experience engaging for participants and sponsors.

This repository contains the source code for the official HackNext website and the UI improvements made on the `master` branch.

## Key Features

- Responsive, mobile-first design using Tailwind CSS.
- Animated hero with a theme-tuned purple gradient.
- Fancy padded cards with subtle glassy background and hover lift for About, Prizes, FAQ, and Registration sections.
- Interactive schedule component (client-side tabs for day-wise events).
- Award categories with icons and prize badges (realistic prize divisions).
- Live coding animation panel (CSS-only typing effect) to highlight live sessions.
- Accessibility improvements: semantic markup, improved contrast, and responsive typography.

## Local Development

Prerequisites:

- Node.js v18+ (LTS is recommended)
- npm or pnpm or yarn

Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser. The app uses Next.js App Router — editing files in `src/app` will hot-reload the page.

## Scripts

- `npm run dev` — start the dev server (uses Turbopack when available)
- `npm run build` — build the production app
- `npm run start` — start the production server after build
- `npm run lint` — run ESLint (note: there may be warnings suggesting using Next.js `<Image />` for optimization)

## Important Files

- `src/app/page.tsx` — main landing page and primary sections (hero, about, schedule, prizes, sponsors, register, FAQ, contact)
- `src/app/globals.css` — global CSS and custom keyframes (includes hero gradient, fancy cards, and live-code panel styles)
- `src/components/ScheduleTabs.tsx` — interactive schedule component (client-side)
- `src/components/CountdownTimer.tsx` — countdown timer component for the hero
- `src/components/ParticlesBackground.tsx` — decorative particle overlay (if used)
- `src/components/Footer.tsx` — footer (now shows textual site name)

## Design Decisions & Notes

- Images: Some sponsor logos and images are raw `<img>` elements and produce ESLint warnings recommending `next/image` for optimization. Converting them to `<Image />` is straightforward but requires setting sizes or using `fill` and testing layout.
- Client vs Server components: Interactive components (like `ScheduleTabs`) are implemented as client components and imported directly into server components to avoid SSR issues.
- Animations: Small CSS keyframes are used for float/pop/pulse effects. The live code panel uses pure CSS typing animation to avoid runtime JS complexity.

## Contributing

If you want to contribute improvements, please:

1. Fork the repository.
2. Create a new branch with a descriptive name (e.g., `feature/sponsor-images`, `fix/responsive-cards`).
3. Make your changes, run lint and test locally.
4. Open a pull request against `main` or the primary branch and describe your changes.

If you want me to handle specific tasks (convert images to `<Image />`, create PRs, or open issue templates), tell me and I can make those edits and push them to the branch.

## Deployment

This project is ready to deploy on Vercel (recommended) or any platform that supports Next.js. The standard Vercel workflow will detect the Next.js app and run the build automatically.

## License & Credits

This project contains assets (sponsor logos, icons) that may belong to third parties — ensure you have permission to use them. Include a license file in the repo if you plan to open-source the project (e.g., MIT).

---

If you'd like, I can open a PR from `responsive-fixes` to `main`, add a CONTRIBUTING.md, or create a short deploy guide with environment variables and recommended Vercel settings.
