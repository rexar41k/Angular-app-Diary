angular.module('app').factory('placesFactory', function (eventFactory) {
	var service = {};

	service.showPlaces = function () {
	  var myLatlng = new google.maps.LatLng(50, 36.3);
      var mapOptions = {
        zoom: 2,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };

      var map = new google.maps.Map(document.getElementById("maping"), mapOptions);
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

	return service;
});