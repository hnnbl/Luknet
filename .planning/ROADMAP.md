# Roadmap: Luknet — Landing Page Futurista

## Overview

The existing React + TypeScript + Tailwind landing page is redesigned in four coarse phases: first the global dark theme and header establish the visual identity, then the Hero section and typography system deliver the maximum-impact first impression, then Services and Differentials get their 3D/holographic treatment, and finally the remaining sections (News, Contact, Footer) are completed with global scroll animations and a final copy pass.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Dark Foundation** - Establish global dark theme, color palette, background effects, and header (completed 2026-03-14)
- [x] **Phase 2: Hero & Typography** - 3D animated Hero section and bold typography system (completed 2026-03-14)
- [ ] **Phase 3: Feature Sections** - Services and Differentials with 3D/holographic cards and scroll animations
- [ ] **Phase 4: Completion** - News, Contact, Footer redesign plus global scroll animations and final copy

## Phase Details

### Phase 1: Dark Foundation
**Goal**: The page has a unified futuristic dark identity — visitors immediately perceive a dark, premium aesthetic before any section-specific content loads
**Depends on**: Nothing (first phase)
**Requirements**: THEME-01, THEME-02, THEME-03, THEME-04, HEAD-01, HEAD-02
**Success Criteria** (what must be TRUE):
  1. Page background is black or near-black globally — no white or light sections visible
  2. Accent colors are purple/violet with neon highlights throughout all existing UI elements
  3. An animated purple/violet gradient pulses visibly in the page background
  4. Floating particles are visible in the background across the full page
  5. Header uses a dark style consistent with the new theme and is fully responsive on mobile
**Plans**: 3 plans

Plans:
- [ ] 01-01-PLAN.md — Global dark color palette and animation keyframes (theme.css)
- [ ] 01-02-PLAN.md — Animated background effects component with gradient and particles
- [ ] 01-03-PLAN.md — Header redesign with purple/violet neon aesthetic and mobile menu

### Phase 2: Hero & Typography
**Goal**: The Hero section is the most visually impactful element on the page — a visitor landing on it sees a 3D floating element, bold headlines, and premium copy within the first second
**Depends on**: Phase 1
**Requirements**: HERO-01, HERO-02, HERO-03, HERO-04, COPY-01
**Success Criteria** (what must be TRUE):
  1. Hero displays a 3D element with continuous floating animation — it moves without user interaction
  2. Hero headline is visually dominant (large, bold weight) and is the first thing the eye is drawn to
  3. Hero copy communicates Luknet as a premium tech company (not generic "we build software")
  4. Hero entrance animation is impactful on page load — noticeably dramatic, not a subtle fade
  5. Bold typographic weight is consistent across all section headlines on the page
**Plans**: 2 plans

Plans:
- [ ] 02-01-PLAN.md — HeroSection rewrite with motion entrance, CSS 3D floating element, and premium copy
- [ ] 02-02-PLAN.md — Typography system: bold base heading weights and section h2 upgrade

### Phase 3: Feature Sections
**Goal**: The Services and Differentials sections reinforce the futuristic brand with interactive 3D card effects and scroll-triggered animations, making the key sales content as visually premium as the Hero
**Depends on**: Phase 2
**Requirements**: SERV-01, SERV-02, SERV-03, DIFF-01, DIFF-02, DIFF-03
**Success Criteria** (what must be TRUE):
  1. Service cards have a visible 3D or holographic visual treatment (border glow, depth effect, or similar)
  2. Service cards tilt in 3D when hovered with the mouse
  3. Service card copy communicates premium positioning — not placeholder or generic text
  4. Differentials section has a clearly futuristic dark visual design distinct from the previous light style
  5. Differentials items animate into view when the user scrolls to that section
**Plans**: TBD

### Phase 4: Completion
**Goal**: Every section of the page is complete in the new visual system — a visitor scrolling from top to bottom experiences a consistent futuristic dark aesthetic with no legacy-styled sections remaining
**Depends on**: Phase 3
**Requirements**: SECT-01, SECT-02, SECT-03, SECT-04, COPY-02
**Success Criteria** (what must be TRUE):
  1. News/Blog section is styled dark and futuristic — no light-mode artifacts visible
  2. Contact section is styled dark and futuristic, form fields and layout consistent with the new identity
  3. Footer is styled dark and consistent — the page has a cohesive end
  4. Every section triggers a visible entrance animation when scrolled into view
  5. All section texts have been reviewed and updated — no placeholder or outdated copy remains
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Dark Foundation | 3/3 | Complete    | 2026-03-14 |
| 2. Hero & Typography | 2/2 | Complete    | 2026-03-14 |
| 3. Feature Sections | 0/TBD | Not started | - |
| 4. Completion | 0/TBD | Not started | - |
