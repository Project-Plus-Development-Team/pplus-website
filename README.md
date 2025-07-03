# Project+ Website

### Getting started with development

- [Install Node.js](https://nodejs.org/)
- Clone this repository
- Run `npm install` in a terminal inside the folder of the repository
- Copy `.env.example` to `.env.local` and fill it
- Run `npm run dev` for a development runtime with hot reloading or `npm run build` to build a static version of the site in the `./out/` subfolder
- **before you start committing stuff, run `git config --local include.path ../.gitconfig`** (for details, read the `.gitconfig` file)

### Used technology

- React (JavaScript UI library)
- TypeScript (JavaScript with more features like data types)
- Next.js (meta-framework for React)
- Bulma (CSS component library)
- Netlify (static website host)

**Next.js is basically our "backend". It manages the logical (not visual) structure of the site, where which files go, how pages link to each other fluently and it also turns our site into static HTML, CSS and JavaScript that we can host with Netlify.**

#### Misc dependency notes

- sass: hard dependency to customize bulma properly and to not have bloated CSS

- topojson-client, topojson-server: help parsing, transforming (trimming) and "compressing" (quantizing) the topojson file for the world map.
  i've tried replacing these dependencies but while the client is doable, the server is not worth the hassle.
  these dependencies are long unmaintained but they still work so whatever.
  maybe someone wants to replace topojson with geojson :V make sure it's not bloated!

- react@19: blocked by https://github.com/zcreativelabs/react-simple-maps/issues/367

- sharp: necessary for generating small (fast) webp images because next.js' default image loader doesn't work in export mode https://nextjs.org/docs/app/building-your-application/deploying/static-exports#unsupported-features ("Image Optimization with the default loader") and i don't know if custom loaders would work out or make sense

- @types/...: i don't think the remaining ones can easily be removed. next.js wants to type-check when exporting and also VSCode will try to check typescript code, so it will probably be more painful to remove these than it's worth.

- react-simple-maps: map component. allows to load highly optimized geojson (P+ website gets this from a TopoJSON file which gets optimized and converted to geojson) which allows for a very distraction free map that only has the country/continent borders for general orientation and all the interactive custom items go on top.

#### To-Do

- link to plusside event calendar
- "edit this page" floating button that links to source file on github
- https://pmunofficial.com/en/characters
