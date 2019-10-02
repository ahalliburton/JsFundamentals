//Arrow Functions

function coffee() {
    console.log('coffee is good');
}

let coffee = () => {
    console.log('I love coffee');
}

coffee();

let cats = (kitten, puppy) => {
console.log(`I have ${kitten} cats and ${puppy} dogs`)
}

//concise and block body

concise body does not need parenthesis, unledd you have more than one Parameters.

Concise Body
let apples = x => console.log(`There are ${x} apples.`);
apples(10);

//more than one parameter does require parenthesis
//return (if one-lin chuncky arrow function) is implied

Block Body
let apples = x => { console.log(`There are ${x} apples`)};
apples(20);

//sidenote//
LINEBREAKS ARE BAD!!!

let func = () => console.log('hi'); //OK

let func = ()
 => console.log('hi'); //BAD