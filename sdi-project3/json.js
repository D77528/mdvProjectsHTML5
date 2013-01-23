// This is a JSON File
// JSON's just use JavaScripts Objects and Arrays

var family = {// value object
		"children" : [
			{"name" : "Oliver",
			"wakesUp": 7.5, // property:Number
			"favoriteCereals": [ //property: Array
				"Cheerios",
				"Mini-wheats",
				"Apple Jacks"
			],
			"favoriteCloths": [ //property Array
				"Tee-shirt and jeans",
				"Long-sleeve shirt and jeans",
				"Thomas the Train shirt and shorts"
			],
			"brushedTeeth": true, //property Boolean
			"gotChanged": true, //property Boolean
			"ateBreakfast": true, //property Boolean
			"readyForSchool" : readyForSchool = function (Teeth, Changed, Breakfast){
				if (Teeth && Changed && Breakfast === true) {
					console.log("We are ready to go dad!");
				}
				else (console.log("Not ready yet..."))
			}// readyForSchool function
			}, // children 0
			
			{"name" : "Willow",
			"wakesUp": 7.5, // property:Number
			"favoriteCereals": [ //property: Array
				"Chocolate Cheerios",
				"Fruity Pebbles",
				"Apple Jacks"
			],
			"favoriteCloths": [ //property Array
				"Tee-shirt and jeans",
				"Long-sleeve shirt and jeans",
				"Thomas the Train shirt and shorts"
			],
			"brushedTeeth": true, //property Boolean
			"gotChanged": true, //property Boolean
			"ateBreakfast": true, //property Boolean
			"readyForSchool" : readyForSchool = function (Teeth, Changed, Breakfast){
				if (Teeth && Changed && Breakfast === true) {
					console.log("We are ready to go dad!");
				}
					else (console.log("Not ready yet dad, give me another minute!"))
			}// readyForSchool function
			} //children 1
		],// children array
		
		"parents" : [
			{"name" : "Timothy",
			"wakesUp" : 7, // property:Number
			"readyToGo" : readyToGo = function (readyChild0){
				if (readyChild0 === true && readyChild1 === true) {
					console.log("Okay children, let's go to School!");
					}
					else (console.log("We can't leave until you finish!"))
				}//readytogo function
			}//Timothy
		]// parents array
}; //family object
