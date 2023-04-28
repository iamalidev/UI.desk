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
const infoFoodTitle = document.querySelector(".main-info_numbers-food_animation-title");
const infoTrustedTitle = document.querySelector(".main-info_numbers-trusted_animation-title");
const infoOrderTitle = document.querySelector(".main-info_numbers-order_animation-title");
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
const subscribeBtn = document.querySelector(".main-subscribe_registration-sumbit");
const bannerBtn = document.querySelector(".header-banner_texts-btn");
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
    delay: 3100,
    interval: 20,
});


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
        freshImg.style = `transform:translateY(0);
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
        chefsImg.style = `transform:translateY(0);
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

window.addEventListener("DOMContentLoaded", () => {
    const loaderBg = document.querySelector(".loading");
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loaderBg.style.opacity = "0";
        body.style = `overflow-y: auto;`
        setTimeout(() => {
            loader.style.display = "none";
            loaderBg.style.display = "none";
        }, 500);
    }, 10);
});

window.addEventListener("scroll", function scroll() {
    if (this.scrollY > mainInfo.offsetTop - mainInfo.clientHeight) {
        let count = +infoFoodTitle.getAttribute("count");

        function rec(i = 0) {
            infoFoodTitle.innerHTML = i;
            i++;
            if (i <= count) {
                setTimeout(() => {
                    rec(i);
                }, 84);
            }
        }
        rec();
        window.removeEventListener("scroll", scroll);
    }
})

window.addEventListener("scroll", function scroll() {
    if (this.scrollY > mainInfo.offsetTop - mainInfo.clientHeight) {
        let count = +infoTrustedTitle.getAttribute("count");

        function rec(i = 0) {
            infoTrustedTitle.innerHTML = i;
            i++;
            if (i <= count) {
                setTimeout(() => {
                    rec(i);
                }, 7);
            }
        }
        rec();
        window.removeEventListener("scroll", scroll);
    }
})

window.addEventListener("scroll", function scroll() {
    if (this.scrollY > mainInfo.offsetTop - mainInfo.clientHeight) {
        let count = +infoOrderTitle.getAttribute("count");

        function rec(i = 0) {
            infoOrderTitle.innerHTML = i;
            i++;
            if (i <= count) {
                setTimeout(() => {
                    rec(i);
                }, 290);
            }
        }
        rec();
        window.removeEventListener("scroll", scroll);
    }
})


window.addEventListener("mousemove", (e) => {
    let x = e.pageX - bannerBtn.offsetLeft
    let y = e.pageY - bannerBtn.offsetTop
    bannerBtn.style.setProperty('--x', `${x}px`)
    bannerBtn.style.setProperty('--y', `${y}px`)
})

window.addEventListener("mousemove", (e) => {
    let x = e.pageX - aboutBtn.offsetLeft
    let y = e.pageY - aboutBtn.offsetTop
    aboutBtn.style.setProperty('--x', `${x}px`)
    aboutBtn.style.setProperty('--y', `${y}px`)
})

window.addEventListener("mousemove", (e) => {
    let x = e.pageX - freshBtn.offsetLeft
    let y = e.pageY - freshBtn.offsetTop
    freshBtn.style.setProperty('--x', `${x}px`)
    freshBtn.style.setProperty('--y', `${y}px`)
})

window.addEventListener("mousemove", (e) => {
    let x = e.pageX - dishesBtn.offsetLeft
    let y = e.pageY - dishesBtn.offsetTop
    dishesBtn.style.setProperty('--x', `${x}px`)
    dishesBtn.style.setProperty('--y', `${y}px`)
})

window.addEventListener("mousemove", (e) => {
    let x = e.pageX - dishesBtn.offsetLeft
    let y = e.pageY - dishesBtn.offsetTop
    dishesBtn.style.setProperty('--x', `${x}px`)
    dishesBtn.style.setProperty('--y', `${y}px`)
})