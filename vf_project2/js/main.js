
var firstName = {
	"connect" : document.getElementById("firstn")
	},
	lastName = {
	"connect" : document.getElementById("lastn")
	},
	email = {
	"connect" : document.getElementById("email")
	},
	phone = {
	"connect" : document.getElementById("phone")
	},
	fieldOverview = {
	"connect" : document.getElementById("comments")
	},
	dateEnterDate = {
	"connect" : document.getElementById("date")
	},
	radioContactEndUser = {
	"connect" : document.getElementsByName("contactType")[0]
	},
	radioContactDealer = {
	"connect" : document.getElementsByName("contactType")[1]
	},
	rangeContactFeelings = {
	"connect" : document.getElementById("contactFeelings")
	},
	listSupportType = {
	"connect" : document.getElementById ("supportType")
	},
	checkboxAwaiting = {
	"connect" : document.getElementById("awaitingResponse")
	};
var submit = document.getElementById("button");
var results = document.getElementById("results");

var	allFieldObjects = [firstName, lastName, email, phone, fieldOverview, dateEnterDate, radioContactEndUser, radioContactDealer, rangeContactFeelings, listSupportType, checkboxAwaiting];
	

var showData = function(){
	var displayTag = document.createElement("ol");
	
	for(i=0, j=allFieldObjects.length; i<j; i++){
		var listResults = document.createElement("il");
			displayTag.appendChild(listResults);
			listResults.innerHTML = firstName.connect.value + lastName.connect.value
	}

results.appendChild(displayTag);
}
/*
var getValueFieldObjects = function(){
	localStorage.setItem("First Name", firstName.connect.value);
	localStorage.setItem("Last Name", lastName.connect.value);
	localStorage.setItem("Email Address", email.connect.value);
	localStorage.setItem("Phone Number", phone.connect.value);
	localStorage.setItem("Date Entered", dateEnterDate.connect.value);
	localStorage.setItem("End User", radioContactEndUser.connect.checked);
	localStorage.setItem("Dealer", radioContactDealer.connect.checked);
	localStorage.setItem("Contact Feelings Happy: 0 ~ Upset: 100", rangeContactFeelings.connect.value);
	localStorage.setItem("Support Type", listSupportType.connect.value);
	localStorage.setItem("Waiting for Response", checkboxAwaiting.connect.checked);
	localStorage.setItem("Support Overview", fieldOverview.connect.value);
}

firstName.connect.addEventListener("blur", getValueFieldObjects);
lastName.connect.addEventListener("blur", getValueFieldObjects);
email.connect.addEventListener("blur", getValueFieldObjects);
phone.connect.addEventListener("blur", getValueFieldObjects);
dateEnterDate.connect.addEventListener("blur", getValueFieldObjects);
radioContactEndUser.connect.addEventListener("click", getValueFieldObjects);
radioContactDealer.connect.addEventListener("click", getValueFieldObjects);
rangeContactFeelings.connect.addEventListener("change", getValueFieldObjects);
listSupportType.connect.addEventListener("blur", getValueFieldObjects);
checkboxAwaiting.connect.addEventListener("click", getValueFieldObjects);
fieldOverview.connect.addEventListener("blur", getValueFieldObjects);
*/
submit.addEventListener("click", showData);




