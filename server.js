const express = require("express"),
  app = express(),
  port = 3000,
  path = require("path"),
  sass = require("node-sass"),
  fs = require("fs")

app.set("view engine", "pug")

const basedir = path.join(__dirname, "/src")
app.set("views", basedir)
app.locals.basedir = basedir

app.get("*", (req, res) => {
  const folders = req.originalUrl.split("/").filter(v => v !== "")

  const fileName = folders[0] ? folders.slice(-1)[0] : ""

  if (fileName.endsWith(".css")) {
    handleCSS(res, folders)
    return
  }

  if (!fileName.includes(".")) {
    // handlePug
    res.render( path.join(...folders, "index") )
    return
  }

  // other files
  const fileOnServer = path.join("src", ...folders)
  fs.readFile(fileOnServer, (err, data) => {
    if (err) {
      if (err.code !== "ENOENT") throw err

      res.sendStatus(404)
      return
    }

    res.send(data)
  })
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port} !`)
})

const handleCSS = (res, folders) => {
  res.setHeader("Content-Type", "text/css")

  const cssPath = path.parse( path.join(...folders) )

  const sassDir = path.join("src", cssPath.dir)
  const sassPath = path.join(sassDir, cssPath.name + ".scss")

  fs.readFile(sassPath, (err, data) => {
    if (err) {
      if (err.code !== "ENOENT") throw err

      fs.readFile(path.join("src", ...folders), (err2, data) => {
        if (err2) throw err2

        res.send(data)
      })

      return
    }

    sass.render({
      data: data.toString(),
      includePaths: [sassDir]
    }, (err2, result) => {
      if (err2) console.error(err2)

      res.send(result.css)
    })
  })
}