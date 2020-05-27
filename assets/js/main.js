$(document).ready(function(){
	$('.humbargar-menu').click(function(){
		$(this).toggleClass('js-humbargar-menu');
		$('.menu-nav').toggleClass('js-menu-nav');
	});
	$('.match-height').matchHeight();
	$('.contact-match-height').matchHeight();

	$(window).scroll(function(){
		var sticky = $('header.header-section');
			scroll = $(window).scrollTop();
			if (scroll >= 10) {
				$('body').addClass('hasSticky');
			}
			else{
				$('body').removeClass('hasSticky');
			}
	});
});