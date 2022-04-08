// This makes TypeScript not throw errors when trying to import these files
declare module "*.md";

declare namespace JSX {
  interface IntrinsicElements {
    "lite-youtube": {
      videoid: string
      playlabel: string
    }
  }
}