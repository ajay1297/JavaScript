//THis is external Js linking

console.log("Hello World!!!");
var name = 'Ajay';
console.log(name);

var lastname = 'Flash';
var age = 21;

//Data types : number , boolean , string , undef , null
//js has dynamic typing

var fullage = true;
console.log(fullage); //true

var job;
console.log(job); //undef

job = 'Yo ! Defined'
console.log(job); //defined

//var can start with underscore,letter,dollar
// var name/first; //error
//cannot use reserved words

console.log(name+' '+age); //type coercion
console.log(name + ' is a '+age+' with full age '+fullage);

age = 'twenty one' //redefining the declared value;

//var lastname = prompt('What is his Last Name?');//taking value from user
//console.log(lastname); 

var yearAjay = 2018 - 21;
console.log(yearAjay); 

//Math OPerators : + , - , * , /
//Logical Opearators : >,<,>=,<=,==,!=
var john = 25;
var mark = 34;
var older = john < mark;
console.log(older);
console.log(john , mark);

console.log(typeof older); //boolean
console.log(typeof john); //number
console.log(typeof 'THis is string'); //string
var x;
console.log(typeof x); //undefined

// === : tests equality without type 
// == : converts both sided operands to same type then makes the comparision
// == : compares internal ref incase of objects
// == : does type coercion

console.log(1 == '1') //true
console.log(1 === '1') //false

var drink = age > 18 ? 'Beer' : 'Juice'; //ternary operator

// case in the switch statement can be String, logical expression

//falsy values : undefined , null, 0, '', NaN
//truthy values : all others are true except falsy values

function calAge(birthyear)
{
	return 2018 - birthyear;
}

var ageJohn = calAge(1997);
console.log(ageJohn);

var taskis = function(task , fname) //function expression
{
	switch(task)
	{
		case 'Code':
			return fname + ' is a codder';
		case 'Designer':
			return fname + ' is a designer';
		case 'Developer':
			return fname + ' is a developer';
		default:
			return fname + ' is a something else';
	}
}

console.log(taskis('Code','Ajay'));
console.log(taskis('Tester','John'));

var names = ['John','Mark','Jane']; //indexing starts from 0
var years = new Array(1957,1993,1997);

console.log(names[0]); //John
console.log(names.length); //3

names[1] = 'Ben';
names[4] = 'Mary';
names[names.length] = 'Ajay';
console.log(names);

var difftypes = ['John','Smith',1990,false];

difftypes.push('Last');// add elemnts at last
difftypes.unshift('First'); //add elements from start
difftypes.pop();//del elements from last
difftypes.shift();//del elements from first
console.log(difftypes);

difftypes.indexOf(1990); //returns position of array

/*
var object = {
	key : 'value';
	.
	.
	.
}
*/
//object literal
var ajay = {
	firstname : 'Vibe',
	lastname : 'Flash',
	birthyear : 1997,
	family : ['Jane','Mark','Bob'],
	job : 'student',
	isMarried : false,
	calcAge : function(birthyear)
	{
		this.age = 2018 - this.birthyear;
	}
}
console.log(ajay);
console.log(ajay.firstname); //Vibe
console.log(ajay['lastname']); //Flash
var y = 'birthyear';
console.log(ajay[y]); //1997
ajay.calcAge();
console.log(ajay.age);//21

//ajay.age = ajay.calcAge();

ajay.job = 'Developer';//object mutation
ajay['isMarried'] = true;

//new object syntax
var abhi = new Object();
abhi.name = 'Abhishek';
abhi['birthyear'] = 1993;
abhi['lastname'] = 'Police Patil';
console.log(abhi);

for(var i = 0;i < 5; i++)
{
	console.log(i);//0,1,2,3,4
}

for(var i=0;i<names.length;i++)
{
	console.log(names[i]); //
}