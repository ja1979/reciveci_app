myApp.controller('RecyclingController', function($scope, $recycling, $timeout) {

    $scope.categories_1 = [];
    $scope.categories_2 = [];
    $scope.success = true;

    var loadData = function() {
      $scope.success = true;
      modal.show();

      $recycling.separate(function(separate) {

        // Store in local store
        var separateData = JSON.stringify(separate);
        localStorage.setItem('separateData', separateData);
        var separate = JSON.parse(localStorage.getItem('separateData'));
        // console.log(separate);

        $scope.separate = separate;
        modal.hide();

      },
      function(error) {
          console.log(error);
          // alert('Error: ' + error);

          // Retrieve data from cache
          var separate = JSON.parse(localStorage.getItem('separateData'));


          if (separate != null) {
            $scope.separate = separate;
          } else {
            $scope.success = false;
          }
          modal.hide();

      });

    }


    // Initial load
    $timeout(function(){

      loadData();


    },100);


    $scope.showSubcategory = function(category, wasteType) {
      $scope.recyclingNavigator.pushPage('subcategories.html');
      $scope.currentCategory = category;
      $scope.currentWasteType = wasteType;
    }



    $scope.showImage = function(subcat) {
      subcatImageModal.show();
      $scope.subcat = subcat;
    }

});
