# External Integrations

**Analysis Date:** 2026-03-14

## APIs & External Services

**Image CDN:**
- Unsplash - Used for background images in hero section
  - URL: `https://images.unsplash.com/` endpoints
  - Purpose: Dynamic background imagery for hero section
  - Integration: Direct URL references in `src/app/components/HeroSection.tsx`
  - Query params: `crop`, `cs`, `fit`, `fm`, `ixid`, `ixlib`, `q`, `w`, `utm_source`, `utm_medium`

## Data Storage

**Databases:**
- Not detected - This is a client-side React SPA with no backend database integration

**File Storage:**
- Local filesystem only - No cloud storage integrations detected
- Static assets served from deployment location

**Caching:**
- Browser caching via HTTP headers
- Vite handles asset caching in production builds

## Authentication & Identity

**Auth Provider:**
- Custom/None - No authentication system implemented
- Contact form (`src/app/components/ContactSection.tsx`) is mock-only (no backend submission)
  - Form submission currently displays alert: "Mensagem enviada com sucesso! Entraremos em contato em breve."
  - No actual backend API call or authentication required

## Monitoring & Observability

**Error Tracking:**
- Not detected - No error tracking service (Sentry, Rollbar, etc.)

**Logs:**
- Browser console only - No centralized logging service
- Development logging via standard JavaScript `console` methods

**Analytics:**
- Not detected - No Google Analytics, Mixpanel, or similar tracking

## CI/CD & Deployment

**Hosting:**
- Not specified in codebase - Likely static site hosting (Vercel, Netlify, GitHub Pages, etc.)
- Build output: `/dist` directory (present in repo)

**CI Pipeline:**
- Not detected - No GitHub Actions, GitLab CI, or similar configuration files

**Build Process:**
- Command: `npm run build` → runs `vite build`
- Development: `npm run dev` → runs `vite` dev server

## Environment Configuration

**Required env vars:**
- None detected - Application has no environment variable dependencies

**Secrets location:**
- No secrets management detected
- No `.env` files in use
- All configuration is static/hardcoded in component files

## Static Content & Configuration

**Contact Information (hardcoded in ContactSection):**
- Location: Trav Timbó, Belém – PA, Brazil
- Email: contato@luknet.com.br
- Phone: (91) 99192-0911
- Business Hours: Mon-Fri 9h-18h, Sat 9h-13h, Sun Closed

**News/Blog Content:**
- Hardcoded in `src/app/components/NewsSection.tsx`
- Sample articles (3 items) with dates, titles, and summaries
- No CMS or dynamic content backend

## Webhooks & Callbacks

**Incoming:**
- None detected

**Outgoing:**
- Contact form currently mocked - no webhook delivery
- No backend service for form submission

## Form Handling

**ContactSection (`src/app/components/ContactSection.tsx`):**
- Form fields: name, email, subject, message
- Submission: Currently mocked with browser alert
- No API endpoint configured
- Data not persisted or transmitted to backend
- Ready for integration with email service (SendGrid, Mailgun, etc.) or backend API

## Third-Party Scripts

**Unsplash Integration:**
- Image URLs include `utm_source=figma&utm_medium=referral` parameters
- Suggests design originated from Figma with Unsplash plugin

---

*Integration audit: 2026-03-14*
