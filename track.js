var nav = document.querySelector("#mobile-menu");
var menu = document.querySelector(".navbar-menu");

nav.addEventListener('click', function() {
    nav.classList.toggle("is-active");
    menu.classList.toggle("active");
})