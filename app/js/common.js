const menuBtn = document.querySelector(".icon-menu"),
    menu = document.querySelector(".nav-header");

menuBtn.addEventListener("click", e => {
    e.preventDefault();
    menuBtn.classList.toggle("icon-menu--active");
    menu.classList.toggle("nav-header--active");
    document.body.classList.toggle("lock");
});
