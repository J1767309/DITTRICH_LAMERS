import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  CANONICAL_REDIRECT_HOSTS,
  PUBLIC_ROUTES,
  SITE_URL,
  getRouteOutputFile,
} from "../shared/site";

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  ".."
);
const writeChanges = process.argv.includes("--write");
const lastModified = "2026-09-04";

const vercelConfig = `${JSON.stringify(
  {
    $schema: "https://openapi.vercel.sh/vercel.json",
    buildCommand: "pnpm build",
    outputDirectory: "dist/public",
    framework: null,
    installCommand: "pnpm install",
    redirects: CANONICAL_REDIRECT_HOSTS.map(host => ({
      source: "/:path*",
      has: [{ type: "host", value: host }],
      destination: `${SITE_URL}/:path*`,
      permanent: true,
    })),
    rewrites: [
      { source: "/api/(.*)", destination: "/api/$1" },
      ...PUBLIC_ROUTES.filter(route => route.path !== "/").map(route => ({
        source: route.path,
        destination: `/${getRouteOutputFile(route.path)}`,
      })),
    ],
  },
  null,
  2
)}\n`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PUBLIC_ROUTES.map(
  route => `  <url>
    <loc>${new URL(route.path, SITE_URL).toString()}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
).join("\n")}
</urlset>
`;

const generatedFiles = [
  { path: path.join(repositoryRoot, "vercel.json"), content: vercelConfig },
  {
    path: path.join(repositoryRoot, "client/public/sitemap.xml"),
    content: sitemap,
  },
];

let hasDrift = false;

for (const generatedFile of generatedFiles) {
  if (writeChanges) {
    fs.writeFileSync(generatedFile.path, generatedFile.content);
    console.log(`Updated ${path.relative(repositoryRoot, generatedFile.path)}`);
    continue;
  }

  const current = fs.existsSync(generatedFile.path)
    ? fs.readFileSync(generatedFile.path, "utf8")
    : "";

  if (current !== generatedFile.content) {
    hasDrift = true;
    console.error(
      `${path.relative(repositoryRoot, generatedFile.path)} is out of sync. Run pnpm sync:site.`
    );
  }
}

if (hasDrift) {
  process.exitCode = 1;
}
