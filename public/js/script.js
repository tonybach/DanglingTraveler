$(document).ready(function () {

// -------------------------------------
// BACK TO US MAP BUTTON
// -------------------------------------
	$(".backToUSMapFromCityMap").click(function() {
		window.history.go(-parseInt(visitsToCityMap));
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

	$('#closePopup').on('click', function(e) {
    	e.preventDefault();
    	$.magnificPopup.close();
	});

	console.log(destination);

	$('.USMapPageButtons').on('click', function() {
		window.location.href = "/USMap/print";
	});


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
		if (restaurant_list.length == 0) {
			sweetAlert("Oops...", "There is no " + restaurantCategory + " restaurant in this area!", "error");
		}
		if (attraction_list.length == 0) {
			sweetAlert("Oops...", "There is no " + attractionCategory + " in this area!", "error");
		}
		for (var i = 0; i < restaurant_list.length; i++) {
			var restaurant = restaurant_list[i];

			var restaurantSaveButton;
			if (localStorage.getItem('Saved Preferences') && localStorage.getItem('Saved Preferences').indexOf(restaurant.name) > -1) {
				restaurantSaveButton = "<button class = 'btn btn-success LocalStorage' id = 'restaurantSaved' type = 'button'>Saved!</button>"
			} else {
				restaurantSaveButton = "<button class = 'btn btn-primary LocalStorage' id = 'restaurantSave' type = 'button'>Save</button>"
			}

			restaurant.snippet_text = restaurant.snippet_text.replace(/'/g, "&#39;");
			restaurant.snippet_text = restaurant.snippet_text.replace(/"/g, "&#34;");
			restaurant.name = restaurant.name.replace(/'/g, "&#39;");
			restaurant.name = restaurant.name.replace(/"/g, "&#34;");
			restaurant.address = restaurant.address.replace(/'/g, "&#39;");
			restaurant.address = restaurant.address.replace(/"/g, "&#34;");

			var baloonTextWithoutSave = "<div class = &#39;savedPreferencesWrapper&#39;><div class = &#39;placeName&#39;> <h4 style = &#39 display: inline &#39>" + restaurant.name + "</h4><span class = &#39;glyphicon glyphicon-remove-sign no-print removeSavedPlace&#39; title = &#39;Remove this restaurant&#39;></span></div><div style = &#39;float: right;&#39;><img src=" + restaurant.img + " width=120 height=120 /></div><div><div><img src = " + restaurant.rating_img + " width = 75 height = 20/>   " + restaurant.review_count + " reviews</div><div style = &#39;font-size: 14px;&#39;> <u> Kind of restaurant:</u> " + restaurant.categories + "</div><div style = &#39;font-size: 14px;&#39;> <u> Address:</u> " + restaurant.address + "</div><div style = &#39;font-size: 14px;&#39;> <u> Phone number:</u> " + restaurant.phone + "</div><div> <u style = &#39;font-size: 14px;&#39;> Review snippet:</u> <i>" + restaurant.snippet_text + "</i></div></div></div>" + "'>" + restaurantSaveButton + "</div></div></div>";
			var baloonTextWithSave =  "<h4>" + restaurant.name + "</h4><div style = 'float: right;'><img src='" + restaurant.img + "'width='120' height='120'/></div><div><div><img src = '" + restaurant.rating_img + "' width = '75' height = '20'>   " + restaurant.review_count + " reviews</div><div style = 'font-size: 14px;'> <u> Kind of restaurant:</u> " + restaurant.categories + "</div><div style = 'font-size: 14px;'> <u> Address:</u> " + restaurant.address + "</div><div style = 'font-size: 14px;'> <u> Phone number:</u> " + restaurant.phone + "</div><div> <u style = 'font-size: 14px;'> Review snippet:</u> <i>" + restaurant.snippet_text + "</i></div><div style = 'clear: both; text-align: center'><form action = '/USMap/" + destination + "/restaurants/arts' method = 'POST'><input type='hidden' class= 'hiddenField' name='id' id = 'hiddenFieldRestaurant' value= '" + baloonTextWithoutSave;

			cityMarkers.markers.push({"name": restaurant.address, "icon": "/img/orange_pin.png", "baloon_text": baloonTextWithSave});	
		}

		for (var j = 0; j < attraction_list.length; j++) {
			var attraction = attraction_list[j];

			var attractionSaveButton;
			if (localStorage.getItem('Saved Preferences') && localStorage.getItem('Saved Preferences').indexOf(attraction.name) > -1) {
				attractionSaveButton = "<button class = 'btn btn-success LocalStorage' id = 'attractionSaved' type = 'button'>Saved!</button>"
			} else {
				attractionSaveButton = "<button class = 'btn btn-primary LocalStorage' id = 'attractionSave' type = 'button'>Save</button>"
			}

			attraction.snippet_text = attraction.snippet_text.replace(/'/g, "&#39;");
			attraction.snippet_text = attraction.snippet_text.replace(/"/g, "&#34;");
			attraction.name = attraction.name.replace(/'/g, "&#39;");
			attraction.name = attraction.name.replace(/"/g, "&#34;");
			attraction.address = attraction.address.replace(/'/g, "&#39;");
			attraction.address = attraction.address.replace(/"/g, "&#34;");

			var baloonTextWithoutSave = "<div class = &#39;savedPreferencesWrapper&#39;><div class = &#39;placeName&#39;> <h4 style = &#39 display: inline &#39>" + attraction.name + "</h4><span class = &#39;glyphicon glyphicon-remove-sign no-print removeSavedPlace&#39; title = &#39;Remove this attraction&#39;></span></div><div style = &#39;float: right;&#39;><img src=" + attraction.img + " width=120 height=120 /></div><div><div><img src = " + attraction.rating_img + " width = 75 height = 20/>   " + attraction.review_count + " reviews</div><div style = &#39;font-size: 14px;&#39;> <u> Kind of attraction:</u> " + attraction.categories + "</div><div style = &#39;font-size: 14px;&#39;> <u> Address:</u> " + attraction.address + "</div><div style = &#39;font-size: 14px;&#39;> <u> Phone number:</u> " + attraction.phone + "</div><div> <u style = &#39;font-size: 14px;&#39;> Review snippet:</u> <i>" + attraction.snippet_text + "</i></div></div></div>" + "'>" + attractionSaveButton + "</div></div></div>";
			var baloonTextWithSave =  "<h4>" + attraction.name + "</h4><div style = 'float: right;'><img src='" + attraction.img + "'width='120' height='120'/></div><div><div><img src = '" + attraction.rating_img + "' width = '75' height = '20'>   " + attraction.review_count + " reviews</div><div style = 'font-size: 14px;'> <u> Kind of attraction:</u> " + attraction.categories + "</div><div style = 'font-size: 14px;'> <u> Address:</u> " + attraction.address + "</div><div style = 'font-size: 14px;'> <u> Phone number:</u> " + attraction.phone + "</div><div> <u style = 'font-size: 14px;'> Review snippet:</u> <i>" + attraction.snippet_text + "</i></div><div style = 'clear: both; text-align: center'><form action = '/USMap/" + destination + "/restaurants/arts' method = 'POST'><input type='hidden' class= 'hiddenField' name='id' id = 'hiddenFieldAttraction' value= '" + baloonTextWithoutSave;

			cityMarkers.markers.push({"name": attraction.address, "icon": "/img/blue_pin.png", "baloon_text": baloonTextWithSave})		
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

