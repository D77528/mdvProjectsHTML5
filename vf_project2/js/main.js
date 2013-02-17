//Reyes, Timothy
//Virtual Frameworks 1302
//Project Web App Part 2
//GitHub: https://github.com/D77528/mdvProjectsHTML5/tree/gh-pages/vf_project2


window.addEventListener("DOMContentLoaded", function(){

//Global variables

	var supportTypeList = ["Call", "Email", "Online Chat", "Support Form"];
	var contactTypeValue;
	var responseBox = "No";
	
	function element(x){
		var ElementGrabber = document.getElementById(x);
		return ElementGrabber;
	};
	
	console.log(document.getElementsByName("contactType"));
	
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

	function endUserValue(){
		var contactRadios = document.forms[0].contactType;
		
		for(var i=0; i<contactRadios.length; i++){
			if(contactRadios[i].checked){
				contactTypeValue = contactRadios[i].value;
			}
		}
		return contactTypeValue
		
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
		
		endUserValue();
		getCheckValue();
		
		var dataItems = {
				list : ["Support Type: ", element("supportType").value],
				firstn : ["First Name: ", element("firstn").value],
				lastn : ["Last Name: ", element("lastn").value],
				email : ["Email Address: ", element("email").value],
				phone : ["Phone Number: ", element("phone").value],
				date : ["Date Entered: ", element("date").value],
				contactType : ["Contact Type: ", endUserValue()],
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
				}
			
		}	
	};


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



	//Links: displayData, clearData & Submit Button
	
	var displayData = element("displayData");
	displayData.addEventListener("click", displayD);

	var clearData = element("clearStoredData");
	clearData.addEventListener("click", clearLocal);

	var submit = element("button");
	button.addEventListener("click", showData);
	


});

