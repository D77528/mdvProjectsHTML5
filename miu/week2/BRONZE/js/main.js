//Reyes, Timothy
//MIU 1303
//Project Week 2


window.addEventListener("DOMContentLoaded", function(){


//Global variables
	var supportTypeList = ["--> Choose Support Type", "Call", "Email", "Online_Chat", "Support_Form", "Sales_Inquiry"];
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
			makeSelect.setAttribute("data-native-menu", "false");
			makeSelect.setAttribute("name", "supportType");
			makeSelect.setAttribute("data-mini", "true");
			
		for(var i=0, j=supportTypeList.length; i<j; i++){
			var makeOption = document.createElement("option")
			var	optText = supportTypeList[i];
			if(optText != "--> Choose Support Type"){
				makeOption.setAttribute("value", optText);
				makeOption.innerHTML = optText;
			}else(makeOption.innerHTML = "--> Choose Support Type")
				makeSelect.appendChild(makeOption);
			
		}
		selectListItem.appendChild(makeSelect);
		
	}
	
	dynamicInsert()


//Radio Buttons for Contact Type
	function getEndUserValue(){
		var contactRadios = document.getElementsByName("contactType")
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
				//element("h1").style.display = "block";
				//element("h2").style.display = "block";
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
			alert("No Support Tickets Entered; will auto-populate Ticket entry");
			autoFillTicket();
		}
			var HTMLDiv = document.createElement("div");			//HTMLDiv creates a <div></div>
			HTMLDiv.setAttribute("id", "dataItems", "align");		//HTMLDiv includes <div id="dataItems" align=""></div>
			HTMLDiv.align ="left";									//HTMLDiv includes left for <div align="left"></div>
			var newList = document.createElement("ul");				//newList creates <ul></ul>
			HTMLDiv.appendChild(newList);							//HTMLDiv append so <div><ul></ul></div>
			jqueryPage = element("supportTicket").children[1];		//jqueryPage places content inside supportTickets 2nd Div tag
			jqueryPage.appendChild(HTMLDiv);						//jqueryPage append so <div><div></div></div>
			element("dataItems").style.display = "block";			//CSS display
			element("dataItems").style.display = ""					//CSS display
			for(var i=0, j=localStorage.length; i<j; i++){			//
				var li = document.createElement("li");				// li creates <li></li>
				var createLi = document.createElement("li");		// createLi creates <li></li>
				newList.appendChild(li);							// newList append so <ul><li></li></ul>
				var key = localStorage.key(i);						//key is localStorage length key key
				var value = localStorage.getItem(key);				//value is localStorage length value key
				var object = JSON.parse(value);						// object is parsing the JSON value
				var makeTabList = document.createElement("ul");		//makeTabList 
				makeTabList.style.border="2px solid black";			//CSS display
				makeTabList.style.padding="10px";					//CSS display
				makeTabList.width-"320px";							//CSS display
				getImg(object.supportType[1], makeTabList);			//getImg function matches supportType with list
				li.appendChild(makeTabList);						// li append so <ul><li>
				for(var v in object){								// loop var = v into parsed Local Storage
					var makeTabli = document.createElement("li");	//makes additional li
					makeTabList.appendChild(makeTabli);				//li appends so <ul><li>
					var text = object[v][0] + object[v][1];			// text is parsed Local Storage v 0 and 1
					makeTabli.innerHTML = text;						// li's innerHTML is the Local Storage v 0 and 1
					makeTabList.appendChild(createLi);				// ul append so <ul><li>
				}													//out of nested loop
			makeItemLinks(localStorage.key(i), createLi);			// makeItemLinks are links for edit and delete button
		}	
	};

//Get Image for Support Type
	function getImg(varImg, makeTabList){
		var imgLi = document.createElement("li");
		makeTabList.appendChild(imgLi);
		var newImage = document.createElement("img");
		var setSource = newImage.setAttribute("src", "img/" + varImg + ".png");
		imgLi.appendChild(newImage);
		
		
	};


//Auto Fill Ticket	
	function autoFillTicket(){
		for(var n in jsonObjects){
			var id	= Math.floor(Math.random()*293842);
			localStorage.setItem(id, JSON.stringify(jsonObjects[n]));
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
	
		var radios = document.getElementsByName("contactType");
		for(var i=0; i<radios.length; i++){
			if(radios[i].value == "End User" && item.contactType[1] == "End User"){
			radios[i].setAttribute("checked", "");
			
				}else if(radios[i].value == "Dealer" && item.contactType[1] == "Dealer"){
					radios[i].setAttribute("checked", "");
			}
		};
		element("contactFeelings").value = item.contactFeelings[1];
		element("supportType").value = item.supportType[1];
		if(item.response[1] == "Contact waiting for response."){
			element("awaitingResponse").setAttribute("checked", "checked")
		};
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
	
//Search functionality

var search = element("searchBtn");
search.addEventListener("click", getSearch);
console.log(search.onfocus);
	

function getSearch(){
	var category = element("supportType").value;
	var term = element("searchField").value;	
console.log(term);
	
//Search by Category Only

	if(category != "--> Choose Support Type" && term === ""){
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		
		for (i=0, j=localStorage.length; i<j; i++){
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			if(category === obj.supportType[1]){ //category is looking for the value of supportType, not anything else
				var makeli = document.createElement("li");
				var makeSubList = document.createElement("ul");
				makeli.appendChild(makeSubList);
				makeList.appendChild(makeli);
				for (q in obj){
					var makeSubli = document.createElement("li");
					makeSubli.innerHTML = obj[q][0] + " " + obj[q][1]
					makeSubList.appendChild(makeSubli);
					console.log(obj[q][0] + " " + obj[q][1])
				}
			}
			
		}
		
	}

//Search by Term only
	if(term != ""){
		for (i=0, j=localStorage.length; i<j; i++){
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var object = JSON.parse(value);
			for(n in object){
				if(term === object[n][1]){
					for(v in object){
						
					
			var HTMLDiv = document.createElement("div");			//HTMLDiv creates a <div></div>
			HTMLDiv.setAttribute("id", "dataItems", "align");		//HTMLDiv includes <div id="dataItems" align=""></div>
			HTMLDiv.align ="left";									//HTMLDiv includes left for <div align="left"></div>
			var newList = document.createElement("ul");				//newList creates <ul></ul>
			HTMLDiv.appendChild(newList);							//HTMLDiv append so <div><ul></ul></div>
			jqueryPage = element("searchResults").children[1];		//jqueryPage places content inside searchResults 2nd Div tag
			jqueryPage.appendChild(HTMLDiv);						//jqueryPage append so <div><div></div></div>
			element("dataItems").style.display = "block";			//CSS display
			element("dataItems").style.display = ""					//CSS display
			for(var i=0, j=localStorage.length; i<j; i++){			//
				var li = document.createElement("li");				// li creates <li></li>
				var createLi = document.createElement("li");		// createLi creates <li></li>
				newList.appendChild(li);							// newList append so <ul><li></li></ul>
				var makeTabList = document.createElement("ul");		//makeTabList 
				makeTabList.style.border="2px solid black";			//CSS display
				makeTabList.style.padding="10px";					//CSS display
				makeTabList.width-"320px";							//CSS display
				getImg(object.supportType[1], makeTabList);			//getImg function matches supportType with list
				li.appendChild(makeTabList);						// li append so <ul><li>
				for(var v in object){								// loop var = v into parsed Local Storage
					var makeTabli = document.createElement("li");	//makes additional li
					makeTabList.appendChild(makeTabli);				//li appends so <ul><li>
					var text = object[v][0] + object[v][1];			// text is parsed Local Storage v 0 and 1
					makeTabli.innerHTML = text;						// li's innerHTML is the Local Storage v 0 and 1
					makeTabList.appendChild(createLi);				// ul append so <ul><li>
				}					//out of nested loop
			//makeItemLinks(localStorage.key(i), createLi);			// makeItemLinks are links for edit and delete button
		}	/*	*/
		
						console.log(object[v][1]);
						}
				}
			}
			
		}
	}
}	
	
console.log(localStorage);

//Links: displayData, clearData & Submit Button	
	var displayData = element("displayData");
	displayData.addEventListener("click", displayD);

	var clearData = element("clearStoredData");
	clearData.addEventListener("click", clearLocal);

	var button = element("button");
	button.addEventListener("click", validate);
	


});

