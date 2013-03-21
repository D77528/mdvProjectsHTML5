$(document).on('pageinit', function(){
		
	$('#home').on('pageinit', function(){

	
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
	function makeItemLinks(key, createPInner){				
		var breakTag = $("<br />");	
		var createEditLink = $("<a>").attr("href", "#oops404")		 
		createEditLink.html("<br />" + "Edit Ticket")
		createPInner.append(createEditLink);	
		createPInner.append(breakTag);
		
		var createDeleteLink = $("<a>").attr("href", "#oops404")
		createDeleteLink.html("Delete Text");
		createPInner.append(createDeleteLink);
	};
//Display Link is pressed				
	var displayD = function(){

		if(localStorage.length === 0){
			alert("No Support Tickets Entered; will auto-populate Ticket entry");
			autoFillTicket();
		}
		for (var key in jsonObjects){
			var obj = jsonObjects[key];
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
//Clear Local is pressed						
	var clearLocal = function(){
		if(localStorage.length === 0){
			alert("No Support Tickets found")
			
		}else{
			localStorage.clear();
			alert("All Support Tickets deleted");
			window.location.reload();
		}
	
	};
//Showdata Display Data link is pressed	
	var showData = function(data){
		var setObjects = data
		localStorage.setItem("setObjects", JSON.stringify(setObjects));
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
		for (var key in jsonObjects){
			var obj = jsonObjects[key];
			var HTMLDiv = $("<div>").attr("data-role", "collapsible")
									.attr("data-collapsed", "true")
									.attr("id", "dataItems");
			var createH3 = $("<h3>");
			var createP = $("<p>");
			createH3.html(obj.firstn[1] + " " + obj.lastn[1])
			HTMLDiv.append(createH3);
			
			for(n in obj){
				if(obj.response[1] === "Yes"){
					var jqueryPage = $("#contentSearchResults")
					var createPInner = $("<p>");
					createPInner.html(obj[n][0] + " " + obj[n][1])
					HTMLDiv.append(createPInner);				
					jqueryPage.append(HTMLDiv);	
				}	
			}
//			makeItemLinks(jsonObjects[key][n], createPInner);	
		}
	}
//Display Calls	
	function displayCalls() {	
		for (var key in jsonObjects){
			var obj = jsonObjects[key];
			var HTMLDiv = $("<div>").attr("data-role", "collapsible")
									.attr("data-collapsed", "true")
									.attr("id", "dataItems");
			var createH3 = $("<h3>");
			var createP = $("<p>");
			createH3.html(obj.firstn[1] + " " + obj.lastn[1])
			HTMLDiv.append(createH3);
			
			for(n in obj){
				if(obj.supportType[1] === "Call"){
					var jqueryPage = $("#contentSearchResults")
					var createPInner = $("<p>");
					createPInner.html(obj[n][0] + " " + obj[n][1])
					HTMLDiv.append(createPInner);				
					jqueryPage.append(HTMLDiv);	
				}	
			}
//			makeItemLinks(jsonObjects[key][n], createPInner);	
		}
	}
	//Display Emails	
	function displayEmails() {	
		for (var key in jsonObjects){
			var obj = jsonObjects[key];
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
					var createPInner = $("<p>");
					createPInner.html(obj[n][0] + " " + obj[n][1])
					HTMLDiv.append(createPInner);				
					jqueryPage.append(HTMLDiv);	
				}	
			}
//			makeItemLinks(jsonObjects[key][n], createPInner);	
		}
	}
	
//Display OnlineChat	
	function displayOnlineChats() {	
		for (var key in jsonObjects){
			var obj = jsonObjects[key];
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
					var createPInner = $("<p>");
					createPInner.html(obj[n][0] + " " + obj[n][1])
					HTMLDiv.append(createPInner);				
					jqueryPage.append(HTMLDiv);	
				}	
			}
//			makeItemLinks(jsonObjects[key][n], createPInner);	
		}
	}
	
//Display Support Form	
	function displaySupportForm() {	
		for (var key in jsonObjects){
			var obj = jsonObjects[key];
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
					var createPInner = $("<p>");
					createPInner.html(obj[n][0] + " " + obj[n][1])
					HTMLDiv.append(createPInner);				
					jqueryPage.append(HTMLDiv);	
				}	
			}
//			makeItemLinks(jsonObjects[key][n], createPInner);	
		}
	}
	
//Display Sales Inquiry	
	function displaySalesInquiry() {	
		for (var key in jsonObjects){
			var obj = jsonObjects[key];
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
					var createPInner = $("<p>");
					createPInner.html(obj[n][0] + " " + obj[n][1])
					HTMLDiv.append(createPInner);				
					jqueryPage.append(HTMLDiv);	
				}	
			}
//			makeItemLinks(jsonObjects[key][n], createPInner);	
		}
	}
//Info Section	
//Display Browse Date	
	function displayDate() {	
		for (var key in jsonObjects){
			var obj = jsonObjects[key];
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
					var createPInner = $("<p>");
					createH3.html(obj.date[1] + ": " + obj.firstn[1] + " " + obj.lastn[1])
					createPInner.html(obj[n][0] + " " + obj[n][1])
					HTMLDiv.append(createPInner);				
					jqueryPage.append(HTMLDiv);	
					
					
				}	
			}
//			makeItemLinks(jsonObjects[key][n], createPInner);	
		}
	}	
//Search Feature	
//Display Search Results

	function displaySearch() {	
	
		var term = $("#searchField").val();
		for (var key in jsonObjects){
			var obj = jsonObjects[key];
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
					var createPInner = $("<p>");	
					jqueryPage.append(HTMLDiv);	
					
					for (q in obj){
						var createPInner = $("<p>");
						createPInner.html(obj[q][0] + " " + obj[q][1])
						HTMLDiv.append(createPInner);
						createH3.html(obj.firstn[1] + " " + obj.lastn[1])
					}					
				}	
			}
//			makeItemLinks(jsonObjects[key][n], createPInner);	
		}
		
	}	
//Form Links
	var displayData = $("#displayData");
	displayData.on("click", displayD);
	
	var clearData = $("#clearStoredData");
	clearData.on("click", clearLocal);



});
console.log(localStorage);