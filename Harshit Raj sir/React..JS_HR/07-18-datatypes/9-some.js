const arr = [12, 20, -13, 49];

// Checks if array contains any -ve number

const result = arr.some((item) => {
    console.log(item);
    return item < 0;
    
});
console.log(result); // true as -13 found as atleast one -ve element, so it will not check other elements after that.

//*Every */
const arr1 = [-12, 20, -13, 49];

// Checks if array contains every/all should be -ve number

const res = arr.every((item) => {
    console.log(item);
    return item < 0;
    
});
console.log(res); // false
