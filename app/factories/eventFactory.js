angular.module('app').factory('eventFactory', function () {
	var service = {};

	var events = [];
	
    if(localStorage.getItem('collect')) {
        events = JSON.parse(localStorage.getItem('collect'));
    }

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
			localStorage.setItem('collect', JSON.stringify(events));
		}
	};

	return service;
});