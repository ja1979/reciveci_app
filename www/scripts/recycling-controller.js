myApp.controller('RecyclingController', function($scope, $recycling, $timeout) {


    $scope.setMainTitle=function(){
        $scope.recyTitle = "¿Qué separar?";
        $scope.subcategories = [];
    }

    var setSpecificTitle=function(name){
        $scope.recyTitle = "¿Cómo separar " + name + "?";
    }


    $scope.handlePostPop=function(e) {
        // console.log(e.leavePage);
        if (e.leavePage.page == "subcategories.html")
            $scope.setMainTitle();
        else
            if (e.leavePage.page == "recy_ways.html")
                setSpecificTitle($scope.category.name);

    }


    $scope.categories_1 = [];
    $scope.categories_2 = [];
    $scope.recy_ways = [];
    $scope.success = true;

    // Load categories in two columns
    $timeout(function(){
        modal.show();
        $scope.success = true;

        $recycling.separate(function(data) {
            $scope.separate = data;
            if(data == null){
                $scope.success = false;
            }
            modal.hide();
            console.log($scope.separate[0]);
        });

        // $recycling.categories_by_column(1, function(categories) {
        //     $scope.categories_1 = categories;
        //     if(categories == null){
        //         $scope.success = false;
        //     }
        //     modal.hide();
        // });
        // $recycling.categories_by_column(2, function(categories) {
        //     $scope.categories_2 = categories;
        //     if(categories == null){
        //         $scope.success = false;
        //     }
        //     modal.hide();
        // });

    },100);

    $scope.setMainTitle();

    // $scope.showSubcategory = function(column, index) {
    $scope.showSubcategory = function(category) {

      $scope.recyclingNavigator.pushPage('subcategories.html');
      $scope.currentCategory = category;


        // var category = column == 1 ? $scope.categories_1[index] : $scope.categories_2[index]
        //
        // $scope.category = category;
        // //$scope.recyTitle = "¿Cómo separar " + category.name + "?";
        // setSpecificTitle(category.name);
        //
        // $recycling.subcategories_by_category(category.id, function(data) {
        //     $scope.subcategories = data;
        //
        //     var foo = JSON.stringify(data);
        //     console.log(foo);
        // });
        //
        // $scope.recyclingNavigator.pushPage('subcategories.html', category);

    }

    $scope.showRecyWays = function(index){
        var subcategory = $scope.subcategories[index];
        $scope.subcategory = subcategory;
        //$scope.recyTitle = "¿Cómo separar " + subcategory.name + "?";
        setSpecificTitle(subcategory.name);

        $recycling.recy_ways_by_subcategory(subcategory.id, function(data) {
            $scope.recy_ways = data;
        });

        $scope.recyclingNavigator.pushPage('recy_ways.html', subcategory);

    }



    $scope.refreshTitleCategory=function() {
        setSpecificTitle($scope.category.name);
        $scope.recy_ways = [];
    }

});
