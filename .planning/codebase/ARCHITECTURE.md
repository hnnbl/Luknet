# Architecture

**Analysis Date:** 2026-03-14

## Pattern Overview

**Overall:** Single Page Application (SPA) with Section-Based Component Architecture

**Key Characteristics:**
- React functional components with hooks for state management
- Vite as build tool and development server
- Tailwind CSS v4 for styling with @tailwindcss/vite plugin
- Component-driven UI built with Radix UI primitives
- Landing page organized into scrollable sections with anchor navigation
- Responsive design with mobile-first approach

## Layers

**Presentation Layer:**
- Purpose: Render UI and handle user interactions
- Location: `src/app/components/`
- Contains: Section components (Header, HeroSection, ServicesSection, etc.), UI primitives, and page layout
- Depends on: React, lucide-react icons, Tailwind CSS utilities
- Used by: Entry point (App.tsx)

**UI Component Library:**
- Purpose: Reusable UI primitives built on Radix UI foundation
- Location: `src/app/components/ui/`
- Contains: 54 component files including Button, Dialog, Card, Input, Select, etc.
- Depends on: Radix UI components, class-variance-authority, Tailwind CSS
- Used by: Presentation layer components

**Styling System:**
- Purpose: Centralized theme, fonts, and Tailwind configuration
- Location: `src/styles/`
- Contains: `index.css` (imports), `tailwind.css` (directives), `theme.css` (color variables), `fonts.css` (font definitions)
- Depends on: PostCSS, Tailwind CSS
- Used by: All components via className utilities

**Static Assets:**
- Purpose: SVG, CSV, and image resources
- Location: Asset files in project root or inline via Unsplash URLs
- Contains: Configuration-included asset types for raw import support
- Depends on: Vite assetsInclude configuration
- Used by: Image components (e.g., HeroSection.tsx uses background images)

## Data Flow

**Page Load Flow:**

1. `index.html` → Root div (#root)
2. `src/main.tsx` → Renders App component into root
3. `src/app/App.tsx` → Renders layout with section components
4. Section components render sequential DOM elements with id anchors for navigation
5. Tailwind CSS applies styling via className attributes
6. Event handlers (onClick) trigger smooth scroll navigation

**User Interaction Flow:**

1. User clicks navigation link (Header, Footer, or CTA button)
2. `scrollToSection(id)` function executes
3. `document.getElementById(id)` locates target section by id attribute
4. `element.scrollIntoView({ behavior: 'smooth' })` scrolls to section
5. Mobile menu closes if open

**Component Composition Pattern:**

Each section follows a consistent structure:
- Container div with id for navigation anchor
- Absolute positioned background effects (gradients, grids, animated elements)
- Relative positioned content wrapper (max-w-7xl, px-6 padding)
- Section-specific content (headings, cards, forms)

Example from `HeroSection.tsx`:
- Section header with tech badge and title
- Left content area with heading, description, CTA buttons
- Right content area with 3D visual (rotating rings, animated particles)
- Overlaid background effects (gradient orbs, grid lines)

**State Management:**

Component-level state only via React hooks:
- `Header.tsx`: `useState` for scroll position and mobile menu state
- `ContactSection.tsx`: `useState` for form data (name, email, subject, message)
- No global state management (Redux, Zustand, etc.)
- State updates trigger re-renders immediately

## Key Abstractions

**Section Component Pattern:**

- Purpose: Consistent structure for landing page sections
- Examples: `HeroSection.tsx`, `ServicesSection.tsx`, `ContactSection.tsx`, `NewsSection.tsx`, `DifferentialsSection.tsx`
- Pattern: Each exports a function component with id anchor, background effects, content grid/list, and interactive elements
- Benefits: Maintainable, consistent, easy to add new sections

**Card/Box Pattern:**

- Purpose: Reusable container for content with hover effects and glass-morphism styling
- Examples: Service cards in ServicesSection, news articles in NewsSection, contact info in ContactSection
- Pattern: `bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:*`
- Used across components for visual consistency

**Icon + Text Combination:**

- Purpose: Feature highlights and list items
- Pattern: Icon within colored rounded container next to heading and description
- Examples: Feature chips in HeroSection (Zap, TrendingUp, Shield icons), differential items
- Implements: Lucide React icons + gradient backgrounds

**Utility Function - cn():**

- Purpose: Merge class names safely for Tailwind CSS
- Location: `src/app/components/ui/utils.ts`
- Implementation: `clsx()` for conditional classes + `twMerge()` for Tailwind conflict resolution
- Used by: `button.tsx` and other UI primitives

**Class Variance Authority Pattern:**

- Purpose: Type-safe component variants (Button sizes, variants)
- Location: Defined in UI component files (e.g., button.tsx buttonVariants)
- Pattern: `cva()` defines variant combinations (e.g., size: default, sm, lg, icon)
- Benefits: Type-safe, composable, no duplicate CSS

## Entry Points

**Application Entry:**
- Location: `index.html`
- Triggers: Browser loads HTML file
- Responsibilities: Mount point for React application, script loader

**React Root:**
- Location: `src/main.tsx`
- Triggers: HTML script tag executes module
- Responsibilities: Create React root on #root element, render App component, load global styles

**App Component:**
- Location: `src/app/App.tsx`
- Triggers: React root render
- Responsibilities: Render root layout (min-h-screen div with gradient bg), compose all section components in order

**Development Server:**
- Location: Vite dev server configured in `vite.config.ts`
- Triggers: `npm run dev` command
- Responsibilities: Hot Module Replacement (HMR), asset serving, React Fast Refresh

## Error Handling

**Strategy:** Minimal explicit error handling; browser defaults for missing content

**Patterns:**

- Form validation: HTML5 required attributes on ContactSection inputs
- Mock form submission: Alert on submit, field reset (no actual backend)
- Scroll errors: Safe guard in scrollToSection - checks element existence before calling scrollIntoView
- Image loading: Inline Unsplash URL with fallback to gradient background
- No try-catch blocks, no error boundaries, no API error handling (no API calls)

## Cross-Cutting Concerns

**Logging:** Console not used; browser DevTools required for debugging

**Validation:** HTML5 native validation (required, type="email" on contact form inputs)

**Authentication:** Not applicable; public landing page with no auth

**Navigation:** DOM-based scroll navigation with smooth scrolling behavior

**Responsive Design:** Tailwind responsive prefixes (md:, lg:) for breakpoint-specific styling

**Animations:** Tailwind CSS animation utilities (animate-pulse, animate-spin) and inline style animation delays

**Styling Consistency:** Gradient patterns repeated (from-blue-400 to-purple-500), color palettes by section (blues/purples for general, orange/pink for CTAs)
