
$(document).ready(function(){

    /* For stick navigation */

    var waypoint = new Waypoint({
        element: document.querySelector('.js--section-features'),
        handler: function(direction) {
          if(direction == "down"){
              $('nav').addClass('stick');
          }else{
              $('nav').removeClass('stick');
          }
        },
        offset: 80
      });

      /* Scroll on buttons */

      $('.js--scroll-to-plan').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 500);
      });

      $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 500);
      });

      $('.js--scroll-to-how-it-works').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-steps').offset().top}, 500);
      });

      $('.js--scroll-to-cities').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-cities').offset().top}, 500);
      });

      /* Animations on scroll */

      $('.js--wp-1').waypoint(function(){
        $('.js--wp-1').addClass('animate__animated animate__fadeInLeft');
      },{offset: '60%'});

      $('.js--wp-2').waypoint(function(){
        $('.js--wp-2').addClass('animate__animated animate__fadeInRight');
      },{offset: '60%'});

      $('.js--wp-3').waypoint(function(){
        $('.js--wp-3').addClass('animate__animated animate__fadeInUp');
      },{offset: '50%'});

      $('.js--wp-4').waypoint(function(){
        $('.js--wp-4').addClass('animate__animated animate__pulse');
      },{offset: '50%'});

      /* Mobile nav */ 

      $('.js--nav--icon').click(function(){
        var nav = $('.main-nav');
        var icon = document.querySelector('.mobile-nav-btn');

        nav.slideToggle(200);
        
        if (icon.name == 'menu-outline'){
          icon.name = 'close-outline';
        }else{
          icon.name = 'menu-outline';
        }

      });

});

      

