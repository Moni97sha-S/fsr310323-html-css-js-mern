// Iteration
let arr1 = [10, 20, 30, 40, 50, 60, "Monisha", true];
//! for() method
/* for(let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
} */
//! forEach() method
/* arr1.forEach(function (element) {
    console.log("HELLO ==>", element);
    console.log(element + 10);
}); */
//! for..of() method
/* for(let element of arr1) {
    console.log(element * 2);
} */

//! Map() method

let newArray = arr1.map(function (element) {
    // console.log("hello");
    // console.log(element);
    return element + 1;
});
console.log(newArray); // [11,22,33,44,55]

let newArray1 = arr2.map(function (element) {});
console.log(newArray1); //[undefined 8 times]


//! Filter() method
let arr2 = [10, 19, 32, 43, 55, 60];
let newArr = arr2.filter(function (element) {
    // Even numbers
    // As even nos will not have remainders when divide by 2
    return element % 2 == 0;
});
console.log(newArr);
/*
    1. element --> 10 condition - true (Return to new Array)
    2. element --> 19 condition - false (Don't returns to new Array)
    3. element --> 32 condition - true (Return to new Array)
    4. element --> 43 condition - false (Don't returns to new Array)
    5. element --> 55 condition - false (Don't returns to new Array)
    6. element --> 60 condition - true (Return to new Array)
*/

//Reduce() Method
// Instead we can use forEach, for, for..of, for..in also
let array = [10, 20, 30, 40, 50, 60] // Total: 210
let totalSum = 0;
array.forEach(function (element) {
    totalSum = totalSum + element;
});
console.log(totalSum);

//! Reduce
// Below code 0 means initial value before summing up & then adds to total
array.reduce(function (initialSum, element) {
    return totalSum + element //210
}, 0); 
/*
  0 + 10 ==> 10
  10 + 20 ==> 30
  30 + 30 ==> 60
  60 + 40 ==> 100
  100 + 50 ==> 150
  150 + 60 ==> 210
*/

array.reduce(function (initialSum, element) {
    return totalSum + element //210 + 10 = 220
}, 10); 
/*
  10 + 10 ==> 20
  20 + 20 ==> 40
  40 + 30 ==> 70
  70 + 40 ==> 110
  110 + 50 ==> 160
  160 + 60 ==> 220
*/

let arr4 = [1000, 400, 200, 100];
// 1000-400-200-100 = 300
// Capture Intern Question
// With Accumulator - Wrong Answer in -ve
let value = arr4.reduce(function (accumulator, element) {
    return accumulator - element;
}, 0);
console.log(value); // -1700
/*
0 - 1000 ==> -1000
-1000 - 400 ==> -1400
-1400 - 200 ==> -1600
-1600 - 100 ==> -1700
*/

// Without Accumulator - Correct Answer
let value1 = arr4.reduce(function (accumulator, element) {
    return accumulator - element;
});
console.log(value1); // 300
/*
  1000 - 400 ==> 600
  600 - 200 ==> 400
  400 - 100 ==> 300
*/

// 10000-1000-400-200-100 = 8300

//! some() method
let arr3 = [10, 19, 32, 43, 55, 60];
let hasEvenNumber = arr3.some(function (element) {
    // Even numbers
    // As even nos will not have remainders when divide by 2
    let bool = element % 2 == 0;
    return bool;
});
console.log(hasEvenNumber); //true as 32 & 60 are even numbers
// Reason: Anyone value satisfies condition, it returns true value

//! every() method
let arr6 = [1,2,3,4,-5];
let allPositive = arr6.every(function (element) {
    let boole = element > 0;
    return boole;
});
console.log(allPositive); // False as -5 presents
// If all elements satisfies this condition, then it will return True
