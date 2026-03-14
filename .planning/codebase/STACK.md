# Technology Stack

**Analysis Date:** 2026-03-14

## Languages

**Primary:**
- TypeScript - Frontend application, all `.tsx` and `.ts` files throughout project
- JSX/TSX - React component syntax used in `src/app/components/`

**Secondary:**
- CSS - Styling in `src/styles/` with Tailwind integration
- HTML - Entry point at `index.html`

## Runtime

**Environment:**
- Node.js (version not explicitly specified in package.json)

**Package Manager:**
- npm - Primary package manager
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- React 18.3.1 - UI library (peer dependency in `package.json`)
- React DOM 18.3.1 - DOM rendering (peer dependency)

**Build/Dev:**
- Vite 6.3.5 - Module bundler and dev server (`vite.config.ts`)
- @vitejs/plugin-react 4.7.0 - React support for Vite

**Styling:**
- Tailwind CSS 4.1.12 - Utility-first CSS framework (`src/styles/tailwind.css`)
- @tailwindcss/vite 4.1.12 - Vite integration for Tailwind

**Component Library:**
- Radix UI (multiple packages) - Unstyled, accessible component primitives:
  - @radix-ui/react-accordion 1.2.3
  - @radix-ui/react-alert-dialog 1.1.6
  - @radix-ui/react-avatar 1.1.3
  - @radix-ui/react-checkbox 1.1.4
  - @radix-ui/react-dialog 1.1.6
  - @radix-ui/react-dropdown-menu 2.1.6
  - @radix-ui/react-select 2.1.6
  - And 14+ additional Radix UI components in `package.json`

- Material-UI - Components and icons:
  - @mui/material 7.3.5
  - @mui/icons-material 7.3.5

**UI/UX Utilities:**
- Lucide React 0.487.0 - Icon library used extensively in components
- Canvas Confetti 1.9.4 - Particle effects (`src/app/components/`)
- Sonner 2.0.3 - Toast notifications

**Theming:**
- next-themes 0.4.6 - Theme management (dark/light mode support)
- Emotion (@emotion/react 11.14.0, @emotion/styled 11.14.1) - CSS-in-JS solutions
- Class Variance Authority 0.7.1 - Variant management for components
- clsx 2.1.1 - Conditional classname utility

**Form & Input:**
- react-hook-form 7.55.0 - Form state management (`src/app/components/ContactSection.tsx`)
- input-otp 1.4.2 - One-time password input component
- react-dnd 16.0.1 - Drag and drop functionality
- react-dnd-html5-backend 16.0.1 - Drag and drop backend

**Data & Visualization:**
- Recharts 2.15.2 - Charts and graphs library
- date-fns 3.6.0 - Date manipulation utility
- react-day-picker 8.10.1 - Calendar component

**Layout & Animation:**
- motion 12.23.24 - Motion/animation library (Framer Motion alternative)
- react-resizable-panels 2.1.7 - Resizable panel layouts
- react-slick 0.31.0 - Carousel/slider component
- embla-carousel-react 8.6.0 - Carousel functionality
- react-responsive-masonry 2.7.1 - Masonry grid layouts

**Router:**
- react-router 7.13.0 - Client-side routing (not actively configured in main App)

**Other:**
- vaul 1.1.2 - Drawer component
- react-popper 2.3.0 - Tooltip/popper positioning
- @popperjs/core 2.11.8 - Popper positioning engine
- tailwind-merge 3.2.0 - Tailwind class merging utility
- tw-animate-css 1.3.8 - Animation utilities

## Configuration

**Build Configuration:**
- `vite.config.ts` - Vite configuration with React and Tailwind plugins enabled
- `postcss.config.mjs` - PostCSS configuration (empty, Tailwind v4 handles via Vite plugin)

**Path Aliases:**
- `@` → `./src` (configured in `vite.config.ts`)

**Asset Support:**
- SVG files supported as raw imports (`vite.config.ts`: `assetsInclude: ['**/*.svg', '**/*.csv']`)
- Images loaded from Unsplash CDN (see `src/app/components/HeroSection.tsx`)

## Module System

**Type:** ES Modules (ESM)
- `package.json` specifies `"type": "module"`
- All imports use `import` syntax

## Platform Requirements

**Development:**
- Node.js runtime
- npm for dependency management
- Modern browser for development (supports ES2020+ syntax)

**Production:**
- Static HTML/JS/CSS deployment
- CDN support for Unsplash images
- No server-side runtime required (client-side React SPA)

**Browser Support:**
- Modern browsers only (Chrome, Firefox, Safari, Edge)
- ES2020+ JavaScript support required

---

*Stack analysis: 2026-03-14*
