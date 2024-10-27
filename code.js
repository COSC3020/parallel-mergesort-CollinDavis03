const async = require('async'); 

//Helper function to merge the two halves
// Need array, low, middle, high, and temp elements. 
function merge(array, low, middle, high, temp) { 
  let LeftIn = low;
  let RightIn = middle + 1; 

  //Merge elements from both halves into Temp array
  for (let n = low; n <= high; n++) { 
    if (LeftIn <= mide && (RightIn > high || array[LeftIn] <= array[RightIn])) {
      temp[n] = array[LeftIn]; 
    } else {
      temp[n] = array[RightIn];
    }
  }

  //Copy sorted elements into Temp 
  for (let n = low; n <= high; n++) {
    array[n] = temp[n]; 
  } 
}

//Recursive parallel mergesort
//Need array, low, high, and temp elements.
async function ParallelMergeSort(array, low, high, temp) {
  //Base Case
  if (low >= high) return; 

  //Find Midpoint
  const middle = Math.floor((low + high) / 2); 
  
  // Recursive sort both halves into parallel
  await Promise.all ([
    ParallelMergeSort(array, low, high, temp); //Left?
    ParallelMergeSort(array, middle + 1, high, temp); //Right?
  ]);
  
  //merge sorted halves
  merge(array, low, middle, high, temp); 
}

//Entry point for mergesort
//need array and the returns
async function mergeSort(array) {
  const temp = Array(array.length); //Initialize temp array
  await ParallelMergeSort(array, 0, array.length - 1, temp); // Start sorting process
  return array; //return sorted array
} 

module.exports = { mergeSort }; 

