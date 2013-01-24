// Timothy Reyes
// SDI 1301
// Assignment: Project 3



//ACCESSOR METHOD

var myFamily = {
	children : ["Oliver", "Willow"],
	childrenString : "Oliver and Willow",
	parents : ["Timothy", "Veronica"],
	needsMoreSleep: "I'll go back to sleep!",
	beginningSentence : function (parent, child1, child2) {
		var sentence = parent + "'s having trouble sleeping.  He is constantly looking at his clock throughout the night waiting to begin a new day.  As soon as he gets up he'll need to get " + child1 + " and " + child2 + " ready for school."
			
		return sentence
		}// beginningSentence function	
};// myFamily object

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
		}; //nested while loop
 
return clock
	} // checkingClock function
}; // time object

console.log("Finally it's " + time.checkingClock(time.timothyWakesUp, myFamily.needsMoreSleep) + "AM, time to get the kids ready for school!");

//END FUNCTION METHOD



//PROCEDURE METHOD

var	kidsGreeting = {
	intro : myFamily.parents[0] + "s and " + myFamily.parents[1] + "s children names are " + myFamily.children[0] + " and " + myFamily.children[1] + ".",
	greeting : "Hello",
	kidsTotal : function(myFamily) {
	
	for (var i = 0; i < myFamily.children.length; i++){
		var child = myFamily.children[i];
		console.log("Hello " + child + "!");
		} // for loop
		return child
	} //kidsTotal function
} // object
console.log(kidsGreeting.intro)
kidsGreeting.kidsTotal(myFamily);

//END PROCEDURE METHOD


//MUTATOR METHOD

var breakfastChoices = {
	cereal : 1,
	eggos : 1,
	oatmeal : 1,
	choices : function(){
		var totalBreakfast = this.cereal + this.eggos + this.oatmeal; 
		return totalBreakfast;
	},//choice function
	foundMoreCereal : function(newCereal, kidNames){
		this.cereal = newCereal;
		return kidNames
	}//foundMoreCereal function
};//object

console.log(breakfastChoices.foundMoreCereal(2, myFamily.childrenString) + " , we only have " + breakfastChoices.choices() + " choices for breakfast this morning.");


console.log("Nevermind, I found Fruity Pebbles in the cupboard!  We have " + breakfastChoices.choices() + " choices now!");

//END MUTATOR METHOD


//FUNCTION, JSON DATA, BOOLEAN

console.log("Let's get " + myFamily.children[0] + " and " + myFamily.children[1] + " ready for school this morning.");

var getKidsReadyForSchool = {
	oliverReadyForSchool : function (brushTeeth, getChanged, haveBreakfast){
		var oliverCurrentValue = undefined
				if (brushTeeth && getChanged && haveBreakfast === true) {
					oliverCurrentValue = true,
					console.log("Oliver's ready to go dad!");
				}// if statement
				else OliverCurrentValue = false,
				(console.log("Not ready yet..."));	
				return oliverCurrentValue
	},//oliverReadyForSchool function			
	willowReadyForSchool : function (brushTeeth, getChanged, haveBreakfast){
		var willowCurrentValue = undefined
				if (brushTeeth && getChanged && haveBreakfast === true) { 
					willowCurrentValue = true,
					console.log("Willow's ready to go dad!");
				}//if statement
				else willowCurrentValue = false,
				(console.log("Not ready yet..."))
				return willowCurrentValue
	}//willowReadyForSchool function				
}; //getKidsReadyForSchool Object

var readyToGo = function (readyWillow, readyOliver){
				if (readyWillow == true && readyOliver == true) {
					console.log("Okay children, let's go to School!");
					}
					else (console.log("We can't leave until you finish!"))

}//readyToGo Function

readyToGo(getKidsReadyForSchool.willowReadyForSchool(morningRoutine.childrenTasks.willowTask.brushedTeeth,morningRoutine.childrenTasks.willowTask.gotChanged, morningRoutine.childrenTasks.willowTask.ateBreakfast), getKidsReadyForSchool.oliverReadyForSchool(morningRoutine.childrenTasks.oliverTask.brushedTeeth,morningRoutine.childrenTasks.oliverTask.gotChanged, morningRoutine.childrenTasks.oliverTask.ateBreakfast))

//END OF FUNCTION


//END