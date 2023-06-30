// Function Advance concepts:- Call
/* function f1(){
    console.log("Hello World!");
};

f1(); // Hello World!
f1.call(); // Hello World! */


let obj1 = {
    name: "virat",
    country: "india"
};

let obj2 = {
 name: "smith",
 country: "australia"
};

// Generalize a function
function printNameAndCountry(obj){
    // console.log(this); // 'this' refers to from where it is called Global object/lexical context
    // Prints 
    // console.log(`Name = ${obj.name}, Country = ${obj.country}`);
    console.log(`Name = ${this.name}, Country = ${this.country}`);
};
//? 1st 23 & 24th lines
// printNameAndCountry(obj1); // Name = virat, Country = india
// printNameAndCountry(obj2); // Name = smith, Country = australia
//? 2nd 25th line
printNameAndCountry(obj1); // Global things
printNameAndCountry(obj2); // Global things
printNameAndCountry.call(obj1); // Name = virat, Country = india
printNameAndCountry.call(obj2); // Name = smith, Country = australia

//
let obj3 = {
    name: "virat",
    country: "india"
};

let obj4 = {
 name: "smith",
 country: "australia"
};

// Generalize a function
function printNameAndCountry1(obj){
    console.log(this); // 'this' refers to from where it is called Global object/lexical context
    // Prints 
    // console.log(`Name = ${obj.name}, Country = ${obj.country}`);
};

printNameAndCountry1(obj3); // 'this' is called from Global scope, so I will print all global things
printNameAndCountry1.call(obj3); // {name:'virat', country = 'india'}
printNameAndCountry1(obj4); // 'this' is called from Global scope, so I will print all global things
printNameAndCountry1.call(obj4); // {name:'smith', country = 'australia'}

//
let obj5 = {
    name: "virat",
    country: "india"
};

let obj6 = {
 name: "smith",
 country: "australia"
};

function printNameAndCountry1(greet, x){
    console.log(`Name = ${this.name}, Country = ${this.country} and Greet = ${greet} ${x}`);
};

printNameAndCountry1(obj5); 
printNameAndCountry1.call(obj5, "Hi", "Welcome"); // {name:'virat', country = 'india' and Greet = 'Hi' 'Welcome}
printNameAndCountry1(obj6); // 
printNameAndCountry1.call(obj6, "Hello", "GoodBye"); // {name:'smith', country = 'australia' and Greet = 'Hello' 'GoodBye'}

