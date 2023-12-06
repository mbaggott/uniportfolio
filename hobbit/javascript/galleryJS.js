/* set the width of the gallery on document load */
window.onload = function() {

	setGalleryWidth();
	
	/* Centre gallery heading */
	var windowWidth = window.innerWidth;
	var column1Width = document.getElementById("column1").clientWidth;
	var heading = document.getElementById("galleryHeading");
	var headingWidth = heading.clientWidth;
	heading.style.marginLeft = (windowWidth - column1Width - headingWidth) / 2 + "px";
}

/* Sets the width of the gallery based on the width of the browser window */
function setGalleryWidth() {
	var windowWidth = $('body').width();
	var column1Width = document.getElementById("column1").clientWidth;
	var gallery = document.getElementById("galleryContainer");
	gallery.style.width = windowWidth - column1Width - 50 + "px";
}

/* Opens a gallery picture and displays it in column2 without reloading the page */
function openPicture(pic) {
	var element = document.getElementById("galleryContainer");
	var column = document.getElementById("column2");
	var heading = document.getElementById("galleryHeading");
	var image = document.createElement("img");
	column2.removeChild(element);
	column2.removeChild(heading);
	column2.appendChild(image);
	var src;
	var alt;
	var origWidth;
	var origHeight;
	
	/* set the image source, alt, original width and original height depending on function argument */
	switch(pic) {
		case 'pic1':
			src = "images/photos/bilbo.jpg";
			alt = "Bilbo Image";
			origWidth = 1920;
			origHeight = 1280;
			break;
		case 'pic2':
			src = "images/photos/gandalf.jpg";
			alt = "Gandalf Image";
			origWidth = 1918;
			origHeight = 794;
			break;
		case 'pic3':
			src = "images/photos/legolas.jpg";
			alt = "Legolas Image";
			origWidth = 1920;
			origHeight = 1101;
			break;
		case 'pic4':
			src = "images/photos/butterflies.jpg";
			alt = "Butterflies Image";
			origWidth = 1918;
			origHeight = 794;
			break;
		case 'pic5':
			src = "images/photos/human.jpg";
			alt = "Human Image";
			origWidth = 1918;
			origHeight = 794;
			break;
		case 'pic6':
			src = "images/photos/elf.jpg";
			alt = "Elf Image";
			origWidth = 1920;
			origHeight = 1280;
			break;
		case 'pic7':
			src = "images/photos/bilbo2.jpg";
			alt = "Bilbo 2 Image";
			origWidth = 1920;
			origHeight = 1265;
			break;
		case 'pic8':
			src = "images/photos/elfbow.jpg";
			alt = "Elf Bow Image";
			origWidth = 1918;
			origHeight = 794;
			break;
		case 'pic9':
			src = "images/photos/barrels.jpg";
			alt = "Barrels Image";
			origWidth = 1920;
			origHeight = 1280;
			break;
		case 'pic10':
			src = "images/photos/legolas2.jpg";
			alt = "Legolas 2 Image";
			origWidth = 1920;
			origHeight = 1280;
			break;
		case 'pic11':
			src = "images/photos/elf2.jpg";
			alt = "Elf 2 Image";
			origWidth = 1918;
			origHeight = 794;
			break;
			
		default:
			break;
	}
	
	image.src = src;
	image.alt = alt;
	image.id = "image";
		
	/* set the image width and height based on the orignal image size, and the window size */
	var windowWidth = window.innerWidth;
	var column1Width = document.getElementById("column1").clientWidth;
	var imageRatio = origWidth/origHeight;
	var width = windowWidth - column1Width - 50;
	var height = width/imageRatio;
	image.width = width;
	image.height = height;
		
	/* create the close picture button */
	var close = document.createElement("div");
	column2.appendChild(close);
	close.id = "closePicture";
	close.style.top = - height + 20 + "px";
	close.style.right = - 20 + "px";
	close.innerHTML = "Close";
	close.onclick = function() { closePicture(); };
	
	/* Centre image horizontally in column2 if it is shorter than the menu bar */
	var column1Height = document.getElementById("column1").clientHeight + 40; // 40 is the 2 menu bar margins of 20 each
	if (column1Height > height) {
		var diff = column1Height - height;
		image.style.marginTop = diff/2 + "px";
	}
	
}

/* Close picture loads the original gallery page */
function closePicture() {
	window.location.href = "gallery.html"
}