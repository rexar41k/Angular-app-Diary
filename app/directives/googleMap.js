angular.module('app').directive('googleMap', function() {
    return {
      link: function (scope, element, attrs) {
          var resultLocation;
          if (scope.result === undefined || scope.result.map === undefined) {
              resultLocation = ['50', '36.3'];
            } else {
              resultLocation = scope.result.map.split(',');
            }    

            var mapOptions = {
              center: new google.maps.LatLng(resultLocation[0], resultLocation[1]),
              zoom: 10,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
         
            var map = new google.maps.Map(document.getElementById("maping"), mapOptions);

            var myLatlng = new google.maps.LatLng(resultLocation[0], resultLocation[1]);

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map
            });

            var placeMarker = function (location) {

            if (scope.result === undefined) {
              scope.map = location.toUrlValue();
            } else{
              scope.result.map = location.toUrlValue();
            }
              
                if ( marker ) {
                  marker.setPosition(location);
                } else {
                  marker = new google.maps.Marker({
                    position: location,
                    map: map,
                  });
                }
          };

          google.maps.event.addListener(map, 'click', function(event) {
              placeMarker(event.latLng);
          });
        }
    };
  });