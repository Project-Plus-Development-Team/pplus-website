import {doc} from "./functions.js"

const validClasses = ["buff", "nerf", "neutral"]

const getValidClass = type => {
  if (type.length === 0) return ""

  return validClasses
    .map(c => c.indexOf(type.toLowerCase()) === 0 ? c : false)
    .filter(c => c)[0]
}

export default characters => {
  const html = doc.cE("div")
  html.id = "result"

  for (const character of characters) {
    const parent = html.appendChild(doc.cE("div"))

    const heading = parent.appendChild(doc.cE("h3"))
    heading.textContent = character.name

    /* Change List */
      const changeList = parent.appendChild(doc.cE("ul"))
      changeList.classList.add("changeList")

      for (const change of character.changes) {
        const li = changeList.appendChild(doc.cE("li"))
        li.textContent = change.text
        if (change.type) li.classList.add(getValidClass(change.type))
      }
    /* Change List */

    /* Move List */
      const moveList = parent.appendChild(doc.cE("ul"))
      moveList.classList.add("moveList")

      for (const move of character.moves) {
        const moveLi = moveList.appendChild(doc.cE("li"))
        moveLi.textContent = move.title

        const changeList = moveList.appendChild(doc.cE("ul"))

        for (const change of move.changes) {
          const changeLi = changeList.appendChild(doc.cE("li"))
          if (change.type) changeLi.classList.add(getValidClass(change.type))

          if (change.text) { // is not a heading
            changeLi.textContent = change.text
          } else {
            changeLi.textContent = change.title

            const subList = changeList.appendChild(doc.cE("ul"))

            for (const sub of change.sub) {
              const subLi = subList.appendChild(doc.cE("li"))
              if (sub.type) subLi.classList.add(getValidClass(sub.type))

              if (sub.text) { // is not a heading
                subLi.textContent = sub.text
              } else {
                subLi.textContent = sub.title

                const finalList = subList.appendChild(doc.cE("ul"))

                for (const final of sub.final) {
                  const finalLi = finalList.appendChild(doc.cE("li"))
                  if (final.type) finalLi.classList.add(final.type)

                  finalLi.textContent = final.text
                }
              }
            }
          }
        }
      }
    /* Move List */
  }

  return html
}