Hovr
====

jQuery Plugin for simple image hover/rollover effects (+ TimThumb integration)


Usage
-----
Inline "data-hovr" Parameter
```
$('img[data-hovr]').hovr();
```
```
<img src="images/A.jpg" data-hovr="images/B.jpg" width="16" height="16" border="0" />
```

<br />
TimThumb Integration
```
$('img.hovr').hovr({
	timThumb: true,
	timThumbParams: 'f=2|4,-10|5,50,20,0,0' //Sepia
});
```
```
<img src="images/A.jpg" class="hovr" />
```

<br />
Complete Options
```
$('img.hovr').hovr({
	speed:           'normal',
	animateOver:     {'opacity': '0'},
	animateOut:      {'opacity': '1'},
	timThumb:        false,
	timThumbInverse: false,
	timThumbPath:    'images/img.php',
	timThumbParams:  'f=2'
	//http://www.binarymoon.co.uk/2012/02/complete-timthumb-parameters-guide/
});
```
