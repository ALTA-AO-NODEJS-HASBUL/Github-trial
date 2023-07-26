function findXYZ(A, B, C) {
  for (let x = 1; x <= 10000; x++) {
    for (let y = 1; y <= 10000; y++) {
      for (let z = 1; z <= 10000; z++) {
        if (x + y + z === A && x * y * z === B && x * x + y * y + z * z === C) {
          return [x, y, z];
        }
      }
    }
  }
  return null;
}

// Test cases
const input1 = [1, 2, 3];
console.log(findXYZ(...input1) || "No solution."); // Output: No solution.

const input2 = [6, 6, 14];
console.log(findXYZ(...input2).join(" ")); // Output: 1 2 3
