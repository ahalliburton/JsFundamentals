//Hoisting

console.log(scissors);

scissors = 'blue';

console.log(scissors);
var scissors

//JS reads through our code twice, the 1st time it looks thru the left hand side for declarations; the 2nd time it reads through the right side and assigns values and expressions

we call it hoisting bc JS keeps those variables stored in memory for quicker reference later