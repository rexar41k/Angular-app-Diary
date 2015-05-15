angular.module('app').directive('youtube', function() {
	  return {
	    scope: {
	    	code:'@code'
	    },
	    template: '<object id="youtube-post" data="http://www.youtube.com/v/{{code}}" type="application/x-shockwave-flash"></object>'
	  };
	});