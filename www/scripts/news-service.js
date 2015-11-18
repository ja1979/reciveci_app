/*
myApp.factory('$news', function($http) {
  //var API_ROOT = 'http://api-reciveci.rhcloud.com/';
  //var API_ROOT = 'http://192.168.10.104:5000/';
  //var API_ROOT = 'http://192.168.43.240:5000/';
  //var API_ROOT = 'http://localhost:5000/';
  var API_ROOT = 'http://192.168.0.107:5000/';

  return {
    last: function(callback){
      $http.get(API_ROOT + 'articles_last.json').success(callback);
    }
  };
});
*/

myApp.factory('$news', [ '$resource', function($resource) {
  //var API_ROOT = 'http://api-reciveci.rhcloud.com/';
  //var API_ROOT = 'http://192.168.10.104:5000/';
  //var API_ROOT = 'http://192.168.43.240:5000/';
  //var API_ROOT = 'http://localhost:5000/';
  var API_ROOT = 'http://192.168.0.107:5000/';  
  return $resource(API_ROOT + "articles_last.json", {}, {
      last : {
          method : "GET",
          isArray : true,
          timeout : 10000
      }
    });
} ])