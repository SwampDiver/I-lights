// --- SLIDER ---

new Swiper('.slider-banner-main__container', {
    navigation: {
        nextEl: '.banner-main__slider-toggle--next',
        prevEl: '.banner-main__slider-toggle--prev'
    },
    scrollbar: {
        el: '.slider-banner-main__scrollbar',
        draggable: true
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },

    speed: 800,
});
