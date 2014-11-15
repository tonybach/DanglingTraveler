$(document).ready(function () {
	$('.dropdown').on({
		"shown.bs.dropdown": function() {this.closable = false},
		"click": function() {this.closable = true},
		"hide.bs.dropdown": function() {return this.closable}
	});

	var attractions = $("#attractions");
	var restaurants = $("#restaurants");

	$('.restaurants_dropdown').on('shown.bs.dropdown', function() {
		// $('.restaurants_dropdown').addClass("restaurantsToggle");
		$('.attractions_dropdown').addClass("attractionsToggle");
	});	
	$('.restaurants_dropdown').on('hidden.bs.dropdown', function() {
		// $('.restaurants_dropdown').removeClass("restaurantsToggle");
		$('.attractions_dropdown').removeClass("attractionsToggle");
	})

	$('.dropdown-menu').on('click', function(e) {
		e.stopPropagation();
	})	
	
	$(".backToUSMap").click(function() {
		$('.cityMap').css('visibility','hidden');
		$('.cityMapOptions').css('visibility','hidden');
		$('.USmap').css('opacity', '1');
		$('#buttons').css('visibility', 'visible');
		$('.USMapPageButtons').css('opacity', '1');

	});

	$(".changeSearch").click(function(){
		$("#travelform").css("display","block");
	});

});

