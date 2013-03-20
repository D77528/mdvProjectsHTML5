$(document).on('pageinit', function(){

	/*
	var supportTypeList = ["--> Choose Support Type", "Call", "Email", "Online_Chat", "Support_Form", "Sales_Inquiry"];
	var recordErrors = $("#recordErrors");
	var responseBox = "No";
	var endUserValue;
	var errorM = $("#anyErrors");
	*/
	//Radio Buttons for Contact Type
var showData = function(data){
	console.log(data);
	
}
	
$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#supportTicket').on('pageinit', function(){
		var onlyForm = $('#onlyForm');
		var recordErrorsLink = $("#recordErrorsLink");

		onlyForm.validate({
			invalidHandler: function(form, validator) {	
			recordErrorsLink.click()
			var innerText = "";
			for(var key in validator.submitted){
				var label = $('label[for^="' + key +'"]').not("[style]");
				console.log(label.text())	
				//var legend = label.closest("fieldset").find(".ui-controlgroup-label");
				//var fieldName = legend.length ? lengend.text() : label.text();
				innerText += "<li>" + label.text() + "</li>";
				$("#recordErrorsPage ul").html(innerText)
			}
			
			},
			submitHandler: function() {
			var data = onlyForm.serializeArray();
				showData(data);	
			}
		
		});			
});	
	//any other code needed for addItem page goes here
	


//The functions below can go inside or outside the pageinit function for the page in which it is needed.
function getEndUserValue(){
		var contactRadios = $("#contactType").get();
		for(var i=0; i<contactRadios.length; i++){
		
			if(contactRadios[i].checked){
				endUserValue = contactRadios[i].value;
			}
		}
		
	};
//Checkbox for Waiting for Response
	function getCheckValue(){
		if($("#awaitingResponse").checked){
			responseBox = $("#awaitingResponse").value;
		}else{
			responseBox = "No response needed."
		}
		
	};/*
	function showData(key){
	
	if(!key){
		var id	= Math.floor(Math.random()*293842);
		}else{
		id = key;
		}
		getEndUserValue();
		getCheckValue();
		
		var dataItems = {
				firstn : ["First Name: ", $("#firstn").value],
				lastn : ["Last Name: ", $("#lastn").value],
				email : ["Email Address: ", $("#email").value],
				phone : ["Phone Number: ", $("#phone").value],
				date : ["Date Entered: ", $("#date").value],
				contactType : ["Contact Type: ", endUserValue],
				contactFeelings : ["Contact Feelings Happy: 0 ~ Upset: 100: ", $("#contactFeelings").value],
				supportType : ["Support Type: ", $("#supportType").value],
				response : ["Waiting for Response: ", responseBox],
				comments : ["Support Overview: ", $("#comments").value]
			}
			alert ("Ticket has been submitted")
			localStorage.setItem(id, JSON.stringify(dataItems));
			//window.location.reload()
	
	console.log(key);
	};*/
var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};
/*
//Radio Buttons for Contact Type
	function getEndUserValue(){
		var contactRadios = $("#contactType").get();
		for(var i=0; i<contactRadios.length; i++){
		
			if(contactRadios[i].checked){
				endUserValue = contactRadios[i].value;
			}
		}
		
	};
//Checkbox for Waiting for Response
	function getCheckValue(){
		if($("#awaitingResponse").checked){
			responseBox = $("#awaitingResponse").value;
		}else{
			responseBox = "No response needed."
		}
		
	};
//Submit Button	
	function showData(key){
	if(!key){
		var id	= Math.floor(Math.random()*293842);
		}else{
		id = key;
		}
		getEndUserValue();
		getCheckValue();
		
		var dataItems = {
				firstn : ["First Name: ", $("#firstn").value],
				lastn : ["Last Name: ", $("#lastn").value],
				email : ["Email Address: ", $("#email").value],
				phone : ["Phone Number: ", $("#phone").value],
				date : ["Date Entered: ", $("#date").value],
				contactType : ["Contact Type: ", endUserValue],
				contactFeelings : ["Contact Feelings Happy: 0 ~ Upset: 100: ", $("#contactFeelings").value],
				supportType : ["Support Type: ", $("#supportType").value],
				response : ["Waiting for Response: ", responseBox],
				comments : ["Support Overview: ", $("#comments").value]
			}
			alert ("Ticket has been submitted")
			localStorage.setItem(id, JSON.stringify(dataItems));
			//window.location.reload()
	};
//Display Link is pressed	
	function displayD(){
		if(localStorage.length === 0){
			alert("No Support Tickets Entered; will auto-populate Ticket entry");
			autoFillTicket();
		}
			var HTMLDiv = $("<div>");			//HTMLDiv creates a <div></div>
			HTMLDiv.attr("id", "dataItems", "align");		//HTMLDiv includes <div id="dataItems" align=""></div>
			HTMLDiv.align ="left";									//HTMLDiv includes left for <div align="left"></div>
			var newList = $("<ul>");				//newList creates <ul></ul>
			HTMLDiv.append(newList);							//HTMLDiv append so <div><ul></ul></div>
			jqueryPage = $("#supportTicket").children[1];		//jqueryPage places content inside supportTickets 2nd Div tag
			jqueryPage.append(HTMLDiv);						//jqueryPage append so <div><div></div></div>
			$("#dataItems").style.display = "block";			//CSS display
			$("#dataItems").style.display = ""					//CSS display
			for(var i=0, j=localStorage.length; i<j; i++){			//
				var li = $("<li>");				// li creates <li></li> li is the entire group around border
				var createLi = $("<li>");		// createLi creates <li></li> createLi is the Edit and Delete section
				var dividerLi = $("<li>");	
				newList.append(li);							// newList append so <ul><li></li></ul>
				var key = localStorage.key(i);						//key is localStorage length key key
				var value = localStorage.getItem(key);				//value is localStorage length value key
				var object = JSON.parse(value);						// object is parsing the JSON value
				var makeTabList = $("<ul>");			//makeTabList 
				makeTabList.attr("data-role", "listview");
				dividerLi.attr("data-role", "list-divider");
				makeTabList.style.border="2px solid black";			//CSS display
				makeTabList.style.padding="10px";					//CSS display
				makeTabList.width-"320px";							//CSS display
				getImg(object.supportType[1], makeTabList);			//getImg function matches supportType with list
				li.append(makeTabList);						// li append so <ul><li>
				makeTabList.appendChild(dividerLi)
				for(var v in object){								// loop var = v into parsed Local Storage
					var makeTabli = $("<li>");		//makes additional li  makeTabli stands for objects within original li
					//makeTabli.setAttribute("id", v);
					//element("firstn").style.background = "#ff0000"
					makeTabList.append(makeTabli);				//li appends so <ul><li>
					var text = object[v][0] + object[v][1];			// text is parsed Local Storage v 0 and 1
					makeTabli.innerText = text;						// li's innerHTML is the Local Storage v 0 and 1
					
					makeTabList.append(createLi);				// ul append so <ul><li>
					}
																//out of nested loop
			makeItemLinks(localStorage.key(i), createLi);			// makeItemLinks are links for edit and delete button
		}	
	};
	
//Get Image for Support Type
	function getImg(varImg, makeTabList){
		var imgLi = $("<li>");
		makeTabList.append(imgLi);
		var newImage = ("<img>");
		var setSource = newImage.attr("src", "img/" + varImg + ".png");
		imgLi.append(newImage);
		
		
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
		var createEditLink = $("<a>");
		createEditLink.href = "#";
		createEditLink.key = key;
		var editText = "Edit Ticket";
		createEditLink.on("click", editTicket);
		createEditLink.innerHTML = editText;
		createLi.append(createEditLink);
		
		var breakTag = $("<br>");
		createLi.append(breakTag);
		
		var createDeleteLink = $("<a>");
		createDeleteLink.href = "#";
		createDeleteLink.key = key;
		var deleteText = "Delete Ticket";
		createDeleteLink.on("click", deleteTicket);
		createDeleteLink.innerHTML = deleteText;
		createLi.append(createDeleteLink);
	};	
//Edit Link Displays
	function editTicket(){
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		
		toggleContent("off");
		
		$("#firstn").value = item.firstn[1];
		$("#lastn").value = item.lastn[1];
		$("#email").value = item.email[1];
		$("#phone").value = item.phone[1];
		$("#date").value = item.date[1];
	
		var radios = document.getElementsByName("contactType");
		for(var i=0; i<radios.length; i++){
			if(radios[i].value == "End User" && item.contactType[1] == "End User"){
			radios[i].attr("checked", "");
			
				}else if(radios[i].value == "Dealer" && item.contactType[1] == "Dealer"){
					radios[i].attr("checked", "");
			}
		};
		$("#contactFeelings").value = item.contactFeelings[1];
		$("#supportType").value = item.supportType[1];
		if(item.response[1] == "Contact waiting for response."){
			$("#awaitingResponse").attr("checked", "checked")
		};
		$("#comments").value = item.comments[1];
		
		button.unbind("click", showData);

		$("#button").value = "Edit Ticket";
		
		var editButton = $("#button");
		editButton.on("click", validate);
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
	
	
var button = $("#button");
	button.on("click", showData(this.key));
	
	
	});
*/
});
