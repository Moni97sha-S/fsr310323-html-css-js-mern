//1.
// This is the Real closures
function outerFunction2(){
    let n = 10;
    
    function innerFunction2(){
        console.log(n); //10
    }
    return innerFunction2;
}

let f = outerFunction2();
console.log(f); //Res:- [Function: innerFunction]
// Just name changed for inner function as f.

f(); //Res:- 10

//2.
function outerFunction3(){
    let n = 10;

    function innerFunction3(){
        function f1(){
            console.log(n); //10
        }
        return f1;
    }
    return innerFunction3;
}
let g = outerFunction3();
console.log(g); // [Function: innerFunction3]

let h = g(); 

console.log(h); // [Function: f1]
h(); //Res:- 10 

//3.
let p = 20;
function outerFunction4(){
    function innerFunction4(){
        function f2(){
            console.log(p); //20
        }
        return f2;
    }
    return innerFunction4;
}
let i = outerFunction4();
console.log(g); // [Function: innerFunction4]

let j = i(); 

console.log(j); // [Function: f2]
j(); //Res:- 20 
// Now also it will print same 20 due to whenever u return it try to remember it's lexical (local+parent+global)scope -> PPT Pg:120

//4.
function outerFunction5(){
    function innerFunction5(){
        function f3(){
            console.log(u); 
        }
        return f3;
    }
    return innerFunction5;
}
let q = outerFunction5();

let r = q(); 

r(); //Res:- Reference Error 'p' is not defined in any scope

//5.
let z = 20;
function outerFunction6(){
    let z = 30;
    function innerFunction6(){
        let z = 40;
        function f4(){
            let z = 50;
            console.log(z); //10
        }
        return f4;
    }
    return innerFunction6;
}
let k = outerFunction6();
console.log(k); // [Function: innerFunction6]

let l = k(); 

console.log(l); // [Function: f4]
l(); // Res:- 50 
// As it finds value within local scope, it won't go and find in its parent/global scope