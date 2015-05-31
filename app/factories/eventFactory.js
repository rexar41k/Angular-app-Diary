angular.module('app').factory('eventFactory', function () {
	var service = {};

	var events = [];

  if(localStorage.getItem('events')) {
      events = JSON.parse(localStorage.getItem('events'));
  }

  service.uniqueId = (function () {
    var counter;
    if (localStorage.getItem('counter')) {
      counter = localStorage.getItem('counter');
    } else {
      counter = 0;
    }
    
    return function () {
      return ++counter;
    };
  })();

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

		if (name && description && date) {

      var newEvent = {
        id: this.uniqueId(),
        name: name,
        description: description,
        date: date,
        rate: rate,
        video: video,
        map: map,
      };

			events.push(newEvent);
			location.hash = "#/event/add/success";
			localStorage.setItem('events', JSON.stringify(events));
      localStorage.setItem('counter', newEvent.id);
		}
	};

  service.editEvent = function (result) {
    if (result.name && result.description && result.date) {
      var editEvent = {
        id: result.id,
        name: result.name,
        description: result.description,
        date: result.date,
        rate: result.rate,
        video: result.video,
        map: result.map,
      };

      events.splice(parseInt(editEvent.id) - 1, 1, editEvent);

      location.hash = "#/event/editing/success";
      localStorage.setItem('events', JSON.stringify(events));
    } 
  };

	return service;
});