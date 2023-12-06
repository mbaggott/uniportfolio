window.onload = function() {

	/* Centre shopping heading */
	var shoppingWidth = document.getElementById("shoppingContainer").clientWidth;
	var heading = document.getElementById("shoppingHeading");
	var headingWidth = heading.clientWidth;
	heading.style.marginLeft = (shoppingWidth - headingWidth) / 2 + "px";
	
	/* Centre shopping container */
	var windowWidth = window.innerWidth;
	var column1Width = document.getElementById("column1").clientWidth;
	var shopping = document.getElementById("shoppingContainer");
	var shoppingWidth = shopping.clientWidth;
	shopping.style.marginLeft = (windowWidth - column1Width - shoppingWidth) / 2 + "px";
}