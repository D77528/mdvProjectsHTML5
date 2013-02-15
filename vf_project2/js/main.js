//Wait until the DOM is ready

window.addEventListener("DOMContentLoaded", function(){


	function element(x){ // default function for getElementById
		var ElementGrabber = document.getElementById(x);
		return ElementGrabber;
	}

	
	var supportTypeList = ["Call", "Email", "Online Chat", "Support Form"];//Suppot Type List

	//Set Link & Submit Click Events
	
	var displayData = element("displayData");
	displayData.addEventListener("click", getData); //event listener

	var clearData = element("clearStoredData");
	clearData.addEventListener("click", clearLocal); //event listener

	var submit = element("button");
	button.addEventListener("click", showData);







});




/*
var firstName = {
	"value" : document.getElementById("firstn"),
	"name" : "First Name: "
	},
	lastName = {
	"value" : document.getElementById("lastn"),
	"name" : "Last Name: "
	},
	email = {
	"value" : document.getElementById("email"),
	"name" : "Email Address: "
	},
	phone = {
	"value" : document.getElementById("phone"),
	"name" : "Phone Number: "
	},
	fieldOverview = {
	"value" : document.getElementById("comments"),
	"name" : "Support Overview: "
	},
	dateEnterDate = {
	"value" : document.getElementById("date"),
	"name" : "Date: "
	},
	rangeContactFeelings = {
	"value" : document.getElementById("contactFeelings"),
	"name" : "Contact Feelings: "
	},
	listSupportType = {
	"value" : document.getElementById ("supportType"),
	"name" : "Support Type: "
	},
	radioContact = {
	"value" : document.getElementsByName("contactType"),
	"name" : "EndUser or Dealer: "
	},
	checkboxAwaiting = {
	"value" : document.getElementById("awaitingResponse"),
	"name" : "Contact Waiting for Response: "
	};
var submit = document.getElementById("button");
var results = document.getElementById("results");

var	allFieldObjects = [firstName, lastName, email, phone, fieldOverview, dateEnterDate, rangeContactFeelings, listSupportType, radioContact, checkboxAwaiting];

console.log(radioContact.value);


var getValueFieldObjects = function(){
	localStorage.setItem("First Name", firstName.value.value);
	localStorage.setItem("Last Name", lastName.value.value);
	localStorage.setItem("Email Address", email.value.value);
	localStorage.setItem("Phone Number", phone.value.value);
	localStorage.setItem("Date Entered", dateEnterDate.value.value);
	localStorage.setItem("End User", radioContactEndUser.value.checked);
	localStorage.setItem("Dealer", radioContactDealer.value.checked);
	localStorage.setItem("Contact Feelings Happy: 0 ~ Upset: 100", rangeContactFeelings.value.value);
	localStorage.setItem("Support Type", listSupportType.value.value);
	localStorage.setItem("Waiting for Response", checkboxAwaiting.value.checked);
	localStorage.setItem("Support Overview", fieldOverview.value.value);
}




var showData = function(){
	var displayTag = document.createElement("ol");
	for(i=0, j=allFieldObjects.length; i<j; i++){
		var listResults = document.createElement("li");
			displayTag.appendChild(listResults);
			console.log(allFieldObjects[i]);
			listResults.innerHTML = allFieldObjects[i].name + allFieldObjects[i].value.value
	}

results.appendChild(displayTag);
submit.setAttribute("disabled", "disabled");
}


firstName.value.addEventListener("blur", getValueFieldObjects);
lastName.value.addEventListener("blur", getValueFieldObjects);
email.value.addEventListener("blur", getValueFieldObjects);
phone.value.addEventListener("blur", getValueFieldObjects);
dateEnterDate.value.addEventListener("blur", getValueFieldObjects);
radioContactEndUser.value.addEventListener("click", getValueFieldObjects);
radioContactDealer.value.addEventListener("click", getValueFieldObjects);
rangeContactFeelings.value.addEventListener("change", getValueFieldObjects);
listSupportType.value.addEventListener("blur", getValueFieldObjects);
checkboxAwaiting.value.addEventListener("click", getValueFieldObjects);
fieldOverview.value.addEventListener("blur", getValueFieldObjects);

submit.addEventListener("click", showData);


*/



