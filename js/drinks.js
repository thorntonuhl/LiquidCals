/* -----------------------
Drink calorie database.
All calorie data is based off of 12 fluid ounces.
Includes necessary extrapolation based on similar drinks.
------------------------*/

var drinks = [
  {"label" : 'coke'                 , "value" : 140 },
  {"label" : 'coke cherry'          , "value" : 154 },
  {"label" : 'pepsi'                , "value" : 150 },
  {"label" : 'mountain dew'         , "value" : 170 },
  {"label" : 'sprite'               , "value" : 140 },
  {"label" : 'fanta'                , "value" : 160 }, //orange fanta
  {"label" : 'mist twst'            , "value" : 150 }, //sierra mist
  {"label" : 'dr pepper'            , "value" : 150 },
  {"label" : 'dr pepper cherry'     , "value" : 156 },

  {"label" : 'gatorade'             , "value" : 80  }, //value same regardless of flavor
  {"label" : 'powerade'             , "value" : 80  },

  {"label" : 'orange juice'         , "value" : 165 }, //Dole no pulp OJ
  {"label" : 'izze sparkling juice' , "value" : 129 }, //value same regardless of flavor
  {"label" : 'lemonade'             , "value" : 150 }, //minute maid lemonade
  {"label" : 'odwalla smoothie'     , "value" : 221 }, //odwalla mango tango smoothie
  {"label" : 'milk'                 , "value" : 155 }, //generic google

  {"label" : 'red bull'             , "value" : 157 },
  {"label" : 'monster'              , "value" : 143 }, //generic google
  {"label" : '5 hour energy'        , "value" : 25  },
  
  {"label" : 'coffee'               , "value" : 60  }, //pure coffee with no additives
  {"label" : 'latte'                , "value" : 150 }, //all data from starbucks
  {"label" : 'mocha'                , "value" : 230 }, 
  {"label" : 'cappuccino'           , "value" : 90  },
  {"label" : 'caramel macchiato'    , "value" : 190 } ,

  {"label" : 'vodka'                , "value" : 768 }, //generic google
  {"label" : 'beer'                 , "value" : 156 }, //generic google
  
  {"label" : 'blue moon'            , "value" : 171 }, //blue moon belgian white beer
  {"label" : 'grey goose vodka'     , "value" : 828 }, //grey goose vodka
  
  {"label" : 'arizona lemon tea'    , "value" : 135 }, //arizona lemon tea
  {"label" : 'arizona green tea'    , "value" : 90  },  //arizona green tea 
  ]
