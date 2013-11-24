$( document ).ready(function() {

  // storing memories in an array
  var memories = [];

  memories.push("Bike ride at Maraine State Park.  Lunch on a pier.  Crunching Doritos beneath a marshmallow cloud sky.");
  memories.push("That sandwhich place outside Hamilton College.  Best sandwhich I have ever had.  Still.");
  memories.push("Walks, walking, through cemeteries, to coffeeshops, and later pushing strollers.");
  memories.push("Do you remember?  I do.  These moments I carry with me.  Is it like that for you?");
  memories.push("I've thought about texting you, these shimmering glimpses of the past. But sometimes I don't have my phone, and even if I did, the medium didn't seem right.");
  memories.push("Texts don't hold enough weight, and the lightness would betray something, I fear.  Something I want you to know.");
  memories.push("They surface when life settles for an instant.  Then I'm back, back in time, back with you, and these memories are moments, are happening again.");  
  memories.push("Mom, in your purple robe, stepping out into the Chautauqua morning.  I could feel the sun, early as it was.");
  memories.push("Being rocked through ear infections.  The pain pacified by back and forth, back and forth.");
  memories.push("Windows down, Bob Dylan loud.  'Everybody must get stoned.'  Driving in circles in Timberglen.  Did that song ever end?");
  memories.push("Windows down, the morning dark on our way to school.  Windows up, and warmer.  At least that was the idea, right");
  memories.push("These moments aren't pinnable.  We don't blog about them.  They are traces.  They return.  They last.");
  // keep adding items here...

  // compute total number of memories and pick random number from within
  var number = memories.length;
  var rando = Math.floor(Math.random() * number);

  // add to page
  $(".memory").text(memories[rando]);

});
