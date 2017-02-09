var drinks = document.getElementsByClassName('drink')
var leftShiftDrinks = document.getElementById('left-shift')
var rightShiftDrinks = document.getElementById('right-shift')
var selected_drinks = [0, 1, 2]

function shiftDrinksLeft() {
  selected_drinks = selected_drinks.map(function(el) {
    if (el == 0) {
      return (drinks.length - 1)
    }
    return el - 1
  })
  console.log(selected_drinks)
}

function shiftDrinksRight() {
  selected_drinks = selected_drinks.map(function(el) {
    if (el == (drinks.length - 1)) {
      return 0
    }
    return el + 1
  })
  console.log(selected_drinks)
}

rightShiftDrinks.onclick = shiftDrinksRight
leftShiftDrinks.onclick = shiftDrinksLeft
