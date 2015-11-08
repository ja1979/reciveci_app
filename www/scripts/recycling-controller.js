myApp.controller('RecyclingController', function($scope, $recycling) {

    $scope.categories = [];
    $scope.subcategories = [];
    
    $scope.recyTitle = '¿Cómo reciclar?';


    $recycling.categories(function(categories) {
        $scope.categories = categories;
    });

    
    $scope.showSubcategory = function(index){ 
        console.log(index);
        var category = $scope.categories[index];
        $scope.category = category;
        $scope.recyTitle = "¿Cómo reciclar " + category.name + "?";


        $recycling.subcategories_by_category(category.id, function(data) {
            $scope.subcategories = data;
        });



        $scope.recyclingNavigator.pushPage('category.html', category);



    }

    

  
});