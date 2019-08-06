const fs = require("fs")

exports.handler = (e, c, cb) => {
  
  const counter = parseInt(fs.readFileSync("./stats/downloads.txt").toString())

  const counterText = counter.toString()

  fs.writeFileSync("./stats/downloads.txt", (counter + 1).toString())

  cb(null, {
    statusCode: 200,
    body: counterText
  })
}