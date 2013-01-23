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
			"brushedTeeth": false, //property Boolean
			"gotChanged": true, //property Boolean
			"ateBreakfast": true //property Boolean

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
			"ateBreakfast": true //property Boolean
						} //children 1
		],// children array
		
		"parents" : [
			{"name" : "Timothy",
			"wakesUp" : 7 // property:Number
			}//Timothy
		]// parents array
}; //family object
