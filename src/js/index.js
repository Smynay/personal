$(document).ready(function () {
  //On Scroll Functionality
  $(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    windowTop > 100
      ? $('nav').addClass('navShadow')
      : $('nav').removeClass('navShadow');
    windowTop > 100 ? $('ul').css('top', '100px') : $('ul').css('top', '100px');
  });

  //Click Logo To Scroll To Top
  $('#logo').on('click', () => {
    $('html,body').animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  if ($(window).width() < 1180) {
    $('.hide').addClass('active');
    $('.toggle').on('click', function () {
      $(this).siblings('span').toggleClass('active');
    });
  }

  $(window).bind('resize', function () {
    if ($(window).width() < 1180) {
      $('.hide').addClass('active');
      $('.toggle').on('click', function () {
        $(this).siblings('span').toggleClass('active');
      });
    } else {
      $('.hide').removeClass('active');
    }
  });

  //Toggle Menu
  $('#menu-toggle').on('click', () => {
    $('#menu-toggle').toggleClass('closeMenu');
    $('ul').toggleClass('showMenu');
    $('.hide').removeClass('active');

    $('li').on('click', () => {
      $('ul').removeClass('showMenu');
      $('#menu-toggle').removeClass('closeMenu');
      $('.hide').addClass('active');
    });
  });
});
