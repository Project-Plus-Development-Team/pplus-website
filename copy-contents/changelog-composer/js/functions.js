const leadingSpaces = str => str.indexOf(str.trim())

const parseChange = str => {
  let start = str.indexOf("{") + 1
  let end = str.indexOf("}")

  return {
    type: str.substring(start, end),
    text: str.substring(end + 1).trim()
  }
}

const doc = {
  cE: n => document.createElement(n),
  qS: q => document.querySelector(q),
  qSA: q => document.querySelectorAll(q)
}

export {leadingSpaces, parseChange, doc}