const swiper = new Swiper('.slider',{
    direction: 'horizontal',
    pagination: {
        el: '.slider__scroll',
        clickable: true,
    },
    init: false,
    slideClass: "deviece-card",
    slidesPerView: 'auto',
    spaceBetween: '16px',
});

if(window.innerWidth < 768){
    swiper.init();
}

window.addEventListener('resize', function(){
    if(window.innerWidth < 768){
        swiper.init();
        return;
    }

    swiper.destroy();
});