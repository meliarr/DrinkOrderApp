$(document).ready(function() {
  $('.bxslider').bxSlider({
    mode: 'vertical',
    captions: true,
    slideWidth: 500
  });

  $('#show-menu-btn').click(function () {
    $('#menu').show();
  });

  $('#hide-menu-btn').click(function () {
    $('#menu').hide();
  });

  // CSS highlight class can be found in assets/styles/main.css
  $('input[type="checkbox"]').click(function(){
    $(this).parent().toggleClass('highlight');
  });
});
