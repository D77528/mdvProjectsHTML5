// Timothy Reyes
// SDI 1301
// Assignment: Project 2



var boredOfJob = true,
	timeToGoHome = 6,
	jobDuties = ["Online Support Chat", "Phone Support", "Email Support", "Forum Support"],
	jobTotals = [30, 40, 20, 50],
	workYesterday = true,
	workToday = true,
	workSaturday = false
//Procedure


var storyIntro = function(name, yearsWorked, boredOfJob) {

console.log(name + " has worked at Compix for the past " + yearsWorked + ", he is starting to look outside his bubble and embark on a new journey into Mobile Development.");

if (boredOfJob == true){
console.log("He's starting to get bored of his job, and here is an example why.")
} //if statement 
	else {
		console.log("I currently love my job, and I don't want to embark on Mobile Development at this time.");	
	}; //else statment

}; //storyIntro function
storyIntro("Timothy Reyes", "10 years", boredOfJob);


//Boolean Function

var jobActivities = function(yesterdayJob, yesterdayTotal, todayJob, todayTotal) {
	var whichDayToWork = ((workYesterday && workToday) || !workSaturday)
	
	console.log("It is " + whichDayToWork + " that he work yesterday and today.");
	
	if (whichDayToWork === true) {
		console.log("He had " + yesterdayTotal + " " + yesterdayJob + " yesterday, and today he had " +  todayTotal + " " + todayJob + ".");
	}
	else (console.log("It's Saturday, that means no work!"));
	

return whichDayToWork;

}; //jobActivities function	

jobActivities(jobDuties[0], jobTotals[0], jobDuties [1], jobTotals[1]);

console.log(jobActivities);



//Number Function

console.log("I love my job, but I still find myself looking at the clock a bit too often!");

checkingClock = function (timeToLeave){
	
	var clock = 1;
while(clock < 6) {
	console.log("It's " + clock + "PM.  I am checking the clock; not ready to leave yet!");
	clock++;
}; //while loop

console.log("Finally it's " + timeToLeave + "PM, time to go home!");
 
return clock;

}; // checkingClock function

checkingClock(timeToGoHome);
console.log("Now that the time is " + checkingClock() + "PM, it's not only time for home, it's time to code!");
/*
for (var jobTotal = 0; jobTotal < jobTotals.length; jobTotal++) {

	var jobDuty = jobDuties[jobTotal],
		jobPerTotal = jobTotals[jobTotal];
console.log("Starting to swab the " + jobDuty + " for " + jobPerTotal + " minutes.");
};
*/

