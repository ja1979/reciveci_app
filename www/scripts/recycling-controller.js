myApp.controller('RecyclingController', function($scope, $recycling) {

    $scope.categories = [];

    $recycling.categories(function(categories) {
        $scope.categories = categories;
    });

/*    
    $scope.showCategory = function(index){ 
        console.log(index);
        var category = $scope.news[index];
        console.log(category.id);
        $scope.newsNavigator.pushPage('category.html', category);
    }

    
*/
  
});