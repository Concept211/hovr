hovr
====

jQuery Plugin for simple image hover/rollover effects (+ TimThumb integration)


Usage
-----
<script type="text/javascript" src="scripts/jquery.hovr.js"></script>
<script type="text/javascript">
/* jQuery */
$(window).load(function(){

  /* Hovr */
	//<img src="images/A.jpg" data-hovr="images/B.jpg" width="16" height="16" border="0" />
	$('img[data-hovr]').hovr();

	/* Hovr */
	//<img src="images/A.jpg" class="hovr" />
	$('img.hovr').hovr({
		timThumb: true
		//timThumbParams: 'f=2|4,-10|5,50,20,0,0' //Sepia
		//timThumbParams: 'f=8' //Blur
		//timThumbParams: 'f=8|8|8' //Blur (x3)
	});

});
</script>
