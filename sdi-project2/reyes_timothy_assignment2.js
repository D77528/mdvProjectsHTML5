// Timothy Reyes
// SDI 1301
// Assignment: Project 2



var boredOfJob = true,
	timeToGoHome = 18, //military time
	yearsWorkedAtCompix = 10,
	currentJobDuties = ["Online Support Chat", "Phone Support", "Email Support", "Forum Support"],
	currentJobHours = [1, 3, 3, 1]
	newJobDuties = ["Research & Development"],
	newJobHours = 8,
	workYesterday = true,
	workToday = true,
	workSaturday = false

var output = function(message) {console.log(message); };

//Procedure


var storyIntro = function(name, yearsWorked, boredOfJob) {

output(name + " has worked at Compix for the past " + yearsWorked + ", he is starting to look outside his bubble and embark on a new journey into Mobile Development.");

if (boredOfJob == true){
output("He's starting to get bored of his job, and here is an example why.")
} //if statement 
	else {
		output("I currently love my job, and I don't want to embark on Mobile Development at this time.");	
	}; //else statment

}; //storyIntro function
storyIntro("Timothy Reyes", yearsWorkedAtCompix, boredOfJob);


//Boolean Function


var jobActivities = function(workY, workT, workS) {

	var didHeWork = ((workY && workT) || !workS)
	
	return didHeWork;

}; //jobActivities function	

var lastStatement = function (didHeWork) {
	
	if (didHeWork === true) {
	output("It is " + didHeWork + " that he work yesterday and today.");
	}
	else (output("It's Saturday, that means I don't work and I can code all day!"));

}; // lastStatement function


var didHeWorkValue = jobActivities(workYesterday, workToday, workSaturday)

lastStatement(didHeWorkValue);

output("Even though it is " + didHeWorkValue + ", I can't wait to get home and code!");



//Number Function

output("I love my job, but I still find myself looking at the clock a bit too often!");

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
