myApp.controller('MainController', function($scope, $news) {


  lastDateNews = localStorage.getItem('lastDateNews');
  // console.log(lastDateNews);

  $news.count({date:lastDateNews}, function(count) {
    // console.log('called');
    // console.log(count.count);
    if (count.count > 0)
      $scope.newsCount = count.count;
  });


  $scope.clearNewsNotification = function() {
    $scope.newsCount = 0;
  }





});
