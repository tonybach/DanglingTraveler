$(document).ready(function () {

// -------------------------------------
// BACK TO US MAP BUTTON
// -------------------------------------
	$(".backToUSMapFromCityMap").click(function() {
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
			restaurant.snippet_text = restaurant.snippet_text.replace(/'/g, "&#39;");
			restaurant.name = restaurant.name.replace(/'/g, "&#39;");
			var baloonTextWithoutSave = "<div class = &#39;savedPreferencesWrapper&#39;> <h4>" + restaurant.name + "</h4><div style = &#39;float: right;&#39;><img src=" + restaurant.img + " width=120 height=120 /></div><div><div><img src = " + restaurant.rating_img + " width = 75 height = 20/>   " + restaurant.review_count + " reviews</div><div style = &#39;font-size: 14px;&#39;> <u> Kind of restaurant:</u> " + restaurant.categories + "</div><div style = &#39;font-size: 14px;&#39;> <u> Address:</u> " + restaurant.address + "</div><div style = &#39;font-size: 14px;&#39;> <u> Phone number:</u> " + restaurant.phone + "</div><div> <u style = &#39;font-size: 14px;&#39;> Review snippet:</u> <i>" + restaurant.snippet_text + "</i></div></div></div>" + "'><button class = 'btn btn-primary LocalStorage' id = 'restaurantSave' type = 'button'> Save</button></div></div></div>";
			var baloonTextWithSave =  "<h4>" + restaurant.name + "</h4><div style = 'float: right;'><img src='" + restaurant.img + "'width='120' height='120'/></div><div><div><img src = '" + restaurant.rating_img + "' width = '75' height = '20'>   " + restaurant.review_count + " reviews</div><div style = 'font-size: 14px;'> <u> Kind of restaurant:</u> " + restaurant.categories + "</div><div style = 'font-size: 14px;'> <u> Address:</u> " + restaurant.address + "</div><div style = 'font-size: 14px;'> <u> Phone number:</u> " + restaurant.phone + "</div><div> <u style = 'font-size: 14px;'> Review snippet:</u> <i>" + restaurant.snippet_text + "</i></div><div style = 'clear: both; text-align: center'><form action = '/USMap/" + destination + "/restaurants/arts' method = 'POST'><input type='hidden' class= 'hiddenField' name='id' id = 'hiddenFieldRestaurant' value= '" + baloonTextWithoutSave;
			var baloonTextWithSave2 =  "<h4>" + restaurant.name + "</h4><div style = 'float: right;'><img src='" + restaurant.img + "'width='120' height='120'/></div><div><div><img src = '" + restaurant.rating_img + "' width = '75' height = '20'>   " + restaurant.review_count + " reviews</div><div style = 'font-size: 14px;'> <u> Kind of restaurant:</u> " + restaurant.categories + "</div><div style = 'font-size: 14px;'> <u> Address:</u> " + restaurant.address + "</div><div style = 'font-size: 14px;'> <u> Phone number:</u> " + restaurant.phone + "</div><div> <u style = 'font-size: 14px;'> Review snippet:</u> <i>" + restaurant.snippet_text + "</i></div><div style = 'clear: both; text-align: center'><input type='hidden' class= 'hiddenField' name='id' value= '" + baloonTextWithoutSave;

			cityMarkers.markers.push({"name": restaurant.address, "icon": "/img/orange_pin.png", "baloon_text": baloonTextWithSave});	
		}

		for (var j = 0; j < attraction_list.length; j++) {
			var attraction = attraction_list[j];
			cityMarkers.markers.push({"name": attraction.address, "icon": "/img/blue_pin.png", "baloon_text": "<h4>" + attraction.name + "</h4><div style = 'float: right;'><img src='" + attraction.img + "'width='120' height='120'/></div><div><div><img src = '" + attraction.rating_img + "' width = '75' height = '20'>   " + attraction.review_count + " reviews</div><div style = 'font-size: 14px;'><u> Kind of attraction:</u> " + attraction.categories + "</div><div style = 'font-size: 14px;'> <u> Address:</u> " + attraction.address + "</div><div style = 'font-size: 14px;'> <u> Phone number:</u> " + attraction.phone + "</div><div> <u style = 'font-size: 14px;'> Review snippet:</u> <i>" + attraction.snippet_text + "</i></div><div style = 'clear: both; text-align: center'><form action = '/USMap/" + destination + "/restaurants/arts' method = 'POST'><input type='hidden' class= 'hiddenField' name='id' value='" + destination + "*" +attraction.address+"*"+attraction.name+"*"+attraction.categories+"*"+attraction.phone+"' /><input class = 'btn btn-primary LocalStorage' type = 'submit' value = 'Save'></form></div></div>"})		
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

	function saveToLocalStorage(htmlText) {
	  	// , myValue = { restaurant: restaurant };

		// localStorage.setItem('Saved Preferences', myValue);
		localStorage.setItem('Saved Preferences', htmlText);
		myValue = localStorage.getItem('Saved Preferences');
		// myValue = myValue.split("*");
		savedPreferences.push(myValue)
		console.log(myValue);
		console.log(savedPreferences);			
	};

	function testFunc() {
		console.log("hello there");
	}

});

//-----------------------------------------------------------------------
//Local Storage
//-----------------------------------------------------------------------

// $('#LocalStorage').on('click', function() {
// 	// var restaurant=req.body.id;
// 	// console.log(restaurant);
// 	// console.log("success");
// 	var Storage = require('dom-storage');
// 	var localStorage = new Storage('./db.json', { strict: false, ws: '  ' });

//   	// , myValue = { restaurant: restaurant };

// 	// localStorage.setItem('Saved Preferences', myValue);
// 	localStorage.setItem('Saved Preferences', restaurant);
// 	myValue = localStorage.getItem('Saved Preferences');
// 	myValue = myValue.split("*");
// 	savedPreferences.push(myValue)
// 	console.log(myValue);
// 	console.log(savedPreferences);			
// });

