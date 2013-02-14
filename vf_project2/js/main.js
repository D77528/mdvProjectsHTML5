
var fieldObjects = {
	"firstName" : document.getElementById("firstn"),
	"lastName" : document.getElementById("lastn"),
	"email" : document.getElementById("email"),
	"phone" : document.getElementById("phone"),
	"fieldOverview" : document.getElementById("comments"),
	"dateEnterDate" : document.getElementById("date"),
	"radioContactType" : document.getElementsByName("contactType"),
	"rangeContactFeelings" : document.getElementById("contactFeelings"),
	"listSupportType" : document.getElementById ("supportType"),
	"checkboxAwaiting" : document.getElementById("awaitingResponse")
	};
var submit = document.getElementById("button");
console.log(fieldObjects.length);
var showData = function(){
	for(i=0, j=fieldObjects.length; i<j; i++){
		console.log(fieldObjects[i]);
	}
	
}

var getValueFieldObjects = function(){
	localStorage.setItem("First Name", fieldObjects.firstName.value);
	localStorage.setItem("Last Name", fieldObjects.lastName.value);
	localStorage.setItem("Email Address", fieldObjects.email.value);
	localStorage.setItem("Phone Number", fieldObjects.phone.value);
	localStorage.setItem("Date Entered", fieldObjects.dateEnterDate.value);
	localStorage.setItem("End User", fieldObjects.radioContactType[0].checked);
	localStorage.setItem("Dealer", fieldObjects.radioContactType[1].checked);
	localStorage.setItem("Contact Feelings Happy: 0 ~ Upset: 100", fieldObjects.rangeContactFeelings.value);
	localStorage.setItem("Support Type", fieldObjects.listSupportType.value);
	localStorage.setItem("Waiting for Response", fieldObjects.checkboxAwaiting.checked);
	localStorage.setItem("Support Overview", fieldObjects.fieldOverview.value);
	
	};


/*
fieldObjects.firstName.addEventListener("blur", getValueFieldObjects);
fieldObjects.lastName.addEventListener("blur", getValueFieldObjects);
fieldObjects.email.addEventListener("blur", getValueFieldObjects);
fieldObjects.phone.addEventListener("blur", getValueFieldObjects);
fieldObjects.dateEnterDate.addEventListener("blur", getValueFieldObjects);
fieldObjects.radioContactType[0].addEventListener("click", getValueFieldObjects);
fieldObjects.radioContactType[1].addEventListener("click", getValueFieldObjects);
fieldObjects.rangeContactFeelings.addEventListener("change", getValueFieldObjects);
fieldObjects.listSupportType.addEventListener("blur", getValueFieldObjects);
fieldObjects.checkboxAwaiting.addEventListener("click", getValueFieldObjects);
fieldObjects.fieldOverview.addEventListener("blur", getValueFieldObjects);
*/
submit.addEventListener("click", showData);




