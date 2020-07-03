$(document).ready(function () {
  $('.main-team__content').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows:false,
    centerMode: false,
    /*fade: true,
    cssEase: 'linear',*/
    autoplay: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

        autoplaySpeed: 1000
      }
    }]
  });
});




/**menuuuu */
console.clear();

const app = (() => {
  let body;
  let menu;
  let menuItems;

  const init = () => {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.nav__list-item');

    applyListeners();
  };

  const applyListeners = () => {
    menu.addEventListener('click', () => toggleClass(body, 'nav-active'));

  };

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass))
      element.classList.remove(stringClass); else

      element.classList.add(stringClass);
  };

  init();
})();
/**menuuuu */


$(function () {
  'use strict'

  $('.nav__list-item').on('click', function () {
    $('body').removeClass('nav-active')
  })
})


$(function (){
  $(window).scroll(function(){
     if ($(this).scrollTop() > 1950) {
      $('.bg_animate').addClass("azul");
     } else {
      $(".bg_animate").removeClass("azul");
     }
  });
});

