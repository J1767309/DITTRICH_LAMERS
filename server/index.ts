import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

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

  const publicPages = [
    ["/", "index.html"],
    ["/about", "about/index.html"],
    ["/practice-areas", "practice-areas/index.html"],
    ["/contact", "contact/index.html"],
    ["/attorneys/amber-lamers", "attorneys/amber-lamers/index.html"],
    ["/attorneys/steve-dittrich", "attorneys/steve-dittrich/index.html"],
  ] as const;

  for (const [route, file] of publicPages) {
    app.get(route, (_req, res) => {
      res.sendFile(path.join(staticPath, file));
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
