myApp.factory('$news', [ '$resource', function($resource) {
  var API_ROOT = 'http://api-reciveci.rhcloud.com/';
  // var API_ROOT = 'http://192.168.0.106:5000/';
  return $resource(API_ROOT, {}, {
      last : {
          url : API_ROOT + "articles_last.json",
          method : "GET",
          isArray : true,
          timeout : 5000
      },
      count : {
          url : API_ROOT + "articles_count.json",
          method : "GET",
          timeout : 5000,
          params: {date:'@date'}
      }
    });
} ])
