let list = ['orange', 'banana', 'oreos' ]
console.log(list[1])

let students = ['tony', 'mars', 'ben', 'tyler', 'jon', 23, true, ['al', 'ray','sam']]
//console.log(typeof students)
//console.log(students instanceof Array);
//console.log(students[1]);

let name = students [7][2]
console.log(`Hello ${name} how are you today`)

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hot dog'];
food.push('cool beans');
//food.splice(1, 1, 'cookies');
food.pop();
food.shift();
//food.unshift('pasta', 'hamburger');
for (f of food) {
    console.log(f)
}


for (f in food) {
console.log(f)
}

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hot dog'];
//food.forEach(f => {console.log(f)})
//food.forEach((f, number, array)=> {console.log(f); console.log(number); console.log(array)})
//food.forEach((f, number) =>{console.log(f); console.log(number)})

let foodFunction = () => {
    for (f in food) {
        console.log(f),
        console.log(food[f]),
        console.log(food)
    }
}
foodFunction()

for (m in movie) {
    console.log(m)
}

let movies = ['300', 'bambi', 'thor', 'candyman'];
movies.push('glory');
movies.splice(1, 3, 'rosewood');
movies.forEach(m => {console.log(m)}) 

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length)

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
//console.log(colors.length)
//console.log(colors.toString())

//console.log(typeof colors)
//console.log(colors instanceof Array)
//console.log(colors.toString)

colors.forEach(c =>console.log(c))

let mack = [1, 2, 3, 4, 5]
//console.log(mack instanceof Array) checking to make sure its an array
//console.log(mack.reverse()) reverses the numbers 5 - 1
if (mack instanceof Array === true) {
    let revMack = mack.reverse()
    console.log(revMack)
}  //writing it in a method
