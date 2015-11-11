myApp.factory('$news', function($http) {
  //var API_ROOT = 'http://api-reciveci.rhcloud.com/';
  var API_ROOT = 'http://192.168.10.104:5000/';
  //var API_ROOT = 'http://localhost:5000/';
  return {
    last: function(callback){
      $http.get(API_ROOT + 'articles_last.json').success(callback);
    }
  };
});