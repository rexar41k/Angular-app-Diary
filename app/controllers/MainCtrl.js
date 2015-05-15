angular.module('app').controller('MainCtrl', function ($scope, eventFactory) {
	this.events = eventFactory.getEvents();

	$scope.getYoutube = function () {
		$scope.newVideo = $scope.video.split('?v=')[1];
	};

	$scope.removeEvent = function (event, index) {
		var del = confirm('Хотите удалить событие: ' + event.name + '?');
		if(del) {
			eventFactory.getEvents().splice(index, 1);
		}
  	};

  	$scope.createMap = function () {
            var mapOptions = {
              center: new google.maps.LatLng(50, 36.3),
              zoom: 10,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
         
            var map = new google.maps.Map(document.getElementById("maping"), mapOptions);
        };
});