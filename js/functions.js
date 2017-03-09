$('document').ready(function() {
  $(window).scroll(function(){
      $(".page-scroll").css("opacity", 1 - $(window).scrollTop() / 200);
  });

  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

  $('.menu-toggle').on('click', function() {
    $(this).toggleClass("on");
    $('.menu-section').toggleClass('on');
    $('nav ul').toggleClass('hidden');
  });



});


$(function(){
  window.app = {};
  window.app.$main_top = $('.main-image');
  window.app.main_top_height = window.app.$main_top.outerHeight();
  window.app.flips = [];
  $('.flip').each(function(index,item){
      var $flip = $(item);
      window.app.flips.push({
        'flip'   : $flip,
        'height' : $flip.outerHeight(),
        'width' : $flip.outerWidth(),
        'position' : $flip.position()
      });
  })
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var currentBottom = window.app.main_top_height - scroll;

    if (currentBottom < 0) return;

    window.app.flips.forEach(function(flip){
        if (currentBottom <= ((flip.width / 0.275) + flip.position.top)){
          flip.flip.addClass('scrolling');
        }else{
          flip.flip.removeClass('scrolling');
        }
    });
});
