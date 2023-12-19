export function initDropMenu(object) {
  // let menuClosedClass = 'drop-menu--closed'
  // let elementToBlur = document.querySelector(`.${object.elementToBlurClass}`)
  // let menu = document.querySelector(`.${object.menuClass}`)
  // let controls = document.querySelectorAll(`.${object.controlClass}`)

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

  // function toggleCurrentMenu(menu) {
  //   let flag = false

  //   function func() {
  //     if (flag) {
  //       window.currentOpennedMenu = undefined
  //       flag = false
  //       return
  //     }

  //     window.currentOpennedMenu = menu
  //     flag = true
  //   }

  //   return func
  // }

  // let thisMenuToggle = toggleCurrentMenu(object.menuClass)

  // function toggleState(evt) {
  //   elementToBlur.classList.toggle(object.blurClass)
  //   menu.classList.toggle(menuClosedClass)
  //   thisMenuToggle()
  // }

  // function blurCloseFunction(evt) {
  //   if (evt.skipThisClick) {
  //     return
  //   }

  //   if (evt.target.closest(`.${object.menuClass}`)) {
  //     return
  //   }

  //   if (evt.currentTarget.classList.contains(object.blurClass)) {
  //     toggleState()
  //   }
  // }

  // controls.forEach(function (el) {
  //   el.addEventListener('click', function (evt) {
  // let isCurrentMenuOpenned = window.currentOpennedMenu === object.menuClass
  // let isAnyMenuOpensBefore = !window.currentOpennedMenu
  // if (!isCurrentMenuOpenned && !isAnyMenuOpensBefore) {
  //   return evt
  // }
  // toggleState()
  // evt.skipThisClick = true
  // if (elementToBlur.classList.contains(object.blurClass)) {
  //   elementToBlur.addEventListener('click', blurCloseFunction)
  // } else {
  //   elementToBlur.removeEventListener('click', blurCloseFunction)
  // }
  //   })
  // })
}

export default {}
