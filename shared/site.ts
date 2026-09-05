export const SITE_URL = "https://www.dittrichlamers.com";
export const SITE_HOST = "www.dittrichlamers.com";

export const ROUTES = {
  home: "/",
  about: "/about",
  practiceAreas: "/practice-areas",
  contact: "/contact",
  amberLamers: "/attorneys/amber-lamers",
  steveDittrich: "/attorneys/steve-dittrich",
} as const;

export const PUBLIC_ROUTES = [
  {
    path: ROUTES.home,
    changeFrequency: "weekly",
    priority: "1.0",
  },
  {
    path: ROUTES.about,
    changeFrequency: "monthly",
    priority: "0.8",
  },
  {
    path: ROUTES.practiceAreas,
    changeFrequency: "monthly",
    priority: "0.9",
  },
  {
    path: ROUTES.contact,
    changeFrequency: "monthly",
    priority: "0.7",
  },
  {
    path: ROUTES.amberLamers,
    changeFrequency: "monthly",
    priority: "0.8",
  },
  {
    path: ROUTES.steveDittrich,
    changeFrequency: "monthly",
    priority: "0.8",
  },
] as const;

export type PublicRoutePath = (typeof PUBLIC_ROUTES)[number]["path"];

export const CANONICAL_REDIRECT_HOSTS = [
  "dittrichlamers.com",
  "dittrich-lamers.vercel.app",
  "dittrich-lamers-law.vercel.app",
] as const;

export function getRouteOutputFile(route: PublicRoutePath): string {
  return route === "/" ? "index.html" : `${route.slice(1)}/index.html`;
}
