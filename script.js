$(document).ready(function() {
  $('.mobile-nav-icon').click(function () {
    $('#row-with-navbar').toggleClass('open', 1000);
  });

  var waypoint = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function() {
      $('#row-with-navbar').toggleClass('sticky');
    }
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if(/^#/.test(this.href) !== true) {
      var target = $(this.hash);
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  $('.js-animation-1').waypoint(function() {
    $('.js-animation-1').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js-animation-2').waypoint(function() {
    $('.js-animation-2').addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });

  $('.js-animation-3').waypoint(function() {
    $('.js-animation-3').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js-animation-4').waypoint(function() {
    $('.js-animation-4').addClass('animated pulse');
  }, {
    offset: '50%'
  });

  var map = new GMaps({
    div: '.map',
    lat: 40.702286,
    lng: -73.9441411,
    zoom: 12
  });

  map.addMarker({
    lat: 40.7032591,
    lng: -73.99,
    title: 'Main Store',
    infoWindow: {
      content: '<p>NY Headquarters</p>'
    }
  })
});