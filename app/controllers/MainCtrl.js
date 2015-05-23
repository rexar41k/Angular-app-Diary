angular.module('app').controller('MainCtrl', function ($scope, eventFactory) {
	this.events = eventFactory.getEvents();

  $scope.addEvent = function (name, description, date, rate, video, map) {
    eventFactory.addEvent(name, description, date, rate, video, map);
  };

  $scope.editEvent = function (editingEvent) {
    eventFactory.editEvent(editingEvent);
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
		var del = confirm('Хотите удалить событие: ' + event.name + '?');
		if(del) {
			eventFactory.getEvents().splice(index, 1);
		}
  	};

	$scope.createMap = function (result) {

      if (result == undefined || result.map == undefined) {
        var resultLocation = ['50', '36.3'];
      } else {
        var resultLocation = result.map.split(',');
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

        if (result == undefined) {
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
      var myLatlng = new google.maps.LatLng(50, 36.3);
      var mapOptions = {
        zoom: 2,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };

      var map = new google.maps.Map(document.getElementById("maping"), mapOptions);
      // console.log(eventFactory.getEvents());
      var markers = [],
          allEvents = eventFactory.getEvents();
      function createMarkers() {
          for (var i = 0; i < allEvents.length; i++) {
              if (allEvents[i].map !== '' && allEvents[i].map !== undefined) {
                  var marker = allEvents[i].map.split(','),
                      name = allEvents[i].name,
                      url = '#/event/' + allEvents[i].id;
                  var newMarker = {x: marker[0], y: marker[1], name: name, url: url};
                  markers.push(newMarker);
              }
          }
      }

      function createMarkerList() {
        for (var i = 0; i < markers.length; i++) {

              var marker = new google.maps.Marker({
                position: new google.maps.LatLng(markers[i].x, markers[i].y),
                title: markers[i].name,
                url: markers[i].url,
                map: map
              });

              google.maps.event.addListener(marker, 'click', function() {
                window.location.href = this.url;
              });
        }
      }
      createMarkers();
      createMarkerList();
  };
});