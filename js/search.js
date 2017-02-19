/* -------------------
Javascript file for the second page
Includes functions that assigns values to the drink variable that is used to
search for the calorie data from the calorie db through input from the html
page.
---------------------*/


// var drinks = [
//   {label: "coke", value: 10},
//   {label: "diet coke", value: 100 }
// ]

var drinks = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];

// console.log(drinks)
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
  source: drinks
};


$("#search-bar").autocomplete(options);
