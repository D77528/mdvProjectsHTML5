//opening
/* STRING FUNCTION
concatenation = function (current, neww) {

	var outputStatement = "After graduating with my Mobile Development Degree, I will be going from working on " + current + " to working in " + neww + ".  Exciting times!"
	
	return outputStatement
	
}; // concatenation function

var statement = concatenation(currentJobDuties, newJobDuties)

output(statement);
*/


//ACCESSOR METHOD
var myFamily = {
	children : ["Oliver", "Willow"],
	parents : ["Timothy", "Veronica"],
	needsMoreSleep: "I'll go back to sleep!",
	familyCereal : {
		good : ["Cheerios, Wheaties, Oatmeal"],
		bad : ["Fruity Pebbles", "Chocolate Cheerios", "Cinniman Toast Crunch"]
	},// familyCereal Object
	beginningSentence : function (parent, child1, child2) {
			var sentence = parent + "'s having trouble sleeping.  He is constantly looking at his clock throughout the night waiting to begin a new day.  As soon as he gets up he'll need to get " + child1 + " and " + child2 + " ready for school."
			
		return sentence
		
	}// beginningSentence function	
};// family object
console.log(myFamily.beginningSentence(myFamily.parents[0], myFamily.children[0], myFamily.children[1]));

// END ACCESSOR METHOD



//FUNCTION METHOD
var time = { 
	timothyWakesUp : 7,
	checkingClock : function (timothyWakesUp, timothyNeedsSleep){
	
	var clock = 1;
	
	while(clock < time.timothyWakesUp) {
	console.log("It's " + clock + "AM, not quite " + time.timothyWakesUp + "AM yet; " + timothyNeedsSleep);
	clock++;
}; //while loop
 
return clock

} // checkingClock function
} // time object

console.log("Finally it's " + time.checkingClock(time.timothyWakesUp, myFamily.needsMoreSleep) + "AM, time to get the kids ready for school!");

// END FUNCTION METHOD

console.log(myFamily.parents[0] + "s and " + myFamily.parents[1] + "s children names are " + myFamily.children[0] + " and " + myFamily.children[1] + ".");

//PROCEDURE METHOD

var	handleData = function(myFamily) { // for loop , proedure method

	for (var i = 0; i < myFamily.children.length; i++){
		var child = myFamily.children[i];
		console.log("Hello " + child + "!");
		}
	}; //for loop
	
handleData(myFamily);

//END PROCEDURE METHOD

//MUTATOR METHOD

var breakfastChoices = {
	
	cereal : 1,
	eggos : 1,
	oatmeal : 1,
	choices : function(){
		var totalBreakfast = this.cereal + this.eggos + this.oatmeal; 
				return totalBreakfast;
	},//function
	foundMoreCereal : function(newCereal){
		this.cereal = newCereal;
	}
	
};//object
console.log("Okay kids, we only have " + breakfastChoices.choices() + " choices for breakfast this morning.");

breakfastChoices.foundMoreCereal(2);

console.log("Nevermind, I found Fruity Pebbles in the cupboard!  We have " + breakfastChoices.choices() + " choices now!");

//END MUTATOR METHOD

//JSON DATA, BOOLEAN, ENDING CODE

console.log("Let's get " + myFamily.children[0] + " and " + myFamily.children[1] + " ready for school this morning.");

var oliverReadyForSchool = function (brushTeeth, getChanged, haveBreakfast){
				if (brushTeeth && getChanged && haveBreakfast === true) {
					console.log("I am ready to go dad!");
				}
				else (console.log("Not ready yet..."))		
};				
oliverReadyForSchool(morningRoutine.childrenTasks.oliverTask.brushedTeeth,morningRoutine.childrenTasks.oliverTask.gotChanged, morningRoutine.childrenTasks.oliverTask.ateBreakfast);

var willowReadyForSchool = function (brushTeeth, getChanged, haveBreakfast){
				if (brushTeeth && getChanged && haveBreakfast === true) {
					console.log("I am ready to go dad!");
				}
				else (console.log("Not ready yet..."))		
};				
willowReadyForSchool(morningRoutine.childrenTasks.willowTask.brushedTeeth,morningRoutine.childrenTasks.willowTask.gotChanged, morningRoutine.childrenTasks.willowTask.ateBreakfast);


var readyToGo = function (readyOliver, readyWillow){
				if (readyOliver === true && readyWillow === true) {
					console.log("Okay children, let's go to School!");
					}
					else (console.log("We can't leave until you finish!"))

}
readyToGo(oliverReadyForSchool(morningRoutine.childrenTasks.oliverTask.brushedTeeth,morningRoutine.childrenTasks.oliverTask.gotChanged, morningRoutine.childrenTasks.oliverTask.ateBreakfast), willowReadyForSchool(morningRoutine.childrenTasks.willowTask.brushedTeeth,morningRoutine.childrenTasks.willowTask.gotChanged, morningRoutine.childrenTasks.willowTask.ateBreakfast))
