
myApp.controller('MapController', function($scope, $timeout) {

 


  $scope.openProfile = function(feature) {
    $scope.mapNavigator.pushPage('profile.html');
    $scope.currentWastePicker = feature.properties;
  };






var map;
var geojsonLayer;
var popup;
var geojsonLayer_affiliations;
var geojsonLayer_business;


//algoritmo usado con checkboxs

   ShowHideLayers = function(event){
          if(event.target.id == "layerWastePickers" ){
            if(event.target.checked){
              geojsonLayer.addTo(map); 

        var mapAlertExecuted = localStorage.getItem('mapAlertExecuted');

        // console.log("tourExecuted: " + tourExecuted);
            if (mapAlertExecuted == null) {
                localStorage.setItem('mapAlertExecuted', 'Y');
                popup = L.popup()
                      .setLatLng([-0.18292634404976632, -78.47974061965942])
                      .setContent("Haz un tab sobre cada línea para</br>conocer a <strong>l@s reciclador@s<strong>")
                      .openOn(map);
                                           }
            }
            else{
               map.closePopup(popup);
               map.removeLayer(geojsonLayer);
   

            }



          }else if(event.target.id == "layerBusiness"){
            if(event.target.checked){
            
            geojsonLayer_business.addTo(map);
            }
            else{
            map.removeLayer(geojsonLayer_business);


            }
          }else if(event.target.id == "layerAffiliations"){

                if(event.target.checked){
                    
                    geojsonLayer_affiliations.addTo(map);
                  }
                  else{

                     map.removeLayer(geojsonLayer_affiliations);

                      }



              }


          }

          







  


  var loadMap = function() {

map = L.map('map').setView([-0.1832911226129649, -78.48079204559326], 15);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamExOTc5IiwiYSI6ImNpazcyZHFtcjAxOGJ2ZGt0NGNhamQ1cXQifQ.Kkz4bJY_fOE6PM9YaWzJIg', {
      attribution: 'Map data &copy; <a href="http://openo streetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets'
    }).addTo(map);


        


 



    // console.log(map);


      var routes;
      var business ;
      var affiliations ;

      //$.getJSON("http://192.168.43.240:5000/map/routes.json", function(data) {
       //$.getJSON("http://localhost:5000/map/routes.json", function(routes) {
        // $.getJSON("http://localhost:5000/map/bussines.json", function(bussines) {
 
      //$.getJSON("http://192.168.0.107:5000/map/routes.json", function(data) {
      $.getJSON("http://api-reciveci.rhcloud.com/map/routes.json", function(routes) {
        // routes = data ;
        



var routesData = JSON.stringify(routes);
      localStorage.setItem('routesData', routesData);

      //console.log(routesData);

      geojsonLayer = L.geoJson(routes, {
        style: getStyle,
        onEachFeature: onEachFeature
      });


      geojsonLayer.addTo(map);
     



    




    }).fail(function() {

      // Retrieve data from cache
      var routes = JSON.parse(localStorage.getItem('routesData'));

      if (routes != null) {
        geojsonLayer = L.geoJson(routes, {
          style: getStyle,
          onEachFeature: onEachFeature
        });

        geojsonLayer.addTo(map);
        $("#layerWastePickers").prop('checked',true);
        
      } else {
        console.log(error);
      }

    });



 $.getJSON("http://localhost:5000/map/business.json", function(business) {


 


var businessData = JSON.stringify(business);
   localStorage.setItem('businessData', businessData);
      

    

     // console.log(bussinesData);

console.log(business);

function traits (feature,layer){


layer.bindPopup("<div class=map-poup>"+feature.properties["name"]+"</div>"+
  "<div class=map-content-popup>"+feature.properties["address"]+"</div>"


  )

layer.setIcon(imagen);


};

var imagen = new L.icon({iconUrl:"../images/logo_reciveci_pin.png"});

  geojsonLayer_business = L.geoJson(business,{
        //style: getStyle,
        onEachFeature: traits
      });
     
}).fail(function() {


      // Retrieve data from cache
      var business = JSON.parse(localStorage.getItem('businessData'));

      if (business!= null) {
       geojsonLayer_business = L.geoJson(business, {
          ///style: getStyle,
          onEachFeature: traits
        });
          geojsonLayer_business.addTo(map);
        $("#layerBusiness").prop('checked',true);

        
        
      } else {
        console.log(error);
      }


});
$.getJSON("http://10.0.2.15:5000/map/affiliations.json", function(affiliations) {
//$.getJSON("http://192.168.1.8:5000/map/affiliations.json", function(affiliations) {

var affiliationsData = JSON.stringify(affiliations);
   localStorage.setItem('affiliationsData', affiliationsData);

   console.log(affiliations);

   function traits (feature,layer){


layer.bindPopup("<div class=map-poup>"+feature.properties["name"]+"</div>"+
  "<div class=map-content-popup>"+feature.properties["address"]+"</div>"

  );




layer.setIcon(imagen);


};

var imagen = new L.icon({iconUrl:"../images/acopio3.png"});

geojsonLayer_affiliations = L.geoJson(affiliations,{
        //style: getStyle,
        onEachFeature: traits
      });
     

 }).fail(function() {

      // Retrieve data from cache
      var affiliations = JSON.parse(localStorage.getItem('affiliationsData'));

      if (affiliations!= null) {
       geojsonLayer_affiliations = L.geoJson(affiliations, {
          ///style: getStyle,
          onEachFeature: traits

        });
        
      } else {
        console.log(error);
      }



});





  }






  function getStyle(feature) {
    return {color: feature.properties.color,
            weight: feature.properties.weight,
            opacity: feature.properties.opacity};
  }




  function onEachFeature(feature, layer) {

    //console.log(layer);


    if (feature.properties && feature.properties.schedule) {

      var container = $('<div />');

      // Delegate all event handling for the container itself and its contents to the container
      container.on('click', '.profile-link', function() {
        $scope.openProfile(feature);
      });

      // Insert whatever you want into the container, using whichever approach you prefer
      container.html("<div class='map-popup'>" +
                  "<a class='profile-link' href='#'>" +
                  // "<div class='centered profile-icon' style='color: " + feature.properties["color"] + "; opacity: 0.4;'><i class='icon ion-android-walk'></i></div>" +
                  "<div class='centered'><img class='wastepickerpic' src='" + feature.properties["waste_picker-image_url"] + "'/></div>" +
                  "<div class='centered map-profile-name' style='color: " + feature.properties["color"] + "; opacity: 0.5;'>@" + feature.properties["waste_picker-name"] + "</div>" +
                  "</a>" +
                  "</div>");
      //container.append(feature.properties["schedule"]);

      // Insert the container into the popup
      layer.bindPopup(container[0]);
      // layer.bindPopup("Hello!").openPopup();
      //layer.openPopup();


    }
  }








    $timeout(function(){
      // console.log("Cargando...");
      loadMap();
    },100);
  


});

