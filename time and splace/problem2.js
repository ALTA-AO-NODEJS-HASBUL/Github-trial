function findUniqueOccurrences(input) {
  const numCounts = {};

  // Hitung berapa kali masing-masing angka muncul dalam string input
  for (const char of input) {
    const num = Number(char);
    numCounts[num] = (numCounts[num] || 0) + 1;
  }

  // Temukan angka-angka yang hanya muncul satu kali
  const uniqueOccurrences = [];
  for (const num in numCounts) {
    if (numCounts[num] === 1) {
      uniqueOccurrences.push(Number(num));
    }
  }

  return uniqueOccurrences;
}

// Contoh Pengujian
console.log(findUniqueOccurrences("76523752")); // Output: [6, 3]
console.log(findUniqueOccurrences("1122")); // Output: []
