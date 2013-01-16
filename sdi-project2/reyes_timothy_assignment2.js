// Timothy Reyes
// SDI 1301
// Assignment: Project 2

//Variables

var wantsSomethingNew = true,
	timeToGoHome = 18, //military time
	yearsWorkedAtCompix = 10,
	currentJobDuties = ["Online Support Chat", "Phone Support", "Email Support", "Forum Support"],
	currentJobHours = [1, 3, 3, 1],
	newJobDuties = ["Research & Development"],
	newJobHours = 8,
	workYesterday = true,
	workToday = true,
	workSaturday = false
;
var output = function(message) {console.log(message); };


//Procedure

var storyIntro = function(name, yearsWorked, wantsSomethingNew) {

output(name + " has worked in Support at Compix for the past " + yearsWorked + " years, he is starting to look outside his bubble and embark on a new journey into Mobile Development.");

if (wantsSomethingNew == true){
output("He is very much looking forward for new opportunities in Compix as a developer, but until the time arrives, here is a typical day at Compix.");
} //if statement 
	else {
		output("I currently love Support at Compix; I don't want to embark on new opportunities at this time.");
	}; //else statment

}; //storyIntro function
storyIntro("Timothy Reyes", yearsWorkedAtCompix, wantsSomethingNew);


//Boolean Function

var jobActivities = function(workYesterday, workToday, workSat) {

	var didHeWork = workSat || (workYesterday && workToday)
	
	return didHeWork;

}; //jobActivities function	

var lastStatement = function (didHeWork) {
	
	if (didHeWork === true) {
	output("It is " + didHeWork + " that he worked today and/or yesterday.");
	}
	else (output("It's Saturday, that means he doesn't work and he can code all day!"));

}; // lastStatement function


var didHeWorkValue = jobActivities(workYesterday, workToday, workSaturday)

lastStatement(didHeWorkValue);

output("Even though it is " + didHeWorkValue + ", he can't wait to code either way!");



//Number Function

output("Tim loves his job, but he still finds himself looking at the clock a bit too often!");

checkingClock = function (timeToLeave){
	
	var clock = 9;
	
	while(clock < 18) {
	output("It's " + clock + " hundred hours. I am checking the clock; not ready to leave yet!");
	clock++;
}; //while loop

	output("Finally it's " + timeToLeave + " hundred hours, time to go home!");
 
return clock

}; // checkingClock function

var timeWellSpent = checkingClock(timeToGoHome);

output("I worked " + timeWellSpent + " hundred hours and I feel exhausted.")


// String Function

concatenation = function (current, neww) {

	var outputStatement = "After graduating with my Mobile Development Degree, I will be going from working on " + current + " to working in " + neww + ".  Exciting times!"
	
	return outputStatement
	
}; // concatenation function

var statement = concatenation(currentJobDuties, newJobDuties)

output(statement);


//Array Function

var dailyDuties = function (currentJobDuties, currentJobHours) {

	for (var currentHour = 0; currentHour < currentJobDuties.length; currentHour++) {
		var currentJobDuty = currentJobDuties[currentHour],
	    	currentJobHour = currentJobHours[currentHour]
	    	output("Today I have worked with " + currentJobDuty + " for " + currentJobHour + " hours, time to move onto something else.");
	
	 };//for statement
	return currentHour;
}; //dailyDuties function
var sentence = dailyDuties(currentJobDuties, currentJobHours)
output("After my " + sentence + " job duties, I am finished with my daily tasks... Now, back to coding!");


//End
