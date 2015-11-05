myApp.controller('NewsController', function($scope, $news) {

    //console.log('NewsController');
    
    
    $scope.news = [];
    //$scope.selectedItem = {title: "Prueba"};
    
    $news.last(function(news) {
        $scope.news = news;
    });


    $scope.showDetail = function(index){ 
        console.log(index);
        var selectedItem = $scope.news[index];
        console.log(selectedItem.title);
        //console.log($scope.news[index]);
        //$scope.selectedItem = selectedItem;
        $scope.newsNavigator.pushPage('new.html', selectedItem);
    }

  
});