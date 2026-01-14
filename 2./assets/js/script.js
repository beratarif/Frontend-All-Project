var bannerSwiper = new Swiper(".banner-swiper", {
  slidePerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  fadeEffect: {
    crossFade: true,
  },
});
