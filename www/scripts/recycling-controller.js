myApp.controller('RecyclingController', function($scope, $recycling) {

    $scope.categories = [];
    $scope.subcategories = [];
    $scope.recy_ways = [];
    
    $scope.recyTitle = '¿Cómo reciclar?';

    $recycling.categories(function(categories) {
        $scope.categories = categories;
    });

    $scope.showSubcategory = function(index){ 
        var category = $scope.categories[index];
        $scope.category = category;
        $scope.recyTitle = "¿Cómo reciclar " + category.name + "?";

        $recycling.subcategories_by_category(category.id, function(data) {
            $scope.subcategories = data;
        });

        $scope.recyclingNavigator.pushPage('subcategories.html', category);

    }

    $scope.showRecyWays = function(index){ 
        var subcategory = $scope.subcategories[index];
        $scope.subcategory = subcategory;
        $scope.recyTitle = "¿Cómo reciclar " + subcategory.name + "?";

        $recycling.recy_ways_by_subcategory(subcategory.id, function(data) {
            $scope.recy_ways = data;
        });

        $scope.recyclingNavigator.pushPage('recy_ways.html', subcategory);

    }

    

  
});