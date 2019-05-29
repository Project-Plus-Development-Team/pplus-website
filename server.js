const express = require("express"),
  app = express(),
  port = 3000,
  path = require("path"),
  sass = require("node-sass")

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "/src"))

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

  res.send("404 - Couldn't find file")
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port} !`)
})

const handleCSS = (res, folders) => {
  const cssPath = path.parse( path.join(...folders) )

  const sassPath = path.join("src", cssPath.dir, cssPath.name + ".sass")

  sass.render({
    file: sassPath
  }, (err, result) => {
    if (err) throw err

    res.setHeader("Content-Type", "text/css")
    res.send(result.css)
  })
}