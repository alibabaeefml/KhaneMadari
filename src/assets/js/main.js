$(document).ready(()=>{
  $(window).scroll(() => {
    if ($(window).scrollTop() > 80) {
      $('.navbar-div').addClass('sticky')
    } else {
      $('.navbar-div').removeClass('sticky')
    }
  });
})