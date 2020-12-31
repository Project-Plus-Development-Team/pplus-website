import path from "path";
import { promises as fs } from "fs";

const dataDirectory = path.join(process.cwd(), "data/changes/");

export async function getVersions() {
  // @ts-ignore
  const fileNames = await fs.readdir(dataDirectory, "utf-8");

  return fileNames.map(name => name.replace(/\.json$/, ""));
}

export async function getChangesData(version: string) {
  const fullPath = path.join(dataDirectory, `${version}.json`);
  // @ts-ignore
  const fileContents = await fs.readFile(fullPath, "utf-8");

  return {
    version: version,
    changes: JSON.parse(fileContents)
  };
}
