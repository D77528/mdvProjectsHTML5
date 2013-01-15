// Timothy Reyes
// SDI 1301
// Assignment: Project 2



var boredOfJob = true,
	timeToGoHome = 18, //military time
	jobDuties = ["Online Support Chat", "Phone Support", "Email Support", "Forum Support"],
	jobTotals = [30, 40, 20, 50],
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
storyIntro("Timothy Reyes", "10 years", boredOfJob);


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


/*
for (var jobTotal = 0; jobTotal < jobTotals.length; jobTotal++) {

	var jobDuty = jobDuties[jobTotal],
		jobPerTotal = jobTotals[jobTotal];
console.log("Starting to swab the " + jobDuty + " for " + jobPerTotal + " minutes.");
};
*/

