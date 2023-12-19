export function initDropMenu(object) {
  function blurCloseFunction(evt) {
    if (evt.skipThisClick) {
      return
    }

    if (evt.target.closest(`.${menuObeject.menuClass}`)) {
      return
    }

    menuObeject.close()
  }

  let menuObeject = {
    blurClass: object.blurClass,
    menuClosedClass: 'drop-menu--closed',
    elementToBlur: document.querySelector(`.${object.elementToBlurClass}`),
    menu: document.querySelector(`.${object.menuClass}`),
    controls: document.querySelectorAll(`.${object.controlClass}`),
    menuClass: object.menuClass,

    close: function () {
      this.menu.classList.add(this.menuClosedClass)
      this.elementToBlur.classList.remove(this.blurClass)
      this.elementToBlur.removeEventListener('click', blurCloseFunction)
      this.state = false
    },

    open: function () {
      this.menu.classList.remove(this.menuClosedClass)
      this.elementToBlur.classList.add(this.blurClass)
      this.state = true
      this.elementToBlur.addEventListener('click', blurCloseFunction)
    },

    toggle: function () {
      console.log('this', this)
      if (this.state) {
        this.close()
        return
      }

      this.open()
    },

    state: false
  }

  function closeAnother(menu) {
    if (window.drop_menus) {
      window.drop_menus.forEach(function (element) {
        if (element.state && element !== menu) {
          element.close()
        }
      })
    }
  }

  menuObeject.controls.forEach(function (element) {
    element.addEventListener('click', function (evt) {
      closeAnother(menuObeject)
      menuObeject.toggle()
      evt.skipThisClick = true
    })
  })

  if (!window.drop_menus) {
    window.drop_menus = []
    window.drop_menus.push(menuObeject)
  } else {
    window.drop_menus.push(menuObeject)
  }
}

export default {}
