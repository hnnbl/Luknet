# Codebase Structure

**Analysis Date:** 2026-03-14

## Directory Layout

```
Luknet-main/
├── src/                          # Application source code
│   ├── main.tsx                  # React entry point
│   ├── app/                      # Application root
│   │   ├── App.tsx              # Root component with section composition
│   │   └── components/           # React components
│   │       ├── Header.tsx        # Navigation header with mobile menu
│   │       ├── HeroSection.tsx   # Hero section with 3D visuals
│   │       ├── ServicesSection.tsx # Services grid (4 services)
│   │       ├── DifferentialsSection.tsx # Why choose us section
│   │       ├── NewsSection.tsx   # Blog/news articles grid
│   │       ├── ContactSection.tsx # Contact form + info
│   │       ├── Footer.tsx        # Footer with links and social
│   │       ├── figma/            # Figma-specific components
│   │       │   └── ImageWithFallback.tsx # Image loading wrapper
│   │       └── ui/               # Radix UI primitives (54 components)
│   │           ├── button.tsx
│   │           ├── card.tsx
│   │           ├── form.tsx
│   │           ├── input.tsx
│   │           ├── dialog.tsx
│   │           └── [... 48 more UI components]
│   ├── styles/                   # Global styling
│   │   ├── index.css            # Imports all stylesheets
│   │   ├── tailwind.css         # Tailwind directives
│   │   ├── theme.css            # Color variables and theme
│   │   └── fonts.css            # Font imports
│   └── imports/                  # Asset imports
│       └── pasted_text/          # Text content imports
├── index.html                    # HTML entry point
├── vite.config.ts               # Vite configuration
├── postcss.config.mjs           # PostCSS config (empty, delegated to Tailwind)
├── tailwind.config.*            # Tailwind CSS configuration
├── package.json                 # Dependencies and scripts
├── package-lock.json            # Locked dependency versions
├── .gitignore                   # Git ignore rules
└── .planning/                   # GSD planning directory
    └── codebase/                # Codebase documentation
```

## Directory Purposes

**src/**
- Purpose: All application code and assets
- Contains: Components, styles, entry point
- Key files: `main.tsx` (start here), `app/App.tsx` (component tree)

**src/app/**
- Purpose: Application container
- Contains: Root App component and all nested components
- Key files: `App.tsx` (imports and composes section components)

**src/app/components/**
- Purpose: React component implementations
- Contains: 7 section components + Header + Footer + UI library
- Key files: `Header.tsx` (navigation), each Section component

**src/app/components/ui/**
- Purpose: Reusable UI primitives
- Contains: 54 Radix UI-based components with Tailwind styling
- Key files: `button.tsx` (uses CVA variants), `utils.ts` (cn() utility function)
- Generated: Yes (from Figma/Make template)
- Committed: Yes (source of truth for UI kit)

**src/styles/**
- Purpose: Global CSS and theme configuration
- Contains: Tailwind directives, theme color variables, font definitions
- Key files: `index.css` (imports), `theme.css` (color palette)
- Committed: Yes, not generated

**src/imports/pasted_text/**
- Purpose: Placeholder for text content that can be imported
- Contains: Pasted text content files
- Generated: No
- Committed: Yes

## Key File Locations

**Entry Points:**
- `index.html`: HTML document root, mounts React to #root div, loads `/src/main.tsx`
- `src/main.tsx`: React entry, renders App into root, imports styles
- `src/app/App.tsx`: Root component, renders Header + main with 5 sections + Footer

**Configuration:**
- `vite.config.ts`: Build configuration with React and Tailwind plugins, path alias @ → src/
- `postcss.config.mjs`: PostCSS config (minimal, Tailwind handles plugins)
- `tailwind.config.*`: Tailwind configuration (if present, else uses defaults)
- `tsconfig.json`: TypeScript configuration (if present)

**Core Logic:**
- `src/app/components/Header.tsx`: Scroll listener, navigation handler, mobile menu toggle
- `src/app/components/ContactSection.tsx`: Form state management, form submission handler
- Section components: Each renders background effects and content

**Testing:**
- No test files present in codebase
- Location would be: `src/**/*.test.tsx` or `src/**/*.spec.tsx`
- Framework: Not configured (use Jest or Vitest if adding tests)

**Styling:**
- Global styles: `src/styles/index.css`
- Theme colors: `src/styles/theme.css` (CSS variables)
- Component styles: Tailwind className attributes in .tsx files

## Naming Conventions

**Files:**
- Components: PascalCase, .tsx extension (e.g., `Header.tsx`, `HeroSection.tsx`)
- Utilities: camelCase, .ts extension (e.g., `utils.ts`)
- Styles: lowercase, .css extension (e.g., `index.css`, `theme.css`)
- Directories: lowercase, no underscores (e.g., `components/`, `ui/`, `styles/`)

**Directories:**
- Feature folders: lowercase plural (e.g., `components/`, `styles/`)
- UI folder: lowercase (e.g., `ui/`)
- Section folders: singular feature name in parent (e.g., `figma/`)

**Exports:**
- Components: Named export with function name matching filename (e.g., `export function Header() { ... }`)
- UI components: Named export of component + variants (e.g., `export { Button, buttonVariants }`)
- Utilities: Named export of functions (e.g., `export function cn() { ... }`)

**Variables:**
- React state: camelCase (e.g., `isScrolled`, `isMobileMenuOpen`, `formData`)
- Props: camelCase object keys (e.g., `{ icon, title, description, color }`)
- Constants: CONSTANT_CASE for module-level (e.g., `const services = [...]`)
- CSS classes: Tailwind utility names or kebab-case custom (e.g., `from-blue-500`)

**Functions:**
- Event handlers: camelCase with "handle" or "scroll" prefix (e.g., `handleScroll`, `scrollToSection`, `handleChange`)
- Component functions: PascalCase matching filename (e.g., `function HeroSection() { ... }`)
- Utility functions: camelCase (e.g., `cn()`)

**Types:**
- React component types: React.ComponentProps<"button">, React.ChangeEvent<HTMLInputElement>
- No explicit TypeScript interfaces for props (inline in function signature)

## Where to Add New Code

**New Section (Feature):**
- Primary code: Create `src/app/components/NewSection.tsx` as function component
- Structure: Follow pattern from existing sections (HeroSection, ServicesSection)
- Pattern: export function NewSection() { return (<section id="anchor">...</section>) }
- Import: Add import and component to `src/app/App.tsx`

**New UI Component:**
- Implementation: `src/app/components/ui/componentname.tsx`
- Base on: Existing Radix UI component (e.g., dialog.tsx, form.tsx)
- Export: Include both component and variants if using CVA
- Utilities: Use `cn()` utility from `src/app/components/ui/utils.ts` for class merging

**New Utility Function:**
- Shared helpers: `src/app/components/ui/utils.ts` (for UI-related)
- Alternative: Create new file alongside usage (e.g., `src/app/helpers/` if non-UI)
- Pattern: Export named function, import where needed

**New Styling:**
- Global variables: Add to `src/styles/theme.css` (CSS custom properties)
- Component styles: Add Tailwind classes directly in JSX className
- Never create .css files per component (use Tailwind utilities)

**Imports Organization:**
- Order: React imports → Third-party imports → Local imports
- Example from HeaderSection.tsx: `import { useState, useEffect }` → `import { Menu, X }` → component doesn't use local imports
- Path aliases: Use `@/` for src-relative imports (configured in vite.config.ts)

## Special Directories

**src/app/components/figma/**
- Purpose: Figma-specific component adaptations
- Generated: Yes (from Figma export)
- Committed: Yes
- Content: ImageWithFallback.tsx for handling Figma image imports
- Note: Part of Figma → Make template workflow

**src/app/components/ui/**
- Purpose: UI kit components (Radix UI wrappers)
- Generated: Partially (Radix primitives wrapped with Tailwind)
- Committed: Yes
- Content: 54 ready-to-use UI components
- Update: Manual additions follow Radix pattern with CVA variants

**dist/**
- Purpose: Built output directory
- Generated: Yes (by Vite during build)
- Committed: No (in .gitignore)
- Location: `/dist` at root, created by `npm run build`

**.planning/codebase/**
- Purpose: GSD planning and analysis documentation
- Generated: Yes (by GSD tools)
- Committed: Yes (reference documentation)
- Files: ARCHITECTURE.md, STRUCTURE.md, STACK.md, etc.

**node_modules/**
- Purpose: Installed dependencies
- Generated: Yes (by npm/pnpm)
- Committed: No (in .gitignore)
- Update: `npm install` or `npm ci` to synchronize with package-lock.json
