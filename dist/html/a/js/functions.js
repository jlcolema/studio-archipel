
/*-------------------------------------------
	Browser Detection
-------------------------------------------*/

// For when you get desparate.

// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


/*-------------------------------------------
	General Functions
-------------------------------------------*/


(function($){


	/* On Page Ready */

	$(document).ready(function (){


		/*-------------------------------------------
			Nav Toggle
		-------------------------------------------*/

		// Notes...


		$("#nav").find(".toggle").click(function() {

			$(this).next("ul").toggleClass("open");

		});


		/*-------------------------------------------
			Smooth Scrolling
		-------------------------------------------*/

		// Notes...


		$('#home .work a, .view-work a').smoothScroll({

			offset: -50

		});

		$('#work .work a').smoothScroll({

			offset: -20

		});


		/*-------------------------------------------
			FitVids
		-------------------------------------------*/

		// Notes...


	    $(".video").fitVids();


		/*-------------------------------------------
			Open External Links in New Tab
		-------------------------------------------*/

		// Notes...


		$('a').each(function() {

			var a = new RegExp('/' + window.location.host + '/');

			if(!a.test(this.href)) {

				$(this).click(function(event) {

					event.preventDefault();

					event.stopPropagation();

					window.open(this.href, '_blank');

				});

			}

		});



		/*-------------------------------------------
			Title
		-------------------------------------------*/

		// Notes...


		/*-------------------------------------------
			Screen Size
		-------------------------------------------*/


		// Add class of "dev" to <body>


		// $("body").addClass("dev");


		// Displays screen size on the fly.


		// var windowWidth = $(window).width();

		// var windowHeight = $(window).height();

		// $("#footer").after('<div id="dev"></div>');

		// $("#dev").text(windowWidth + ' ' + 'W' + ' ' + '/' + ' ' + windowHeight + ' ' + 'H');

	});


	/* On Page Load */


	$(window).load(function() {


		/*-------------------------------------------
			Title
		-------------------------------------------*/

		// Notes...


	});


	/* On Window Resize */


	$(window).resize(function() {


		/*-------------------------------------------
			Screen Size
		-------------------------------------------*/


		// Displays screen size on the fly.


		// var windowWidth = $(window).width();

		// var windowHeight = $(window).height();

		// $("#dev").text(windowWidth + ' ' + 'W' + ' ' + '/' + ' ' + windowHeight + ' ' + 'H');


	});


})(window.jQuery);