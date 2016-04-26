myApp.controller('AffiliationsController',function ($scope ,$affiliations , $timeout){
	
	$scope.affiliations = [];
    $scope.success = true;

    var loadData = function($done) {

      $scope.success = true;
      modal.show();
      $affiliations.last(
          function(affiliations) {
              // Store in local store
              var affiliationsData = JSON.stringify(affiliations);
              localStorage.setItem('affiliationsData', affiliationsData);

              $scope.affiliations = affiliations;
				modal.hide();
              if ($done)
                $done();
          },
          function(error) {
              console.log(error);

              // Retrieve data from cache
              var news = JSON.parse(localStorage.getItem('affiliationsData'));

              if (news != null) {
                $scope.affiliations = affiliations;
              } else {
                $scope.success = false;
              }
              modal.hide();
              if ($done)
                $done();
          }
      );
    };

    $timeout(function() {
      loadData();
    },100);

    $scope.loadDataPull = function($done) {
        loadData($done);
    };

    $scope.showDetail = function(newObj){
        //newImageModal.hide();
        $scope.affiliationNavigator.pushPage('new.html');
        $scope.currentNew = newObj;
    }

    $scope.showImage = function() {
      newImageModal.show();
    }

    $scope.dialogs = {};
    $scope.show = function(dlg, imageUrl) {
        $scope.imageUrl = imageUrl;
        if (!$scope.dialogs[dlg]) {
          ons.createDialog(dlg).then(function(dialog) {
            $scope.dialogs[dlg] = dialog;
            dialog.show();
          });
        } else {
          $scope.dialogs[dlg].show();
        }
    };



});