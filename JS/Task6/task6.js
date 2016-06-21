//Problem 1. English digit
function numberToWord(numberAsString) {
	var number= numberAsString.toString();

        var lastNumber = (number.charAt(number.length - 1));
var numberAsString = parseInt(lastNumber);
        switch (numberAsString) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
            case 0:
                return "zero";
            default:
                return "invalid number entered";
        }
  
    }
      console.log(numberToWord(512));

 //--------------------------------------------------------
 //Problem 2. Reverse number
function reverse(number) {
	var number = number.toString();
	var final = number.split('').reverse().join('');
	return final;
}

console.log(reverse(256));
console.log(reverse(123.45));
//----------------------------------------------------------
//Problem 3. Occurrences of word
var text = 'There is nothing special about JavaScript arrays and the properties that cause this. JavaScript properties that begin with a digit cannot be referenced With dot notation; ';
        console.log(text);
        function searchForWord(text, word, caseSensitive) {
            var caseSensitive = caseSensitive || false;
            var wordOccurences = 0;
            if (caseSensitive) {
                var indexOfWord = text.indexOf(word);
                while (indexOfWord >= 0) {
                    wordOccurences++;
                    indexOfWord = text.indexOf(word, indexOfWord+1);
                }
            } else {
                var wordToFind = text.split(word);
                for (var singleWord in wordToFind) {
                    wordOccurences++;
                }
            }
            return wordOccurences;
        }
        console.log('Search for word "with"');
        console.log('Case insensitive: ' + searchForWord(text,"this") + ' occurences');
        console.log('Case insensitive: ' + searchForWord(text, "this", true) + ' occurences');
//-------------------------------------------------------------
//Problem 4. Number of elements

/*function numberOfElements() {
	var count = document.getElementsByTagName('div').length;
	return count;
}
	console.log(numberOfElements());*/
//-------------------------------------------------------------
//Problem 5. Appearance count
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];
var num = 7;
function apperanceCount(number) {
	var count = 0;
	for (var i = 0; i < arr.length; i+=1) {
	if (arr[i] === number) {
		count++;
	} 
	}
		return count;
}
console.log ('The number ('+num+') - '+apperanceCount(num)+' time(s)');
//-----------------------------------------------------------------------
//Problem 6. Larger than neighbours
function largerThanNeighbours(position) {
var arr = [5, 7, 8, 9, 3, 3, 4, 5, 6];
for (var i = 0; i < arr.length; i+=1) {
		if ( arr[position-1] >= 0 && arr[position+1] <= arr.length) {
			if (arr[position] > arr[position-1] && arr[position] > arr[position+1]) {
				console.log(arr[position]+' is larger than '+arr[position-1]+' and '+arr[position+1]);
				break;
			} else if (arr[position] > arr[position-1] && arr[position] < arr[position+1]) {
				console.log(arr[position]+' is larger than '+arr[position-1]+' and smaller '+arr[position+1]);
				break;
			} else {
				console.log(arr[position]+' is NOT larger than '+arr[position-1]+' and '+arr[position+1]);
				break;
			}
		} else {
			console.log('No two neighbours exist.');
			break;
		}
	}
}

largerThanNeighbours(3);
largerThanNeighbours(7);
//-----------------------------------------------------------------------
//Problem 7. First larger than neighbours
function firstLarger() {
    var arr = [5, 7, 8, 9, 3, 3, 4, 5, 6];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i - 1] > 0 && arr[i + 1] <= arr.length) {
            if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                console.log("The largest index is: " + i );
                break;
            }
        } else if (arr[i] === (arr.length - 1)) {
            console.log(-1);
        }
    }
}
firstLarger(); 