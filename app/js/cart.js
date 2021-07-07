// --- INPUTS VALUE (cart-info) ---

document.addEventListener("click", (function (e) {
    if (e.target.classList.contains("cart-item__count-btn--plus")) {
        ++e.target.parentElement.querySelector("input").value;
    } else {
        if (e.target.classList.contains("cart-item__count-btn--minus") && e.target.parentElement.querySelector("input").value > 1) {
            --e.target.parentElement.querySelector("input").value;
        }
    }
}));

// --- MODAL WINDOWS (cart-info) ---

const popupTriggerCalc = document.querySelector(".info-cart__order-button--calc"),
    popupTriggerMail = document.querySelector(".info-cart__order-button--mail"),
    popupCalc = document.querySelector(".modal-calc"),
    popupMail = document.querySelector(".modal-mail"),
    popupCalcFinish = document.querySelector(".modal-calc-finish"),
    popupMailFinish = document.querySelector(".modal-mail-finish"),
    popupCalcSend = document.querySelector(".cart-modal__button--calc"),
    popupMailSend = document.querySelector(".cart-modal__button--mail");

function openModal(btn, modal) {
    btn.addEventListener("click", e => {
        e.preventDefault();
        modal.classList.toggle("opened");
        document.body.style.overflow = "hidden";
    });
}

function closeModal(modal) {
    modal.classList.remove("opened");
    document.body.style.overflow = "";
}

function close(modal) {
    modal.querySelector("[data-close]").addEventListener("click", btn => {
        btn.preventDefault();
        closeModal(modal);
    });

    modal.addEventListener("click", btn => {
        if (btn.target === modal) {
            closeModal(modal);
        }
    });

    document.addEventListener("keydown", (btn) => {
        if (btn.code === 'Escape' && modal.classList.contains("opened")) {
            closeModal(modal);
        }
    });
}

function openSecondModal(btn, secondModal, firstModal) {
    btn.addEventListener("click", e => {
        e.preventDefault();
        secondModal.classList.toggle("opened");
        firstModal.classList.toggle("opened");
        document.body.style.overflow = "hidden";
    });
}

openModal(popupTriggerCalc, popupCalc);
openModal(popupTriggerMail, popupMail);
close(popupCalc);
close(popupMail);
close(popupCalcFinish);
close(popupMailFinish);
openSecondModal(popupCalcSend, popupCalcFinish, popupCalc);
openSecondModal(popupMailSend, popupMailFinish, popupMail);
