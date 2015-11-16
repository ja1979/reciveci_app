myApp.controller('RecyclingController', function($scope, $recycling, $timeout) {

    $scope.categories = [];
    $scope.subcategories = [];
    $scope.recy_ways = [];
    $scope.root_base = 'http://api-reciveci.rhcloud.com/';
    //$scope.root_base = 'http://192.168.10.115:3000/';
    $scope.path_images_ways = 'assets/images/ways/';

    $timeout(function(){
        modal.show();
        $recycling.categories(function(categories) {
            $scope.categories = categories;
            modal.hide();
        });

    },100);
    
    $scope.recyTitle = "¿Cómo reciclar?";

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

    $scope.refreshTitleOrigin=function(){
        $scope.recyTitle = "¿Cómo reciclar?";
    }

    $scope.refreshTitleCategory=function(){
        $scope.recyTitle =  "¿Cómo reciclar " + $scope.category.name + "?";
    }

});