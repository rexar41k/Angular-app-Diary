angular.module('app').directive('youtube', function() {
	  return {
	    scope: {
	    	code:'@code'
	    },
	    template: '<object id="object-post" width="300" height="200" data="http://www.youtube.com/v/{{code}}" type="application/x-shockwave-flash"></object>'
	  };
	});