import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

Swiper.use([Navigation, Pagination])

export function makeSlider(settings) {
  window.addEventListener('DOMContentLoaded', function () {
    Swiper.use([Pagination])
    let swipperClass = `.${settings.swipperClass}`
    let swiperSettings = {
      direction: 'horizontal',
      pagination: {
        el: `.${settings.sliderPagination}`,
        clickable: true
      },
      init: false,
      slideClass: `${settings.sliderCard}`,
      slidesPerView: 'auto',
      spaceBetween: '16px'
    }

    let swiper = new Swiper(swipperClass, swiperSettings)

    if (window.innerWidth < 768) {
      swiper.init()
    } else {
      swiper = undefined
    }

    window.addEventListener('resize', function () {
      if (window.innerWidth < 768) {
        if (swiper === undefined) {
          swiper = new Swiper(swipperClass, swiperSettings)
          swiper.init()
          return
        }

        return
      }

      if (swiper !== undefined) {
        swiper = destroySwipper(swiper)
      }
    })

    function destroySwipper(swiper) {
      swiper.destroy(true, true)
      swiper = undefined
      return swiper
    }
  })
}

export default {}
