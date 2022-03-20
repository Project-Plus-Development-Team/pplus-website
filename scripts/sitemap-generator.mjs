import sitemap from "nextjs-sitemap-generator";

sitemap({
  baseUrl: "https://projectplusgame.com",
  pagesDirectory: process.cwd() + "/.next/server/pages",
  ignoredPaths: ["404", "changes/[version]"],
  targetDirectory: "out/"
});

console.log("✅ sitemap.xml generated!");