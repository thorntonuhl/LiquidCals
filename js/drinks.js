/* -----------------------
Drink calorie database.
All calorie data is based off of 12 fluid ounces.
Includes necessary extrapolation based on similar drinks.
------------------------*/

var drinks = [
  {"label" : 'coke' , "value" : 140 }
  //{"label" : 'diet coke' , "value" : 1 }
  {"label" : 'coke cherry' , "value" : 154 }
  //{"label" : 'coke zero' , "value" : 1 }
  {"label" : 'pepsi' , "value" : 150 }
  {"label" : 'mountain dew' , "value" : 170 }
  /*{"label" : 'diet mountain dew' , "value" ; 0 }
  {"label" : 'mountain dew voltage' , "value" : 170 }
  {"label" : 'mountain dew code red' , "value" : 170 }*/
  {"label" : 'gatorade' , "value" : 80 } //value same regardless of flavor
  {"label" : 'orange juice' , "value" : 165 } //Dole no pulp OJ
  {"label" : 'izze sparkling juice' , "value" : 129 } //value same regardless of flavor
  {"label" : 'red bull' , "value" : 157 }
  {"label" : 'monster' , "value" : 143 } //generic google
  {"label" : 'vodka' , "value" : 768 } //generic google
  {"label" : 'beer' , "value" : 156 } //generic google
  {"label" : 'milk' , "value" : 155 } //generic google
  {"label" : 'latte' , "value" : 150 } //starbucks caffe latte w/ 2% milk
  {"label" : 'mocha' , "value" : 230 } //starbucks caffe mocha w/ 2% milk
  {"label" : 'cappuccino' , "value" : 90 } //starbucks cappucino
  {"label" : 'lemonade' , "value" : 150 } //minute maid lemonade
  {"label" : 'odwalla smoothie' , "value" : 221 } //odwalla mango tango smoothie
  {"label" : 'sprite' , "value" : 140 }
  {"label" : 'powerade' , "value" : 80 }
  {"label" : 'fanta' , "value" : 160 } //orange fanta
  {"label" : 'mist twst' , "value" : 150 }
  {"label" : 'dr pepper' , "value" : 150 }
  {"label" : 'dr pepper cherry' , "value" : 156 }
  ]