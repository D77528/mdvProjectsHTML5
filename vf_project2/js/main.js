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
	submit = document.getElementById("button")


//var getValue = function (){
//	console.log(formObjects.rangeContactFeelings.value);
	
//};

//formObjects.rangeContactFeelings.addEventListener("blur", getValue);//change for range
var getValue = function(){
	localStorage.setItem("First Name", fieldObjects.firstName.value);
	localStorage.setItem("Last Name", fieldObjects.lastName.value);
	localStorage.setItem("Email Address", fieldObjects.email.value);
	localStorage.setItem("Phone Number", fieldObjects.phone.value);
	localStorage.setItem("Date Entered", fieldObjects.dateEnterDate.value);
	};
	
//}
fieldObjects.firstName.addEventListener("blur", getValue);
fieldObjects.lastName.addEventListener("blur", getValue);
fieldObjects.email.addEventListener("blur", getValue);
fieldObjects.phone.addEventListener("blur", getValue);
fieldObjects.dateEnterDate.addEventListener("blur", getValue);
//radioContactType.addEventListener("blur", getValue5);


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


