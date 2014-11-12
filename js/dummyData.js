// <![CDATA[
$(document).ready(function(){
 
//set up markers
	var USMarkers = {"markers": [
	{"latitude": "41.8337329", "longitude":"-87.7321555", "icon": "img/orange_pin_2.png", "baloon_text": 'This is <strong>Chicago</strong>'},
	{"latitude": "37.7577", "longitude":"-122.4376", "icon": "img/orange_pin_2.png", "baloon_text":'This is <strong>San Francisco</strong>'},
	{"latitude": "29.817178", "longitude":"-95.4012915", "icon": "img/orange_pin_2.png", "baloon_text": 'This is <strong>Houston</strong>'}
	]
	};
	 
	//set up map options
	$(".USmap").mapmarker({
	zoom : 5,
	center : 'United States',
	markers : USMarkers
	});

	var chicagoMarkers = {"markers": [
	{"latitude": "41.884164", "longitude":"-87.647971", "icon": "img/blue_pin_2.png", "baloon_text": 'Girl & the Goat'},
	{"latitude": "41.898311", "longitude":"-87.637489", "icon": "img/orange_pin_2.png", "baloon_text": "BIG & little's"},
	{"latitude": "41.955714", "longitude":"-87.727787", "icon": "img/blue_pin_2.png", "baloon_text": 'Cafe Versailles'}
	]
	};
	 
	//set up map options
	$(".chicagoMap").mapmarker({
	zoom : 11,
	center : 'Chicago',
	markers : chicagoMarkers
	});

	var sanFranciscoMarkers = {"markers": [
	{"latitude": "37.764242", "longitude":"-122.430558", "icon": "img/blue_pin_2.png", "baloon_text": "Ike's Place"},
	{"latitude": "37.805883", "longitude":"-122.420621", "icon": "img/orange_pin_2.png", "baloon_text": 'Gary Danko'},
	{"latitude": "37.801596", "longitude":"-122.411803", "icon": "img/blue_pin_2.png", "baloon_text": 'The Italian Homemade Company'}
	]
	};
	 
	//set up map options
	$(".sanFranciscoMap").mapmarker({
	zoom : 12,
	center : 'San Francisco',
	markers : sanFranciscoMarkers
	});

	var houstonMarkers = {"markers": [
	{"latitude": "29.770945", "longitude":"-95.372128", "icon": "img/blue_pin_2.png", "baloon_text": "Stanton's City Bites"},
	{"latitude": "29.701264", "longitude":"-95.385689", "icon": "img/orange_pin_2.png", "baloon_text": 'M&M Grill'},
	{"latitude": "29.738506", "longitude":"-95.408158", "icon": "img/blue_pin_2.png", "baloon_text": 'Tacos Tierra Caliente'}
	]
	};
	 
	//set up map options
	$(".houstonMap").mapmarker({
	zoom : 12,
	center : 'Houston',
	markers : houstonMarkers
	});
// ]]
	
});
