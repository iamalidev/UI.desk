"use strict";

const mobileMenu = document.querySelector(".mobileMenu");
const burger = document.querySelector(".header-top_burgerMenu");

burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});