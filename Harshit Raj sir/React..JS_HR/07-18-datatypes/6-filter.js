const arr = [11, 20, 33, 46];
const newArr = arr.filter((item, index) => {
    console.log(item);
});

console.log(newArr); // [] if we not return anything

const newArr1 = arr.filter((item1, index) => {
    if(item1%2 != 0)

    return item1;
});

console.log(newArr1); // [] if we not return anything