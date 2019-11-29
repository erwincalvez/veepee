$( document ).ready(function() {

  $('.single-item').slick({
      //ici les options
  });
  var footerHeight = $('.footer-main').outerHeight();
  $('.the-body').css('padding-bottom', footerHeight);


  const navMenu = document.querySelector('.nav-menu');
    navMenu.inert = true;
   // alternatively, el.setAttribute('inert', '');

  $('.btn--toggle-menu').click(function(){
    $('.nav-menu').toggleClass('nav-menu-is-showing');
    if($('.nav-menu').hasClass('nav-menu-is-showing')) {
      navMenu.inert = false;
    }
    else {
      navMenu.inert = true;
    }

  });

  $('.skip-link--toggle-menu').click(function(){
    $('.nav-menu').toggleClass('nav-menu-is-showing');
    if($('.nav-menu').hasClass('nav-menu-is-showing')) {
      navMenu.inert = false;
    }
    else {
      navMenu.inert = true;
    }

  });

  $(window).scroll(function() {
    $(".btn--scroll-top").addClass("btn--scroll-top-is-visible");
	});



});
