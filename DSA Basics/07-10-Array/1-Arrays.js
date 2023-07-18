// Length
let arr1 = [10, 20, 30, 40, 50];
let len = arr1.length; // Old length
console.log(len);

// Push
arr1.push(60); // Add element at last
len = arr1.length; // New length updated
console.log(arr1);
console.log(arr1[4]);
console.log(arr1[len-1]); // before 50 now after updation 60
arr1.push("Monisha", true, {name: "Moni"}, [4, 44, 444]);
len = arr1.length;

// Unshift
arr1.unshift(0); // Adds element at first position
console.log(arr1);

//Pop
let x = arr1.pop(); // Deletes last item
console.log(x);

//Shift
arr1.shift(); // Delete first item
console.log(arr1);

//🚨splice - To remove from middle of array using indexing & splice method modifies in original array. It modifies original array and results in new array.
let indexToDelete = 3 //40
// 2nd parameter is count of how many numbers we want to remove
arr1.splice(indexToDelete, 3); // arr1 = [10, 20, 30]
arr1.splice(0, len-1); // []
console.log(arr1);

// for loop
for(let i = 0; i < len-1; i++){
    console.log(arr1[i]);
}

// If we don't know index of 40 in array, how we should delete?
for(let i = 0; i < len-1; i++){
    if (arr1[i] == 40) {
        // let indexToDelete
        console.log("Yes, we found 40 on Index:", i);
        arr1.splice(i, 1);
    }
}
console.log(arr1);