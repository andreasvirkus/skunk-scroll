/**
 * | Custom javascript scroll bar |
 *  ------------------------------
 * A small script that deploys a horizontal scalable scroll bar
 * at the top of the page.
 *  *  *  *  *  * #
 * @author andreas johan virkus
 * @contact andreasvirkus at gmail dot com
 * @licensed under MIT License 2015
 * 
 * jQuery version
 */

var bar_bg = $(".bar .bar-bg");
bar_bg.css("min-width", $(document).width() + "px");

$(window).resize(function() {
	// Update the gradient width
	bar_bg.css("min-width", $(document).width() + "px");
});

$(window).scroll(function(e) {
	// Change the width of the progress bar
	var bar = $(".bar"),
		dw  = $(document).width(),
		dh  = $(document).height(),
		wh  = $(window).height(),
		pos = $(document).scrollTop(),
		bw  = ((pos / (dh - wh)) * 100);

	bar.css("width", bw + "%");
});