myApp.controller('NewsController', function($scope, $news) {

    
    $scope.news = [];
    
    $news.last(function(news) {
        $scope.news = news;
    });


    $scope.showDetail = function(newObj){ 
        //console.log(newObj.title);
        //console.log($scope.news[index]);
        //$scope.selectedItem = selectedItem;
        $scope.newsNavigator.pushPage('new.html');
        $scope.currentNew = newObj;
    }

  
});