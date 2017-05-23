$(document).ready(function(){
$('.tabs > div').click(function(){
	$('.tabs > div, .expanded > div').removeClass('open');
	var tab = '.expanded > .' + $(this).attr('Class');
	$(this).addClass('open');
	$(tab).addClass('open');
})
})