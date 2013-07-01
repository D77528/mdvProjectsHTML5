
	var responseBox = "No";
		
	$('#home').on('pageinit', function(){

	
	});	
			
	$('#supportTicket').on('pageinit', function(){
		var todaysDate = new Date();
		$("#date").attr("value", todaysDate)
		
		
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
				storeData(data);	
			}
			
		});			
	});	

	$('#searchResults').on('pageinit', function(){

	});		
	

		
//Auto Fill Ticket Link
	var autoFillTicket = function (){
		for(var n in jsonObjects){
			var id	= Math.floor(Math.random()*293842);
			localStorage.setItem(id, JSON.stringify(jsonObjects[n]));
		}
		 
	};
// Links for Edit & Delete Ticket	
	function makeItemLinks(key, createPLast){	
	console.log(key)		
		var breakTag = $("<br />");	
		var createEditLink = $("<a>").attr("href", "#supportTicket")
									 .attr("id", key)
		createEditLink.on("click", editTicket);	 
		createEditLink.html("<br />" + "Edit Ticket")
		createPLast.append(createEditLink);	
		createPLast.append(breakTag);		
		
		var createDeleteLink = $("<a>").attr("href", "#")
		createDeleteLink.on("click", deleteTicket);	 
		createDeleteLink.html("Delete Text");
		createPLast.append(createDeleteLink);
	};
	
//Edit Link Displays
	function editTicket(){
		var value = localStorage.getItem($(this).attr("id"));
console.log(value)
		var item = JSON.parse(value);
		console.log(item);

		$("#firstn").val(item.firstn[1]);		
		$("#lastn").val(item.lastn[1]);
		$("#email").val(item.email[1]);
		$("#phone").val(item.phone[1]);
		$("#date").val(item.date[1]);
		
		var radios = $("[name='contactType']")
		for(var i=0; i<radios.length; i++){
			if(radios[i].value == "End User" && item.contactType[1] == "End User"){
				$("#endUser").attr("checked", "true")
			
			}else if(radios[i].value == "Dealer" && item.contactType[1] == "Dealer"){
				$("#dealer").attr("checked", "true")
			}
		};
		
		$("#contactFeelings").val(item.contactFeelings[1])
		$("#supportType").val(item.supportType[1]);

		if(item.response[1] == "Yes"){
			$("#awaitingResponse").attr("checked", true)
		};
		
		$("#comments").val(item.comments[1]);		
		var editButton = $("#submit");
		$("#submit").val("DONE EDITING");
		editButton.key = $(this).attr("id");	
		$("#submit").button('refresh');
		
		editButton.on("click", storeData(value));
	
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


//Display Link is pressed				
	var displayD = function(){
//		$("#itemList").empty();
		if(localStorage.length === 0){
			alert("No Support Tickets Entered; will auto-populate Ticket entry");
			autoFillTicket();
		}
		
		for (i=0, j=localStorage.length; i<j; i++){
		    var key = localStorage.key(i);
            var item = JSON.parse(localStorage.getItem(key));
			var makeSubList = $("<div></div>").attr("data-role", "collapsible")											

			var makeSubLi = $("<h3>"+ item.firstn[1] + " " + item.lastn[1] + "</h3>");
/*			
					makeLink.on("click", function(){
				console.log("This is my key: "+this.id);
				
				
				
			});		
*/
			makeSubList.append(makeSubLi);				
			for(n in item){
				var createPInner = $("<p>");
				var createPLast = $("<p>");
				createPInner.html(item[n][0] + " " + item[n][1])	
				makeSubList.append(createPInner).appendTo("#itemList");
				
						
			}
			makeSubList.append(createPLast);
			makeItemLinks(key, createPLast);	
		};
	};
	
//Clear Local is pressed						
	var clearLocal = function(){
		if(localStorage.length === 0){
			alert("No Support Tickets found")
			
		}else{
			localStorage.clear();
			alert("All Support Tickets deleted");
		}
	
	};
//storeData Submit Button is pressed	
	var storeData = function(data){
		console.log(data)
		var setObjects = data
		var id	= Math.floor(Math.random()*293842);
		getCheckValue(); //CheckValue has results for responseBox
		
		var dataItems = {
			firstn : ["First Name: ", setObjects[0].value],
			lastn : ["Last Name: ", setObjects[1].value],
			email : ["Email Address: ", setObjects[2].value],
			phone : ["Phone Number: ", setObjects[3].value],
			date : ["Date Entered: ", setObjects[4].value],
			contactType : ["Contact Type: ", setObjects[5].value],
			contactFeelings : ["Contact Feelings: ", setObjects[6].value],
			supportType : ["Support Type: ", setObjects[7].value],
			comments : ["Support Overview: ", setObjects[8].value],	
			response : ["Waiting for Response: ", responseBox]
		}		
		alert ("Ticket has been submitted");
		localStorage.setItem(id, JSON.stringify(dataItems));
		console.log(localStorage)
	};
	
//Checkbox for Waiting for Response
	function getCheckValue(){
		if($("#awaitingResponse").checked){
			responseBox = $("#awaitingResponse").value;
		}else{
			responseBox = "No response needed."
		}
		
	};
	
//FILTER CALLS	
	var browseResponse = $("#browseResponse");
	browseResponse.on("click", displayResponse);	
	
	var browseCalls = $("#browseCalls");
	browseCalls.on("click", displayCalls);
	
	var browseEmails = $("#browseEmails");
	browseEmails.on("click", displayEmails);
	
	var browseOnlineChats = $("#browseOnlineChats");
	browseOnlineChats.on("click", displayOnlineChats);
	
	var browseSupportForm = $("#browseSupportForm");
	browseSupportForm.on("click", displaySupportForm);
	
	var browseSalesInquiry = $("#browseSalesInquiry");
	browseSalesInquiry.on("click", displaySalesInquiry);
	
	var browseSearch = $("#searchBtn");
	browseSearch.on("click", displaySearch);
	
	var browseDate = $("#browseDate");
	browseDate.on("click", displayDate);

	
//FILTERS
//Display Response	
	function displayResponse() {	
		for (i=0, j=localStorage.length; i<j; i++){
			var key = localStorage.key(i);		
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var HTMLDiv = $("<div>").attr("data-role", "collapsible")
									.attr("data-collapsed", "true")
									.attr("id", "dataItems")
			var createH3 = $("<h3>");
			var createP = $("<p>");
			createH3.html(obj.firstn[1] + " " + obj.lastn[1])
			HTMLDiv.append(createH3);
			
			for(n in obj){
				if(obj.response[1] === "Yes"){
					var jqueryPage = $("#contentSearchResults")
					var createPInner = $("<p>").attr("id", "pCollapsed");
					createPInner.html(obj[n][0] + " " + obj[n][1])
					HTMLDiv.append(createPInner);				
					jqueryPage.append(HTMLDiv);	
				}
			}	
			makeItemLinks(localStorage.key(n), createPInner);		
		}
	}
//Display Calls	
	function displayCalls() {	
		for (i=0, j=localStorage.length; i<j; i++){
			var key = localStorage.key(i);		
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var HTMLDiv = $("<div>").attr("data-role", "collapsible")
									.attr("data-collapsed", "true")
									.attr("id", "dataItems")
			var createH3 = $("<h3>");
			var createP = $("<p>");
			createH3.html(obj.firstn[1] + " " + obj.lastn[1])
			HTMLDiv.append(createH3);
			
			for(n in obj){
				if(obj.supportType[1] === "Call"){
					var jqueryPage = $("#contentSearchResults")
					var createPInner = $("<p>").attr("id", "pCollapsed");
					createPInner.html(obj[n][0] + " " + obj[n][1])
					HTMLDiv.append(createPInner);				
					jqueryPage.append(HTMLDiv);	
				}	
			}
			makeItemLinks(localStorage.key(n), createPInner);	
		}
	}
	//Display Emails	
	function displayEmails() {	
		for (i=0, j=localStorage.length; i<j; i++){
			var key = localStorage.key(i);		
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var HTMLDiv = $("<div>").attr("data-role", "collapsible")
									.attr("data-collapsed", "true")
									.attr("id", "dataItems");
			var createH3 = $("<h3>");
			var createP = $("<p>");
			createH3.html(obj.firstn[1] + " " + obj.lastn[1])
			HTMLDiv.append(createH3);
			
			for(n in obj){
				if(obj.supportType[1] === "Email"){
					var jqueryPage = $("#contentSearchResults")
					var createPInner = $("<p>").attr("id", "pCollapsed");
					createPInner.html(obj[n][0] + " " + obj[n][1])
					HTMLDiv.append(createPInner);				
					jqueryPage.append(HTMLDiv);	
				}	
			}
			makeItemLinks(localStorage.key(n), createPInner);		
		}
	}
	
//Display OnlineChat	
	function displayOnlineChats() {	
		for (i=0, j=localStorage.length; i<j; i++){
			var key = localStorage.key(i);		
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var HTMLDiv = $("<div>").attr("data-role", "collapsible")
									.attr("data-collapsed", "true")
									.attr("id", "dataItems");
			var createH3 = $("<h3>");
			var createP = $("<p>");
			createH3.html(obj.firstn[1] + " " + obj.lastn[1])
			HTMLDiv.append(createH3);
			
			for(n in obj){
				if(obj.supportType[1] === "Online_Chat"){
					var jqueryPage = $("#contentSearchResults")
					var createPInner = $("<p>").attr("id", "pCollapsed");
					createPInner.html(obj[n][0] + " " + obj[n][1])
					HTMLDiv.append(createPInner);				
					jqueryPage.append(HTMLDiv);	
				}	
			}
			makeItemLinks(localStorage.key(n), createPInner);		
		}
	}
	
//Display Support Form	
	function displaySupportForm() {	
		for (i=0, j=localStorage.length; i<j; i++){
			var key = localStorage.key(i);		
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var HTMLDiv = $("<div>").attr("data-role", "collapsible")
									.attr("data-collapsed", "true")
									.attr("id", "dataItems");
			var createH3 = $("<h3>");
			var createP = $("<p>");
			createH3.html(obj.firstn[1] + " " + obj.lastn[1])
			HTMLDiv.append(createH3);
			
			for(n in obj){
				if(obj.supportType[1] === "Support_Form"){
					var jqueryPage = $("#contentSearchResults")
					var createPInner = $("<p>").attr("id", "pCollapsed");
					createPInner.html(obj[n][0] + " " + obj[n][1])
					HTMLDiv.append(createPInner);				
					jqueryPage.append(HTMLDiv);	
				}	
			}
			makeItemLinks(localStorage.key(n), createPInner);		
		}
	}
	
//Display Sales Inquiry	
	function displaySalesInquiry() {	
		for (i=0, j=localStorage.length; i<j; i++){
			var key = localStorage.key(i);		
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var HTMLDiv = $("<div>").attr("data-role", "collapsible")
									.attr("data-collapsed", "true")
									.attr("id", "dataItems");
			var createH3 = $("<h3>");
			var createP = $("<p>");
			createH3.html(obj.firstn[1] + " " + obj.lastn[1])
			HTMLDiv.append(createH3);
			
			for(n in obj){
				if(obj.supportType[1] === "Sales_Inquiry"){
					var jqueryPage = $("#contentSearchResults")
					var createPInner = $("<p>").attr("id", "pCollapsed");
					createPInner.html(obj[n][0] + " " + obj[n][1])
					HTMLDiv.append(createPInner);				
					jqueryPage.append(HTMLDiv);	
				}	
			}
			makeItemLinks(localStorage.key(n), createPInner);		
		}
	}
//Info Section	
//Display Browse Date	
	function displayDate() {	
		for (i=0, j=localStorage.length; i<j; i++){
			var key = localStorage.key(i);		
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var HTMLDiv = $("<div>").attr("data-role", "collapsible")
									.attr("data-collapsed", "true")
									.attr("id", "dataItems");
			var createH3 = $("<h3>");
			var createP = $("<p>");
			createH3.html(obj.firstn[1] + " " + obj.lastn[1])
			HTMLDiv.append(createH3);
			
			for(n in obj){
				if(obj.date[1] != ""){
					var jqueryPage = $("#contentSearchResults")
					var createPInner = $("<p>").attr("id", "pCollapsed");
					createH3.html(obj.date[1] + ": " + obj.firstn[1] + " " + obj.lastn[1])					
					createPInner.html(obj[n][0] + " " + obj[n][1])
					HTMLDiv.append(createPInner);				
					jqueryPage.append(HTMLDiv);	
					
					
				}	
			}
			makeItemLinks(localStorage.key(n), createPInner);		
		}
	}	
//Search Feature	
//Display Search Results

	function displaySearch() {	
	
		var term = $("#searchField").val();
		for (i=0, j=localStorage.length; i<j; i++){
			var key = localStorage.key(i);		
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var HTMLDiv = $("<div>").attr("data-role", "collapsible")
									.attr("data-collapsed", "true")
									.attr("id", "dataItems");
			var createH3 = $("<h3>");
			var createP = $("<p>");
			createH3.html(obj.firstn[1] + " " + obj.lastn[1])
			HTMLDiv.append(createH3);
			
			for(n in obj){				
				if(term === obj[n][1]){
					var jqueryPage = $("#contentSearchResults")
					var createPInner = $("<p>").attr("id", "pCollapsed");	
					jqueryPage.append(HTMLDiv);	
					
					for (q in obj){
						var createPInner = $("<p>").attr("id", "pCollapsed");
						createPInner.html(obj[q][0] + " " + obj[q][1])
						HTMLDiv.append(createPInner);
						createH3.html(obj.firstn[1] + " " + obj.lastn[1])
					}					
				}	
			}
			makeItemLinks(localStorage.key(n), createPInner);		
		}
		
	}	
//Form Links
	var displayData = $("#displayData");
	displayData.on("click", displayD);
	
	var clearData = $("#clearStoredData");
	clearData.on("click", clearLocal);


console.log(localStorage);