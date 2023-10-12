$(document).ready(function ($) {
  // 可配置的js

  // 释放潜能，撬动企业新增长点
  $('.solution__growth section').hover(function () {
    $(this)
      .addClass('solution__growth--hover')
      .siblings()
      .removeClass('solution__growth--hover');
  });
  // 机至赋能行业典型案例
  $('.solution__case--tabs > section').hover(function () {
    $(this)
      .addClass('solution__case--tabs--hover')
      .siblings()
      .removeClass('solution__case--tabs--hover');
    $(this).siblings().find('img:nth-child(2)').hide();
    $(this).siblings().find('img:nth-child(1)').show();
    $(this).find('img:nth-child(1)').hide();
    $(this).find('img:nth-child(2)').show();
    const index = $(this).index() + 1;
    $(`.solution__case--content > section`).hide();
    $(`.solution__case--content > section:nth-child(${index})`).show();

    let url = '';
    if (index === 1) {
      url = '/?al4/81.html';
    } else if (index === 2) {
      url = '/?al3/78.html';
    } else if (index === 3) {
      url = '/?al2/166.html';
    } else if (index === 4) {
      url = '/?al5/80.html';
    }
    $(`.solution__case--content > a`).attr('href', url);

    console.log(index);
  });
  // ----------------------------

  $('#slideNav').show();
  $('.banner__content').show();
  $('#nav a').click(function () {
    const href = $(this).attr('href');
    const i = href.lastIndexOf('#');
    if (i !== -1) {
      const target = href.slice(i);
      console.log(target);
      $('html, body').animate(
        {
          scrollTop: $(target).offset().top - 65, //65为设置的偏移值
        },
        500,
      );
      return false;
    }
  });

  $('#snav a').click(function () {
    const href = $(this).attr('href');
    const i = href.lastIndexOf('#');
    if (i !== -1) {
      const target = href.slice(i);
      console.log(target);
      $('html, body').animate(
        {
          scrollTop: $(target).offset().top - 50, //65为设置的偏移值
        },
        500,
      );
      return false;
    }
  });

  // $('#aboutJiZhiId .aboutJiZhiId__num .aboutHover').hover(
  //   function () {
  //     $(this)
  //       .parent('.aboutJiZhiId__num')
  //       .find('.aboutHover')
  //       .removeClass('aboutJiZhiId__num--hover');
  //     $(this).addClass('aboutJiZhiId__num--hover');
  //   },
  //   function () {},
  // );

  $('#solution .area').hover(
    function () {
      $(this)
        .parent('.solution__info')
        .find('img')
        .addClass('solution__info--img');
      $(this).parent('.solution__info').find('#areaWidthId').removeAttr('id');
      $(this).parent('.solution__info').find('.infoBgn').removeAttr('class');
      $(this)
        .parent('.solution__info')
        .find('.area__left')
        .removeClass('area__left--show');
      $(this)
        .parent('.solution__info')
        .find('.area__left')
        .removeClass('otherColor');
      $(this).attr('id', 'areaWidthId');
      $(this).find('#infoBgnSelectId').addClass('infoBgn');
      $(this).find('.area__left').addClass('area__left--show');
      $('#solution .area').not(this).find('.area__left').addClass('otherColor');
      $(this).find('img').removeClass('solution__info--img');
    },
    function () {},
  );

  $('#fixedConnection .area').hover(
    function () {
      $(this).find('.memo').show();
      if ($(this).is('.demo')) {
        $(this).find('.jumptop1').hide();
        $(this).find('.jumptop2').show();
        // $(this).addClass('areaHover');
      }
    },
    function () {
      $(this).find('.memo').hide();
      if ($(this).is('.demo')) {
        $(this).find('.jumptop2').hide();
        $(this).find('.jumptop1').show();
        // $(this).removeClass('areaHover');
      }
    },
  );

  $('#scrollTopId').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 700);
    return false;
  });

  // $('#jumpDemoId').click(function () {
  //   window.open('http://47.114.85.229/#/login');
  // });

  // $('#experiencePro').click(() => {
  //   window.open('http://47.114.85.229/#/login');
  // });

  // 弹出框 申请产品体验
  var dlgtrigger = document.getElementsByClassName('bookDemoClass');
  var somedialog = document.getElementById('somedialog');
  if (dlgtrigger && somedialog) {
    // var morphEl = somedialog.querySelector('.morph-shape'),
    // s = Snap(morphEl.querySelector('svg')),
    // path = s.select('path'),
    // steps = {
    //   open: morphEl.getAttribute('data-morph-open'),
    //   close: morphEl.getAttribute('data-morph-close'),
    // },
    var dlg = new DialogFx(somedialog, {
      onOpenDialog: function (instance) {
        // animate path
        // setTimeout(function () {
        //   path.stop().animate({ path: steps.open }, 1500, mina.elastic);
        // }, 150);
        $('.name-error').hide();
        $('.tel-error1').hide();
        $('.tel-error2').hide();
        $('.email-error1').hide();
        $('.email-error2').hide();
        $('.txmessage-error').hide();
      },
      onCloseDialog: function (instance) {
        // path.stop().animate({ path: steps.close }, 1500, mina.easeout);
        $('.name-error').hide();
        $('.tel-error1').hide();
        $('.tel-error2').hide();
        $('.email-error1').hide();
        $('.email-error2').hide();
        $('.txmessage-error').hide();
      },
    });

    [...dlgtrigger].forEach((item) => {
      if (item.classList.contains('yuyue')) {
        document.getElementById('experience__title').innerHTML =
          '获取行业解决方案';
      }
      item.addEventListener('click', dlg.toggle.bind(dlg));
    });
  }

  // $('#experiencePro').click(function () {
  //   dlg.toggle.bind(dlg);
  // });

  $('.main__box').on('click', '.m-service .pic', function () {
    $(this).parent('.m-service').find('.btn')[0].click();
  });

  // search
  $('.hd-searchBtn').hover(
    function (event) {
      $('.hd-search-form').stop().slideDown('fast');
    },
    function () {
      $('.hd-search-form').stop().slideUp('fast');
    },
  );

  //moblie Nav
  $('#slideNav').mmenu({
    navbars: {
      position: 'right',
      content: ['prev', 'title', 'close'],
    },
    offCanvas: {
      position: 'top',
    },
    extensions: ['theme-dark'],
  });

  $('#gototop').click(function () {
    $(this).parent().siblings().removeClass('activeMenuApp');
  });
  $('#classificationId').click(function () {
    $(this).parent().siblings().removeClass('activeMenuApp');
  });

  //moblie
  $('.phone-menu').click(function () {
    $('.header .top').slideUp('fast');
  });
  $('.phone-button').click(function () {
    $('.header .top').slideToggle('fast');
  });

  $(window).scroll(function () {
    // if ($(document).scrollTop() < 10) {
    //   $('#header').removeClass('header__scroll');
    //   $('#experiencePro').removeClass('experiencePro__scroll');
    //   $('.active').removeClass('active__scroll');
    //   $('#nav .v1').css('color', '#fff');
    // } else {
    //   $('#header').addClass('header__scroll');
    //   $('#experiencePro').addClass('experiencePro__scroll');
    //   $('.active').addClass('active__scroll');
    //   $('#nav .v1').css('color', '#333');
    // }
    // if ($(document).scrollTop() < 150) {
    //   $('#fixedConnection').removeClass('fixedAnimat');
    // } else {
    //   $('#fixedConnection').addClass('fixedAnimat');
    // }
  });

  jQuery.expr.filters.offscreen = function (el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.x + rect.width < 0 ||
      rect.y + rect.height < 0 ||
      rect.x > window.innerWidth ||
      rect.y > window.innerHeight ||
      rect.x + rect.width > window.innerWidth
    );
  };
  // nav_products
  $('#nav li').hover(
    function () {
      $(this).find('.v1 img').addClass('img--hover');
      $(this).find('.nav_sub').show();
      const i = $('#nav li').index(this);
      if ($(this).find('.nav_sub').is(':offscreen')) {
        $(this).find('.nav_sub').css('right', '-130px').css('left', 'auto');
      }
    },
    function () {
      $(this).find('.v1 img').removeClass('img--hover');
      $(this).find('.nav_sub').hide();
    },
  );

  // 二级导航
  function snavWid() {
    if ($('#snav').length) {
      var _wid = 0;
      $('#snav li').each(function () {
        _wid = _wid + $(this).outerWidth() + 2;
      });
      $('#snav ul').width(_wid);
    }
  }
  snavWid();
  $(window).resize(function (event) {
    snavWid();
  });

  // 锚点跳转
  if ($('.AnchorNav').length) {
    $('.AnchorNav a').click(function (event) {
      var _id = $(this).attr('href');
      var _top = $(_id).offset().top;
      $('body,html').stop().animate(
        {
          scrollTop: _top,
        },
        500,
      );
      $(this)
        .parents('li')
        .addClass('active')
        .siblings('li')
        .removeClass('active');
      return false;
    });
  }

  // 百度分享
  window._bd_share_config = {
    common: {
      bdSnsKey: {},
      bdText: '',
      bdMini: '2',
      bdMiniList: false,
      bdPic: '',
      bdStyle: '2',
      bdSize: '32',
    },
    share: {},
  };
  with (document)
    (0)[
      ((getElementsByTagName('head')[0] || body).appendChild(
        createElement('script'),
      ).src =
        'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' +
        ~(-new Date() / 36e5))
    ];

  // 选项卡
  $('.TAB li').mouseenter(function () {
    var _eq = $(this).index();
    var _con = $(this).parents('ul').attr('id');
    $(this).addClass('on').siblings('li').removeClass('on');
    $(_con)
      .eq(_eq)
      .removeClass('dn')
      .show()
      .siblings(_con)
      .addClass('dn')
      .hide();
  });

  // 一键查询
  $('#Search .close').click(function () {
    $(this).parents('#Search').hide();
  });

  movingPosition();
  function movingPosition() {
    if ($('#snav ul li').is('.active')) {
      const val = $('#snav .active').offset().left;
      $('#snav').scrollLeft(val);
    }
  }

  var $spaceBetween = 10;
  if ($('div').hasClass('swiper-brand1')) {
    new Swiper('.swiper-brand1', {
      speed: 4000,
      loop: true,
      freeMode: true, // 启用自由模式功能。可设置具体参数或true来使用默认设置。
      slidesPerView: 'auto', // 设置slider容器能够同时显示的slides数量(carousel模式)。
      spaceBetween: $spaceBetween, // 在slide之间设置距离（单位px）。
      slidesPerGroup: 1, // 在carousel mode下定义slides的数量多少为一组。
      slidesOffsetBefore: 100, // 设定slide与左边框的预设偏移量（单位px）。
      grabCursor: false, // 该选项给Swiper 使用者提供小小的贴心应用，设置为true 时，鼠标覆盖Swiper 时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
      resizeObserver: false, // 开启后可使用浏览器的ResizeObserver API（如果浏览器支持）来监测swiper 的container 大小变化。
      autoplayDisableOnInteraction: false, //手动播放后继续自动播放
      autoplay: {
        // 回调函数，在slide自动切换开始时执行。
        delay: 0,
        disableOnInteraction: false,
      },
      simulateTouch: false,
    });
    new Swiper('.swiper-brand2', {
      speed: 4000,
      loop: true,
      freeMode: true,
      slidesPerView: 'auto',
      spaceBetween: $spaceBetween,
      slidesPerGroup: 1,
      slidesOffsetBefore: 0,
      grabCursor: false,
      resizeObserver: false,
      autoplayDisableOnInteraction: false, //手动播放后继续自动播放
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      simulateTouch: false,
    });
  }

  // 轮播图表单
  $('#banner__form').on('change', 'input', function () {
    const name = $(this).attr('name');
    checkFun(name);
  });
  function checkFun(name) {
    // 手机
    if (name === 'tel') {
      if ($('#banner__telFooter').val() == '') {
        $('#banner .tel-error1').show();
        $('#banner .tel-error2').hide();
        $('#banner__telFooter').focus();
        return false;
      } else {
        $('#banner .tel-error1').hide();
      }
      if (
        !$('#banner__telFooter')
          .val()
          .match(
            /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/,
          )
      ) {
        $('#banner .tel-error2').show();
        $('#banner .tel-error1').hide();
        $('#banner__telFooter').focus();
        return false;
      } else {
        $('#banner .tel-error2').hide();
      }
    }
  }
});
