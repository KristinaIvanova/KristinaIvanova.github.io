//Arrays
//Problem 1. Increase array members
var numbers = new Array(20);
    for (var i = 0; i < 20; i+=1) {
        numbers[i] = i * 5;
        console.log("array[" + i + "] = " + numbers[i]);
    }
 //---------------------------------------------------------
 //Problem 2. Lexicographically comparison
 var array1 = ["x", "y", "z", "a", "b", "c"];
 var array2 = ["a", "b", "c", "d", "e", "f"];
 var string1 = array1.join(",");
 var string2 = array2.join(",");
 if (string1 > string2) {
     console.log("string1 > string2");
 } else if (string1 < string2) {
     console.log("string1 < string2");
 } else if (string1 === string2) {
     console.log("string1 = string2");
 }  
 //---------------------------------------------------------
 //Problem 3. Maximal sequence
 function findMaxSeq(num) {
    var currentSequence = 1,
        longestSequence = 1,
        maxSeqNum = num[0]; // the maximal sequence first start with the first number

    for (var i = 1; i < num.length; i+=1) {
        if(num[i-1] === num[i]) {
            currentSequence++;
            if (currentSequence >= longestSequence) {
                longestSequence = currentSequence; // change max lenght to the temporary lenght
                maxSeqNum = num[i]; // set the number of the longest temp sequence
            }
        }
        else {
            currentSequence = 1; //if two elements are not equals, temporary counter = 1
        }
    }
    // create arr with the results
    var result = [];
    for (var i = 0; i < longestSequence; i+=1) {
        result.push(maxSeqNum);
    }
    // result
    console.log(result.join(', '));
}
findMaxSeq([2,1,1,2,3,3,2,2,2,1]);
//-------------------------------------------------------------
//Problem 4. Maximal increasing sequence
function findMaxIncrSeq(num) {

    var currentSequence = 1,
        longestSequence = 1,
        indexOfLongest;

    for (var i = 0; i < num.length; i+=1) {
        if (num[i] < num[i + 1] && num[i]+1 === num [i + 1] ) {
            currentSequence++;
        } else {
            if (longestSequence < currentSequence) {
                longestSequence = currentSequence;
                indexOfLongest = i - currentSequence + 1;
            }
            currentSequence = 1; //temporary counter = 1
        }
    }

    if (longestSequence < 2) {
       console.log('no');
    }
    else {
        var result = num.slice(indexOfLongest, indexOfLongest + longestSequence);
      console.log(result);
    }

}

findMaxIncrSeq([1, 2, 3, 4, 2, 2, 4]);
findMaxIncrSeq([3, 2, 3, 4, 9, 1, 2, 2, 4]);
findMaxIncrSeq([3, 2, 1]);
//---------------------------------------------------------
//Problem 5. Selection sort
//Sort from a[0] to a[n-1]
var arr = [6, 3, 5, 6 ,7];
var sortedArr = [];

 for (var i = 0; i < arr.length; i+=1) {
            var index = i;
            for (var j = i + 1; j < arr.length; j+=1) {
                if (arr[index] > arr[j])
                    index = j;

                var smallerNumber = arr[index];
                arr[index] = arr[i];
                arr[i] = smallerNumber;
            }
             sortedArr.push(arr[i]);
        }
            console.log(sortedArr);
//---------------------------------------------------------
//Problem 6. Most frequent number
var arr = [5, 7, 9, 3, 7, 1, 9, 5, 7, 9, 7, 7];

var current = 0;
        var counter = 0;
        var savedCurrent = 0;
        var SavedCounter = 0;

        for (var i = 0; i < arr.length; i+=1) {
            current = arr[i];
            counter = 0;

            for (var j = 0; j < arr.length; j+=1) {
                if (current === arr[j])
                {
                    counter+=1;
                }
                if ((j === arr.length - 1) && (counter >= SavedCounter)) {
                    savedCurrent = current;
                    SavedCounter = counter;
                }
            }
        }

        if (counter > SavedCounter) {
            console.log('Number: '+ current+' - '+counter+' times');
        } else {
            console.log('Number: ' + savedCurrent+' - '+SavedCounter+' times');
        }
//-----------------------------------------------------------
//Problem 7. Binary search

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
        var searchedNumber = 7;
        var startSearch = 0;
        var endSearch = array.length - 1;
        var middle;
        while (startSearch <= endSearch)
        {
            middle = parseInt((startSearch + endSearch) / 2);
            if (array[middle] === searchedNumber)
            {
                console.log("Index is: " + middle);
                break;
            }
            else if (array[middle] < searchedNumber)
            {
                startSearch = middle + 1;
            }
            else if (array[middle] > searchedNumber)
            {
                endSearch = middle - 1;
            }
        }