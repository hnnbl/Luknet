# Testing Patterns

**Analysis Date:** 2026-03-14

## Test Framework

**Status:** Not detected

**Runner:**
- No test runner configured (Jest, Vitest, Playwright, or Cypress not found)
- No test configuration files present (`jest.config.*`, `vitest.config.*`)
- No testing dependencies in `package.json`

**Assertion Library:**
- Not applicable - no testing framework installed

**Development Setup:**
- Project uses Vite as build tool
- Development server: `npm run dev` (vite)
- Build command: `npm run build` (vite build)

```bash
npm run dev              # Start Vite dev server (no tests)
npm run build            # Build for production (no tests)
```

## Test File Organization

**Current State:**
- No test files found in codebase
- Search for `*.test.*` and `*.spec.*` files returned no results
- Testing is not currently implemented

**Recommended Structure (if testing were added):**
```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Header.test.tsx          # Co-located test
│   │   ├── HeroSection.tsx
│   │   ├── HeroSection.test.tsx
│   │   └── ...
│   ├── App.tsx
│   └── App.test.tsx
└── main.tsx
```

**Naming Convention (recommended):**
- Use `.test.tsx` suffix for React component tests
- Use `.test.ts` suffix for utility function tests
- Co-locate test files with source files in same directory

## Test Structure

**Recommended Pattern (for future implementation):**

```typescript
// Example test structure for ContactSection.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { ContactSection } from './ContactSection'

describe('ContactSection', () => {
  it('renders contact form with all fields', () => {
    render(<ContactSection />)
    expect(screen.getByLabelText('Nome')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('submits form and shows success message', () => {
    render(<ContactSection />)
    fireEvent.submit(screen.getByRole('button', { name: /enviar/i }))
    expect(window.alert).toHaveBeenCalled()
  })
})

// Example test structure for utility (utils.test.ts)
import { cn } from './utils'

describe('cn utility', () => {
  it('merges class names correctly', () => {
    const result = cn('px-2 py-1', 'px-4')
    expect(result).toContain('px-4')
  })
})
```

## Mocking

**Framework:** Not applicable - no testing framework in place

**Current Patterns in Code:**
- Form submission is mocked with `alert()`: `alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');`
- Image error handling mocked with state: `setDidError(true)` triggers fallback UI
- No actual API calls or external dependencies requiring mocks

**What to Mock (when testing is implemented):**
- External API calls (fetch requests)
- Icon components from lucide-react (could render as SVG or mock)
- Event listeners (window.scrollY, element.scrollIntoView)

**What NOT to Mock:**
- React hooks (useState, useEffect should be tested as-is)
- DOM elements (let testing library render actual HTML)
- CSS/Tailwind classes (they're styling, not logic)
- Simple utility functions like `cn()` (test actual behavior)

## Fixtures and Factories

**Test Data:**

No fixtures exist. Recommended approach for future tests:

```typescript
// fixtures/formData.ts
export const validFormData = {
  name: 'João Silva',
  email: 'joao@example.com',
  subject: 'Orçamento',
  message: 'Gostaria de um orçamento...'
}

export const invalidFormData = {
  name: '',
  email: 'invalid-email',
  subject: '',
  message: ''
}

// fixtures/newsArticles.ts
export const mockNewsArticles = [
  {
    date: '15 de Março, 2026',
    title: 'Como a transformação digital...',
    summary: 'Descubra como...'
  }
]
```

**Location (recommended):**
- `src/__fixtures__/` for shared test data
- Co-located `*.test.tsx` files for component-specific test data

## Coverage

**Requirements:** Not enforced - no testing setup exists

**Recommended Goals (if implementing):**
- Statements: 80%+
- Branches: 75%+
- Functions: 80%+
- Lines: 80%+

**View Coverage (recommended setup):**
```bash
npm test -- --coverage
```

## Test Types

**Unit Tests:**
- Scope: Individual React components and utility functions
- Approach: Test component rendering, props handling, state changes
- Focus areas:
  - `cn()` utility merges classes correctly
  - ImageWithFallback renders fallback on error
  - Form state updates on input change
  - Event handlers trigger expected state changes

**Integration Tests:**
- Scope: Multiple components working together
- Approach: Test user interactions across sections
- Focus areas:
  - Scrolling between sections navigates correctly
  - Form submission resets after success
  - Mobile menu toggle affects navigation visibility

**E2E Tests:**
- Framework: Not applicable currently
- Recommended: Playwright or Cypress for user flows
- Scenarios:
  - User scrolls through page and clicks "Solicitar Orçamento"
  - User fills contact form and submits
  - Mobile responsive layout adaptation

## Common Patterns

**Async Testing:**

Not present in current codebase. Recommended approach:

```typescript
it('loads data when component mounts', async () => {
  const { getByText } = render(<MyComponent />)

  // Wait for async operation
  const element = await screen.findByText('Success')
  expect(element).toBeInTheDocument()
})

// For useEffect cleanup
it('removes event listener on unmount', () => {
  const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')
  const { unmount } = render(<Header />)
  unmount()
  expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
})
```

**Error Testing:**

Current approach: State-based error handling

```typescript
// Current pattern in ImageWithFallback.tsx
const [didError, setDidError] = useState(false)
const handleError = () => setDidError(true)
return didError ? <FallbackUI /> : <img onError={handleError} />

// Recommended test
it('shows fallback UI when image fails to load', () => {
  const { rerender } = render(<ImageWithFallback src="bad.jpg" />)
  const img = screen.getByAltText('Error loading image')
  fireEvent.error(img)
  expect(screen.getByText('Error')).toBeInTheDocument()
})
```

**Form Testing:**

Recommended pattern for ContactSection tests:

```typescript
it('updates form state on input change', () => {
  render(<ContactSection />)
  const nameInput = screen.getByLabelText('Nome') as HTMLInputElement
  fireEvent.change(nameInput, { target: { value: 'João' } })
  expect(nameInput.value).toBe('João')
})

it('prevents submission with empty fields', () => {
  render(<ContactSection />)
  const form = screen.getByRole('button', { name: /enviar/i }).closest('form')
  expect(form).toHaveAttribute('novalidate') // or rely on HTML5 validation
})

it('resets form after submission', () => {
  render(<ContactSection />)
  const form = screen.getByRole('form')
  fireEvent.submit(form)
  const inputs = screen.getAllByRole('textbox')
  inputs.forEach(input => {
    expect((input as HTMLInputElement).value).toBe('')
  })
})
```

**Event Handler Testing:**

Current patterns in code:

```typescript
// Header.tsx - scroll event handling
const handleScroll = () => {
  setIsScrolled(window.scrollY > 20);
};
window.addEventListener('scroll', handleScroll);

// Recommended test
it('updates scroll state on window scroll', () => {
  render(<Header />)
  fireEvent.scroll(window, { target: { scrollY: 100 } })
  expect(screen.getByRole('banner')).toHaveClass('bg-[#0a0e27]/95')
})

// HeroSection.tsx - smooth scroll navigation
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Recommended test
it('scrolls to section when button clicked', () => {
  const scrollIntoViewMock = jest.fn()
  Element.prototype.scrollIntoView = scrollIntoViewMock
  render(<HeroSection />)
  fireEvent.click(screen.getByText('Conhecer Serviços'))
  expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' })
})
```

## Implementation Roadmap

**Phase 1 - Setup:**
1. Install testing framework: `npm install -D vitest @testing-library/react @testing-library/jest-dom`
2. Create `vitest.config.ts` configuration
3. Add test scripts to `package.json`

**Phase 2 - Utility Tests:**
1. Write tests for `cn()` utility in `src/app/components/ui/utils.test.ts`
2. Test ImageWithFallback error handling
3. Aim for high coverage on utilities (95%+)

**Phase 3 - Component Tests:**
1. Test simple presentational components (ImageWithFallback, Card primitives)
2. Test stateful components (Header with scroll state, ContactSection with form state)
3. Test event handlers and navigation

**Phase 4 - Integration Tests:**
1. Test component combinations in App.tsx
2. Test navigation between sections
3. Test form submission flow

---

*Testing analysis: 2026-03-14*
