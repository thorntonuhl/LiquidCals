/* -------------------
Javascript file for the second page
Includes functions that assigns values to the drink variable that is used to
search for the calorie data from the calorie db through input from the html
page.
---------------------*/



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
var drink_names = []
drinks.forEach(function(drink) {
  drink_names.push(drink.label)
})

var secondpg = document.getElementById('secondpg'); //Adjust name as needed
var submit = document.getElementById('submit_button');
var searchbar = document.getElementById('search_button');

function changedrink(drinktemp) {	//drink should be a string
	searchbar.value = drinktemp;
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

var options = {
  source: drink_names
};


$("#search-bar").autocomplete(options);

