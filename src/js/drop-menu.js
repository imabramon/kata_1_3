export function initDropMenu(object) {
  let menuClosedClass = 'drop-menu--closed'
  let elementToBlur = document.querySelector(`.${object.elementToBlurClass}`)
  let menu = document.querySelector(`.${object.menuClass}`)
  let controls = document.querySelectorAll(`.${object.controlClass}`)

  controls.forEach(function (el) {
    el.addEventListener('click', function (evt) {
      elementToBlur.classList.toggle(object.blurClass)
      menu.classList.toggle(menuClosedClass)
    })
  })
}

export default {}
