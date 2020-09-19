(function($) {
    "use strict";

	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});

	/* Navbar Scripts */
	// jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 20) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });

    /* Rotating Text - Morphtext */
	$("#js-rotating").Morphext({
		// The [in] animation type. Refer to Animate.css for a list of available animations.
		animation: "fadeIn",
		// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
		separator: ",",
		// The delay between the changing of each phrase in milliseconds.
		speed: 2000,
		complete: function () {
			// Called after the entrance animation is executed.
		}
    });

	// ============================

	/* Life Path Calculator */
	const regexDate = /^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$/g;
	// Allows dates following these rules: - days may have leading zeros. 1-31. max 2 digits - months may have leading zeros. 1-12. max 2 digits - years 1900-2099. 4 digits

	$("#birthNumber").on("submit", function(event) {
		event.preventDefault();
		$("#birthDate").val() ? matchDate() : $("#numerology-result").text("Uzupełnij pole daty")

	});

	function matchDate() {
		$("#birthDate").val().match(regexDate) ? dateSubmit() : $("#numerology-result").text("Podana data jest błędna. Zapisz poprawną datę w formacie DD/MM/RRRR");
	}

	function dateSubmit() {
		const birthDate = $("#birthDate").val();
		let result = 0;

		for (const num of birthDate) {
			(num !== '/') && (result += parseInt(num))
		}
		if (!result) {
			return $("#numerology-result").text("Podana data jest nieprawidłowa")
		}
		while (result > 9 && result !== 11 && result !== 22 && result !== 33 && result !== 44) {
			const firstNum = Math.floor(result / 10);
			const secondNum = result%10;
			result = firstNum + secondNum
		}
		const text = "Wibracja Twojej drogi życia to: ";
		return $("#numerology-result").text(text + result)
	}

	/* Lightbox - Magnific Popup */
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
})(jQuery);