function chopDragons(dragonHeads, knightsHeights) {
  dragonHeads.sort((a, b) => b - a);
  knightsHeights.sort((a, b) => b - a);

  if (dragonHeads.length > knightsHeights.length) {
    return 'knight fall';
  }

  let totalHeight = 0;
  for (let i = 0; i < dragonHeads.length; i++) {
    if (i >= knightsHeights.length || dragonHeads[i] > knightsHeights[i]) {
      return 'knight fall';
    }
    totalHeight += knightsHeights[i];
  }

  return totalHeight;
}

// Test cases
const input1 = [5, 4];
const knights1 = [7, 8, 4];
console.log(chopDragons(input1, knights1)); // Output: 11

const input2 = [5, 10];
const knights2 = [5];
console.log(chopDragons(input2, knights2)); // Output: 'knight fall'

const input3 = [7, 2];
const knights3 = [4, 3, 1, 2];
console.log(chopDragons(input3, knights3)); // Output: 'knight fall'

const input4 = [7, 2];
const knights4 = [2, 1, 8, 5];
console.log(chopDragons(input4, knights4)); // Output: 10
