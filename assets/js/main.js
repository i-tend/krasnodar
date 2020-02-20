(function($) {
  
  "use strict";  
 
  $(window).on('load', function() {

  /*Page Loader active
  ========================================================*/
  // $('#preloader').fadeOut(); - уберу загрузку страницы


  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    // one page navigation 
    $('.navbar-nav').onePageNav({
      currentClass: 'active',
      filter: '.scroll-link'
    });

    /* Auto Close Responsive Navbar on Click
    ========================================================*/
    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function (event) {
              if(event.target.classList.contains("dropdown-toggle")){ return; }
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-inverse a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);

    /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();

    /* 
    CounterUp
    ========================================================================== */
    $('.counter').counterUp({
      time: 500
    });  
    

     /* Testimonials Carousel 
    ========================================================*/
    if ($("#testimonials").length > 0) {
    var owl = $("#testimonials");
      owl.owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        center: true,
        margin: 15,
        slideSpeed: 500,
        stopOnHover: true,
        autoPlay: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive : {
            0 : {
                items: 1
            },
            768 : {
                items: 2
            },
            960 : {
                items: 3
            },
            1200 : {
                items: 3
            },
            1920 : {
                items: 3
            }
        }
      });  
      
    }

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });


      // The function actually applying the offset
      function offsetAnchor() {
        if (location.hash.length !== 0) {
          window.scrollTo(window.scrollX, window.scrollY - 100);
        }
      }

      // Captures click events of all <a> elements with href starting with #
      $(document).on('click', 'a[href^="#"]', function(event) {
        // Click events are captured before hashchanges. Timeout
        // causes offsetAnchor to be called after the page jump.
        window.setTimeout(function() {
          offsetAnchor();
        }, 0);
      });

      // Set the offset when entering page with hash present in the url
      window.setTimeout(offsetAnchor, 0);

     
      
  });      

}(jQuery));