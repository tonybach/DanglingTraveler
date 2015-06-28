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
		// 			cityMarkers.markers.push({"name": restaurant_list[i], "icon": "img/orange_pin.png", "baloon_text": ""})
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
		window.history.go(-parseInt(visitsToCityMap));
		// return false;
	// 	// $('.cityMap').css('visibility','hidden');
	// 	// $('.cityMapOptions').css('visibility','hidden');
	// 	// $('.USmap').css('opacity', '1');
	// 	// $('#buttons').css('visibility', 'visible');
	// 	// $('.USMapPageButtons').css('opacity', '1');
	// 	// $('#popup').css('visibility','visible');
		// window.location.href = "/USMap/"
	});

// -------------------------------------
// CHANGE SEARCH & PRINT ROUTE SUMMARY
// -------------------------------------
	$('.ChangeSearch').on('click', function() {
		$('#popup').css('display', 'block');
	});

	$('.ChangeSearch').magnificPopup({
		type: 'inline',
		items: {src: '#popup'},
		preloader: false,
		modal: false
	});

	// $('#hideChangeSearch').on('click', function(e) {
 //    	e.preventDefault();
 //    	$.magnificPopup.close();
	// });

	$('#closePopup').on('click', function(e) {
    	e.preventDefault();
    	$.magnificPopup.close();
	});

	console.log(destination);
	// console.log(visits);

	// console.log(restaurant_list);

	$('.USMapPageButtons').on('click', function() {
		window.location.href = "/USMap/print";
	})

// -------------------------------------
// MARKER DATA
// -------------------------------------
	// <![CDATA[		
	//console.log(destination,typeof destination);

	if (typeof destination!="string"){
		var USMarkers = {"markers": []};
		for (var i = 0; i<destination.length; i++) {
			USMarkers.markers.push({"name": destination[i], "icon": "/img/orange_pin.png", "baloon_text": "<b>" + destination[i] + "</b"})
		}
	} 
	else {
		var USMarkers = {"markers":[{"name": destination, "icon": "/img/orange_pin.png", "baloon_text": "<b>" + destination + "</b"}]};
	}

	if (typeof(restaurant_list) !== 'undefined' && typeof(attraction_list) !== 'undefined') {
		var cityMarkers = {"markers": []};
		for (var i = 0; i < restaurant_list.length; i++) {
			var restaurant = restaurant_list[i];
			cityMarkers.markers.push({"name": restaurant.address, "icon": "/img/orange_pin.png", "baloon_text": "<h4>" + restaurant.name + "</h4><div style = 'float: right;'><img src='" + restaurant.img + "'width='120' height='120'/></div><div><div><img src = '" + restaurant.rating_img + "' width = '75' height = '20'>   " + restaurant.review_count + " reviews</div><div style = 'font-size: 14px;'> <u> Kind of restaurant:</u> " + restaurant.categories + "</div><div style = 'font-size: 14px;'> <u> Address:</u> " + restaurant.address + "</div><div style = 'font-size: 14px;'> <u> Phone number:</u> " + restaurant.phone + "</div><div> <u style = 'font-size: 14px;'> Review snippet:</u> <i>" + restaurant.snippet_text + "</i></div><div style = 'clear: both; text-align: center'><form action = '/USMap/" + destination + "/restaurants/arts' method = 'POST'><input type='hidden' class= 'hiddenField' name='id' value='"+destination + "*"+restaurant.address+"*"+restaurant.name+"*"+restaurant.categories+"*"+restaurant.phone+"' /><input class = 'btn btn-primary LocalStorage' type = 'button' value = 'Save'></form></div></div>"})	
		}

		for (var j = 0; j < attraction_list.length; j++) {
			var attraction = attraction_list[j];
			cityMarkers.markers.push({"name": attraction.address, "icon": "/img/blue_pin.png", "baloon_text": "<h4>" + attraction.name + "</h4><div style = 'float: right;'><img src='" + attraction.img + "'width='120' height='120'/></div><div><div><img src = '" + attraction.rating_img + "' width = '75' height = '20'>   " + attraction.review_count + " reviews</div><div style = 'font-size: 14px;'><u> Kind of attraction:</u> " + attraction.categories + "</div><div style = 'font-size: 14px;'> <u> Address:</u> " + attraction.address + "</div><div style = 'font-size: 14px;'> <u> Phone number:</u> " + attraction.phone + "</div><div> <u style = 'font-size: 14px;'> Review snippet:</u> <i>" + attraction.snippet_text + "</i></div><div style = 'clear: both; text-align: center'><form action = '/USMap/" + destination + "/restaurants/arts' method = 'POST'><input type='hidden' class= 'hiddenField' name='id' value='" + destination + "*" +attraction.address+"*"+attraction.name+"*"+attraction.categories+"*"+attraction.phone+"' /><input class = 'btn btn-primary LocalStorage' type = 'button' value = 'Save'></form></div></div>"})		
		}
		
		$(".cityMap").mapmarker({
		zoom: 10,
		center: destination,
		markers: cityMarkers
		});
	}
	 
	$(".USmap").mapmarker({
	zoom : 4,
	center : 'United States',
	markers : USMarkers
	});

	//]]



});

//-----------------------------------------------------------------------
//Local Storage
//-----------------------------------------------------------------------


