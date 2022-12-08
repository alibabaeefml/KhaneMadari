$(window).scroll(() => {
  let navbar_logo = `<li id="navbar-logo"> <img  src="/src/assets/images/navbar_logo.png"> <li/>`;
  if ($(window).scrollTop() > 80) {
    if (!$("#navbar-logo").length) {
      $("nav").addClass("sticky-theme");
      $(".menu").prepend(navbar_logo);
      $("#mobassheran_logo");
      $("#tabliqat_logo").attr(
        "src",
        "../assets/images/tabliqat_logo_black.png"
      );
      $("#mobasheran_logo").attr(
        "src",
        "../assets/images/mobasheran_logo_colored.png"
      );
      $("menu li::after").css("background-color","var(--navy)")
    }
  } else {
    if (navbar_logo) {
        $("nav").removeClass("sticky-theme");
      $("#navbar-logo").remove();
      $("#tabliqat_logo").attr(
        "src",
        "../assets/images/tabliqat_logo_white.png"
      );
      $("#mobasheran_logo").attr(
        "src",
        "../assets/images/mobasheran_logo_white.png"
      );
    }
  }
});
