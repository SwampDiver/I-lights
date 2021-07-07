// --- TABS (info-delivery) ---

const deliveryBtns = document.querySelectorAll(".info-delivery__button"),
    deliveryInfo = document.querySelectorAll(".info-delivery__wrapper"),
    media991 = window.matchMedia("(max-width: 991px)");
let tabName = null;

function selectTabContentDelivery() {
    deliveryInfo.forEach(e => {
        if (e.classList.contains(tabName)) {
            e.classList.add("menu-wrapper--active");
        } else {
            e.classList.remove("menu-wrapper--active");
        }
    });
}

deliveryBtns.forEach(e => {
    e.addEventListener("click", e => {
        if (media991.matches) {
            e.target.classList.toggle("menu-button--active");
        } else {
            deliveryBtns.forEach(e => {
                e.classList.remove("menu-button--active");
            });
            e.target.classList.add("menu-button--active");
            tabName = e.target.getAttribute("data-delivery-tab-name");
            selectTabContentDelivery(tabName);
        }
    });
});
