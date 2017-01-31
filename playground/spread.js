/*
function add(a, b) {
    return a + b;
}

console.log(add(2, 2));
var toAdd = [9, 5];
console.log(add(...toAdd));
*/
/*
const groupA = ['Terry', 'Tony', 'Mark'];
const groupB = ['Dan', 'Robert'];
var final = [
    3, ...groupA,
    ...groupB
];
*/
var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
function printAge(name, age) {
    console.log("Hello " + name + ", you are: " + age);
}
printAge(...person);
printAge(...personTwo);

var name = ['Mike', 'Ben'];
var final = [
    'Terry', ...name
];
console.log(final);