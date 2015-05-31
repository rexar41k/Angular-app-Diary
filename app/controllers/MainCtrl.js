angular.module('app').controller('MainCtrl',['$scope', 'eventFactory', 'placesFactory',
 function ($scope, eventFactory, placesFactory) {
	$scope.events = eventFactory.getEvents();

  $scope.addEvent = function (newEvent) {
    eventFactory.addEvent(newEvent);
  };

  $scope.editEvent = function (result) {
    eventFactory.editEvent(result);
  };

	$scope.getYoutube = function (result) {
    if (result === '') {
      $scope.newVideo = '';
    } else if (result) {
      $scope.newVideo = result.split('?v=')[1];
    } else {
      $scope.newVideo = $scope.newEvent.video.split('?v=')[1];
    }
	};

	$scope.removeEvent = function (event, index) {
    eventFactory.removeEvent(event, index);
  };

  $scope.sizes = ['14px', '20px', '24px'];
  $scope.mySize = $scope.sizes[0];

  $scope.showPlaces = function () {
    placesFactory.showPlaces();
  };
}]);