console.log('Hello');
// alert("What's up ?");

// This is a comment
/*
Multi-Line Comment
*/

// letiables
let b = "smoothie";
console.log(b);

let someNumber = 45;
console.log(someNumber)

// let age = prompt("What is your age?");
// document.getElementById('someText').innerHTML = age;

// Numbers in Javascript
let num1 = 5.7;
4

// Increment 
num1++;
console.log(num1);

// Decrement
num1--;
console.log(num1)

// Divide, Multiply,modulus
console.log(num1 / 6)
console.log(num1 * 6)
console.log(num1 % 6)

// Increment/Decrement by any number
num1 += 30;
num1 -= 20;
console.log(num1);

// Functions
// 1.Create
function fun() {
    console.log('this is a function')
}
// 2.Call
fun();

// Create a function that takes in a name and says hello followed by your name
function greeting() {
    let name = prompt("What is your name ?");
    let result = "Hello" + " " + name;
    console.log(result);
}

// greeting();

// Functions with Arguments
function sumNumbers(num1, num2) {
    let result = num1 + num2;
    console.log(result);

}

sumNumbers(10, 20);
sumNumbers("Kaustav", "Ghosh");
sumNumbers("Kaustav", 20);

// While Loops
let num2 = 0;
while (num2 < 10) {
    num2 += 1;
    console.log("while " + num2);
}

// For Loop
for (let num3 = 0; num3 <= 100; num3++) {
    console.log("for " + num3);

}

// Data types
let yourAge = 18; // number
let yourName = "Bob";
let name = { first: 'Jane', last: 'Doe' }; // object
let truth = false;
let groceries = ["apple", "banana", "oranges"]; // array
let random;
let nothing = null; // value null

console.log(yourAge)
console.log(yourName)
console.log(name)
console.log(truth)
console.log(groceries)
console.log(random)
console.log(nothing)

// Strings in Javascript(common methods)
let fruit = "banana,apple,orange,blackberry";
let morefruits = "banana\napple"; // newline

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(','));

// Arrays in Javascript
let fruits = ["banana", "apple", "orange", "pineapples"];
fruits = new Array("banana", "apple", "orange", "pineapples");

console.log(fruits[2]);
fruits[0] = "pear";
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    const element = fruits[i];
    console.log(element);
}

// Array Common methods
console.log('to string: ', fruits.toString());
console.log(fruits.join(' ** '))
console.log(fruits.pop(), fruits); // removes the last item
console.log(fruits.push('blackberries'), fruits); // appends

// fruit
fruits[fruits.length] = 'new fruit';
console.log(fruits);
fruits.shift(); // remove first element from an array
console.log(fruits);
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'brocoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(2, 7));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort());  // lexicographical sorting
console.log(someNumbers.sort(function (a, b) { return a - b })); // ascending
console.log(someNumbers.sort(function (a, b) { return b - a })); // descending

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

// Objects in Javascripts <-> Dictionaries in Python

let student = {
    first: 'Kaustav',
    last: 'Ghosh',
    age: 25,
    height: 170,

    studentInfo: function () {
        return "from student info function " + this.first + ' ' + this.last + ',' + this.age;
    }
};

console.log(student.first);
console.log(student['last']);
console.log(student.age);
console.log(student['height']);
console.log(student);

student.first = 'notKaustav' // change value
student.age++;
console.log(student.age);

console.log(student.studentInfo());


// Condtionals , Control Flows (if else)

// let age = prompt("what is your age");
let age = 21;
if ((age >= 18) && (age <= 35))
    status = 'target demo';
else
    status = 'not my audiences';

console.log(status);

// Switch statements
// Differentiate between weekday vs weekend

// day 0 --> Sunday
// day 1 --> Monday
// day 2 --> Tuesday
// day 3 --> Wednesday 
// day 4 --> Thursday ..

let day = 6;
switch (day) {
    case 0:
        text = "weekend";
    case 5:
        text = "weekend";
    case 6:
        text = "weekend"
    default:
        text = "weekday";
}
console.log(text);

