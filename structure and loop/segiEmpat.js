// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

// Function to get the sum of prime numbers in the grid
function sumPrimesInGrid(grid) {
  let sum = 0;
  for (let row of grid) {
    for (let num of row) {
      if (isPrime(num)) {
        sum += num;
      }
    }
  }
  return sum;
}

// Function to generate the grid with prime numbers
function generateGrid(high, wide, start) {
  let grid = [];
  let currentNumber = start;

  for (let i = 0; i < high; i++) {
    let row = [];
    for (let j = 0; j < wide; j++) {
      while (!isPrime(currentNumber)) {
        currentNumber++;
      }
      row.push(currentNumber);
      currentNumber++;
    }
    grid.push(row);
  }

  return grid;
}

// Example usage
const high = 3; // Height of the grid
const wide = 4; // Width of the grid
const start = 10; // Start number for prime search

const grid = generateGrid(high, wide, start);
console.log("Generated Grid:");
console.log(grid);

const sumOfPrimes = sumPrimesInGrid(grid);
console.log("Sum of prime numbers in the grid:", sumOfPrimes);
