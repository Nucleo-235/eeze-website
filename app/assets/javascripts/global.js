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

  $('.tlt').textillate({ autoStart: false, in: { effect: 'fadeIn', delayScale: 0.4, shuffle: true } });
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

	function goToByScroll(id){
    id = id.replace("link-", "");
		var offset = $("#"+id).offset().top - 60;
    $('html,body').animate({ scrollTop: offset }, 'slow');
	}

  $(".navbar-nav li a").click(function(e) {
			if ($(window).width() > 990 && this.pathname != '/') {
		    e.preventDefault();
        console.log(this.pathname);
        console.log(e);
		    goToByScroll(this.id);
			}
	});

  $('.grid').isotope({
  	layoutMode: 'masonryHorizontal',
  	gutterWidth: 0
  });
  $('#mansory').append($('.grid'));

  $('.grid .box').on("click", function() {
    var imageSrc = $(this).context.children["0"].currentSrc;
    $(".js-modal-image").attr("src", imageSrc);
  });

  if($('.grid').width() > $( document ).width()) {
    $('#mansory .carousel-control-next-icon').show();
  }

  $('#mansory .carousel-control-next-icon').on("click", function() {
    var grid = $('.grid');
    var translateLeft = $('.grid').width() - ($( 'body' ).width() * grid["0"].dataset.page);
    $('.grid').css('transform', `translate(-${translateLeft}px)`);

    $('.grid').data('page', grid["0"].dataset.page + 1);
    $('.grid').data('translate', translateLeft);
    if (translateLeft < $( 'body' ).width()) {
      $('#mansory  .carousel-control-next-icon').hide();
    }
    $('#mansory .carousel-control-prev-icon').show();
  });

  $('#mansory .carousel-control-prev-icon').on("click", function() {
    var grid = $('.grid');
    var translateLeft = grid["0"].dataset.translate - $('.grid').width();

    if( translateLeft <= $( 'body' ).width()) {
      $('.grid').css('transform', 'translate(0)');
    } else {
      $('.grid').css('transform', `translate(-${translateLeft}px)`);
    }

    $('.grid').data('page', grid["0"].dataset.page - 1);
    if (translateLeft < $( 'body' ).width()) {
      $('#mansory  .carousel-control-prev-icon').hide();
    }
    $('#mansory .carousel-control-next-icon').show();
  });

  var scene = document.getElementById('parallax-scene');
  if (scene) { var parallax = new Parallax(scene); }

});
