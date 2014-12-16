var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://@141.140.178.25:27017/travellerApp', {safe: true});
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

var server = app.listen(8080, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Server listening on %s:%s", host, port);
})

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
	if (!collections.yelpData) {
		return next(new Error('No Collections.'));
	}
	
	req.collections = collections;
	next();
})


app.get('/', function(req, res) {
	res.render('frontPage');
})

var destination;
var restaurants;
var attractions;

app.get('/USMap/:city?/:restaurantCategory?/:attractionCategory?', function(req, res) {
	if (req.params.city && req.params.restaurantCategory) {
		destination = req.params.city;
		var restaurantCategory = req.params.restaurantCategory;
		restaurants = [];
		yelp.search({category_filter: restaurantCategory, location: destination, sort: 2}, function(error, data) {
	  		console.log(error);
	  		for (var i = 0; i < 5; i++) {
	  			var restaurant = data.businesses[i];
	  			// console.log(restaurant);
	  			restaurants.push({'address': restaurant.location.display_address.join(), 'name': restaurant.name, 'categories': restaurant.categories.join(), 'phone:': restaurant.display_phone, 'img' : restaurant.image_url, 'rating_img': restaurant.rating_img_url_large, 'snippet_text': restaurant.snippet_text, 'review_count': restaurant.review_count});
	  			// restaurants.push({'address': restaurant.location.display_address.join()});
	  		}
			var attractionCategory = req.params.attractionCategory;
			// attractions = {};
			attractions = [];
			yelp.search({category_filter: attractionCategory, location: destination, sort: 2}, function(error2, data2) {
				console.log(error2);
				for (var j = 0; j < 5; j++) {
					var attraction = data2.businesses[j];
					// console.log(attraction);
					attractions.push({'address': attraction.location.display_address.join(), 'name': attraction.name, 'categories:': attraction.categories.join(), 'phone:': attraction.display_phone, 'img' : attraction.image_url, 'rating_img': attraction.rating_img_url_large, 'snippet_text': attraction.snippet_text, 'review_count': attraction.review_count});
					// attractions.push({'address': attraction.location.display_address.join()});
				}
				res.render('cityMap', {destination: destination, restaurants: JSON.stringify(restaurants), attractions: JSON.stringify(attractions), restaurantCategory: restaurantCategory, attractionCategory: attractionCategory});
			})
		});
	}
})

// remove yelp search for both get and post US Map
	
app.get('/USMap', function(req, res) {
	res.render('USMap', {destination: destination});
})

app.post('/USMap', function(req, res) {
	destination = req.body.destination;
	res.render('USMap', {destination: destination});
})
