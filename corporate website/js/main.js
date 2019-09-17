$(document).ready(function(){
// header section
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if ( scrollTop >= 60) { 
      $('header').addClass('secondary-dark-blue-bg');
    }
    else
        if( $('header').hasClass('secondary-dark-blue-bg')){
            $('header').removeClass('secondary-dark-blue-bg');
        }
  });
  // slider 
  $('.carousel-slider').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:700,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })

  // our work section
  $('.work-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    dots:false,
    autoplayTimeout:3000,
    smartSpeed:700,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        },
        1050:{
            items:4
        }
    }
})

// Team section
$('.team-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  dots:false,
  autoplayTimeout:3000,
  smartSpeed:700,
  autoplayHoverPause:true,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})

  // Testimonials section team-carousel
$('.test-carousel').owlCarousel({
  loop:true,
  nav:false,
  autoplay:true,
  autoplayTimeout:4000,
  smartSpeed:700,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

// navbar
$('#menu').slicknav({
    label:'',
});

// stellar.js
$('#main').stellar();

// waypoint.js
$('.animation').each(function(){
    var waypoint = new Waypoint({
        element: this,
        handler: function(direction) {
          var animation = $(this.element).attr('data-animation');
          $(this.element).css('opacity','1');
          $(this.element).addClass('animated '+animation);
        },
        offset: '75%'
      })

});

// smooth scroll
// $('a').smoothScroll();

// onepagenave
$('#menu').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});
});
// $('.animation').each(function(){

//     var waypoint = new Waypoint({
//       element: this,
//       handler: function(direction) {
//         var animation = $(this.element).attr('data-animation');
//         $(this.element).css('opacity','1');
//         $(this.element).addClass("animated " + animation);
//       },
//       offset: '75%' 
//     })
// });