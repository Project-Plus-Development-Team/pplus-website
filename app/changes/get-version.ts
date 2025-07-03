import { promises as fs } from "node:fs";
import path from "node:path";
import type { VersionData } from "./changes-types";
import { iconMap, whitespacesToHyphens } from "./icon-tools.ts";

export async function getSortedVersions() {
  const dataDirectory = path.join(process.cwd(), "app/changes/data");
  const fileNames = await fs.readdir(dataDirectory, "utf-8");
  return fileNames.map((name) => name.replace(/\.json$/, "")).sort(); // sort versions ascending, important for the /changes/ path (version omitted)
}

const generatedImagesFolder = path.join(
  process.cwd(),
  "public/images/generated"
);

// we validate that the images exist because not doing that may cause very confusing / cryptic error
// messages when sharp.js can't read the image
async function validateImagesExist(changesJSON: VersionData) {
  for (const { name } of changesJSON.changes) {
    const mappedIcon = Object.hasOwn(iconMap, name)
      ? iconMap[name as keyof typeof iconMap]
      : null;

    const relativeImagePath = mappedIcon
      ? `icons/${mappedIcon}.webp`
      : `characters/${whitespacesToHyphens(name)}.webp`;

    const absoluteImagePath = path.join(
      generatedImagesFolder,
      relativeImagePath
    );

    try {
      await fs.access(absoluteImagePath);
    } catch {
      throw new Error(`${absoluteImagePath} can't be accessed`);
    }
  }
}

export async function getSingleVersionData(
  version: string
): Promise<VersionData> {
  const absolutePath = path.join(
    process.cwd(),
    `app/changes/data/${version}.json`
  );
  const text = await fs.readFile(absolutePath, "utf-8");
  const changesJSON = JSON.parse(text);
  await validateImagesExist(changesJSON);

  return {
    ...changesJSON,
    version,
  };
}
