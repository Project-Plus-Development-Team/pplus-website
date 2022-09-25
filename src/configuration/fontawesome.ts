// to get fontawesome working with SSR, a bit of custom config is required
// https://www.kindacode.com/article/how-to-use-font-awesome-icons-in-next-js/
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// however, i'm not importing the relevant CSS file because the P+ website
// doesn't use any of the fancy features or props, so i just wrote 2 lines
// in the global.scss file and it works. i figured this out with the inspector
// to see what was missing to make the icons show up correctly.
// this is MUCH more data friendly.