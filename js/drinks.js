/* -----------------------
Drink calorie database.
All calorie data is based off of 12 fluid ounces.
Includes necessary extrapolation based on similar drinks.
------------------------*/

var drinks = [
  {"label" : 'Coke'                 , "value" : 140 },
  {"label" : 'Coke Cherry'          , "value" : 154 },
  {"label" : 'Pepsi'                , "value" : 150 },
  {"label" : 'Mountain Dew'         , "value" : 170 },
  {"label" : 'Sprite'               , "value" : 140 },
  {"label" : 'Fanta'                , "value" : 160 }, //orange fanta
  {"label" : 'Mist Twst'            , "value" : 150 }, //sierra mist
  {"label" : 'Dr Pepper'            , "value" : 150 },
  {"label" : 'Dr Pepper Cherry'     , "value" : 156 },

  {"label" : 'Gatorade'             , "value" : 80  }, //value same regardless of flavor
  {"label" : 'Powerade'             , "value" : 80  },

  {"label" : 'Orange Juice'         , "value" : 165 }, //Dole no pulp OJ
  {"label" : 'Izze Sparkling Juice' , "value" : 129 }, //value same regardless of flavor

  {"label" : 'Lemonade'             , "value" : 150 }, //minute maid lemonade
  {"label" : 'Odwalla Smoothie'     , "value" : 221 }, //odwalla mango tango smoothie
  {"label" : 'Milk'                 , "value" : 155 }, //generic google 'Milk'

  {"label" : 'Red Bull'             , "value" : 157 },
  {"label" : 'Monster'              , "value" : 143 }, //generic google 'Monster'
  {"label" : '5 Hour Energy'        , "value" : 25  },
  
  {"label" : 'Coffee'               , "value" : 60  }, //pure coffee with no additives
  {"label" : 'Latte'                , "value" : 150 }, //all data from starbucks
  {"label" : 'Mocha'                , "value" : 230 }, 
  {"label" : 'Cappuccino'           , "value" : 90  },
  {"label" : 'Caramel Macchiato'    , "value" : 190 } ,

  {"label" : 'Vodka'                , "value" : 768 }, //generic google
  {"label" : 'Beer'                 , "value" : 156 }, //generic google
  
  {"label" : 'Blue Moon'            , "value" : 171 }, //blue moon belgian white beer
  {"label" : 'Grey Goose Vodka'     , "value" : 828 }, //grey goose vodka

  {"label" : 'Wine'                 , "value" : 295 }, //generic google 'wine'
  {"label" : 'Champagne'            , 'value' : 285 }, //generic google 'champagne'
  
  {"label" : 'Arizona Lemon Tea'    , "value" : 135 }, //arizona lemon tea
  {"label" : 'Arizona Green Tea'    , "value" : 90  },  //arizona green tea 
  ]
