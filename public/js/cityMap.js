$(function() {
  $.getJSON("https://jsonp.nodejitsu.com/?callback=?&url=https://raw.githubusercontent.com/Yelp/yelp-api/master/category_lists/en/category.json", function (data) {
    var restaurantTags = [];
    var restaurantCategories = [data[7].category, data[20].category];
    for (var i = 0; i < restaurantCategories.length; i++) {
      for (var j = 0; j < restaurantCategories[i].length; j++) {
        restaurantTags.push(restaurantCategories[i][j].alias)
      }
    }
    $('#restaurantCategory').autocomplete({
      source: restaurantTags
    });
  })
  $.getJSON("https://jsonp.nodejitsu.com/?callback=?&url=https://raw.githubusercontent.com/Yelp/yelp-api/master/category_lists/en/category.json", function (data) {
    var attractionTags = [];
    var attractionCategories = [data[0].category, data[1].category, data[5].category, data[10].category, data[14].category, data[19].category];
    for (var i = 0; i < attractionCategories.length; i++) {
      for (var j = 0; j < attractionCategories[i].length; j++) {
        attractionTags.push(attractionCategories[i][j].alias)
      }
    }
    $('#attractionCategory').autocomplete({
      source: attractionTags
    });
  })
})

function restaurantSubmitForm() {
  document.restaurantSearchForm.action = "/USMap/" + destination + "/" + $("#restaurantCategory").val() + "/" + attractionCategory;
};
function attractionSubmitForm() {
  document.attractionSearchForm.action = "/USMap/" + destination + "/" + restaurantCategory + "/" + $("#attractionCategory").val();
};