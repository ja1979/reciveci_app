myApp.controller('RecyclingController', function($scope, $recycling, $timeout) {

    $scope.categories = [];
    $scope.subcategories = [];
    $scope.recy_ways = [];
    $scope.root_base = 'http://api-reciveci.rhcloud.com/';
    //$scope.root_base = 'http://192.168.10.115:3000/';
    $scope.path_images_ways = 'assets/images/ways/';

    $scope.success = true;

    $timeout(function(){
        modal.show();
        $scope.success = true;
        $recycling.categories(function(categories) {
            $scope.categories = categories;
            if(categories == null){
                $scope.success = false;
            }
            modal.hide();
        });

    },100);
    
    $scope.recyTitle = "¿Qué separar?";

    $scope.showSubcategory = function(index){ 
        var category = $scope.categories[index];
        $scope.category = category;
        $scope.recyTitle = "¿Cómo separar " + category.name + "?";

        $recycling.subcategories_by_category(category.id, function(data) {
            $scope.subcategories = data;
        });

        $scope.recyclingNavigator.pushPage('subcategories.html', category);

    }

    $scope.showRecyWays = function(index){ 
        var subcategory = $scope.subcategories[index];
        $scope.subcategory = subcategory;
        $scope.recyTitle = "¿Cómo separar " + subcategory.name + "?";

        $recycling.recy_ways_by_subcategory(subcategory.id, function(data) {
            $scope.recy_ways = data;
        });

        $scope.recyclingNavigator.pushPage('recy_ways.html', subcategory);

    }

    $scope.refreshTitleOrigin=function(){
        $scope.recyTitle = "¿Qué separar?";
        $scope.subcategories = [];
    }

    $scope.refreshTitleCategory=function(){
        $scope.recyTitle =  "¿Cómo separar " + $scope.category.name + "?";
        $scope.recy_ways = [];
    }

});