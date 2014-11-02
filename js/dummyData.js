// <![CDATA[
$(document).ready(function(){
 
//set up markers
	var USMarkers = {"markers": [
	{"latitude": "31.42866311735861", "longitude":"-98.61328125", "icon": "img/blue_pin_2.png", "baloon_text": 'This is <strong>Texas</strong>'},
	{"latitude": "35.101934057246055", "longitude":"-96.6796875", "icon": "img/orange_pin_2.png", "baloon_text": 'This is <strong>Oklahoma</strong>'},
	{"latitude": "38.61687046392973", "longitude":"-98.876953125", "icon": "img/blue_pin_2.png", "baloon_text": 'This is <strong>Kansas</strong>'}
	]
	};
	 
	//set up map options
	$(".USmap").mapmarker({
	zoom : 5,
	center : 'United States',
	markers : USMarkers
	});

	var cityMarkers = {"markers": [
	{"latitude": "31.42866311735861", "longitude":"-98.61328125", "icon": "img/blue_pin_2.png", "baloon_text": 'This is <strong>Texas</strong>'},
	{"latitude": "35.101934057246055", "longitude":"-96.6796875", "icon": "img/orange_pin_2.png", "baloon_text": 'This is <strong>Oklahoma</strong>'},
	{"latitude": "38.61687046392973", "longitude":"-98.876953125", "icon": "img/blue_pin_2.png", "baloon_text": 'This is <strong>Kansas</strong>'}
	]
	};
	 
	//set up map options
	$(".cityMap").mapmarker({
	zoom : 5,
	center : 'United States',
	markers : cityMarkers
	});
	 
});
// ]]