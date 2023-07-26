function pairWithTargetSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      // The current sum is less than the target, so we need to increase the sum.
      left++;
    } else {
      // The current sum is greater than the target, so we need to decrease the sum.
      right--;
    }
  }

  // If no pair is found, return an empty array.
  return [];
}

// Sample Test Cases
console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6)); // Output: [1, 3]
console.log(pairWithTargetSum([2, 5, 9, 11], 11)); // Output: [0, 2]
