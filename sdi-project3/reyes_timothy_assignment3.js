//opening
/* STRING FUNCTION
concatenation = function (current, neww) {

	var outputStatement = "After graduating with my Mobile Development Degree, I will be going from working on " + current + " to working in " + neww + ".  Exciting times!"
	
	return outputStatement
	
}; // concatenation function

var statement = concatenation(currentJobDuties, newJobDuties)

output(statement);
*/
var childOliver = family.children[0],
	childWillow = family.children[1],
	parentTimothy = family.parents[0]



//String Function

var beginningSentence = function (parent, child1, child2) {		
	var sentence = parent + "'s having trouble sleeping.  He is constantly looking at his clock throughout the night waiting to begin a new day.  As soon as he gets up he'll need to get " + child1 + " and " + child2 + " ready for school."
	return sentence
	
}// beginningSentence function

var statement = beginningSentence(parentTimothy.name, childOliver.name, childWillow.name)
console.log(statement);


//beginning numbers: number argument, property number, while loop, return number, math
var mainClock = checkingClock = function (timeToLeave){
	
	var clock = 1;
	
	while(clock < parentTimothy.wakesUp) {
	console.log("It's " + clock + "AM, not quite " + parentTimothy.wakesUp + "AM yet; I'll go back to sleep.");
	clock++;
}; //while loop
 
return clock

}; // checkingClock function

console.log("Finally it's " + checkingClock() + "AM, time to get the kids ready for school!");

// end numbers section


console.log(parentTimothy.name + "'s children names are " + childOliver.name + " and " + childWillow.name + ".");


var handleData = function(family) { // for loop , proedure method
//	console.log(family);
	for (var i = 0; i < family.children.length; i++){
		var child = family.children[i];
		console.log("Hello " + child.name + "!");
		
	}; //for loop
	
};
handleData(family);



// booliean : method function
console.log("Let's get " + family.parents[0].name + "'s children ready for school this morning.");

var OliverReadyForSchool = function (brushTeeth, getChanged, haveBreakfast){
				if (brushTeeth && getChanged && haveBreakfast === true) {
					console.log("I am ready to go dad!");
				}
				else (console.log("Not ready yet..."))		
};				
console.log(OliverReadyForSchool(childOliver.brushedTeeth,childOliver.gotChanged, childOliver.ateBreakfast));

var WillowReadyForSchool = function (brushTeeth, getChanged, haveBreakfast){
				if (brushTeeth && getChanged && haveBreakfast === true) {
					console.log("I am ready to go dad!");
				}
				else (console.log("Not ready yet..."))		
};				
console.log(WillowReadyForSchool(childWillow.brushedTeeth,childWillow.gotChanged, childWillow.ateBreakfast));

var readyToGo = function (readyOliver, readyWillow){
				if (readyOliver === true && readyWillow === true) {
					console.log("Okay children, let's go to School!");
					}
					else (console.log("We can't leave until you finish!"))

}
var readyToGo = readyToGo(OliverReadyForSchool(childOliver.brushedTeeth,childOliver.gotChanged, childOliver.ateBreakfast) === true, WillowReadyForSchool(childWillow.brushedTeeth,childWillow.gotChanged, childWillow.ateBreakfast))
