function singleNumber(nums: number[]): number {
  const map = new Set();

  for (const element of nums) {
    if (map.has(element)) {
      map.delete(element);
    } else {
      map.add(element);
    }
  }
  return [...map][0] as number;
}

function singleNumber(nums: number[]): number {
  let UNIQUE = 0;
  for (const element of nums) {
    UNIQUE ^= element;
  }
  return UNIQUE;
}
