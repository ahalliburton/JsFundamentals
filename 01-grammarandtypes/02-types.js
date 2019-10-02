;//Boolean
//boolean can represent true/false; yes/no

let i = true;
let j = false;

console.log(i);

//Null
//null is an empty vale. it is not 0 or undefined
//it is like an empty container; nothing is in it, but it still exista s a space to fil
let empty = null
console.log(empty);

//Undefined
//means there is no value assinged; not even an empty container; most importantly undefined is not an error.


let undef = undefinded;
console.log(udef);

let grass;
console.log(grass)://undefined;

//Numbers
   let degrees = 90;
    console.log(degrees);

JavaScript only has room for 15 numbers and then it begins to round up


let numbersAreHard = (0.2 * 10 + 0.1 *10)


//Strings
///strings are datatypes that are used to represent text and are wrapped in either single or double quotes.

let stringOne = "double quotes"
let stringTwo = 'single quotes'

console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050 + 100';

console.log(first);
console.log(second); 

//objects

let car = {
    coloer: 'red',
    tires: 4,
    extras: "A/C and Radio",
    cool: true
}

console.log(car); 
console.log(typeof car);

//Arrays
//Arrays are containers that hold lists of items;

let list =[ 'item1', 'item2', 'item3'];
//(1) (2) (3)

//1 - name of the array;
//2 - square brackets = array;
//3 - each item, regardless of datatype, is separated by commas;

let grocerylist = ['milk','apples', 'cereal'];
console.log(grocerylist);
console.log(typeof grocerylist); //object 

//addition vs concatenation
//check out javascript coersion


let myInfo = {
    firstName = 'Allan',
    lastName = 'Halliburton',
    houseNumber = '3743',
    street = 'Roseway Lane',
    city = 'Indidnapolis',
    state = 'IN',
    zipcode = '46226'
}

console.log(myInfo);

let firstName = 'Allan'
let lastName = 'Halliburton'
let houseNumber = '3743'
let street = 'Roseway Lane'
let city = 'Indianapolis'
let state = 'IN'

console.log(firstName, lastName + ',' + houseNumber, street + ',', city, state);

//Strings - Properties
/*
Properties are qualities associated with a dataType.
Strings have properties associated with that string.
E.g. the length of a string is a property.

*/

let myName = 'Allan';
console.log(myName.length);

//Methods
//Methods are tools that can help us manipulkate our data.

//*.property = no paraenthesis;
//*.methods -parenthesis;

let myNameIs = "Allan";
console.log(myNameIs.toUpperCase())

let home = 'My home is Indianapolis';
console.log(home.includes(Indianapolis))

let sent = 'This sentence will be split into individual parts';

console.log(sent.split());
console.log(sent.split(''))