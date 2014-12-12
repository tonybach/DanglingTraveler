$(document).ready(function () {

// -------------------------------------
// RESTAURANT & ATTRACTION DROPDOWNS
// -------------------------------------
	$('.dropdown').on({
		"shown.bs.dropdown": function() {this.closable = false},
		"click": function() {this.closable = true},
		"hide.bs.dropdown": function() {return this.closable}
	});

	var attractions = $("#attractions");
	var restaurants = $("#restaurants");

	$('.restaurants_dropdown').on('shown.bs.dropdown', function() {
		$('.attractions_dropdown').addClass("attractionsToggle");
	});	
	$('.restaurants_dropdown').on('hidden.bs.dropdown', function() {
		$('.attractions_dropdown').removeClass("attractionsToggle");
	})

	$('.dropdown-menu').on('click', function(e) {
		e.stopPropagation();
	})

	$('.dropdown-menu li a').on('click', function() {
		console.log($(this).text());
	})

// -------------------------------------
// BACK TO US MAP BUTTON
// -------------------------------------
	$(".backToUSMap").click(function() {
		$('.cityMap').css('visibility','hidden');
		$('.cityMapOptions').css('visibility','hidden');
		$('.USmap').css('opacity', '1');
		$('#buttons').css('visibility', 'visible');
		$('.USMapPageButtons').css('opacity', '1');
		$('#popup').css('visibility','visible');
	});

// -------------------------------------
// CHANGE SEARCH BUTTON
// -------------------------------------
	$('.ChangeSearch').magnificPopup({
		type: 'inline',
		items: {src: '#popup'},
		preloader: false,
		modal: false
	});

	$('#hideChangeSearch').on('click', function(e) {
    	e.preventDefault();
    	$.magnificPopup.close();
	});

	console.log(destination);
	console.log(restaurant_list);

// -------------------------------------
// MARKER DATA
// -------------------------------------
	// // <![CDATA[
	var USMarkers = {"markers": [
		{"name": destination, "icon": "img/orange_pin_2.png", "baloon_text": ""}
	]};

	var cityMarkers = {"markers": []};
	for (var i = 0; i< restaurant_list.length; i++) {
		cityMarkers.markers.push({"name": restaurant_list[i], "icon": "img/orange_pin_2.png", "baloon_text": ""})
	}
	console.log(cityMarkers);

	$(".USmap").mapmarker({
	zoom : 4,
	center : 'United States',
	markers : USMarkers
	});

	$(".cityMap").mapmarker({
	zoom: 10,
	center: destination,
	markers: cityMarkers
	});
	// //]]
});



