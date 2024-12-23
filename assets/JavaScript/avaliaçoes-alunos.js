const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    grabCursor: true,
  
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768:{
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024:{
          slidesPerView: 3,
          spaceBetween: 40
        }
      },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });