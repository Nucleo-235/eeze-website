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

  $('.tlt').textillate({ autoStart: false, in: { effect: 'fadeIn', shuffle: true } });
  $('#brand #carousel').on('slide.bs.carousel', function () {
    $('.tlt').textillate('start');
  })
});
