$(document).on("pageinit"){

	var supportTypeList = ["--> Choose Support Type", "Call", "Email", "Online_Chat", "Support_Form", "Sales_Inquiry"];
	var responseBox = "No";
	var endUserValue;
	var errorM = element("anyErrors");
	



	$('#home').on('pageinit', function(){
		//code needed for home page goes here
		
		/*
		- Search Field
		- Search Button
		- 
		*/
	});	


		
	$('#supportTicket').on('pageinit', function(){
	
			var onlyForm = $('#onlyForm');
			    onlyForm.validate({
				invalidHandler: function(form, validator) {
				},
				submitHandler: function() {
			var data = onlyForm.serializeArray();
				storeData(data);
			}
		});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

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


};