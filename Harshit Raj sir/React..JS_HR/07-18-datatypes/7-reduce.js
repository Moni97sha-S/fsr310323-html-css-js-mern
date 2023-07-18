const arr = [10, 20, 30, 40]; // 100

let sum = arr.reduce((accumulator, item) => {
    accumulator = accumulator + item;
    return accumulator;
}, initialValue = 0);

console.log(sum); // 100
//When no initialValue, it takes first value as accumulator

let summation = arr.reduce((accumulator, item) => {
    accumulator = accumulator - item;
    return accumulator;
});

console.log(sum); // 
/* 10 -20 = -10
   -10 -30 = -40
   -40 -40 = -80
*/

// Edge cases with reduce methods
let summation1 = arr.reduce((accumulator, item) => {
    accumulator = accumulator - item;
    return accumulator;
}, 1000);