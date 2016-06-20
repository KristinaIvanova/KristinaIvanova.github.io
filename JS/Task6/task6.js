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
var text = 'I am hungry. I am doing to eat in Grosha with Nadia, Vesi, Dorotea and Didi. After that we are goin to eat ice-cream! ';
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
        console.log('Search for word "eat"');
        console.log('Case insensitive: ' + searchForWord(text,"this") + ' occurences');
        console.log('Case insensitive: ' + searchForWord(text, "this", true) + ' occurences');
//-------------------------------------------------------------
//Problem 4. Number of elements

function numberOfElements() {
	var count = document.getElementsByTagName('div').length;
	return count;
}
	console.log(numberOfElements());