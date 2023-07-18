const arr = [116, 190, 83, 46]; // 46,83,116,190

// Ascending Order
arr.sort((a,b) => {
    console.log(a,b);
    return a - b;
});
console.log(arr); //[116, 46, 83, 190]
console.log(arr); //[46, 83, 116, 190]

// UTF - 8 unicode character encoding format/method

// Descending Order
arr.sort((a,b) => {
    console.log(a,b);
    return b - a;
});
console.log(arr); // [190, 116, 83, 46]