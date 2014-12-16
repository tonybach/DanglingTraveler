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
			icon=the_marker.icon;
			var baloon_text=the_marker.baloon_text;

			var myURL;
			if(typeof destination!="string"){
				myURL="http://localhost:8080/USMap/"+encodeURI(destination[i])+"/restaurants/arts";
			}else{
				myURL="http://localhost:8080/USMap/"+encodeURI(destination)+"/restaurants/arts";
			}

			
				geocoder.geocode({'address': name}, function(results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						var marker = new google.maps.Marker({
							map: map, 
							position: results[0].geometry.location,
							animation: google.maps.Animation.DROP,
							icon: icon,
							myURL: myURL
						});


					google.maps.event.addListener(marker, 'mouseover', function() {
							// Close all open infowindows
						// if (infowindow) {
						// 	infowindow.close();
						// }
						
						infowindow = new google.maps.InfoWindow({
							content: baloon_text
						});
						
						infowindow.open(map,marker);
						if (infowindow) {
							setTimeout(function(){infowindow.close();}, 3000);
						}

					});

					// google.maps.event.addListener(marker, 'mouseout', function() {
					// 	// Close all open infowindows
					// 	if (infowindow) {
					// 		infowindow.close();
					// 	}
					// });

					
					google.maps.event.addListener(marker, 'click', function() {
						// Close all open infowindows
						if (infowindow) {
							infowindow.close();
						}
						
						infowindow.open(map,marker);
						console.log(marker.myURL);
						window.location.href = marker.myURL;

						 //console.log(marker);
						// window.location.href = "http://localhost:8080/USMap/Atlanta";
						// $('.cityMap').css('visibility','visible');
						// $('.cityMapOptions').css('visibility', 'visible');
						// $('.USmap').css('opacity', '0.3');
						// $('#buttons').css('visibility', 'hidden');
						// $('#popup').css('visibility','hidden');
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