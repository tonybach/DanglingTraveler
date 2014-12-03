var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://@localhost:27017/travellerApp', {safe: true});
var destination;

var yelp = require("yelp").createClient({
  consumer_key: "ZpQmVj8ugw-jJzqUd_VBhw", 
  consumer_secret: "U9v66_KMksTohoW9Q-mjEjwTsjU",
  token: "AtiHRZtIAntMsYeHXCf4R4_onXHllXGt",
  token_secret: "DtvBltjVHnWPyFXRw2WJYw3ff0o"
});

var app = express();

var restaurantArray = [];

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


app.get('/', function(req, res) {
	res.render('frontPage');
})

app.post('/USMap', function(req, res) {
	destination = req.body.destination;
	res.render('USMap', {destination: destination});
	yelp.search({term: "asian food", location: destination, sort: 2}, function(error, data) {
  		console.log(error);
  		console.log(data.businesses[0]);
  		restaurantArray = data.businesses;
	});
})



// See http://www.yelp.com/developers/documentation/v2/search_api
