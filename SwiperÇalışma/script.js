var bannerSwiper = new Swiper("#scaefy-swiper", {
  effect: "fade",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    988: {
      slidesPerView: 1,
      spaceBetween: 48,
    },
  },
});

document.querySelectorAll(".swiper-slide[data-background]").forEach((slide) => {
  const bg = slide.dataset.background;
  slide.style.backgroundImage = `
    linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)),
    url('${bg}')
  `;
  slide.style.backgroundSize = "cover";
  slide.style.backgroundPosition = "center";
  slide.style.backgroundRepeat = "no-repeat";
});
