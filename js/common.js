/* sitemap start */
var sitemap = function() {
	var btnStm = $('.btn_gnb'),
		stmDimm = $('.m_gnb_dimm');

	btnStm.click(function() {
		$('.gnb_nav').animate({
			'left' : 0
		});
		stmDimm.show();
	});

	$('.btn_gnb_close, .m_gnb_dimm').click(function() {
		$('.gnb_nav').animate({
			'left' : '-320px'
		}, function() {
			stmDimm.hide();
		});
	});
};
/* sitemap end */

$(document).ready(function() {
	sitemap();
});