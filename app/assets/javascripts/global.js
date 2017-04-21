function openMenu() {
  var nav = document.querySelector('nav');
  if (nav.style.margin == '' ) nav.style.margin = '10px';
  else nav.style.margin = '';
}

$(function() {
  $('#brand #carousel').carousel({
    interval: 5000,
    ride: "carousel"
  })
  

  $('#carousel').swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll:"vertical"
  });

  $('.tlt').textillate({ autoStart: false, in: { effect: 'fadeIn', shuffle: true } });
  $('#brand #carousel').on('slide.bs.carousel', function () {
    $('.tlt').textillate('start');
  })

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
      if (scroll >= 60) {
          $(".navbar").addClass("scrolled");
      } else {
          $(".navbar").removeClass("scrolled");
      }
  });

  $('.grid').isotope({
  	layoutMode: 'masonryHorizontal',
  	gutterWidth: 0
  });
  $('#mansory').append($('.grid'));

  var scene = document.getElementById('parallax-scene');
  var parallax = new Parallax(scene);

});
