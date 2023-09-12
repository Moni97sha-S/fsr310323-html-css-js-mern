function mergesort(arr) {
  //! STEP 1: To write a recursion, we need to code BASE CASE.
  //TODO: let array = [10]; in this case
  if (arr.length <= 1) {
    return arr;
  }

  //? Divide the array into halves
  const middle = Math.floor(arr.length / 2);
  //* SLICE operator takes parameter as (Start, End);
  const leftUnsortArr = arr.slice(0, middle);
  //   const rightSubArr = arr.slice(middle, arr.length);
  const rightUnsortArr = arr.slice(middle); // We can skip END value too here.

  //! STEP 2: Recursion happens - Hypothesis for it
  let leftSorted = mergesort(leftUnsortArr);
  let rightSorted = mergesort(rightUnsortArr);

  //! Function Call & Catch it in a variable to return for STEP 3:
  let finalSortedArr = mergeTwoSortedArray(leftSorted, rightSorted);
  return finalSortedArr;
}

//! Input Array
let array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

// Final Array
let resultFinalMergeSortedArr = mergesort(array);
console.log(resultFinalMergeSortedArr);
/* OUTPUT:
  [
    0, 1, 2, 3, 4,
    5, 6, 7, 8, 9
  ]
*/

//! STEP 3: Merge Two Sorted Arrays into One Array
function mergeTwoSortedArray(arr1, arr2) {
  //* Intitialize 3 Pointers
  let i = 0,
    j = 0,
    k = 0;

  //* Empty Array
  let mergeSort = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergeSort[k] = arr1[i];
      i++;
      k++;
    } else {
      mergeSort[k] = arr2[j];
      j++;
      k++;
    }
  }

  //! Remaining elements of 'j'
  while (j < arr2.length) {
    mergeSort[k] = arr2[j];
    j++;
    k++;
  }
  //! Remaining elements of 'i'
  while (i < arr1.length) {
    mergeSort[k] = arr1[i];
    i++;
    k++;
  }
  return mergeSort;
}

// let x = mergeTwoSortedArray([5, 8, 15, 20, 30, 40], [3, 10, 12, 19]);
// console.log(x);
// Instead above 2 lines replace at line no 20 by function call.
