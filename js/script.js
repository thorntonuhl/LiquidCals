//LiquidCals
//Website to track the number of calories consumed from beverages
//EECS 330
//Colin Pham, Thornton Uhl, Matthew Griswold, Ethan Park

var container = ""; 
var caloriedb = {};
var drink = "";
var calories = 0;
var height = 0;
var amount = 0;
var firstpg = document.getElementById('home');
var secondpg = document.getElementById('secondpg'); //Adjust name as needed
var thirdpag = document.getElementById('thirdpg');  //Adjust name as needed
var next = document.getElementById('next');         //Adjust name as needed (for next button)
var drinks = document.getElementsByClassName('container');
var leftShiftDrinks = document.getElementById('left-shift');
var rightShiftDrinks = document.getElementById('right-shift');
var selected_drinks = [0, 1, 2];

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

function shiftDrinksLeft() {
  selected_drinks = selected_drinks.map(function(el) {
    if (el == 0) {
      return (drinks.length - 1);
    }
    return el - 1;
  })
  console.log(selected_drinks);
}

function shiftDrinksRight() {
  selected_drinks = selected_drinks.map(function(el) {
    if (el == (drinks.length - 1)) {
      return 0;
    }
    return el + 1;
  })
  console.log(selected_drinks);
}

display(firstpg);
next.onclick = display(secondpg);
next.onclick = display(thirdpg);

rightShiftDrinks.onclick = shiftDrinksRight;
leftShiftDrinks.onclick = shiftDrinksLeft;
