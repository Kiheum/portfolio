(function (win, $) {
    'use strict';
	
	var dev = 'web';
	var myWin = $(window).innerWidth();

	var viewResize = function() {
		var myWidth = 0;
		var myHeight = 0;
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
		if (myWidth > 640) {
			if (dev == 'mobile') {
				pcInit();
				dev = 'web';
				$('.gnb_nav').attr('style', '');
			}
		} else if (myWidth <= 640) {
			if (dev == 'web') {
				mcInit();
				dev = 'mobile'
			}
		}
	};

	var pcInit = function() {
		$('body').removeClass().addClass('web');
	};

	var mcInit = function() {
		$('body').removeClass().addClass('mobile');
	};

	/* gnb start */
	var gnb = function() {
		var btnGnb = $('.btn_gnb'),
			gnbDimm = $('.m_gnb_dimm');

		if ($('body').hasClass('mobile')) {
			btnGnb.click(function() {
				$('.gnb_nav').animate({
					'left' : 0
				});
				gnbDimm.show();
			});

			$('.btn_gnb_close, .m_gnb_dimm').click(function() {
				$('.gnb_nav').animate({
					'left' : '-320px'
				}, function() {
					gnbDimm.hide();
				});
			});
		}
	};
	/* //gnb end */

	$(window).on('resize', function() {
		viewResize();
	});

	$(document).ready(function() {
		if (myWin > 640) {
			$('body').addClass('web');
			if (dev == 'mobile') {
				dev = 'web'
			}
		} else if (myWin <= 640) {
			if (dev == 'web') {
				$('body').addClass('mobile');
				dev = 'mobile'
			}
		}
		gnb();
	});

})(window, window.jQuery);





