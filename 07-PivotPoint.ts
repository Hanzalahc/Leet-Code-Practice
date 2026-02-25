function pivotIndex(nums: number[]): number {
  let leftNum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      rightSum += nums[j];
    }

    if (i === nums.length - 1) {
      if (0 === leftNum) {
        return i;
      } else {
        return -1;
      }
    }

    if (rightSum === leftNum) {
      return i;
    } else {
      leftNum += nums[i];
      rightSum = 0;
    }
  }
  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
console.log(pivotIndex([-1, -1, 0, 1, 1, 0]));
