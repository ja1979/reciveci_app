myApp.controller('NewsController', function($scope, $news, $timeout) {


    $scope.news = [];
    $scope.success = true;


    var loadData = function($done) {
      $scope.success = true;
      modal.show();
      $news.last(
          function(news) {
              // Store in local store
              var newsData = JSON.stringify(news);
              localStorage.setItem('newsData', newsData);

              $scope.news = news;
              modal.hide();
              if ($done)
                $done();
          },
          function(error) {
              console.log(error);

              // Retrieve data from cache
              var news = JSON.parse(localStorage.getItem('newsData'));

              if (news != null) {
                $scope.news = news;
              } else {
                $scope.success = false;
              }
              modal.hide();
              if ($done)
                $done();
          }
      );
    };


  // Initial load
  $timeout(function() {
      loadData();
    },100);



    $scope.loadDataPull = function($done) {
        loadData($done);
    };


    $scope.showDetail = function(newObj){
        //newImageModal.hide();
        $scope.newsNavigator.pushPage('new.html');
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
