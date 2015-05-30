angular.module('app', ['ngRoute']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

	$routeProvider
		.when('/',{
			templateUrl:'app/views/main.html',
			controller: 'MainCtrl'
		})
		.when('/info',{
			templateUrl:'app/views/main.html',
			controller:'MainCtrl'
		})
		.when('/event/add',{
			templateUrl:'app/views/add.html',
			controller:'MainCtrl'
		})
		.when('/event/:eventId',{
			templateUrl:'app/views/one.html',
			controller:'MainCtrl'
		})
		.when('/event/edit/:eventId',{
			templateUrl:'app/views/edit.html',
			controller:'MainCtrl'
		})
		.when('/events',{
			templateUrl:'app/views/events.html',
			controller:'MainCtrl'
		})
		.when('/places',{
			templateUrl:'app/views/places.html',
			controller:'MainCtrl'
		})
		.when('/event/add/success',{
			templateUrl:'app/views/success.html',
			controller:'MainCtrl'
		})
		.when('/event/editing/success',{
			templateUrl:'app/views/success-edit.html',
			controller:'MainCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});

		// $locationProvider.html5Mode(true);
}]);

