var character = document.getElementById('character');
character.style.left = '0px';
character.style.top = '0px';

// How do we make it move?

var time = 1000;

var startleft = 0;
var starttop = 0;
var endleft = 200;
var endtop = 200;


// LOOPS!
// for (set up the loop; while this is true; do this each time)

// console.log("Let's see how to loop something");

/*
for (var i = startleft; i < endleft; i = i + 1) {
	// console.log("The current value of i is: " + i);

	// CONCATENATE
	// console.log("word " + "bird " + "heard");

	character.style.left = i + 'px';
}
*/

// praseInt() Turns a string into a number
var currentLeft = parseInt(character.style.left);

var intervalLeft = setInterval(function() {

	// MOVE THE CHARACTER
	character.style.left = (currentLeft + 1) + 'px';

	// UPDATE THE COUNTER
	currentLeft = currentLeft + 1;

	// TELL ME WHEN TO STOP!
	if (currentLeft > endleft) {
		clearInterval(intervalLeft);
	}
}, time/60);

// praseInt() Turns a string into a number
var currentTop = parseInt(character.style.top);

var intervalTop = setInterval(function() {

	// MOVE THE CHARACTER
	character.style.top = (currentTop + 1) + 'px';

	// UPDATE THE COUNTER
	currentTop = currentTop + 1;

	// TELL ME WHEN TO STOP!
	if (currentTop > endtop) {
		clearInterval(intervalTop);
	}
}, time/60);

