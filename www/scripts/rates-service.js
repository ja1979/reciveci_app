myApp.factory('$rates', [ '$resource','$propierties', function($resource,$propierties) {
  //var API_ROOT = 'http://api-reciveci.rhcloud.com/';
  //var API_ROOT = 'http://192.168.43.240:5000/';
  var API_ROOT = 'http://'+$propierties.ip+':'+$propierties.port+'/';


  return $resource(API_ROOT + "rates_last.json", {}, {
      last : {
          method : "GET",
          isArray : true,
          timeout : 5000
      }
    });
} ])