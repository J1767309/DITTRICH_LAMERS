# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dittrich & Lamers Law is a law firm website built with a modern full-stack React setup. It's a static marketing site deployed to GitHub Pages (under the `/DITTRICH_LAMERS/` base path in production).

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
└── const.ts       # Shared constants between client and server
```

### Key Architectural Patterns

**Routing:** Uses Wouter with base path support. The `base` is set from `import.meta.env.BASE_URL` to handle both development (`/`) and production (`/DITTRICH_LAMERS/`) deployments.

**Component Structure:** Pages are full-page components in `/pages`. Reusable UI components (Header, Footer, CredentialsCarousel) live in `/components`. Radix UI primitives (customized with Tailwind) are in `/components/ui`.

**Theming:** ThemeProvider wraps the app for light/dark mode switching. Uses next-themes for persistence.

**Build Output:**
- Client builds to `dist/public/` (Vite output)
- Server bundles to `dist/index.js` (esbuild with node platform)
- In production, the server serves static files from `dist/public`

### Important Config Files

**vite.config.ts:**
- Sets production base path to `/DITTRICH_LAMERS/` for GitHub Pages
- Configures path aliases: `@` → `client/src`, `@shared` → `shared`, `@assets` → `attached_assets`
- Root is `client/` directory
- Build output goes to `dist/public`

**tsconfig.json:** Standard TypeScript config with path aliases matching Vite's alias configuration.

## Development Notes

**Adding New Pages:**
1. Create a new component in `client/src/pages/`
2. Add a route in `App.tsx` using `<Route path={"/path"} component={YourPage} />`
3. Link to it from Header/navigation components

**Styling:** Use Tailwind classes. Custom components should extend from shadcn/ui components in `components/ui/` when applicable.

**Environment Variables:** Copy `.env.example` to `.env.local` for development (Vite will load these).

**Testing:** Vitest is included in devDependencies but not yet in use.

## Build & Deployment

The app is deployed to GitHub Pages as a static site. The build process:
1. Vites builds the React app with base path `/DITTRICH_LAMERS/`
2. esbuild bundles the Express server
3. Both outputs are in `dist/`
4. GitHub Actions (or manual) deploys `dist/public` to GitHub Pages

The Express server is minimal and primarily routes all requests to `index.html` for client-side routing to work (standard SPA pattern).
