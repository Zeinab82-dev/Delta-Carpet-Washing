const bodyEl = document.querySelector("body");
const headerEl = document.querySelector(".header");
const backToTopButtonEl = document.querySelector(".top-btn-box");
// <<< Mobile Menu Elements >>>
const mobileMenuEl = document.querySelector(".mobile-menu");
const mobileMenuItem = document.querySelectorAll(".mobile-menu-item");
const openMenuButtonEl = document.querySelector(".menu-btn");
const closeMenuButtonEl = document.querySelector(".close-menu-btn");
// <<< Contact Menu Elements >>>
const contactMenuButtonEl = document.querySelector(".contact-menu-container");
const contactMenuEl = document.querySelector(".contact-menu");
// <<< FAQ Elements >>>
const faqItems = document.querySelectorAll(".faq-card");





document.addEventListener("DOMContentLoaded", () => {

    // <<< AOS animations >>>
    AOS.init({
        once: true,
        duration: 900
    });

    // <<< Before After Slider >>>
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 600,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    
});


// <<< Opening the mobile menu >>>

openMenuButtonEl.addEventListener("click", () => {
    mobileMenuEl.classList.add("open-menu");
    bodyEl.classList.add("no-scroll");
    
    setTimeout(() => {
        mobileMenuEl.classList.add("overlay");
    },300);
});


// <<< Closing the mobile menu >>>

closeMenuButtonEl.addEventListener("click", () => {
    
mobileMenuEl.classList.remove("overlay");
    bodyEl.classList.remove("no-scroll");

    setTimeout(() => {
        mobileMenuEl.classList.remove("open-menu"); 
    },200);
});


// <<< Contacts Menu >>>

contactMenuButtonEl.addEventListener("click", () => {
    contactMenuEl.classList.toggle("display-contact-menu");
});


// <<< Show the "back up" button and change the header style while scrolling >>>

window.addEventListener("scroll", () => {
    
    if (window.scrollY > 600) {
        backToTopButtonEl.classList.add("display-backtotop-btn");
        contactMenuButtonEl.classList.add("display-contactmenu-btn");

        headerEl.classList.add("header-styles");
    }
    else {
        backToTopButtonEl.classList.remove("display-backtotop-btn");
        contactMenuButtonEl.classList.remove("display-contactmenu-btn");

        headerEl.classList.remove("header-styles");
    }
    
});


// <<< Closing the menu when the user selects an item >>>

mobileMenuItem.forEach(item => {
    item.addEventListener("click", () => {
        mobileMenuEl.classList.remove("open-menu");
        bodyEl.classList.remove("no-scroll");
    });
});


// <<< Opening and closing FAQ box >>>

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    const faqIcon = item.querySelector(".faq-icon-box");
  question.addEventListener("click", () => {

    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove("faq-open");
      }
    });

    item.classList.toggle("faq-open");
    faqIcon.classList.toggle("faq--icon");
      
  });
});