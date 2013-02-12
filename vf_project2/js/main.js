var fieldObjects = {
	"firstName" : document.getElementById("firstn"),
	"lastName" : document.getElementById("lastn"),
	"email" : document.getElementById("email"),
	"phone" : document.getElementById("phone"),
	"fieldOverview" : document.getElementById("comments"),
	"dateEnterDate" : document.getElementById("date")
	},
	radioContactType = document.getElementsByName("contactType"),
	rangeContactFeelings = document.getElementById("contactFeelings"),
	listSupportType = document.getElementById ("supportType"),
	checkboxAwaiting = document.getElementById("awaitingResponse"),
	submit = document.getElementById("button");


//var getValue = function (){
//	console.log(formObjects.rangeContactFeelings.value);
	
//};

//formObjects.rangeContactFeelings.addEventListener("blur", getValue);//change for range
var getValueFieldObjects = function(){
	localStorage.setItem("First Name", fieldObjects.firstName.value);
	localStorage.setItem("Last Name", fieldObjects.lastName.value);
	localStorage.setItem("Email Address", fieldObjects.email.value);
	localStorage.setItem("Phone Number", fieldObjects.phone.value);
	localStorage.setItem("Date Entered", fieldObjects.dateEnterDate.value);
	localStorage.setItem("End User", radioContactType[0].checked);
	localStorage.setItem("Dealer", radioContactType[1].checked);
	localStorage.setItem("Contact Feelings Happy: 0 ~ Upset: 100", rangeContactFeelings.value);
	localStorage.setItem("Support Type", listSupportType.value);
	localStorage.setItem("Waiting for Response", checkboxAwaiting);
	localStorage.setItem("Support Overview", fieldObjects.fieldOverview.value);
	
	};
	
console.log(checkboxAwaiting);
/*
var getValueRadio = function(){
	if (radioContactType[0].checked == false)
	{
		localStorage.setItem("End User", radioContactType[0].checked)
	}
		else (localStorage.setItem("Dealer", radioContactType[1].checked))
};
*/
/*
var getValueRadio = function(){
	localStorage.setItem("End User", radioContactType[0].checked);
	localStorage.setItem("Dealer", radioContactType[1].checked);
	
};
*/
fieldObjects.firstName.addEventListener("blur", getValueFieldObjects);
fieldObjects.lastName.addEventListener("blur", getValueFieldObjects);
fieldObjects.email.addEventListener("blur", getValueFieldObjects);
fieldObjects.phone.addEventListener("blur", getValueFieldObjects);
fieldObjects.dateEnterDate.addEventListener("blur", getValueFieldObjects);
radioContactType[0].addEventListener("click", getValueFieldObjects);
radioContactType[1].addEventListener("click", getValueFieldObjects);
rangeContactFeelings.addEventListener("change", getValueFieldObjects);
listSupportType.addEventListener("blur", getValueFieldObjects);
checkboxAwaiting.addEventListener("click", getValueFieldObjects);
fieldObjects.fieldOverview.addEventListener("blur", getValueFieldObjects);


//localStorage.setItem("key","value")

/*
//checkbox information needed to save in local storage
console.log(formObjects.checkboxAwaiting.checked);
if (formObjects.checkboxAwaiting.checked == true){
	//save it in local storage
}
*/

//Use to Create Elements within your HTML, like to create paragraphs <p></p>
//var myList = document.createElement("")


//changeField function
/*
var changeField = function (){
	firstName.setAttribute("class","hasFocus")
	
}
var defaultField = function (){
	firstName.var changeField = function (){
	firstName.setAttribute("class","hasFocus")
	
}
Attribute("class","hasFocus")
	
}


firstName.addEventListener("focus", changeField);
firstName.addEventListener("blur", defaultField);

console.log(listSupportType);
*/


