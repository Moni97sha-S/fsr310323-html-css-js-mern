let s = "Monisha";

let arr = Array.from(s);
console.log(arr);

const obj = {
    a: 1, 
    b: 2, 
    c: 3, 
    d: 4
}

// const newArr = Array.from(obj);
const newArr = Array.from(Object.entries(obj));
const newArr1 = Array.from(Object.keys(obj));
const newArr2 = Array.from(Object.values(obj));
console.log(newArr);
console.log(newArr1);
console.log(newArr2);