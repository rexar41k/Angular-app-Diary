angular.module('app').controller('EventsCtrl',
  ['$scope','$location','$routeParams', '$filter', 'eventFactory',
  
	function ($scope, $location, $routeParams, $filter, eventFactory) {
			var uri = eventFactory.getEvents();

			$scope.newresult = $filter('filter')(uri, {id:$routeParams.eventId})[0];
      $scope.result = angular.copy($scope.newresult);
	}]);