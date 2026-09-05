import { useEffect } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SITE_HOST } from "@shared/site";

const GOOGLE_ANALYTICS_ID = import.meta.env?.VITE_GA_MEASUREMENT_ID?.trim();
const UMAMI_ENDPOINT = import.meta.env?.VITE_ANALYTICS_ENDPOINT?.trim();
const UMAMI_WEBSITE_ID = import.meta.env?.VITE_ANALYTICS_WEBSITE_ID?.trim();

function installGoogleAnalytics(measurementId: string) {
  if (!/^G-[A-Z0-9]+$/.test(measurementId)) {
    console.warn("Ignoring invalid VITE_GA_MEASUREMENT_ID.");
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  const script = document.createElement("script");
  script.id = "google-analytics";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

function installUmami(endpoint: string, websiteId: string) {
  let scriptUrl: URL;

  try {
    scriptUrl = new URL("umami", `${endpoint.replace(/\/$/, "")}/`);
  } catch {
    console.warn("Ignoring invalid VITE_ANALYTICS_ENDPOINT.");
    return;
  }

  if (!/^https:$/.test(scriptUrl.protocol) || !websiteId) {
    console.warn("Ignoring invalid Umami analytics configuration.");
    return;
  }

  const script = document.createElement("script");
  script.id = "umami-analytics";
  script.defer = true;
  script.src = scriptUrl.toString();
  script.dataset.websiteId = websiteId;
  document.head.appendChild(script);
}

export default function Analytics() {
  useEffect(() => {
    const install = () => {
      if (GOOGLE_ANALYTICS_ID && !document.getElementById("google-analytics")) {
        installGoogleAnalytics(GOOGLE_ANALYTICS_ID);
      }

      if (
        UMAMI_ENDPOINT &&
        UMAMI_WEBSITE_ID &&
        !document.getElementById("umami-analytics")
      ) {
        installUmami(UMAMI_ENDPOINT, UMAMI_WEBSITE_ID);
      }
    };

    const timeout = window.setTimeout(install, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  const isVercelHost =
    typeof window !== "undefined" &&
    (window.location.hostname === SITE_HOST ||
      window.location.hostname.endsWith(".vercel.app"));

  return isVercelHost ? <VercelAnalytics /> : null;
}

declare global {
  interface Window {
    dataLayer: unknown[][];
    gtag: (...args: unknown[]) => void;
  }
}
