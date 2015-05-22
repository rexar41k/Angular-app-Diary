angular.module('app').factory('eventFactory', function () {
	var service = {};

	var events = [
		// {
		// 	name: 'Event',
		// 	description: 'Add tests',
		// 	date: '11.12.13',
		// 	rate: 'Нейтральное',
		// 	video: 'https://www.youtube.com/watch?v=v_qPcAvB3Pk',
		// 	map: '53.031949,36.272736',
		// 	id: 5031
		// },
		// {
		// 	name: 'People',
		// 	description: 'Add debugger',
		// 	date: '11.12.13',
		// 	rate: 'Нейтральное',
		// 	video: '',
		// 	map: '53.031949,31.272736',
		// 	id: 5032
		// },
		// {
		// 	name: 'Eggs',
		// 	description: 'Fix bugs',
		// 	date: '11.12.13',
		// 	rate: 'Нейтральное',
		// 	video: 'https://www.youtube.com/watch?v=v_qPcAvB3Pk',
		// 	map: '58.031949,38.272736',
		// 	id: 5033
		// }
	];

	service.getEvents = function () {
		return events;
	};

	service.addEvent = function (name, description, date, rate, video, map) {

		var newEvent = {
			id: _.uniqueId(),
			name: name,
			description: description,
			date: date,
			rate: rate,
			video: video,
			map: map,
		};

		if (newEvent.name && newEvent.description && newEvent.date) {
			events.push(newEvent);
			location.hash = "#/event/add/success";
		}
	};

	return service;
});