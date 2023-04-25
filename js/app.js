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
const mainAbout = document.querySelector(".main-aboutus");
const aboutLeft = document.querySelector(".main-aboutus_images-left");
const aboutRight = document.querySelector(".main-aboutus_images-right");
const images = document.querySelector(".main-aboutus_images");
const aboutTitle = document.querySelector(".main-aboutus_texts-title");
const aboutText = document.querySelector(".main-aboutus_texts-text");
const aboutBtn = document.querySelector(".main-aboutus_texts-btn");
const mainInfo = document.querySelector(".main-info");
const infoMap = document.querySelector(".main-info_section-map");
const infoNotepad = document.querySelector(".main-info_section-notepad");
const infoLeaf = document.querySelector(".main-info_section-leaf");
const infoTrusted = document.querySelector(".main-info_numbers-trusted");
const infoFood = document.querySelector(".main-info_numbers-food");
const infoOrder = document.querySelector(".main-info_numbers-order");
const mainFresh = document.querySelector(".main-freshvegs");
const freshImg = document.querySelector(".main-freshvegs_images");
const freshTitle = document.querySelector(".main-freshvegs_texts-title");
const freshText = document.querySelector(".main-freshvegs_texts-text");
const freshBtn = document.querySelector(".main-freshvegs_texts-btn");
const mainChefs = document.querySelector(".main-chefs");
const chefsTitle = document.querySelector(".main-chefs_texts-title");
const chefsText = document.querySelector(".main-chefs_texts-text");
const checkboxTop = document.querySelector(".main-chefs_texts-checkboxs_top");
const checkboxBetween = document.querySelector(".main-chefs_texts-checkboxs_between");
const checkboxBottom = document.querySelector(".main-chefs_texts-checkboxs_bottom");
const chefsImg = document.querySelector(".main-chefs_image");
const mainDishes = document.querySelector(".main-dishes");
const dishesFirst = document.querySelector(".main-dishes_cards-first");
const dishesSecond = document.querySelector(".main-dishes_cards-second");
const dishesThird = document.querySelector(".main-dishes_cards-third");
const dishesBtn = document.querySelector(".main-dishes_btn");
const body = document.querySelector("body");


burger.addEventListener("click", (e) => {
    e.stopPropagation()
    mobileMenu.classList.toggle("open");
    burgerBetween.classList.toggle("hide");
    burgerTop.classList.toggle("rotate");
    burgerBottom.classList.toggle("rotate");
    bgFon.classList.toggle("show");
    pageBody.style.overflow = "hidden"
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
    body.style = `overflow-y: hidden`
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

new typing({
    title: ".main-info_text",
    delay: 200,
    interval: 10,
});
// new typing({
//     title: ".main-aboutus_texts-text",
//     delay: 1,
//     interval: 100,
// });



const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 25,
    freeMode: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


window.addEventListener("scroll", () => {
    if (window.scrollY > mainAbout.offsetTop - mainAbout.clientHeight) {
        aboutLeft.style = `transform:translateY(0);
                           opacity:1;
                           z-index:1`;
        aboutRight.style = `transform:translateY(0);
                            opacity:1;
                            z-index:1`;
        aboutTitle.style = `transform:translateX(0);
                            opacity:1;
                            z-index:1`;
        aboutText.style = `transform:translateX(0);
                           opacity:1;
                           z-index:1`;
        aboutBtn.style = `transform:translateX(0);
                          opacity:1;
                          z-index:1`;
    } else if (window.scrollY > mainInfo.offsetTop - mainInfo.clientHeight) {
        infoMap.style = `transform:translateY(0);
                         opacity:1;
                         z-index:1`;
        infoNotepad.style = `transform:translateY(0);
                             opacity:1;
                             z-index:1`;
        infoLeaf.style = `transform:translateY(0);
                          opacity:1;
                          z-index:1`;
        infoTrusted.style = `transform:translateX(0);
                            opacity:1;
                            z-index:1`;
        infoFood.style = `transform:translateX(0);
                           opacity:1;
                           z-index:1`;
        infoOrder.style = `transform:translateX(0);
                          opacity:1;
                          z-index:1`;
    }
})


window.addEventListener("scroll", () => {
    if (window.scrollY > mainFresh.offsetTop - mainFresh.clientHeight) {
        freshImg.style = `transform:translateX(0);
                          opacity:1;
                          z-index:1`;
        freshTitle.style = `transform:translateX(0);
                            opacity:1;
                            z-index:1`;
        freshText.style = `transform:translateX(0);
                           opacity:1;
                           z-index:1`;
        freshBtn.style = `transform:translateX(0);
                          opacity:1;
                          z-index:1`;
    }
})


window.addEventListener("scroll", () => {
    if (window.scrollY > mainChefs.offsetTop - mainChefs.clientHeight) {
        chefsTitle.style = `transform:translateX(0);
                            opacity:1;
                            z-index:1`;
        chefsText.style = `transform:translateX(0);
                           opacity:1;
                           z-index:1`;
        checkboxTop.style = `transform:translateX(0);
                             opacity:1;
                             z-index:1`;
        checkboxBetween.style = `transform:translateX(0);
                                 opacity:1;
                                 z-index:1`;
        checkboxBottom.style = `transform:translateX(0);
                                opacity:1;
                                z-index:1`;
        chefsImg.style = `transform:translateX(0);
                          opacity:1;
                          z-index:1`;
    }
})


window.addEventListener("scroll", () => {
    if (window.scrollY > mainDishes.offsetTop - mainDishes.clientHeight) {
        dishesFirst.style = `transform:translateY(0);
                             opacity:1;
                             z-index:1`;
        dishesSecond.style = `transform:translateY(0);
                              opacity:1;
                              z-index:1`;
        dishesThird.style = `transform:translateY(0);
                             opacity:1;
                             z-index:1`;
        dishesBtn.style = `transform:translateY(0);
                           opacity:1;
                           z-index:1`;
    }
})