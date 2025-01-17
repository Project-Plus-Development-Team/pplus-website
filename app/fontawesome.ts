// to get fontawesome working with SSR, a bit of custom config is required
// https://www.kindacode.com/article/how-to-use-font-awesome-icons-in-next-js/
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// the CSS import is not needed, it's done by fontawesome's javascript
