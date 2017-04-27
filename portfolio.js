$(document).ready(function(){
  $('#linkedIn').mouseenter(function(){
    $(this).animate({
      height: '+=11px'
    });
  });
  $('#linkedIn').mouseleave(function(){
    $(this).animate({
      height: '-=11px'
    });
  });
});

$(document).ready(function(){
  $('#gitHub').mouseenter(function(){
    $(this).animate({
      height: '+=10px'
    });
  });
  $('#gitHub').mouseleave(function(){
    $(this).animate({
      height: '-=10px'
    });
  });
});

$(document).ready(function(){
  $('#email').mouseenter(function(){
    $(this).animate({
      height: '+=10px'
    });
  });
  $('#email').mouseleave(function(){
    $(this).animate({
      height: '-=10px'
    });
  });
});
