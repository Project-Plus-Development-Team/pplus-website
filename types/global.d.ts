// Function says: This makes TypeScript not throw errors when trying to import .md and image files (append &ts-ignore to the path)
declare module "*.md";
declare module "*&ts-ignore" {
  const value: string;
  export = value;
}