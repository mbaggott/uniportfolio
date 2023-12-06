window.onload = function() {
	
	/* Centre preview */
	var windowWidth = window.innerWidth;
	var column1Width = document.getElementById("column1").clientWidth;
	var preview = document.getElementById("preview");
	var previewWidth = preview.clientWidth;
	preview.style.marginLeft = (windowWidth - column1Width - previewWidth) / 2 + "px";
	
	/* Centre preview horizontally */
	var column1Height = document.getElementById("column1").clientHeight;
	column1Height += 40; // 2 * 20px margins topd and bottom
	var preview = document.getElementById("preview");
	var previewHeight = preview.clientHeight;
	preview.style.marginTop = (column1Height - previewHeight) / 2 + "px";
	
}