$( document ).ready(function() {

  $('.single-item').slick({
      //ici les options
  });
  var footerHeight = $('.footer-main').outerHeight();
  $('.the-body').css('padding-bottom', footerHeight);


  const el = document.querySelector('.nav-menu');
  el.inert = true; // alternatively, el.setAttribute('inert', '');

  $('.toggle-menu').click(function(){
    $('.nav-menu').toggleClass('nav-menu-is-showing');
    if($('.nav-menu').hasClass('nav-menu-is-showing')) {
      el.inert = false;
    }
    else {
      el.inert = true;
    }

  });

});
