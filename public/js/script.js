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
	var cityMarkers;

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
		var category = $(this).text();
		if (category = "General") {
			category = "";
		}
		// $.ajax({
		// 	url: 'http://localhost:8080/USMap',
		// 	type: "POST",
		// 	data: {destination: destination, category: category},

		// 	success: function() {
		// 		cityMarkers = {"markers": []};
		// 		for (var i = 0; i< restaurant_list.length; i++) {
		// 			cityMarkers.markers.push({"name": restaurant_list[i], "icon": "img/orange_pin_2.png", "baloon_text": ""})
		// 		}
		// 		$(".cityMap").mapmarker({
		// 		zoom: 10,
		// 		center: destination,
		// 		markers: cityMarkers
		// 		});
		// 		// console.log(restaurant_list);
		// 	}
		// })
	})

// -------------------------------------
// BACK TO US MAP BUTTON
// -------------------------------------
	$(".backToUSMap").click(function() {
		// console.log(parent.history);
		// window.history.go('http://localhost:8080/USMap');
		// return false;
	// 	// $('.cityMap').css('visibility','hidden');
	// 	// $('.cityMapOptions').css('visibility','hidden');
	// 	// $('.USmap').css('opacity', '1');
	// 	// $('#buttons').css('visibility', 'visible');
	// 	// $('.USMapPageButtons').css('opacity', '1');
	// 	// $('#popup').css('visibility','visible');
		window.location.href = "http://localhost:8080/USMap/"
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

	// console.log(destination);
	// console.log(restaurant_list);

// -------------------------------------
// MARKER DATA
// -------------------------------------
	// // <![CDATA[		
	//console.log(destination,typeof destination);
	if(typeof destination=="string"){
		console.log(destination);
		var USMarkers = {"markers": [
		{"name": destination, "icon": "../../img/orange_pin_2.png", "baloon_text": ""}
		]};
		console.log(USMarkers);

	}

	else{

		var USMarkers = {"markers": []};
			for (var i = 0; i<destination.length; i++) {
				USMarkers.markers.push({"name": destination[i], "icon": "../../img/orange_pin_2.png", "baloon_text": ""})
			}
			console.log(USMarkers);
		}

	cityMarkers = {"markers": []};
	for (var i = 0; i< restaurant_list.length; i++) {
		cityMarkers.markers.push({"name": restaurant_list[i], "icon": "../../img/orange_pin_2.png", "baloon_text": ""})
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
	//]]
});


