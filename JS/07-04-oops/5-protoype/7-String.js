let s = "Harshit";

// Predefined function of string class
s.toLowerCase();
console.log(String); 

// On browser console, if we type String.
// It gives f String() { [native code] }

//function F1(){}

//console.log(F1.prototype); // {} -> Empty because F1's unnamed object has nothing

// How we put a method inside this F1.prototype like toUpperCase(), toString(), toLowerCase() etc.
F1.prototype.toMoni = function () {
    console.log("This is Monisha");
};

console.log(F1.prototype); // { toMoni: [Function (anonymous)] }


console.log(String.prototype); // In your node environment, it will not show up in the console.
// But in your browser, it will show up in the console. If we type String.prototype

// Now we register our own function inside String.prototype
let n = "Monisha";
String.prototype.isMythili = function () {
    console.log("Yes, Mythili is Monisha");
}
n.toUpperCase(); // Only Returns your string's upper case
console.log(n.toUpperCase()); // To print your string's upper case
n.toLowerCase(); // Only Returns your string's lower case
console.log(n.toLowerCase()); // To print your string's upper case
n.isMythili(); // This prints by logging string inside this function at console

// In Music Player App, we had a line.
// Array.prototype.indexOf
// using Array Literals
let arr = [10, 30, 40];
arr.indexOf(30); // directly calles using object 'arr'
// Actually we are accessing object 'arr' of array function here.
// OR using Array Constructor
function Array() {
}
let arr1 = new Array();