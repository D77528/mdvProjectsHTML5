// Timothy Reyes
// SDI 1301
// Assignment: Project 4

//Does a string follow a 123-456-7890 pattern like a phone number?

var myLibrary = function() {


var enterPhoneNumber = function(number){
	var start = number.substring(0,3),
		middleN = number.indexOf("-")+1,
		endN = number.lastIndexOf("-")+1

	var phoneNumber = {
			number : number,
			start : start + "-",
			middle : number.substring(middleN,7) +  "-",
			end : number.substring(endN,12)
		}
	var givenNumber = phoneNumber.start + phoneNumber.middle + phoneNumber.end

	if (givenNumber.length == number.length){
		return true
		} 
	else {
		return false
		};
};

//Does a string follow an aaa@bbb.ccc pattern like an email address?

var enterEmailAddress = function (email){
	var result = undefined
	var checkSymbol = function (){
			var checkSVerified = undefined
		
			if (isNaN(email.indexOf("@")) == false && email.indexOf("@") != -1){
				checkSVerified = true}
			else(checkSVerified = false)
					
			return checkSVerified

	},
		checkPeriod = function (){
			var checkPVerified = undefined
			
			if (isNaN(email.indexOf(".")) == false && email.indexOf(".") != -1){
				checkPVerified = true}
			else (checkPVerified = false)
		
			return checkPVerified			
	}	
	if (checkSymbol() && checkPeriod() == true && email.indexOf("@") < email.indexOf(".")) {
		result = true
	}	else (result = false)
		return result
};


//Is the string a URL (Does it start with http:// or https://)?

var validWebsite = function (websiteCheck){
	var websiteVerified = undefined
	
	if (websiteCheck.substring(0, 7) == "http://"){
		websiteVerified = true}
		else if (websiteCheck.substring(0, 8) == "https://"){
			websiteVerified = true}
		else (websiteVerified = false)		
		
		return websiteVerified
	}


//Find the smallest value in an array than is greater than a given number.

var numberCompare = function (numArray, inputNum) {
	
	for (var i = 0; i < numArray.length; i++){
		var number = numArray[i]
		
		if (numArray[i] >= inputNum) {
			numArray[i]++
			
		
		return number;	
		};
	};
};


//Given a string version of a number, such as “42”, return the value as an actual Number data type, such as 42.

var conversion = function (string) {
	if (isNaN(string)) {
		var numberConversion = "This is not a valid number."
	}
	 else (numberConversion = parseFloat(string))
	
	return numberConversion
};


//Format a number to use a specific number of decimal places as for money: 2.1 --> 2.10.

var enterAmount = function (number) {
	var numb = number,
		fixedNumber = numb.toFixed(2);
	
	return fixedNumber
};

	return {
		"enterPhoneNumber" : enterPhoneNumber,
		"enterEmailAddress" : enterEmailAddress,
		"validWebsite" : validWebsite,
		"numberCompare" : numberCompare,
		"conversion" : conversion,
		"enterAmount" : enterAmount
	};
};//main function

var newLib = new myLibrary();

console.log(newLib.enterPhoneNumber("949.421.7296"));
console.log(newLib.enterEmailAddress("htiml5@fullsail.edu"));
console.log(newLib.validWebsite("http://www.compix.tv"));
console.log(newLib.numberCompare([0, 2, 4, 6 ,8], 1));
console.log(newLib.conversion("123"));
console.log(newLib.enterAmount(456.09876));