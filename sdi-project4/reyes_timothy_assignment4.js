// Timothy Reyes
// SDI 1301
// Assignment: Project 4


//Does a string follow a 123-456-7890 pattern like a phone number?


var enterPhoneNumber = function(number){
	var start = number.substring(0,3),
		middleN = number.indexOf("-")+1,
		endN = number.lastIndexOf("-")+1
		// parenthStart = number.substring(1,4),
		// parenthMiddleN = number.indexOf(")")+1 || number.indexOf(") ")+1

	var phoneNumber = {
		number : number,
		start : start + "-", // || "(" + parenthStart + ")",
		middle : number.substring(middleN,7) + "-", // || number.substring(parenthMiddleN,8),
		end : number.substring(endN,12) //	 || number.substring(endN,13)

	}
	//		console.log("(" + parenthStart + ")")
	var givenNumber = phoneNumber.start + phoneNumber.middle + phoneNumber.end

	if (givenNumber.length == number.length
	){console.log(true);
		
	} else (console.log(false));

	
return phoneNumber
};//function
enterPhoneNumber("249-585-0055");

//END PROBLEM 1 _ IF HAVE TIME PLEASE FINISH PARENTHSTART, it's for Parenthesys (444), if no time take it out and it'll work.



//Does a string follow an aaa@bbb.ccc pattern like an email address?


enterEmailAddress = function (email){
	var checkSymbol = function (){
			var checkSVerified = undefined
			
			if (isNaN(email.indexOf("@")) == false && isNaN(email.indexOf("@")) != -1)
				{checkSVerified = true}
			else(checkSVerified = false)

			return checkSVerified

		},//checkSymbol Function
		checkPeriod = function (){
			var checkPVerified = undefined
			
			if (isNaN(email.indexOf(".")) == false && isNaN(email.indexOf(".")) != -1)
				{checkPVerified = true}
			else (checkPVerified = false)
			
			return checkPVerified			
		},//checkPeriod Function
		result = undefined

if (checkSymbol() && checkPeriod() == true) {result = true}
	else (result = false);
return result
};

	email.indexOf("@"),
		checkPeriod = email.indexOf("."),
		result = undefined
		
	var checkEmail = {
		email : email,
		verifiedSymbol : checkSymbol in email,
		verifiedPeriod : checkPeriod in email
		
	}
	console.log(checkEmail)
	if (checkSymbol in email && checkPeriod in email){
			result = true
		
	} else (result = false)
	console.log(checkPeriod)
	//return result
};// function


console.log(enterEmailAddress("htiml5@fullsail.edu"));




//Title-case a string (split into words, then uppercase the first letter of each word).

var upperCaseFunction = function (string) {
	var totalChara = string.length
	var newWord = string.indexOf(" ")+1
	var firstWord = string.substring(0,newWord)
	var secondWord = string.substring()
	var sample = string.charAt(5)
	var sample1 = string.lastIndexOf(" ")
	
	//while (newWord < totalChara) {
	//firstWord ++}
	//	newWord++
	//	
	//}
	//for (words = 0; words < string.length; words++) {
	//	var wordName = string[words]
	//	console.log(string)
	//}


//return newWord	
}
console.log(upperCaseFunction("Hello there my name is Timothy ."))


//Is the string a URL (Does it start with http:// or https://)?

var validWebsite = function (websiteCheck){
	var websiteVerified = undefined
	if (websiteCheck.substring(0, 7) == "http://"){websiteVerified = true}
		else if (websiteCheck.substring(0, 8) == "https://"){websiteVerified = true}
		else (websiteVerified = false)		
		
		return websiteVerified
	}//function statement
	

console.log(validWebsite("http://www.compix.tv"))

//END GOOD TO GO

//Find the smallest value in an array than is greater than a given number.

var numberCompare = function (numArray, inputNum) {
	for (var i = 0; i < numArray.length; i++){
		
		var numCurrent = numArray[i];
		if (numArray[i] <= inputNum) {
			numArray[i]++}
			else (console.log(numCurrent))
			
		}// if statement
		
}//function



numberCompare([0, 2, 4, 6 ,8], 5)


//ALMOST HAVE IT!
