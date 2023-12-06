window.onload = function() {
	jQuery.noConflict();
	var image = document.getElementById("ring");
	var windowWidth = window.innerWidth;
	var column1Width = document.getElementById("column1").clientWidth;
	var imageRatio = 2240/1939;	
	var width = windowWidth - column1Width - 50;
	var height = width/imageRatio;
	image.width = width/2;
	image.height = height/2;
	
	/* Centre image */
	var windowWidth = window.innerWidth;
	var column1Width = document.getElementById("column1").clientWidth;
	var image = document.getElementById("ring");
	var imageWidth = image.clientWidth;
	image.style.marginLeft = (windowWidth - column1Width - imageWidth) / 2 + "px";
	
	jQuery('<a id="reveal" onclick = "growEffect()">Click Me</a> ').insertBefore('#anchor');
} 

function growEffect(){
	var image = document.getElementById("ring");
	new Effect.Grow(ring, {duration:10});
}