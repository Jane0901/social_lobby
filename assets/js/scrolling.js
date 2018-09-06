$(function(){
  var tickerLength = $('.scroll_container ul li').length;
  var tickerHeight = $('.scroll_container ul li').outerHeight();
  $('.scroll_container ul li:last-child').prependTo('.scroll_container ul');
  $('.scroll_container ul').css('marginTop',-tickerHeight);
  function moveTop(){
    $('.scroll_container ul').animate({
      top : -tickerHeight
    },600, function(){
     $('.scroll_container ul li:first-child').appendTo('.scroll_container ul');
      $('.scroll_container ul').css('top','');
    });
   }
  setInterval( function(){
    moveTop();
  }, 3000);
  });
