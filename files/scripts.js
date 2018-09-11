

$(function () {
  $('#myCarousel').carousel(
    {
      cycle: true,
      interval: 2700
    });
  $("[data-fancybox]").fancybox({ loop: true });
  $.fancybox.defaults.animationEffect = "zoom-in-out";

  $("#nav").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 500);
  });

  $("#toTop").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 200);
  });


});