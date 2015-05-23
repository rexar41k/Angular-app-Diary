angular.module('app').factory('eventFactory', function () {
	var service = {};

	var events = [];

    if(localStorage.getItem('events')) {
        events = JSON.parse(localStorage.getItem('events'));
    }

	service.getEvents = function () {
		return events;
	};

	service.removeEvent = function (event, index) {
		var del = confirm('Хотите удалить событие: ' + event.name + '?');
  		if(del) {
  			events.splice(index, 1);
  			localStorage.setItem('events', JSON.stringify(events));
  		}
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

	return service;
});