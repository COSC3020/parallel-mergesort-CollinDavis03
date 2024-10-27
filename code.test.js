const assert = require('assert'); 
const { mergesort } = require('./code.js'); 

//Helper function generate random arrays 
//lengths and returns of the arrays 
function generateRandomArray(length) { 
  const array = []; 
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 100)); 
  }
  return array; 
}

//Test to test the functionality of the function
async function TestPMS() {
  const numTest = 10; 
  const maxLength = 100; 
  const testP = []; 
  
  //Generate test and run them
  for (let i = 0; i < numTests; i++) {
        const length = Math.floor(Math.random() * maxLength) + 1;
        
        // Generate a random array and an expected sorted version of it
        const randomArray = generateRandomArray(length);
        const expectedSortedArray = [...randomArray].sort((a, b) => a - b);

        // Push each test as a promise to testPromises array
        testPromises.push(
            mergesort(randomArray).then((sortedArray) => {
                // Verify that the sorted array matches the expected sorted version
                assert.deepEqual(sortedArray, expectedSortedArray, `Test failed on iteration ${i}`);
            })
        );
    }

    // Wait for all test promises to complete
    await Promise.all(testPromises);
    console.log("All tests passed.");
}

// Execute the test suite
testParallelMergeSort().catch((error) => console.error("Test failed:", error));
