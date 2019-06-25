import {parseChange, leadingSpaces, parseHeading} from "./functions.js"

const isHeading = str => [0, 1].includes(str.trim().indexOf("^")) // the ^ can only be at pos 0 or pos 1 with a type before it

export default text => {
  const characters = [] // characters array

  for (const line of text.split("\n")) {
    if (line.trim().length === 0) continue // if no content or just whitespaces / tabs / empty line whatever

    const lastCharacter = characters[characters.length-1]
    const lastMove = lastCharacter && lastCharacter.moves[lastCharacter.moves.length - 1]
    const lastChange = lastMove && lastMove.changes && lastMove.changes[lastMove.changes.length - 1]
    const lastSub = lastChange && lastChange.sub && lastChange.sub[lastChange.sub.length - 1]
    
    
    if (leadingSpaces(line) === 0) {
      characters.push({
        name: line.trim(),
        changes: [],
        moves: []
      })

      continue
    }

    if (!lastCharacter) continue
    // ignore this line if there's no character in c yet

    if (leadingSpaces(line) === 2) {
      if (isHeading(line)) {
        lastCharacter.moves.push(
          parseHeading(line, "changes")
        )
      } else {
        lastCharacter.changes.push(
          parseChange(line)
        )
      }

      continue
    }
    
    if (!lastMove || lastMove.changes === undefined) continue
    // ignore this line if there are no moves yet or last move has no changes

    if (leadingSpaces(line) === 4) {
      if (isHeading(line)) {
        lastMove.changes.push(
          parseHeading(line, "sub")
        )
      } else {
        lastMove.changes.push(
          parseChange(line)
        )
      }

      continue
    }

    if (!lastChange || lastChange.sub === undefined) continue
    // ignore this line if there are no changes yet or the last change doesn't have sub

    if (leadingSpaces(line) === 6) {
      if (isHeading(line)) {
        lastChange.sub.push(
          parseHeading(line, "final")
        )
      } else {
        console.log(JSON.stringify(characters, null, 2))
        lastChange.sub.push(
          parseChange(line)
        )
      }

      continue
    }

    if (!lastSub || lastSub.final === undefined) continue
    // ignore this line if there are no sub-changes yet or last sub has no final

    if (leadingSpaces(line) === 8) {
      lastSub.final.push(
        parseChange(line)
      )

      continue
    }
  }

  return characters
}