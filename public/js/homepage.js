window.addEventListener ('DOMContentLoaded', () => {
  console.log('Hello World');
});
const swiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
console.log(swiper);
// Now you can use all slider methods like
// swiper.slideNext();