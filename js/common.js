/* sitemap start */
var sitemap = function() {
	var btnStm = $('.btn_stm'),
		stmDimm = $('.m_gnb_dimm');

	btnStm.click(function() {
		$('.m_nav').animate({
			'left' : 0
		});
		stmDimm.show();
	});

	$('.btn_stm_close, .m_gnb_dimm').click(function() {
		$('.m_nav').animate({
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