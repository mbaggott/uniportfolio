window.onload = function() {
	/* Reset form values for username/password */
	document.getElementById("username").value = "Choose a Username";
	document.getElementById("password").value = "Choose a Password";
	
	/* Centre form heading */
	var formWidth = document.getElementById("form").clientWidth;
	var headingWidth = document.getElementById("formheading").clientWidth;
	document.getElementById("formheading").style.marginLeft = (formWidth - headingWidth) / 2 + "px";
	
	/* Centre form */
	var windowWidth = window.innerWidth;
	var column1Width = document.getElementById("column1").clientWidth;
	var form = document.getElementById("registrationForm");
	var formWidth = form.clientWidth;
	form.style.marginLeft = (windowWidth - column1Width - formWidth) / 2 + "px";
	
}

/* Client side validation of form */
function processForm() {

	/* Retrieve all the values in the form */
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var dob = document.getElementById("dob").value;
	var email = document.getElementById("email").value;
	var address = document.getElementById("address").value;
	var membershipType = document.getElementById("membershipType").value;
	var membershipDuration = document.getElementById("membershipDuration").value;
	
	/* Force entry of first name */
	if (firstName == "") { 
		hideAllErrors();
		document.getElementById("firstNameError").style.display = "inline";
		document.getElementById("firstName").select();
		document.getElementById("firstName").focus();
		return false;
    }
	
	/* Force entry of last name */
	else if (lastName == "") {   
		hideAllErrors();
		document.getElementById("lastNameError"). style.display = "inline";
		document.getElementById("lastName").select();
		document.getElementById("lastName").focus();
		return false;
    }
	
	/* Force entry of username */
	else if (username == "" || username == "Choose a Username") {
		hideAllErrors();
		document.getElementById("usernameError"). style.display = "inline";
		document.getElementById("username").select();
		document.getElementById("username").focus();
		return false;
    }
	
	/* Force entry of password */
	else if (password == "" || password == "Choose a Password") {		
		hideAllErrors();
		document.getElementById("passwordError"). style.display = "inline";
		document.getElementById("password").select();
		document.getElementById("password").focus();
		return false;
    }
	
	/* Validate password */
	else if (validatePassword(password) == false) {		
			hideAllErrors();
			document.getElementById("passwordError2"). style.display = "inline";
			document.getElementById("password").select();
			document.getElementById("password").focus();
			return false
	}
    
	/* Force entry of email */
	else if (email == "") {
		hideAllErrors();
		document.getElementById("emailError"). style.display = "inline";
		document.getElementById("email").select();
		document.getElementById("email").focus();
		return false;
    }
	
	/* Validate email */
	else if (validateEmail(email) == false) {	
			hideAllErrors();
			document.getElementById("emailError2").style.display = "inline";
			document.getElementById("email").select();
			document.getElementById("email").focus();
			return false;
    }
	
	/* Force selection of membership type */
	else if (membershipType == "none") {
		hideAllErrors();
		document.getElementById("membershipTypeError").style.display = "inline";
		document.getElementById("membershipType").focus();
		return false;
    }
	
	/* Force selection of membership duration */
	else if (membershipDuration == "none") {
		hideAllErrors();
		document.getElementById("membershipDurationError"). style.display = "inline";
		document.getElementById("membershipDuration").focus();
		return false;
    }
	
	/* If all conditions are met, submit form */
	return true;
	
}

/* Hide all error fields when function called at beginnig of next error check */
function hideAllErrors() {  
	document.getElementById("firstNameError").style.display = "none";
	document.getElementById("lastNameError").style.display = "none";
	document.getElementById("usernameError").style.display = "none";
	document.getElementById("passwordError").style.display = "none";
	document.getElementById("passwordError2").style.display = "none";
	document.getElementById("emailError").style.display = "none";
	document.getElementById("emailError2").style.display = "none";  
	document.getElementById("membershipTypeError").style.display = "none"; 
	document.getElementById("membershipDurationError").style.display = "none";	
}

/* If form field for username/password is altered, set to a solid black color */
function setText(id) {
	var element = document.getElementById(id);
	element.style.color = 'black';
}

/* On selection of username/password field, clear existing text */ 
function clearValue(id) {
	var element = document.getElementById(id);
	element.value = "";
}

/* Regular expression validation for email, returns true or false */
function validateEmail(email) {
	var pattern = new RegExp(/^([^\s@]+@[^\s@]+\.[^\s@]+)$/);
	if(pattern.test(email)) {
		return true;
	}
	return false;
}

/* Password validation, returns true or false */
function validatePassword(password) {
	var x, count = 0;
	if (password.length < 8) {
		return false;
	}
	for (x = 0; x < password.length; x++) {
		if (password.charAt(x) >= 0 && password.charAt(x) <= 9) {
			count++; 
		}
	}
	if (count < 2) {
		alert("less than 2");
		return false;
	}
	return true;
}
	
	