//Calling Functions

function hi() {
    console.log('hi');
    return 'HI'
}
hi() //invoking/calling my function

console.log(hi());
 

function list() {
}
for (let  i = 1; i <= 10; i ++) {
    console.log(i)
} 




for (let i = 0; i <= 10; i ++) {
  console.log(i);
  evenOrodd(i);
      }

function evenOrodd(number) {
    if (number%2===0) {
        console.log('the number is even');
    }else {
        console.log('the number is odd')
        }
    }


