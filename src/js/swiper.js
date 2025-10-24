let swiper1, swiper2, swiper3;

function initSwipers() {
  if (window.innerWidth <= 767 && !swiper1) {
    swiper1 = new Swiper('.swiper_first', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper_first .swiper-pagination',
        clickable: true,
      },
    });
  } else if (window.innerWidth > 767 && swiper1) {
    swiper1.destroy(true, true);
    swiper1 = null;
  }

  if (window.innerWidth <= 767 && !swiper2) {
    swiper2 = new Swiper('.swiper_second', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper_second .swiper-pagination',
        clickable: true,
      },
    });
  } else if (window.innerWidth > 767 && swiper2) {
    swiper2.destroy(true, true);
    swiper2 = null;
  }
  if (window.innerWidth <= 767 && !swiper3) {
    swiper3 = new Swiper('.swiper_third', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper_third .swiper-pagination',
        clickable: true,
      },
    });
  } else if (window.innerWidth > 767 && swiper3) {
    swiper3.destroy(true, true);
    swiper3 = null;
  }
}

initSwipers();
window.addEventListener('resize', initSwipers);
