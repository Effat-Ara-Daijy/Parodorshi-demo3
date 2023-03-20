$(document).ready(function () {

  // sticky-menu
  $(window).scroll(function () {
    if ($(window).scrollTop() > 20) {
      $(".mainmenu").addClass('sticky');
    } else {
      $(".mainmenu").removeClass('sticky');
    }
  });

  //BackToTop
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('#back_to_top').fadeIn();
      } else {
        $('#back_to_top').fadeOut();
      }
    });
    // scroll body to 0px on click
    $('#back_to_top').click(function () {
      $('#back-to-top').tooltip('hide');
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });

    $('#back_to_top').tooltip('show');

  });
});

// back-to
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});


// counter-js
$(document).ready(function ($) {
  //Check if an element was in a screen
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom));
  }
  //Count up code
  function countUp() {
    $('.counter').each(function () {
      var $this = $(this), // <- Don't touch this variable. It's pure magic.
        countTo = $this.attr('data-count');
      ended = $this.attr('ended');

      if (ended != "true" && isScrolledIntoView($this)) {
        $({ countNum: $this.text() }).animate({
          countNum: countTo
        },
          {
            duration: 2500, //duration of counting
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            }
          });
        $this.attr('ended', 'true');
      }
    });
  }
  //Start animation on page-load
  if (isScrolledIntoView(".counter")) {
    countUp();
  }
  //Start animation on screen
  $(document).scroll(function () {
    if (isScrolledIntoView(".counter")) {
      countUp();
    }
  });
});


// slider
$(document).ready(function () {
  $('.hero-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 4000,
    lazyLoad: 'ondemand',
    fade: true,
    autoplay: true,
    prevArrow: '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right"></i></span>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]

  });

});


// story slider
$(document).ready(function () {
  $('.story-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplaySpeed: 1500,
    lazyLoad: 'ondemand',
    autoplay: true,
    prevArrow: '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right"></i></span>',
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]

  });
});


//Search

$(".menu-search").click(function (event) {
  event.preventDefault();

  $(".search_block").toggle("show hide");

});

$('a.close-search').click(function (e) {

  e.preventDefault();

  $(".search_block").toggle("show hide");

});

