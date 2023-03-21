$('.slider').slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  
  (function($) {
      $(function() { 
              $(".gp").simplyScroll();
      });
   })(jQuery);