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

function primeX(n) {
  let primes = [];
  let num = 2;

  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }

  return primes[primes.length - 1];
}

console.log(primeX(1)); 
console.log(primeX(5)); 
