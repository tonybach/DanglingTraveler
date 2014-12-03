var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://@localhost:27017/travellerApp', {safe: true});
var collections= { yelpData: db.collection('yelpData')};

var yelp = require("yelp").createClient({
  consumer_key: "ZpQmVj8ugw-jJzqUd_VBhw", 
  consumer_secret: "U9v66_KMksTohoW9Q-mjEjwTsjU",
  token: "AtiHRZtIAntMsYeHXCf4R4_onXHllXGt",
  token_secret: "DtvBltjVHnWPyFXRw2WJYw3ff0o"
});

var app = express();

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
	res.sendFile(__dirname + "/frontPage.html");
})

app.post('/USMap.html', function(req, res) {
	var destination=req.body.to;
	console.log(destination);
	//var restaurantType=req.body.restaurantList;
	//console.log(restaurantType);

	// See http://www.yelp.com/developers/documentation/v2/search_api
	yelp.search({term: "asian restaurant", location: destination ,sort: 2}, function(error, data) {
	console.log(error);
	//console.log(data);
	req.collections.yelpData.insert(data, function(error, response){
		if (error) throw error;

	})
	});
	res.sendFile(__dirname + "/USMap.html");
})



