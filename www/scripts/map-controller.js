
myApp.controller('MapController', function() {


    //alert('MapController');
    //console.log('MapController');
            
    var map = L.map('map').setView([-0.181451, -78.480030], 16);
    
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
        // does this feature have a property named popupContent?
        if (feature.properties && feature.properties.schedule) {
            //console.log("Setting popup...");
            layer.bindPopup(feature.properties.popup);
        }
    }


    var routes;

    $.getJSON("http://api-reciveci.rhcloud.com/map/routes.json", function(data) {
      routes = data ;
      //console.log(routes);
      L.geoJson(routes, {style: style, onEachFeature: onEachFeature}).addTo(map);
    });


    var popup = L.popup();
    
    function onMapClick(e)  {
        popup
            .setLatLng(e.latlng)
            .setContent(e.latlng.lng + ", " + e.latlng.lat)
            .openOn(map);
    }

    map.on('click', onMapClick);
  
});
    



