//Problem 1. Planar coordinates
//Using formula: Math.sqrt((X2 + X1)^2 + (Y2+ Y1)^2)
function point(x, y) {
            this.x = x;
            this.y = y;
            this.getDistance = function (point) {
                return Math.sqrt(Math.pow((this.x + point.x), 2) + Math.pow((this.y + point.y), 2));
            }
            this.toString = function () {
                return "point (" + this.x + "," + this.y + ")";
            }
            this.clone = function () {
                return new point(this.x, this.y);
            }
        }
        function Line(pointA, pointB) {
            this.start = pointA.clone();
            this.end = pointB.clone();
            this.length = function () {
                return this.start.getDistance(this.end);
            }
            this.toString = function () {
                return "The line has the following: start " + this.start + ", end " + this.end;
            }
        }
        function checkIfCanMakeTriangle(pointA, pointB, pointC) {
            var lengthA = pointA.length();
            var lengthB = pointB.length();
            var lengthC = pointC.length();
            return lengthA + lengthA > lengthC &&
                   lengthB + lengthC > lengthA &&
                   lengthA + lengthC > lengthB;
        }
        var pointA = new point(2, 8);
        var pointB = new point(7, 5);
        var pointC = new point(8, 3);
        var lineAtoB = new Line(pointA, pointB);
        var lineBtoC = new Line(pointB, pointC);
        var lineAtoC = new Line(pointA, pointC);
     
        console.log("The three lines can make a triangle? " + checkIfCanMakeTriangle(lineAtoB,lineBtoC,lineAtoC) + ". It is possible with point A - " + pointA + ", point B - " + pointB + " and point C - "+ pointC + "." );
//---------------------------------------------------------------------
//Problem 2. Remove elements
function removeElement(array, element) {
    for (var i = 0; i < array.length; i+=1) {
        if (array[i] === element) {
            array.splice(i, 1);
            --i;
        }
    }
}

var arr =  [1,2,1,4,1,3,4,1,111,3,2,1,'1'];

console.log(arr);
removeElement(arr, 1);
console.log(arr);
//--------------------------------------------------------------------
//Problem 3. Deep copy
console.log(clone(24)); // Primitive data type - number
console.log(clone('Krisi')); // Primitive data type - string
console.log(clone('Krisi' === '24')); // Primitive data type - boolean
console.log(clone({name: 'Krisi', age: 24})); // Reference data type - object

function clone(obj){
    if (typeof obj !== 'object') {
        return obj;
    }

    var cloned = {};
    for (var prop in obj) {
        cloned[prop] = clone(obj[prop]);
    }

    return cloned;
}
//----------------------------------------------------------------------
//Problem 4. Has property
function hasProperty(obj, prop){
    return obj.hasOwnProperty(prop);
}
var person = {
    name: 'Krisi',
    age: 24,
    occupation: 'Ninja'
};

console.log(person);
console.log('has occupation: ' + hasProperty(person, 'occupation'));
console.log('has gender: ' + hasProperty(person, 'gender'));
person.gender = 'female';
console.log(person);
console.log('has gender: ' + hasProperty(person, 'gender'));


//----------------------------------------------------------------------
//Problem 5. Youngest person
function Person(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.toString = function () {
                return this.firstName + " " + this.lastName + " age: " + this.age;
            }
        }
        var people = new Array();
        people.push(new Person("Krisi", "Ivanova", 7));
        people.push(new Person("Diana", "Dylgerova", 25));
        people.push(new Person("Nadezhda", "Dunkina", 76));
        people.push(new Person("Veselinka", "Blazheva", 19));
        people.push(new Person("Doroteya", "Garbachkova", 32 ));
        function findYoungest(people) {
            var youngest = people[0];
            for (var i = 1; i < people.length; i++) {
                console.log(people[i]);
                if (people[i].age < youngest.age) {
                    youngest = people[i];
                }
            }
            return youngest;
        }
        console.log("Some people:");
        for (var i = 0; i < people.length; i++) {
            //console.log(people[i]);
        }
        //console.log();
        console.log("The youngest is " + findYoungest(people));
//------------------------------------------------------------------------
/*Problem 6.Write a function that groups an array of people by age, first or last name.
The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
Use function overloading (i.e. just one function)*/
//Using the same array by problem 5
var group = function(arr, prop) {
	var resultArr = new Object();
	for (var person in arr) {
		var temp = arr[person][prop];
		if (resultArr[temp] === undefined || resultArr[temp] === null) {
			resultArr[temp] = [];
		};
		resultArr[arr[person][prop]].push(arr[person]);
	}
	return resultArr;
};

var groupedByAge = group(people, 'age');
console.log('Grouped by AGE:')
console.log(groupedByAge);
var groupedByFirstName = group(people, 'firstName');
console.log('Grouped by first name:')
console.log(groupedByFirstName);
var groupedByLastName = group(people, 'lastName');
console.log('Grouped by last name:')
console.log(groupedByLastName);