const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 60,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  direction: "horizontal",
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  

  // Navigation arrows
  navigation: {
    nextEl: ".nextt",
    prevEl: ".pree",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    656: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
