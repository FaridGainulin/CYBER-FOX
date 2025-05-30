function initSwiperBullet() {
  const swiper = new Swiper('.swiper-bullet', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.bullet-pagination',
      clickable: true,
    },
    updateOnWindowResize: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

// function initSwiperDesktop() {
//   const swiper = new Swiper('.swiper-desktop', {
//     loop: true,
//     speed: 550,
//     effect: 'slide',
//     rewind: true,
//     slidesPerView: 1,
//     spaceBetween: 10,
//     autoplay: {
//       delay: 4000,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: '.desktop-pagination',
//       type: 'bullets',
//       clickable: true,
//     },
//     navigation: {
//       prevEl: '.button-prev',
//       nextEl: '.button-next',
//     },
//     breakpoints: {
//       200: {
//         spaceBetween: 10,
//         slidesPerView: 1,
//       },
//       768: {
//         spaceBetween: 10,
//         slidesPerView: 2,
//       },
//       1024: {
//         spaceBetween: 20,
//         slidesPerView: 2,
//       },
//       1400: {
//         spaceBetween: 20,
//         slidesPerView: 2,
//       },
//     },
//   })
// }

$(document).ready(function () {
  initSwiperBullet()
  // initSwiperDesktop()
})
