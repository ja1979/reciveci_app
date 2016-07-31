myApp.factory('$rates', [ '$resource','$properties', function($resource,$properties) {

  var API_ROOT = 'http://'+$properties.ip+':'+$properties.port+'/';

  return $resource(API_ROOT + "rates_last.json", {}, {
      last : {
          method : "GET",
          isArray : true,
          timeout : 5000
      }
    });
} ])
