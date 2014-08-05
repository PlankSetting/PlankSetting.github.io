(function($) {

	var app = angular.module("app", []);

	$('[data-spy="scroll"]').each(function () {
	  var $spy = $(this).scrollspy('refresh')
	});
	Transifex.live.onTranslatePage(function('ar') {
	  pic = "bottom-left";
	  $('body').css('direction', 'rtl');
	});
})(jQuery);