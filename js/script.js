//LiquidCals
//Website to track the number of calories consumed from beverages
//EECS 330
//Colin Pham, Thornton Uhl, Matthew Griswold, Ethan Park

var curr = 1;

var caloriedb = {};
var calories = 0;
var next = document.getElementById('next');         //Adjust name as needed (for next button)

var firstpg = document.getElementById('home');
var wineglass = document.getElementById('wine glass');
var coffee = document.getElementById('coffee cup');
var shotglass = document.getElementById('shot glass');
var cup = document.getElementById('plastic cup');
var container = "";

var secondpg = document.getElementById('secondpg'); //Adjust name as needed
var drink = "";

var thirdpag = document.getElementById('thirdpg');  //Adjust name as needed
var height = document.getElementById('drinkcontainer');
var amount = document.getElementById('slider');
var answer = 0;

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

function choosecontainer(ccontainer) {
  if (ccontainer == 'wine glass') container = "wine glass";
  else if (ccontainer == 'coffee cup') container = "coffee cup";
  else if (ccontainer == 'shot glass') container = "shot glass";
  else if (ccontainer == 'plastic cup') container = "plastic cup";
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

if (curr == 1) {//FIRST PAGE
  display(firstpg);
  rightShiftDrinks.onclick = shiftDrinksRight;
  leftShiftDrinks.onclick = shiftDrinksLeft;
  wineglass.onclick = choosecontainer('wine glass'); //Wine glass is chosen
  coffee.onclick = choosecontainer('coffee cup');    //Coffee cup is chosen
  shotglass.onclick = choosecontainer('shot glass'); //Shot glass is chosen
  plastic.onclick = choosecontainer('plastic cup');  //Plastic cup is chosen
  next.onclick = display(secondpg);
  curr = 2;
}

else if (curr == 2) {//SECOND PAGE
  drink = ti;
  for (name in caloriedb){
    if(name == drink) {
      calories = caloriedb[name];
    }
  }
  next.onclick = display(thirdpg);
  curr = 3;
}

else {
  answer = (height / amount) * calories;
}