// Helper function to merge the two halves
function merge(array, low, middle, high, temp) {
  let leftIn = low;
  let rightIn = middle + 1;

  // Merge elements from both halves into temp array
  for (let n = low; n <= high; n++) {
    if (leftIn <= middle && (rightIn > high || array[leftIn] <= array[rightIn])) {
      temp[n] = array[leftIn];
      leftIn++;
    } else {
      temp[n] = array[rightIn];
      rightIn++;
    }
  }

  // Copy sorted elements from temp back to the original array
  for (let n = low; n <= high; n++) {
    array[n] = temp[n];
  }
}

// Helper function for insertion sort (used for small ranges)
function insertionSort(array, low, high) {
  for (let i = low + 1; i <= high; i++) {
    const key = array[i];
    let j = i - 1;
    while (j >= low && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
}

// Recursive parallel merge sort
async function ParallelMergeSort(array, low, high, temp) {
  // Use insertion sort for small ranges
  if (high - low <= 10) {
    insertionSort(array, low, high);
    return;
  }

  // Base Case: If the range contains 1 or fewer elements, it's already sorted
  if (low >= high) return;

  // Find midpoint
  const middle = Math.floor((low + high) / 2);

  // Recursive sort both halves in parallel
  await Promise.all([
    ParallelMergeSort(array, low, middle, temp), // Sort the left half
    ParallelMergeSort(array, middle + 1, high, temp), // Sort the right half
  ]);

  // Merge the sorted halves
  merge(array, low, middle, high, temp);
}

// Entry point for merge sort
async function mergeSort(array) {
  const temp = Array(array.length); // Initialize temp array
  await ParallelMergeSort(array, 0, array.length - 1, temp); // Start sorting process
  return array; // Return sorted array
}

module.exports = { mergeSort };
