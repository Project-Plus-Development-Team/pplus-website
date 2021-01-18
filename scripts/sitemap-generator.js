const sitemap = require("nextjs-sitemap-generator");

sitemap({
  baseUrl: "https://projectplusgame.com",
  pagesDirectory: process.cwd() + "/.next/server/pages",
  targetDirectory: "out/"
});

console.log(`✅ sitemap.xml generated!`);