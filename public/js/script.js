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
	$('.ChangeSearch').on('click', function() {
		$('#popup').css('display', 'block');
	});

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
	// console.log(restaurant_list);

// -------------------------------------
// MARKER DATA
// -------------------------------------
	// <![CDATA[		
	//console.log(destination,typeof destination);

	if (typeof destination!="string"){
		var USMarkers = {"markers": []};
		for (var i = 0; i<destination.length; i++) {
			USMarkers.markers.push({"name": destination[i], "icon": "../../img/orange_pin_2.png", "baloon_text": ""})
		}
	} 
	else {
		var USMarkers={"markers":[{"name": destination, "icon": "../../img/orange_pin_2.png", "baloon_text": ""}]};
	}

	if (typeof(restaurant_list) !== 'undefined' && typeof(attraction_list) !== 'undefined') {
		var cityMarkers = {"markers": []};
		for (var i = 0; i<restaurant_list.length; i++) {
			// var img = document.createElement('img');
			// img.crossOrigin = 'anonymous';
			// img.src = restaurant_list[i].img;
			// img.onload = function(e) {
			var restaurant=restaurant_list[i];
			var attraction=attraction_list[i];
			
			
			cityMarkers.markers.push({"name": restaurant_list[i].address, "icon": "http://localhost:8080/img/blue_pin_2.png", "baloon_text": "<h4>" + restaurant_list[i].name + "</h4><div style = 'float: right;'><img src=" + restaurant_list[i].img + "width='120' height='120'/></div><div><div><img src = '" + restaurant_list[i].rating_img + "' width = '75' height = '20'>   " + restaurant_list[i].review_count + " reviews</div><div style = 'font-size: 14px;'>" + restaurant_list[i].categories + "</div><div style = 'font-size: 14px;'>" + restaurant_list[i].address + "</div><div style = 'font-size: 14px;'>" + restaurant_list[i].phone + "</div><div style = 'font-style: italic;'>" + restaurant_list[i].snippet_text + "</div><div style = 'clear: both; text-align: center'><form action = '#' method = 'POST'><input type='hidden' id= 'hiddenField' name='id' value='"+restaurant.address+","+restaurant.name+","+restaurant.categories+","+restaurant.phone+"' /><input class = 'btn btn-primary' type = 'submit' id='LocalStorage' value = 'Save!'></form></div></div>"})
			// }
			// cityMarkers.markers.push({"name": restaurant_list[i].address, "icon": "http://localhost:8080/img/orange_pin_2.png", "baloon_text": ""})		
		}
		for (var j = 0; j<attraction_list.length; j++) {
			cityMarkers.markers.push({"name": attraction_list[j].address, "icon": "http://localhost:8080/img/orange_pin_2.png", "baloon_text": "<h4>" + attraction_list[j].name + "</h4><div style = 'float: right;'><img src=" + attraction_list[j].img + "width='120' height='120'/></div><div><div><img src = '" + attraction_list[j].rating_img + "' width = '75' height = '20'>   " + attraction_list[j].review_count + " reviews</div><div style = 'font-size: 14px;'>" + attraction_list[j].categories + "</div><div style = 'font-size: 14px;'>" + attraction_list[j].address + "</div><div style = 'font-size: 14px;'>" + attraction_list[j].phone + "</div><div style = 'font-style: italic;'>" + attraction_list[j].snippet_text + "</div><div style = 'clear: both; text-align: center'><form action = '#' method = 'POST'><input type='hidden' id= 'hiddenField' name='id' value='"+attraction.address+","+attraction.name+","+attraction.categories+","+attraction.phone+"' /><input class = 'btn btn-primary' type = 'submit' id='LocalStorage' value = 'Save!'></form></div></div>"})		
		}
		$(".cityMap").mapmarker({
		zoom: 12,
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
$('#LocalStorage').on('click', function() {
	$('#hiddenField').value="abcd";
		
	});

