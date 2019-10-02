////For In Loops

great for iterating over values in an object

let student= {
    name: 'Peter'
    awesome: true,
    degree: 'javascript',
    week: 1
}

for (item in student) {
    console.log(item=>, item);
    console.log('student[item] =>', student[item]);
}

let dogArray = ['collie', 'pitbull', 'cub', 'rott']

console.log(dogArray [0]);
console.log(dogArray [1]);
console.log(dogArray [2]);



let studentname = 'pAul';
let newName;

for (letter in studentName) {
    console.log(letter)
}