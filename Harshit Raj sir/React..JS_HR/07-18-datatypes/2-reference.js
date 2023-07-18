const obj = {
    name: "Moni"
}

const arr = [10, 20, 30, 40];
console.log(typeof arr); // object as array is kind of object
console.log(Array.isArray(arr)); //true
console.log(Array.isArray(obj)); //false

function f1(){
    console.log("Hello");
}
console.log(typeof f1); // function

