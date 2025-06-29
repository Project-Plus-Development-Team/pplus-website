# changelog details

_this document ***complements*** the git commit history and does not replace it. see the git commit history for full changelog, this document is for large commit details._

## 2025-02-04 easter egg and responsive character selection screen

- refactor project-wave easter egg
  - this easter egg used to use tricks like `<link>` insertion and obfuscated strings to be hard to spot when checking website source code
  - these measures made the code more complicated than it needed to be and also went against common react and next.js practices
  - these measures only had an effect during the time the easter egg was published but the public repository was not updated yet
  - this update undoes most of those measures, reducing complexity, embracing standards and common practices (with next.js/react), and needs fewer lines of code
  - the easter egg also got changed a little bit (don't check the commit details / diff if you want to find it yourself)
- replace the current "Character communities" (CSS) responsive design with [banchouboo's](https://banchouboo.neocities.org/) implementation (thanks a lot!)
  - first implementation by me used client-side JS to query the viewport and change the layout (very bad, fixed in previous update)
  - second implementation by me used three react components which would get `display: visible` through media queries (better, but still needs 3x the HTML when exported)
  - third implementation by banchouboo uses CSS grid with `grid-template-columns`, `grid-column` and `transform: translateX(...)` and i'm still about 80% sure that CSS grid is some dark magic f\*ckery that i'll never understand but i'm happy that it works 🙌
  - this new implementation doesn't need any "duplicate" HTML like before but needs a bit more CSS / SCSS which i was able to compensate by removing other CSS that had no or little impact, so bottom line the current implementation needs less code and is more lightweight
- minor improvements like showing good error messages when env vars are missing

## 2025-01-17 waffeln's destroy-all-code update version

this updated is almost a full rewrite aside from the content itself.
it's lots of housekeeping, paying off tech-debt, and making the project a lot simpler.

### features

- for developers:
  - 70% less dependencies (from ~65 to 20)
  - all remaining dependencies fully updated
  - all code updated according to dependency upgrade/migration guides
  - various deprecation warnings gone thanks to updated dependencies
  - 30% less lines of source code (~6000 to ~4300 SLOC)
  - source code is easier to understand
  - flatter and simpler file structure
  - no javascript left, everything is typescript now
  - removed custom webpack topojson loader, server components allow client-JS-less SSR
  - CommonJS is fully gone, everything is ES modules now (all `require` replaced with `import`)
  - faster hot reloading in development due to less stuff in general
  - migrated from next.js pages router to app router
  - add documentation for remaining dependencies (their role in the project / why they are needed)
  - remove a lot of tooling that probably just gets in the way (e.g. eslint, axe, husky, ...)
- for users:
  - website loads and navigates a bit faster, more noticeable on slow device
  - a few usability bugs are fixed

### things that got removed

- several website feature with low usage or high complexity
  - copying links to FAQ entries, specifiy changes, or specific communities
  - livestreams page
  - others
- development: FAQ is no longer written in markdown

### things that may have regressed to some degree or might contain bugs

(i tried to keep a balance between project size and this stuff):

- remaining website features
- accessbility
- search engine optimisation (SEO)
- highly customised design (basically all CSS code is rewritten and might contain styling issues)
- mobile layout / responsive design
