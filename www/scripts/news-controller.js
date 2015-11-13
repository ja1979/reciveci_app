myApp.controller('NewsController', function($scope, $news, $timeout) {

    
    $scope.news = [];
    
    $timeout(function(){
        modal.show();
        $news.last(function(news) {
            $scope.news = news;
            modal.hide();
        });

    },100);





    $scope.showDetail = function(newObj){ 
        //console.log(newObj.title);
        //console.log($scope.news[index]);
        //$scope.selectedItem = selectedItem;
        $scope.newsNavigator.pushPage('new.html');
        $scope.currentNew = newObj;
    }

  
});