angular.module('app').factory('eventFactory', function () {
	var service = {};

	var events = [
		{
			name: 'Event 1',
			description: 'Add tests',
			date: '11.12.13',
			rate: 'Нейтральное',
			video: 'https://www.youtube.com/watch?v=v_qPcAvB3Pk',
			map: '53.031949,36.272736',
			id: 1
		},
		{
			name: 'Event 2',
			description: 'Add debugger',
			date: '11.12.13',
			rate: 'Нейтральное',
			video: 'https://www.youtube.com/watch?v=v_qPcAvB3Pk',
			map: '53.031949,31.272736',
			id: 1
		},
		{
			name: 'Event 3',
			description: 'Fix bugs',
			date: '11.12.13',
			rate: 'Нейтральное',
			video: 'https://www.youtube.com/watch?v=v_qPcAvB3Pk',
			map: '58.031949,38.272736',
			id: 1
		}
	];

	service.getEvents = function (list) {
		return events;
	};

	return service;
});