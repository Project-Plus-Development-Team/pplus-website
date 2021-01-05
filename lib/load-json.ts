import { promises as fs } from "fs";
import path from "path";

export default async (relativePath: string) => {
  const absolutePath = path.join(process.cwd(), relativePath);
  const text = await fs.readFile(absolutePath, "utf-8");
  return JSON.parse(text);
};