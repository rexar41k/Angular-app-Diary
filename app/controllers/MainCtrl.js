angular.module('app').controller('MainCtrl',['$scope', 'eventFactory', 'placesFactory',
 function ($scope, eventFactory, placesFactory) {
	$scope.events = eventFactory.getEvents();

  $scope.$watch('events', function() {
    localStorage.setItem('events', JSON.stringify($scope.events)); 
  }, true);

  $scope.addEvent = function (name, description, date, rate, video, map) {
    eventFactory.addEvent(name, description, date, rate, video, map);
  };

	$scope.getYoutube = function (result) {
    if (result === '') {
      $scope.newVideo = '';
    } else if (result) {
      $scope.newVideo = result.split('?v=')[1];
    } else {
      $scope.newVideo = $scope.video.split('?v=')[1];
    }
	};

	$scope.removeEvent = function (event, index) {
    eventFactory.removeEvent(event, index);
  };

	$scope.createMap = function (result) {
    var resultLocation;
    if (result === undefined || result.map === undefined) {
        resultLocation = ['50', '36.3'];
      } else {
        resultLocation = result.map.split(',');
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

        if (result === undefined) {
          $scope.map = location.toUrlValue();
        } else{
          result.map = location.toUrlValue();
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
  };

  $scope.sizes = ['14px', '20px', '24px'];
  $scope.mySize = $scope.sizes[0];

  $scope.showPlaces = function () {
    placesFactory.showPlaces();
  };
}]);