myApp.factory('$affiliations', [ '$resource', function($resource) {
  //var API_ROOT = 'http://api-reciveci.rhcloud.com/';
   var API_ROOT = 'http://10.0.2.15:5000/';
   
  return $resource(API_ROOT, {}, {
      last : {
          url : API_ROOT + "api/v1/affiliations.json",
          method : "GET",
          isArray : true,
          timeout : 5000
      }
    });
} ])
