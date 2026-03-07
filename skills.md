# Skills & Context — Ship Your First App

> Next.js 15 starter kit

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15.2.4 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS | v4 |
| Runtime | React | 19 |
| Deployment | Vercel | — |

**Key constraint:** No backend, no database. Client-side only. Keep it simple.

---

## Coding Standards

### File & Folder Structure
- Pages live in `app/` using the App Router convention (`page.tsx`, `layout.tsx`)
- Reusable UI lives in `components/` — one component per file, PascalCase filenames
- Utility functions live in `lib/` — camelCase filenames

### Naming Conventions
- Components: `PascalCase` (e.g., `HeroSection`, `NavBar`)
- Variables and functions: `camelCase` (e.g., `handleSubmit`, `isLoading`)
- CSS classes: Tailwind utility classes only — no custom CSS unless unavoidable
- Files: kebab-case for pages/routes (e.g., `about/page.tsx`)

### Component Rules
- Prefer `"use client"` only when interactivity (state, effects, events) is required
- Default to Server Components for layout and static content
- Keep components focused — if a component exceeds ~80 lines, split it

### Styling Rules
- Use Tailwind utility classes directly in JSX
- Avoid inline `style={{}}` unless a value cannot be expressed in Tailwind
- Use `gap-`, `space-y-`, `grid`, and `flex` for layout — never manual margins for spacing rhythm

---

## AI Instructions

When generating or refactoring code in this project, follow these rules:

1. **Minimal surface area** — Only generate what is explicitly asked. Do not add extra features, pages, or abstractions.
2. **No placeholder data unless asked** — If data is needed, ask where it should come from before fabricating it.
3. **Preserve existing structure** — Do not reorganize `app/`, `components/`, or `lib/` unless instructed.
4. **TypeScript strictness** — All props must be typed. No `any`. Use `interface` for component props.
5. **Tailwind only** — Do not introduce CSS modules, styled-components, or new CSS files.
6. **App Router patterns** — Use `async` Server Components for data fetching. Use `"use client"` sparingly.
7. **No new dependencies** — Do not install packages without explicit instruction from the developer.
8. **Explain before generating** — For non-trivial changes, explain the approach in 1-2 sentences before writing code.
