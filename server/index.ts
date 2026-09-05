import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { PUBLIC_ROUTES, getRouteOutputFile } from "../shared/site";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  for (const route of PUBLIC_ROUTES) {
    app.get(route.path, (_req, res) => {
      res.sendFile(path.join(staticPath, getRouteOutputFile(route.path)));
    });
  }

  app.use(express.static(staticPath));

  app.use((_req, res) => {
    res.status(404).sendFile(path.join(staticPath, "404.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
