//LiquidCals
//Website to track the number of calories consumed from beverages
//EECS 330
//Colin Pham, Thornton Uhl, Matthew Griswold, Ethan Park

var curr = 1; // For keeping tab on which page we're supposed to be on.

var caloriedb = {};  // fill in by declaring with known drinks (key) and calorie data
var calories = 0;    // What we're going to return

var previousButton = document.getElementById('previous-button');
previousButton.style.display = 'none';
var firstpg = document.getElementById('home');
var container = "";

var secondpg = document.getElementById('secondpg'); //Adjust name as needed
//var ti = document.getElementById('textinput').value;      //Adjust name as needed (text input)
var submit = document.getElementById('submit_button');
var searchbar = document.getElementById('search_button');
var drink = "";

var thirdpg = document.getElementById('thirdpg');  //Adjust name as needed
var height = document.getElementById('drinkcontainer');
var amount = document.getElementById('slider');
var answer = 0;

// 

function previousPage() {
  console.log('hi')
  curr -= 1
  display(curr)
}

previousButton.onclick = previousPage

//drink vars
var isdragging = false;	
var fillpercent = 1;
var height = 0;
var offset = 0;

// First Page
var wineGlass = document.getElementById('wine-glass')
var shotGlass = document.getElementById('shot-glass')
var soloCup = document.getElementById('solo-cup')
var coffeeCup = document.getElementById('coffee-cup')
var container = ''

function chooseContainer(){
  container = this.id
  curr = 2
  display(curr)
}

wineGlass.onclick = chooseContainer
shotGlass.onclick = chooseContainer
soloCup.onclick = chooseContainer
coffeeCup.onclick = chooseContainer

// Second Page
var buttonOne = document.getElementById('button-1');
var buttonTwo = document.getElementById('button-2');
var buttonThree = document.getElementById('button-3');
var buttonFour = document.getElementById('button-4');
var drink = ''
buttonOne.onclick = chooseDrink
buttonTwo.onclick = chooseDrink
buttonThree.onclick = chooseDrink
buttonFour.onclick = chooseDrink

function chooseDrink() {
  drink = this.value
  curr = 3
  display(curr)
}

// Third Page

var soloCupSlider = document.getElementById('solo-cup-slider');
var wineGlassSlider = document.getElementById('wine-glass-slider');
var shotGlassSlider = document.getElementById('shot-glass-slider');
var coffeeCupSlider = document.getElementById('coffee-cup-slider');

// Display
function display(index) {
  if (index == 1) {
    firstpg.style.display = 'block';
    secondpg.style.display = 'none';
    thirdpg.style.display = 'none';
    previousButton.style.display = 'none';
  }
  else if (index == 2) {
    firstpg.style.display = 'none';
    secondpg.style.display = 'block';
    thirdpg.style.display = 'none';
    previousButton.style.display = 'block';
  }
  else {
    firstpg.style.display = 'none';
    secondpg.style.display = 'none';
    thirdpg.style.display = 'block';
    previousButton.style.display = 'block';

    switch(container) { 
      case 'wine-glass':
        wineGlassSlider.style.display = 'block';
        shotGlassSlider.style.display = 'none';
        soloCupSlider.style.display = 'none';
        coffeeCupSlider.style.display = 'none';
        height = $("#wine-glass-slider .fill").height();
        offset = $("#wine-glass-slider .fill").offset().top;
        break;
      case 'shot-glass':
        wineGlassSlider.style.display = 'none';
        shotGlassSlider.style.display = 'block';
        soloCupSlider.style.display = 'none';
        coffeeCupSlider.style.display = 'none';
        height = $("#shot-glass-slider .fill").height();
        offset = $("#shot-glass-slider .fill").offset().top;
        break;
      case 'solo-cup':
        wineGlassSlider.style.display = 'none';
        shotGlassSlider.style.display = 'none';
        soloCupSlider.style.display = 'block';
        coffeeCupSlider.style.display = 'none';
        height = $("#solo-cup-slider .fill").height();
        offset = $("#solo-cup-slider .fill").offset().top;
        break;
      case 'coffee-cup':
        wineGlassSlider.style.display = 'none';
        shotGlassSlider.style.display = 'none';
        soloCupSlider.style.display = 'none';
        coffeeCupSlider.style.display = 'block';
        height = $("#coffee-cup-slider .fill").height();
        offset = $("#coffee-cup-slider .fill").offset().top;
		break;
      default:
    }
	  fillpercent = 1;
  }
} 

$("#thirdpg").click(function(event){
	"use strict";
	console.log("click test");
    fillpercent = (((height + offset) - event.pageY) / height);
	console.log("height: " + height + " offset: " + offset);
	if (fillpercent > 0 && fillpercent < 1) {
		$(".st1").css("-webkit-clip-path", "polygon(0 " + ((1-fillpercent)*100) + "%, 100% " + ((1-fillpercent)*100) + "%, 100% 100%, 0% 100%)");
		$("#text").text("Calories in drink: " + (fillpercent.toFixed(3)*100).toFixed(1));
}
});

$("#thirdpg").mousedown(function(){
	"use strict";
	isdragging = true;
});	
	
$("#thirdpg").mouseup(function(){
	"use strict";
	isdragging = false;
});	
	
$("#thirdpg").mousemove(function(event){
	"use strict";
	if (isdragging) {
    fillpercent = (((height + offset) - event.pageY) / height);
	if (fillpercent > 0 && fillpercent < 1) {
		$(".st1").css("-webkit-clip-path", "polygon(0 " + ((1-fillpercent)*100) + "%, 100% " + ((1-fillpercent)*100) + "%, 100% 100%, 0% 100%)");
		$("#text").text("Carories in drink: " + (fillpercent.toFixed(3)*100).toFixed(1));
}
	}
});	



