myApp.factory('$recycling', [ '$resource','$properties', function($resource,$properties) {

  var API_ROOT ='http://'+$properties.ip+':'+$properties.port+'/';
  console.log(API_ROOT);

  return $resource(API_ROOT + "separate.json", {}, {
      separate : {
          method : "GET",
          isArray : true,
          timeout : 5000
      }
    });
} ])
