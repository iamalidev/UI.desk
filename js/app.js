"use strict";

const mobileMenu = document.querySelector(".mobile-menu");
const burger = document.querySelector(".header-top_burgerMenu");
const burgerTop = document.querySelector(".header-top_burgerMenu__top");
const burgerBetween = document.querySelector(".header-top_burgerMenu__between");
const burgerBottom = document.querySelector(".header-top_burgerMenu__bottom");
const bgFon = document.querySelector(".bg-fon");
const orderBtn = document.querySelector(".header-top_order-button");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-top_closebtn");
const mobileMenuOrderBtn = document.querySelector(".mobile-menu_body__btn");


burger.addEventListener("click", (e) => {
    e.stopPropagation()
    mobileMenu.classList.toggle("open");
    burgerBetween.classList.toggle("hide");
    burgerTop.classList.toggle("rotate");
    burgerBottom.classList.toggle("rotate");
    bgFon.classList.toggle("show");
    document.body.addEventListener("click", () => {
        if (mobileMenu.classList.contains("open")) {
            mobileMenu.classList.remove("open");
            burgerBetween.classList.remove("hide");
            burgerTop.classList.remove("rotate");
            burgerBottom.classList.remove("rotate");
            bgFon.classList.remove("show");
        }
    })
});

mobileMenu.addEventListener("click", (e) => {
    e.stopPropagation()
})

orderBtn.addEventListener("click", () => {
    modal.classList.add("open");
    bgFon.classList.add("show");
})

mobileMenuOrderBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open")
    modal.classList.add("open");
    bgFon.classList.add("show");
})

modalClose.addEventListener("click", () => {
    modal.classList.remove("open");
    bgFon.classList.remove("show");
})