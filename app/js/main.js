// --- TABS + ACCORDION (catalog-main) ---

const catalogSection = document.querySelectorAll(".accordion-catalog-main__item"),
    catalogImage = document.querySelectorAll(".catalog-main__img");
let tabName = null;

function addActive() {
    if (window.matchMedia("(max-width: 639px)").matches) {
        catalogSection.forEach(a => {
            a.classList.remove("accordion-catalog-main__item--active");
        });
        catalogImage.forEach(a => {
            a.classList.remove("catalog-main__img--active");
        });
    } else {
        catalogSection[0].classList.add("accordion-catalog-main__item--active");
    }
}

function selectTabContent() {
    catalogImage.forEach(a => {
        if (a.classList.contains(tabName)) {
            a.classList.add("catalog-main__img--active");
        } else {
            a.classList.remove("catalog-main__img--active");
        }
    });
}

addActive();

catalogSection.forEach(a => {
    a.addEventListener("click", a => {
        catalogSection.forEach(a => {
            a.classList.remove("accordion-catalog-main__item--active");
        });
        let t = a.target.closest(".accordion-catalog-main__item");
        t.classList.add("accordion-catalog-main__item--active");
        tabName = t.getAttribute("data-main-tab-name");
        selectTabContent(tabName);
    });
});

// --- ACCORDION (services-main) ---

const servicesSection = document.querySelectorAll(".accordion-services-main__item");
servicesSection.forEach(a => {
    a.addEventListener("click", () => {
        a.classList.toggle("accordion-services-main__item--active");
    });
});

// --- DOWNLOADS LIST BLUR (services-main) ---

const downloadWindow = document.querySelector(".downloads-main__content-wrapper"),
    blurArea = downloadWindow.querySelector(".downloads-main__blur");

function removeBlur() {
    if (downloadWindow.scrollTop > 0) {
        blurArea.classList.add("downloads-main__blur--remove");
    } else {
        blurArea.classList.remove("downloads-main__blur--remove");
    }
}

downloadWindow.addEventListener("scroll", removeBlur);
