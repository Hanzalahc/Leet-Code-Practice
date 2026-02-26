function containsDuplicate(nums: number[]): boolean {
  let map = new Map();

  for (const element of nums) {
    if (map.has(element)) {
      return true;
    }

    map.set(element, element);
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 2, 3, 1]));
