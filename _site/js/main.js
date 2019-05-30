document.addEventListener("DOMContentLoaded", () => {
  let burgers = document.querySelectorAll(".navbar-burger")
  burgers = Array.prototype.slice.call(burgers, 0)

  if (burgers.length > 0) {
    burgers.forEach(el => {
      el.addEventListener("click", () => {
        let target = el.dataset.target
        target = document.getElementById(target)

        el.classList.toggle("is-active")
        target.classList.toggle("is-active")
      })
    })
  }
})