import { convertImages, convertSingleImage } from "./generate-lib.ts";

convertImages("characters", { resize: { height: 80 } });

convertImages("communities", {
  quality: 50,
  resize: { height: 48 },
});

convertImages("css", {
  flop: true,
  quality: 50,
  resize: { width: 80, height: 80 },
});

convertImages("project-wave/css", {
  flop: true,
  quality: 50,
  resize: { width: 80, height: 80 },
});

convertImages("icons", { resize: { height: 80 } });
convertImages("knuckles", { quality: 100, resize: { width: 300 } });
convertImages("features", { quality: 70, resize: { width: 600 } });

convertSingleImage("background.jpeg");
convertSingleImage("background-banner.png");
convertSingleImage("falco-glowy.png", { resize: { height: 366 } });
convertSingleImage("logo.png");
convertSingleImage("mosaic-background-pattern.jpg", { quality: 100 });
convertSingleImage("smashgg-favicon.png");
convertSingleImage("favicon.png");
convertSingleImage("knuckles-woah.png", { quality: 80 });

convertSingleImage("project-wave/project-wave-logo.png", { quality: 90 });
convertSingleImage("project-wave/vaporwave-color-palette.png", {
  resize: { height: 20 },
  quality: 30,
});
convertSingleImage("project-wave/vaporwave-wallpaper.jpg", {
  resize: { height: 1000 },
  quality: 80,
});
