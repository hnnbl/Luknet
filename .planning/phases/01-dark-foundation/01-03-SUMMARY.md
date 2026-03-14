---
phase: 01-dark-foundation
plan: 03
subsystem: ui
tags: [header, glassmorphism, purple-neon, animation, mobile-menu, react]

# Dependency graph
requires:
  - 01-01 (dark theme CSS tokens — violet/purple variables)
provides:
  - Redesigned Header component with dark glassmorphism scroll behavior
  - Purple/violet neon logo with gradient mark and gradient text
  - Desktop nav with sliding purple underline hover effect
  - Desktop "Fale Conosco" CTA button with neon glow
  - Animated mobile hamburger/X icon swap via AnimatePresence
  - Animated mobile nav panel with height/opacity transition
affects: [all pages using Header, navigation UX across all viewport widths]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - motion/react AnimatePresence for icon swap animation (rotate in/out)
    - motion/react motion.nav for height/opacity collapse animation
    - Tailwind arbitrary shadow values for neon glow: shadow-[0_0_20px_rgba(...)]
    - group/group-hover pattern for sliding underline on nav links
    - bg-black/80 backdrop-blur-xl for glassmorphism scroll state

key-files:
  created: []
  modified:
    - src/app/components/Header.tsx

key-decisions:
  - "Preserved all logic verbatim (scrollToSection, isScrolled, isMobileMenuOpen, scroll listener) — only JSX/styles changed"
  - "AnimatePresence with mode=wait for hamburger icon ensures clean rotation transition between Menu and X icons"
  - "Sliding underline via span with w-0 -> group-hover:w-full — pure CSS, no JS needed for hover effect"
  - "CTA button duplicated in both desktop and mobile menu for full-viewport accessibility"

requirements-completed: [HEAD-01, HEAD-02]

# Metrics
duration: 3min
completed: 2026-03-14
---

# Phase 1 Plan 03: Header Dark Redesign Summary

**Dark glassmorphism header with violet/purple neon logo gradient, sliding underline nav links, Fale Conosco CTA button, and AnimatePresence-animated mobile menu panel**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-14T03:47:41Z
- **Completed:** 2026-03-14T03:50:30Z
- **Tasks:** 1
- **Files modified:** 1

## Accomplishments

- Replaced blue/purple logo gradient with violet-500/purple-700 gradient mark and neon box-shadow glow
- Logo text switched from blue-400/purple-500 to violet-400/purple-300 for crisper contrast on dark background
- Scrolled header now uses bg-black/80 backdrop-blur-xl with violet-500/20 bottom border and purple shadow glow
- Desktop nav refactored to array map with sliding gradient underline span (w-0 -> w-full on group-hover)
- Added "Fale Conosco" CTA button with violet-600/purple-600 gradient, neon shadow, hover shadow intensification
- Mobile hamburger uses AnimatePresence mode="wait" for rotate -90/0/90 icon swap animation
- Mobile nav panel replaced with motion.nav using height 0->auto and opacity 0->1 with AnimatePresence
- Mobile panel includes both nav links and CTA button at bottom
- All logic preserved exactly: scrollToSection, isScrolled state, isMobileMenuOpen state, scroll event listener
- Build passes with zero errors (2004 modules, 3.65s)

## Task Commits

1. **Task 1: Redesign Header with dark glassmorphism, purple neon accents, and polished mobile menu** - `a00c391` (feat)

**Plan metadata:** (docs commit — see below)

## Files Created/Modified

- `src/app/components/Header.tsx` - Complete JSX/style rewrite: dark glassmorphism scroll state, violet neon logo, animated nav links with sliding underline, Fale Conosco CTA, AnimatePresence mobile menu

## Decisions Made

- Preserved all functional logic verbatim — only visual treatment changed, zero behavior regression risk
- AnimatePresence mode="wait" for hamburger icon ensures the exit animation completes before entrance, preventing visual overlap
- Sliding underline implemented as a pure-CSS span (no JS) using Tailwind group-hover pattern — performant and accessible
- Neon box-shadow on logo mark uses arbitrary Tailwind value `shadow-[0_0_20px_rgba(124,58,237,0.5)]` consistent with theme.css neon tokens

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Header is complete — all subsequent phases can rely on the fixed header height (py-4 = 16px padding + content)
- Purple neon aesthetic is now established across the first visible UI element — sets the visual tone for all section redesigns
- motion/react (AnimatePresence, motion.div, motion.nav) usage pattern established for consistent animation approach in subsequent components

## Self-Check

- [x] `src/app/components/Header.tsx` exists and contains motion/AnimatePresence imports
- [x] Commit `a00c391` exists in git log
- [x] Build passes with zero errors

## Self-Check: PASSED

---
*Phase: 01-dark-foundation*
*Completed: 2026-03-14*
