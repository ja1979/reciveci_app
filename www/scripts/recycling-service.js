myApp.factory('$recycling', [ '$resource', function($resource) {

  // Use this line for Production env
  // var API_ROOT = 'http://api-reciveci.rhcloud.com/';
  // Use this line for Development env
  // var API_ROOT = 'http://localhost:5000/';
  var API_ROOT = 'http://192.168.0.112:5000/';

  return $resource(API_ROOT + "separate.json", {}, {
      separate : {
          method : "GET",
          isArray : true,
          timeout : 5000
      }
    });
} ])
