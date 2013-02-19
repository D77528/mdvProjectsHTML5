//Reyes, Timothy
//Virtual Frameworks 1302
//Project Web App Part 2
//GitHub: https://github.com/D77528/mdvProjectsHTML5/tree/gh-pages/vf_project2


window.addEventListener("DOMContentLoaded", function(){

//Global variables

	var supportTypeList = ["--> Choose Support Type", "Call", "Email", "Online Chat", "Support Form"];
	var responseBox = "No";
	var endUserValue;
	var makeSelect;
	var errorM = element("anyErrors")
	
	function element(x){
		var ElementGrabber = document.getElementById(x);
		return ElementGrabber;
	};
	
	
//Dropdown List: supportType
	
	function dynamicInsert() {
		var formTag = document.getElementsByTagName("form"),
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
		
	};
	
	dynamicInsert()

//Radio Buttons for Contact Type

	function getEndUserValue(){
		var contactRadios = document.forms[0].contactType;
		for(var i=0; i<contactRadios.length; i++){
		
			if(contactRadios[i].checked){
				endUserValue = contactRadios[i].value;
			}
		}
		
	};

//Checkbox for Waiting for Response

	function getCheckValue(){
		if(element("awaitingResponse").checked){
			responseBox = element("awaitingResponse").value;
		}else{
			responseBox = "No response needed."
		}
		
	};
	

//ToggleContent for Display

	function toggleContent(v){
		switch(v){
			case "on":
				element("onlyForm").style.display = "none";
				element("clearStoredData").style.display = "inline";
				element("addNewItem").style.display = "inline";
				element("displayData").style.display = "none";
				element("h1").style.display = "block";
				element("h2").style.display = "block";
				element("h3").style.display = "block";
				break;
				
			case "off": //not looking at data
				element("onlyForm").style.display = "block";
				element("clearStoredData").style.display = "inline";
				element("displayData").style.display = "inline";
				element("addNewItem").style.display = "none"
				element("dataItems").style.display = "none";
				break;
			
				break;
			default:
				return false;
		
		}
	};
	

//Submit Button pressed

	function showData(){
		var id	= Math.floor(Math.random()*293842);
		
		getEndUserValue();
		getCheckValue();
		
		var dataItems = {
				list : ["Support Type: ", element("supportType").value],
				firstn : ["First Name: ", element("firstn").value],
				lastn : ["Last Name: ", element("lastn").value],
				email : ["Email Address: ", element("email").value],
				phone : ["Phone Number: ", element("phone").value],
				date : ["Date Entered: ", element("date").value],
				contactType : ["Contact Type: ", endUserValue],
				contactFeelings : ["Contact Feelings Happy: 0 ~ Upset: 100: ", element("contactFeelings").value],
				supportType : ["Support Type: ", element("supportType").value],
				response : ["Waiting for Response: ", responseBox],
				comments : ["Support Overview: ", element("comments").value]
			}
			alert ("Your Ticket has been submitted.")
			localStorage.setItem(id, JSON.stringify(dataItems));
		
	};
	

//Display Link is pressed	

	function displayD(){
		toggleContent("on");
			var HTMLDiv = document.createElement("div");
			HTMLDiv.setAttribute("id", "dataItems", "align");
			HTMLDiv.align ="left";
			var newList = document.createElement("ul");
			HTMLDiv.appendChild(newList);
			document.body.appendChild(HTMLDiv);
			element("dataItems").style.display = "block";
			element("dataItems").style.display = ""
			for(var i=0, localStorageLen=localStorage.length; i<localStorageLen; i++){
				var li = document.createElement("li");
				var linksLi = document.createElement("li");//edit
				newList.appendChild(li);
				var code = localStorage.key(i);
				var value = localStorage.getItem(code);
				var object = JSON.parse(value);
				var makeTabList = document.createElement("ul");
				makeTabList.style.border="2px solid black";
				makeTabList.style.padding="10px";
				makeTabList.width-"200px";
				var inc	= Math.floor(Math.random()*1000001);
				makeTabList.innerHTML = "Ticket Number: " + inc;
				li.appendChild(makeTabList);
				for(var v in object){
					var makeTabli = document.createElement("li");
					makeTabList.appendChild(makeTabli);
					var text = object[v][0] + object[v][1];
					makeTabli.innerHTML = text;
					makeTabList.appendChild(linksLi); //edit linksLi
				}
			makeItemLinks(localStorage.key(i), linksLi); //create edit and delete buttons for each item in local storage	
				
		}	
	}
//console.log(localStorage.key);
	
	function makeItemLinks(code, linksLi){ //function edit LinksLi is being used in above funciton from week2
		var editLink = document.createElement("a");
		editLink.href = "#";
		editLink.code = code;
		var editText = "Edit Ticket";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		var breakTag = document.createElement("br");
		linksLi.appendChild(breakTag);
		
		var deleteLink = document.createElement("a");
		deleteLink.href = "#";
		deleteLink.code = code;
		var deleteText = "Delete Ticket";
		//deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	}
	
	function editItem(){//edit please
		var value = localStorage.getItem(this.code);
		var item = JSON.parse(value);
		
		toggleContent("off");
		
		element("firstn").value = item.firstn[1];
		element("lastn").value = item.lastn[1];
		element("email").value = item.email[1];
		element("phone").value = item.phone[1];
		element("date").value = item.date[1];
		
		var radios = document.forms[0].contactType
		for(var i=0; i<radios.length; i++){
			if(radios[i].value == "End User" && item.contactType[1] == "End User"){
			radios[i].setAttribute("checked", "checked");
			
				}else if(radios[i].value == "Dealer" && item.contactType[1] == "Dealer"){
					radios[i].setAttribute("checked", "checked");
			}
		}
		
		if(item.response[1] == "Contact waiting for response."){
			element("awaitingResponse").setAttribute("checked", "checked")
			
		}	
		
		element("contactFeelings").value = item.contactFeelings[1];
		element("supportType").value = item.supportType[1];
		element("comments").value = item.comments[1];
		
		button.removeEventListener("click", showData);
		
		element("button").value = "Edit Ticket";
		var editButton = element("button");
		editButton.addEventListener("click", validate);
		editButton.key = this.code;
		
	}



//Clear button

	function clearLocal(){
		if(localStorage.length === 0){
			alert("Data is not present.")
			
		}else{
			localStorage.clear();
			alert("All Support Tickets are deleted.");
			window.location.reload();
		}
		
	};

function validate(evt){
	var getSupportType = element("supportType");
	var getFirstn = element("firstn");
	var getLastn = element("lastn");
	var getEmail = element("email");
	var getComments = element("comments");
	
	errorM.innerHTML="";
		getSupportType.style.border="1px solid black";
		getFirstn.style.border="1px solid black";
		getLastn.style.border="1px solid black";
		getEmail.style.border="1px solid black";
	
	var validations = [];
	
	if(getSupportType.value === "--> Choose Support Type"){
		var getSupportTypeError = "Select a Support Type";
		getSupportType.style.border="2px dotted red";
		validations.push(getSupportTypeError);
		
	}
	if(getFirstn.value === ""){
	var firstnError = "First Name Required";
	getFirstn.style.border="2px dotted red";
	validations.push(firstnError);
		
		
	}
	if(getLastn.value === ""){
	var lastnError = "Last Name Required";
	getLastn.style.border="2px dotted red";
	validations.push(lastnError);
		
		
	}
	if(getEmail.value === ""){
	var regularEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!(regularEx.exec(getEmail.value))){
		var eError = "Valid Email Required";
		getFirstn.style.border="2px dotted red";
		validations.push(eError)
		
	}

	
	var emailError = "Email Required";
	getEmail.style.border="2px dotted red";
	validations.push(emailError);
		
		
	}
	if(getComments.value === ""){
		var commentsError = "Support Overview Required";
		getComments.style.border="2px dotted red";
		validations.push(commentsError);
		
		
	}
	if (validations.length >= 1){
		for(var i=0, j=validations.length; i<j; i++){
			var text = document.createElement("li");
			text.style.color="red";
			text.innerHTML = validations[i];
			errorM.appendChild(text);
		}
	evt.preventDefault();
	return false;
	
		
	}else{
		showData()
	}
	

}

	//Links: displayData, clearData & Submit Button
	
	var displayData = element("displayData");
	displayData.addEventListener("click", displayD);

	var clearData = element("clearStoredData");
	clearData.addEventListener("click", clearLocal);

	var submit = element("button");
	button.addEventListener("click", validate);
	


});

