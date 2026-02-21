import fs from "node:fs";
import { getSortedVersions } from "./app/changes/get-version.ts";

const sortedVersions = await getSortedVersions();

fs.writeFileSync(
	"./public/feed.xml",
	`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Project+ releases</title>
    <description>A feed of versions of Project+ including download links.</description>
    <ttl>720</ttl>
    <image>
      <url>https://projectplusgame.com/favicon.ico</url>
      <title>Project+ releases</title>
      <link>https://projectplusgame.com</link>
      <width>16</width>
      <height>16</height>
    </image>
    <link>https://projectplusgame.com</link>
    <atom:link href="https://projectplusgame.com/feed.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <language>en</language>
    ${sortedVersions
			.toReversed()
			.map(
				(version) => `
          <item>
            <title>Project+ Download ${version}</title>
            <guid isPermaLink="false">${version}</guid>
            <link>https://projectplusgame.com/download</link>
            <!-- <pubDate></pubDate> -->
            <category>Release</category>
          </item>
    `,
			)
			.join("")}
  </channel>
</rss> 

`,
);
