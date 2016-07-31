myApp.factory('$news', ['$resource','$http','$propierties', function($resource,$http,$propierties) {

  var API_ROOT = 'http://'+$propierties.ip+':'+$propierties.port+'/';
  

  return $resource(API_ROOT, {}, {
      last : {
          url : API_ROOT + "articles_last.json",
          method : "GET",
          isArray : true,
          timeout : 5000

      },
      count : {
          url : API_ROOT + "articles_count.json",
          method : "GET",
          timeout : 5000,
          params: {date:'@date'}
      }
    });


} ])
