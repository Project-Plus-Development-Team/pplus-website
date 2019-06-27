"use strict"

const data = require(__dirname + "\\1.05.js")

const lineArray = []

const getType = (type, concat) => {
  let typeString
  switch (type) {
    case "buff": typeString = "+" + concat; break
    case "nerf": typeString = "-" + concat; break
    case "neutral": typeString = "~" + concat; break
    default: typeString = concat === "^" ? "^" : ""
  }

  return typeString
}

for (const char of data) {
  lineArray.push(char.title.replace(":", ""))

  for (const attr of char.attributes) {
    lineArray.push("  " + attr)
  }

  for (const move of char.moves) {
    lineArray.push("  ^" + move.title.text)

    for (const change of move.changes) {
      if (!change.title) { // simple change

        const typeString = getType(change.type, "|")
        lineArray.push("    " + typeString + change.text)

      } else { // it's further nested

        const typeString = getType(change.title.type, "^")
        lineArray.push("    " + typeString + change.title.text)

        for (const subChange of change.changes) {

          const typeString = getType(subChange.type, "|")
          lineArray.push("      " + typeString + subChange.text)

        }

      }
    }
  }

  lineArray.push("")
}

const fs = require("fs")

fs.writeFileSync("./output.txt", lineArray.join("\n"))