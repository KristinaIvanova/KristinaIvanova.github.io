//Conditional statements
//Problem 1. Exchange if greater
function greater (a,b){
	if(a > b) {
		var temp = a;
		a=b;
		b=temp;
		return (a+' '+b);
	} else {
		return (a+' '+b);
	}

}
console.log (greater(5,2));
console.log (greater(3,4));
//-------------------------------------------
//Problem 2. Multiplication Sign
function multiSign (a, b, c) {
	var allPositive = (a > 0 && b > 0 && c > 0);
	var twoNegative = (a > 0 && b < 0 && c < 0) || 
					  (a < 0 && b > 0 && c < 0) || 
					  (a < 0 && b < 0 && c > 0);		

	var zero = a === 0 || b === 0 || c === 0;

	if (allPositive || twoNegative) {
		console.log('+');
	} else if ( zero ) {
		console.log('0');
	} else {
		console.log('-');
	}
}

multiSign(5, 2, 2);
multiSign(-2, -2, 1);
multiSign(-2, 4, 3);
multiSign(0, -2.5, 4);
multiSign(-1, -0.5, -5.1);
//-------------------------------------------
//Problem 3. The biggest of Three
function biggestOfThree (a,b,c){
	if (a > b){
		if (a > c){
			return a;
		} else {
			return c;
		} 
		}
		if (c > b) {
			return c;
		} else {
			return b;
		}
	}
console.log( biggestOfThree(5, 2, 2));
console.log( biggestOfThree(-2, -2, 1));
console.log( biggestOfThree(-2, 4, 3));
//--------------------------------------------
//Problem 4. Sort 3 numbers
function sorted (a, b, c) {
var temp;

	if (a >= b) {
		// a:
		if (a >= c) {
			temp = a;
			if (b >= c) {
				temp +=' '+b+' '+c;
			} else {
				temp +=' '+c+' '+b;
			}
		}
	}
	// b:
	if ( b >= a) {
		if ( b >= c ) {
			temp = b;
			if ( a >= c) {
				temp +=' '+a+' '+c;
			} else {
				temp +=' '+c+' '+a;
			}
		}
	}
	// c:
	if ( c >= a) {
		if (c >= b) {
			temp = c;
			if (a >= b) {
				temp +=' '+a+' '+b;
			} else {
				temp +=' '+b+' '+a;
			}
		}
	}
	return temp;
}
console.log( sorted(5, 2, 1) );
console.log( sorted(-2, -2, 1) );
console.log( sorted(-2, 4, 3) );
//---------------------------------------------
//Problem 5. Digit as word

function digit (number) {
switch (number) {
	case 0: console.log('zero'); break;
	case 1:console.log ('one'); break;
	case 2: console.log ('two'); break;
	case 3: console.log ('three'); break;
	case 4: console.log ('four'); break;
	case 5: console.log ('five'); break;
	case 6: console.log ('six'); break;
	case 7: console.log ('seven'); break;
	case 8: console.log ('eight'); break;
	case 9: console.log ('nine'); break;
	default:console.log ('not a digit'); break;
}
}
digit(2);
digit(1);
digit(0);
digit(5);
//---------------------------------------------
//Problem 6. Quadratic equation
function quadratic (a, b, c) {
	var d= Math.pow(b,2) - 4*a*c;
	var x, x1, x2;
	if (d>0){
		x1 = (-b - Math.sqrt(d))/(2*a);
		x2 = (-b + Math.sqrt(d))/(2*a);
		console.log('x1 = '+ x1 +';'+' x2=' + x2);
	} else if (d===0) {
		x= (-b)/(2*a);
		console.log ('x1 = x2 = '+ x );
	} else {
		console.log('no real roots');
	}
}
quadratic(2,5, -3);
quadratic(-1,3, 0);
//---------------------------------------------
//Problem 7. The biggest of five numbers
function theBiggest (a, b, c, d, e) {
	biggestA = a>=b && a>= c && a>=d && a>=e;
	biggestB = b>=a && b>= c && b>=d && b>=e;
	biggestC = c>=a && c>= b && c>=d && c>=e;
	biggestD = d>=a && d>= b && d>=c && d>=e;
	biggestE = e>=a && e>= b && e>=c && e>=d;

	if (biggestA){
		return a;
	}
	if (biggestB){
		return b;
	}
	if (biggestC){
		return c;
	}
	if (biggestD){
		return d;
	}
	if (biggestE){
		return e;
	}
}
console.log(theBiggest(5,2,2,4,1));
console.log(theBiggest(-2,-22,1,0,0));
console.log(theBiggest(96,2,4,1,5));
//---------------------------------------------
//Problem 8. Number as words
var input = 959;
var ones;
var dec;
var hundr;
var first;
var second;
var third;
var diff;
var and = " and";
var number;
var valid = "error";

ones = parseInt(input)%10;
dec = parseInt((input - ((parseInt(input/100))*100))/10);
hundr = parseInt(input/100);

if ((input%1 === 0) && (input < 1000)){
	
switch(hundr) {
	case(0): first = ""; break;
	case(1): first = "one hundred"; break;
	case(2): first = "two hundred"; break;
	case(3): first = "three hundred"; break;
	case(4): first = "four hundred"; break;
	case(5): first = "five hundred"; break;
	case(6): first = "six hundred"; break;
	case(7): first = "seven hundred"; break; 
	case(8): first = "eight hundred"; break;
	case(9): first = "nine hundred"; break;
	}
	
switch(dec) {
	//case(0): 
	//case(1): 
	case(2): second = " twenty"; break;
	case(3): second = " thirty"; break;
	case(4): second = " forty"; break;
	case(5): second = " fifty"; break;
	case(6): second = " sixty"; break;
	case(7): second = " seventy"; break; 
	case(8): second = " eighty"; break;
	case(9): second = " ninety"; break;
	}
	
switch(ones) {
	case(0): third = ""; break;
	case(1): third = " one"; break;
	case(2): third = " two"; break;
	case(3): third = " three"; break;
	case(4): third = " four"; break;
	case(5): third = " five"; break;
	case(6): third = " six"; break;
	case(7): third = " seven"; break; 
	case(8): third = " eight"; break;
	case(9): third = " nine"; break;
		}

if (input === 0) {
	number = "zero";
	console.log(number);
	}

if (dec > 1) {
	number = first + second + third;
	console.log(number);	
	}
		
if (dec === 1) {
	switch(ones) {
		case(0): diff = " and ten"; break;
		case(1): diff = " and eleven"; break;
		case(2): diff = " and twelve"; break;
		case(3): diff = " and thirteen"; break;
		case(4): diff = " and fourteen"; break;
		case(5): diff = " and fifteen"; break;
		case(6): diff = " and sixteen"; break;
		case(7): diff = " and seventeen"; break;
		case(8): diff = " and eighteen"; break;
		case(9): diff = " and nineteen"; break;
		}
	number = first + diff;
	console.log(number);
	}
	
if ((hundr > 0) && (dec === 0) && (ones !== 0)) {
	number = first + and + third;
	console.log(number);
	}
	
if ((hundr === 0) && (dec === 0) && (ones !== 0)) {
    number = third;
	console.log(number);
	}
	
if ((hundr !== 0) && (dec === 0) && (ones === 0)) {
    number = first;
	console.log(number);
	}
}

else {
	console.log(valid);
};

