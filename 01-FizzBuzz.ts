// Constraints: 1 <= n <= 104

// My Own Solution - Accepted
// var fizzBuzz = function (n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     var curr = i + 1;
//     if (curr % 3 === 0 && curr % 5 === 0) {
//       arr.push("FizzBuzz");
//     } else if (curr % 3 === 0) {
//       arr.push("Fizz");
//     } else if (curr % 5 === 0) {
//       arr.push("Buzz");
//     } else {
//       const strNum = curr.toString();
//       arr.push(strNum);
//     }
//   }
//   return arr;
// };

function fizzBuzz(n: number): string[] {
  if (n === 1) {
    return ["1"];
  }

  let arr: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
}
