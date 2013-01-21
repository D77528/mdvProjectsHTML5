// This is a JSON File
// JSON's just use JavaScripts Objects and Arrays

var json = {
	"friends": {
		"09888890": {
			"name": "Chris",
			"age": 23
		},
		"09888891": {
			"name": "Scott",
			"age": 43
		},
		"09888892": {
			"name": "Lisa",
			"age": 20
		}
	}
	
}; // json object


json.friends["09888890"].name


for (var key in json.friends) {
	var friend = json.friends[key];
	// friend.name or .age
};



var json2 = {
	"friends": [
		{
			"userId" : "09888890",
			"name" : "Chris",
			"age" : 23
		},
		{
					"userId" : "09888891",
			"name" : "Scott",
			"age" : 43
		},
		{
					"userId" : "09888892",
			"name" : "Lisa",
			"age" : 20
		}
	]
	
};