// Function says: This file generates the sitemap.xml file for us, which is important for SEO.
// It's automatically run through `npm run build`, check package.json.
// You shouldn't get an error here unless you mess with Next.js path configurations.

const sitemap = require("nextjs-sitemap-generator");

sitemap({
  baseUrl: "https://projectplusgame.com",
  pagesDirectory: process.cwd() + "/.next/server/pages",
  ignoredPaths: ["404", "changes/[version]"],
  targetDirectory: "out/"
});

console.log("✅ sitemap.xml generated!");