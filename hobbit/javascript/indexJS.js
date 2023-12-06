window.onload = function() {
	
	setImageWidth();
	
	/*Creates the fade-in fade-out effect for the synopsis and associated buttons */
	$('p.synopsis').hide();
	$('<a id="reveal">Synopsis</a> ').insertBefore('.spoiler');
	$('<a id="hide">Close</a> ').insertBefore('.spoiler');
	$('#hide').hide();
	$('#reveal').click(function(){
		$('#synopsis').fadeIn(2500);
		$('#reveal').hide();
		$('#hide').fadeIn(2500);
	});
	$("#hide").click(function(){
		$('#synopsis').fadeOut(600);
		$('#reveal').fadeIn(2500);
		$('#hide').hide();
	});
	
}

/* Sets the size of the content column 2 background image ,depending on the windows size, with a minimum width. */
function setImageWidth() {
	var docWidth = $('body').width();
	var column1Width = document.getElementById("column1").clientWidth;
	var image = document.getElementById("frontPageImage");
	var imageRatio = 1918/794;
	var width = docWidth - column1Width - 50;
	var height = width/imageRatio;
	image.width = width;
	image.height = height;
}