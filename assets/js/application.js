$(document).ready(function() {

  function getRandomMemory() {

    // random color for background 
    var colors = ["#914ad3","#d34a8c","#0080FF","#4ad391", "#34495e", "#fb887c"];
    var rand_color = Math.floor(Math.random() * colors.length);

    // compute total number of memories and pick random number from within
    var total = memories.length;
    var rand_mem = Math.floor(Math.random() * total);

    // add random memory and background color to page
    $('body').css("background-color", colors[rand_color]);

    // add new memory (old way)
    $(".memory").text(memories[rand_mem]);

  }

  function getStarted() {
    var total = memories.length;
    var rand_mem = Math.floor(Math.random() * total);
    // fade in first memory
    $(".memory").fadeOut(function() {
      $(this).text(memories[rand_mem])
    }).fadeIn();
  }

  $('.refresh').click(function() {
    var link = $(this);
    if (link.text() == 'We want to tell you this...') {
      $('#momdad').addClass('animate');
      setTimeout(function() {
          getStarted();
      }, 1000);
      link.text('And this...');
    } else {
      getRandomMemory();
    }
  });

  // trigger slider
  $(".open-slider").pageslide({ direction: "left", modal: true });

  // close slider
  $('.close-slider').click(function() { $.pageslide.close(); });


  // /////////////////////////
  // older stuff below (keeping just in case... TODO: remove later)
  // /////////////////////////

  // // initial effect on load (not on click)
  // setTimeout(function(){
  //     $('#momdad').addClass('animate');
  //     setTimeout(function() {
  //         getStarted();
  //     }, 500);
  // }, 3000);

  // // generate and display new memory on click
  // $('.refresh').click(function() { getRandomMemory(); });


});
