////For Loops

const vacationSpots = (/florence', 'Copenhagen', Instanbul');

For loop is a programming tool that repeats a set of instructions until a specified condition called a stopping condition.For

Initialization ; stopping condition ; iteration statement

for ( let i = 0; i < 10; i++) {
    console.log(i);
}

1. the 'for' keyword
2. a variable Initialization and declaration
3. condition that needs to be met in order to end the loop
4. this is where the number is going to PaymentRequestUpdateEvent. This one is saying each time this loop runs, update i by one.


for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 20; i >= 0; i - 1) {
    console.log(i)
} 

for (let i = 0; 1 > -25; 1 -= 2 ) {
    console.log(i)
}

let name = 'Ingeborg';

for (i = 0; i <= name.length; i ++) {
    console.log(name[i])
}


Adding numbers

let sum = 0

for (i = 1; i <= 50; i++ ) {
    sum += i;
}
console.log(sum)