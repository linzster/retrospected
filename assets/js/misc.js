$(document).ready(function() {

  // trigger slider
  $(".open-slider").pageslide({ direction: "left", modal: true });

  // close slider
  $('.close-slider').click(function() { $.pageslide.close(); });

});