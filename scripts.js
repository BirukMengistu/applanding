var swiper = new Swiper(".mySwiper", {
    // effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    // coverflowEffect: {
    //   rotate: -5,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: false,
    // },
    slideActiveClass: "active-slide",
    breakpoints: {
        0: {
        slidesPerView: 1,
      },
        640: {
        slidesPerView: 1,
      },
      720: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
      1700: {
        slidesPerView: 7,
      },
  
    }
  });