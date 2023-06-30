// Different ways to produce function
// 1. Normal function
// 2. Function expression
// 3. Arrow function
// 4. Anonymous function

// Normal function
const f1 = function() {
    console.log("hello f1()");
};
f1();

//! IIFE - Immediately Invoked Function Expression
// When we define a function, it will calls automatically.
// In IIFE, we will wrap the function & make this function call pass something within parentheses like "india"

// If you have a function without any return value, then it returns UNDEFINED.
let f2 = (function (country) {
    console.log("hello f2() --> ", country);
})("india");
console.log(f2); // Undefined

let f3 = (function (country) {
    console.log("hello f3() --> ", country);
    return "Monisha";
})("india");
console.log(f3); // Monisha

//? define IIFE, pass arg in IIFE & return from IIFE

//TODO: Why IIFE......
// Not conflicting with other functions
(function f4(country) {
   let name = "Mythili";
   console.log(name); // Mythili -> this name lie in local scope
})();
console.log(name); // name is not defined -> This name lie in global scope. So we are not polluting our global scope.

// Protection
// Return a function from within another function
// Whenever we return some function, we should catch somewhere "let q = function("
let x =(function f5(country) {
    let name = "23456786709"; // secured ur account number
    let name1 = "Mythili"; // secure

    function printName(){
        console.log(name);
    }
return printName;
})();
console.log(x); // it returns return value [Function: printName]
x(); // Calling printName executes function gives output as Mythili

//? We can secure name value in above example not letting anyone to access this data (hiding implementation detail like u can't access my name. I will expose this data using a function)

//* This is similar to YouTube APIs. They will not give u their code instead they will hide code and gives something related to it so that you can do ur thing.