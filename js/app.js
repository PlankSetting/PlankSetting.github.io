(function($) {

	var app = angular.module("app", []);

	$('[data-spy="scroll"]').each(function () {
	  var $spy = $(this).scrollspy('refresh')
	});
	alert(window.liveSettings.detectlang);
})(jQuery);