// --- TABS (info-services) ---

const servicesBtns = document.querySelectorAll(".info-services__button"),
    servicesInfo = document.querySelectorAll(".info-services__wrapper"),
    media991 = window.matchMedia("(max-width: 991px)");
let tabName;

function selectTabContentServices() {
    servicesInfo.forEach(t => {
        if (t.classList.contains(tabName)) {
            t.classList.add("info-services__wrapper--active");
        } else {
            t.classList.remove("info-services__wrapper--active");
        }
    });
}

servicesBtns.forEach(t => {
    t.addEventListener("click", t => {
            if (media991.matches) {
                t.target.classList.toggle("info-services__button--active");
            } else {
                servicesBtns.forEach(t => {
                    t.classList.remove("info-services__button--active");
                });
                t.target.classList.add("info-services__button--active");
                tabName = t.target.getAttribute("data-services-tab-name");
                selectTabContentServices(tabName);
        }
    });
});


// --- TABS (solutions) ---

const solutionsBtns = document.querySelectorAll(".solutions__button"),
    solutionsImages = document.querySelectorAll(".solutions__img");

function selectTabContentSolutions() {
    solutionsImages.forEach(t => {

        if (t.classList.contains(tabName)) {
            t.classList.add("solutions__img--active");
        } else {
            t.classList.remove("solutions__img--active");
        }
    });
}

solutionsBtns.forEach(t => {
    t.addEventListener("click", t => {
        solutionsBtns.forEach(t => {
            t.classList.remove("solutions__button--active");
        });
        t.target.classList.add("solutions__button--active");
        tabName = t.target.getAttribute("data-services-tab-name");
        selectTabContentSolutions(tabName);
    });
});
