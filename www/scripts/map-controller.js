
myApp.controller('MapController', function($scope, $timeout) {


  $scope.pilotNotification = function(event, material) {
      console.log("In pilotNotification");
      ons.notification.alert({
        message: 'Durante el piloto de ReciVeci, la entrega solamente estará disponible en el sector mostrado.',
        modifier: material ? 'material' : undefined
      });
    }



    //alert('MapController');
    console.log('MapController');


    $scope.openProfile = function(feature) {
      console.log(feature.properties["waste_picker-name"]);
      $scope.mapNavigator.pushPage('profile.html');
      $scope.currentWastePicker = feature.properties;
    };

    var map;
    var loadMap = function() {

      console.log("Loading map...");

      map = L.map('map').setView([-0.1832911226129649, -78.48079204559326], 15);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamExOTc5IiwiYSI6ImNpazcyZHFtcjAxOGJ2ZGt0NGNhamQ1cXQifQ.Kkz4bJY_fOE6PM9YaWzJIg', {
        attribution: 'Map data &copy; <a href="http://openo streetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets'
      }).addTo(map);

      var routes;

      $.getJSON("http://api-reciveci.rhcloud.com/map/routes.json", function(data) {      
      //$.getJSON("http://192.168.43.240:5000/map/routes.json", function(data) {
      // $.getJSON("http://localhost:5000/map/routes.json", function(data) {
      //$.getJSON("http://192.168.0.107:5000/map/routes.json", function(data) {
        routes = data ;
        //console.log(routes);
        L.geoJson(routes, {style: style, onEachFeature: onEachFeature}).addTo(map);
      });


    }

    



    function style(feature) {
      return {color: feature.properties.color,
              weight: feature.properties.weight,
              opacity: feature.properties.opacity};
    }




    function onEachFeature(feature, layer) {
      if (feature.properties && feature.properties.schedule) {

        var container = $('<div />');

        // Delegate all event handling for the container itself and its contents to the container
        container.on('click', '.profile-link', function() {
          $scope.openProfile(feature);
        });

        // Insert whatever you want into the container, using whichever approach you prefer
        container.html("<div class='map-popup'>" +
                    "<a class='profile-link' href='#'>" + 
                    "<div class='centered profile-icon' style='color: " + feature.properties["color"] + "; opacity: 0.4;'><i class='icon ion-android-walk'></i></div>" +
                    "<div class='centered'>@" + feature.properties["waste_picker-name"] + "</div>" + 
                    //"<div class='centered'><img class='wastepickerpic' src='" + feature.properties["waste_picker-image_url"] + "'/></div>" +
                    "</a>" +
                    "</div>");
        //container.append(feature.properties["schedule"]);

        // Insert the container into the popup
        layer.bindPopup(container[0]);

      }
    }


    $timeout(function(){
      console.log("Cargado");
      loadMap();
    },800);


 
  
});
    



