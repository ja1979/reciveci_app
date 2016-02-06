myApp.controller('RecyclingController', function($scope, $recycling, $timeout) {

    $scope.categories_1 = [];
    $scope.categories_2 = [];
    $scope.subcategories = [];
    $scope.recy_ways = [];
    $scope.success = true;

    $timeout(function(){
        modal.show();
        $scope.success = true;
        $recycling.categories_by_column(1, function(categories) {
            $scope.categories_1 = categories;
            if(categories == null){
                $scope.success = false;
            }
            modal.hide();
        });
        $recycling.categories_by_column(2, function(categories) {
            $scope.categories_2 = categories;
            if(categories == null){
                $scope.success = false;
            }
            modal.hide();
        });

    },100);
    
    $scope.recyTitle = "¿Qué separar?";

    $scope.showSubcategory = function(column, index){ 

        var category = column == 1 ? $scope.categories_1[index] : $scope.categories_2[index]

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