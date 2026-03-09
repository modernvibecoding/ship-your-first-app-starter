# Ship Your First App — Agent Specification

## What This Project Builds

A personal portfolio site that serves as your first deployed web application.
Students replace all placeholder content with real identity and ship it live on Vercel.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Vercel

## Student Prompt

Copy and paste this into your AI coding tool:

---

Build a personal portfolio site using Next.js 15 App Router with TypeScript and Tailwind CSS v4.

The site should have four sections on a single scrollable page:

1. **Hero** — My name, a one-line bio ("I build things with AI"), and two buttons: "View My Work" and "Get in Touch".
2. **Projects** — A 2×2 grid of project cards. Each card shows: project title, a one-sentence description, a tech stack chip row (e.g. Next.js, Supabase), and a "View →" link.
3. **About** — A short paragraph (2–3 sentences) and a horizontal row of skill tags: HTML, CSS, TypeScript, React, Next.js, Tailwind, Git.
4. **Footer** — Copyright line + icon links to GitHub and X/Twitter.

Design requirements:
- Dark background (`#0A0A0A`), off-white text (`#F5F5F5`)
- Clean, minimal layout — no animations, no heavy UI libraries
- Sticky header with my name on the left and nav links on the right (Home, Projects, About)
- Mobile responsive: stacks vertically on small screens, hamburger nav hidden behind a button
- All real content behind clearly labelled `// TODO:` comments so the student can swap it in

Deliver a README.md with three steps: clone → fill in your content → `vercel deploy`.

---

## Checklist

- [ ] Environment variables configured (`.env.local`)
- [ ] Placeholder content replaced with real identity
- [ ] App deployed to Vercel

## Key Files

- `app/page.tsx` — Mission control / setup status view
- `app/layout.tsx` — Root layout with font loading
- `README.md` — Quick start guide
