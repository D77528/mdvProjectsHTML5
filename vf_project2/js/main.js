//Wait until the DOM is ready

window.addEventListener("DOMContentLoaded", function(){

	var supportTypeList = ["Call", "Email", "Online Chat", "Support Form"];//Suppot Type List
	var contactTypeValue;
	var responseBox = "No"
	
	
	function element(x){ // default function for getElementById
		var ElementGrabber = document.getElementById(x);
		return ElementGrabber;
	}
	
	
	
		//Dropdown supportTypeList
	
	function dynamicInsert() {
		var formTag = document.getElementsByTagName("form"), //formTag is an array because Element(s)
			selectListItem = element("select"),
			makeSelect = document.createElement("select");
			
			makeSelect.setAttribute("id", "supportType");
			
		for(var i=0, j=supportTypeList.length; i<j; i++){
			var makeOption = document.createElement("option")
			var	optText = supportTypeList[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectListItem.appendChild(makeSelect);
		
	}

	

	
	dynamicInsert()

	function endUserValue(){
		var contactRadios = document.forms[0].contactType;
		
		for(var i=0; i<contactRadios.length; i++){
			if(contactRadios[i].checked){
				contactTypeValue = contactRadios[i].value;
			}
		}
		
	}

	function getCheckValue(){
		if(element("awaitingResponse").checked){
			responseBox = element("awaitingResponse").value;
		}else{
			responseBox = "No response needed."
		}
		
	}


	function showData(){
		var id	= Math.floor(Math.random()*293842);
	
		//Gather up all our form field values and store in an object.
		//Object properties contain array with both form label and input values
		endUserValue();
		getCheckValue();
		var items = {
				list : ["Support Type: ", element("supportType").value],
				firstn : ["First Name: ", element("firstn").value],
				lastn : ["Last Name: ", element("lastn").value],
				email : ["Email Address: ", element("email").value],
				phone : ["Phone Number: ", element("phone").value],
				date : ["Date Entered: ", element("date").value],
				contactType : ["End User: ", endUserValue],
				contactFeelings : ["Contact Feelings Happy: 0 ~ Upset: 100: ", element("contactFeelings").value],
				supportType : ["Support Type: ", element("supportType").value],
				response : ["Waiting for Response: ", responseBox],
				comments : ["Support Overview: ", element("comments").value]
			}
			
			//Save Data to Local Storage, use Stringify to convert object to string.
			localStorage.setItem(id, JSON.stringify(items));
		
	}
	

	

	function getData(){//EDIT THIS IT IS EXACTLY AS IN TUTORAIL!!!!
			var makeDiv = document.createElement("div");
			makeDiv.setAttribute("id", "items");
			var makeList = document.createElement("ul");
			makeDiv.appendChild(makeList);//creates initial container to hold
			document.body.appendChild(makeDiv);
			for(var i=0, len=localStorage.length; i<len; i++){
				var makeli = document.createElement("li");
				makeList.appendChild(makeli);
				var key = localStorage.key(i);
				var value = localStorage.getItem(key);
				var obj = JSON.parse(value);//long string from local storage.  converting back to object	
				var makeSubList = document.createElement("ul");
				makeli.appendChild(makeSubList);
				for(var n in obj){
					var makeSubli = document.createElement("li");
					makeSubList.appendChild(makeSubli);
					var optSubText = obj[n][0] + obj[n][1];
					makeSubli.innerHTML = optSubText;
				}
			
		}	
	}//EDIT THIS IT IS EXACTLY AS IN TUTORAIL!!!!

	//Links: displayData, clearData & Submit Button
	
	var displayData = element("displayData");
	displayData.addEventListener("click", getData); //event listener

	var clearData = element("clearStoredData");
	//clearData.addEventListener("click", clearLocal); //event listener

	var submit = element("button");
	button.addEventListener("click", showData);
	














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

});

