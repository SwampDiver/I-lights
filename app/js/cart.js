// --- INPUTS VALUE (cart) ---

document.addEventListener('click', function (e) {
    if (e.target.classList.contains("cart-item__count-btn--plus")) {
      ++e.target.parentElement.querySelector("input").value;
    } else if (e.target.classList.contains("cart-item__count-btn--minus") && e.target.parentElement.querySelector("input").value > 1) {
      --e.target.parentElement.querySelector("input").value;
    }
  });
