// Constraints: -231 <= x <= 231 - 1

// not optimized solution
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  const strNum = x.toString();
  const strNum2 = x.toString().split("").reverse().join("");

  if (strNum === strNum2) {
    return true;
  } else {
    return false;
  }
};

// console.log(isPalindrome(101));

// Follow up: Could you solve it without converting the integer to a string?
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  let rev = 0;
  let left = x;

  while (left > 0) {
    let last = left % 10;
    left = Math.floor(left / 10);
    rev = rev * 10 + last;
    console.log(last, left, rev);
  }
  return x === rev;
};

console.log(isPalindrome(101));
