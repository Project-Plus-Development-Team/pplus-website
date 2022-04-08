import { convertImages, convertSingleImage } from "../node-utilities/generate-lib.mjs";

await convertImages("characters", { resize: { height: 40 }});

await convertImages("communities", {
  quality: 50,
  resize: { height: 48 }
});

await convertImages("css", {
  flop: true,
  quality: 50,
  resize: { width: 80, height: 80 }
});

await convertImages("q9283rw8fg/css", {
  flop: true,
  quality: 50,
  resize: { width: 80, height: 80 }
});

await convertImages("icons", { resize: { height: 40 }});
await convertImages("knuckles", { quality: 100, resize: { width: 300 } });

await convertSingleImage("background.jpeg");
await convertSingleImage("background-banner.png");
await convertSingleImage("falco-glowy.png", { resize: { height: 366 }});
await convertSingleImage("logo.png");
await convertSingleImage("mosaic-background-pattern.jpg", { quality: 100 });
await convertSingleImage("smashgg-favicon.png");
await convertSingleImage("favicon.png");
await convertSingleImage("knuckles-woah.png", { resize: { height: 300 }, quality: 50 });

await convertSingleImage("q9283rw8fg/project-wave-logo.png", { quality: 90 });
await convertSingleImage("q9283rw8fg/vaporwave-color-palette.png", { resize: { height: 20 }, quality: 30 });
await convertSingleImage("q9283rw8fg/vaporwave-wallpaper.jpg", { resize: { height: 1000 }, quality: 80 });