myApp.factory('$news', [ '$resource', function($resource,$http) {
  //var API_ROOT = 'http://api-reciveci.rhcloud.com/';
  /*$http.get('connection.properties').then(function (response) {
        console.log('a is ', response.data.a);
        console.log('b is ', response.data.b);
      });*/
  var API_ROOT = 'http://192.168.1.6:5000/';
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
