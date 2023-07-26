function calculateMean(array) {
  let sum = array.reduce((acc, curr) => acc + curr, 0);
  let mean = sum / array.length;
  return mean;
}

function calculateMedian(array) {
  let sortedArray = array.slice().sort((a, b) => a - b);
  let middleIndex = Math.floor(sortedArray.length / 2);

  if (sortedArray.length % 2 === 0) {
    let median = (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
    return median;
  } else {
    let median = sortedArray[middleIndex];
    return median;
  }
}

// Contoh penggunaan fungsi
let numbers = [1,2,3,4];
let mean = calculateMean(numbers);
console.log("Mean:", mean); 

let median = calculateMedian(numbers);
console.log("Median:", median);  
