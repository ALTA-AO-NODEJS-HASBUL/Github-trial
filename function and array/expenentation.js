function power(x, n) {
  // Base case: x^0 = 1
  if (n === 0) {
    return 1;
  }
  // Recursive case: x^n = x * x^(n-1)
  else {
    return x * power(x, n - 1);
  }
}

// Test case
const x = 2;
const n = 3;
const result = power(x, n);
console.log(result); // Output: 8
