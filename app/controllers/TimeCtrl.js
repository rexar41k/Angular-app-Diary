angular.module('app').controller('TimeCtrl', function ($scope, $timeout) {
	$scope.today = new Date(); //today

    $scope.clock = "Ждем часы...";
    $scope.tickInterval = 1000;//ms

    var tick = function() {
        $scope.clock = Date.now();// получаем текущее время
        $timeout(tick, $scope.tickInterval); // перезапуск таймера
    };

    // Старт таймера
    $timeout(tick, $scope.tickInterval);
});