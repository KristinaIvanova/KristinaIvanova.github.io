//Arrays
//Problem 1. Increase array members
var numbers = new Array(20);
    for (var i = 0; i < 20; i+=1) {
        numbers[i] = i * 5;
        console.log("array[" + i + "] = " + numbers[i]);
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
    for (var i = 0; i < longestSequence; i++) {
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
        if (num[i] < num[i + 1]) {
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
findMaxIncrSeq([3, 2, 3, 4, 1, 2, 2, 4]);
findMaxIncrSeq([3, 2, 1]);