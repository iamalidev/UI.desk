"use strict";

const mobileMenu = document.querySelector(".mobile-menu");
const burger = document.querySelector(".header-top_burgerMenu");
const burgerTop = document.querySelector(".header-top_burgerMenu__top");
const burgerBetween = document.querySelector(".header-top_burgerMenu__between");
const burgerBottom = document.querySelector(".header-top_burgerMenu__bottom");
const bgFon = document.querySelector(".bg-fon");


burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});

burger.addEventListener("click", () => {
    burgerBetween.classList.toggle("hide");
});

burger.addEventListener("click", () => {
    burgerTop.classList.toggle("rotate");
});

burger.addEventListener("click", () => {
    burgerBottom.classList.toggle("rotate");
});

burger.addEventListener("click", () => {
    bgFon.classList.toggle("show");
});