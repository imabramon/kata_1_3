let swipperClass = '.slider';
let swiperSettings = {
    direction: 'horizontal',
    pagination: {
        el: '.slider__scroll',
        clickable: true,
    },
    init: false,
    slideClass: "deviece-card",
    slidesPerView: 'auto',
    spaceBetween: '16px',
};

let swiper = new Swiper(swipperClass,swiperSettings);

if(window.innerWidth < 768){
    swiper.init();
}

window.addEventListener('resize', function(){
    if(window.innerWidth < 768){
       if(swiper.destroyed !== true){
        return;
       }

        swiper = new Swiper(swipperClass, swiperSettings);
        swiper.init();
        console.log("swipper init");
        return;
    }

    if(swiper.destroyed !== true){
        swiper.destroy(true, true);
        console.log(swiper);
        console.log("swipper destroy");
    }
});