// Constraints: 1 <= s.length <= 104  s consists of parentheses only '()[]{}'

const isValid = function (s) {
  if (s.length === 1) {
    return false;
  }

  const arr = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let element of s) {
    if (map[element]) {
      arr.push(map[element]);
    } else {
      const el = arr.pop();

      if (element !== el) {
        return false;
      }
    }
  }
  return arr.length === 0;
};

console.log(isValid("([)]"));
