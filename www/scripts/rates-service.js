myApp.factory('$rates', [ '$resource', function($resource) {
  var API_ROOT = 'http://api-reciveci.rhcloud.com/';
  //var API_ROOT = 'http://192.168.43.240:5000/';
  //var API_ROOT = 'http://localhost:5000/';
  //var API_ROOT = 'http://192.168.0.107:5000/'; 
  //var API_ROOT = 'http://192.168.10.126:3000/';
  var API_ROOT = 'http://192.168.1.5:5000/';

  return $resource(API_ROOT + "rates_last.json", {}, {
      last : {
          method : "GET",
          isArray : true,
          timeout : 5000
      }
    });
} ])