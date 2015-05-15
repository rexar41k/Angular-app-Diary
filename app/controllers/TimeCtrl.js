angular.module('app').controller('TimeCtrl', function ($scope, $timeout) {
	$scope.today = new Date(); //today

    $scope.clock = "Ждем часы..."; // initialise the time variable
    $scope.tickInterval = 1000;//ms

    var tick = function() {
        $scope.clock = Date.now();// get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    };

    // Start the timer
    $timeout(tick, $scope.tickInterval);
});