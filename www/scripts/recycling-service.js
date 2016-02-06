myApp.factory('$recycling', function($http) {
  var API_ROOT = 'http://api-reciveci.rhcloud.com/';
  //var API_ROOT = 'http://192.168.1.8:3000/';
  //var API_ROOT = 'http://localhost:5000/';
  //var API_ROOT = 'http://192.168.10.115:3000/';
  //var API_ROOT = 'http://192.168.10.126:3000/';
  //var API_ROOT = 'http://192.168.0.104:5000/';

  return {
    categories: function(callback){
      $http.get(API_ROOT + 'categories_menu.json').success(callback).error(callback);
    },
    categories_by_column: function(column, callback){
      $http.get(API_ROOT + 'categories_by_column/' + column + '.json').success(callback).error(callback);
    },
    subcategories: function(callback){
      $http.get(API_ROOT + 'subcategories.json').success(callback);
    },
    subcategories_by_category: function(category_id, callback){
      $http.get(API_ROOT + 'subcategories_by_category/' + category_id + '.json').success(callback);
    },
    recy_ways_by_subcategory: function(subcategory_id, callback){
      $http.get(API_ROOT + 'recycling_ways_by_subcategory/' + subcategory_id + '.json').success(callback);
    }
  };

  

});
