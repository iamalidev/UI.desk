"use strict";

const burgerBetween = document.querySelector(".header-top_burgerMenu__between");
const burgerBottom = document.querySelector(".header-top_burgerMenu__bottom");
const mobileMenuOrderBtn = document.querySelector(".mobile-menu_body__btn");
const burgerTop = document.querySelector(".header-top_burgerMenu__top");
const orderBtn = document.querySelector(".header-top_order-button");
const modalClose = document.querySelector(".modal-top_closebtn");
const burger = document.querySelector(".header-top_burgerMenu");
const mobileMenu = document.querySelector(".mobile-menu");
const bgFon = document.querySelector(".bg-fon");
const modal = document.querySelector(".modal");
const bannerTitle = document.querySelector(".header-banner_texts-title").innerHTML;



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

class typing {
    constructor(option) {
        this.title = document.querySelector(option.title);
        this.delay = option.delay;
        this.interval = option.interval;

        this.text = this.title.innerHTML.trim();
        this.title.innerHTML = "";
        setTimeout(() => {
            this.write();
        }, this.delay);
    }

    write(i = 0) {
        this.title.innerHTML += this.text[i];
        i++;
        if (i < this.text.length) {
            setTimeout(() => {
                this.write(i);
            }, this.interval);
        }
    }
}

new typing({
    title: ".header-banner_texts-text",
    delay: 100,
    interval: 20,
});