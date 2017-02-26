//LiquidCals
//Website to track the number of calories consumed from beverages
//EECS 330
//Colin Pham, Thornton Uhl, Matthew Griswold, Ethan Park
$( document ).ready(function() {
var drinks = [
  {"label" : 'coke' , "value" : 140 },
  //{"label" : 'diet coke' , "value" : 1 },
  {"label" : 'coke cherry' , "value" : 154 },
  //{"label" : 'coke zero' , "value" : 1 },
  {"label" : 'pepsi' , "value" : 150 },
  {"label" : 'mountain dew' , "value" : 170 },
  /*{"label" : 'diet mountain dew' , "value" ; 0 },
  {"label" : 'mountain dew voltage' , "value" : 170 },
  {"label" : 'mountain dew code red' , "value" : 170 },*/
  {"label" : 'gatorade' , "value" : 80 }, //value same regardless of flavor
  {"label" : 'orange juice' , "value" : 165 }, //Dole no pulp OJ
  {"label" : 'izze sparkling juice' , "value" : 129 }, //value same regardless of flavor
  {"label" : 'red bull' , "value" : 157 },
  {"label" : 'monster' , "value" : 143 }, //generic google
  {"label" : 'vodka' , "value" : 768 }, //generic google
  {"label" : 'beer' , "value" : 156 }, //generic google
  {"label" : 'milk' , "value" : 155 }, //generic google
  {"label" : 'latte' , "value" : 150 }, //starbucks caffe latte w/ 2% milk
  {"label" : 'mocha' , "value" : 230 }, //starbucks caffe mocha w/ 2% milk
  {"label" : 'cappuccino' , "value" : 90 }, //starbucks cappucino
  {"label" : 'lemonade' , "value" : 150 }, //minute maid lemonade
  {"label" : 'odwalla smoothie' , "value" : 221 }, //odwalla mango tango smoothie
  {"label" : 'sprite' , "value" : 140 },
  {"label" : 'powerade' , "value" : 80 },
  {"label" : 'fanta' , "value" : 160 }, //orange fanta
  {"label" : 'mist twst' , "value" : 150 }, //sierra mist
  {"label" : 'dr pepper' , "value" : 150 },
  {"label" : 'dr pepper cherry' , "value" : 156 },
  {"label" : 'arizona iced tea' , "value" : 135 }, //arizona lemon tea
  {"label" : '5 hour energy' , "value" : 25 },
]

var container_sizes = {
  'wine-glass': 12,
  'shot-glass': 1.5,
  'solo-cup': 16,
  'coffee-cup': 6
}


var curr = 1; // For keeping tab on which page we're supposed to be on.

var caloriedb = {};  // fill in by declaring with known drinks (key) and calorie data
var calories = 0;    // What we're going to return

var totalCalories = 0; // Total calories consumed

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
//var height = document.getElementById('drinkcontainer');
var amount = document.getElementById('slider');
var answer = 0;

// 

function previousPage() {
  curr -= 1
  display(curr)
}

previousButton.onclick = previousPage

//drink vars
var isdragging = false;	
var fillpercent = 1;
var height = $("#wine-glass-slider .fill").height();
var offset = $("#wine-glass-slider .fill").offset().top;


// Nav Bar Calories

var caloriesNavBar = document.getElementsByClassName('calheader')

function updateCalories() {
  for (var i = 0; i < caloriesNavBar.length; i++) {
    caloriesNavBar[i].innerText = 'Today you have had ' + totalCalories + ' calories.'
  }
}
updateCalories()



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
  updatecup();
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
var submitButton = document.getElementById('submit_button');
var searchBar = document.getElementById('search-bar');

var drink = '';
buttonOne.onclick = chooseDrink;
buttonTwo.onclick = chooseDrink;
buttonThree.onclick = chooseDrink;
buttonFour.onclick = chooseDrink;
submitButton.onclick = chooseDrinkFromSearchBar;
container = wineGlass;

function chooseDrink() {
  drink = this.dataset.value
  curr = 3
  display(curr);
}

function chooseDrinkFromSearchBar() {
  drink = searchBar.value;
  $("#cupsubtext").text("Click and drag the liquid in the cup to reflect how much " + drink + "  you drank");
	determineCalories(drink);
  curr = 3;
  display(curr);
}

// Third Page

var soloCupSlider = document.getElementById('solo-cup-slider');
var wineGlassSlider = document.getElementById('wine-glass-slider');
var shotGlassSlider = document.getElementById('shot-glass-slider');
var coffeeCupSlider = document.getElementById('coffee-cup-slider');

var addButton = document.getElementById('addbutton')

function determineCalories(drink) {
  var calories = 0
  drinks.forEach(function(d) {
    if (d.label == drink) {
      calories = d.value * container_sizes[container] / 12
    }
  })
  return calories
}

function addCalories(carlories) {
  totalCalories += parseInt((fillpercent.toFixed(3)* determineCalories(drink)).toFixed(0))
  updateCalories()
  curr = 1
}

addButton.onclick = addCalories

// Display
function display(index) {
  if (index == 1) {
    //firstpg.style.display = 'block';
    //secondpg.style.display = 'none';
    //thirdpg.style.display = 'none';
    //previousButton.style.display = 'none';
	  
  }
  else if (index == 2) {
    /*firstpg.style.display = 'none';
    secondpg.style.display = 'block';
    thirdpg.style.display = 'none';
    previousButton.style.display = 'block';*/
	  $('html, body').animate({
        scrollTop: ($("#searchwrapper").offset().top-80)
    }, 600);
  }
  else {
    /*firstpg.style.display = 'none';
    secondpg.style.display = 'none';
    thirdpg.style.display = 'block';
    previousButton.style.display = 'block';*/
	 $('html, body').animate({
        scrollTop: ($("#cupwrapper").offset().top-80)

	}, 600);
  }
} 

function updatecup() {
	    switch(container) { 
      case 'wine-glass':
        wineGlassSlider.style.display = 'block';
        shotGlassSlider.style.display = 'none';
        soloCupSlider.style.display = 'none';
        coffeeCupSlider.style.display = 'none';
        determineCalories(drink);
        height = $("#wine-glass-slider .fill").height();
        offset = $("#wine-glass-slider .fill").offset().top;
        break;
      case 'shot-glass':
        wineGlassSlider.style.display = 'none';
        shotGlassSlider.style.display = 'block';
        soloCupSlider.style.display = 'none';
        coffeeCupSlider.style.display = 'none';
        determineCalories(drink);
        height = $("#shot-glass-slider .fill").height();
        offset = $("#shot-glass-slider .fill").offset().top;
        break;
      case 'solo-cup':
        wineGlassSlider.style.display = 'none';
        shotGlassSlider.style.display = 'none';
        soloCupSlider.style.display = 'block';
        coffeeCupSlider.style.display = 'none';
        determineCalories(drink);
        height = $("#solo-cup-slider .fill").height();
        offset = $("#solo-cup-slider .fill").offset().top;
        break;
      case 'coffee-cup':
        wineGlassSlider.style.display = 'none';
        shotGlassSlider.style.display = 'none';
        soloCupSlider.style.display = 'none';
        coffeeCupSlider.style.display = 'block';
        determineCalories(drink);
        height = $("#coffee-cup-slider .fill").height();
        offset = $("#coffee-cup-slider .fill").offset().top;
		break;
      default:
    }
	  fillpercent = 1;
}

$("#cupright").click(function(event){
	"use strict";
    fillpercent = (((height + offset) - event.pageY) / height);
	if (fillpercent > 0 && fillpercent < 1) {
		$(".st1").css("-webkit-clip-path", "polygon(0 " + ((1-fillpercent)*100) + "%, 100% " + ((1-fillpercent)*100) + "%, 100% 100%, 0% 100%)");
		$("#text").text((fillpercent.toFixed(3)* determineCalories(drink)).toFixed(0));
}
});

$("#cupright").mousedown(function(){
	"use strict";
	isdragging = true;
});	
	
$("#cupright").mouseup(function(){
	"use strict";
	isdragging = false;
});	
	
$("#cupright").mousemove(function(event){
	"use strict";
	if (isdragging) {
    fillpercent = (((height + offset) - event.pageY) / height);
	if (fillpercent > 0 && fillpercent < 1) {
		$(".st1").css("-webkit-clip-path", "polygon(0 " + ((1-fillpercent)*100) + "%, 100% " + ((1-fillpercent)*100) + "%, 100% 100%, 0% 100%)");
		$("#text").text((fillpercent.toFixed(3)* determineCalories(drink)).toFixed(0));
}
	}
});	


$(document).scroll(function() {
	"use strict";
	var y = $(this).scrollTop();
	var bh1 = $("#home").offset().top + $("#home").height();
	var bh2 = $("#searchwrapper").offset().top + $("#searchwrapper").height();
	
	if (bh1 > 1) {
	
  	if (y > (bh1 - 100)) {
    	$('#bh1').fadeIn();
  	} else {
    	$('#bh1').fadeOut();
  	}
	if (y > (bh2 -100)) {
    	$('#bh2').fadeIn();
	} else {
    	$('#bh2').fadeOut();
	}
	}
});

});
