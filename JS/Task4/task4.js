//Loops
//Problem 1. Numbers
var num = 10;
for (var i = 1; i < num; i++) {
	console.log(i);
}
//------------------------------------------
//Problem 2. Numbers not divisible
var num = 50;
for (var i = 1; i < num; i++) {
	if (i % 21 != 0){
		console.log(i);
	}
}
//------------------------------------------
//Problem 3. Min/Max of sequence
//1st solution
	var min = Math.min (1,2,5,7,9,45,67,4,7);
	var max = Math.max (4, 6, 8, 23, 5, 45,6);
	console.log('Min number is: ' + min);
	console.log('Max number is: ' + max);
//2nd solution 
 var numbers = [3, -1, 6, 10, -5, 0];
	    var min = Number.MAX_VALUE;
	    var max = Number.MIN_VALUE;
	    for (var i = 0; i < numbers.length; i++) {
	        if (numbers[i] < min) {
	            min = numbers[i];
	        }
	        if (numbers[i] > max) {
	            max = numbers[i];
	        }
	    }
	console.log('Min number is: ' + min);
	console.log('Max number is: ' + max);
//-------------------------------------------
//Problem 4. Lexicographically smallest
function lexicographicallySmallest(obj) {
	        var min = "a";
	        var max = "z";
	        for (var prop in obj) {
	            if (prop > max) {
	                max = prop;
	            }
	            if (prop < min) {
	                min = prop;
	            }
	        }
	        console.log("Object: " + obj);
	        console.log("Min property: " + min);
	        console.log("Max property: " + max);
    	}
	    lexicographicallySmallest(document);
	    lexicographicallySmallest(window);
	   	lexicographicallySmallest(navigator);