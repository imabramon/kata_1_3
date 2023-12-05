let swipperClass = '.slider';
let swiperSettings = {
    direction: 'horizontal',
    pagination: {
        el: '.slider__scroll',
        clickable: true,
    },
    init: false,
    slideClass: "brand-card",
    slidesPerView: 'auto',
    spaceBetween: '16px',
};

let swiper = new Swiper(swipperClass,swiperSettings);

if(window.innerWidth < 768){
    swiper.init();
}else{
    swiper = undefined;
}

window.addEventListener('resize', function(){

    if(window.innerWidth < 768){
       if(swiper === undefined){
        swiper = new Swiper(swipperClass, swiperSettings);
        swiper.init();
        return;
       }
        
        return;
    }

    if(swiper !== undefined){
        swiper =  destroySwipper(swiper);
    }
});

function destroySwipper(swiper){
    swiper.destroy(true, true);
    swiper = undefined;
    return swiper;
}