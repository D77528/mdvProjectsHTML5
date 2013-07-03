var responseBox = "No";

//HOME PAGE FILTER CALLS	
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
		$("#itemList").empty();
		for (i=0, j=localStorage.length; i<j; i++){
		    var key = localStorage.key(i);
            var item = JSON.parse(localStorage.getItem(key));
			var makeSubList = $("<div></div>").attr("data-role", "collapsible")											

			var makeSubLi = $("<h3>"+ item.firstn[1] + " " + item.lastn[1] + "</h3>");

			makeSubList.append(makeSubLi);	
			if(item.response[1] === "Yes"){			
				for(n in item){
					var createPInner = $("<p>");
					var createPLast = $("<p>");
					createPInner.html(item[n][0] + " " + item[n][1])	
					makeSubList.append(createPInner).appendTo("#itemList");	
				}
			makeSubList.append(createPLast);
			makeItemLinks(key, createPLast);		
				
			}	
		}
	}
//Display Calls	
	function displayCalls() {	
		$("#itemList").empty();
		for (i=0, j=localStorage.length; i<j; i++){
		    var key = localStorage.key(i);
            var item = JSON.parse(localStorage.getItem(key));
			var makeSubList = $("<div></div>").attr("data-role", "collapsible")											

			var makeSubLi = $("<h3>"+ item.firstn[1] + " " + item.lastn[1] + "</h3>");

			makeSubList.append(makeSubLi);	
			if(item.supportType[1] === "Call"){			
				for(n in item){
					var createPInner = $("<p>");
					var createPLast = $("<p>");
					createPInner.html(item[n][0] + " " + item[n][1])	
					makeSubList.append(createPInner).appendTo("#itemList");	
				}
			makeSubList.append(createPLast);
			makeItemLinks(key, createPLast);		
				
			}	
		}			
	}
//Display Emails	
	function displayEmails() {	
		$("#itemList").empty();
		for (i=0, j=localStorage.length; i<j; i++){
		    var key = localStorage.key(i);
            var item = JSON.parse(localStorage.getItem(key));
			var makeSubList = $("<div></div>").attr("data-role", "collapsible")											

			var makeSubLi = $("<h3>"+ item.firstn[1] + " " + item.lastn[1] + "</h3>");

			makeSubList.append(makeSubLi);	
			if(item.supportType[1] === "Email"){			
				for(n in item){
					var createPInner = $("<p>");
					var createPLast = $("<p>");
					createPInner.html(item[n][0] + " " + item[n][1])	
					makeSubList.append(createPInner).appendTo("#itemList");	
				}
			makeSubList.append(createPLast);
			makeItemLinks(key, createPLast);						
			}	
		}			
	}
//Display OnlineChat	
	function displayOnlineChats() {	
		$("#itemList").empty();
		for (i=0, j=localStorage.length; i<j; i++){
		    var key = localStorage.key(i);
            var item = JSON.parse(localStorage.getItem(key));
			var makeSubList = $("<div></div>").attr("data-role", "collapsible")											

			var makeSubLi = $("<h3>"+ item.firstn[1] + " " + item.lastn[1] + "</h3>");

			makeSubList.append(makeSubLi);	
			if(item.supportType[1] === "Online_Chat"){			
				for(n in item){
					var createPInner = $("<p>");
					var createPLast = $("<p>");
					createPInner.html(item[n][0] + " " + item[n][1])	
					makeSubList.append(createPInner).appendTo("#itemList");	
				}
			makeSubList.append(createPLast);
			makeItemLinks(key, createPLast);						
			}	
		}			
	}
//Display Support Form	
	function displaySupportForm() {	
		$("#itemList").empty();
		for (i=0, j=localStorage.length; i<j; i++){
		    var key = localStorage.key(i);
            var item = JSON.parse(localStorage.getItem(key));
			var makeSubList = $("<div></div>").attr("data-role", "collapsible")											

			var makeSubLi = $("<h3>"+ item.firstn[1] + " " + item.lastn[1] + "</h3>");

			makeSubList.append(makeSubLi);	
			if(item.supportType[1] === "Support_Form"){			
				for(n in item){
					var createPInner = $("<p>");
					var createPLast = $("<p>");
					createPInner.html(item[n][0] + " " + item[n][1])	
					makeSubList.append(createPInner).appendTo("#itemList");	
				}
			makeSubList.append(createPLast);
			makeItemLinks(key, createPLast);						
			}	
		}			
	}	
	
//Display Sales Inquiry	
	function displaySalesInquiry() {	
		$("#itemList").empty();
		for (i=0, j=localStorage.length; i<j; i++){
		    var key = localStorage.key(i);
            var item = JSON.parse(localStorage.getItem(key));
			var makeSubList = $("<div></div>").attr("data-role", "collapsible")											

			var makeSubLi = $("<h3>"+ item.firstn[1] + " " + item.lastn[1] + "</h3>");

			makeSubList.append(makeSubLi);	
			if(item.supportType[1] === "Sales_Inquiry"){		
				for(n in item){
					var createPInner = $("<p>");
					var createPLast = $("<p>");
					createPInner.html(item[n][0] + " " + item[n][1])	
					makeSubList.append(createPInner).appendTo("#itemList");	
				}
			makeSubList.append(createPLast);
			makeItemLinks(key, createPLast);						
			}	
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
									   .attr("id", key)
		createDeleteLink.on("click", deleteTicket);	 
		createDeleteLink.html("Delete Ticket");
		createPLast.append(createDeleteLink);
	};	
	
//Display Link is pressed				
	var displayD = function(){
		$("#itemList").empty();
		
		if(localStorage.length === 0){
			alert("No Support Tickets Entered; will auto-populate Ticket entry");
			autoFillTicket();
		}
		
		for (i=0, j=localStorage.length; i<j; i++){
		    var key = localStorage.key(i);
            var item = JSON.parse(localStorage.getItem(key));
			var makeSubList = $("<div></div>").attr("data-role", "collapsible")
											  .attr("id", "collapsibles");											

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
	
//Edit Link Displays
	function editTicket(){
		var value = localStorage.getItem($(this).attr("id"));
console.log(value) //object of all ticket data
console.log($(this).attr("id")) //id only
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
		
		localStorage.removeItem($(this).attr("id"));  //Deletes this Ticket you've edited, and is ready to re-save as new ID & ticket
		
		$("#comments").val(item.comments[1]);		
		var editButton = $("#submit");
		$("#submit").val("DONE EDITING");
		editButton.key = $(this).attr("id");	
		$("#submit").button('refresh');
		return;
		editButton.on("click", storeData(value));
	};	

//Delete Link Displays
	function deleteTicket(){
		var value = localStorage.getItem($(this).attr("id"));
		var conf = confirm("Are you sure you want to delete this Ticket?");
		
		if(conf){
			localStorage.removeItem($(this).attr("id"));
			alert("Ticket Deleted");

//			$( "#itemList" ).children().trigger( "collapse" );
//			$( ".selector" ).collapsibleset("refresh");
					
			displayD();
		}else{
			alert("Cancelled");
		}
	};	
	
//storeData Submit Button is pressed	
	var storeData = function(data){
		console.log(data);

			var id	= Math.floor(Math.random()*293842);
			var setObjects = data
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
		displayD();
	
	};	
		
//Checkbox for Waiting for Response
	function getCheckValue(){
		if($("#awaitingResponse").checked){
			responseBox = $("#awaitingResponse").value;
		}else{
			responseBox = "No response needed."
		}
		
	};


	
$('#home').on('pageinit', function(){

});	//home END
			
$('#supportTicket').on('pageinit', function(){

//Validation Tool
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
		
	});	//Validation End


		
//Auto Fill Ticket Link
	var autoFillTicket = function (){
		for(var n in jsonObjects){
			var id	= Math.floor(Math.random()*293842);
			localStorage.setItem(id, JSON.stringify(jsonObjects[n]));
		}		 
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
	
//Form Links
	var displayData = $("#displayData");
	displayData.on("click", displayD);
	
	var clearData = $("#clearStoredData");
	clearData.on("click", clearLocal);
	
});	// supportTicket END

$('#searchResults').on('pageinit', function(){

});	//searchResults END


console.log(localStorage);