// --- TABS (about-info) ---

const aboutBtns = document.querySelectorAll(".info-about__button"),
    aboutInfo = document.querySelectorAll(".info-about__wrapper"),
    media991 = window.matchMedia("(max-width: 991px)");
let tabName;

function selectTabContentAbout() {
    aboutInfo.forEach(t => {
        if (t.classList.contains(tabName)) {
            t.classList.add("menu-wrapper--active");
        } else {
            t.classList.remove("menu-wrapper--active");
        }
    });
}

aboutBtns.forEach(t => {
    t.addEventListener("click", t => {
        if (media991.matches) {
            t.target.classList.toggle("menu-button--active");
        } else {
            aboutBtns.forEach(t => {
                t.classList.remove("menu-button--active");
            });
            t.target.classList.add("menu-button--active");
            tabName = t.target.getAttribute("data-about-tab-name");
            selectTabContentAbout(tabName);
        }
    });
});

// --- TABS (about-solutions) ---

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
            }),
            t.target.classList.add("solutions__button--active");
            tabName = t.target.getAttribute("data-about-tab-name");
            selectTabContentSolutions(tabName);
    });
});
