import { promises as fs } from "fs";
import { root } from "./root";

export const loadJson =  async (relativePath: string) => {
  const absolutePath = root(relativePath);
  const text = await fs.readFile(absolutePath, "utf-8");
  return JSON.parse(text);
};