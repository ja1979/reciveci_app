myApp.factory('$news', function($http) {
  var API_ROOT = 'http://api-reciveci.rhcloud.com/';
  return {
    last: function(callback){
      $http.get(API_ROOT + 'articles_last.json').success(callback);
    }
  };
});