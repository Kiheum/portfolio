(function (win, $) {
    'use strict';
	
	var winWidth = $(win).innerWidth();
	
	var webInit = function() {
		$('.gnb_nav').removeClass('mobile').addClass('web').attr('style', '');
		$('.btn_gnb').removeClass('on');
	};

	var mobileInit = function() {
		$('.gnb_nav').removeClass('web').addClass('mobile');
		$('.btn_gnb').addClass('on');
	};

	var gnb = function() {
		var btnGnb = $('.btn_gnb');

		btnGnb.on('click', function(e) {
			$('.gnb_nav').animate({
				'left' : 0
			});
			$('.m_gnb_dimm').show();
			e.preventDefault();
		});

		$('.btn_gnb_close, .m_gnb_dimm').on('click', function(e) {
			$('.gnb_nav').animate({
				'left' : '-100%'
			}, function() {
				$('.m_gnb_dimm').hide();
			});
			e.preventDefault();
		});
	};

	var visual = function() {
		$('.visual').css('height', $(win).innerHeight());
		$('.visual_txt_box').css({
			'marginTop' : - ($('.visual_txt_box').innerHeight() / 2)
		});
	};

	var viewResize = function() {
		var myWidth = 0,
			myHeight = 0;
		if (typeof (win.innerWidth) == 'number') { //Chrome
			 myWidth = win.innerWidth;
			 myHeight = win.innerHeight;
		} else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
			 myWidth = document.documentElement.clientWidth;
			 myHeight = document.documentElement.clientHeight;
		} else if (document.body && (document.body.clientWidth || document.body.clientHeight)) { //IE9
			 myWidth = document.body.clientWidth;
			 myHeight = document.body.clientHeight;
		}
		if (myWidth > 960) {
			webInit();
		} else if (myWidth <= 960) {
			mobileInit();
		}
	};

	$(document).ready(function() {
		if (winWidth > 960) {
			webInit();
		} else if (winWidth <= 960) {
			mobileInit();
		}
		$('.btn_scroll_down').on('click', function(e) {
			$('html, body').animate({
				scrollTop : $('.about, .study').offset().top
			}, 500, 'swing');
			e.preventDefault();
		});
		gnb();
		visual();
	});

	$(win).on('resize', function() {
		viewResize();
		visual();
	});

	$(win).on('scroll', function() {
		var scrollVal = $(win).scrollTop();
		if (scrollVal > 0) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

})(window, window.jQuery);





