$(document).ready(() => {
  $(".owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 8,
      },
    },
  });
});
