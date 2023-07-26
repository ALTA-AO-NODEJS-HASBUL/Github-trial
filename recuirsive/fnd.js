function findLargestRecursive(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    const first = arr[0];
    const restMax = findLargestRecursive(arr.slice(1));
    return first > restMax ? first : restMax;
  }
}

// Test cases
const array1 = [1, 2, 3, 4, 5];
console.log("Output:", findLargestRecursive(array1)); // Output: 5

const array2 = [10, 20, 15, 30, 40, 25];
console.log("Output:", findLargestRecursive(array2)); // Output: 40
