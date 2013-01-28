// Timothy Reyes
// SDI 1301
// Assignment: Project 4
/*

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
			
			if (isNaN(email.indexOf("@")) == false && email.indexOf("@") != -1)
				{checkSVerified = true}
			else(checkSVerified = false)
			
			return checkSVerified

		},//checkSymbol Function
		checkPeriod = function (){
			var checkPVerified = undefined
			
			if (isNaN(email.indexOf(".")) == false && email.indexOf(".") != -1)
				{checkPVerified = true}
			else (checkPVerified = false)
			return checkPVerified			
		},//checkPeriod Function
		result = undefined

if (checkSymbol() && checkPeriod() == true && email.indexOf("@") < email.indexOf(".")) {result = true}
	else (result = false);
return result
};

console.log(enterEmailAddress("htiml5@fullsail.edu"));


//FINISHED


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
		var number = numArray[i]
		
		if (numArray[i] <= inputNum) {
			numArray[i]++,
			break; console.log(number))
		//else (numCurrent.toString());
		//console.log(numCurrent); //else turn numCurrent to a string, get first number outof string.		
		}// if statement
}//function



console.log(numberCompare([0, 2, 4, 6 ,8], 5))


//ALMOST HAVE IT!
/*
//Given a string version of a number, such as “42”, return the value as an actual Number data type, such as 42.

var conversion = function (string) {
	if (isNaN(string)) {
		var numberConversion = "This is not a valid number."
	}//if statement
	 else (numberConversion = parseFloat(string))
	
	return numberConversion
}//function



console.log(conversion("123"))

//FINISHED
//Find the number of hours or days difference between two dates.

var enterHoursOrDays = function (firstHour, secHour, whatIsIt) {
	var solution = secHour - firstHour
	var daysOfWeek {
		monday : 1,
		tuesday : 2,
		wednesday : 3,
		thursday : 4,
		friday : 5,
		saturday : 6,
		sunday : 7
	}//object
	var 
	if (whatIsIt = "Hours" || "hrs" || "HRS")
		{console.log(solution + "hrs difference.")}	
		else if {whatIsIt = "Days" || "days"}
		()
}
// I think I need to add loops in, so you will loop first hours with week days.


enterHoursOrDays(12, 24, "hours")


//Format a number to use a specific number of decimal places as for money: 2.1 --> 2.10.


var enterAmount = function (number) {
var numb = number;

var fixedNumber = numb.toFixed(2);
	
	return fixedNumber
}



console.log(enterAmount(456.09876))

//FINISHED
*/

//Find the total value of just the numbers in an array, even if some of the items are not numbers.
var addNumbers = function (array){
var array = array
 var total = 0
 var v = undefined
for (var eachNumber = 0; eachNumber < array.length; eachNumber++) {
v = parseFloat(eachNumber[i]);
          if (!isNaN(v)) total += v; 
        } 


return v
}//function
console.log(addNumbers([1, 2, 3, 4, 5]))