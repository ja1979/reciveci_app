myApp.factory('$recycling', function($http) {
  //var API_ROOT = 'http://api-reciveci.rhcloud.com/';
  var API_ROOT = 'http://192.168.1.8:3000/';

  return {
    categories: function(callback){
      $http.get(API_ROOT + 'categories.json').success(callback);
      console.log('1111111111');
    },
    subcategories: function(callback){
      $http.get(API_ROOT + 'subcategories.json').success(callback);
       console.log('222222222222');
    }
  };

  

});
