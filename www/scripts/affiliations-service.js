myApp.factory('$affiliations', [ '$resource', function($resource) {

  // Use this line for Production env
  // var API_ROOT = 'http://api-reciveci.rhcloud.com/';
  // Use this line for Development env
  //var API_ROOT = 'http://localhost:5000/';
  var API_ROOT = 'http://192.168.1.5:5000/';

  return $resource(API_ROOT, {}, {
      last : {
          url : API_ROOT + "api/v1/cities.json",
          method : "GET",
          isArray : true,
          timeout : 5000
      }
    });
} ])
