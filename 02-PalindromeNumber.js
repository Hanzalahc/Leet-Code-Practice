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

console.log(isPalindrome(101));

// Follow up: Could you solve it without converting the integer to a string?
