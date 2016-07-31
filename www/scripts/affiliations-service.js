myApp.factory('$affiliations', [ '$resource','$properties', function($resource,$properties) {

  var API_ROOT ='http://'+$properties.ip+':'+$properties.port+'/';

  return $resource(API_ROOT, {}, {
      last : {
          url : API_ROOT + "api/v1/cities.json",
          method : "GET",
          isArray : true,
          timeout : 5000
      }
    });
} ])
