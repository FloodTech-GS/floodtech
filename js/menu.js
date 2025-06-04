const btnMobile = document.getElementById("btn-mobile");

function toggleMenu () {
    const nav = document.getElementById("nav");
    nav.classList.toggle('active')
    const header = document.getElementById("header");
    header.classList.toggle('active-header')
}

btnMobile.addEventListener("click", toggleMenu)