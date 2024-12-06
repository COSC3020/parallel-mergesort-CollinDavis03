const assert = require('assert');
const { mergeSort } = require('./code.js');

// Helper function to generate random arrays
function generateRandomArray(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
}

// Test suite for parallel merge sort
async function TestPMS() {
  const numTests = 10; // Number of tests to run
  const maxLength = 100; // Maximum array length
  const testPromises = [];

  // Generate tests and run them
  for (let i = 0; i < numTests; i++) {
    const length = Math.floor(Math.random() * maxLength) + 1;

    // Generate a random array and its expected sorted version
    const randomArray = generateRandomArray(length);
    const expectedSortedArray = [...randomArray].sort((a, b) => a - b);

    // Push each test as a promise to testPromises array
    testPromises.push(
      mergeSort(randomArray).then((sortedArray) => {
        // Verify that the sorted array matches the expected sorted version
        assert.deepStrictEqual(
          sortedArray,
          expectedSortedArray,
          `Test failed on iteration ${i}`
        );
      })
    );
  }

  // Wait for all test promises to complete
  await Promise.all(testPromises);
  console.log('All tests passed.');
}

// Execute the test suite
TestPMS().catch((error) => console.error('Test failed:', error));
