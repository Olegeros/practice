$(function() {
$('.slider_inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    arrows: false,
    responsive: [
    {
    breakpoint: 800,
    settings: {
    arrows: false,
    slidesToShow: 3,
    centerPadding: '40px',
    }
    }
    ]
  });
  $('.animal_inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
    {
    breakpoint: 800,
    settings: {
      arrows: false,
      slidesToShow: 3
    }
    }
    ]
  });
});
$("[data-scroll").on("click", function(event) {
  event.preventDefault();
  let elementId = $(this). data('scroll');
  let elementOffset = $(elementId).offset().top

  $("html, body").animate({
  scrollTop: elementOffset  -200
  },
700);
});
$(function () {
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  navToggle.on("click", function (event) {
      event.preventDefault();

      nav.toggleClass("show");
  });
});
