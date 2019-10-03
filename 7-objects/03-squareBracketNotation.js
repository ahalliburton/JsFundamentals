//* Square bracket Notation
let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}; 

let x = 'vegetable';

console.log(garden[x])
    
//console.log(garden.vegetable)

let x = 'vegetable';

console.log(garden.x); === this is undefined bc there is no property named x


let baking = {};
//baking.zucchini = 'better make some bread';
//console.log(baking);

baking['zucchini'] = 'better make some bread';
console.log(baking);


let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}; 

let key = 'water';

Object.keys(garden).forEach(g => {
    //console.log(g);
    if (g === key) {
        console.log(garden[key]);
    }
})



