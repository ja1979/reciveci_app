myApp.controller('NewsController', function($scope, $news, $timeout) {

    
    $scope.news = [];
    $scope.success = true;

    var initialLoad = function() {

        
        $timeout(function(){
            $scope.success = true;
            modal.show();
            $news.last(
                function(news) {
                    $scope.news = news;
                    modal.hide();
                },
                function(error) {
                    console.log(error);
                    $scope.success = false;
                    modal.hide();
                    //alert('Error: ');
                    /*
                    ons.notification.alert({
                        title: 'Error',
                        message: 'Lo sentimos, no se pudo completar la consulta  :('
                    });
                    */
                }
            );


        },100);

    }

    initialLoad();

    
    $scope.load = function($done) {
        $scope.success = true;
        $news.last(
            function(news) {
                $scope.news = news;
                $done();
            },
            function(error) {
                $scope.success = false;
                $done();
                /*
                ons.notification.alert({
                    title: 'Error',
                    message: 'Lo sentimos, no se pudo completar la consulta  :('
                });
                */

            }
        );
     
    };




  


    $scope.showDetail = function(newObj){ 
        //console.log(newObj.title);
        //console.log($scope.news[index]);
        //$scope.selectedItem = selectedItem;
        $scope.newsNavigator.pushPage('new.html');
        $scope.currentNew = newObj;
    }

  
});