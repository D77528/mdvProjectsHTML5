//opening
/* STRING FUNCTION
concatenation = function (current, neww) {

	var outputStatement = "After graduating with my Mobile Development Degree, I will be going from working on " + current + " to working in " + neww + ".  Exciting times!"
	
	return outputStatement
	
}; // concatenation function

var statement = concatenation(currentJobDuties, newJobDuties)

output(statement);
*/
var parent0 = family.parents[0].name,
	child0 = family.children[0].name,
	child1 = family.children[1].name;
//String Function
var beginningSentence = function (parent, child1, child2) {		
	var sentence = parent + "'s having trouble sleeping.  He is constantly looking at his clock throughout the night waiting to begin a new day.  As soon as he gets up he'll need to get " + child1 + " and " + child2 + " ready for school."
	return sentence
	
}// beginningSentence function

var statement = beginningSentence(parent0, child0, child1)
console.log(statement);


//beginning numbers: number argument, property number, while loop, return number, math
checkingClock = function (timeToLeave){
	
	var clock = 1;
	
	while(clock < family.parents[0].wakesUp) {
	console.log("It's " + clock + "AM, not quite " + family.parents[0].wakesUp + "AM yet; I'll go back to sleep.");
	clock++;
}; //while loop
 
return clock

}; // checkingClock function

console.log("Finally it's " + checkingClock() + "AM, time to get the kids ready for school!");

// end numbers section


console.log(family.parents[0].name + "'s children names are " + family.children[0].name + " and " + family.children[1].name + ".");

var handleData = function(family) {
//	console.log(family);
	for (var i = 0; i < family.children.length; i++){
		var child = family.children[i];
		console.log("Hello " + child.name + "!");
		
	}; //for loop
	
};
handleData(family);

console.log("Let's get " + family.parents[0].name + "'s children ready for school this morning.");

var readyChild0 = 			family.children[0].readyForSchool(family.children[0].brushedTeeth,family.children[0].gotChanged, family.children[0].ateBreakfast),	
	readyChild1 = family.children[1].readyForSchool(family.children[1].brushedTeeth,family.children[1].gotChanged, family.children[1].ateBreakfast)


console.log(readyChild0);