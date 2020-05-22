$(document).ready(function(){
	$('.humbargar-menu').click(function(){
		$(this).toggleClass('js-humbargar-menu');
		$('.menu-nav').toggleClass('js-menu-nav');
	});
	$('.match-height').matchHeight();
	$('.contact-match-height').matchHeight();
});