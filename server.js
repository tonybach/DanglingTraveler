var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var dialog = require('dialog');
//Using native mongodb client
//var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var url = 'mongodb://@localhost:27017/travellerApp';
var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://@localhost/travellerApp', {safe: true});
var collections= { yelpData: db.collection('yelpData')};

var yelp = require("yelp").createClient({
  consumer_key: "ZpQmVj8ugw-jJzqUd_VBhw", 
  consumer_secret: "U9v66_KMksTohoW9Q-mjEjwTsjU",
  token: "AtiHRZtIAntMsYeHXCf4R4_onXHllXGt",
  token_secret: "DtvBltjVHnWPyFXRw2WJYw3ff0o"
});

var destinationArray=[];
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

var server = app.listen(process.env.PORT || 8080, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Server listening on %s:%s", host, port);
})

app.use(express.static(path.join(__dirname, 'public')));

// query the mongoDB database for existing yelp data. If there is none, update the database using the new parameter
// app.use(function(req, res, next) {
// 	if (!collections.yelpData) {
// 		return next(new Error('No Collections.'));
// 	}
	
// 	req.collections = collections;
// 	next();
// })

app.get('/', function(req, res) {
	res.render('frontPage');
})

var destination;
var restaurants;
var attractions;
var savedPreferences = [];
var visitsToCityMap = 0;

if((typeof alert) === 'undefined') {
    global.alert = function(message) {
        console.log(message);
    }
}

app.get('/USMap/print', function(req, res) {
	res.render('printData', {data: savedPreferences});
})

app.get('/USMap/:city?/:restaurantCategory?/:attractionCategory?', function(req, res) {
	if (req.params.city && req.params.restaurantCategory) {
		destination = req.params.city;
		var restaurantCategory = req.params.restaurantCategory;
		restaurants = [];
		
		// Use Yelp API to search for restaurants
		yelp.search({category_filter: restaurantCategory, location: destination, sort: 2}, function(error, data) {
	  		// console.log(error);
	  		var numberOfRestaurants;
	  		try {
	  			if (data.businesses == null) {
	  				throw new Error("No restaurant in this area!");
	  			} else {
	  				numberOfRestaurants = data.businesses.length;
	  			}
	  		} catch(error) {
	  			console.log(error);
	  		};

	  		var numberOfRestaurants = data.businesses.length;
	  		if (numberOfRestaurants == 0) {
	  			dialog.warn("There are no " + restaurantCategory + " restaurant in this area!", "Sorry!");
	  		} 
	  		else {
	  			if (numberOfRestaurants > 5) {
	  				numberOfRestaurants = 5;
	  			}
	  			for (var i = 0; i < numberOfRestaurants; i++) {
	  				var restaurant = data.businesses[i];
	  				var categoriesOfRestaurant = restaurant.categories;
	  				for (var n = 0; n < categoriesOfRestaurant.length; n++) {
	  					categoriesOfRestaurant[n].splice(1, 1);
	  				}
	  				restaurants.push({'address': restaurant.location.display_address.join(), 'name': restaurant.name, 'categories': categoriesOfRestaurant.join(), 'phone': restaurant.display_phone, 'img' : restaurant.image_url, 'rating_img': restaurant.rating_img_url_large, 'snippet_text': restaurant.snippet_text, 'review_count': restaurant.review_count});
	  			}
	  		}

			var attractionCategory = req.params.attractionCategory;

			// search for attractions
			attractions = [];
			yelp.search({category_filter: attractionCategory, location: destination, sort: 2}, function(error2, data2) {
				// console.log(error2);
				var numberOfAttractions;
				try {
					if (data2.businesses == null) {
						throw new Error("No attraction in this area!");
					} else {
						numberOfAttractions = data2.businesses.length;	
					}

				} catch(error2) {
					console.log(error2);
				};
				
				if (numberOfAttractions == 0) {
					dialog.warn("There are no " + attractionCategory + " in this area!", "Sorry!");
				} else {
					if (numberOfAttractions > 5) {
						numberOfAttractions = 5;
					}
					for (var j = 0; j < numberOfAttractions; j++) {
						var attraction = data2.businesses[j];
			  			var categoriesOfAttraction = attraction.categories;
			  			for (var n = 0; n < categoriesOfAttraction.length; n++) {
			  				categoriesOfAttraction[n].splice(1, 1);
			  			}
						attractions.push({'address': attraction.location.display_address.join(), 'name': attraction.name, 'categories': categoriesOfAttraction.join(), 'phone': attraction.display_phone, 'img' : attraction.image_url, 'rating_img': attraction.rating_img_url_large, 'snippet_text': attraction.snippet_text, 'review_count': attraction.review_count});
					}
				}

				// render city map using data
				// console.log(visits);
				if (restaurantCategory == "restaurants" && attractionCategory == "arts") {
					visitsToCityMap = 1;
				} else {
					visitsToCityMap = visitsToCityMap + 1;
				}
				res.render('cityMap', {visitsToCityMap: visitsToCityMap, destination: destination, restaurants: JSON.stringify(restaurants), attractions: JSON.stringify(attractions), restaurantCategory: restaurantCategory, attractionCategory: attractionCategory});
			})
		});				
			// }	
	}	
	// })
	else {
		res.render('USMap', {destination: JSON.stringify(destination)});
	}
})

// app.post('/USMap/:destination/restaurants/arts',function(req,res){
// 	console.log(visits);
// 	var restaurant=req.body.id;
// 	console.log(restaurant);
// 	console.log("success");
// 	var Storage = require('dom-storage')
//   	, localStorage = new Storage('./db.json', { strict: false, ws: '  ' })

//   	// , myValue = { restaurant: restaurant }

//   	;

// 	// localStorage.setItem('Saved Preferences', myValue);
// 	localStorage.setItem('Saved Preferences', restaurant);
// 	myValue = localStorage.getItem('Saved Preferences');
// 	myValue = myValue.split("*");
// 	savedPreferences.push(myValue)
// 	console.log(myValue);
// 	console.log(savedPreferences);
// 	render('cityMap', {visits: visits, destination: destination, restaurants: "restaurants", attractions: JSON.stringify(attractions), restaurantCategory: restaurantCategory, attractionCategory: attractionCategory});
// 	// res.send("Save successful!");
// })


app.post('/USMap', function(req, res) {
	var destination = req.body.destination;
	res.render('USMap', {destination: JSON.stringify(destination)});
})