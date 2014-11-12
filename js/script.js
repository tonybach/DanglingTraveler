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
	
	$(".backToUSMap").click(function() {
		// $('.cityMap').css('display','none');
		// $('.cityMapOptions').css('display','none');
		$('.cityMap').css('visibility','hidden');
		$('.cityMapOptions').css('visibility','hidden');
		$('.USmap').css('opacity', '1');
		$('.USMapPageButtons').css('opacity', '1');
	});

});

