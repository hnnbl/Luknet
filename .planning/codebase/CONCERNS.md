# Codebase Concerns

**Analysis Date:** 2026-03-14

## Form Submission - No Backend Integration

**Issue:** Contact form uses mock implementation with browser alert

**Files:** `src/app/components/ContactSection.tsx` (line 15)

**Impact:** Form submissions are not processed or stored. Users cannot actually submit contact requests. This is critical for a business website where lead generation depends on capturing contact information.

**Current State:**
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Mock form submission
  alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  setFormData({ name: '', email: '', subject: '', message: '' });
};
```

**Fix Approach:**
- Implement actual backend endpoint for form submissions
- Add email notification system to receive contact inquiries
- Store submissions in database for follow-up
- Add server-side validation and spam protection
- Replace `alert()` with toast notification or modal dialog

---

## Placeholder Links Without Destination

**Issue:** Multiple broken or non-functional links throughout footer and social media

**Files:**
- `src/app/components/Footer.tsx` (lines 87-108, 121-126)

**Impact:** Users clicking on social media links or legal pages will navigate to `#` or nowhere. This breaks navigation flow and is poor UX.

**Occurrences:**
- Social media icons: Facebook, Instagram, LinkedIn, Twitter (lines 87-108)
- Legal links: Privacy Policy, Terms of Use (lines 121-126)

**Fix Approach:**
- Replace `href="#"` with actual social media URLs or `href="javascript:void(0)"` with event handlers
- Create actual privacy policy and terms pages or link to external documents
- Add `onClick` handlers to prevent default behavior if using placeholder links temporarily

---

## Array Index as React Key - Potential Reconciliation Issues

**Issue:** Using array index as React key in list rendering (anti-pattern)

**Files:**
- `src/app/components/DifferentialsSection.tsx` (line 59, `.map((item, index) => ... key={index}`)
- `src/app/components/NewsSection.tsx` (line 52, `.map((article, index) => ... key={index}`)
- `src/app/components/ServicesSection.tsx` (line 68, `.map((service, index) => ... key={index}`)

**Impact:** If data items are filtered, reordered, or modified, React may fail to properly reconcile components. This causes bugs with animations, form state, and component lifecycle. While the current static data isn't reordered, it's a fragile pattern that will break if data becomes dynamic.

**Fix Approach:**
- Add unique `id` property to data objects
- Use `key={item.id}` instead of `key={index}`
- Example: `id: 'desenvolvimento-moderno'` for differentials

---

## Hardcoded External Image URL - Missing Fallback

**Issue:** Hero section background image hosted on Unsplash with no fallback

**Files:** `src/app/components/HeroSection.tsx` (line 125)

**Current Implementation:**
```typescript
backgroundImage: `url('https://images.unsplash.com/photo-1737505599162-d9932323a889?...')`,
```

**Impact:** If Unsplash URL becomes unavailable, broken image link, or service goes down, hero section loses visual appeal. No error handling or fallback styling. Image attribution may violate Unsplash license if not properly credited.

**Risk:**
- Dependency on external service (Unsplash)
- No caching strategy
- Potential CORS issues
- Missing attribution

**Fix Approach:**
- Move image to assets folder in project: `src/assets/hero-network.jpg`
- Add CSS fallback background color
- Add `loading="lazy"` if converted to img element
- Add proper attribution if using licensed images

---

## Browser Alert for User Feedback - Poor UX

**Issue:** Using native `alert()` for form submission feedback

**Files:** `src/app/components/ContactSection.tsx` (line 15)

**Impact:**
- Blocks user interaction until dismissed
- Not styleable to match design
- Disrupts user experience
- Amateurish appearance
- No accessibility control

**Fix Approach:**
- Replace with toast notification using `sonner` package (already installed)
- Or use AlertDialog component from Radix UI
- Example: `toast.success('Mensagem enviada com sucesso!')`

---

## Test Coverage - None

**Issue:** No test files found in source code

**Files:** Project-wide - no `.test.tsx` or `.spec.ts` files in `src/`

**Impact:**
- No automated verification of component behavior
- High risk of regression on updates
- No confidence in refactoring
- Unverified form validation logic
- No tests for scroll navigation functions

**Current State:**
- Vite configured for build/dev only
- No test framework installed
- Zero test coverage

**Priority:** High - At minimum, form submission and navigation interactions should be tested

**Fix Approach:**
1. Install Vitest and React Testing Library
2. Add test configuration to `vite.config.ts`
3. Create tests for:
   - Form validation (`ContactSection`)
   - Scroll navigation (`Header`, `Footer`)
   - Component rendering
4. Aim for minimum 60% coverage on critical paths

---

## No Type Safety on Dynamic Imports

**Issue:** Unused UI component library with large bundle size

**Files:** `src/app/components/ui/` directory (40+ component files)

**Impact:**
- Adds significant JavaScript bundle size (estimated 50-100KB)
- Only a few components actually imported:
  - `Header.tsx` imports from `lucide-react` icons only
  - Most ui components unused
  - Increases initial load time
  - Unused dependencies in `package.json`

**Unused Components (examples):**
- `calendar.tsx`
- `chart.tsx`
- `carousel.tsx`
- `command.tsx`
- `context-menu.tsx`
- `drawer.tsx`
- `slider.tsx`
- 30+ more

**Fix Approach:**
- Tree-shake or remove unused Radix UI components
- Keep only what's actively used in the application
- Consider if large UI library is necessary for a landing page
- Run bundle analysis: `npm run build` and analyze `dist/`

---

## No Error Boundary - Unhandled React Errors

**Issue:** No Error Boundary component to catch rendering errors

**Files:** `src/app/App.tsx`, `src/main.tsx`

**Impact:** If any component throws an error, the entire application crashes with white screen. No fallback UI or error logging.

**Scenario:** If image loading fails, if unsplash CDN is blocked, if form validation throws, entire page goes down.

**Fix Approach:**
- Create `src/app/components/ErrorBoundary.tsx` using React error boundary API
- Wrap in `App.tsx`: `<ErrorBoundary><App /></ErrorBoundary>`
- Log errors to monitoring service
- Display user-friendly error message

---

## Missing Accessibility Attributes

**Issue:** Limited ARIA labels and semantic HTML

**Files:**
- `src/app/components/Header.tsx` (navigation buttons)
- `src/app/components/Footer.tsx` (social media icons)
- Form inputs lack `aria-describedby` attributes

**Impact:**
- Screen reader users cannot navigate effectively
- Keyboard navigation may be limited
- Fails WCAG 2.1 Level A compliance
- Potential legal accessibility issues

**Fix Approach:**
- Add `aria-label` to icon buttons: `aria-label="Navigate to services"`
- Add `aria-describedby` to form fields
- Use `<nav>` for navigation sections
- Add skip-to-content link
- Test with keyboard navigation (Tab key)

---

## No Environment Configuration

**Issue:** Hardcoded URLs and contact information

**Files:** `src/app/components/ContactSection.tsx`, `src/app/components/HeroSection.tsx`

**Hardcoded Values:**
- Phone: `(91) 99192-0911` (line 153)
- Email: `contato@luknet.com.br` (line 163)
- Address: `Eduardo Souza – Luknet, Trav Timbó, Belém – PA` (lines 138-143)
- Unsplash image URL with utm parameters

**Impact:** Cannot easily update business information for different environments (staging vs production). Difficult to deploy to multiple customers or test with different configurations.

**Fix Approach:**
- Create `.env` file with configuration variables
- Create `src/config.ts` to centralize settings:
  ```typescript
  export const config = {
    contact: {
      phone: import.meta.env.VITE_CONTACT_PHONE || '(91) 99192-0911',
      email: import.meta.env.VITE_CONTACT_EMAIL || 'contato@luknet.com.br',
    }
  }
  ```
- Load and use throughout components

---

## Missing Responsive Image Strategy

**Issue:** HeroSection image via `backgroundImage` CSS not optimized

**Files:** `src/app/components/HeroSection.tsx` (line 125)

**Impact:**
- No responsive images (doesn't scale with device)
- No WebP format support for smaller file sizes
- Full resolution loaded on mobile devices
- Poor performance on slow connections
- Missing alt text (CSS background image)

**Fix Approach:**
- Use `<img>` element instead of CSS background
- Use `srcset` for responsive images
- Serve WebP with fallback JPEG
- Add `alt` text describing the tech concept image
- Lazy load the image: `loading="lazy"`

---

## Performance - Large Component Files

**Issue:** ContactSection is 185 lines - too large for single component

**Files:** `src/app/components/ContactSection.tsx` (185 lines)

**Impact:**
- Hard to test
- Multiple responsibilities (form state, contact info display)
- Difficult to reuse parts
- Less maintainable

**Other Large Files:**
- `HeroSection.tsx`: 159 lines
- `Footer.tsx`: 133 lines

**Fix Approach:**
- Extract contact form into `ContactForm.tsx`
- Extract contact info into `ContactInfo.tsx`
- Extract business hours into `BusinessHours.tsx`
- Keep parent as composition component

---

## No Loading States - User Feedback Gap

**Issue:** Contact form has no loading state or disabled button during submission

**Files:** `src/app/components/ContactSection.tsx`

**Impact:** Users don't know if form is processing. They might click submit multiple times, causing duplicate submissions. No indication of success/failure beyond alert dialog.

**Current State:**
- Button is clickable immediately
- Form clears immediately
- No disabled state during submission
- No loading spinner

**Fix Approach:**
- Add `isLoading` state
- Disable button and show spinner during submission
- Disable form inputs during submission
- Only clear form after successful response
- Show error message if submission fails

---

## Unused UI Component Library Bloat

**Issue:** Shadcn/ui components imported but mostly unused

**Files:** `src/app/components/ui/` (40+ components)

**Current Dependencies in `package.json`:**
- `@radix-ui/react-*`: 40+ packages
- Brings in all Radix UI primitives

**Actually Used:**
- Lucide icons (for icons)
- Basic form elements from custom code
- Zero use of most UI components

**Impact:** Bundle size significantly larger than needed for landing page

**Fix Approach:**
- Tree-shake unused Radix UI packages
- Remove unused UI component files
- Keep `lucide-react` for icons (actively used)
- Consider replacing large UI library with minimal CSS-only components for landing page

---

## Section IDs Not Validated

**Issue:** Section scrolling relies on matching IDs with `document.getElementById()`

**Files:**
- `src/app/components/Header.tsx` (lines 16-22)
- `src/app/components/Footer.tsx` (lines 6-11)

**Impact:** If section ID is misspelled or removed, scroll navigation silently fails. No error feedback.

**Current Pattern:**
```typescript
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
```

**Risk:**
- Easy to break navigation if IDs change
- No visual feedback if scroll fails

**Fix Approach:**
- Create type-safe section IDs:
  ```typescript
  const SECTIONS = {
    HOME: 'home',
    SERVICES: 'servicos',
    NEWS: 'noticias',
    CONTACT: 'contato',
  } as const;
  ```
- Use constants throughout to prevent typos
- Add console warning if element not found

---

## Build Output Not Git-Ignored Properly

**Issue:** Dist folder and compiled assets in repository

**Files:** `/dist/` directory and `dist.zip` file committed

**Impact:**
- Bloats repository size
- Build artifacts shouldn't be versioned
- Conflicts when merging branches
- Makes repo harder to clone

**Fix Approach:**
- Ensure `.gitignore` includes:
  ```
  dist/
  dist.zip
  .env.local
  node_modules/
  ```
- Remove dist folder from git history: `git rm --cached -r dist/`

---

## Title Metadata Incomplete

**Issue:** `index.html` has generic title

**Files:** `index.html` (line 7)

**Current:** `<title>Landing page</title>`

**Missing:**
- No meta description for SEO
- No Open Graph tags for social sharing
- No favicon
- No canonical URL

**Fix Approach:**
- Update HTML metadata:
  ```html
  <title>Luknet - Soluções Web Inteligentes</title>
  <meta name="description" content="Criamos páginas e sistemas web estruturados conforme o perfil do seu negócio.">
  <meta property="og:title" content="Luknet">
  <meta property="og:description" content="Soluções Web Inteligentes">
  <meta property="og:type" content="website">
  <link rel="icon" href="/favicon.ico">
  ```

---

*Concerns audit: 2026-03-14*
