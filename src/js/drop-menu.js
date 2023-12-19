export function initDropMenu(object) {
  let menuClosedClass = 'drop-menu--closed'
  let elementToBlur = document.querySelector(`.${object.elementToBlurClass}`)
  let menu = document.querySelector(`.${object.menuClass}`)
  let controls = document.querySelectorAll(`.${object.controlClass}`)

  function toggleState(evt) {
    console.log('toggleState')
    elementToBlur.classList.toggle(object.blurClass)
    menu.classList.toggle(menuClosedClass)
  }

  function blurCloseFunction(evt) {
    if (evt.skipThisClick) {
      return
    }

    if (evt.currentTarget.classList.contains(object.blurClass)) {
      toggleState()
    }
  }

  elementToBlur.addEventListener('click', blurCloseFunction)

  controls.forEach(function (el) {
    el.addEventListener('click', function (evt) {
      console.log('control click')
      toggleState()
      evt.skipThisClick = true
    })
  })
}

export default {}
