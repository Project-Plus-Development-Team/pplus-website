import parseData from "./parseData.js"
import generateHTML from "./generateHTML.js"

const update = () => {
  console.clear()

  const ta = document.getElementsByTagName("textarea")[0]
  const characters = parseData(ta.value)

  
  const html = generateHTML(characters)
  console.log("html", html)
  document.getElementById("result").replaceWith(html)
  

  console.log(JSON.stringify(characters, null, 2))
}

document.getElementsByTagName("textarea")[0].onkeyup = update
document.addEventListener("DOMContentLoaded", update)

window.onerror = (msg, url, linenumber) => {
  alert(`Error: ${msg}\nURL: ${url}\nLine Number: ${linenumber}`)
}