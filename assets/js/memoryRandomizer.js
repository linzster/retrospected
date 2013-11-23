$( document ).ready(function() {

  // storing memories in an array
  var memories = [];

  memories.push("Bike ride at Maraine State Park.  Lunch on a pier.  Crunching Doritos beneath a marshmallow cloud sky.");
  memories.push("That sandwhich place outside Hamilton College.  Best sandwhich I have ever had.  Still.");
  memories.push("Walks, walking, through cemeteries, to coffeeshops, and later pushing strollers.");
  memories.push("Do you remember?  I do.  These moments I carry with me.  Now they surface when life settles for an instant, and for that instant, I am back, back in time, back with you, and these memories are happening again.  Is it like that for you?");
  memories.push("I've thought about texting you when these glimpses of the past come to me. But sometimes I don't have my phone, and even if I did, the medium didn't seem right.  Texts don't hold enough weight, and the lightness would betray something, I fear.  Something I want you to know.");
  // keep adding items here...

  // compute total number of memories and pick random number from within
  var number = memories.length;
  var rando = Math.floor(Math.random() * number);

  // add to page
  $(".memory").text(memories[rando]);

});