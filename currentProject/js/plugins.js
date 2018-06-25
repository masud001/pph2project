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
  $('.testimonial-carousel').owlCarousel({
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
      responsive:{
          0:{
              items:1,
              nav:false
          },
          768:{
              items:2,
              nav:false
          },
          992:{
              items:3,
              nav:false
              
          }
      }
  })
});

// modal curosel 1
$(document).ready(function(){
  $('.modal-carousel').owlCarousel({
      loop:true,
      autoplay: true,
      autoHeight:true,
      mouseDrag: false,
      touchDrag: true,
      margin:10,
      responsiveClass:true,
      items:1,
      center: true,
      nav:false,
      dots:true,
      lazyLoad:true,
  })
});

// modal curosel-2
$(document).ready(function(){
  $('.modal-carousel-2').owlCarousel({
      loop:true,
      autoplay: true,
      autoHeight:true,
      mouseDrag: false,
      touchDrag: true,
      margin:10,
      responsiveClass:true,
      items:3,
      center: true,
      nav:false,
      dots:true,
      lazyLoad:true,
      video:true
  })
});

// modal curosel-2
$(document).ready(function(){
  $('.modal-carousel-3').owlCarousel({
      loop:true,
      autoplay: true,
      autoHeight:true,
      mouseDrag: false,
      touchDrag: true,
      margin:10,
      responsiveClass:true,
      items:5,
      center: true,
      nav:false,
      dots:true,
      lazyLoad:true,
  })
});


// fwncy banner-1 page-13 slider 
$(document).ready(function(){
  $('#banner-1').owlCarousel({
      loop:true,
      autoplay: false,
      autoHeight:true,
      mouseDrag: false,
      touchDrag: true,
      margin:10,
      responsiveClass:true,
      items:1,
      center: true,
      nav:false,
      dots:true,
      lazyLoad:true,
  })
});


// fwncy banner-1 page-13 slider 
$(document).ready(function(){
  $('#Listings-and-Broadcasts-1').owlCarousel({
      loop:true,
      autoplay: false,
      autoHeight:true,
      mouseDrag: false,
      touchDrag: true,
      margin:10,
      responsiveClass:true,
      items:3,
      center: true,
      nav:false,
      dots:true,
      lazyLoad:true,
  })
});


// fwncy banner-1 page-13 slider 
$(document).ready(function(){
  $('#Listings-and-Broadcasts-2').owlCarousel({
      loop:true,
      autoplay: false,
      autoHeight:true,
      mouseDrag: false,
      touchDrag: true,
      margin:10,
      responsiveClass:true,
      items:3,
      center: true,
      nav:false,
      dots:true,
      lazyLoad:true,
  })
});

// fwncy banner-1 page-13 slider 
$(document).ready(function(){
  $('#Listings-and-Broadcasts-3').owlCarousel({
      loop:true,
      autoplay: false,
      autoHeight:true,
      mouseDrag: false,
      touchDrag: true,
      margin:10,
      responsiveClass:true,
      items:4,
      center: true,
      nav:false,
      dots:true,
      lazyLoad:true,
  })
});

// fwncy banner-1 page-13 slider 
$(document).ready(function(){
  $('#Listings-and-Broadcasts-4').owlCarousel({
      loop:true,
      autoplay: false,
      autoHeight:true,
      mouseDrag: false,
      touchDrag: true,
      margin:10,
      responsiveClass:true,
      items:4,
      center: true,
      nav:false,
      dots:true,
      lazyLoad:true,
  })
});

// fwncy banner-1 page-13 slider 
$(document).ready(function(){
  $('#Listings-and-Broadcasts-5').owlCarousel({
      loop:true,
      autoplay: false,
      autoHeight:true,
      mouseDrag: false,
      touchDrag: true,
      margin:10,
      responsiveClass:true,
      items:4,
      center: true,
      nav:false,
      dots:true,
      lazyLoad:true,
  })
});

// fwncy banner-1 page-13 slider 
$(document).ready(function(){
  $('#Listings-and-Broadcasts-6').owlCarousel({
      loop:true,
      autoplay: false,
      autoHeight:true,
      mouseDrag: false,
      touchDrag: true,
      margin:10,
      responsiveClass:true,
      items:4,
      center: true,
      nav:false,
      dots:true,
      lazyLoad:true,
  })
});

// fwncy banner-1 page-13 slider 
$(document).ready(function(){
  $('#Listings-and-Broadcasts-7').owlCarousel({
      loop:true,
      autoplay: false,
      autoHeight:true,
      mouseDrag: false,
      touchDrag: true,
      margin:10,
      responsiveClass:true,
      items:4,
      center: true,
      nav:false,
      dots:true,
      lazyLoad:true,
  })
});

// fwncy banner-1 page-13 slider 
$(document).ready(function(){
  $('#Listings-and-Broadcasts-8').owlCarousel({
      loop:true,
      autoplay: false,
      autoHeight:true,
      mouseDrag: false,
      touchDrag: true,
      margin:10,
      responsiveClass:true,
      items:4,
      center: true,
      nav:false,
      dots:true,
      lazyLoad:true,
  })
});

// fwncy banner-1 page-13 slider 
$(document).ready(function(){
  $('#Listings-and-Broadcasts-9').owlCarousel({
      loop:true,
      autoplay: false,
      autoHeight:true,
      mouseDrag: false,
      touchDrag: true,
      margin:10,
      responsiveClass:true,
      items:4,
      center: true,
      nav:false,
      dots:true,
      lazyLoad:true,
  })
});

// Partners-and-Clients
$(document).ready(function(){
  $('#Partners-Clients-carousel').owlCarousel({
      loop:true,
      autoplay: true,
      autoHeight:true,
      mouseDrag: false,
      touchDrag: true,
      margin:10,
      responsiveClass:true,
      items:5,
      center: true,
      nav:false,
      dots:false,
      lazyLoad:true,
  })
});

// Featured Audio and Video start
$(document).ready(function(){
  $('.single-Audio-Video-item').owlCarousel({
      loop:true,
      autoplay: true,
      autoHeight:true,
      mouseDrag: false,
      touchDrag: true,
      margin:0,
      responsiveClass:true,
      items:4,
      center: true,
      nav:false,
      dots:false,
      lazyLoad:true,
  })
});

// magnificent popup init
$(document).ready(function(){

  $('.popup-image').magnificPopup({
    items: [
        {
            src: 'https://www.youtube.com/watch?v=1ptt4R8XAt0',
            type: 'iframe' // this overrides default type
        }
    ],
    type: 'image' // this is a default type

  });


});

