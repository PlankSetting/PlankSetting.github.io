(function($) {

	var app = angular.module("app", []);

	$('[data-spy="scroll"]').each(function () {
	  var $spy = $(this).scrollspy('refresh')
	});
})(jQuery);