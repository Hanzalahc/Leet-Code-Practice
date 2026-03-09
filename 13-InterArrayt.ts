function intersect(nums1: number[], nums2: number[]): number[] {
  let num1Map = new Map();
  let res = [];

  for (const element of nums1) {
    let count = num1Map.get(element);

    if (count == undefined) {
      num1Map.set(element, 1);
    } else {
      num1Map.set(element, ++count);
    }
  }

  for (const element of nums2) {
    if (num1Map.has(element)) {
      let count = num1Map.get(element) | 0;
      if (count != 0) {
        num1Map.set(element, --count);
        res.push(element);
      } else {
        continue;
      }
    }
  }
  return res;
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
