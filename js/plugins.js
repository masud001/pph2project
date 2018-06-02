// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      autoplay: true,
      mouseDrag: false,
      touchDrag: true,
      margin:10,
      responsiveClass:true,
      items:3,
      center: true,
      nav:false,
      dots:true,
      lazyLoad:true,
      // responsive:{
      //     0:{
      //         items:1,
      //         nav:true
      //     },
      //     600:{
      //         items:3,
      //         nav:false
      //     },
      //     1000:{
      //         items:5,
      //         nav:true,
      //         loop:false
      //     }
      // }
  })
});