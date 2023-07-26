function findMinimumCost(stones) {
  const n = stones.length;
  const dp = new Array(n).fill(0);

  // Base cases
  dp[0] = 0;
  dp[1] = Math.abs(stones[1] - stones[0]);

  // Fill the dp array
  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(
      dp[i - 1] + Math.abs(stones[i] - stones[i - 1]),
      dp[i - 2] + Math.abs(stones[i] - stones[i - 2])
    );
  }

  return dp[n - 1];
}

// Test cases
const input1 = [10, 30, 40, 20];
console.log(findMinimumCost(input1)); // Output: 30

const input2 = [30, 10, 60, 10, 60, 50];
console.log(findMinimumCost(input2)); // Output: 40
