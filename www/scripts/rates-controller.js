myApp.controller('RatesController', function($scope, $rates, $timeout) {

    
    $scope.rates = [];
    $scope.success = true;

    var initialLoad = function() {

        
        $timeout(function(){
            $scope.success = true;
            modal.show();
            $rates.last(
                function(rates) {
                    $scope.rates = rates;
                    modal.hide();
                },
                function(error) {
                    console.log(error);
                    $scope.success = false;
                    modal.hide();
                }
            );


        },100);

    }

    initialLoad();

    
    $scope.load = function($done) {
        $scope.success = true;
        $rates.last(
            function(rates) {
                $scope.rates = rates;
                $done();
            },
            function(error) {
                $scope.success = false;
                $done();
            }
        );
     
    };


    $scope.showDetail = function(newObj){ 
        $scope.ratesNavigator.pushPage('rate.html');
        $scope.currentRate = newObj;
    }

  
});