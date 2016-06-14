//Problem 1. Odd or Even
function oddOrEven (number){
	if (number % 2 === 0) {
		console.log("True: " + number + " is even;");
	} else {
		console.log("False: " + number + " is odd;");

	}
}
oddOrEven(3);
oddOrEven(2);
oddOrEven(-2);
oddOrEven(-1);
oddOrEven(0);
//---------------------------------------------------
//Problem 2. Divisible by 7 and 5
// 1-st Solution
	function divisibleBy75 (number){
		if ((number % 7 === 0) & (number % 5 === 0)) {
			console.log(true);
		} else {
			console.log(false);
		}
	}
	divisibleBy75(3);
	divisibleBy75(0);
	divisibleBy75(5);
	divisibleBy75(7);
	divisibleBy75(35);
	divisibleBy75(140);
// 2-nd Solution
	function divisibleBy75 (number){
		if (number % 35 === 0) {
			console.log(true);
		} else {
			console.log(false);
		}
	}
	divisibleBy75(3);
	divisibleBy75(0);
	divisibleBy75(5);
	divisibleBy75(7);
	divisibleBy75(35);
	divisibleBy75(140);
//---------------------------------------------------
//Problem 3. Rectangle area
function rectangle (width, height){
	var area = width * height;
	console.log(area);
}
rectangle(3, 4);
rectangle(2.5, 3);
//---------------------------------------------------
//Problem 4. Third digit
function digit (number){
if ( number = Math.floor((number/100) %10) === 7){
console.log(true);
} else {
console.log(false);
}
}
digit(5);
digit(701);
digit(1732);
digit(9703);
digit(877);
digit(777877);
digit(9999799);
//---------------------------------------------------
//Problem 5. Third bit
function thirdBit (number){
	console.log( (number >> 3) & 1);
}
thirdBit(5);
thirdBit(8);
thirdBit(0);
thirdBit(15);
thirdBit(5343);
thirdBit(62241);
//---------------------------------------------------
//Problem 6. Point in Circle
// Using formula: x^2 + y^2 <= r^2
function circle (x,y){
	if (Math.pow(x,2) + Math.pow(y,2) <= 25 ){
		console.log (true);
	} else {
		console.log (false);
	}
}
circle (0,1);
circle (-5,0);
circle (-4,5);
circle (1.5,-3);
circle (-4,-3.5);
circle (100, -30);
circle (0,0);
//----------------------------------------------------
//Problem 7. Is prime
function checkIfPrime (number) {
var isPrime = true;
for(var i =2; i<=Math.sqrt(number); i++) {
	if (number%i ==0) {
		isPrime = false;
		console.log(true);
		return;
	} 
};
	console.log(false);
}
checkIfPrime(1);
checkIfPrime(2);
checkIfPrime(3);