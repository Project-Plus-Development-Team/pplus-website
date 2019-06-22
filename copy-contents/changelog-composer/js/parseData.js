import {parseChange, leadingSpaces} from "./functions.js"

export default text => {
  const c = [] // characters array

  for (const line of text.split("\n")) {
    if (line.trim().length === 0) continue

    const lc = c.length - 1 // last character pointer
    let lm = 0
    if (c[lc]) lm = c[lc].moves.length - 1 // last move pointer

    if (leadingSpaces(line) === 0) {
      c.push({
        name: line.trim(),
        changes: [],
        moves: []
      })

      continue
    }

    if (!c.length) continue // ignore this line if there's no character in c yet

    if (leadingSpaces(line) === 2) {
      if (line.trim().startsWith("{")) { // if it's a change
        c[lc].changes.push(parseChange(line))
        continue
      }

      c[lc].moves.push({
        title: line.trim(),
        changes: []
      })

      continue
    }
    
    if (!c[lc].moves.length) continue // ignore this line if there are no moves yet

    if (leadingSpaces(line) === 4) {
      if (line.trim().startsWith("{")) { // if it's a change
        c[lc].moves[lm].changes.push(parseChange(line))
        continue
      }

      console.log("c[lc].moves", c[lc].moves)
      c[lc].moves[lm].changes.push({
        title: line.trim()
      })

      continue
    }
  }

  return c
}