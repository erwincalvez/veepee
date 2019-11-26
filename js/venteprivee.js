$( document ).ready(function() {

  $('.single-item').slick({
      //ici les options
  });
  var footerHeight = $('.footer-main').outerHeight();



  $('.the-body').css('padding-bottom', footerHeight);
});
