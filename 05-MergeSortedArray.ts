// Solved using 3 pointers
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let combineIndex = m + n - 1;
  let mIndex = m - 1;
  let nIndex = n - 1;

  while (mIndex >= 0 && nIndex >= 0) {
    if (nums2[nIndex] > nums1[mIndex]) {
      nums1[combineIndex] = nums2[nIndex];
      combineIndex--;
      nIndex--;
    } else {
      nums1[combineIndex] = nums1[mIndex];
      mIndex--;
      combineIndex--;
    }
  }

  while (nIndex >= 0) {
    nums1[combineIndex] = nums2[nIndex];
    combineIndex--;
    nIndex--;
  }
}

merge([2, 0], 1, [1], 1);

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
