// Function says: This file has the Node.js (build-time) logic to provide the changes pages with
// 1. all versions that are available -> getVersions()
// 2. the data for any specific version -> getVersionData(version)

import path from "path";
import { promises as fs } from "fs";
import { VersionData } from "../types/changes";
import { Validator } from "jsonschema";
import loadJson from "./load-json";


export async function getSortedVersions() {
  const dataDirectory = path.join(process.cwd(), "data/changes/");
  const fileNames = await fs.readdir(dataDirectory, "utf-8");

  return fileNames
    .map(name => name.replace(/\.json$/, ""))
    .sort(); // sort versions ascending, important for the /changes/ path (version omitted)
}

export async function getVersionData(version: string): Promise<VersionData> {
  const changesJSON = await loadJson(`data/changes/${version}.json`);
  const schema = await loadJson("types/changesSchema.json");

  const validatorInstance = new Validator();

  validatorInstance.validate(changesJSON, schema, {
    throwFirst: true
  });

  return changesJSON;
}
