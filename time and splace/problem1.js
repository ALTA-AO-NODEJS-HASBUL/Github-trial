function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  // Bilangan 2 dan 3 adalah bilangan prima
  if (n === 2 || n === 3) return true;

  // Bilangan genap (selain 2) bukan bilangan prima
  if (n % 2 === 0) return false;

  // Mengecek faktor pembagi dari 3 hingga akar n
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

// Contoh Pengujian
console.log(isPrime(1000000007)); // Output: true (Bilangan Prima)
console.log(isPrime(1500450271)); // Output: true (Bilangan Prima)
