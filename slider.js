const swiper = new Swiper('.slider',{
    direction: 'horizontal',
    pagination: {
        el: '.slider__scroll',
        clickable: true,
    },
    slideClass: "deviece-card",
    slidesPerView: 'auto',
    spaceBetween: '16px',
});