let controlClass = 'drop-right-menu__control'

let blurClass = 'drop-right-menu__element-to-blur--blurred'
let elementToBlurClass = 'drop-right-menu__element-to-blur'
let elementToBlur = document.querySelector(`.${elementToBlurClass}`)

let menuClass = 'drop-right-menu'
let menuClosedClass = 'drop-right-menu--closed'
let menu = document.querySelector(`.${menuClass}`)

let controls = document.querySelectorAll(`.${controlClass}`)

controls.forEach(function (el) {
  el.addEventListener('click', function (evt) {
    elementToBlur.classList.toggle(blurClass)
    menu.classList.toggle(menuClosedClass)
  })
})
