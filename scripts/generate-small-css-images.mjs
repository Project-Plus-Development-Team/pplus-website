import { convertImages, convertSingleImage } from "../lib/generate-lib.mjs";

await convertImages("characters", { resize: { height: 40 }});

await convertImages("communities", {
  quality: 50,
  resize: { height: 34 }
});

await convertImages("css", {
  flop: true,
  quality: 50,
  resize: { width: 80, height: 80 }
});

await convertImages("icons", { resize: { height: 40 }});
await convertImages("knuckles", { quality: 100 });

await convertSingleImage("background.jpeg");
await convertSingleImage("background-banner.png");
await convertSingleImage("falco-glowy.png", { resize: { height: 366 }});
await convertSingleImage("logo.png");
await convertSingleImage("mosaic-background-pattern.jpg", { quality: 100 });
await convertSingleImage("smashgg-favicon.png");
await convertSingleImage("favicon.png");