$(document).ready(function () {
	var restaurants = $("#restaurants");
	var attractions = $("#attractions");
	restaurants.click(function() {
		attractions.toggleClass("attractionsToggle");
	})
	// restaurants.focusin(function() {
	// 	attractions.css("margin-top", "115px");
	// 	$(".restaurantList").css("display","block");		
	// });

	// restaurants.focusout(function() {
	// 	$(".restaurantList").css("display","none");			
	// 	attractions.css("margin-top", "5px");
	// });
	// restaurants.mouseout(function() {
	// 	$(".dropdown-menu").css("display","none");
	// 	attractions.css("margin-top", "5px")
	// });
});