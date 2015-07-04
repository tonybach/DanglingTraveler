(function($){
	$.fn.mapmarker = function(options){
		var opts = $.extend({}, $.fn.mapmarker.defaults, options);

		return this.each(function() {
			// Apply plugin functionality to each element
			var map_element = this;
			addMapMarker(map_element, opts.zoom, opts.center, opts.markers);
		});
	};
	
	// Set up default values
	var defaultMarkers = {
		"markers": []
	};

	$.fn.mapmarker.defaults = {
		zoom	: 8,
		center	: 'United States',
		markers	: defaultMarkers
	}

	function testFunc() {
		console.log("hello world");
	}

	// function saveToLocalStorage(htmlText) {
	//   	// , myValue = { restaurant: restaurant };

	// 	// localStorage.setItem('Saved Preferences', myValue);
	// 	localStorage.setItem('Saved Preferences', htmlText);
	// 	myValue = localStorage.getItem('Saved Preferences');
	// 	// myValue = myValue.split("*");
	// 	savedPreferences.push(myValue)
	// 	console.log(myValue);
	// 	console.log(savedPreferences);			
	// }
	
	// Main function code here (ref:google map api v3)
	function addMapMarker(map_element, zoom, center, markers){
		//console.log($.fn.mapmarker.defaults['center']);
		
		//Set center of the Map
		var myOptions = {
		  zoom: zoom,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(map_element, myOptions);
		var geocoder = new google.maps.Geocoder();
		var infowindow = new google.maps.InfoWindow({});
		var baloon_text = "";
		
		geocoder.geocode( { 'address': center}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				//In this case it creates a marker, but you can get the lat and lng from the location.LatLng
				map.setCenter(results[0].geometry.location);
			}
			else{
				console.log("Geocode was not successful for the following reason: " + status);
			}
		});
		
		//run the marker JSON loop here
		$.each(markers.markers, function(i, the_marker){
			name=the_marker.name;
			var baloon_text=the_marker.baloon_text;

			var myURL;

			if (typeof destination!="string") {
				if (name == destination[i]) {
					myURL="/USMap/"+encodeURI(destination[i])+"/restaurants/arts";
				}
			} else {
				if (name == destination) {
					myURL="/USMap/"+encodeURI(destination)+"/restaurants/arts";
				}
			}

			// var infowindow = new google.maps.InfoWindow({});
			

			geocoder.geocode({'address': name}, function(results, status) {

				if (status == google.maps.GeocoderStatus.OK) {
					var marker = new google.maps.Marker({
						map: map, 
						position: results[0].geometry.location,
						animation: google.maps.Animation.DROP,
						icon: the_marker.icon,
						myURL: myURL
					});

					google.maps.event.addListener(marker, 'mouseover', function() {

						// checking to see if the place is already saved, then show the appropriate value for
						// the Save button.

						if (infowindow) {
							infowindow.close();
							infowindow.setContent('');
						}

						infowindow = new google.maps.InfoWindow({
							content: baloon_text
						});

						google.maps.event.addListener(infowindow, 'domready', function() {
							var currentStorage;

							// document.getElementById("restaurantSave").addEventListener("mouseover", function() {
							// 	console.log("yo!");
							// })
							document.getElementById("restaurantSave").addEventListener("click", function() {
								// console.log('no :(');

								currentStorage = localStorage.getItem('Saved Preferences');
								var hiddenFieldRestaurant = document.getElementById("hiddenFieldRestaurant").value;
								if (currentStorage == null) {
									currentStorage = hiddenFieldRestaurant;
								} else {
									if (currentStorage.indexOf(hiddenFieldRestaurant) > -1) {
										currentStorage = currentStorage.replace(currentStorage.substr(currentStorage.indexOf(hiddenFieldRestaurant), hiddenFieldRestaurant.length), "")
									} else {
										currentStorage += hiddenFieldRestaurant;
									}
								}
								localStorage.setItem('Saved Preferences', currentStorage);

								// change the Save button to Saved, or vice-versa

								if (baloon_text.indexOf('</h4>') > -1) {
									var placeName = baloon_text.substring(4, baloon_text.indexOf('</h4>'));

									if (localStorage.getItem('Saved Preferences') && localStorage.getItem('Saved Preferences').indexOf(placeName) > -1) {
										baloon_text = baloon_text.replace("btn-primary", "btn-success");
										baloon_text = baloon_text.replace("'button'>Save", "'button'>Saved!");
									} else if (baloon_text.indexOf("btn-success") > -1) {
										baloon_text = baloon_text.replace("btn-success", "btn-primary");
										baloon_text = baloon_text.replace("'button'>Saved!", "'button'>Save");
									}
								}

								infowindow.close();
								infowindow.setContent('');
								infowindow = new google.maps.InfoWindow({
									content: baloon_text
								});
								infowindow.open(map, marker);
								// console.log(baloon_text);
							});

							document.getElementById("attractionSave").addEventListener("click", function() {
								console.log('yay!');

								currentStorage = localStorage.getItem('Saved Preferences');
								var hiddenFieldAttraction = document.getElementById("hiddenFieldAttraction").value;
								if (currentStorage == null) {
									currentStorage = hiddenFieldAttraction;
								} else {
									currentStorage += hiddenFieldAttraction;
								}
								localStorage.setItem('Saved Preferences', currentStorage);
							});

						});

						infowindow.open(map,marker);
						
					});
					
					google.maps.event.addListener(marker, 'click', function() {
						// Close all open infowindows
						if (baloon_text == infowindow.getContent()) {
							infowindow.close();
							infowindow.setContent('');
						} else {
							google.maps.event.trigger(marker, 'mouseover');
						}
						
						if (marker.myURL != null) {
							window.location.href = marker.myURL;
						}

					});
				}
			
				else {
					alert("Geocode was not successful for the following reason " + status);
				}

			});	
				//console.log(marker);
				// Set up markers with info windows 
		});
	}
})(jQuery);