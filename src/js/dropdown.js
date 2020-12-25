new ClipboardJS("a.fa-link", {
  text: el => encodeURI(window.location.origin + window.location.pathname + "#" + el.dataset.clipboardText)
})

/**
 * @param {HTMLElement?} source
 * @param {string} target
 */
const toggleFold = (source, target) => {
  const targetEl = document.querySelector(`[data-fold="${target}"]`)
  if (!targetEl) {
    console.log(target)
    return
  }

  const isFolded = targetEl.style.getPropertyValue("display") === "none"

  if (isFolded) {
    targetEl.style.setProperty("display", "")
    
    if (source) {
      source.classList.add("open")
    }
  } else {
    targetEl.style.setProperty("display", "none")
    
    if (source) {
      source.classList.remove("open")
    }
  }
}

const dropDownElements = document.querySelectorAll(".dropdown")

for (const element of dropDownElements) {
  element.addEventListener("click", () => {
    toggleFold(element, element.dataset.target)
  })
}

if (window.location.hash) {
  const pathString = decodeURI(window.location.hash).substr("1")

  const version = pathString.split("#")[0]
  const title = document.querySelector(`[data-version='${version}']`)
  toggleFold(title, version)

  const characterTitle = document.querySelector(`[data-fold='${pathString}']`)
  toggleFold(characterTitle, pathString)
}