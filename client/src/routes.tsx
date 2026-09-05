import type { ComponentType } from "react";
import About from "@/pages/About";
import AmberLamers from "@/pages/AmberLamers";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import PracticeAreas from "@/pages/PracticeAreas";
import SteveDittrich from "@/pages/SteveDittrich";
import { PUBLIC_ROUTES, ROUTES, type PublicRoutePath } from "@shared/site";

const componentsByPath = {
  [ROUTES.home]: Home,
  [ROUTES.about]: About,
  [ROUTES.practiceAreas]: PracticeAreas,
  [ROUTES.contact]: Contact,
  [ROUTES.amberLamers]: AmberLamers,
  [ROUTES.steveDittrich]: SteveDittrich,
} satisfies Record<PublicRoutePath, ComponentType>;

export const appRoutes = PUBLIC_ROUTES.map(route => ({
  ...route,
  component: componentsByPath[route.path],
}));
