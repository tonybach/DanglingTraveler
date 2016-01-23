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
		markers	: defaultMarkers,
	}
	
	// Main function code here (ref:google map api v3)
	function addMapMarker(map_element, zoom, center, markers){
		//console.log($.fn.mapmarker.defaults['center']);
		
		//Set center of the Map
		var myOptions = {
		  zoom: zoom,
		  mapTypeId: google.maps.MapTypeId.ROADMAP,
		  streetViewControl: false,
		  mapTypeControl: false,
		  rotateControl: false
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
					myURL="/USMap/"+encodeURI(destination[i])+"/restaurants/landmarks";
				}
			} else {
				if (name == destination) {
					myURL="/USMap/"+encodeURI(destination)+"/restaurants/landmarks";
				}
			}			

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
							var currentStorage = localStorage.getItem('Saved Preferences');
							var hiddenFieldRestaurant;
							var hiddenFieldAttraction;
							if (document.getElementById("hiddenFieldRestaurant")) {
								hiddenFieldRestaurant = document.getElementById("hiddenFieldRestaurant").value;
							} 
							if (document.getElementById("hiddenFieldAttraction")) {
								hiddenFieldAttraction = document.getElementById("hiddenFieldAttraction").value;
							}
							var placeName = baloon_text.substring(4, baloon_text.indexOf('</h4>'));

							if (document.getElementById("restaurantSave")) {
								document.getElementById("restaurantSave").addEventListener("click", function() {
									if (currentStorage == null) {
										currentStorage = hiddenFieldRestaurant;
									} else {
										currentStorage += hiddenFieldRestaurant;
									}

									baloon_text = baloon_text.replace("btn-primary", "btn-success");
									baloon_text = baloon_text.replace("'button'>Save", "'button'>Saved!");
									baloon_text = baloon_text.replace("restaurantSave", "restaurantSaved");

									infowindow.setContent(baloon_text);
									localStorage.setItem('Saved Preferences', currentStorage);
								});		
							}

							if (document.getElementById("restaurantSaved")) {
								$(document.getElementById("restaurantSaved")).on({
									click: function(){
										if (currentStorage.indexOf(hiddenFieldRestaurant) > -1) {
											currentStorage = currentStorage.replace(currentStorage.substr(currentStorage.indexOf(hiddenFieldRestaurant), hiddenFieldRestaurant.length), "")
										}
										baloon_text = baloon_text.replace("btn-success", "btn-primary");
										baloon_text = baloon_text.replace("'button'>Saved!", "'button'>Save");
										baloon_text = baloon_text.replace("restaurantSaved", "restaurantSave");

										infowindow.setContent(baloon_text);
										localStorage.setItem('Saved Preferences', currentStorage);
									},
									// mouseover: function() {
									// 	console.log("over");
									// 	baloon_text = baloon_text.replace("'button'>Saved!", "'button'>Deselect?");
									// 	infowindow.setContent(baloon_text);
									// },
									// mouseout: function() {
									// 	console.log("out");
									// 	baloon_text = baloon_text.replace("'button'>Deselect?", "'button'>Saved!");
									// 	infowindow.setContent(baloon_text);
									// }
								})
							}
												
							if (document.getElementById("attractionSave")) {
								document.getElementById("attractionSave").addEventListener("click", function() {
									if (currentStorage == null) {
										currentStorage = hiddenFieldAttraction;
									} else {
										currentStorage += hiddenFieldAttraction;
									}

									baloon_text = baloon_text.replace("btn-primary", "btn-success");
									baloon_text = baloon_text.replace("'button'>Save", "'button'>Saved!");
									baloon_text = baloon_text.replace("attractionSave", "attractionSaved");

									infowindow.setContent(baloon_text);
									localStorage.setItem('Saved Preferences', currentStorage);
								});
							}

							if (document.getElementById("attractionSaved")) {
								document.getElementById("attractionSaved").addEventListener("click", function() {
									if (currentStorage.indexOf(hiddenFieldAttraction) > -1) {
										currentStorage = currentStorage.replace(currentStorage.substr(currentStorage.indexOf(hiddenFieldAttraction), hiddenFieldAttraction.length), "")
									}
									baloon_text = baloon_text.replace("btn-success", "btn-primary");
									baloon_text = baloon_text.replace("'button'>Saved!", "'button'>Save");
									baloon_text = baloon_text.replace("attractionSaved", "attractionSave");

									infowindow.setContent(baloon_text);
									localStorage.setItem('Saved Preferences', currentStorage);
								});
							}

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
		});
	}
})(jQuery);