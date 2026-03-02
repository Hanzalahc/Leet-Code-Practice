// wrong conversion for large integers

// const plusOne = function (digits) {
//   const arrToStr = digits.join("");

//   let strToNum = Number(arrToStr) + 1;

//   return strToNum.toString().split("").map(Number);
// };
// console.log(plusOne([4, 3, 2, 1]));

// solved thru reverse loop
function plusOne(digits: number[]): number[] {
  if (digits.length === 1 && digits[0] === 9) {
    return [1, 0];
  }

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
}
