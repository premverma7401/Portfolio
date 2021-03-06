$(document).ready(function () {
  'use strict';

  // NAV
  $('.button-collapse').sideNav({
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });

  $('#example-one').onePageNav({
    changeHash: true,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: ':not(.external)',
  });

  $('a[href^="#"].inpage-scroll, .inpage-scroll a[href^="#"]').on(
    'click',
    function (e) {
      e.preventDefault();

      var target = this.hash,
        $target = $(target);
      $('.main-navigation a[href="' + target + '"]').addClass('active');
      $('.main-navigation a:not([href="' + target + '"])').removeClass(
        'active'
      );
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $target.offset() ? $target.offset().top : 0,
          },
          900,
          'swing',
          function () {
            window.location.hash = target;
          }
        );
    }
  );

  /**************************************************************************
      Style demo
**************************************************************************/

  //Portfolio
  $('#portfolio-item').mixItUp();

  // Sticky nav
  $('#sticky-nav').sticky({ topSpacing: 0 });

  //Skills
  $('.determinate').each(function () {
    var width = $(this).text();
    $(this).css('width', width).empty().append('<i class="fa fa-circle"></i>');
  });

  //Conatct
  $('select').material_select();

  // Smooth Scroll
  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });

  //Tooltip
  $('.tooltipped').tooltip({ delay: 50 });

  //wow
  new WOW().init();

  $('.sa-view-project-detail').on('click', function (event) {
    event.preventDefault();
    var href = $(this).attr('href') + ' ' + $(this).attr('data-action'),
      dataShow = $('#project-gallery-view'),
      dataShowMeta = $('#project-gallery-view meta'),
      dataHide = $('#portfolio-item'),
      preLoader = $('#loader'),
      backBtn = $('#back-button'),
      filterBtn = $('#filter-button');

    dataHide.animate({ marginLeft: '-120%' }, { duration: 400, queue: false });
    filterBtn.animate({ marginLeft: '-120%' }, { duration: 400, queue: false });
    dataHide.fadeOut(400);
    filterBtn.fadeOut(400);
    setTimeout(function () {
      preLoader.show();
    }, 400);
    setTimeout(function () {
      dataShow.load(href, function () {
        dataShowMeta.remove();
        preLoader.hide();
        dataShow.fadeIn(600);
        backBtn.fadeIn(600);
      });
    }, 800);
  });

  $('#back-button').on('click', function (event) {
    event.preventDefault();
    var dataShow = $('#portfolio-item'),
      dataHide = $('#project-gallery-view'),
      filterBtn = $('#filter-button');

    $('[data-animate]').each(function () {
      $(this).addClass($(this).attr('data-animate'));
    });

    dataHide.fadeOut(400);
    $(this).fadeOut(400);
    setTimeout(function () {
      dataShow.animate({ marginLeft: '0' }, { duration: 400, queue: false });
      filterBtn.animate({ marginLeft: '0' }, { duration: 400, queue: false });
      dataShow.fadeIn(400);
      filterBtn.fadeIn(400);
    }, 400);
    setTimeout(function () {
      dataShow
        .find('.fadeInRight, .fadeInLeft, .fadeInUp, .fadeInDown')
        .removeClass('fadeInRight')
        .removeClass('fadeInLeft')
        .removeClass('fadeInUp')
        .removeClass('fadeInDown');
    }, 1500);
  });
});
