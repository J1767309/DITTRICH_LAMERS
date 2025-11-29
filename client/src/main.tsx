import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Handle GitHub Pages SPA redirect
const redirectPath = sessionStorage.getItem('redirectPath');
if (redirectPath) {
  sessionStorage.removeItem('redirectPath');
  // Remove the base path prefix if present
  const basePath = import.meta.env.BASE_URL;
  const path = redirectPath.startsWith(basePath)
    ? redirectPath.slice(basePath.length - 1)
    : redirectPath;
  if (path && path !== '/' && path !== basePath) {
    window.history.replaceState(null, '', redirectPath);
  }
}

createRoot(document.getElementById("root")!).render(<App />);
