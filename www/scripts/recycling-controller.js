myApp.controller('RecyclingController', function($scope, $recycling, $timeout) {

    $scope.categories_1 = [];
    $scope.categories_2 = [];
    $scope.success = true;

    var getCurrentDate = function() {
      var dt = new Date();
      return dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
    }


    var loadFromCache = function() {

      console.log("Loading from cache...");

      var separate = JSON.parse(localStorage.getItem('separateData'));

      if (separate != null) {
        $scope.separate = separate;
      } else {
        $scope.success = false;
      }
      modal.hide();

    }


    var refreshData = function(currentDate) {

      console.log('Refreshing data...');

      localStorage.setItem('lastRecyclingRefreshDate', currentDate);

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
          console.log('Error:');
          console.log(error);
          // alert('Error: ' + error);

          loadFromCache();

      });
    }



    $scope.loadDataPull = function($done) {
        // loadData($done);
        var currentDate = getCurrentDate();
        refreshData(currentDate);
        $done();
    };


    var loadData = function() {
      $scope.success = true;
      modal.show();


      var currentDate = getCurrentDate();
      // console.log('currentDate:' + currentDate);

      var lastRecyclingRefreshDate = localStorage.getItem('lastRecyclingRefreshDate');
      // console.log('lastRecyclingRefreshDate:' + lastRecyclingRefreshDate);
      if (lastRecyclingRefreshDate == null || lastRecyclingRefreshDate != currentDate) {
        // console.log("Must refresh");
        refreshData(currentDate);

      } else {
        loadFromCache();
      }


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
