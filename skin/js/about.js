$(document).ready(function ($) {
  // 资质能力
  $('#AbilitySlider').DB_rotateRollingBanner({
    key: 'c37080',
    moveSpeed: 500,
    autoRollingTime: 2000,
  });
  $(window).resize(function (event) {
    if ($(window).width() <= 1400) {
      location.reload();
    }
  });

  // 检验设备
  $('.m-Device .slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: true,
    arrows: false,
  });

  $('.company__profile').addClass('wow fadeInUp');
});
