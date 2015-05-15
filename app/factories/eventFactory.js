angular.module('app').factory('eventFactory', function () {
	var service = {};

	var events = [
		{
			name: 'Event',
			description: 'Add tests',
			date: '11.12.13',
			rate: 'Нейтральное',
			video: 'https://www.youtube.com/watch?v=v_qPcAvB3Pk',
			map: '53.031949,36.272736',
			id: 1
		},
		{
			name: 'People',
			description: 'Add debugger',
			date: '11.12.13',
			rate: 'Нейтральное',
			video: '',
			map: '53.031949,31.272736',
			id: 2
		},
		{
			name: 'Eggs',
			description: 'Fix bugs',
			date: '11.12.13',
			rate: 'Нейтральное',
			video: 'https://www.youtube.com/watch?v=v_qPcAvB3Pk',
			map: '58.031949,38.272736',
			id: 3
		}
	];

	service.getEvents = function (list) {
		return events;
	};

	return service;
});