import path from "path";
import { promises as fs } from "fs";
import { VersionData } from "./changes-types";
import { Validator } from "jsonschema";
import { loadJson } from "../../next-server-utilities/load-json";
import { iconMap, whitespacesToHyphens } from "./icon-tools";
import { safelyIndex } from "shared/functions/is-key-of";
import { root } from "next-server-utilities/root";

export async function getSortedVersions() {
  const dataDirectory = root("src/modules/changes/data");
  const fileNames = await fs.readdir(dataDirectory, "utf-8");

  return fileNames
    .map(name => name.replace(/\.json$/, ""))
    .sort(); // sort versions ascending, important for the /changes/ path (version omitted)
}

const generatedImagesFolder = root("public/images/generated");

// we validate that the images exist because not doing that may cause very confusing / cryptic error
// messages when sharp.js (used by responsive-loader for resizing) can't read the image
async function validateImagesExist(changesJSON: VersionData) {
  for (const { name } of changesJSON.changes) {
    const mappedIcon = safelyIndex(iconMap, name);

    const relativeImagePath = mappedIcon ?
      `icons/${mappedIcon}.webp` :
      `characters/${whitespacesToHyphens(name)}.webp`;

    const absoluteImagePath = path.join(generatedImagesFolder, relativeImagePath);

    try {
      await fs.access(absoluteImagePath);
    } catch {
      throw new Error(`${absoluteImagePath} can't be accessed`);
    }
  }
}

export async function getSingleVersionData(version: string): Promise<VersionData> {
  const changesJSON = await loadJson(`src/modules/changes/data/${version}.json`);
  const schema = await loadJson("src/modules/changes/changesSchema.json");

  const validatorInstance = new Validator();

  validatorInstance.validate(changesJSON, schema, {
    throwFirst: true
  });

  await validateImagesExist(changesJSON);

  return {
    ...changesJSON,
    version
  };
}

export const getMixedVersionData = async (version: string) => {
  if (version === "all") {
    const versions = await getSortedVersions();

    return Promise.all(
      versions.map(getSingleVersionData)
    );
  }

  return getSingleVersionData(version);
};