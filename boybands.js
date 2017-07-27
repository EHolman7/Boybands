var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)

var loopCount = bands.length;

// Keep track of which band we're on in the loop

// var currentBand = bands[i];

// Keep track of which veggie we're on in the loop

// var currentVeggie = vegetables[i];

// Get a reference to the appropriate DOM element for bands

var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables

var veggieElement = document.getElementById("vegetables");

// Start looping

for (var i = 0; i < loopCount; i += 1) {

var currentBand = bands[i];

var currentVeggie = vegetables[i];
  
  // Add the band names into the correct <div>
  
 // currentBand = ???;

  var bandString = "";

  bandString += '<p>' + currentBand + '</p>';

	bandElement.innerHTML += bandString;

  // Add the veggie names into the correct <div>
  
   //currentVeggie = ???;

var veggieString = "";

	veggieString += '<p>' + currentVeggie + '</p>'

	veggieElement.innerHTML += veggieString

}

