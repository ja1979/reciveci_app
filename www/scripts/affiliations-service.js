myApp.factory('$affiliations', [ '$resource', function($resource) {
  //var API_ROOT = 'http://api-reciveci.rhcloud.com/';
   var API_ROOT = 'http://192.168.1.7:5000/';
   
  return $resource(API_ROOT, {}, {
      last : {
          url : API_ROOT + "api/v1/affiliations.json",
          method : "GET",
          isArray : true,
          timeout : 5000
      }
    });
} ])


// var underscore = angular.module('underscore', []);
// underscore.factory('_', ['$window', function() {
//   return $window._;
// }]);
