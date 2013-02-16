

window.addEventListener("DOMContentLoaded", function(){

//Global variables

	var supportTypeList = ["Call", "Email", "Online Chat", "Support Form"];
	var contactTypeValue;
	var responseBox = "No"
	
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
	

//ToggleControls for Display

	function toggleControls(n){
		switch(n){
			case "on":
				element("onlyForm").style.display = "none";
				element("clearStoredData").style.display = "inline";
				element("displayData").style.display = "none";
				element("addNewItem").style.display = "inline"
				break;
				
			case "off": //not looking at data
				element("onlyForm").style.display = "block";
				element("clearStoredData").style.display = "inline";
				element("displayData").style.display = "inline";
				element("addNewItem").style.display = "none"
				element("items").style.display = "none";
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
		
		var items = {
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
			localStorage.setItem(id, JSON.stringify(items));
		
	};
	

//Submit Button is pressed	

	function getData(){
		toggleControls("on");
			var HTMLDiv = document.createElement("div");
			HTMLDiv.setAttribute("id", "items");
			var makeList = document.createElement("ul");
			HTMLDiv.appendChild(makeList);
			document.body.appendChild(HTMLDiv);
			element("items").style.display = "block";
			for(var i=0, len=localStorage.length; i<len; i++){
				var makeli = document.createElement("li");
				makeList.appendChild(makeli);
				var key = localStorage.key(i);
				var value = localStorage.getItem(key);
				var obj = JSON.parse(value);
				var makeTabList = document.createElement("ul");
				makeli.appendChild(makeTabList);
				for(var n in obj){
					var makeTabli = document.createElement("li");
					makeTabList.appendChild(makeTabli);
					var text = obj[n][0] + obj[n][1];
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
	displayData.addEventListener("click", getData);

	var clearData = element("clearStoredData");
	clearData.addEventListener("click", clearLocal);

	var submit = element("button");
	button.addEventListener("click", showData);
	


});

