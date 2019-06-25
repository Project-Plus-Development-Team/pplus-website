const leadingSpaces = str => str.indexOf(str.trim())

const getClass = type => {
  switch (type) {
    case "+":
      return "buff"
    case "-":
      return "nerf"
    case "~":
      return "neutral"
    default:
      return null
  }
}

const parseChange = str => {
  str = str.trim()

  if (str.indexOf("|") === 1 && getClass(str.charAt())) { // has a valid type
    return {
      type: getClass(str.charAt()),
      text: str.substr(2)
    }
  } else { // no type or not a valid type
    return {text: str}
  }
}

const parseHeading = (str, container) => {
  str = str.trim()

  if (str.indexOf("^") === 1 && getClass(str.charAt())) { // has a valid type
    return {
      title: str.substr(2),
      type: getClass(str.charAt()),
      [container]: []
    }
  } else { // no type or not a valid type
    return {
      title: str.startsWith("^") ? str.substr(1) : str, // if heading symbol
      [container]: [],
    }
  }
}

const doc = {
  cE: n => document.createElement(n),
  qS: q => document.querySelector(q),
  qSA: q => document.querySelectorAll(q)
}

export {leadingSpaces, parseChange, parseHeading, doc}