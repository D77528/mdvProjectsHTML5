//Reyes, Timothy
//Virtual Frameworks 1302
//Project Web App Part 3
//GitHub: https://github.com/D77528/mdvProjectsHTML5/tree/gh-pages/vf_project3


window.addEventListener("DOMContentLoaded", function(){


//Global variables
	var supportTypeList = ["--> Choose Support Type", "Call", "Email", "Online Chat", "Support Form"];
	var responseBox = "No";
	var endUserValue;
	var errorM = element("anyErrors");
	
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
		
	}
	
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
	function showData(key){
	if(!key){
		var id	= Math.floor(Math.random()*293842);
		}else{
		id = key;
		}
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
			alert ("Ticket has been submitted")
			localStorage.setItem(id, JSON.stringify(dataItems));
			window.location.reload()
	};
	


//Display Link is pressed	
	function displayD(){
		toggleContent("on");
		if(localStorage.length === 0){
			alert("There are no Support Tickets submitted.")
		}
			var HTMLDiv = document.createElement("div");
			HTMLDiv.setAttribute("id", "dataItems", "align");
			HTMLDiv.align ="left";
			var newList = document.createElement("ul");
			HTMLDiv.appendChild(newList);
			document.body.appendChild(HTMLDiv);
			element("dataItems").style.display = "block";
			element("dataItems").style.display = ""
			for(var i=0, j=localStorage.length; i<j; i++){
				var li = document.createElement("li");
				var createLi = document.createElement("li");//edit
				newList.appendChild(li);
				var key = localStorage.key(i);
				var value = localStorage.getItem(key);
				var object = JSON.parse(value);
				var makeTabList = document.createElement("ul");
				makeTabList.style.border="2px solid black";
				makeTabList.style.padding="10px";
				makeTabList.width-"200px";
				//var inc	= Math.floor(Math.random()*1000001);
				//makeTabList.innerHTML = "Ticket Number: " + inc;
				li.appendChild(makeTabList);
				for(var v in object){
					var makeTabli = document.createElement("li");
					makeTabList.appendChild(makeTabli);
					var text = object[v][0] + object[v][1];
					makeTabli.innerHTML = text;
					makeTabList.appendChild(createLi);
				}
			makeItemLinks(localStorage.key(i), createLi);	
		}	
	};


// Links for Edit & Delete Ticket	
	function makeItemLinks(key, createLi){
		var createEditLink = document.createElement("a");
		createEditLink.href = "#";
		createEditLink.key = key;
		var editText = "Edit Ticket";
		createEditLink.addEventListener("click", editTicket);
		createEditLink.innerHTML = editText;
		createLi.appendChild(createEditLink);
		
		var breakTag = document.createElement("br");
		createLi.appendChild(breakTag);
		
		var createDeleteLink = document.createElement("a");
		createDeleteLink.href = "#";
		createDeleteLink.key = key;
		var deleteText = "Delete Ticket";
		createDeleteLink.addEventListener("click", deleteTicket);
		createDeleteLink.innerHTML = deleteText;
		createLi.appendChild(createDeleteLink);
	};


//Edit Link Displays
	function editTicket(){
		var value = localStorage.getItem(this.key);
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
		editButton.key = this.key;
		
	};


//Delete Link Displays
	function deleteTicket(){
		var conf = confirm("Are you sure you want to delete this Ticket?");
		if(conf){
			localStorage.removeItem(this.key);
			alert("Ticket deleted");
			window.location.reload()
			
		}else{
			alert("Cancelled");
		}
	};
	
	
	
//Clear Ticket Link
	function clearLocal(){
		if(localStorage.length === 0){
			alert("No Support Tickets found")
			
		}else{
			localStorage.clear();
			alert("All Support Tickets deleted");
			window.location.reload();
		}
		
	};
	
	
//Validation Function
	function validate(e){
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
			getComments.style.border="1px solid black";
		
		var allErrors = [];
	
		
		if(getSupportType.value === "--> Choose Support Type"){
			var getSupportTypeError = "Support Type Required";
			getSupportType.style.border="2px dotted red";
			allErrors.push(getSupportTypeError);
			
		}
		if(getFirstn.value === ""){
			var firstnError = "First Name Required";
			getFirstn.style.border="2px dotted red";
			allErrors.push(firstnError);
			
			
		}
		if(getLastn.value === ""){
			var lastnError = "Last Name Required";
			getLastn.style.border="2px dotted red";
			allErrors.push(lastnError);
			
			
		}
		var regularEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!(regularEx.exec(getEmail.value))){
			var eError = "Valid Email Required";
			getEmail.style.border="2px dotted red";
			allErrors.push(eError)
			
		}
	
		if(getComments.value === ""){
			var commentsError = "Support Overview Required";
			getComments.style.border="2px dotted red";
			allErrors.push(commentsError);
			
			
		}
		if (allErrors.length >= 1){
			for(var i=0, j=allErrors.length; i<j; i++){
				var textAtt = document.createElement("li");
				textAtt.style.color="red";
				textAtt.innerHTML = allErrors[i];
				errorM.appendChild(textAtt);
			}
			e.preventDefault();
			return false;
			
		}else{
			showData(this.key)
		}
		
	
	};


//Links: displayData, clearData & Submit Button	
	var displayData = element("displayData");
	displayData.addEventListener("click", displayD);

	var clearData = element("clearStoredData");
	clearData.addEventListener("click", clearLocal);

	var button = element("button");
	button.addEventListener("click", validate);
	


});

