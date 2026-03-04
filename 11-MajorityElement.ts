function majorityElement(nums: number[]): number {
  let map = new Map();
  const minElementLength = Math.ceil(nums.length / 2);

  for (const element of nums) {
    if (map.has(element)) {
      let count = map.get(element);
      map.set(element, ++count);
      continue;
    }

    map.set(element, 1);
  }
  for (const element of nums) {
    let count = map.get(element);

    if (count >= minElementLength) {
      return element;
    }
  }
  return 0;
}

console.log(majorityElement([3,2,3]));
