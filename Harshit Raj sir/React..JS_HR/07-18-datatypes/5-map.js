const arr = [10, 20, 30, 40];

let newArr = arr.map((item, index) => {
    console.log(item, index); // 10 0 -> 20 1 -> 30 2 -> 40 3
    return item + 1 + index;
});
console.log(newArr); // [undefined, undefined, undefined, undefined]

// After adding return keyword
console.log(newArr); // [10+1+0, 20+1+1, 30+1+2, 40+1+3] ==> [11, 22, 33, 44]