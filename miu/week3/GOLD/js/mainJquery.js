$(document).on('pageinit', function(){
	/*
	var recordErrors = $("#recordErrors");
	var responseBox = "No";
	var endUserValue;
	var errorM = $("#anyErrors");
	*/
	//Radio Buttons for Contact Type

	
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
$('#searchResults').on('pageinit', function(){

	//code needed for home page goes here
	
	
});		


//The functions below can go inside or outside the pageinit function for the page in which it is needed.
function getEndUserValue(){
		var contactRadios = $("#contactType")
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
var autoFillTicket = function (){
	for(var n in jsonObjects){
		var id	= Math.floor(Math.random()*293842);
		localStorage.setItem(id, JSON.stringify(jsonObjects[n]));
	}
	 
};
// Links for Edit & Delete Ticket	
	function makeItemLinks(key, createPInner){
	
			
		var breakTag = $("<br />");	
		var createEditLink = $("<a>").attr("href", "#")
									 .attr("key", "key");			 
		createEditLink.on("click", editTicket);
		createEditLink.html("<br />" + "Edit Ticket")
		createPInner.append(createEditLink);	
		createPInner.append(breakTag);
		
		var createDeleteLink = $("<a>").attr("href", "#")
									   .attr("key", "key");
		createDeleteLink.on("click", deleteTicket);
		createDeleteLink.html("Delete Text");
		createPInner.append(createDeleteLink);
	};
	
//Edit Link Displays
	function editTicket(){
	};


//Delete Link Displays
	function deleteTicket(){
	};
	
	
var displayD = function(){
//Display Link is pressed	
	if(localStorage.length === 0){
		alert("No Support Tickets Entered; will auto-populate Ticket entry");
		autoFillTicket();
	}
	for (var key in jsonObjects){
		var obj = jsonObjects[key];
	//for (i=0, j=localStorage.length; i<j; i++){
		//var key = localStorage.key(i);		
		//var value = localStorage.getItem(key);
		//var obj = JSON.parse(value);
		var HTMLDiv = $("<div>").attr("data-role", "collapsible")
								.attr("data-collapsed", "true")
								.attr("id", "dataItems");
		var createH3 = $("<h3>");
		var createP = $("<p>");
		createH3.html(obj.firstn[1] + " " + obj.lastn[1])
		HTMLDiv.append(createH3);
		
		for(n in obj){
			var jqueryPage = $("#contentSearchResults")
			var createPInner = $("<p>");
			
			createPInner.html(obj[n][0] + " " + obj[n][1])
			HTMLDiv.append(createPInner);				
			jqueryPage.append(HTMLDiv);	
					
		}
		makeItemLinks(jsonObjects[key][n], createPInner);	
	}
};

var	deleteItem = function (){
			
};
					
var clearLocal = function(){
	if(localStorage.length === 0){
		alert("No Support Tickets found")
		
	}else{
		localStorage.clear();
		alert("All Support Tickets deleted");
		window.location.reload();
	}

};

var showData = function(data){
	var setObjects = data
	localStorage.setItem("setObjects", JSON.stringify(setObjects));
};


//Form Links
var displayData = $("#displayData");
displayData.on("click", displayD);

var clearData = $("#clearStoredData");
clearData.on("click", clearLocal);
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
	
//Get Image for Support Type
	function getImg(varImg, makeTabList){
		var imgLi = $("<li>");
		makeTabList.append(imgLi);
		var newImage = ("<img>");
		var setSource = newImage.attr("src", "img/" + varImg + ".png");
		imgLi.append(newImage);
		
		
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
console.log(localStorage);
});
