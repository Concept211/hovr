/*
jQuery Hovr v1.0
07/20/2013
------------------
Pablo D. Carrau
www.concept211.com
*/
(function($){
  $.fn.hovr = function(options) {

		// Default Options
		var defaults = {
			speed:           'normal',
			animateOver:     {'opacity': '0'},
			animateOut:      {'opacity': '1'},
			timThumb:        false,
			timThumbInverse: false,
			timThumbPath:    'images/img.php',
			timThumbParams:  'f=2'
			//http://www.binarymoon.co.uk/2012/02/complete-timthumb-parameters-guide/
		};
		var options = $.extend({}, defaults, options);

		// Create Images
		if (options.timThumb) {
			this.each(function() {
				var strOrig = $(this).prop('src');
				var strNew  = options.timThumbPath + 
					'?src=' + strOrig + 
					'&w=' + $(this).prop('width') + 
					'&h=' + $(this).prop('height') + 
					'&' + options.timThumbParams;

				if (options.timThumbInverse) {
					$(this)
						.prop('src', strOrig)
						.attr('data-hovr', strNew);
				}
				else {
					$(this)
						.prop('src', strNew)
						.attr('data-hovr', strOrig);
				}
			});
		}

		// Create Rollovers
		return this.each(function() {
			$(this).hover(
				function() {
					$(this).stop().animate(options.animateOver, options.speed);
				},
				function() {
					$(this).stop().animate(options.animateOut, options.speed);
				}
			).each(function() {
				var intWidth  = ($(this).attr('width'))  ? $(this).attr('width')  : $(this).prop('width');
				var intHeight = ($(this).attr('height')) ? $(this).attr('height') : $(this).prop('height');
				var strAlign  = ($(this).attr('align'))  ? $(this).attr('align')  : '';
				var strClass  = ($(this).attr('class'))  ? $(this).attr('class')  : '';
				var strStyle  = ($(this).attr('style'))  ? $(this).attr('style')  : '';

				$(this).wrap('<div class="' + strClass + '" style="position:relative; display:inline-block; ' + 
					'width:' + intWidth + 'px; height:' + intHeight + 'px; ' + 
					'float:' + strAlign + '; ' + strStyle + '"></div>');

				$(this).before($(this).clone(true))
					.attr('style', 'position:absolute; left:auto; top:auto;')
					.prop('src', $(this).attr('data-hovr'))
					.removeAttr('data-hovr')
					.removeAttr('class');

				$(this).prev('img')
					.attr('style', 'position:absolute; left:auto; top:auto; z-index:10;')
					.removeAttr('data-hovr')
					.removeAttr('class');
			});
		});

	};
})(jQuery);
