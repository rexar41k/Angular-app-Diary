angular.module('app').controller('EventsCtrl',['$scope','$location','$routeParams', '$filter', 'eventFactory',
	function ($scope, $location, $routeParams, $filter, eventFactory) {
			var uri = eventFactory.getEvents();

			$scope.result = $filter('filter')(uri, {id:$routeParams.eventId})[0];
	}]);