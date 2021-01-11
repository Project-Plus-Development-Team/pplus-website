// Function says: This file has the Node.js (build-time) logic to provide the changes pages with
// 1. all versions that are available -> getVersions()
// 2. the data for any specific version -> getVersionData(version)

import path from "path";
import { promises as fs } from "fs";
import { VersionData } from "../types/changes";
import { Validator } from "jsonschema";
import loadJson from "./load-json";
import { iconMap, whitespacesToHyphens } from "./icon-tools";

export async function getSortedVersions() {
  const dataDirectory = path.join(process.cwd(), "data/changes/");
  const fileNames = await fs.readdir(dataDirectory, "utf-8");

  return fileNames
    .map(name => name.replace(/\.json$/, ""))
    .sort(); // sort versions ascending, important for the /changes/ path (version omitted)
}

const imagesFolder = path.join(process.cwd(), "public/images");

// we validate that the images exist because not doing that may cause very confusing / cryptic error
// messages when sharp.js (used by responsive-loader for resizing) can't read the image
async function validateImagesExist(changesJSON: VersionData) {
  for (const { name } of changesJSON.changes) {
    const mappedIcon: string|undefined = iconMap[name];

    const relativeImagePath = mappedIcon ?
      `icons/${mappedIcon}.png` :
      `characters/${whitespacesToHyphens(name)}.png`;

    const absoluteImagePath = path.join(imagesFolder, relativeImagePath);

    try {
      await fs.access(absoluteImagePath);
    } catch {
      throw new Error(`${absoluteImagePath} can't be accessed`);
    }
  }
}

export async function getVersionData(version: string): Promise<VersionData> {
  const changesJSON = await loadJson(`data/changes/${version}.json`);
  const schema = await loadJson("types/changesSchema.json");

  const validatorInstance = new Validator();

  validatorInstance.validate(changesJSON, schema, {
    throwFirst: true
  });

  await validateImagesExist(changesJSON);

  return changesJSON;
}
