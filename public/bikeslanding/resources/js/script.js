function toggleMenu(){
  $(".burger").toggleClass('active');
  $(".menu").toggleClass('active');
  $('header').removeClass('nice');
  $("body").toggleClass('lock');
  if(!$(".burger").hasClass('active') && $(window).scrollTop()>120){
    $('header').addClass('nice');
  }
}



$(document).ready(function(){

  $(document).scroll(function(){
    if($(window).scrollTop()>120 && $('header').css('position') == 'fixed'){
      $('header').addClass('nice');
    } else {
      $('header').removeClass('nice');
    }
  })

  $(".slider").slick({
    arrows: false,
    dots: true,
    autoplay:true,
    autoplaySpeed:3500,
  });

  $(".burger").click(function(){
    toggleMenu();
  });

  $(".menu a").click(function(){
    toggleMenu();
  })
})
