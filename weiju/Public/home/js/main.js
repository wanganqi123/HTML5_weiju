$(document).ready(function() {
	$('#ck-slide1').css("width", $(window).width()*0.252)
	$('#ck-slide2').css("width", $(window).width()*0.252)
	$('#ck-slide3').css("width", $(window).width()*0.252)
	$('#ck-slide4').css("width", $(window).width()*0.252)
	$('#ck-slide5').css("width", $(window).width()*0.252)
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
			$('#ejdhlist1').attr('style','background: rgb(247,247,247);');
			$('#ejdhlist2').attr('style','background: rgb(247,247,247);');
			$('#ejdhlist3').attr('style','background: rgb(247,247,247);');
			$('#ejdhlist4').attr('style','background: rgb(247,247,247);');
		}
		else {
			$('#header').removeClass('fixed');
			$('#ejdhlist1').attr('style','background: transparent;');
			$('#ejdhlist2').attr('style','background: transparent;');
			$('#ejdhlist3').attr('style','background: transparent;');
			$('#ejdhlist4').attr('style','background: transparent;');
		}
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	
	
});