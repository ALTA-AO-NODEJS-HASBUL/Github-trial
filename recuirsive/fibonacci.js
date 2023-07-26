function fibonacciRecursive(n) {
  if (n <= 0) {
    return "Invalid input. n should be a positive integer.";
  } else if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  } 
}


// Contoh penggunaan
const n = 8; // Ganti dengan angka Fibonacci yang ingin Anda cari
const fibonacciNumber = fibonacciRecursive(n);
console.log(`Bilangan Fibonacci ke-${n} adalah: ${fibonacciNumber}`);
