
myApp.controller('MapController', function($scope) {


    //alert('MapController');
    //console.log('MapController');


    $scope.openProfile = function() {
      console.log('openProfile');
      $scope.mapNavigator.pushPage('profile.html');
    };



            
    var map = L.map('map').setView([-0.18080, -78.48003], 16);
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
      attribution: 'Map data &copy; <a href="http://openo streetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets'
    }).addTo(map);


    function style(feature) {
      return {color: feature.properties.color,
              weight: feature.properties.weight,
              opacity: feature.properties.opacity};
    }




    function onEachFeature(feature, layer) {
      if (feature.properties && feature.properties.schedule) {

        var container = $('<div />');

        // Delegate all event handling for the container itself and its contents to the container
        container.on('click', '.profileLink', function() {
          $scope.openProfile();
        });

        // Insert whatever you want into the container, using whichever approach you prefer
        container.html("<a class='profileLink' href='#'><div class='centered'><img class='wastepickerpic' src='" + feature.properties["waste_picker-image_url"] + "'/></div>" +
                    "<div class='centered'>" +
                    feature.properties["waste_picker-name"] + "</div></a><br>");
        container.append(feature.properties["schedule"]);

        // Insert the container into the popup
        layer.bindPopup(container[0]);

      }
    }


    var routes;

    //$.getJSON("http://api-reciveci.rhcloud.com/map/routes.json", function(data) {      
    $.getJSON("http://192.168.10.175:5000/map/routes.json", function(data) {
      routes = data ;
      //console.log(routes);
      L.geoJson(routes, {style: style, onEachFeature: onEachFeature}).addTo(map);
    });

  
});
    



