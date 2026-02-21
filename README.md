# Project+ Website

### Getting started with development

- `npm install`
- `cp .env.example .env.local` and fill it
- `npm run dev`

### Used technology

- Next.js
- Bulma & Tailwind for styling (yes, both because the P+ website was originally just Bulma)
- Netlify as the web host

### Misc dependency notes

- sass: hard dependency to customize bulma properly and to not have bloated CSS

- topojson-client, topojson-server: help parsing, transforming (trimming) and "compressing" (quantizing) the topojson file for the world map.
  i've tried replacing these dependencies but while the client is doable, the server is not worth the hassle.
  these dependencies are long unmaintained but they still work so whatever.
  maybe someone wants to replace topojson with geojson :V make sure it's not bloated!

- react@19: blocked by https://github.com/zcreativelabs/react-simple-maps/issues/367

- sharp: necessary for generating small (fast) webp images because next.js' default image loader doesn't work in export mode https://nextjs.org/docs/app/building-your-application/deploying/static-exports#unsupported-features ("Image Optimization with the default loader") and i don't know if custom loaders would work out or make sense

- @types/...: i don't think the remaining ones can easily be removed. next.js wants to type-check when exporting and also VSCode will try to check typescript code, so it will probably be more painful to remove these than it's worth.

- react-simple-maps: map component. allows to load highly optimized geojson (P+ website gets this from a TopoJSON file which gets optimized and converted to geojson) which allows for a very distraction free map that only has the country/continent borders for general orientation and all the interactive custom items go on top.
  - feb 2026: react-simple-maps hasn't been updated in a while and is blocking updating to react v19 :(

### To-Do

- link to plusside event calendar
- "edit this page" floating button that links to source file on github
- https://pmunofficial.com/en/characters
