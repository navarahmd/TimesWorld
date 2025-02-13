// Animation on scroll
AOS.init();


// Navbar Sticky
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(' header').addClass("fixed");
  } else {
    $('header').removeClass("fixed");
  }
  if ($(this).scrollTop() < 49) {
    $('header').removeClass("fixed");
  }
});

// Gallery js 
$(document).ready(function () {
  Fancybox.bind('[data-fancybox]', {
    // Custom options
  });
});

// Banner Slider 

$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true
});

// Promotion Slider 

$('.promo-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true
      }
    }
  ]
});


// Event  Slider 

$('.event-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true
      }
    }
  ]
});