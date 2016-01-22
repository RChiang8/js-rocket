// Explanations

// Variables

var favColor = 'red';
var myFavColors = ['blue','red','green'];
var numOfFavColors = 3;
var hasGotFavColors = false;
var ryanObject = {
	firstName: 'Ryan',
	lastName: 'Chiang',
	favColors: ['blue','red','green'],
	yearsAlive: 103,
	isMale: true
};

// Functions

var fullname = function (firstname, secondname) {
	return firstname + ' ' +secondname;
}

var area = function(width, height){
	return width * height
}

var whatIsMyFavColor = function () {
	return false;

	return true;

	return 'blue';
}

var doSomething = function () {
	console.log("do Something!!!");
}

// If Statements

var number1 = 10;
var number2= 100;

if (number1 > number2) {
	alert('true!!!');
} else {
	alert('false!!!');
}

var name1 = 'Rich';
var name2 = 'Bob';

if (name1 == 'Rich' || name2 == 'Bob') {
	alert('true 1!!!');
} else if (name2 == 'Rich') {
	alert('true 2!!!');
} else {
	alert('false!!!');
}