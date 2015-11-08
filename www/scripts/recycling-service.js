myApp.factory('$recycling', function($http) {
  //var API_ROOT = 'http://api-reciveci.rhcloud.com/';
  var API_ROOT = 'http://192.168.1.8:3000/';

  return {
    categories: function(callback){
      $http.get(API_ROOT + 'categories.json').success(callback);
    },
    subcategories: function(callback){
      $http.get(API_ROOT + 'subcategories.json').success(callback);
    },
    subcategories_by_category: function(category_id,callback){
      $http.get(API_ROOT + 'subcategories_by_category/' + category_id + '.json').success(callback);
    }
  };

  

});
