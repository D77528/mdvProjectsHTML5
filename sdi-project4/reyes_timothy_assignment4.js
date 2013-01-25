// Timothy Reyes
// SDI 1301
// Assignment: Project 4


//Does a string follow a 123-456-7890 pattern like a phone number?


var enterPhoneNumber = function(number){
	var start = number.substring(0,3),
		middleN = number.indexOf("-")+1,
		endN = number.lastIndexOf("-")+1,
		parenthStart = number.substring(1,4),
		parenthMiddleN = number.indexOf(")")+1 || number.indexOf(") ")+1

	var phoneNumber = {
		number : number,
		start : start + "-" || "(" + parenthStart + ")",
		middle : number.substring(middleN,7) + "-" || number.substring(parenthMiddleN,8),
		end : number.substring(endN,12)	 || number.substring(endN,13)

	}
			console.log("(" + parenthStart + ")")
	var givenNumber = phoneNumber.start + phoneNumber.middle + phoneNumber.end

	if (givenNumber.length == number.length
	){console.log(true);
		
	} else (console.log(false));

	
return phoneNumber
};//function
enterPhoneNumber("(249)585-0055");

//END PROBLEM 1 _ IF HAVE TIME PLEASE FINISH PARENTHSTART, it's for Parenthesys (444), if no time take it out and it'll work.



*/