/* Javascript for the Everwarm Scenario, CIS100 Programming Concepts. Created by Michael Baggott, Louise Lynham, Assessment 2 - Group B -26 */
/* Accompanying HTML and CSS contained in Zip file: index.html, css/stylesheeet.css */

var gst = 10; /* GST declared globally as a percentage. May be modified by administrators */
var dailySummary = new Array (); /* Array to hold daily summary values, declared globally for use by various functions */

/* Set all values of the daily summary array to 0 */
for (var i=0; i<6; i++) {
		dailySummary[i] = 0;
}

/* Function run when first form is processed, includes a validate function */
function processForm() {
	if (validateForm()==true) {
		confirmForm();
	}
}

/* Creates the daily summary form */
function createSummary () {
	displaySummary();
	createCloseButton();
}

/* Clears both the confirm form and the order form when cancel is pressed */
function clearForms() {
	clearConfirmForm();
	clearOrderForm();
}

/* Exits the program after clearing the confirm form if it has data, and displaying a daily summary */
function exitProgram() {
	clearConfirmForm();
	displaySummary();
	createExitButton();
}

/* Function which validates the form data, called when first form is processed */
function validateForm() {

	var error="";
	var numelements=document.forms["order_form"].elements.length-1;
	for (var element1=0; element1 < numelements; element1++) {
		var elementvalue1=document.forms["order_form"].elements[element1].value;
		
		/* Runs the rim function to trim leading and trailing white spaces */
		elementvalue1=elementvalue1.trim();
		
		if (elementvalue1==null || elementvalue1=="") {
			switch (element1) {
				case 0:
					error += "First Name must be filled out" + "\n";
					break;
				case 1:
					error += "Phone Number must be filled out" + "\n";
					break;
				case 2:
					error += "Delivery Address must be filled out" + "\n";
					break;
				case 3:
					error += "# Bags Sold must be filled out" + "\n";
					break;
				case 4:
					error += "Delivery Distance must be filled out" + "\n";
					break;
				default:
					break;
			}
		}
	}
	for (var element2=0; element2 < numelements; element2++) {
		var elementvalue2=document.forms["order_form"].elements[element2].value;
		
		/* Runs the rim function to trim leading and trailing white spaces */
		elementvalue2=elementvalue2.trim();

		if (isNaN(elementvalue2)==true || elementvalue2<0 || elementvalue2%1 !== 0) {
			switch (element2) {
				case 3:
					if (isNaN(elementvalue2)==true || elementvalue2%1 !== 0) {
						error += "# Bags Sold must be a whole number" + "\n";
						}
					else {
						error += "# Bags Sold must be a positive number" + "\n";
					}
					break;
				default:
					break;
			}
		}
	}
	
	/* returns true to the order form onclick event if there is no error, to confirm validation has been successful */
	if (error !=="") {
	window.alert(error);
	return false;
	}
	return true;
}

/* Adds the trim() function which removes leading and trailing white spaces from values in the input fields of the order form */
String.prototype.trim = function () {
    return this.replace(/^\s*/, "").replace(/\s*$/, "");
}

/* Creates the Confirm Form, using loops to fill out legends and values */
function confirmForm() {
	var elements = document.getElementsByClassName("formfield1");
	for (var elementnum=0; elementnum<elements.length-1; elementnum++) {
		switch(elementnum) {
			case 0:
				elements[elementnum].innerHTML="CONFIRM ORDER";
				break;
			case 1:	
				elements[elementnum].innerHTML="NAME:";
				break;
			case 2:
				elements[elementnum].innerHTML="PHONE NUMBER:";
				break;
			case 3:
				elements[elementnum].innerHTML="DELIVERY ADDRESS:";
				break;
			case 4:
				elements[elementnum].innerHTML="# BAGS SOLD:";
				break;
			case 5:
				elements[elementnum].innerHTML="DELIVERY DISTANCE (km):";
				break;
			default:
				break;
		}
	}
	var elements2 = document.getElementsByClassName("formfield2");
	for (var elementnum2=0; elementnum2<elements2.length-2; elementnum2++) {
		switch(elementnum2) {
			case 0:
				elements2[elementnum2].innerHTML=document.getElementById("name").value;
				break;
			case 1:	
				elements2[elementnum2].innerHTML=document.getElementById("phone").value;
				break;
			case 2:
				elements2[elementnum2].innerHTML=document.getElementById("delivery").value;
				break;
			case 3:
				elements2[elementnum2].innerHTML=document.getElementById("bags").value;
				break;
			case 4:
				var distance = document.getElementById("distance").value;
				if (distance%1 !== 0) {
					distance=parseFloat(distance).toFixed(2);
				}
				elements2[elementnum2].innerHTML=distance;
				break;
			case 5:
				break;
			default:
				break;
		}
	}
	createConfirmButton();
	createCancelButton();
	disableSubmitButton("yes");
	disableSummaryButton("yes");
}

/* Creates the Cancel Button for the Confirm Form */
function createCancelButton() {
	var tempbutton = document.createElement("button");
	var tempbutton_anchor = document.getElementById("tempbutton1div");
	tempbutton_anchor.appendChild(tempbutton);
	tempbutton.setAttribute("type", "button");
	tempbutton.setAttribute("class", "cancelbutton");
	tempbutton.setAttribute("onclick", "clearForms()");
}

/* Creates the Confirm button for the Confirm Form*/
function createConfirmButton() {
	var tempbutton = document.createElement("button");
	var tempbutton_anchor = document.getElementById("tempbutton2div");
	tempbutton_anchor.appendChild(tempbutton);
	tempbutton.setAttribute("type", "button");
	tempbutton.setAttribute("class", "processbutton");
	tempbutton.setAttribute("onclick", "processOrder()");
}

/* Creates the Close Button for the Daily Summary */
function createCloseButton() {
	var tempbutton = document.createElement("button");
	var tempbutton_anchor = document.getElementById("tempbutton2div");
	tempbutton_anchor.appendChild(tempbutton);
	tempbutton.setAttribute("type", "button");
	tempbutton.setAttribute("class", "closebutton");
	tempbutton.setAttribute("onclick", "clearConfirmForm()");
}

/* Creates the dynamic Exit Button for exiting the software after Exit is clicked */
function createExitButton() {
	var tempbutton = document.createElement("button");
	var tempbutton_anchor = document.getElementById("tempbutton2div");
	tempbutton_anchor.appendChild(tempbutton);
	tempbutton.setAttribute("type", "button");
	tempbutton.setAttribute("class", "exitbutton");
	tempbutton.setAttribute("onclick", "closeWindow()");
	
	/* Disables the original exit button */
	disableExitButton("yes");
}

/* Updates the Daily Totals array after confirm is clicked on the Confirm Form */
function processOrder() {
	outputOrder();
	dailySummary[0]++;
	dailySummary[1] = parseInt(dailySummary[1]) + parseInt(document.getElementById("bags").value);
	var distance=document.getElementById("distance").value
	if (isNaN(distance)==false && distance >= 0) {
		dailySummary[2] = parseFloat(dailySummary[2]) + parseFloat(document.getElementById("distance").value);
	}
	else {
		distance=0;
		dailySummary[2] = parseFloat(dailySummary[2]) + parseFloat(distance);
	}
	dailySummary[3] = parseFloat(dailySummary[3]) + parseFloat(deliveryCost());
	dailySummary[4] = parseFloat(dailySummary[4]) + parseFloat(calcGst());
	dailySummary[5] = parseFloat(dailySummary[5]) + parseFloat(totalValue());
	clearForms();
}

/* Outputs the current order and calculated values to the user after confirm is clicked on the Confirm Form */
function outputOrder() {
	var name = document.getElementById("name").value
	var phone = document.getElementById("phone").value
	var delivery = document.getElementById("delivery").value
	var bags = document.getElementById("bags").value
	var distance = document.getElementById("distance").value
	if (distance%1 !== 0) {
		distance=parseFloat(distance).toFixed(2);
	}
	window.alert("*** ORDER DETAILS ***" + "\n" + "\n" 
	+ "NAME: " + name + "\n" 
	+ "PHONE: " + phone + "\n" 
	+ "DELIVERY ADDRESS: " + delivery + "\n" 
	+ "# BAGS SOLD: " + bags + "\n" 
	+ "DELIVERY DISTANCE (km): " + distance + "\n" 
	+ "TOTAL BAG COST: $" + bagTotal() + "\n" 
	+ "DELIVERY COST: $" + deliveryCost() + "\n" 
	+ "GST: $" + calcGst() + "\n" 
	+ "TOTAL ORDER VALUE: $" + totalValue());
}

/* Calculates the cost of n number of bags on the current order, taking into account the bulk order discount */
function bagTotal() {
	var bagcost=8.8;
	var discount=0;
	var bags=document.getElementById("bags").value;
	if (bags<=50)
		discount=1;
	else if (bags > 50 && bags <100)
		discount=.96;
	else
		discount=.93;
	var bagtotal=parseFloat((bagcost * bags) * discount);
	return bagtotal.toFixed(2);
}

/* Calculates the delivery cost of the current order taking into account the distance from the depot */
function deliveryCost() {
	var distance=document.getElementById("distance").value;
	var delcost;
	if (distance <= 20)
		delcost=20;
	else
		delcost=30;
	return delcost.toFixed(2);
}

/* Calculates the GST value of the current order, taking into account the global GST variable is a percentage */
function calcGst() {
	var totalgst=parseFloat((parseFloat(bagTotal()) + parseFloat(deliveryCost())) * (parseFloat(gst)/100));
	return totalgst.toFixed(2);
}

/* Calculates the total value of the current order inc. delivery and GST */
function totalValue () {
	var total=parseFloat(parseFloat(bagTotal()) + parseFloat(deliveryCost()) + parseFloat(calcGst()))
	return total.toFixed(2);
}

/* Uses 2 loops to clear the temporary confirm order form or the temporary daily summary form depending upon what form is being displayed */
function clearConfirmForm() {
	var elements = document.getElementsByClassName("formfield1");
	for (var elementnum=0; elementnum<elements.length; elementnum++) {
		switch(elementnum) {
			case elementnum:
				elements[elementnum].innerHTML="";
				break;
			default:
				break;
		}
	}
	var elements2 = document.getElementsByClassName("formfield2");
	for (elementnum2=0; elementnum2<elements2.length; elementnum2++) {
		switch(elementnum2) {
			case elementnum2:
				elements2[elementnum2].innerHTML="";
				break;
			default:
				break;
		}
	}
	disableSubmitButton("no");
	disableSummaryButton("no");
}

/* Clears the original data entry form after an order is processed or cancelled so new data can be entered */
function clearOrderForm() {
	var name = document.getElementById("name");
	var phone = document.getElementById("phone");
	var delivery = document.getElementById("delivery");
	var bags = document.getElementById("bags");
	var distance = document.getElementById("distance");
	name.value="";
	phone.value="";
	delivery.value="";
	bags.value="";
	distance.value="";
}

/* Displays the Daily Summary when it is requested or the software is exited, using loops to show the legends and values */
function displaySummary() {
	var elements = document.getElementsByClassName("formfield1");
	for (var elementnum=0; elementnum<elements.length; elementnum++) {
		switch(elementnum) {
			case 0:
				elements[elementnum].innerHTML="DAILY SUMMARY TOTALS:";
				break;
			case 1:	
				elements[elementnum].innerHTML="TOTAL ORDERS:";
				break;
			case 2:
				elements[elementnum].innerHTML="TOTAL BAGS:";
				break;
			case 3:
				elements[elementnum].innerHTML="TOTAL DELIVERY DISTANCE(km):";
				break;
			case 4:
				elements[elementnum].innerHTML="TOTAL DELIVERY COST:";
				break;
			case 5:
				elements[elementnum].innerHTML="TOTAL GST:";
				break;
			case 6:
				elements[elementnum].innerHTML="TOTAL ORDER VALUE (inc GST):";
				break;
			default:
				break;
		}
	}
	var elements2 = document.getElementsByClassName("formfield2");
	for (var elementnum2=0; elementnum2<elements2.length-2; elementnum2++) {
		switch(elementnum2) {
			case 0:
				elements2[elementnum2].innerHTML=dailySummary[0];
				break;
			case 1:	
				elements2[elementnum2].innerHTML=dailySummary[1];
				break;
			case 2:
				distance = dailySummary[2];
				if (distance%1 !== 0) {
					distance=parseFloat(distance).toFixed(2);
				}
				elements2[elementnum2].innerHTML=distance;
				break;
			case 3:
				elements2[elementnum2].innerHTML= "$" + dailySummary[3].toFixed(2);
				break;
			case 4:
				elements2[elementnum2].innerHTML= "$" + dailySummary[4].toFixed(2);
				break;
			case 5:
				elements2[elementnum2].innerHTML= "$" + dailySummary[5].toFixed(2);
				break;
			default:
				break;
		}
	}
	disableSubmitButton("yes");
	disableSummaryButton("yes");
}

/* Attempts to close the browser window depending on the type of browser and if this is allowed in that browser */
function closeWindow () {
	var appname = window.navigator.appName;
	var firefox = /Firefox/i.test(navigator.userAgent);

	if (firefox) {
		window.alert("Close the browser window to exit");
	}
	else if (appname=="Explorer") {
		window.close();
	}
	else {
		self.close();
	}
}

/* The following three functions are used to disable(yes) or enable(no) various buttons */
function disableSubmitButton (yesorno) {
	var subbut = document.getElementById("submitbutton");
	if (yesorno == "yes") {
		subbut.disabled=true;
		subbut.setAttribute("class", "submitbuttonopaque");
	}
	if (yesorno == "no") {
		subbut.disabled=false;
		subbut.setAttribute("class", "submitbutton");
	}
}

function disableSummaryButton (yesorno) {
	var sumbut = document.getElementById("summarybutton");
	if (yesorno == "yes") {
		sumbut.disabled=true;
		sumbut.setAttribute("class", "summarybuttonopaque");
	}
	if (yesorno == "no") {
		sumbut.disabled=false;
		sumbut.setAttribute("class", "summarybutton");
	}
}

function disableExitButton (yesorno) {
	var exbut = document.getElementById("exitbutton");
	if (yesorno == "yes") {
		exbut.disabled=true;
		exbut.setAttribute("class", "exitbuttonopaque");
	}
	if (yesorno == "no") {
		exbut.disabled=false;
		exbut.setAttribute("class", "exitbutton");
	}
}

/* Resets all the disabled buttons if the page is reloaded, otherwise browser window must be closed and re-opened, and can be annoying when testing or using */
/* Displays message on refresh or begin that all daily values have been reset */
window.onload = function() {
	disableSubmitButton("no");
	disableSummaryButton("no");
	disableExitButton("no");
}