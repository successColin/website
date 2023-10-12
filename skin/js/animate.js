$(document).ready(function ($) {
  // 首页动画
  $('.tit-1,.g-txt1,.btn1,.news-tab-tit').addClass('wow fadeInUp');
  $('.PartnerSlider,.tab-con').addClass('wow fadeIn');

  // ban图
  $('.ban_txt h2').addClass('wow fadeInUp');

  // 关于我们
  $('.m-Profile .picture,.m-list3,.m-Device .picture,.g-tpList1').addClass(
    'wow fadeIn',
  );
  $(
    '.tit-1,.m-txt1 h3,.m-txt1 p,.txtList1 li,.m-list2 li,.m-Device .text .title,.m-Device .text .det,.btn2, .animate',
  ).addClass('wow fadeInUp');

  // 我们的服务
  $('.m-service .pic,.m-service .det').addClass('wow fadeIn');
  $('.m-service .txt h3,.m-service .btn').addClass('wow fadeInUp');

  // 新闻资讯
  $('.m-list4 li,.page').addClass('wow fadeIn');

  // 客户服务
  $('.m-tpTxtBox2 .pic,.m-tpTxtBox2 .txt .det').addClass('wow fadeIn');
  $('.st3,.txtList3 li,.m-list5 li').addClass('wow fadeInUp');

  // 联系我们
  $('.IconTxtList2 li').addClass('wow fadeIn');
  $('.btn3').addClass('wow fadeInUp');

  // 报告查询
  $('.ban-query h3,.m-filter .inp-box').addClass('wow fadeInUp');

  if ($('.wow').length) {
    if (!/msie [6|7|8|9]/i.test(navigator.userAgent)) {
      var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
      });
      wow.init();
    }
  }
});
