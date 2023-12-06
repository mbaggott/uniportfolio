/* Hide all the biographies on window load, to be displayed individually later */
window.onload = function() {
	$('.biography').hide();
	
	/* Centre cast and crew heading */
	var windowWidth = window.innerWidth;
	var column1Width = document.getElementById("column1").clientWidth;
	var heading = document.getElementById("castHeading");
	var headingWidth = heading.clientWidth;
	heading.style.marginLeft = (windowWidth - column1Width - headingWidth) / 2 + "px";
	
	/* Centre cast and crew table */
	var windowWidth = window.innerWidth;
	var column1Width = document.getElementById("column1").clientWidth;
	var cast = document.getElementById("castTable");
	var castWidth = cast.clientWidth;
	cast.style.marginLeft = (windowWidth - column1Width - castWidth) / 2 + "px";
}

/* display biography depending on which cast member is clicked */
function displayBio (cast) {
	switch (cast) {
		case "ianmckellen":
			$('.biography').hide();
			$('#ianmckellen').fadeIn(2500);
			break;
		case "martinfreeman":
			$('.biography').hide();
			$('#martinfreeman').fadeIn(2500);
			break;
		case "richardarmitage":
			$('.biography').hide();
			$('#richardarmitage').fadeIn(2500);
			break;
		case "benedictcumberbatch":
			$('.biography').hide();
			$('#benedictcumberbatch').fadeIn(2500);
			break;
		case "orlandobloom":
			$('.biography').hide();
			$('#orlandobloom').fadeIn(2500);
			break;
		case "evangelinelilly":
			$('.biography').hide();
			$('#evangelinelilly').fadeIn(2500);
			break;
		case "leepace":
			$('.biography').hide();
			$('#leepace').fadeIn(2500);
			break;
		case "lukeevans":
			$('.biography').hide();
			$('#lukeevans').fadeIn(2500);
			break;
		case "stephenfry":
			$('.biography').hide();
			$('#stephenfry').fadeIn(2500);
			break;
		case "peterjackson":
			$('.biography').hide();
			$('#peterjackson').fadeIn(2500);
			break;
		case "franwalsh":
			$('.biography').hide();
			$('#franwalsh').fadeIn(2500);
			break;
		case "phillipaboyens":
			$('.biography').hide();
			$('#phillipaboyens').fadeIn(2500);
			break;
		default:
			break;	
	}
}