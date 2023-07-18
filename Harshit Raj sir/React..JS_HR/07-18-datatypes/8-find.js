//*Find*

const arr = [11, 20, 33, 46]

// I want first even no
const firstEven = arr.find((item) => {
    return item % 2 == 0;
});
console.log(firstEven); // 20
// It returns -1, if we don't have any even number

//*Find*
const firstEvenInd = arr.findIndex((item) => {
    return item % 2 == 0;
});
console.log(firstEvenInd); // 1
