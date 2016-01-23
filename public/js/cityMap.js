$(function() {
  $.getJSON("/js/categories.json", function (data) {
    var restaurantTags = [];
    var attractionTags = [];
    var restaurantCategories = ['restaurants', 'food'];
    var attractionCategories = ['active', 'arts', 'eventservices', 'nightlife', 'religiousorgs', 'shopping']

    for (var i = 0; i < data.length; i++) {
      if (restaurantCategories.some(category => data[i]['parents'].indexOf(category) != -1)) {
        restaurantTags.push(data[i]['alias']);
      } else if (attractionCategories.some(category => data[i]['parents'].indexOf(category) != -1) || data[i]['alias'] == 'landmarks' || data[i]['alias'] == 'localflavor') {
        attractionTags.push(data[i]['alias']);
      }
    }
    $('#restaurantCategory').autocomplete({
      source: function(request, response) {
        var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex(request.term), "i" );
        response($.grep(restaurantTags, function(item) {
          return matcher.test(item);
        }));
      }
    });
    $('#attractionCategory').autocomplete({
      source: function(request, response) {
        var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex(request.term), "i" );
        response($.grep(attractionTags, function(item) {
          return matcher.test(item);
        }));
      }
    });
  })
  .fail(function(d, textStatus, error) {
    console.error("getJSON failed, status: " + textStatus + ", error: "+error)
  });
})

function restaurantSubmitForm() {
  document.restaurantSearchForm.action = "/USMap/" + destination + "/" + $("#restaurantCategory").val() + "/" + attractionCategory;
};
function attractionSubmitForm() {
  document.attractionSearchForm.action = "/USMap/" + destination + "/" + restaurantCategory + "/" + $("#attractionCategory").val();
};