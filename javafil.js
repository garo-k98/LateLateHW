var user = {
	name: "John",
	surname: "Smith",
}
user.name = "Peter";
delete user.name;

console.log (user);



var schedule = {};

function isEmpty(obj)
{
	for (var key in obj)
	{
		return false;
	}
	return true;
}

console.log (isEmpty(schedule));

schedule["8:30"] = "get up";

console.log (isEmpty(schedule));



const user = {
	name:"John"
};
user.name = "Peter";

console.log (user);



var salaries = {
	John: 100,
	Ann: 160,
	Peter: 130,
};
var sum = 0;
for (var key in salaries)
{
	sum += salaries[key];
}
console.log (sum);



//Befor the call

var theMenu = {
	width: 100,
	height: 200,
	title: "My Menu"
};

function multiplyNumeric (obj);
{
	for (var key in obj)
	{
		if (typeof obj[key] == number)
		{
			obj[key] = obj[key]*2;
		}
	}
}

multiplyNumeric(theMenu);
console.log(theMenu);

/*
after the call
var theMenu = {
	width: 200,
	height: 400,
	title: "My Menu"
};
*/