// <![CDATA[
// $(document).ready(function(){
 
//set up markers
	// var USMarkers = {"markers": [
	// {"name": "Seattle", "icon": "img/orange_pin_2.png", "baloon_text": "<table><tr><h6><a href='http://www.willistower.com/' target='_blank'>Willis Tower, Chicago</a></h6><div><img src='http://s3-media1.fl.yelpcdn.com/bphoto/wX41R6azyjxHWMvfNzwnRw/l.jpg' width='50' heeght='50'/>Visiting the Skydeck in the Willis Tower (formerly Sears Tower) is a MUST do while you're in Chicago!</tr><tr><h6><a href='http://www.girlandthegoat.com' target='_blank'>Girl & the Goat, Chicago</a></h6><div><img src='http://s3-media1.fl.yelpcdn.com/bphoto/IJdSZaQXFdAoS4C7_DAeGw/l.jpg' width='50' height='50'/>One of my favorite dishes by far is the Pig Face -- it is served with an egg on top and it is just delicious</tr></div>"},
	// {"name": "Boston", "icon": "img/orange_pin_2.png", "baloon_text":"<table><tr><h6><a href='http://sanfranciscomagictheater.com/' target='_blank'>The Marrakech Magic Theater, San Francisco</a></h6><div><img src='http://s3-media2.fl.yelpcdn.com/bphoto/9zPGHgdE5uHOaFZW02hGbg/l.jpg' width='50' hieght='50'/>YELP is spot on! 100%   so i was super hesitant even though i read reviews on yelp and trip advisor. but to my surprise all of the reviews were right.    peter has preformed at the famous…</tr><tr><h6><a href='http://ilikeikesplace.com/' target='_blank'>Ike's Place, San Francisco</a></h6><div><img src='http://s3-media3.fl.yelpcdn.com/bphoto/9jSqZ0UH03FXarOq80Bpww/l.jpg' width='50' height='50'/>One of the best sandwiches I've ever had.   This is the orriginal location and it's a damn shame that the other locations can't live up to the standard that is set by this one. The dutch…</tr></div>"},
	// {"name": "Nashville", "icon": "img/orange_pin_2.png", "baloon_text": "<table><tr><h6><a href='http://www.mfah.org/' target='_blank'>Museum of Fine Arts Houston, Houston</a></h6><div><img src='http://s3-media4.fl.yelpcdn.com/bphoto/bROfOVAHKc-Kg9S8LNDc7w/l.jpg' width='50' hieght='50'/>I spent a couple of days going through most of the museums here in the Houston area. Even though I visited some good ones that I would recommend for you to attend, this museum was simply the…</tr><tr><h6><a href='http://houstonlocalfoods.com/' target='_blank'>Local Foods, Houston</a></h6><div><img src='http://s3-media3.fl.yelpcdn.com/bphoto/xaz4380rSzQNME7N21QK3Q/l.jpg' width='50' height='50'/>What can I say about Local Foods that hasn't already been said?  Local Foods meaning just that.  Pretty much anything that can be acquired locally is.  From the meat, bread, produce…</tr></div>"}
	// ]
	// };
	 
	// //set up map options
	// $(".USmap").mapmarker({
	// zoom : 4,
	// center : 'United States',
	// markers : USMarkers
	// });

	// var chicagoAsianMarkers = {"markers": [
	// {"latitude": "41.884164", "longitude":"-87.647971", "icon": "img/blue_pin_2.png", "baloon_text": 'Girl & the Goat'},
	// {"latitude": "41.898311", "longitude":"-87.637489", "icon": "img/blue_pin_2.png", "baloon_text": "BIG & little's"},
	// {"latitude": "41.955714", "longitude":"-87.727787", "icon": "img/blue_pin_2.png", "baloon_text": 'Cafe Versailles'}
	// ]
	// };

	// var chicagoAmericanMarkers = {"markers": [
	// {"latitude": "41.891112", "longitude":"-87.624469", "icon": "img/blue_pin_2.png", "baloon_text": 'The Purple Pig'},
	// {"latitude": "41.913428", "longitude":"-87.648135", "icon": "img/blue_pin_2.png", "baloon_text": "Alinea"},
	// {"latitude": "41.945988", "longitude":"-87.687699", "icon": "img/blue_pin_2.png", "baloon_text": 'Pi-Hi Café'}
	// ]
	// };

	// var chicagoAfricanMarkers = {"markers": [
	// {"latitude": "41.8916668", "longitude":"-87.6280935", "icon": "img/blue_pin_2.png", "baloon_text": 'TWO'},
	// {"latitude": "41.910247", "longitude":"-87.682869", "icon": "img/blue_pin_2.png", "baloon_text": "Birchwood Kitchen"},
	// {"latitude": "41.943892", "longitude":"-87.649623", "icon": "img/blue_pin_2.png", "baloon_text": 'Home Bistro'}
	// ]
	// };

	// var chicagoMexicanMarkers = {"markers": [
	// {"latitude": "41.88468", "longitude":"-87.647661", "icon": "img/blue_pin_2.png", "baloon_text": 'Au Cheval'},
	// {"latitude": "41.969347", "longitude":"-87.708062", "icon": "img/blue_pin_2.png", "baloon_text": "Café Orient 33"},
	// {"latitude": "41.954303", "longitude":"-87.666752", "icon": "img/blue_pin_2.png", "baloon_text": 'The Roost Carolina Kitchen'}
	// ]
	// };

	// var chicagoEuropeanMarkers = {"markers": [
	// {"latitude": "41.954207", "longitude":"-87.705432", "icon": "img/blue_pin_2.png", "baloon_text": 'Smalls, Smoke Shack & More'},
	// {"latitude": "41.950214", "longitude":"-87.727699", "icon": "img/blue_pin_2.png", "baloon_text": "Smoque BBQ"},
	// {"latitude": "41.86463", "longitude":"-87.645894", "icon": "img/blue_pin_2.png", "baloon_text": 'Lotus Café & Banh Mi Sandwiches'}
	// ]
	// };

	// var chicagoLandmarkMarkers = {"markers": [
	// {"latitude": "41.882657", "longitude":"-87.623304", "icon": "img/orange_pin_2.png", "baloon_text": 'Cloud Gate'},
	// {"latitude": "41.875794", "longitude":"-87.618948", "icon": "img/orange_pin_2.png", "baloon_text": "Buckingham Fountain"},
	// {"latitude": "41.878876", "longitude":"-87.635915", "icon": "img/orange_pin_2.png", "baloon_text": 'Willis Tower'},
	// {"latitude": "41.89851", "longitude":"-87.622765", "icon": "img/orange_pin_2.png", "baloon_text": '360 Chicago'}
	// ]
	// };

	// var chicagoMuseumMarkers = {"markers": [
	// {"latitude": "41.790573", "longitude":"-87.583066", "icon": "img/orange_pin_2.png", "baloon_text": 'Museum of Science and Industry'},
	// {"latitude": "41.866261", "longitude":"-87.61698", "icon": "img/orange_pin_2.png", "baloon_text": "The Field Museum"},
	// {"latitude": "41.883754", "longitude":"-87.624952", "icon": "img/orange_pin_2.png", "baloon_text": 'Chicago Cultural Center'},
	// {"latitude": "41.879584", "longitude":"-87.623713", "icon": "img/orange_pin_2.png", "baloon_text": 'The Art Institute of Chicago'},
	// {"latitude": "41.878521", "longitude":"-87.624853", "icon": "img/orange_pin_2.png", "baloon_text": 'Chicago Architechture Foundation'}
	// ]
	// };

	// var chicagoParkMarkers = {"markers": [
	// {"latitude": "41.882552", "longitude":"-87.622551", "icon": "img/orange_pin_2.png", "baloon_text": 'Millenium Park'},
	// {"latitude": "41.891642", "longitude":"-87.605144", "icon": "img/orange_pin_2.png", "baloon_text": "Navy Pier"}
	// ]
	// };

	// var chicagoTheaterMarkers = {"markers": [
	// {"latitude": "42.031595", "longitude":"-87.779088", "icon": "img/orange_pin_2.png", "baloon_text": 'Fear City Haunted House'},
	// {"latitude": "41.927099", "longitude":"-87.630703", "icon": "img/orange_pin_2.png", "baloon_text": "Haunted Sanitarium"},
	// ]
	// };

	// var chicagoZooMarkers = {"markers": [
	// {"latitude": "41.92089", "longitude":"-87.632917", "icon": "img/orange_pin_2.png", "baloon_text": 'Lincoln Park Zoo'},
	// ]
	// };

	// //set up map options
	// $(".chicagoMap").mapmarker({
	// zoom : 11,
	// center : 'Chicago',
	// markers : chicagoAsianMarkers
	// });

	// var sanFranciscoAsianMarkers = {"markers": [
	// {"latitude": "37.764242", "longitude":"-122.430558", "icon": "img/blue_pin_2.png", "baloon_text": "Ike's Place"},
	// {"latitude": "37.805883", "longitude":"-122.420621", "icon": "img/blue_pin_2.png", "baloon_text": 'Gary Danko'},
	// {"latitude": "37.801596", "longitude":"-122.411803", "icon": "img/blue_pin_2.png", "baloon_text": 'The Italian Homemade Company'}
	// ]
	// };

	// var sanFranciscoAmericanMarkers = {"markers": [
	// {"latitude": "37.798462", "longitude":"-122.407021", "icon": "img/blue_pin_2.png", "baloon_text": "The House"},
	// {"latitude": "37.8074", "longitude":"-122.417155", "icon": "img/blue_pin_2.png", "baloon_text": 'The Codmother Fish and Chips'},
	// {"latitude": "37.781812", "longitude":"-122.409526", "icon": "img/blue_pin_2.png", "baloon_text": 'City Smoke House'}
	// ]
	// };

	// var sanFranciscoAfricanMarkers = {"markers": [
	// {"latitude": "37.78292", "longitude":"-122.418971", "icon": "img/blue_pin_2.png", "baloon_text": "Brenda's French Soul Food"},
	// {"latitude": "37.789967", "longitude":"-122.411335", "icon": "img/blue_pin_2.png", "baloon_text": 'Hopwater Distribution'},
	// {"latitude": "37.783695", "longitude":"-122.433062", "icon": "img/blue_pin_2.png", "baloon_text": 'State Bird Provisions'}
	// ]
	// };

	// var sanFranciscoMexicanMarkers = {"markers": [
	// {"latitude": "37.772505", "longitude":"-122.428951", "icon": "img/blue_pin_2.png", "baloon_text": "RickyBobby"},
	// {"latitude": "37.783445", "longitude":"-122.433179", "icon": "img/blue_pin_2.png", "baloon_text": 'Fat Angel'},
	// {"latitude": "37.781736", "longitude":"-122.396114", "icon": "img/blue_pin_2.png", "baloon_text": 'Garaje'}
	// ]
	// };

	// var sanFranciscoEuropeanMarkers = {"markers": [
	// {"latitude": "37.743186", "longitude":"-122.404839", "icon": "img/blue_pin_2.png", "baloon_text": "Jake's Place"},
	// {"latitude": "37.752334", "longitude":"-122.419101", "icon": "img/blue_pin_2.png", "baloon_text": 'Paprika'},
	// {"latitude": "37.778311", "longitude":"-122.396863", "icon": "img/blue_pin_2.png", "baloon_text": 'Marlowe'}
	// ]
	// };

	// var sanFranciscoLandmarkMarkers = {"markers": [
	// {"latitude": "37.819929", "longitude":"-122.478255", "icon": "img/orange_pin_2.png", "baloon_text": 'Golden Gate Bridge'},
	// {"latitude": "37.826978", "longitude":"-122.422956", "icon": "img/orange_pin_2.png", "baloon_text": "Alcatraz Island"},
	// {"latitude": "37.802139", "longitude":"-122.41874", "icon": "img/orange_pin_2.png", "baloon_text": 'Lombard Street'},
	// ]
	// };

	// var sanFranciscoMuseumMarkers = {"markers": [
	// {"latitude": "37.809305", "longitude":"-122.416021", "icon": "img/orange_pin_2.png", "baloon_text": 'Musee Mecanique'},
	// {"latitude": "37.769865", "longitude":"-122.466095", "icon": "img/orange_pin_2.png", "baloon_text": "California Academy of Sciences"},
	// {"latitude": "37.801395", "longitude":"-122.458661", "icon": "img/orange_pin_2.png", "baloon_text": 'The Walt Disney Family Museum'},
	// {"latitude": "37.764324", "longitude":"-122.438408", "icon": "img/orange_pin_2.png", "baloon_text": 'Randall Museum'},
	// {"latitude": "37.800856", "longitude":"-122.398635", "icon": "img/orange_pin_2.png", "baloon_text": 'Exploratorium'}
	// ]
	// };

	// var sanFranciscoParkMarkers = {"markers": [
	// {"latitude": "37.769421", "longitude":"-122.486214", "icon": "img/orange_pin_2.png", "baloon_text": 'Golden Gate Park'},
	// {"latitude": "37.772668", "longitude":"-122.458758", "icon": "img/orange_pin_2.png", "baloon_text": "Conservatory of Flowers"},
	// {"latitude": "37.801456", "longitude":"-122.448053", "icon": "img/orange_pin_2.png", "baloon_text": "Palace of Fine Arts"}
	// ]
	// };

	// var sanFranciscoTheaterMarkers = {"markers": [
	// {"latitude": "37.808237", "longitude":"-122.41574", "icon": "img/orange_pin_2.png", "baloon_text": 'The San Francisco Dungeon'},
	// {"latitude": "37.762014", "longitude":"-122.434924", "icon": "img/orange_pin_2.png", "baloon_text": "Castro Theatre"},
	// ]
	// };

	// var sanFranciscoZooMarkers = {"markers": [
	// {"latitude": "37.73284", "longitude":"-122.503065", "icon": "img/orange_pin_2.png", "baloon_text": 'San Francisco Zoo'},
	// ]
	// };
	 
	// //set up map options
	// $(".sanFranciscoMap").mapmarker({
	// zoom : 12,
	// center : 'San Francisco',
	// markers : sanFranciscoAsianMarkers
	// });

	// var houstonAsianMarkers = {"markers": [
	// {"latitude": "29.770945", "longitude":"-95.372128", "icon": "img/blue_pin_2.png", "baloon_text": "Stanton's City Bites"},
	// {"latitude": "29.701264", "longitude":"-95.385689", "icon": "img/blue_pin_2.png", "baloon_text": 'M&M Grill'},
	// {"latitude": "29.738506", "longitude":"-95.408158", "icon": "img/blue_pin_2.png", "baloon_text": 'Tacos Tierra Caliente'}
	// ]
	// };

	// var houstonAmericanMarkers = {"markers": [
	// {"latitude": "29.719579", "longitude":"-95.416424", "icon": "img/blue_pin_2.png", "baloon_text": "Local Foods"},
	// {"latitude": "29.735135", "longitude":"-95.417672", "icon": "img/blue_pin_2.png", "baloon_text": 'Luna Pizzeria'},
	// {"latitude": "29.732609", "longitude":"-95.36631", "icon": "img/blue_pin_2.png", "baloon_text": 'Doshi House Cafe'}
	// ]
	// };	

	// var houstonAfricanMarkers = {"markers": [
	// {"latitude": "29.738469", "longitude":"-95.380433", "icon": "img/blue_pin_2.png", "baloon_text": "The Breakfast Klub"},
	// {"latitude": "29.738469", "longitude":"-95.380433", "icon": "img/blue_pin_2.png", "baloon_text": "Luigi's Pizzeria"},
	// {"latitude": "29.748111", "longitude":"-95.460834", "icon": "img/blue_pin_2.png", "baloon_text": "Masraff's"}
	// ]
	// };	

	// var houstonMexicanMarkers = {"markers": [
	// {"latitude": "29.747577", "longitude":"-95.370423", "icon": "img/blue_pin_2.png", "baloon_text": "Nara Thai Dining Express"},
	// {"latitude": "29.748296", "longitude":"-95.38828", "icon": "img/blue_pin_2.png", "baloon_text": "Baby Barnaby's Café"},
	// {"latitude": "29.802201", "longitude":"-95.43049", "icon": "img/blue_pin_2.png", "baloon_text": "Pappa Geno's"}
	// ]
	// };	

	// var houstonEuropeanMarkers = {"markers": [
	// {"latitude": "29.804044", "longitude":"-95.361349", "icon": "img/blue_pin_2.png", "baloon_text": "Bocca Deli"},
	// {"latitude": "29.781658", "longitude":"-95.395582", "icon": "img/blue_pin_2.png", "baloon_text": 'Happy Fatz'},
	// {"latitude": "29.75764", "longitude":"-95.364849", "icon": "img/blue_pin_2.png", "baloon_text": 'Bombay Pizza Co'}
	// ]
	// };

	// var houstonLandmarkMarkers = {"markers": [
	// {"latitude": "29.737152", "longitude":"-95.461068", "icon": "img/orange_pin_2.png", "baloon_text": 'Gerald D. Hines Waterfall'},
	// ]
	// };

	// var houstonMuseumMarkers = {"markers": [
	// {"latitude": "29.550201", "longitude":"-95.097012", "icon": "img/orange_pin_2.png", "baloon_text": 'Space Center Houston'},
	// {"latitude": "29.772033", "longitude":"-95.396867", "icon": "img/orange_pin_2.png", "baloon_text": "Art Car Museum"},
	// {"latitude": "29.717559", "longitude":"-95.324261", "icon": "img/orange_pin_2.png", "baloon_text": 'The Orange Show'},
	// {"latitude": "29.721819", "longitude":"-95.389702", "icon": "img/orange_pin_2.png", "baloon_text": 'Houston Museum of Natural Science'},
	// {"latitude": "29.73734", "longitude":"-95.39851", "icon": "img/orange_pin_2.png", "baloon_text": 'The Menil Collection'}
	// ]
	// };

	// var houstonParkMarkers = {"markers": [
	// {"latitude": "29.714875", "longitude":"-95.389183", "icon": "img/orange_pin_2.png", "baloon_text": 'Hermann Park Conservancy'},
	// {"latitude": "29.737218", "longitude":"-95.397064", "icon": "img/orange_pin_2.png", "baloon_text": "Menil Park"},
	// {"latitude": "29.754132", "longitude":"-95.35991", "icon": "img/orange_pin_2.png", "baloon_text": 'Discovery Green'},
	// {"latitude": "29.761621", "longitude":"-95.393729", "icon": "img/orange_pin_2.png", "baloon_text": 'Buffalo Bayou Park'},
	// {"latitude": "29.761644", "longitude":"-95.377597", "icon": "img/orange_pin_2.png", "baloon_text": 'Eleanor Tinsley Park'}
	// ]
	// };		

	// var houstonTheaterMarkers = {"markers": [
	// {"latitude": "29.897554", "longitude":"-95.595484", "icon": "img/orange_pin_2.png", "baloon_text": 'Phobia Haunted Houses'},
	// {"latitude": "29.736794", "longitude":"-95.397309", "icon": "img/orange_pin_2.png", "baloon_text": "Da Camera"},
	// ]
	// };

	// var houstonZooMarkers = {"markers": [
	// {"latitude": "29.71191", "longitude":"-95.392828", "icon": "img/orange_pin_2.png", "baloon_text": 'The Houston Zoo'},
	// ]
	// };	 
	// //set up map options
	// var houstonMarker = $(".houstonMap").mapmarker({
	// zoom : 12,
	// center : 'Houston',
	// markers : houstonAsianMarkers
	// });		

	// $('.american').click(function(){
	// 	$(".sanFranciscoMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'San Francisco',
	// 	markers : sanFranciscoAmericanMarkers
	// 	}),
	// 	$(".chicagoMap").mapmarker({
	// 	zoom : 11,
	// 	center : 'Chicago',
	// 	markers : chicagoAmericanMarkers
	// 	}),
	// 	$(".houstonMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'Houston',
	// 	markers : houstonAmericanMarkers
	// 	})
	// });

	// $('.asian').click(function(){
	// 	$(".sanFranciscoMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'San Francisco',
	// 	markers : sanFranciscoAsianMarkers
	// 	}),
	// 	$(".chicagoMap").mapmarker({
	// 	zoom : 11,
	// 	center : 'Chicago',
	// 	markers : chicagoAsianMarkers
	// 	}),
	// 	$(".houstonMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'Houston',
	// 	markers : houstonAsianMarkers
	// 	})
	// });	

	// $('.african').click(function(){
	// 	$(".sanFranciscoMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'San Francisco',
	// 	markers : sanFranciscoAfricanMarkers
	// 	}),
	// 	$(".chicagoMap").mapmarker({
	// 	zoom : 11,
	// 	center : 'Chicago',
	// 	markers : chicagoAfricanMarkers
	// 	}),
	// 	$(".houstonMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'Houston',
	// 	markers : houstonAfricanMarkers
	// 	})
	// });	

	// $('.mexican').click(function(){
	// 	$(".sanFranciscoMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'San Francisco',
	// 	markers : sanFranciscoMexicanMarkers
	// 	}),
	// 	$(".chicagoMap").mapmarker({
	// 	zoom : 11,
	// 	center : 'Chicago',
	// 	markers : chicagoMexicanMarkers
	// 	}),
	// 	$(".houstonMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'Houston',
	// 	markers : houstonMexicanMarkers
	// 	})
	// });

	// $('.european').click(function(){
	// 	$(".sanFranciscoMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'San Francisco',
	// 	markers : sanFranciscoEuropeanMarkers
	// 	}),
	// 	$(".chicagoMap").mapmarker({
	// 	zoom : 11,
	// 	center : 'Chicago',
	// 	markers : chicagoEuropeanMarkers
	// 	}),
	// 	$(".houstonMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'Houston',
	// 	markers : houstonEuropeanMarkers
	// 	})
	// });

	// $('.landmarks').click(function() {
	// 	$(".chicagoMap").mapmarker({
	// 	zoom : 11,
	// 	center : 'Chicago',
	// 	markers : chicagoLandmarkMarkers
	// 	}),
	// 	$(".houstonMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'Houston',
	// 	markers : houstonLandmarkMarkers
	// 	}),
	// 	$(".sanFranciscoMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'San Francisco',
	// 	markers : sanFranciscoLandmarkMarkers
	// 	})
	// })

	// $('.museums').click(function() {
	// 	$(".chicagoMap").mapmarker({
	// 	zoom : 11,
	// 	center : 'Chicago',
	// 	markers : chicagoMuseumMarkers
	// 	}),
	// 	$(".houstonMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'Houston',
	// 	markers : houstonMuseumMarkers
	// 	}),
	// 	$(".sanFranciscoMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'San Francisco',
	// 	markers : sanFranciscoMuseumMarkers
	// 	})
	// })	

	// $('.parks').click(function() {
	// 	$(".chicagoMap").mapmarker({
	// 	zoom : 11,
	// 	center : 'Chicago',
	// 	markers : chicagoParkMarkers
	// 	}),
	// 	$(".houstonMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'Houston',
	// 	markers : houstonParkMarkers
	// 	}),
	// 	$(".sanFranciscoMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'San Francisco',
	// 	markers : sanFranciscoParkMarkers
	// 	})
	// })	

	// $('.theaters').click(function() {
	// 	$(".chicagoMap").mapmarker({
	// 	zoom : 11,
	// 	center : 'Chicago',
	// 	markers : chicagoTheaterMarkers
	// 	}),
	// 	$(".houstonMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'Houston',
	// 	markers : houstonTheaterMarkers
	// 	}),
	// 	$(".sanFranciscoMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'San Francisco',
	// 	markers : sanFranciscoTheaterMarkers
	// 	})
	// })	

	// $('.zoos').click(function() {
	// 	$(".chicagoMap").mapmarker({
	// 	zoom : 11,
	// 	center : 'Chicago',
	// 	markers : chicagoZooMarkers
	// 	}),
	// 	$(".houstonMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'Houston',
	// 	markers : houstonZooMarkers
	// 	}),
	// 	$(".sanFranciscoMap").mapmarker({
	// 	zoom : 12,
	// 	center : 'San Francisco',
	// 	markers : sanFranciscoZooMarkers
	// 	})
	// })			
// ]]
	
// });