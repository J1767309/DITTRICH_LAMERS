# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dittrich & Lamers, LLP is a law firm website built with a modern full-stack React setup. Its canonical production URL is https://www.dittrichlamers.com.

**Tech Stack:**
- Frontend: React 18 + TypeScript + Vite
- Routing: Wouter (lightweight alternative to React Router)
- Styling: Tailwind CSS (v4 with @tailwindcss/vite)
- UI Components: Radix UI primitives + custom shadcn/ui components
- Forms: React Hook Form + Zod validation
- Animations: Framer Motion
- Server: Express (minimal, serves static files in production)
- Package Manager: pnpm

## Common Commands

**Development:**
```bash
pnpm dev          # Start dev server on http://localhost:3000
pnpm check        # TypeScript type checking
pnpm format       # Format code with Prettier
```

**Build & Deploy:**
```bash
pnpm build        # Build React app + bundle server
pnpm start        # Run production server locally (requires NODE_ENV=production)
pnpm preview      # Preview production build locally with Vite
```

## Codebase Architecture

### Directory Structure

```
client/src/
├── pages/          # Page components (Home, About, Contact, Practice Areas, Attorney profiles)
├── components/     # Reusable components (Header, Footer, CredentialsCarousel, etc.)
│   └── ui/        # Shadcn/ui primitive components (buttons, dialogs, forms, etc.)
├── contexts/       # React contexts (ThemeContext for light/dark mode)
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and helpers
├── App.tsx        # Main app component with routing
├── main.tsx       # React DOM mount point
└── index.css      # Global styles

server/
├── index.ts       # Express server entry point - serves static files, handles SPA routing

shared/
├── const.ts       # Shared application constants
└── site.ts        # Canonical URL and public route source of truth
```

### Key Architectural Patterns

**Routing:** Uses Wouter with base path support. The `base` is set from `import.meta.env.BASE_URL` (always `/` for Vercel deployment).

**Component Structure:** Pages are full-page components in `/pages`. Reusable UI components (Header, Footer, CredentialsCarousel) live in `/components`. Radix UI primitives (customized with Tailwind) are in `/components/ui`.

**Theming:** ThemeProvider wraps the app for light/dark mode switching. Uses next-themes for persistence.

**Build Output:**
- Client builds to `dist/public/` (Vite output)
- Server bundles to `dist/index.js` (esbuild with node platform)
- In production, the server serves static files from `dist/public`

### Important Config Files

**vite.config.ts:**
- Base path is `/` for Vercel deployment
- Configures path aliases: `@` → `client/src`, `@shared` → `shared`, `@assets` → `attached_assets`
- Root is `client/` directory
- Build output goes to `dist/public`

**vercel.json:**
- Configures Vercel build settings and SPA routing rewrites

**tsconfig.json:** Standard TypeScript config with path aliases matching Vite's alias configuration.

## Development Notes

**Adding New Pages:**
1. Create a new component in `client/src/pages/`.
2. Add its path and sitemap settings to `shared/site.ts`.
3. Map the path to the component in `client/src/routes.tsx`.
4. Run `pnpm sync:site` to regenerate `vercel.json` and `sitemap.xml`.
5. Link to it from the appropriate navigation or content component.

**Styling:** Use Tailwind classes. Custom components should extend from shadcn/ui components in `components/ui/` when applicable.

**Environment Variables:** Copy `.env.example` to `.env.local` for development (Vite will load these).

**Testing:** Vitest is included in devDependencies but not yet in use.

## Build & Deployment

The app is deployed to Vercel as a static site. The build process:
1. The route registry consistency check verifies generated deployment files.
2. Vite builds the React app to `dist/public/`.
3. The prerenderer creates route-specific HTML for every public page.
4. Vercel serves those files with exact rewrites and true 404 behavior.

**Vercel Configuration:**
- Build command: `pnpm build`
- Output directory: `dist/public`
- Framework: Vite
- Canonical-host redirects are permanent, and duplicate Vercel hosts redirect to the canonical domain.
- Public-route rewrites are generated from `shared/site.ts`.

The Express server (`server/index.ts`) is available for local development but not used in Vercel production deployment.
