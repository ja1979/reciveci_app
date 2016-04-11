myApp.factory('$recycling', [ '$resource', function($resource) {
  var API_ROOT = 'http://api-reciveci.rhcloud.com/';
  // var API_ROOT = 'http://192.168.0.106:5000/';
  return $resource(API_ROOT + "separate.json", {}, {
      separate : {
          method : "GET",
          isArray : true,
          timeout : 5000
      }
    });
} ])
