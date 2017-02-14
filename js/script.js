//LiquidCals
//Website to track the number of calories consumed from beverages
//EECS 330
//Colin Pham, Thornton Uhl, Matthew Griswold, Ethan Park

var curr = 1; // For keeping tab on which page we're supposed to be on.

var caloriedb = {};  // fill in by declaring with known drinks (key) and calorie data
var calories = 0;    // What we're going to return

//var next = document.getElementById('next');         //Adjust name as needed (for next button)

var firstpg = document.getElementById('home');
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

var wineGlass = document.getElementById('wine-glass')
var shotGlass = document.getElementById('shot-glass')
var soloCup = document.getElementById('solo-cup')
var coffeeCup = document.getElementById('coffee-cup')

function chooseContainer2(){
  container = this.id
  curr = 2
}

wineGlass.onclick = chooseContainer2
shotGlass.onclick = chooseContainer2
soloCup.onclick = chooseContainer2
coffeeCup.onclick = chooseContainer2

// function display(page) {
//   page.style.display = 'block';
//   if (page == firstpg) {
//     secondpg.style.display = 'none';
//     thirdpg.style.display = 'none';
//     next = document.getElementById('firstpgnext');
//   }
//   else if (page == secondpg) {
//     firstpg.style.display = 'none';
//     thirdpg.style.display = 'none';
//     next = document.getElementById('secondpgnext');
//   }
//   else {
//     firstpg.style.display = 'none';
//     secondpg.style.display = 'none';
//     next = document.getElementById('thirdpgnext');
//   }
// } 

// function choosecontainer(ccontainer) {
//   if (ccontainer == 'wine glass') container = "wine glass";
//   else if (ccontainer == 'coffee cup') container = "coffee cup";
//   else if (ccontainer == 'shot glass') container = "shot glass";
//   else if (ccontainer == 'plastic cup') container = "plastic cup";
//   curr = 2; // Move to search page
// }

// if (curr == 1) {//FIRST PAGE
//   display(firstpg);
// }

// else if (curr == 2) {//SECOND PAGE
//   display(secondpg);
//   submit.onclick = choosedrink();
// }

// else {
//   answer = (height / amount) * calories;
// }
