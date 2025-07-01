import { folder, single } from "./generate-lib.ts";

/**
 * pplus-website doesn't use next-image-export-optimizer
 * because it doesn't support CSS / background-image optimisation at the time of writing.
 * https://github.com/Niels-IO/next-image-export-optimizer/issues/224
 */

folder("characters", { resize: { height: 80 } });

folder("communities", {
  quality: 50,
  resize: { height: 48 },
});

folder("css", {
  flop: true,
  quality: 50,
  resize: { width: 80, height: 80 },
});

folder("project-wave/css", {
  flop: true,
  quality: 50,
  resize: { width: 80, height: 80 },
});

folder("icons", { resize: { height: 80 } });
folder("knuckles", { quality: 100, resize: { width: 300 } });
folder("features", { quality: 70, resize: { width: 600 } });

single("background.jpeg");
single("background-banner.png");
single("falco-glowy.png", { resize: { height: 366 } });
single("logo.png");
single("mosaic-background-pattern.jpg", { quality: 100 });
single("smashgg-favicon.png");
single("favicon.png");
single("knuckles-woah.png", { quality: 80 });

single("project-wave/project-wave-logo.png", { quality: 90 });
single("project-wave/vaporwave-color-palette.png", {
  resize: { height: 20 },
  quality: 30,
});
single("project-wave/vaporwave-wallpaper.jpg", {
  resize: { height: 1000 },
  quality: 80,
});
