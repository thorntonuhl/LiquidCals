var right = document.getElementById('right-shift')
var left = document.getElementById('left-shift')

$(document).ready(function(){
  $('.carousel').carousel({indicators: true, dist: -10});
});

function shiftRight() {
  $('.carousel').carousel('next');
}

function shiftLeft() {
  $('.carousel').carousel('prev');
}

right.onclick = shiftRight;
left.onclick = shiftLeft;