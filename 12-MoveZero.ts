function moveZeroes(nums: number[]): void {
  let index = 0;

  for (const element of nums) {
    if (element !== 0) {
      nums[index] = element;
      index++;
    }
  }

  while (index < nums.length) {
    nums[index] = 0;
    index++;
  }
}

moveZeroes([0, 1, 0, 3, 12]);
