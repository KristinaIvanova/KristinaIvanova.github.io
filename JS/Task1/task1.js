//1.1. JavaScript literals
//Integer Example 1;
	var age= 5;
	var age2=10;
	var sum1 = age + age2;
	console.log(sum1);
//Integer Example 2;
	var a = 3;
	var x = (100 + 50) * a;
	console.log(x);
//Integer Example 3;
	var x = 5;
	x++;
	var y = x;
	console.log(y);
//Integer  Example 4;
	var myName = '24';
	var myAge = 24;
	var sum = myName*myAge;
	console.log(sum);
//Integer Example 5;
	var score1 = 10;
	var score2 = 15;
	var score3 = 20;
	var totalScore = score1*2/10 + score2*2/10 + score3*2/10;
	console.log (totalScore);
//------------------------------------
//Floating-point Example 1;
	var b = 0.8;
	var c = 0.6;
	var sum = b-c;
	console.log(sum);
//Floating-point Example 2;
	var a = 0.2;
	var b = 10;
	var totalSum = Math.pow(a, b);
	console.log (totalSum);
//Floating-point Example 3;
	var resultMath = Math.pow(7, -2);
	console.log (resultMath);
//Floating-point Example 4;
	var exp = Math.exp (1);
	console.log(exp);
//Floating-point Example 5;
	var a = 10
	var sum = Math.PI * 2 * a;
	console.log(sum);
//-----------------------------------
//Boolean Example 1;
	 var a = 1;
	 var b = 2;
	 var greaterAB = (a > b);
	 console.log(greaterAB);
 //Boolean Example 2;
	 var equal = (a == 3);
	 console.log(equal);
 //Boolean Example 3;
	 var equal2 = (a === 1);
	 console.log(equal2);
 //Boolean Example 4;
	 var equal3 = (a != b);
	 console.log(equal3);
 //Boolean Example 5;
	 var equal4 = (true === true);
	 console.log(equal4);
 //-----------------------------------
 //Object Exaple 1;
 	var person = {
 		firstName: "Kristina",
 		lastName: "Dineva",
 	};
 	console.log (person.firstName + " " + person.lastName);
 	console.log (typeof {person});
//Object Exaple 2;
var person1 = {
 		firstName: "Diana",
 		lastName: "Dylgerova",
 		age: 25
 	};
 	console.log (person1.firstName + " " + person1.lastName + " " + "Age:" + " " + person1.age);
 	console.log (typeof {person1});
 //Object Exaple 3;
	var y = new String("Nadia");
	console.log(typeof y);
//Object Exaple 4;
	var array1 = [];
	var object2 = {};
	var object3 = array1 + object2;
	console.log(object3 + "," + typeof(object3));
 //-----------------------------------
 // String Example 1;
	 var myName = "Kristina";
	 console.log( myName + "," + typeof ("myName"));
 // String Example 2;
	var txt = "Hello";
	console.log(typeof "txt");
 // String Example 3;
	 var six = "6";
	 console.log(typeof "six");
 //-----------------------------------
 //1.2. Quoted text
 	var qtext = "We are so-called \"Vikings\" from Sofia.";
	console.log(qtext);
	var qtext1 = "'How you doing?', Joey said";
	console.log(qtext1);
//------------------------------------
//1.3. Typeof variables
	console.log(typeof sum);
	console.log(typeof x);
	console.log(typeof totalScore);
	console.log(typeof totalSum);
	console.log(typeof greaterAB);
	console.log(typeof exp);
	console.log(typeof equal);
	console.log(typeof person);
	console.log(typeof qtext);
//------------------------------------
//1.4. Typeof null
//Null
	var score = null;
	console.log("Score = " + score + "," + typeof (score));
//Undefined Example 1;
	var color = undefined;
	console.log("Color = " + color + "," + typeof (color));
//Undefined Example 2;
	console.log(typeof(none));
//Undefined Example 3;
	var car;
	console.log(typeof(car));