//? Normal Function
function f1(){
    console.log("inside f1()"); // inside f1()
}
f1();

//
var a = 10;
function f2(){
    console.log("inside f2()"); // inside f2()

    function f3(){
        console.log("inside f3()"); 
    }
    f3(); // ✅ We can call inside f2() as f3() lies inside f2() scope Res:- inside f3()
}

f2();
f3(); // ❌ We should not call inner function from global scope
// If we call inner function will give Reference Error

//Before Closures: (Nested function)
function outerFunction(){
    console.log('inside the outer function');

    function innerFunction(){
        console.log('inside the inner function');
    }

    // innerFunction();
    return innerFunction;
}
// outerFunction();
let d = outerFunction(); // Res:- inside the outer function

// Actually we are calling innerFunction
 d(); // Res:- inside the inner function

// 1. return function
function sum(a,b){
    let c = a + b;
    return c;
}

let x = sum(10, 20); 
console.log(x); // Res:- 30

// Getting into closures
function outerFunction1(){
    let m = 10;
    console.log(m); //10

    function innerFunction1(){
    }

    return innerFunction1;
}

let e = outerFunction1();
e();


