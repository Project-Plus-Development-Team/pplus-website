// Function says: This file has the Node.js (build-time) logic to provide the changes pages with
// 1. all versions that are available -> getVersions()
// 2. the data for any specific version -> getVersionData(version)

import path from "path";
import { promises as fs } from "fs";
import { VersionData } from "../types/changes";

const dataDirectory = path.join(process.cwd(), "data/changes/");

export async function getVersions() {
  const fileNames = await fs.readdir(dataDirectory, "utf-8");

  return fileNames
    .map(name => name.replace(/\.json$/, ""))
    .sort(); // sort versions ascending, important for the /changes/ path (version omitted)
}

export async function getVersionData(version: string): Promise<VersionData> {
  const fullPath = path.join(dataDirectory, `${version}.json`);
  const fileContents = await fs.readFile(fullPath, "utf-8");

  return JSON.parse(fileContents);
}
