var prompt = require('sync-prompt').prompt;

//Get the gender of the person
var gender = prompt('Are you (m)ale or (f)emale?: ');

//Get the weight of the person
var lbs = prompt('How much do you weigh? (lbs): ');

//Check to see if lbs isNaN and get a real weight
while(isNaN(parseInt(lbs))) { lbs = prompt("Not valid. Enter weight again: "); }
var weight = parseInt(lbs);

var genderCalorie; //This will be set to either 4000 or 3000
var foodList = []; //This empty list will contain food and its calorie count

//Check to see what gender they are and see genderCalorie
if (gender === 'm') { genderCalorie = 4000;} 
else if (gender === 'f') { genderCalorie = 3000; }

//Main Menu prompt
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

//Calculate sum of calories over genderCalorie
lbsGained = overallCals/genderCalorie;

//Print it all out!
console.log("You gained " + lbsGained + "lbs");
console.log('Food/Calorie Amount: ' + foodList);
