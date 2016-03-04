myApp.factory('$recycling', [ '$resource', function($resource) {
  // var API_ROOT = 'http://api-reciveci.rhcloud.com/';
  //var API_ROOT = 'http://192.168.43.240:5000/';
  //var API_ROOT = 'http://localhost:5000/';
  var API_ROOT = 'http://192.168.0.109:5000/';
  return $resource(API_ROOT + "separate.json", {}, {
      separate : {
          method : "GET",
          isArray : true,
          timeout : 5000
      }
    });
} ])
