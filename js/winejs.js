// JavaScript Document

$(document).ready(function () {
"use strict";
var isdragging = false;	
var fillpercent = 1;

	
$("#thirdpg").click(function(event){
    fillpercent = ((($(".fill").height() + $(".fill").offset().top) - event.pageY) / $(".fill").height());
	if (fillpercent > 0 && fillpercent < 1) {
		$(".st1").css("-webkit-clip-path", "polygon(0 " + ((1-fillpercent)*100) + "%, 100% " + ((1-fillpercent)*100) + "%, 100% 100%, 0% 100%)");
		$("#text").text("Calories in drink: " + (fillpercent.toFixed(3)*100).toFixed(1));
}
});

$("#thirdpg").mousedown(function(){
	isdragging = true;
});	
	
$("#thirdpg").mouseup(function(){
	isdragging = false;
});	
	
$("#thirdpg").mousemove(function(event){
	if (isdragging) {
    fillpercent = ((($(".fill").height() + $(".fill").offset().top) - event.pageY) / $(".fill").height());
	if (fillpercent > 0 && fillpercent < 1) {
		$(".st1").css("-webkit-clip-path", "polygon(0 " + ((1-fillpercent)*100) + "%, 100% " + ((1-fillpercent)*100) + "%, 100% 100%, 0% 100%)");
		$("#text").text("Carories in drink: " + (fillpercent.toFixed(3)*100).toFixed(1));
}
	}
});	

});
	
function reset () {
	"use strict";
	$(".st1").css("-webkit-clip-path", "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)");
}