# Coding Conventions

**Analysis Date:** 2026-03-14

## Naming Patterns

**Files:**
- PascalCase for React components: `Header.tsx`, `HeroSection.tsx`, `ContactSection.tsx`
- kebab-case for UI primitives and reusable components: `card.tsx`, `button.tsx`, `alert-dialog.tsx`
- camelCase for utility and helper files: `utils.ts`
- Lowercase directories for organizing related files: `components/ui/`, `components/figma/`

**Functions:**
- PascalCase for React functional components: `function Header()`, `export function HeroSection()`
- camelCase for utility functions: `handleSubmit()`, `handleChange()`, `scrollToSection()`, `cn()`
- Descriptive, verb-based names for event handlers: `handleScroll`, `handleError`, `handleSubmit`

**Variables:**
- camelCase for all variable declarations: `formData`, `isScrolled`, `isMobileMenuOpen`, `didError`
- Prefix boolean variables with `is`, `has`, `should`, or `did`: `isScrolled`, `isMobileMenuOpen`, `didError`
- Uppercase CONSTANT names for constants: `ERROR_IMG_SRC` (embedded assets)

**Types:**
- PascalCase for TypeScript types and interfaces (implicit - not found in codebase)
- Use `React.ComponentProps<"element">` for component prop typing
- Use `React.FormEvent` and `React.ChangeEvent` for event types

## Code Style

**Formatting:**
- 2-space indentation (observed in vite.config.ts, component structure)
- Single quotes for strings in JSX attributes and regular code
- Double quotes for JSDoc/comments (not extensively used)
- Tailwind CSS for all styling - no separate CSS files in components
- Template literals with backticks for complex strings

**Linting:**
- No ESLint or Prettier configuration detected
- No TypeScript strict mode configuration file visible
- Code follows modern React conventions without explicit linter enforcement

**Line Length:**
- Long lines are acceptable when necessary (e.g., className attributes with Tailwind can exceed 80 chars)
- Multi-line expressions are formatted for readability

## Import Organization

**Order:**
1. React core imports: `import { useState, useEffect } from 'react'`
2. Icon/UI library imports: `import { Menu, X } from 'lucide-react'`
3. Relative component imports: `import { Button } from "@radix-ui/react-..."`
4. Utility imports: `import { cn } from "./utils"`
5. Type imports (when used): `import { type VariantProps } from "class-variance-authority"`

**Path Aliases:**
- `@` alias maps to `./src` directory (configured in `vite.config.ts`)
- Use `@` prefix for absolute imports from components: `import { cn } from "@/app/components/ui/utils"`
- Relative imports prefer simple `./` for sibling files in same directory

**Example Import Blocks:**
```typescript
// Header.tsx
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

// NewsSection.tsx
import { ArrowRight, Calendar } from 'lucide-react';
```

## Error Handling

**Patterns:**
- Try-catch blocks not observed in frontend components (minimal error handling needed for UI)
- Conditional rendering for error states: `if (didError) { return <FallbackUI /> }`
- Error callbacks on event handlers: `const handleError = () => { setDidError(true) }`
- Form submission validation through HTML attributes: `required`, `type="email"`
- Alert dialogs for user feedback: `alert('Mensagem enviada com sucesso!')`

**Example Pattern from ImageWithFallback.tsx:**
```typescript
const [didError, setDidError] = useState(false)
const handleError = () => {
  setDidError(true)
}
// Conditional rendering based on error state
return didError ? <FallbackUI /> : <img ... onError={handleError} />
```

## Logging

**Framework:** `console` (implicit - no logger library imported)

**Patterns:**
- No explicit logging statements observed in codebase
- Debug approach: inline state inspection via React DevTools
- No structured logging or analytics integration

## Comments

**When to Comment:**
- Inline comments are minimal and used for clarification
- Comments above sections to denote major UI regions: `{/* Logo */}`, `{/* Desktop Navigation */}`, `{/* Mobile Menu Button */}`
- JSDoc comments not extensively used (modern TypeScript with inline types preferred)

**JSDoc/TSDoc:**
- Not actively used in this codebase
- React component props are typed through `React.ComponentProps<"element">` with inline intersection types

**Example Comment Style:**
```typescript
// From Header.tsx
{/* Logo */}
{/* Desktop Navigation */}
{/* Mobile Navigation */}

// From HeroSection.tsx
{/* Animated Grid Background */}
{/* Tech grid background */}
{/* Gradient orbs */}
```

## Function Design

**Size:**
- Functions kept relatively compact (50-100 lines for complex components)
- Longer components (HeroSection ~160 lines, ContactSection ~186 lines) split into logical JSX sections with comments

**Parameters:**
- Destructure props in function signatures: `{ className, variant, size, asChild = false, ...props }`
- Spread rest props for HTML element forwarding: `{...props}` passed to DOM elements
- Default parameters used: `asChild = false`
- Props merged with React element props: `React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>`

**Return Values:**
- Always return JSX elements wrapped in a single root element (fragment `<>` or div)
- Early returns for error states or fallbacks
- No void-returning functions except event handlers with side effects

**Example from Button.tsx:**
```typescript
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```

## Module Design

**Exports:**
- Use named exports for components: `export function Header()`, `export { Button, buttonVariants }`
- Page/entry component uses default export: `export default function App()`
- Export multiple related functions from utility files: `export { Card, CardHeader, CardFooter, ... }`
- UI primitive exports include both component and variants object: `export { Button, buttonVariants };`

**Barrel Files:**
- Not observed in this codebase
- Each UI component file exports its own component(s)
- No index.ts files for re-exporting groups

**Component Composition:**
- Radix UI primitives composed with custom styling: combine `@radix-ui` components with Tailwind classes
- CVA (class-variance-authority) for component variant management: `buttonVariants = cva(...)`
- Props forwarding with `cn()` utility to merge Tailwind classes: `className={cn(buttonVariants({ variant, size, className }))}`

**Example Module Structure:**
```typescript
// UI component with variants (button.tsx)
const buttonVariants = cva("...", { variants: {...}, defaultVariants: {...} })
function Button({...}) { return ... }
export { Button, buttonVariants };

// Section component (HeroSection.tsx)
export function HeroSection() { return ... }

// Utility module (utils.ts)
export function cn(...inputs: ClassValue[]) { return ... }
```

## React Patterns

**Functional Components:**
- All components are functional, using hooks for state and effects
- useState for local state: `const [isScrolled, setIsScrolled] = useState(false)`
- useEffect for side effects: event listeners, DOM interactions

**Event Handlers:**
- Arrow functions defined inside components: `const handleSubmit = (e) => { ... }`
- Inline onClick handlers for simple actions: `onClick={() => scrollToSection('home')}`
- Event parameter typing: `React.FormEvent`, `React.ChangeEvent<HTMLInputElement>`

**Props Spreading:**
- Destructure commonly used props, spread rest: `const { src, alt, ...rest } = props`
- Forward props to DOM elements: `<Comp ... {...props} />`

## Styling Patterns

**Tailwind CSS:**
- Use only Tailwind classes for styling
- Long class strings are acceptable: kept on single line or broken into logical segments
- Gradient classes applied directly: `from-blue-400 to-purple-500`
- Responsive modifiers: `md:`, `lg:` for breakpoints
- State variants: `hover:`, `focus-visible:`, `aria-invalid:`, `dark:`
- Group selectors for nested interactions: `group`, `group-hover:`, `group/btn`
- Custom animations via style props when needed: `style={{ animationDelay: '1s' }}`

**cn() Utility:**
- Merge Tailwind classes with conditional or overriding classes
- Used extensively in UI primitives: `className={cn("base-classes", className)}`
- Allows component consumers to override/extend styles safely

**Example from card.tsx:**
```typescript
<div
  className={cn(
    "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
    className,
  )}
  {...props}
/>
```

## Data Handling

**Static Data:**
- Define as constants at module level: `const services = [...]`, `const newsArticles = [...]`
- Map over arrays for rendering: `.map((item, index) => <Component key={index} ... />)`

**Form State:**
- Manage with useState: `const [formData, setFormData] = useState({...})`
- Update with spread operator: `{ ...formData, [e.target.name]: e.target.value }`
- Reset after submission: `setFormData({ name: '', email: '', ... })`

## Accessibility

**Attributes:**
- Use semantic HTML: `<header>`, `<main>`, `<footer>`, `<section>`
- id attributes for scroll targets: `id="home"`, `id="servicos"`
- htmlFor labels: `<label htmlFor="name">`
- aria attributes for interactive components: `aria-invalid:` Tailwind class support

---

*Convention analysis: 2026-03-14*
