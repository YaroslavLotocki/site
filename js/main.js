
let swiper = new Swiper(".review-gallery", {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      758: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1025: {
        slidesPerView: 2,
        spaceBetween: 70,
      },
      1536: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
      },
  });