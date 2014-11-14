// <![CDATA[
$(document).ready(function(){
 
//set up markers
	var USMarkers = {"markers": [
	{"latitude": "41.8337329", "longitude":"-87.7321555", "icon": "img/orange_pin_2.png", "baloon_text": "<table><tr><h6><a href='http://www.willistower.com/' target='_blank'>Willis Tower, Chicago</a></h6><div><img src='http://s3-media1.fl.yelpcdn.com/bphoto/wX41R6azyjxHWMvfNzwnRw/l.jpg' width='50' heeght='50'/>Visiting the Skydeck in the Willis Tower (formerly Sears Tower) is a MUST do while you're in Chicago!</tr><tr><h6><a href='http://www.girlandthegoat.com' target='_blank'>Girl & the Goat, Chicago</a></h6><div><img src='http://s3-media1.fl.yelpcdn.com/bphoto/IJdSZaQXFdAoS4C7_DAeGw/l.jpg' width='50' height='50'/>One of my favorite dishes by far is the Pig Face -- it is served with an egg on top and it is just delicious</tr></div>"},
	{"latitude": "37.7577", "longitude":"-122.4376", "icon": "img/orange_pin_2.png", "baloon_text":"<table><tr><h6><a href='http://sanfranciscomagictheater.com/' target='_blank'>The Marrakech Magic Theater, San Francisco</a></h6><div><img src='http://s3-media2.fl.yelpcdn.com/bphoto/9zPGHgdE5uHOaFZW02hGbg/l.jpg' width='50' hieght='50'/>YELP is spot on! 100%   so i was super hesitant even though i read reviews on yelp and trip advisor. but to my surprise all of the reviews were right.    peter has preformed at the famous…</tr><tr><h6><a href='http://ilikeikesplace.com/' target='_blank'>Ike's Place, San Francisco</a></h6><div><img src='http://s3-media3.fl.yelpcdn.com/bphoto/9jSqZ0UH03FXarOq80Bpww/l.jpg' width='50' height='50'/>One of the best sandwiches I've ever had.   This is the orriginal location and it's a damn shame that the other locations can't live up to the standard that is set by this one. The dutch…</tr></div>"},
	{"latitude": "29.817178", "longitude":"-95.4012915", "icon": "img/orange_pin_2.png", "baloon_text": "<table><tr><h6><a href='http://www.mfah.org/' target='_blank'>Museum of Fine Arts Houston, Houston</a></h6><div><img src='http://s3-media4.fl.yelpcdn.com/bphoto/bROfOVAHKc-Kg9S8LNDc7w/l.jpg' width='50' hieght='50'/>I spent a couple of days going through most of the museums here in the Houston area. Even though I visited some good ones that I would recommend for you to attend, this museum was simply the…</tr><tr><h6><a href='http://houstonlocalfoods.com/' target='_blank'>Local Foods, Houston</a></h6><div><img src='http://s3-media3.fl.yelpcdn.com/bphoto/xaz4380rSzQNME7N21QK3Q/l.jpg' width='50' height='50'/>What can I say about Local Foods that hasn't already been said?  Local Foods meaning just that.  Pretty much anything that can be acquired locally is.  From the meat, bread, produce…</tr></div>"}
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