## waffeln's destroy-all-code update version (2025-01-17):

this updated is almost a full rewrite aside from the content itself.
it's lots of housekeeping, paying off tech-debt, and making the project a lot simpler.

### features

-   for developers:
    -   70% less dependencies (from ~65 to 20)
    -   all remaining dependencies fully updated
    -   all code updated according to dependency upgrade/migration guides
    -   various deprecation warnings gone thanks to updated dependencies
    -   30% less lines of source code (~6000 to ~4300 SLOC)
    -   source code is easier to understand
    -   flatter and simpler file structure
    -   no javascript left, everything is typescript now
    -   removed custom webpack topojson loader, server components allow client-JS-less SSR
    -   CommonJS is fully gone, everything is ES modules now (all `require` replaced with `import`)
    -   faster hot reloading in development due to less stuff in general
    -   migrated from next.js pages router to app router
    -   add documentation for remaining dependencies (their role in the project / why they are needed)
    -   remove a lot of tooling that probably just gets in the way (e.g. eslint, axe, husky, ...)
-   for users:
    -   website loads and navigates a bit faster, more noticeable on slow device
    -   a few usability bugs are fixed

### things that got removed

-   several website feature with low usage or high complexity
    -   copying links to FAQ entries, specifiy changes, or specific communities
    -   livestreams page
    -   others
-   development: FAQ is no longer written in markdown

### things that may have regressed to some degree or might contain bugs

(i tried to keep a balance between project size and this stuff):

-   remaining website features
-   accessbility
-   search engine optimisation (SEO)
-   highly customised design (basically all CSS code is rewritten and might contain styling issues)
-   mobile layout / responsive design
