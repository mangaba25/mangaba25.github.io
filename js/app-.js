// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};



// Scroll suave para link interno
// $('.menu-nav a[href^="#"]').click(function(e){
// 	e.preventDefault();
// 	var id = $(this).attr('href'),
// 			menuHeight = $('.menu').innerHeight(),
// 			targetOffset = $(id).offset().top;
// 	$('html, body').animate({
// 		scrollTop: targetOffset - menuHeight
// 	}, 500);
// });



// Botão do menu mobile
$('.mobile-btn').click(function(){
	$(this).toggleClass('active');
	$('.mobile-menu').toggleClass('active');
});

// Slider

















