//Array Methods
//Problem 1. Make person

function createPerson(fname, lname, age, gender) {
return{
	firstname: fname,
 	lastname: lname,
  	age: age,
   	gender: gender
   }	
}
function createPeople() {
    var i,
  	firstNames = ['Krisi', 'Didi', 'Nadia', 'Vesi', 'Dorotea', 'Krasi', 'Ralf', 'Konstantin', 'Ivan', 'Georgi' ],
	lastNames = ['Dineva', 'Dylgerova', 'Angelova', 'Blazheva', 'Garbachkova', 'Koev', 'Gerov', 'Monchev', 'Nikov', 'Georgiev'];
    age = [24, 25, 24, 24, 20, 11, 45, 86, 15, 27];
    arr = [];

    for (i = 0; i < 10; i += 1) {
        arr[i] = createPerson(firstNames[i], lastNames[i], age[i], (i < 5));
    }
    return arr;
}

var people = createPeople();
console.log(people);

//------------------------------------------------------------------------------------
//Problem 2. People of age

function peopleOfAge(element, index, array) {
	return element.age >= 18;
}
console.log( 'Are all adults (with age 18 or greater)?' + ' ' + '-' + ' ' + people.every(peopleOfAge));
//------------------------------------------------------------------------------------
//Problem 3. Underage people
function underage (element, index, array) {
	return element.age < 18;
}
function elements (element, index, array) {
	console.log(element.age);
}
var underagePeople = people.filter(underage);
underagePeople.forEach(elements);
//------------------------------------------------------------------------------------
//Problem 4. Average age of females

function selectFemales(element, index, array){
	return element.gender === true;
}
function averageAge(prevValue, currValue) {
	var average = prevValue + currValue.age;
	return average;
}
var filteredFemales = people.filter(selectFemales);
var average = filteredFemales.reduce(averageAge, 0);
var averageOfFemales = average / filteredFemales.length;
console.log('Average age of females is' +  ' ' + averageOfFemales);
//-----------------------------------------------------------------------------------
//Problem 5. Youngest person

function youngestPerson(element, index, array){
	if (element.gender === false) {
    var i, len = arr.length;
    var min = 0, obj = {};

    for ( i = 0; i < len ; i += 1) {
        if(min > element.age){
            min = element.age;
            obj = element;
        }
    }
    return obj;
}
}
console.log(arr.find(youngestPerson));

//---------------------------------------------------------------------------------
//Problem 6. Group people

var groups;
groups = people.reduce(function(obj, item) {
    var letter = item.firstname[0];

    if (obj[letter]) {
        obj[letter].push(item);
    } else {
        obj[letter] = [item];
    }
    return obj;
}, {});


var gender,
    str,
    current;

for (item in groups) {

    console.log('Group:' + item);

    for (i in groups[item]) {
        current = groups[item][i];
        if (current.gender) {
            gender = 'female';

        } else {
            gender = 'male';
        }

        str = current.firstname + ' ' + current.lastname +
            ' is ' + gender + ' and is ' + current.age + ' years old.';

        console.log(str);
    }
    console.log();
}