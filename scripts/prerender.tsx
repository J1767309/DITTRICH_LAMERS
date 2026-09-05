import fs from "node:fs";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../client/src/App";
import { PUBLIC_ROUTES, getRouteOutputFile } from "../shared/site";

const outputDirectory = path.resolve("dist/public");
const template = fs.readFileSync(
  path.join(outputDirectory, "index.html"),
  "utf8"
);

for (const route of PUBLIC_ROUTES) {
  const helmetContext: Record<string, unknown> = {};
  const appMarkup = renderToString(
    <App ssrPath={route.path} helmetContext={helmetContext} />
  );

  const helmet = helmetContext.helmet as {
    title: { toString(): string };
    meta: { toString(): string };
    link: { toString(): string };
    script: { toString(): string };
  };

  const headMarkup = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].join("\n    ");

  const html = template
    .replace(
      /<!--app-head-->[\s\S]*?<!--\/app-head-->/,
      `<!--app-head-->\n    ${headMarkup}\n    <!--/app-head-->`
    )
    .replace('<div id="root"></div>', `<div id="root">${appMarkup}</div>`);

  const target = path.join(outputDirectory, getRouteOutputFile(route.path));

  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
}

console.log(`Pre-rendered ${PUBLIC_ROUTES.length} public routes.`);
