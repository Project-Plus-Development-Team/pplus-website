const fs = require("fs"),
      fse = require("fs-extra"),
      path = require("path")
      pug = require("pug")
      sass = require("node-sass")

// render SCSS or copy CSS

;(() => {
  const items = fs.readdirSync("./src/css", {withFileTypes: true})

  for (item of items) {
    if (item.isDirectory()) continue

    if (item.name.endsWith(".scss")) {
      const scssContent = fs.readFileSync(path.join("./src/css", item.name))
      const fileName = path.parse(item.name).name
  
      const css = sass.renderSync({
        data: scssContent.toString(),
        includePaths: ["./src/css/"]
      })
  
      fs.writeFileSync("./_site/css/" + fileName + ".css", css.css)
      continue
    }

    if (item.name.endsWith(".css")) {
      const fileSource = path.join("./src/css/", item.name)
      const fileDestDir = "./_site/css/"
      const fileDestPath = path.join(fileDestDir, item.name)

      fs.mkdirSync(fileDestDir, {recursive: true})
      fs.copyFileSync(fileSource, fileDestPath)
    }
  }
})()

// copy JS and img files

;(() => {
  fse.copySync("src/js", "_site/js", {overwrite: true})
  fse.copySync("src/img", "_site/img", {overwrite: true})
})()

// render pug stuff

const ignoreFolders = ["components", "css", "js", "img"]

const parents = fs.readdirSync("./src", {withFileTypes: true})

const renderPug = (pugFile, parent) => {
  const pugPathBase = path.parse(pugFile).name
  const htmlPath = parent ? path.join("_site", parent.name || "") : "_site";
  const htmlFile = path.join(htmlPath, pugPathBase + ".html")

  const html = pug.renderFile(pugFile, {
    basedir: "./src"
  })

  fs.mkdirSync(htmlPath, {recursive: true})
  fs.writeFileSync(htmlFile, html)
}

for (parent of parents) {
  if (ignoreFolders.includes(parent.name)) continue

  if (parent.isDirectory()) {
    const here = path.join("./src", parent.name)
    const children = fs.readdirSync(here, {withFileTypes: true})

    for (child of children) {
      if (child.isDirectory()) continue
      if (!child.name.endsWith(".pug")) continue
      if (child.name == "data.pug") continue
      
      // alright chief, we got a pug file
      
      renderPug(path.join(here, child.name), parent)
    }
  }
  
  if (!parent.name.endsWith(".pug")) continue
  if (child.name == "data.pug") continue

  // alright chief, we got a pug file

  renderPug(path.join("./src", parent.name))
}

// copy /copy-contents/ to /_site/

;(() => {
  fse.copySync("copy-contents/", "_site/", {overwrite: true})
})()