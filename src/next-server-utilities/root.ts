import path from "path";

export const root = (...paths: string[]) => (
  path.join(process.cwd(), ...paths)
);