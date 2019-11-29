$( document ).ready(function() {

  // ====== start slider on home page articles ======

  $('.single-item').slick({
    //ici les options
  });


  // ======= footer height used as padding bottom on body (footer is fixed) =====

  var footerHeight = $('.footer-main').outerHeight();
  $('.the-body').css('padding-bottom', footerHeight);



  // ======rendering the nav inert (no focus on links) fot tab navigation purpose=====

  navMenu.inert = true;
  // alternatively, navMenu.setAttribute('inert', '');


  // ====== function to add class on nav menu, so it slides and removing invert on nav when visible, adding inert when not visible ======

  const navMenu = document.querySelector('.nav-menu');
  function menuSlide(){
    $('.nav-menu').toggleClass('nav-menu-is-showing');
    if($('.nav-menu').hasClass('nav-menu-is-showing')) {
      navMenu.inert = false;
    }
    else {
      navMenu.inert = true;
    }
  }



  // trigger menuSlide function when click on burger and focus/click on skip link ======

  $('.btn--toggle-menu').click(function(){
    menuSlide();
  });
  $('.skip-link--toggle-menu').click(function(){
    menuSlide();
  });



// ====== add a class to scroll top button as soon a user is scrolling ====== remove this class after 4000ms of non scrolling ======

  $(window).scroll(function() {
    $(".btn--scroll-top").addClass("btn--scroll-top-is-visible");
    setTimeout(function() {
        $('.btn--scroll-top').removeClass('btn--scroll-top-is-visible');
      }, 4000)
  });

});
