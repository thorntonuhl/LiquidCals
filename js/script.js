//LiquidCals
//Website to track the number of calories consumed from beverages
//EECS 330
//Colin Pham, Thornton Uhl, Matthew Griswold, Ethan Park

var curr = 1; // For keeping tab on which page we're supposed to be on.

var caloriedb = {};  // fill in by declaring with known drinks (key) and calorie data
var calories = 0;    // What we're going to return

//var next = document.getElementById('next');         //Adjust name as needed (for next button)

var firstpg = document.getElementById('home');
var right = document.getElementById('right-shift')
var left = document.getElementById('left-shift')
var container = "";

var secondpg = document.getElementById('secondpg'); //Adjust name as needed
//var ti = document.getElementById('textinput').value;      //Adjust name as needed (text input)
var submit = document.getElementById('submit_button');
var searchbar = document.getElementById('search_button');
var drink = "";

var thirdpag = document.getElementById('thirdpg');  //Adjust name as needed
var height = document.getElementById('drinkcontainer');
var amount = document.getElementById('slider');
var answer = 0;

var drinks = document.getElementsByClassName('container');
var leftShiftDrinks = document.getElementById('left-shift');
var rightShiftDrinks = document.getElementById('right-shift');
var selected_drinks = [0, 1, 2];

function changedrink(drink) {	//drink should be a string
	searchbar.value = drink;
}

function choosedrink() {   //Finalize drink choice and indicate moving to next page
	found = false;
	lowercasedrink = searchbar.value.toLowerCase();
  	for (name in caloriedb){		// Check if drink exists in db
    	if (name == lowercasedrink) {// If it does, then set drink and retrieve calories
      		calories = caloriedb[name];
      		drink = searchbar.value;
      		found = true;
    	}
  	}
  	if (found == true) {  //If drink is found in db, then move on to next page
		curr = 3;
	}
	else {				  //Otherwise, try again.
		searchbar.value = "Drink not found, please try again."
	}
}

function display(page) {
  page.style.display = 'block';
  if (page == firstpg) {
    secondpg.style.display = 'none';
    thirdpg.style.display = 'none';
    next = document.getElementById('firstpgnext');
  }
  else if (page = secondpg) {
    firstpg.style.display = 'none';
    thirdpg.style.display = 'none';
    next = document.getElementById('secondpgnext');
  }
  else {
    firstpg.style.display = 'none';
    secondpg.style.display = 'none';
    next = document.getElementById('thirdpgnext');
  }
} 

function choosecontainer(ccontainer) {
  if (ccontainer == 'wine glass') container = "wine glass";
  else if (ccontainer == 'coffee cup') container = "coffee cup";
  else if (ccontainer == 'shot glass') container = "shot glass";
  else if (ccontainer == 'plastic cup') container = "plastic cup";
  curr = 2; // Move to search page
}

$(document).ready(function(){
  $('.carousel').carousel({indicators: true, dist: -10});
});

function shiftRight() {
  $('.carousel').carousel('next');
}

function shiftLeft() {
  $('.carousel').carousel('prev');
}

if (curr == 1) {//FIRST PAGE
  display(firstpg);
  right.onclick = shiftRight;
  left.onclick = shiftLeft;
}

else if (curr == 2) {//SECOND PAGE
  display(secondpg);
  submit.onclick = choosedrink();
}

else {
  answer = (height / amount) * calories;
}
