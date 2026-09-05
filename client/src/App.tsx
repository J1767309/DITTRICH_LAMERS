import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HelmetProvider } from "@/lib/helmet";
import Analytics from "@/components/Analytics";
import { appRoutes } from "@/routes";

const viteBase = import.meta.env?.BASE_URL || "/";
const base = viteBase === "/" ? "" : viteBase.replace(/\/$/, "");

interface AppProps {
  ssrPath?: string;
  helmetContext?: Record<string, unknown>;
}

function Router({ ssrPath }: Pick<AppProps, "ssrPath">) {
  return (
    <WouterRouter base={base} ssrPath={ssrPath}>
      <Switch>
        {appRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App({ ssrPath, helmetContext }: AppProps = {}) {
  return (
    <ErrorBoundary>
      <HelmetProvider context={helmetContext}>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Analytics />
            <Router ssrPath={ssrPath} />
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
