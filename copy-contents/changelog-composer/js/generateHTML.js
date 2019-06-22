import {doc} from "./functions.js"

const validClasses = ["buff", "nerf", "neutral"]

const getValidClass = type => {
  if (type.length === 0) return ""

  return validClasses
    .map(c => c.indexOf(type.toLowerCase()) === 0 ? c : false)
    .filter(c => c)[0]
}

export default characters => {
  const html = document.createElement("div")
  html.id = "result"

  for (const char of characters) {
    const parent = html.appendChild(doc.cE("div"))
      
    const heading = parent.appendChild(doc.cE("h3"))
    heading.textContent = char.name


    const changeList = parent.appendChild(doc.cE("ul"))
    changeList.classList.add("changeList")

    for (const change of char.changes) {
      const li = changeList.appendChild(doc.cE("li"))
      li.textContent = change.text
      if (change.type) li.classList.add(getValidClass(change.type))
    }

    
    const moveList = parent.appendChild(doc.cE("ul"))
    moveList.classList.add("moveList")

    for (const move of char.moves) {
      const li = moveList.appendChild(doc.cE("li"))
      li.textContent = move.title

      const mChangeList = moveList.appendChild(doc.cE("ul"))
      for (const change of move.changes) {
        const subLi = mChangeList.appendChild(doc.cE("li"))
        subLi.textContent = change.text
        if (change.type) subLi.classList.add(getValidClass(change.type))
      }
    }
  }

  return html
}