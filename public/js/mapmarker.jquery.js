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
		var infowindow = null;
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
						if (infowindow) {
							infowindow.close();
							infowindow.setContent('');
						}
						// if (baloon_text != infowindow.getContent()) {
							// infowindow.setContent(baloon_text);
						infowindow = new google.maps.InfoWindow({
							content: baloon_text
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

						 //console.log(marker);
						// window.location.href = "http://localhost:8080/USMap/Atlanta";
						// $('.cityMap').css('visibility','visible');
						// $('.cityMapOptions').css('visibility', 'visible');
						// $('.USmap').css('opacity', '0.3');
						// $('#buttons').css('visibility', 'hidden');
						// $('#popup').css('visibility','hidden');
					});

					// google.maps.event.addListener(infowindow, 'closeclick', function() {
					// 	infowindow.setContent('');
					// 	console.log("yo!");
					// });

					// google.maps.event.addListener(infowindow, 'domready', function() {
					// 	document.getElementById("restaurantSave").addEventListener("click", function() {
					// 		console.log("hi!");
					// 		document.getElementById("restaurantSave").value = "Hello!";
					// 	})
					// });
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