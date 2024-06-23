$(document).ready(function () {
    $('.navbar-nav a').on('click', function () {
        if ($('.navbar-toggler').is(':visible')) {
            $('.navbar-collapse').collapse('hide');
        }
    });
});



$('.slick-banner-slider').slick({
    autoplay: true,
    fade: true,
    cssEase: 'ease-in-out',
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
    


  $(function () {
    // Initialize date picker
    $("#datePicker").datepicker();
    
    // Initialize time picker
    $('#timePicker').datetimepicker({
        format: 'LT'
    });
});




$('.review_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
  });