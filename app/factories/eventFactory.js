angular.module('app').factory('eventFactory', function () {
	var service = {};

	var events = [];

    if(localStorage.getItem('events')) {
        events = JSON.parse(localStorage.getItem('events'));
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
			localStorage.setItem('events', JSON.stringify(events));
		}
	};

	service.editEvent = function (result) {

		console.log(result);

		var getIndexBy = function (array, value) {
		    for (var i = 0; i < array.length; i++) {
		        if (array[i].id === value) {
		            return i;
		        }
		    }
		};

		// events[getIndexBy(events, result.id)] = result;
		// console.log(events[getIndexBy(events, result.id)]);
		
	};

	return service;
});