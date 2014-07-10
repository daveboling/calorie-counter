var prompt = require('sync-prompt').prompt;

var gender = prompt('Are you (m)ale or (f)emale?: ');
var lbs = prompt('How much do you weigh? (lbs): ');
var weight = parseInt(lbs);
var genderCalorie;
var foodList = [];


if (gender === 'm') { genderCalorie = 4000;} 
else if (gender === 'f') { genderCalorie = 3000; }

var menu = prompt('What you like (a)dd a food or (q)uit?: ');
var food;
var calories;
var overallCals = 0;
var lbsGained = 0;

while (menu != 'q'){
	if(menu === 'a'){
		food = prompt('What food did you eat?: ');
		calories = prompt('How many calories was it?: ');
		overallCals += parseInt(calories);
		foodList.push(food, calories);
		console.log(overallCals);
	}
    menu = prompt('What you like (a)dd a food or (q)uit?: ');
}

lbsGained = overallCals/genderCalorie;

console.log("You gained " + lbsGained + "lbs");

console.log('Food/Calorie Amount: ' + foodList);
