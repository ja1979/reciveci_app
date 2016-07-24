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

              if (news.length > 0) {
                lastDateNews = news[0].created_at;
                localStorage.setItem('lastDateNews', lastDateNews);
                // $parent.newsCount = 0;
              }


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
        //console.log($scope.currentNew);
        var str = newObj.content;      
        var urlRegEx = /<(\w+) (.*")>(.*)<.a>/g;
        result = str.replace(urlRegEx, "<a class='custom_Links' onclick=\"window.open('$3',\'_system\')\">$3</a>");
        $scope.contenido = result;
        //console.log(str);
        //console.log(result);

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

