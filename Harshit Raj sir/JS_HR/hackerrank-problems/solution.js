//? (3) min-maxSum
function miniMaxSum(arr) {
    arr.sort();
    let min = 0;
    let max = 0;
    for(let i = 0; i < arr.length-1; i++){
        min = min + arr[i];
    }
    for(let j = 1; j < arr.length; j++){
        max = max + arr[j];
    }
    console.log(min, max);
    //[OR]
    // let sortedArray = arr.sort((a, b) => a-b);
    // let minimum = sortedArray.slice(0, -1).reduce((a, b) => a+b);
    // let maximum = sortedArray.slice(1).reduce((a, b) => a+b);
    // console.log(minimum, maximum);
}
miniMaxSum([1,2,3,4,5]); // 10 14