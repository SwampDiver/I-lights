// --- RANGE-SLIDER (filter-catalog) ---

const powerSlider = document.querySelector(".filter-catalog__slider--power"),
    ledSlider = document.querySelector(".filter-catalog__slider--led"),
    angleSlider = document.querySelector(".filter-catalog__slider--angle"),
    priceSlider = document.querySelector(".filter-catalog__slider--price");

noUiSlider.create(powerSlider, {
    start: 190,
    connect: "lower",
    step: 5,
    tooltips: [wNumb({
        decimals: 0
    })],
    range: {
        min: [44],
        max: [432]
    }
}), noUiSlider.create(ledSlider, {
    start: 17200,
    connect: "lower",
    step: 50,
    tooltips: [wNumb({
        decimals: 0
    })],
    range: {
        min: [6110],
        max: [53820]
    }
}), noUiSlider.create(angleSlider, {
    start: 50,
    connect: "lower",
    step: 5,
    tooltips: [wNumb({
        decimals: 0
    })],
    range: {
        min: [15],
        max: [160]
    }
}), noUiSlider.create(priceSlider, {
    start: 4600,
    connect: "lower",
    step: 50,
    tooltips: [wNumb({
        decimals: 0
    })],
    range: {
        min: [2500],
        max: [10575]
    }
});

const mixer = mixitup(".catalog__items-wrapper");
